import type { Metadata } from 'next'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import { getGalleryImages } from '@/app/actions/uploadImage'
import { galleryImages as staticImages } from '@/lib/data'
import GalleryClient from './GalleryClient'
import type { Category } from '@/app/actions/uploadImage'

export const metadata: Metadata = {
  title: 'Photo Gallery | Nobel Environment Academy',
  description: 'Browse photos from school events, cultural programs, sports activities, and daily life at Nobel Environment Academy, Kotihawa.',
  keywords: ['school gallery', 'school events', 'cultural programs', 'sports activities', 'school photos'],
  openGraph: {
    title: 'Photo Gallery - Nobel Environment Academy',
    description: 'View photos from our school events, cultural programs, and daily activities.',
    url: 'https://nobelenvironmentacademy.edu.np/gallery',
  },
}

export const revalidate = 60

export default async function GalleryPage() {
  const cloudinaryImages = await getGalleryImages()

  // Merge static images with cloudinary images
  const staticMapped = staticImages.map((img) => ({
    url:      img.image ?? '',
    publicId: `static_${img.id}`,
    title:    img.title,
    category: img.category as Category,
  })).filter((img) => img.url)

  const allImages = [...cloudinaryImages, ...staticMapped]

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' }
  ]

  return (
    <div className="bg-white">
      <PageBanner title="Gallery" breadcrumbs={breadcrumbs} image="/images/cultural.jpg" />
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <GalleryClient images={allImages} />
        </div>
      </section>
      <Footer />
    </div>
  )
}
