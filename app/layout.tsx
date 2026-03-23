import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://madshatterrecruiting.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MadsHatter.com - AI Resume Review tool",
  description: "MadsHatter.com - AI Resume Review tool",
  openGraph: {
    title: "MadsHatter.com - AI Resume Review tool",
    description: "MadsHatter.com - AI Resume Review tool",
    images: [
      {
        url: "/opengraph-image"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "MadsHatter.com - AI Resume Review tool",
    description: "MadsHatter.com - AI Resume Review tool",
    images: ["/twitter-image"]
  },
  icons: {
    icon: "/mads-hatter-mark.svg",
    shortcut: "/mads-hatter-mark.svg",
    apple: "/mads-hatter-mark.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
