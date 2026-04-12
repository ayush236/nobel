'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, GraduationCap, Trophy, ExternalLink } from 'lucide-react'

interface TopbarLink {
  label: string
  href: string
  icon: React.ReactNode
}

const Topbar: FC = () => {
  const quickLinks: TopbarLink[] = [
    { label: 'School Life', href: '/school-life', icon: <GraduationCap size={13} /> },
    { label: 'Achievements', href: '/achievements', icon: <Trophy size={13} /> },
    { label: 'Apply Online', href: '/contact', icon: <ExternalLink size={13} /> },
  ]

  return (
    <div className="bg-green-900 text-green-100 border-b border-green-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-4">

        {/* Left: Contact Info */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <a
            href="tel:+977-71-540444"
            className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors duration-200"
          >
            <Phone size={12} strokeWidth={2} />
            <span>+977-71-540444</span>
          </a>
          <span className="hidden sm:block w-px h-3 bg-green-600" />
       
          
          <a
            href="mailto:sundargurung@gmail.com"
            className="hidden md:flex items-center gap-1.5 hover:text-yellow-400 transition-colors duration-200"
          >
            <Mail size={12} strokeWidth={2} />
            <span>sundargurung@gmail.com</span>
          </a>
          <span className="hidden lg:block w-px h-3 bg-green-600" />
          <span className="hidden lg:flex items-center gap-1.5 text-green-300">
            <MapPin size={12} strokeWidth={2} />
            <span>Butwal, Rupandehi, Nepal</span>
          </span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-1">
          {quickLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              {i > 0 && <span className="w-px h-3 bg-green-600 mx-1" />}
              <Link
                href={link.href}
                className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-2 py-1 rounded hover:bg-green-700/60 hover:text-yellow-400 transition-all duration-200"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Topbar
