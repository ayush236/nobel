import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    verification: {
    google: "-Tpbor083mZ32WeUusb6pJFswmlgZNM10QMllkyWY4A",
  },
  title: 'Nobel Environment Academy | Tilottama-15, Kotihawa, Nepal',
  description:
    'Montessori and secondary school in Kotihawa, Rupandehi, Nepal. Quality education from pre-school to Grade 10.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
