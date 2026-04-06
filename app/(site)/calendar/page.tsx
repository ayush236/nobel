import PageBanner from '@/components/PageBanner'
import EventsCalendar from '@/components/EventsCalendar'

export const metadata = {
  title: 'Academic Calendar 2083 | Nobel Environment Academy',
  description: 'Upcoming events, examinations, and festivals for the academic year 2083 B.S.'
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
