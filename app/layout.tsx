import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mads Hatter | AI Resume Reviewer",
  description: "Get your resume reviewed like a top recruiter would."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
