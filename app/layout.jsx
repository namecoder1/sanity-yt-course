import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";

export const metadata = {
  title: "Sanity.io + Next.js Blog",
  description: "Questa è la descrizione per il blog con Sanity.io + Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}