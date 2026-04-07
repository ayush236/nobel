import { getGalleryImages } from '@/app/actions/uploadImage'
import UploadForm from './UploadForm'
import GalleryGrid from './GalleryGrid'

export default async function AdminGallery() {
  const images = await getGalleryImages()

  return (
    <div >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
        <p className="text-gray-500 text-sm mt-1">{images.length} images uploaded</p>
      </div>

      {/* Upload Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="font-bold text-gray-900 mb-5">Upload New Image</h2>
        <UploadForm />
      </div>

      {/* Gallery Grid */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-bold text-gray-900 mb-5">Uploaded Images</h2>
        <GalleryGrid images={images} />
      </div>
    </div>
  )
}
