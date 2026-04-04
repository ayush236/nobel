'use client'

import React, { FC, useState } from 'react'
import Image from 'next/image'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import { galleryImages } from '@/lib/data'

type GalleryCategory = 'All' | 'Events' | 'Academic' | 'Sports' | 'Campus'

const GalleryPage: FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All')

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' }
  ]

  const categories: GalleryCategory[] = ['All', 'Events', 'Academic', 'Sports', 'Campus']

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory)

  const categoryBadgeColors: Record<string, string> = {
    Events: 'bg-pink-500 text-white',
    Academic: 'bg-blue-500 text-white',
    Sports: 'bg-green-500 text-white',
    Campus: 'bg-orange-500 text-white'
  }

  return (
    <div className="bg-white">
      {/* Page Banner */}
      <PageBanner title="Gallery" breadcrumbs={breadcrumbs} image="/cultural.jpg" />

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Count */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              Showing {filteredImages.length} photo{filteredImages.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                {/* Image with Overlay */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200">
                  {image.image ? (
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`${image.bgColor} w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                    />
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-2 right-2 z-10">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${categoryBadgeColors[image.category]}`}
                    >
                      {image.category}
                    </span>
                  </div>

                  {/* Title Overlay on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <p className="text-sm font-semibold line-clamp-2">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default GalleryPage
