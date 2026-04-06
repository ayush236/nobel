'use client'

import { useActionState, useState, useRef } from 'react'
import { Upload, ImageIcon } from 'lucide-react'
import { uploadGalleryImage } from '@/app/actions/uploadImage'

const initialState = { success: false, message: '' }
const categories = ['Academic', 'Sports', 'Events', 'Campus'] as const

export default function UploadForm() {
  const [state, formAction, pending] = useActionState(uploadGalleryImage, initialState)
  const [preview, setPreview] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.message && (
        <div className={`px-4 py-3 rounded-lg text-sm font-medium ${
          state.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'
        }`}>
          {state.message}
        </div>
      )}

      {/* Image drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-green-400 hover:bg-green-50/30 transition-all duration-200"
      >
        {preview ? (
          <img src={preview} alt="Preview" className="max-h-48 mx-auto rounded-lg object-contain" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <ImageIcon className="w-10 h-10" />
            <p className="text-sm font-medium">Click to select image</p>
            <p className="text-xs">JPG, PNG, WEBP — auto compressed on upload</p>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="e.g. Annual Sports Day"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Category</label>
          <select
            name="category"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
          >
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="flex items-center gap-2 px-6 py-2.5 bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-bold rounded-lg text-sm transition-colors duration-300"
      >
        <Upload className="w-4 h-4" />
        {pending ? 'Uploading...' : 'Upload Image'}
      </button>
    </form>
  )
}
