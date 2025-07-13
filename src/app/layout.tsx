import Container from '@/components/layout/Container'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import NotificationBar from '@/components/NotificationBar'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Luna - Ecommerce',
  description: 'Simple product page using Next.js features with TailwindCSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <NotificationBar />
        <Container>
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  )
}
