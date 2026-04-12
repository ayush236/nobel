import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  BookOpen, FlaskConical, Trophy, Bus, UtensilsCrossed,
  Building2, CheckCircle2, Clock, Users, ArrowRight, Star
} from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import { facilities } from '@/lib/data'

interface PageProps {
  params: Promise<{ slug: string }>
}

const facilityImages: Record<string, string> = {
  library:        '/images/library.jpg',
  'science-lab':  '/images/sciencelab.png',
  sports:         '/images/sports.jpg',
  transportation: '/images/schoolbus.png',
  cafeteria:      '/images/cafeteria.jpg',
}

const facilityIcons: Record<string, React.ReactNode> = {
  library:        <BookOpen className="w-6 h-6" />,
  'science-lab':  <FlaskConical className="w-6 h-6" />,
  sports:         <Trophy className="w-6 h-6" />,
  transportation: <Bus className="w-6 h-6" />,
  cafeteria:      <UtensilsCrossed className="w-6 h-6" />,
}

const iconColors: Record<string, string> = {
  library:        'from-blue-500 to-cyan-600',
  'science-lab':  'from-emerald-500 to-green-600',
  sports:         'from-orange-500 to-amber-600',
  transportation: 'from-violet-500 to-purple-600',
  cafeteria:      'from-rose-500 to-pink-600',
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const facility = facilities.find((f) => f.slug === slug)
  if (!facility) return { title: 'Facility Not Found | Nobel Environment Academy' }
  return {
    title: `${facility.title} | Nobel Environment Academy`,
    description: facility.description,
  }
}

const FacilityDetailPage: FC<PageProps> = async ({ params }) => {
  const { slug } = await params
  const facility = facilities.find((f) => f.slug === slug)
  if (!facility) notFound()

  const otherFacilities = facilities.filter((f) => f.id !== facility.id)
  const image = facilityImages[facility.slug] ?? '/images/homeb.jpg'
  const color = iconColors[facility.slug] ?? 'from-green-500 to-emerald-600'

  return (
    <div className="flex flex-col bg-white">
      <PageBanner
        title={facility.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Facilities', href: '/facilities' },
          { label: facility.title, href: '#' },
        ]}
        image={image}
      />

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/7]">
              <Image src={image} alt={facility.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
                  {facilityIcons[facility.slug] ?? <Building2 className="w-6 h-6" />}
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">{facility.title}</p>
                  <p className="text-white/70 text-xs">{facility.features.length} key features</p>
                </div>
              </div>
            </div>

            {/* About */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600">Overview</span>
              <h2 className="text-2xl font-bold text-green-900 mt-2 mb-4">About This Facility</h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">{facility.description}</p>
            </div>

            {/* Features */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600">What's Included</span>
              <h2 className="text-2xl font-bold text-green-900 mt-2 mb-5">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facility.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-colors duration-200">
                    <CheckCircle2 size={17} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA banner */}
            {/* <div className="bg-gradient-to-br from-green-800 to-green-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Want to See It in Person?</h3>
              <p className="text-green-200 text-sm mb-6">
                Visit our campus and experience our facilities firsthand.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold rounded-xl transition-colors duration-200"
              >
                Schedule a Visit <ArrowRight size={16} />
              </Link>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">

            {/* Quick info */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-green-800 px-5 py-4">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Facility Info</h3>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {[
                  { icon: Building2, label: 'Facility', value: facility.title },
                  { icon: Star, label: 'Total Features', value: `${facility.features.length} Available` },
                  { icon: Clock, label: 'Availability', value: 'All School Hours' },
                  { icon: Users, label: 'Access', value: 'All Students' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 px-5 py-3.5">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{label}</p>
                      <p className="text-sm font-semibold text-gray-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
                >
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Other facilities */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-gray-800 px-5 py-4">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Other Facilities</h3>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {otherFacilities.map((f) => (
                  <Link
                    key={f.id}
                    href={`/facilities/${f.slug}`}
                    className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors group"
                  >
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${iconColors[f.slug] ?? 'from-green-500 to-emerald-600'} flex items-center justify-center text-white shrink-0`}>
                      {facilityIcons[f.slug] ?? <Building2 className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors truncate">{f.title}</p>
                      <p className="text-xs text-gray-400">{f.features.length} features</p>
                    </div>
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-green-600 transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return facilities.map((facility) => ({ slug: facility.slug }))
}

export default FacilityDetailPage
