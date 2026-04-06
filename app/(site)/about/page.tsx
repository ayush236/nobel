import React, { FC } from 'react'
import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'

interface KeyFact {
  label: string
  value: string
}

interface RecentNotice {
  id: number
  category: 'Admission' | 'Examination' | 'General' | 'Event'
  title: string
  date: string
}

interface ChooseCard {
  emoji: string
  title: string
  description: string
}

const AboutPage: FC = () => {
  const keyFacts: KeyFact[] = [
    { label: 'Established', value: '2068 B.S.' },
    { label: 'Affiliation', value: 'NEB' },
    { label: 'Students', value: '215+' },
    { label: 'Programs', value: 'Montessori to Grade 10' }
  ]

  const recentNotices: RecentNotice[] = [
    {
      id: 1,
      category: 'Admission',
      title: 'Admission Open for 2081 B.S.',
      date: 'April 2025'
    },
    {
      id: 2,
      category: 'Event',
      title: 'Annual Sports Week',
      date: 'May 2025'
    },
    {
      id: 3,
      category: 'Examination',
      title: 'First Terminal Exam Routine',
      date: 'March 2025'
    }
  ]

  const chooseCards: ChooseCard[] = [
    {
      emoji: '🌿',
      title: 'Green Environment',
      description: 'Eco-conscious campus inspiring focused, healthy learning in nature.'
    },
    {
      emoji: '👨‍🏫',
      title: 'Experienced Faculty',
      description: 'Qualified, dedicated teachers committed to student development.'
    },
    {
      emoji: '🏆',
      title: 'Proven Results',
      description: 'Consistent academic excellence since establishment in 2068 B.S.'
    }
  ]

  const categoryColors: Record<RecentNotice['category'], string> = {
    Admission: 'bg-blue-100 text-blue-700',
    Examination: 'bg-red-100 text-red-700',
    General: 'bg-green-100 text-green-700',
    Event: 'bg-yellow-100 text-yellow-700'
  }

  return (
    <div className="flex flex-col">
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Introduction', href: '/about' }
        ]}
      />

      {/* Navigation Tabs */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 bg-white border-b border-gray-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 sm:gap-4">
          <Link
            href="/about/introduction"
            className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition whitespace-nowrap"
          >
            Introduction
          </Link>
          <Link
            href="/about/principal"
            className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition whitespace-nowrap"
          >
            Message From Principal
          </Link>
          <Link
            href="/about/org-structure"
            className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition whitespace-nowrap"
          >
            Org Structure
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Introduction Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-6 sm:mb-8">Introduction</h2>

              {/* Body Paragraphs */}
              <div className="space-y-4 sm:space-y-6 text-gray-700 mb-8 sm:mb-12 text-sm sm:text-base">
                <p className="leading-relaxed">
                  Nobel Environment Academy is a private Montessori and secondary school established
                  in 2068 B.S. (2011 A.D.) located at Tilottama-15, Kotihawa, Rupandehi, Lumbini
                  Province, Nepal. It is affiliated with the National Examination Board (NEB) and
                  offers education from Montessori/Pre-School through Grade 10.
                </p>
                <p className="leading-relaxed">
                  Since its founding, Nobel Environment Academy has been committed to providing
                  quality, child-friendly education. With 215+ enrolled students, experienced
                  faculty, and a strong community spirit, the school fosters academic excellence and
                  holistic development in a green, inspiring environment on the banks of Kotihawa.
                </p>
                <p className="leading-relaxed">
                  The school runs a Montessori program for early learners and a structured secondary
                  curriculum preparing students for the SEE examination. It believes in nurturing not
                  just academic skills but also character, creativity, and environmental consciousness
                  in every student.
                </p>
              </div>

              {/* Key Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {keyFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-green-700 bg-green-50 p-6 rounded-r-lg"
                  >
                    <div className="text-sm text-gray-600 mb-2">{fact.label}</div>
                    <div className="text-2xl font-bold text-green-900">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Info Card */}
              <div className="sticky top-24 bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-green-900 mb-6">Quick Info</h3>

                <div className="space-y-4 text-sm mb-8">
                  <div className="flex gap-3">
                    <span className="text-xl">📍</span>
                    <span className="text-gray-700">Tilottama-15, Kotihawa, Rupandehi, Nepal</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xl">📞</span>
                    <div className="text-gray-700">
                      <div>071-514220</div>
                      <div>9857054560</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xl">📧</span>
                    <span className="text-gray-700">nobelacademy68@gmail.com</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xl">🏫</span>
                    <span className="text-gray-700">Est. 2068 B.S.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xl">🎓</span>
                    <span className="text-gray-700">NEB Affiliated</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition duration-300"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/brochure"
                    className="block w-full text-center px-6 py-3 border-2 border-green-700 text-green-700 font-bold rounded-lg hover:bg-green-50 transition duration-300"
                  >
                    Download Brochure
                  </Link>
                </div>
              </div>

              {/* Recent Notices Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4">Recent Notices</h3>
                <div className="space-y-4">
                  {recentNotices.map((notice) => (
                    <div key={notice.id} className="pb-4 border-b border-gray-200 last:border-b-0">
                      <span
                        className={`inline-block text-xs font-bold rounded-full px-2 py-1 mb-2 ${categoryColors[notice.category]}`}
                      >
                        {notice.category}
                      </span>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                        {notice.title}
                      </h4>
                      <p className="text-xs text-gray-500">{notice.date}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/notice-board"
                  className="block text-center mt-4 text-sm text-green-700 hover:text-green-800 font-semibold"
                >
                  View All Notices →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nobel Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900">Why Choose Nobel?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chooseCards.map((card, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">{card.emoji}</div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AboutPage
