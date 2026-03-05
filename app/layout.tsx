import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MadsHatter.com - AI Resume Review tool",
  description: "MadsHatter.com - AI Resume Review tool",
  openGraph: {
    title: "MadsHatter.com - AI Resume Review tool",
    description: "MadsHatter.com - AI Resume Review tool"
  },
  twitter: {
    card: "summary",
    title: "MadsHatter.com - AI Resume Review tool",
    description: "MadsHatter.com - AI Resume Review tool"
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
