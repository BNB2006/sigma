import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ['400', '600', '700']
});


export const metadata: Metadata = {
  title: "Sigma",
  description: "A minimalastic Figma tool uisng Fabric.js and Liveblocks for real-time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${workSans.variable} bg-gray-400 antialiased`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
