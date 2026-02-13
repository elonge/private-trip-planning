# Peru Trip Visualizer

Editorial-style Next.js web app that renders the 14-day Peru plan from `peru_plan1.txt` as a visual timeline with a route map and curated location photos.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Generate Daily Highlights JSON

Use OpenAI to enrich each itinerary day with 3 highlights and photo suggestions:

```bash
OPENAI_API_KEY=your_key_here npm run generate:day-insights
```

Optional arguments:

```bash
OPENAI_API_KEY=your_key_here npm run generate:day-insights -- --plan peruTrip --out src/data/generated/peruTrip-day-insights.json
```

Defaults:
- `--plan peruTrip`
- `--out src/data/generated/peruTrip-day-insights.json`
- `OPENAI_MODEL` falls back to `gpt-4.1-mini`

## Project Structure

- `src/app/page.tsx`: main itinerary page
- `src/components/Hero.tsx`: full-bleed intro section
- `src/components/PeruRouteMap.tsx`: interactive OpenStreetMap route map
- `src/components/PhaseSection.tsx`: per-phase timeline section
- `src/components/DayCard.tsx`: visual day card with travel mode icon and notes
- `src/data/peruTrip.ts`: typed 14-day itinerary data with direct `heroPhotoUrl` and `photoUrl` fields
- `src/types/trip.ts`: public trip and photo interfaces

## Notes

- The app expects exactly 14 sequential days in `src/data/peruTrip.ts`; it throws at startup if data is invalid.
- Remote image hosts are configured in `next.config.ts` for `images.unsplash.com` and `upload.wikimedia.org`.
