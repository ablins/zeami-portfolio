import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display, Epilogue } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
})

export const metadata: Metadata = {
  title: 'Zeami Criações — Transformando Sonhos em Matéria',
  description:
    'Estúdio criativo especializado em projetos 3D, props artesanais e criações visuais. Transformamos sonhos em matéria com arte manual e praticidade moderna.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${playfair.variable} ${epilogue.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
