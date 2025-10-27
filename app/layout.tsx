import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Acebyte Technology - AI-Powered Solutions',
  description: 'Transform your business with AI-powered solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

