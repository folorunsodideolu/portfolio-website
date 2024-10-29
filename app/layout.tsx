import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const amble = localFont({
  src: [
    {
      path: "./fonts/Amble-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Amble-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Amble-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

const questa = localFont({
  src: "./fonts/2-Questa_Sans_Regular.otf",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Folorunso Dideolu",
  description: "Pastel artist in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${amble.className} ${questa.className}`}>
      <body
        className="min-h-screen overflow-x-hidden m-0 p-0 flex flex-col bg-white font-amble"
        suppressHydrationWarning={true}
      >
        <Nav />
        <main className="flex-grow-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
