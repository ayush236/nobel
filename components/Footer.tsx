import React, { FC } from 'react'
import Link from 'next/link'

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
    <footer className="bg-green-900 text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 md:mb-12">
            {/* Column 1: School Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Nobel Academy</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                Nurturing minds, fostering growth, and inspiring excellence in a nature-inspired
                environment.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                📍 Tilottama-15, Kotihawa, Rupandehi, Lumbini Province, Nepal
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-500 transition duration-300 text-xs sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact</h3>
              <div className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">
                <p>📞 +977-71-540444</p>
                <p>✉️ sundargurung@gmail.com</p>
                <p>🕐 sun-Fri: 9:00 AM - 4:00 PM</p>
                <p>🕐 Sat: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Newsletter</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                Stay updated with latest announcements and events.
              </p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 sm:px-4 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-3 sm:px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded transition duration-300 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider & Copyright */}
      <div className="border-t border-green-800 px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
          <p>&copy; 2083 B.S. Nobel Environment Academy. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-yellow-500 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow-500 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
