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

const TITLE = `${BRAND.full} — Le cabinet qui pense à vous`;
const DESCRIPTION =
  "SIJO est un cabinet de conseil en IT, pure player technologique et digital en banque et finance. Nous accompagnons nos clients du CAC 40 dans la réalisation de leurs projets techniques, et nos consultants dans leurs projets de carrière.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sijo.fr"),
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
  themeColor: "#0c1228",
  colorScheme: "dark" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="grain min-h-full bg-bg text-text">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
