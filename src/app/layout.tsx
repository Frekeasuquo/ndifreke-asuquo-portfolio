import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ndifreke Asuquo - Full-stack Engineer",
  description: 'Ndifreke Asuquo — Full-Stack Engineer building reliable web systems with React, Next.js, Node.js and cloud technologies.',
  keywords: ['Full-Stack Engineer', 'Software Engineer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'Isle of Man'],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
