import React, { FC } from 'react'
import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
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

const FacilityDetailPage: FC<PageProps> = async ({ params }) => {
  const { slug } = await params
  const facility = facilities.find((f) => f.slug === slug)

  if (!facility) {
    return (
      <div className="flex flex-col min-h-screen">
        <PageBanner
          title="Facility Not Found"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Facilities', href: '/facilities' },
            { label: 'Not Found', href: '#' }
          ]}
          image="/images/homeb.jpg"
        />
        <section className="flex-1 py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Facility Not Found</h1>
            <p className="text-gray-700 text-lg mb-8">
              The facility you're looking for doesn't exist.
            </p>
            <Link
              href="/facilities"
              className="inline-block px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition duration-300"
            >
              Back to Facilities
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const otherFacilities = facilities.filter((f) => f.id !== facility.id)

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title={facility.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Facilities', href: '/facilities' },
          { label: facility.title, href: `#` }
        ]}
        image={facilityImages[facility.slug] ?? '/images/homeb.jpg'}
      />

      {/* Main Content */}
      <section className="flex-1 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Facility Details (2/3 width) */}
            <div className="lg:col-span-2">
              {/* Emoji Header */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-7xl mb-6">
                  {facility.emoji}
                </div>
                <h1 className="text-4xl font-bold text-green-900 mb-4">{facility.title}</h1>
                <p className="text-gray-700 text-lg leading-relaxed">{facility.description}</p>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-green-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {facility.features.map((feature, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      {/* Green Checkmark */}
                      <div className="shrink-0 mt-1">
                        <svg
                          className="h-5 w-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-base">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Banner */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2">🎯 Supporting Excellence</h3>
                <p className="text-blue-800">
                  These facilities are designed and maintained to support comprehensive learning
                  experiences that develop student's academic, physical, and social capabilities.
                </p>
              </div>
            </div>

            {/* Right Column - Sidebar (1/3 width) */}
            <div className="lg:col-span-1">
              {/* Other Facilities */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Other Facilities</h3>
                <div className="space-y-3">
                  {otherFacilities.map((f) => (
                    <Link
                      key={f.id}
                      href={`/facilities/${f.slug}`}
                      className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{f.emoji}</span>
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-green-700">
                          {f.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white border-2 border-green-200 rounded-xl p-6 mb-6 sticky top-96">
                <h3 className="text-lg font-bold text-green-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Facility ID</p>
                    <p className="text-sm text-gray-800 font-semibold">{facility.id}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Features</p>
                    <p className="text-sm text-gray-800 font-semibold">{facility.features.length} Available</p>
                  </div>
                </div>
              </div>

              {/* Apply Now CTA */}
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold text-center rounded-lg transition duration-300 sticky top-80"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-8">Related Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherFacilities.slice(0, 4).map((f) => (
              <Link
                key={f.id}
                href={`/facilities/${f.slug}`}
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-3">{f.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.features.length} Key Features</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return facilities.map((facility) => ({
    slug: facility.slug
  }))
}

export default FacilityDetailPage
