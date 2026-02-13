import type { Metadata } from "next";

import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: "Peru Family Trip Plan",
  description: "Visual 14-day Peru itinerary with phases, timeline, and curated photos."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-linen font-body text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
