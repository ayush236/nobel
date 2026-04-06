'use client'

import React, { FC } from 'react'
import Link from 'next/link'

interface TopbarLink {
  label: string
  href: string
}

const Topbar: FC = () => {
  const quickLinks: TopbarLink[] = [
    { label: 'School Life', href: '/school-life' },
    { label: 'Apply Online', href: '/contact' },
    { label: 'Achievements', href: '/achievements' }
  ]

  return (
    <div className="bg-green-800 text-white py-2 sm:py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
        {/* Left: Contact Information */}
        <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm justify-center sm:justify-start">
          <a href="tel:+977-71-540444" className="hover:text-yellow-500 transition">
            📞 +977-71-540444
          </a>
          <a href="mailto:info@nobelacademy.edu.np" className="hover:text-yellow-500 transition hidden md:inline">
            ✉️ info@nobelacademy.edu.np
          </a>
        </div>

        {/* Right: Quick Links */}
        <div className="flex gap-3 sm:gap-8 text-xs sm:text-sm">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-yellow-500 transition font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Topbar
