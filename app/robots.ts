import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/nea-secure-2068/', '/api/'],
    },
    sitemap: 'https://nobelacademy.edu.np/sitemap.xml',
  }
}
