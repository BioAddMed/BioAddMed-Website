import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "../components/header";
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
  title: "BioAddMed",
  description: "BioAddMed to koło naukowe działające na Wydziale Mechanicznym Politechniki Wrocławskiej zajmujące się drukiem 3D w medycynie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
