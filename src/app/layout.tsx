import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const timesNewRoman = localFont({
  src: "../../public/font/Times New Roman MT Condensed Regular.otf",
  variable: "--font-times",
});

export const metadata: Metadata = {
  title: "Tamcha",
  description: "Tamcha - Premium Tea and Coffee",
  icons: {
    icon: [{ url: "/Tamcha.svg", type: "image/svg+xml" }],
    shortcut: "/Tamcha.svg",
    apple: "/Tamcha.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${timesNewRoman.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
