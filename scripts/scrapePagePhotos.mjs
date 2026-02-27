#!/usr/bin/env node

import path from "node:path";
import { promises as fs } from "node:fs";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
  ".bmp",
  ".tif",
  ".tiff",
  ".svg"
]);

const CONTENT_TYPE_TO_EXT = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
  ["image/gif", ".gif"],
  ["image/avif", ".avif"],
  ["image/bmp", ".bmp"],
  ["image/tiff", ".tiff"],
  ["image/svg+xml", ".svg"]
]);

function printUsage() {
  console.log("Usage:");
  console.log("  PHOTOS_DIR=./photos node scripts/scrapePagePhotos.mjs --url <page_url> --day <day_id>");
  console.log("");
  console.log("Flags:");
  console.log("  --url, -u   Source page URL");
  console.log("  --day, -d   Day id (folder name under PHOTOS_DIR)");
  console.log("  --help, -h  Show usage");
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const parsed = { url: "", day: "", help: false };

  for (let i = 0; i < args.length; i += 1) {
    const token = args[i];
    if (token === "--help" || token === "-h") {
      parsed.help = true;
      continue;
    }
    if (token === "--url" || token === "-u") {
      parsed.url = args[i + 1] ?? "";
      i += 1;
      continue;
    }
    if (token === "--day" || token === "-d") {
      parsed.day = args[i + 1] ?? "";
      i += 1;
      continue;
    }
  }

  return parsed;
}

function sanitizeSegment(input) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractAttribute(tag, attributeName) {
  const pattern = new RegExp(
    `${attributeName}\\s*=\\s*(?:"([^"]+)"|'([^']+)'|([^\\s>]+))`,
    "i"
  );
  const match = pattern.exec(tag);
  if (!match) {
    return null;
  }
  return match[1] ?? match[2] ?? match[3] ?? null;
}

function parseSrcset(srcset) {
  return srcset
    .split(",")
    .map((candidate) => candidate.trim())
    .filter(Boolean)
    .map((candidate) => candidate.split(/\s+/)[0])
    .filter(Boolean);
}

function extractImageCandidates(html) {
  const candidates = new Set();
  const imgTagRegex = /<img\b[^>]*>/gi;
  const imgTags = html.match(imgTagRegex) ?? [];

  for (const tag of imgTags) {
    const directAttrs = [
      "src",
      "data-src",
      "data-lazy-src",
      "data-original",
      "data-image",
      "data-zoom-image"
    ];
    for (const attr of directAttrs) {
      const value = extractAttribute(tag, attr);
      if (value) {
        candidates.add(value);
      }
    }

    const srcsetAttrs = ["srcset", "data-srcset"];
    for (const attr of srcsetAttrs) {
      const value = extractAttribute(tag, attr);
      if (value) {
        for (const src of parseSrcset(value)) {
          candidates.add(src);
        }
      }
    }
  }

  const metaRegex =
    /<meta\b[^>]*?(?:property|name)\s*=\s*(?:"(?:og:image|twitter:image)"|'(?:og:image|twitter:image)')[^>]*>/gi;
  const metaTags = html.match(metaRegex) ?? [];
  for (const tag of metaTags) {
    const content = extractAttribute(tag, "content");
    if (content) {
      candidates.add(content);
    }
  }

  return [...candidates];
}

function resolveAbsoluteImageUrls(candidates, pageUrl) {
  const out = new Set();
  for (const candidate of candidates) {
    if (candidate.startsWith("data:")) {
      continue;
    }
    try {
      const absolute = new URL(candidate, pageUrl);
      if (absolute.protocol === "http:" || absolute.protocol === "https:") {
        out.add(absolute.toString());
      }
    } catch {
      // Skip malformed URLs.
    }
  }
  return [...out];
}

function extensionFromUrl(imageUrl) {
  try {
    const pathname = new URL(imageUrl).pathname;
    const ext = path.extname(pathname).toLowerCase();
    if (IMAGE_EXTENSIONS.has(ext)) {
      return ext;
    }
  } catch {
    return null;
  }
  return null;
}

function extensionFromContentType(contentType) {
  if (!contentType) {
    return null;
  }
  const normalized = contentType.toLowerCase().split(";")[0]?.trim();
  if (!normalized) {
    return null;
  }
  return CONTENT_TYPE_TO_EXT.get(normalized) ?? null;
}

function fileStemFromUrl(imageUrl) {
  try {
    const pathname = new URL(imageUrl).pathname;
    const raw = path.basename(pathname, path.extname(pathname));
    const stem = sanitizeSegment(raw || "image");
    return stem || "image";
  } catch {
    return "image";
  }
}

async function downloadImage(imageUrl, index, targetDir) {
  const response = await fetch(imageUrl, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; trips-photo-scraper/1.0)"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const contentType = response.headers.get("content-type");
  const ext =
    extensionFromUrl(imageUrl) ??
    extensionFromContentType(contentType) ??
    ".jpg";
  const stem = fileStemFromUrl(imageUrl).slice(0, 72);
  const filename = `${String(index + 1).padStart(3, "0")}-${stem}${ext}`;
  const filePath = path.join(targetDir, filename);
  const bytes = await response.arrayBuffer();
  await fs.writeFile(filePath, Buffer.from(bytes));

  return filePath;
}

async function main() {
  const { url, day, help } = parseArgs(process.argv);

  if (help) {
    printUsage();
    return;
  }

  if (!url || !day) {
    printUsage();
    throw new Error("Missing required arguments: --url and --day.");
  }

  const photosRoot = process.env.PHOTOS_DIR;
  if (!photosRoot) {
    throw new Error("Missing PHOTOS_DIR environment variable.");
  }

  const daySegment = sanitizeSegment(day);
  if (!daySegment) {
    throw new Error("Day id must contain at least one alphanumeric character.");
  }

  const targetDir = path.join(photosRoot, daySegment);
  await fs.mkdir(targetDir, { recursive: true });

  const pageResponse = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; trips-photo-scraper/1.0)"
    }
  });

  if (!pageResponse.ok) {
    throw new Error(`Failed to fetch page ${url}. HTTP ${pageResponse.status}.`);
  }

  const html = await pageResponse.text();
  const candidates = extractImageCandidates(html);
  const imageUrls = resolveAbsoluteImageUrls(candidates, url);

  if (imageUrls.length === 0) {
    console.log(`No image URLs found on ${url}`);
    return;
  }

  console.log(`Found ${imageUrls.length} image URLs. Downloading to ${targetDir}`);

  let successCount = 0;
  for (let i = 0; i < imageUrls.length; i += 1) {
    const imageUrl = imageUrls[i];
    try {
      const savedPath = await downloadImage(imageUrl, i, targetDir);
      successCount += 1;
      console.log(`Saved: ${savedPath}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.warn(`Skipped ${imageUrl}: ${message}`);
    }
  }

  console.log(`Done. Saved ${successCount}/${imageUrls.length} images to ${targetDir}`);
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Error: ${message}`);
  process.exitCode = 1;
});
