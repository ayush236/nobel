import type { Metadata } from 'next'
import SchoolLifeClient from './SchoolLifeClient'

export const metadata: Metadata = {
  title: 'School Life | Nobel Environment Academy',
  description: 'Experience vibrant campus life at Nobel Environment Academy with sports clubs, arts & culture programs, student council, and modern facilities.',
  keywords: ['school life', 'campus activities', 'sports club', 'arts and culture', 'student council', 'extracurricular activities'],
  openGraph: {
    title: 'School Life - Nobel Environment Academy',
    description: 'Discover the vibrant campus life and diverse activities at our school.',
    url: 'https://nobelacademy.edu.np/school-life',
  },
}

export default function SchoolLifePage() {
  return <SchoolLifeClient />
}
