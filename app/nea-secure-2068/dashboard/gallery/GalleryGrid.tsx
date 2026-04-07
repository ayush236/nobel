'use client'

import Image from 'next/image'
import { Trash2 } from 'lucide-react'
import { deleteGalleryImage } from '@/app/actions/uploadImage'
import type { Category } from '@/app/actions/uploadImage'

interface GalleryImage {
  url: string
  publicId: string
  title: string
  category: Category
}

const categoryColors: Record<Category, string> = {
  Academic: 'bg-blue-50 text-blue-700',
  Sports:   'bg-green-50 text-green-700',
  Events:   'bg-orange-50 text-orange-700',
  Campus:   'bg-purple-50 text-purple-700',
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400 text-sm">
        No images uploaded yet.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img) => (
        <div key={img.publicId} className="group relative bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
          <div className="relative h-36">
            <Image src={img.url} alt={img.title} fill className="object-cover" sizes="300px" />
          </div>
          <div className="p-3">
            <p className="text-sm font-medium text-gray-800 truncate">{img.title}</p>
            <span className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[img.category]}`}>
              {img.category}
            </span>
          </div>
          {/* Delete button */}
          <form
            action={deleteGalleryImage.bind(null, img.publicId)}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <button
              type="submit"
              className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg"
              aria-label="Delete image"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      ))}
    </div>
  )
}
