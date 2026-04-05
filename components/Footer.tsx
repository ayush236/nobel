import React, { FC } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react'

interface FooterLink {
  label: string
  href: string
}

const Footer: FC = () => {
  const quickLinks: FooterLink[] = [
    { label: 'About Us', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Admissions', href: '/contact' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="bg-[#0f3d1c] text-white">
      <div className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="h-20 w-20 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-lg font-bold text-white">N</span>
              </div>
            </div>
            <p className="text-lg font-semibold">Nobel Academy</p>
            <p className="text-sm leading-7 text-green-100">
              Helping students grow into leaders of today and tomorrow.
            </p>

            <div className="space-y-3">
              <p className="text-base font-semibold">Follow Us</p>
              <div className="flex items-center gap-3">
                <Link href="#" className="rounded-full bg-white/20 p-3 transition hover:bg-white/30">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.2V12h2.2V9.8c0-2.18 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.15h-1.1c-1.08 0-1.42.67-1.42 1.35V12h2.42l-.39 2.9h-2.03V22A10 10 0 0022 12z" />
                  </svg>
                </Link>
                <Link href="#" className="rounded-full bg-white/20 p-3 transition hover:bg-white/30">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 15l5.19-3L10 9v6zm11-3a9.99 9.99 0 10-6.91 9.53c.11.02.22.03.33.03.95 0 2.17-.15 2.72-.3.08-.03.16-.08.22-.14.4-.35.79-.8 1.12-1.15.3-.32.69-.83 1.04-1.38.1-.16.19-.33.26-.49.26-.64.38-1.24.38-1.78a9.9 9.9 0 00-.21-1.86A9.99 9.99 0 0021 12z" />
                  </svg>
                </Link>
                <Link href="#" className="rounded-full bg-white/20 p-3 transition hover:bg-white/30">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.15 6.82 9.48.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.49-1.12-1.49-.92-.63.07-.62.07-.62 1.02.07 1.57 1.04 1.57 1.04.9 1.55 2.35 1.1 2.92.84.09-.66.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.12 2.51.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.68-4.57 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.18.58.69.48A9.96 9.96 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-[#144d24] p-6">
            <h4 className="text-xl font-semibold text-white">Useful Link</h4>
            <ul className="mt-6 space-y-3 text-sm text-green-100">
              {quickLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-3">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/90" />
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] bg-[#175227] p-6 text-sm text-green-100">
            <h4 className="text-xl font-semibold text-white">Contact Us</h4>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-white" />
                <span>Tilottama-15, Kotihawa, Rupandehi, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white" />
                <span>info@nobelacademy.edu.np</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white" />
                <span>+977-71-540444</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0a2a11] px-4 sm:px-6 py-6">
        <div className="max-w-7xl mx-auto text-sm text-green-100 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p>© 2083 B.S. Nobel Environment Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
