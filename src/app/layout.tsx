import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peiwen Portfolio",
  description: "Personal multimedia portfolio by Peiwen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} bg-[#d2b2a1] text-[#d2b2a1] font-mono flex items-center justify-center min-h-screen p-4`}
      >
        <div className="w-[90%] bg-white rounded-2xl shadow-2xl border border-[#2c2205] p-10 m-6">
          {/* Optional: Static Title Bar */}
          <header className="w-full flex items-center justify-between px-6 py-4 mb-8  rounded-xl">
            {/* Left: Portfolio Title */}
            <h1 className="text-2xl font-bold tracking-widest text-[#2c2205] font-mono">
              PORTFOLIO
            </h1>

            {/* Right: Nav Links */}
            <nav className="flex gap-8 text-[#2c2205] text-base font-medium font-mono pr-2">
              <span className="cursor-pointer hover:underline">Experience</span>
              <span className="cursor-pointer hover:underline">Projects</span>
              <span className="cursor-pointer hover:underline">Contact</span>
            </nav>
          </header>

          {/* Main content container (all page sections) */}
          <main className="space-y-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
