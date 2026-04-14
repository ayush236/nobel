import type { Metadata } from 'next'
import AchievementsClient from './AchievementsClient'

export const metadata: Metadata = {
  title: 'Achievements | Nobel Environment Academy',
  description: 'Celebrating academic excellence, sports victories, and cultural achievements at Nobel Environment Academy. View our awards, medals, and student accomplishments.',
  keywords: ['school achievements', 'awards', 'sports champions', 'academic excellence', 'student success', 'school medals'],
  openGraph: {
    title: 'Achievements - Nobel Environment Academy',
    description: 'Excellence recognized through dedication, innovation, and outstanding performance.',
    url: 'https://nobelacademy.edu.np/achievements',
  },
}

export default function AchievementsPage() {
  return <AchievementsClient />
}
