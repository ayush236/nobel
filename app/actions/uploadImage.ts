'use server'

import { revalidatePath } from 'next/cache'

export type Category = 'Academic' | 'Sports' | 'Events' | 'Campus'

export interface UploadState {
  success: boolean
  message: string
}

// Helper to get Cloudinary credentials
const cloudName = process.env.CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET

// Helper for Search API Auth
const getAuthHeaders = () => {
  const auth = btoa(`${apiKey}:${apiSecret}`)
  return {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/json',
  }
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
    const uploadData = new FormData()
    uploadData.append('file', file)
    uploadData.append('folder', 'nobel')
    uploadData.append('context', `title=${title}|category=${category}`)
    uploadData.append('tags', `gallery,${category.toLowerCase()},title:${title}`)
    uploadData.append('upload_preset', '') // Optional if you have unsigned uploads, but we use API Key
    uploadData.append('api_key', apiKey!)
    uploadData.append('timestamp', String(Math.floor(Date.now() / 1000)))
    
    // For signed uploads, we would need a signature. 
    // Since we're on the server, we can just use the secret to sign, or use unsigned if configured.
    // However, the easiest way for Cloudinary on Edge without their SDK is to use unsigned uploads 
    // OR implement a simple signature helper. Let's assume signed for security.
    
    const timestamp = String(Math.floor(Date.now() / 1000))
    const publicId = `${category.toLowerCase()}_${Date.now()}`
    
    // Signature string: context=...&folder=...&public_id=...&tags=...&timestamp=...API_SECRET
    // But Cloudinary signature is complex. 
    // Let's use the simplest REST approach: https://cloudinary.com/documentation/image_upload_api_reference
    
    // To avoid complex signing, I'll use the upload_stream logic via fetch if possible, 
    // but fetch doesn't support streams in the same way as Node.
    
    const body = new FormData()
    body.append('file', file)
    body.append('upload_preset', 'ml_default') // You might need to enable this in Cloudinary dashboard
    body.append('folder', 'nobel')
    body.append('context', `title=${title}|category=${category}`)
    body.append('tags', `gallery,${category.toLowerCase()},title:${title}`)

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: body
    })

    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.error?.message || 'Upload failed')
    }

    revalidatePath('/gallery')
    revalidatePath('/nea-secure-2068/dashboard/gallery')

    return { success: true, message: 'Image uploaded successfully!' }
  } catch (err) {
    console.error('Cloudinary upload error:', err)
    return { success: false, message: 'Upload failed. Please try again.' }
  }
}

export async function getGalleryImages() {
  try {
    // Cloudinary Search API (REST)
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/search`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({
        expression: 'folder:nobel AND tags=gallery',
        with_field: ['context', 'tags'],
        sort_by: [{ created_at: 'desc' }],
        max_results: 100
      })
    })

    if (!res.ok) return []

    const result = await res.json()

    return result.resources.map((r: any) => {
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
    }).filter((img: any) => img.title !== '')
  } catch {
    return []
  }
}

export async function deleteGalleryImage(publicId: string): Promise<void> {
  try {
    const timestamp = String(Math.floor(Date.now() / 1000))
    // Note: Delete requires signature. For simplicity in this fix, 
    // I'll recommend the user enables "unsigned delete" or I can implement a simple HMAC-SHA1 if needed.
    // However, most users prefer the SDK for signing.
    // Let's use the REST API with the secret if we can. 
    // Actually, Cloudinary REST API for destroy REQUIRES a signature.
    
    // I'll implement a simple signature helper using Web Crypto API (edge-compatible)
    const signature = await generateSignature(`public_id=${publicId}&timestamp=${timestamp}${apiSecret}`)

    const body = new FormData()
    body.append('public_id', publicId)
    body.append('api_key', apiKey!)
    body.append('timestamp', timestamp)
    body.append('signature', signature)

    await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
      method: 'POST',
      body: body
    })

    revalidatePath('/gallery')
    revalidatePath('/nea-secure-2068/dashboard/gallery')
  } catch (err) {
    console.error('Delete error:', err)
  }
}

// Edge-compatible signature helper
async function generateSignature(message: string) {
  const encoder = new TextEncoder()
  const data = encoder.encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-1', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}
