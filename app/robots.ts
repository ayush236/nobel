import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nobelenvironmentacademy.edu.np'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/nea-secure-2068/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
