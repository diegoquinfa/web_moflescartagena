import React from 'react'
import './styles.css'
import { Bebas_Neue, Archivo, Space_Mono } from 'next/font/google'

import { Metadata, Viewport } from 'next'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'Mofles Cartagena | Silenciadores, Flexibles, Catalizadores y Empaques',
  description:
    'Taller especializado en sistemas de escape en Cartagena. Silenciadores, pre silenciadores, flexibles, catalizadores, empaques, instalación de tubería de escape y diagnóstico gratuito.',
}

export const viewport: Viewport = {
  themeColor: '#F2B705',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${archivo.variable} ${spaceMono.variable} bg-cartagena-sand`}
    >
      <body className="font-archivo antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
