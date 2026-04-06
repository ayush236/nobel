'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Category } from '@/app/actions/uploadImage'

type GalleryCategory = 'All' | Category

interface GalleryImage {
  url: string
  publicId: string
  title: string
  category: Category
}

const categories: GalleryCategory[] = ['All', 'Academic', 'Sports', 'Events', 'Campus']

const badgeColors: Record<Category, string> = {
  Academic: 'bg-blue-500 text-white',
  Sports:   'bg-green-500 text-white',
  Events:   'bg-pink-500 text-white',
  Campus:   'bg-orange-500 text-white',
}

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryCategory>('All')

  const filtered = active === 'All' ? images : images.filter((i) => i.category === active)

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
              active === cat ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="text-center mb-8">
        <p className="text-gray-500 text-sm">Showing {filtered.length} photo{filtered.length !== 1 ? 's' : ''}</p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400 text-sm">No images in this category yet.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((img) => (
            <div key={img.publicId} className="group relative overflow-hidden rounded-xl cursor-pointer">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute top-2 right-2 z-10">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeColors[img.category]}`}>
                    {img.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                  <p className="text-sm font-semibold line-clamp-2">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
