import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BreadcrumbItem {
  label: string
  href: string
}

interface PageBannerProps {
  title: string
  breadcrumbs: BreadcrumbItem[]
  /** Optional background image path from /public, e.g. "/homea.jpg" */
  image?: string
}

const PageBanner: FC<PageBannerProps> = ({ title, breadcrumbs, image }) => {
  return (
    <div className="relative bg-gradient-to-br from-green-900 to-green-800 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">

      {/* Background Image (if provided) */}
      {image && (
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
      )}

      {/* Dark overlay — stronger when image is present */}
      <div
        className={`absolute inset-0 ${
          image
            ? 'bg-green-900/70'
            : 'opacity-5'
        }`}
      >
        {/* Subtle pattern when no image */}
        {!image && (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 0 L40 40 M40 0 L0 40" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-center drop-shadow-md leading-tight">{title}</h1>

        {/* Breadcrumbs */}
        <div className="flex justify-center items-center gap-2 text-xs sm:text-sm flex-wrap">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-gray-300">/</span>}
              <Link href={item.href} className="hover:text-yellow-400 transition">
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageBanner
