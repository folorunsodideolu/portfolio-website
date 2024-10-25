import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import clsx from "clsx";

const questaSans = localFont({
  src: "./fonts/2-Questa_Sans_Regular.otf",
  variable: "--font-questa-sans",
  weight: "100 900",
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
    <html lang="en">
      <body
        className={clsx(
          questaSans.variable,
          "min-h-screen overflow-x-hidden m-0 p-0 flex flex-col bg-white font-sans"
        )}
        suppressHydrationWarning={true}
      >
        <Nav />
        <main className="flex-grow-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
