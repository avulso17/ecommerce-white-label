import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'E-commerce MVP',
  description: 'Simple product page using Next.js features with TailwindCSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable}`}>
        <Navbar />
        <Container>{children}</Container>
      </body>
    </html>
  )
}
