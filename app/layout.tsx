import type { Metadata } from 'next'
import { Providers } from './providers'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  // weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

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
    <html
      lang='de'
      className={outfit.className}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
