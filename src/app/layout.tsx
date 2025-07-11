import Container from '@/components/layout/Container'
import Navbar from '@/components/layout/Navbar'
import NotificationBar from '@/components/NotificationBar'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Luna - E-commerce',
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
        <NotificationBar />
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  )
}
