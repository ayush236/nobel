import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { BookOpen, FlaskConical, Trophy, Bus, UtensilsCrossed, CheckCircle2, Building2, Clock, Users, Star } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import { facilities } from '@/lib/data'

interface PageProps {
  params: Promise<{ slug: string }>
}

const facilityImages: Record<string, string> = {
  library: '/images/library.jpg',
  'science-lab': '/images/science2.jpg',
  sports: '/images/sports.jpg',
  transportation: '/images/schoolbus.png',
  cafeteria: '/images/cafeteria.jpg'
}

const facilityIcons: Record<string, React.ReactNode> = {
  library:        <BookOpen className="w-10 h-10 text-green-700" />,
  'science-lab':  <FlaskConical className="w-10 h-10 text-green-700" />,
  sports:         <Trophy className="w-10 h-10 text-green-700" />,
  transportation: <Bus className="w-10 h-10 text-green-700" />,
  cafeteria:      <UtensilsCrossed className="w-10 h-10 text-green-700" />,
}

const sidebarIcons: Record<string, React.ReactNode> = {
  library:        <BookOpen className="w-5 h-5 text-green-700" />,
  'science-lab':  <FlaskConical className="w-5 h-5 text-green-700" />,
  sports:         <Trophy className="w-5 h-5 text-green-700" />,
  transportation: <Bus className="w-5 h-5 text-green-700" />,
  cafeteria:      <UtensilsCrossed className="w-5 h-5 text-green-700" />,
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

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title={facility.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Facilities', href: '/facilities' },
          { label: facility.title, href: '#' }
        ]}
        image={image}
      />

      <section className="py-16 px-6 bg-white flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Column */}
            <div className="lg:col-span-2">

              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {facilityIcons[facility.slug] ?? <Building2 className="w-10 h-10 text-green-700" />}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-green-900 mb-3">{facility.title}</h2>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
                    {facility.features.length} Key Features
                  </span>
                </div>
              </div>

              {/* Facility Image */}
              <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-10">
                <Image src={image} alt={facility.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* About */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-green-900 mb-4">About This Facility</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{facility.description}</p>
              </div>

              {/* Features */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {facility.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Banner */}
              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white rounded-2xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">Want to Learn More?</h3>
                <p className="text-green-100 mb-6">
                  Visit our campus and experience our world-class facilities firsthand.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold rounded-lg transition duration-300"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">

              {/* Quick Info Card */}
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-green-900 mb-6">Facility Info</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-green-200 flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Facility</p>
                      <p className="font-bold text-green-900">{facility.title}</p>
                    </div>
                  </div>
                  <div className="pb-4 border-b border-green-200 flex items-center gap-3">
                    <Star className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Total Features</p>
                      <p className="font-bold text-green-900">{facility.features.length} Available</p>
                    </div>
                  </div>
                  <div className="pb-4 border-b border-green-200 flex items-center gap-3">
                    <Clock className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Availability</p>
                      <p className="font-bold text-green-900">All School Hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Access</p>
                      <p className="font-bold text-green-900">All Students</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block w-full text-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition duration-300"
                >
                  Contact Us
                </Link>
              </div>

              {/* Other Facilities */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4">Other Facilities</h3>
                <div className="space-y-3">
                  {otherFacilities.map((f) => (
                    <Link
                      key={f.id}
                      href={`/facilities/${f.slug}`}
                      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-green-600 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        {sidebarIcons[f.slug] ?? <Building2 className="w-5 h-5 text-green-700" />}
                      </div>
                      <div>
                        <p className="font-semibold text-green-900 text-sm">{f.title}</p>
                        <p className="text-xs text-gray-600">{f.features.length} Key Features</p>
                      </div>
                    </Link>
                  ))}
                </div>
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
