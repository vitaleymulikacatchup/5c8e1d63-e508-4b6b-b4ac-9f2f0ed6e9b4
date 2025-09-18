import type { Metadata } from "next";
import { Inter_Tight, Poppins } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "MemCoin X",
  description: "Deliver a clean, single-page landing with core memecoin information and clear CTAs to guide users to purchase steps."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${poppins.variable} antialiased`}
        style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #111827 60%, #0B0F1A 100%)" }}>
        {children}
      </body>
    </html>
  );
}