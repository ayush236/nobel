import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Use environment variable or fallback to production URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nobelenvironmentacademy.edu.np'
  
  const routes = [
    '',
    '/about',
    '/programs',
    '/programs/montessori',
    '/programs/primary',
    '/programs/lower-secondary',
    '/programs/secondary',
    '/school-life',
    '/achievements',
    '/facilities',
    '/gallery',
    '/calendar',
    '/notices',
    '/notice-board',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 
                     route.includes('notice') ? 'daily' as const : 
                     route === '/calendar' ? 'weekly' as const : 
                     'monthly' as const,
    priority: route === '' ? 1 : 
              route === '/contact' ? 0.9 : 
              route === '/programs' ? 0.9 : 
              route.includes('notice') || route === '/calendar' ? 0.8 : 
              route === '/about' ? 0.8 : 
              route.includes('/programs/') || route === '/facilities' || route === '/school-life' ? 0.7 : 
              0.6,
  }))
}
