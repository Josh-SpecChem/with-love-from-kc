import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Made With Love KC - Handmade Kansas City Products',
  description: 'Discover unique handmade products celebrating Kansas City culture. From KC skyline hoodies to custom Royals gear, every item is made with love in KC.',
  keywords: [
    'Kansas City', 
    'KC products', 
    'handmade', 
    'KC merchandise', 
    'Kansas City hoodies', 
    'KC mugs', 
    'custom KC gear', 
    'local business KC',
    'KC pride',
    'Kansas City artists'
  ],
  authors: [{ name: 'Made With Love KC' }],
  creator: 'Made With Love KC',
  publisher: 'Made With Love KC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://madewithlovekc.com',
    title: 'Made With Love KC - Handmade Kansas City Products',
    description: 'Discover unique handmade products celebrating Kansas City culture. Every item is made with love in KC.',
    siteName: 'Made With Love KC',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Made With Love KC - Kansas City Handmade Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Made With Love KC - Handmade Kansas City Products',
    description: 'Discover unique handmade products celebrating Kansas City culture. Every item is made with love in KC.',
    images: ['/og-image.jpg'],
    creator: '@madewithlovekc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
