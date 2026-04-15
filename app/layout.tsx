import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nobelenvironmentacademy.edu.np'),
  verification: {
    google: "-Tpbor083mZ32WeUusb6pJFswmlgZNM10QMllkyWY4A",
  },
  title: {
    default: 'Nobel Environment Academy | Tilottama-15, Kotihawa, Nepal',
    template: '%s | Nobel Environment Academy'
  },
  description:
    'Montessori and secondary school in Kotihawa, Rupandehi, Nepal. Quality education from pre-school to Grade 10. NEB affiliated school established in 2068 B.S.',
  keywords: ['Nobel Environment Academy', 'school in Kotihawa', 'Rupandehi school', 'Montessori Nepal', 'secondary school Nepal', 'NEB affiliated school', 'Tilottama school', 'best school in Rupandehi'],
  authors: [{ name: 'Nobel Environment Academy' }],
  creator: 'Nobel Environment Academy',
  publisher: 'Nobel Environment Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nobelenvironmentacademy.edu.np',
    siteName: 'Nobel Environment Academy',
    title: 'Nobel Environment Academy | Quality Education in Kotihawa',
    description: 'Montessori and secondary school offering quality education from pre-school to Grade 10 in Kotihawa, Rupandehi, Nepal.',
    images: [
      {
        url: '/images/homea.jpg',
        width: 1200,
        height: 630,
        alt: 'Nobel Environment Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nobel Environment Academy',
    description: 'Quality education from Montessori to Grade 10 in Kotihawa, Nepal',
    images: ['/images/homea.jpg'],
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
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Nobel Environment Academy',
    alternateName: 'Nobel Academy',
    url: 'https://nobelenvironmentacademy.edu.np',
    logo: 'https://nobelenvironmentacademy.edu.np/logo.png',
    description: 'Montessori and secondary school in Kotihawa, Rupandehi, Nepal offering quality education from pre-school to Grade 10.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tilottama-15, Kotihawa',
      addressLocality: 'Rupandehi',
      addressRegion: 'Lumbini Province',
      addressCountry: 'NP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+977-71-514220',
      contactType: 'customer service',
      availableLanguage: ['en', 'ne'],
    },
    sameAs: [
      'https://www.facebook.com/nobelacademy',
    ],
    foundingDate: '2011',
    founder: {
      '@type': 'Person',
      name: 'Nobel Environment Academy Founders',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
