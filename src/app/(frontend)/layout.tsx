import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import React from 'react'
import './styles.css'
import { Bebas_Neue, Archivo, Space_Mono } from 'next/font/google'

const SITE_URL = 'https://moflescartagena.com'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

const TITLE = 'Mofles Cartagena · Taller de mofles en Cartagena'
const DESCRIPTION =
  'Taller de mofles en Cartagena. Silenciadores, flexibles, catalizadores, empaques e instalación de tubería. Diagnóstico gratuito y trabajo garantizado.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Mofles Cartagena',
  },
  description: DESCRIPTION,
  keywords: [
    'mofles cartagena',
    'taller de mofles cartagena',
    'silenciadores cartagena',
    'catalizadores cartagena',
    'flexibles de escape',
    'reparación de mofles',
    'diagnóstico de escape gratis',
    'tubería de escape cartagena',
  ],
  authors: [{ name: 'Mofles Cartagena', url: SITE_URL }],
  creator: 'Mofles Cartagena',
  publisher: 'Mofles Cartagena',
  category: 'Automotive',
  applicationName: 'Mofles Cartagena',
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SITE_URL,
    siteName: 'Mofles Cartagena',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/images/storefront.webp',
        width: 1080,
        height: 920,
        alt: 'Fachada del taller Mofles Cartagena con puerta amarilla enrollable',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/storefront.webp'],
  },
  icons: {
    icon: [
      { url: '/images/logo.webp', type: 'image/webp', sizes: '512x512' },
    ],
    shortcut: [{ url: '/images/logo.webp', type: 'image/webp' }],
    apple: { url: '/images/logo.webp', type: 'image/webp', sizes: '180x180' },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F2B705' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="es-CO"
      className={`${bebasNeue.variable} ${archivo.variable} ${spaceMono.variable} bg-cartagena-sand`}
    >
      <body className="font-archivo antialiased">
        {children}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          strategy="afterInteractive"
          data-key="J9qSM46J52XryivgtbC+TQ"
        />
      </body>
    </html>
  )
}
