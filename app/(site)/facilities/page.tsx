import React, { FC } from 'react'
import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import { facilities } from '@/lib/data'

const FacilitiesPage: FC = () => {
  return (
    <div className="flex flex-col">
      <PageBanner
        title="Our Facilities"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Facilities', href: '/facilities' }
        ]}
        image="/images/homeb.jpg"
      />

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nobel Environment Academy is committed to providing world-class facilities that support
            comprehensive learning, development, and well-being of every student. Our modern
            infrastructure includes libraries, science laboratories, sports amenities, and support
            services designed for academic excellence and holistic growth.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 hover:bg-green-50 hover:border-green-500 hover:shadow-md transition-all duration-300"
              >
                {/* Large Emoji in Circle */}
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-green-100 rounded-full flex items-center justify-center text-4xl sm:text-5xl mb-3 sm:mb-4">
                  {facility.emoji}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-2xl font-bold text-green-900 mb-2 sm:mb-3">{facility.title}</h3>

                {/* Description */}
                <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{facility.description}</p>

                {/* Feature Count Badge */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold rounded-full px-2 sm:px-3 py-0.5 sm:py-1">
                    {facility.features.length} Features
                  </span>
                </div>

                {/* Learn More Button */}
                <Link
                  href={`/facilities/${facility.slug}`}
                  className="block w-full text-center px-3 sm:px-4 py-2 border-2 border-green-700 text-green-700 font-bold rounded-lg hover:bg-green-700 hover:text-white transition duration-300 text-xs sm:text-sm"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-6 sm:mb-8">Explore Our Campus</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience our state-of-the-art facilities firsthand. Schedule a campus visit or contact
            us to learn more about how Nobel Environment Academy supports student success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition duration-300"
            >
              Schedule Visit
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-green-700 text-green-700 hover:bg-green-50 font-bold rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default FacilitiesPage
