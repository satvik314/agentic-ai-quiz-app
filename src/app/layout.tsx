import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic AI Quizzes — Ocean Edition",
  description:
    "Test your knowledge across five core concepts of agentic AI: autonomy, tool use, memory, planning, and multi-agent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="sticky top-0 z-50 glass">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="text-2xl">🌊</span>
              <span className="text-lg tracking-tight text-ocean-50">
                Agentic AI Quizzes
              </span>
            </Link>
            <Link
              href="/"
              className="rounded-full border border-ocean-600/60 bg-ocean-800/50 px-4 py-1.5 text-sm text-ocean-100 transition hover:bg-ocean-700/60"
            >
              All Quizzes
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>
        <footer className="mt-16 border-t border-ocean-800/60 py-8 text-center text-sm text-ocean-300/70">
          Dive deep into agentic AI · Built with Next.js
        </footer>
      </body>
    </html>
  );
}
