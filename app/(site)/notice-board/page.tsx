import type { Metadata } from 'next'
import NoticeBoardClient from './NoticeBoardClient'

export const metadata: Metadata = {
  title: 'Notice Board | Nobel Environment Academy',
  description: 'Stay updated with latest notices, announcements, admission information, examination schedules, and events at Nobel Environment Academy.',
  keywords: ['school notices', 'announcements', 'admission notice', 'examination schedule', 'school events', 'important updates'],
  openGraph: {
    title: 'Notice Board - Nobel Environment Academy',
    description: 'Latest notices and announcements from Nobel Environment Academy.',
    url: 'https://nobelenvironmentacademy.edu.np/notice-board',
  },
}

export default function NoticeBoardPage() {
  return <NoticeBoardClient />
}
