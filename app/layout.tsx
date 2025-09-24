import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react" // исправил импорт Suspense из React вместо next/navigation
import "./globals.css" // изменил импорт с .css на .scss

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "АВТО З США, КОРЕЇ, КИТАЮ ТА ЄВРОПИ | JustDoCar",
  description:
    "Підбір, доставка, розмитнення, ремонт автомобілів під ключ! Понад 6 років досвіду, 2000+ задоволених клієнтів, 3000+ придбаних авто.",
  keywords: "авто з США, авто з Кореї, авто з Китаю, авто з Європи, доставка авто, розмитнення авто, підбір авто",
  openGraph: {
    title: "АВТО З США, КОРЕЇ, КИТАЮ ТА ЄВРОПИ | JustDoCar",
    description: "Підбір, доставка, розмитнення, ремонт автомобілів під ключ!",
    type: "website",
    locale: "uk_UA",
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://justdocar.com.ua/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body className={`font-sans ${montserrat.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
