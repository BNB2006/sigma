import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sigma",
  description: "A modern collaborative design tool with real-time editing capabilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-primary-background text-primary-text antialiased`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
