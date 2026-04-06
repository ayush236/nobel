'use server'

import { v2 as cloudinary } from 'cloudinary'
import { revalidatePath } from 'next/cache'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export type Category = 'Academic' | 'Sports' | 'Events' | 'Campus'

export interface UploadState {
  success: boolean
  message: string
}

export async function uploadGalleryImage(
  _prev: UploadState,
  formData: FormData
): Promise<UploadState> {
  const file     = formData.get('image') as File
  const title    = formData.get('title') as string
  const category = formData.get('category') as Category

  if (!file || file.size === 0) return { success: false, message: 'Please select an image.' }
  if (!title?.trim())           return { success: false, message: 'Title is required.' }
  if (!category)                return { success: false, message: 'Please select a category.' }

  try {
    const bytes  = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    await new Promise<void>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder:          'nobel',
          public_id:       `${category.toLowerCase()}_${Date.now()}`,
          transformation:  [
            { quality: 'auto:good', fetch_format: 'auto' },
            { width: 1200, crop: 'limit' },
          ],
          context: `title=${title}|category=${category}`,
          tags:    [category.toLowerCase(), 'gallery', `title:${title}`],
        },
        (err) => {
          if (err) reject(err)
          else resolve()
        }
      ).end(buffer)
    })

    revalidatePath('/gallery')
    revalidatePath('/admin/gallery')

    return { success: true, message: 'Image uploaded successfully!' }
  } catch (err) {
    console.error('Cloudinary upload error:', err)
    return { success: false, message: 'Upload failed. Please try again.' }
  }
}

export async function getGalleryImages() {
  try {
    const result = await cloudinary.search
      .expression('folder:nobel AND tags=gallery')
      .with_field('context')
      .with_field('tags')
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute()

    return result.resources.map((r: {
      secure_url: string
      public_id: string
      context?: { custom?: { title?: string; category?: string } }
      tags?: string[]
    }) => {
      // Try context first, then fall back to tags
      const titleFromContext  = r.context?.custom?.title
      const titleFromTag      = r.tags?.find((t: string) => t.startsWith('title:'))?.replace('title:', '')
      const categoryFromCtx   = r.context?.custom?.category
      const categoryFromTag   = r.tags?.find((t: string) =>
        ['academic', 'sports', 'events', 'campus'].includes(t)
      )
      const categoryStr = categoryFromCtx
        ?? (categoryFromTag ? categoryFromTag.charAt(0).toUpperCase() + categoryFromTag.slice(1) : 'Academic')

      return {
        url:      r.secure_url,
        publicId: r.public_id,
        title:    titleFromContext || titleFromTag || '',
        category: categoryStr as Category,
      }
    }).filter((img: { title: string }) => img.title !== '')
  } catch {
    return []
  }
}

export async function deleteGalleryImage(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId)
    revalidatePath('/gallery')
    revalidatePath('/admin/gallery')
  } catch {
    // silently fail
  }
}
