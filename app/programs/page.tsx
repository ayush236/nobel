import React, { FC } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import { programs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Educational Programs | Nobel Environment Academy',
  description:
    'Explore our comprehensive educational programs from Montessori/Pre-School through Grade 10.',
  keywords: ['programs', 'education', 'montessori', 'primary', 'secondary', 'Nepal']
}

const ProgramsPage: FC = () => {
  return (
    <div className="flex flex-col">
      <PageBanner
        title="Our Programs"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs', href: '/programs' }
        ]}
        image="/homea.jpg"
      />

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nobel Environment Academy offers comprehensive education from Montessori/Pre-School
            through Grade 10. Each program is carefully designed to nurture academic excellence,
            character development, and holistic growth at every stage of a child's educational
            journey.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 hover:border-green-600 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                {/* Emoji in Circle */}
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {program.emoji}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 sm:mb-3">{program.title}</h3>

                {/* Level Badge */}
                <span className="inline-block bg-green-100 text-green-800 text-xs font-bold rounded-full px-2 sm:px-3 py-0.5 sm:py-1 mb-2 sm:mb-3">
                  {program.level}
                </span>

                {/* Duration */}
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">⏱️ {program.duration}</p>

                {/* Description */}
                <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3">{program.description}</p>

                {/* View Details Button */}
                <Link
                  href={`/programs/${program.slug}`}
                  className="block w-full text-center px-3 sm:px-4 py-2 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition duration-300 text-xs sm:text-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-6 sm:mb-8">Ready to Enroll?</h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Discover which program is right for your child. Visit our campus or contact our admissions
            team to learn more about Nobel Environment Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition duration-300 text-sm sm:text-base"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-green-700 text-green-700 hover:bg-green-50 font-bold rounded-lg transition duration-300 text-sm sm:text-base"
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

export default ProgramsPage
