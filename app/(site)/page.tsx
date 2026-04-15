import HeroSlider from '@/components/HeroSlider'
import FeatureCards from '@/components/FeatureCards'
import AboutSection from '@/components/AboutSection'
import ProgramsSection from '@/components/ProgramsSection'
import NoticeBoard from '@/components/NoticeBoard'
import EventsSection from '@/components/EventsSection'
import EventsCalendar from '@/components/EventsCalendar'
import StatsCounter from '@/components/StatsCounter'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <FeatureCards />
      <AboutSection />
      <ProgramsSection />
      {/* <NoticeBoard /> */}
      <EventsSection />
      {/* <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-2">Upcoming Events & Examinations</h2>
          <p className="text-base sm:text-lg text-gray-600 font-['system-ui'] mb-8">आगामी कार्यक्रम तथा परीक्षाहरू</p>
          <EventsCalendar />
        </div>
      </section> */}
      <StatsCounter />
      <Testimonials />
      <Footer />
    </div>
  )
}
