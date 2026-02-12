import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamad Khawaja | Principal Engineer",
  description:
    "Principal Engineer specializing in cloud infrastructure, AI systems, and engineering leadership. 8+ years building things that matter at enterprise scale.",
  openGraph: {
    title: "Hamad Khawaja | Principal Engineer",
    description:
      "Principal Engineer specializing in cloud infrastructure, AI systems, and engineering leadership.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased scanline-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
