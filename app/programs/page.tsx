import React, { FC } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Palette, BookOpen, FlaskConical, GraduationCap } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import { programs } from '@/lib/data'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Academic Programs | Nobel Environment Academy',
  description: 'Explore all of our academic programs from Montessori to Higher Secondary, designed to provide quality education at every stage.',
  keywords: ['programs', 'education', 'montessori', 'primary', 'secondary', 'higher secondary']
}

const programIcons: Record<string, React.ReactNode> = {
  montessori: <Palette className="w-12 h-12 text-green-500" />,
  primary: <BookOpen className="w-12 h-12 text-green-500" />,
  'lower-secondary': <FlaskConical className="w-12 h-12 text-green-500" />,
  secondary: <GraduationCap className="w-12 h-12 text-green-500" />,
  'higher-secondary': <GraduationCap className="w-12 h-12 text-green-500" />
}

const ProgramsPage: FC = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
    <div className="flex flex-col">
      <PageBanner
        title="Academic Programs"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs', href: '/programs' }
        ]}
      />

      {/* Programs Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">
              Our Academic Programs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality education designed for every stage of child development, from early childhood to senior secondary level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.id}
                href={`/programs/${program.slug}`}
              >
                <div
                  className="relative h-96 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  style={{
                    backgroundImage: program.image
                      ? `linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${program.image}')`
                      : 'linear-gradient(135deg, rgba(22, 101, 52, 0.9), rgba(34, 197, 94, 0.8))',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Content - visible on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    {/* Icon at top */}
                    <div className="text-4xl">
                      {programIcons[program.slug] || <GraduationCap className="w-12 h-12 text-green-400" />}
                    </div>

                    {/* Info at bottom */}
                    <div>
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>

                      {/* Description */}
                      <p className="text-gray-100 text-sm mb-4 line-clamp-2">{program.description}</p>

                      {/* Meta info */}
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <span className="inline-block bg-green-600 text-white text-xs font-semibold rounded-full px-3 py-1">
                            {program.level}
                          </span>
                          <span className="inline-block bg-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1">
                            {program.duration}
                          </span>
                        </div>
                      </div>

                      {/* Explore button */}
                      <button className="mt-4 w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300">
                        Explore Program
                      </button>
                    </div>
                  </div>

                  {/* Default view - show title and level */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="text-5xl mb-4">
                      {programIcons[program.slug] || <GraduationCap className="w-16 h-16 text-green-400" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-3">{program.title}</h3>
                    <span className="inline-block bg-green-600 text-white text-sm font-semibold rounded-full px-4 py-2">
                      {program.level}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us to learn more about our programs and start your child's journey of academic excellence.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold text-lg rounded-lg transition duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
    {/* footer */}
    <Footer />
    </div>
  )
}

export default ProgramsPage
