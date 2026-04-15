import React, { FC } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import { facilities } from '@/lib/data'
import {
  BookOpen, FlaskConical, Trophy, Bus, UtensilsCrossed,
  Building2, ArrowRight, CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'School Facilities | Nobel Environment Academy',
  description: 'Explore our modern facilities including library, science labs, sports grounds, transportation, cafeteria, and more at Nobel Environment Academy.',
  keywords: ['school facilities', 'library', 'science lab', 'sports ground', 'school bus', 'cafeteria', 'school infrastructure'],
  openGraph: {
    title: 'School Facilities - Nobel Environment Academy',
    description: 'Modern infrastructure supporting academic excellence and holistic development.',
    url: 'https://nobelenvironmentacademy.edu.np/facilities',
  },
}

const facilityIcons: Record<string, React.ReactNode> = {
  library:        <BookOpen className="w-6 h-6" />,
  'science-lab':  <FlaskConical className="w-6 h-6" />,
  sports:         <Trophy className="w-6 h-6" />,
  transportation: <Bus className="w-6 h-6" />,
  cafeteria:      <UtensilsCrossed className="w-6 h-6" />,
}

const facilityImages: Record<string, string> = {
  library:        '/images/library.jpg',
  'science-lab':  '/images/sciencelab.png',
  sports:         '/images/sports.jpg',
  transportation: '/images/schoolbus.png',
  cafeteria:      '/images/cafeteria.jpg',
}

const iconColors = [
  'from-blue-500 to-cyan-600',
  'from-emerald-500 to-green-600',
  'from-orange-500 to-amber-600',
  'from-violet-500 to-purple-600',
  'from-rose-500 to-pink-600',
]

const FacilitiesPage: FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <PageBanner
        title="Our Facilities"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Facilities', href: '/facilities' },
        ]}
        image="/images/homeb.jpg"
      />

      {/* Intro */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-green-600">Campus Life</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mt-2 mb-4">World-Class Facilities</h2>
          <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
            Nobel Environment Academy provides modern infrastructure — libraries, science labs, sports
            grounds, transport, and more — all designed to support academic excellence and holistic growth.
          </p>
        </div>
      </section>

      {/* Facilities grid */}
      <section className="pb-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const img = facilityImages[facility.slug] ?? '/images/homeb.jpg'
              return (
                <Link
                  key={facility.id}
                  href={`/facilities/${facility.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-green-200 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={img}
                      alt={facility.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {/* Icon badge */}
                    <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${iconColors[index % iconColors.length]} flex items-center justify-center text-white shadow-md`}>
                      {facilityIcons[facility.slug] ?? <Building2 className="w-6 h-6" />}
                    </div>
                    <span className="absolute bottom-3 right-3 text-xs font-bold bg-white/90 text-green-800 px-2.5 py-1 rounded-full">
                      {facility.features.length} Features
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-green-900 mb-2 group-hover:text-green-700 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {facility.description}
                    </p>

                    {/* Top 2 features */}
                    <div className="space-y-1.5 mb-4">
                      {facility.features.slice(0, 2).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle size={12} className="text-green-500 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-400">All school hours</span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-green-700 group-hover:gap-2 transition-all duration-200">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-green-800 to-green-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Explore Our Campus</h2>
          <p className="text-green-200 text-sm mb-8">
            Experience our facilities firsthand. Schedule a campus visit or contact us to learn more.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold rounded-xl transition-colors duration-200"
            >
              Schedule a Visit <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}

export default FacilitiesPage
