import React, { FC } from 'react'
import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'

const PrincipalPage: FC = () => {
  return (
    <div className="flex flex-col">
      <PageBanner
        title="Message from Principal"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Message from Principal', href: '/about/principal' }
        ]}
        image="/images/team.jpg"
      />

      {/* Navigation Tabs */}
      <section className="py-6 px-6 bg-white border-b border-gray-200">
        
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between align-middle ">
          <div className="flex flex-wrap gap-4">
          <Link
            href="/about/introduction"
            className="px-6 py-2 rounded-lg font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
          >
            Introduction
          </Link>
          <Link
            href="/about/principal"
            className=" px-6 py-2 rounded-lg font-medium bg-green-700 text-white transition"
          >
            Message From Principal
          </Link>
          <Link
            href="/about/org-structure"
            className="px-6 py-2 rounded-lg font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
          >
            Org Structure
          </Link>
          </div>
          <div className='mt-1'>
          <Link
                    href="/brochure"
                    className="text-center px-6 py-2 border-2 border-green-700 text-green-700 font-bold rounded-lg hover:bg-green-50 transition duration-300"
                  >
                    Download Brochure
                  </Link>
                  </div>
                  </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Heading */}
              <h2 className="text-4xl font-bold text-green-900 mb-8">
                Message from Principal
              </h2>

              {/* Message Content */}
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed text-lg italic border-l-4 border-green-700 pl-6 bg-green-50 py-4">
                  "At Nobel Environment Academy, we believe every child possesses unique potential
                  waiting to be nurtured. Our mission is to create a caring, inspiring learning
                  environment where students grow academically, socially, and emotionally."
                </p>

                <p className="leading-relaxed">
                  Welcome to Nobel Environment Academy. I am honored to serve as Principal of this
                  wonderful institution where education goes beyond textbooks. Our commitment is to
                  foster a holistic learning experience that develops not just academic knowledge,
                  but also character, creativity, and environmental consciousness.
                </p>

                <p className="leading-relaxed">
                  We believe in the Montessori philosophy that respects each child's individuality
                  and learning pace. Our experienced faculty, supportive community, and green campus
                  provide the perfect foundation for students to thrive. We are dedicated to preparing
                  responsible, thoughtful citizens who will contribute positively to society.
                </p>

                <p className="leading-relaxed">
                  I invite you to visit our campus and experience the Nobel difference. Together, we
                  work to inspire excellence and nurture the leaders of tomorrow.
                </p>

                <div className="mt-8 pt-6 border-t border-gray-300">
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Sundar Gurung</h3>
                  <p className="text-gray-600">Principal</p>
                  <p className="text-gray-600">Nobel Environment Academy</p>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Principal Info Card */}
              <div className="sticky top-24 bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6 h-auto">

                <div className="bg-gray-300  h-fit rounded-lg mx-auto ">
                  <img src="/prin.jpg"  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default PrincipalPage
