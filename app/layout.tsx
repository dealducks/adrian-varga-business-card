import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adrián Varga | Real Estate Bratislava",
  description: "Profesionálne realitné služby v Bratislave. Nájdite váš vysnívaný domov s odborníkom na nehnuteľnosti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${josefinSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
