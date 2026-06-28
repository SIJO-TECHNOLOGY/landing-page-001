import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { BRAND } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const TITLE = `${BRAND.full} — AI Systems Engineering & Intelligent Automation`;
const DESCRIPTION =
  "AceByte engineers production-ready intelligent systems that automate complex workflows, optimize operational efficiency, and create measurable business value across your enterprise environment.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.acebyte-technology.com"),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: BRAND.full,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: BRAND.full,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#0b1220",
  colorScheme: "dark" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="grain min-h-full bg-bg text-text">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
