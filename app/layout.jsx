import { draftMode } from "next/headers";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity/visual-editing";

export const metadata = {
  title: "Sanity.io + Next.js Blog",
  description: "Questa è la descrizione per il blog con Sanity.io + Next.js",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
        {(await draftMode()).isEnabled && (
          <VisualEditing />
        )}
        <SanityLive />
      </body>
    </html>
  );
}