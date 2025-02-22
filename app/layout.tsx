import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Benjamins Counter App',
  description: 'Einfache Counter App mit HeroUI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='de'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
