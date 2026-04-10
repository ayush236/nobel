'use client'

import React, { FC, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface DropdownItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  {
    label: 'ABOUT',
    href: '/about/introduction',
    dropdown: [
      { label: 'Introduction', href: '/about/introduction' },
      { label: 'Message From Principal', href: '/about/principal' },
      { label: 'Org Structure', href: '/about/org-structure' }
    ]
  },
  {
    label: 'PROGRAMS',
    href: '/programs',
    dropdown: [
      { label: 'Montessori & Pre-School', href: '/programs/montessori' },
      { label: 'Primary (Grade 1–5)', href: '/programs/primary' },
      { label: 'Lower Secondary (Grade 6–8)', href: '/programs/lower-secondary' },
      { label: 'Secondary (Grade 9–10)', href: '/programs/secondary' },
      { label: 'Higher Secondary (Grade 11–12)', href: '/programs/higher-secondary' }
    ]
  },
  {
    label: 'FACILITIES',
    href: '/facilities',
    dropdown: [
      { label: 'Library', href: '/facilities/library' },
      { label: 'Science Lab', href: '/facilities/science-lab' },
      { label: 'Sports', href: '/facilities/sports' },
      { label: 'Transportation', href: '/facilities/transportation' },
      { label: 'Cafeteria', href: '/facilities/cafeteria' }
    ]
  },
  {
    label: 'NOTICE BOARD',
    href: '/notice-board',
    dropdown: [
      { label: 'Academic Calendar', href: '/calendar' }
    ]
  },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'CONTACT', href: '/contact' }
]

/* ─── Individual desktop nav item with hover dropdown ─── */
const NavItemDesktop: FC<{ item: NavItem }> = ({ item }) => {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (item.dropdown) setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100)
  }

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }, [])

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-green-900 hover:text-yellow-600 transition-colors duration-200 whitespace-nowrap rounded-md hover:bg-green-50"
      >
        {item.label}
        {item.dropdown && (
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>

      {/* Dropdown */}
      {item.dropdown && (
        <div
          className={`absolute left-0 top-full pt-1 z-50 transition-all duration-200 ${
            open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
          }`}
          style={{ minWidth: '220px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden border-t-4 border-t-green-700">
            {item.dropdown.map((sub, i) => (
              <Link
                key={sub.href}
                href={sub.href}
                className={`block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 font-medium transition-colors ${
                  i !== item.dropdown!.length - 1 ? 'border-b border-gray-100' : ''
                }`}
                onClick={() => setOpen(false)}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Mobile accordion item ─── */
const NavItemMobile: FC<{ item: NavItem; onClose: () => void }> = ({ item, onClose }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      {item.dropdown ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-green-900 hover:bg-green-50 transition-colors"
          >
            <span>{item.label}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open && (
            <div className="bg-green-50 border-l-4 border-green-700">
              {item.dropdown.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="block px-8 py-3 text-sm text-gray-700 hover:text-green-800 hover:bg-green-100 transition-colors font-medium border-b border-green-100 last:border-b-0"
                  onClick={onClose}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          className="block px-6 py-4 text-sm font-semibold text-green-900 hover:bg-green-50 hover:text-yellow-600 transition-colors"
          onClick={onClose}
        >
          {item.label}
        </Link>
      )}
    </div>
  )
}

/* ─── Main Navbar ─── */
const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/#hero" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Nobel Environment Academy Logo"
              width={44}
              height={44}
              className="object-contain"
            />
            <span className="text-base font-bold text-green-900 leading-tight  sm:block">
              Nobel Environment Academy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <NavItemDesktop key={item.label} item={item} />
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-green-900 hover:bg-green-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <NavItemMobile
              key={item.label}
              item={item}
              onClose={() => setMobileOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
