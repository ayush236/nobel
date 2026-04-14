import type { Metadata } from 'next'
import PageBanner from '@/components/PageBanner'
import EventsCalendar from '@/components/EventsCalendar'

export const metadata: Metadata = {
  title: 'Academic Calendar 2083 | Nobel Environment Academy',
  description: 'Upcoming events, examinations, and festivals for the academic year 2083 B.S. at Nobel Environment Academy, Kotihawa.',
  keywords: ['academic calendar', 'school events', 'examination schedule', 'school festivals', 'academic year 2083'],
  openGraph: {
    title: 'Academic Calendar 2083 - Nobel Environment Academy',
    description: 'View upcoming events, examinations, and festivals for the academic year.',
    url: 'https://nobelacademy.edu.np/calendar',
  },
}

export default function CalendarPage() {
  return (
    <div>
      <PageBanner 
        title="Academic Calendar" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Calendar', href: '/calendar' }
        ]}
        image="/images/homec.jpg"
      />
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <EventsCalendar />
        </div>
      </div>
    </div>
  )
}
