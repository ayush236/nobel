import React, { FC } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Palette, BookOpen, FlaskConical, GraduationCap, CheckCircle2, ArrowRight, Clock, BarChart2, Globe, BookMarked } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import { programs } from '@/lib/data'
import type { Program } from '@/types'


interface PageProps {

  params: Promise<{ slug: string }>
}

const programIcons: Record<string, React.ReactNode> = {
  montessori:        <Palette className="w-10 h-10 text-green-700" />,
  primary:           <BookOpen className="w-10 h-10 text-green-700" />,
  'lower-secondary': <FlaskConical className="w-10 h-10 text-green-700" />,
  secondary:         <GraduationCap className="w-10 h-10 text-green-700" />,
  'higher-secondary':<GraduationCap className="w-10 h-10 text-green-700" />,
}

const sidebarIcons: Record<string, React.ReactNode> = {
  montessori:        <Palette className="w-5 h-5 text-green-700" />,
  primary:           <BookOpen className="w-5 h-5 text-green-700" />,
  'lower-secondary': <FlaskConical className="w-5 h-5 text-green-700" />,
  secondary:         <GraduationCap className="w-5 h-5 text-green-700" />,
  'higher-secondary':<GraduationCap className="w-5 h-5 text-green-700" />,
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const program = programs.find((p) => p.slug === slug)

  if (!program) {
    return {
      title: 'Program Not Found | Nobel Environment Academy'
    }
  }

  return {
    title: `${program.title} | Nobel Environment Academy`,
    description: program.description,
    keywords: [program.title, program.level, 'education', 'nobility', 'Nepal']
  }
}

const ProgramPage: FC<PageProps> = async ({ params }) => {
  const { slug } = await params
  const program = programs.find((p) => p.slug === slug)

  if (!program) {
    notFound()
  }

  // Get other programs for sidebar
  const otherPrograms = programs.filter((p) => p.slug !== slug)

  return (
    <div className="flex flex-col">
      <PageBanner
        title={program.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs', href: '/programs' },
          { label: program.title, href: `/programs/${program.slug}` }
        ]}
        image={program.image}
      />

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Program Overview Card */}
              <div className="mb-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {programIcons[program.slug] ?? <GraduationCap className="w-10 h-10 text-green-700" />}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-green-900 mb-4">{program.title}</h2>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
                        {program.level}
                      </span>
                      <span className="flex items-center gap-1 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm">
                        <Clock className="w-3.5 h-3.5" /> {program.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* About This Program */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-green-900 mb-4">About This Program</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{program.description}</p>
              </div>

              {/* Program Objectives */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Program Objectives</h3>
                <ul className="space-y-4">
                  {program.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Pathways */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Career Pathways</h3>
                <ul className="space-y-4">
                  {program.career.map((path, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{path}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Now CTA Banner */}
              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white rounded-2xl p-8 mb-12 text-center">
                <h3 className="text-3xl font-bold mb-2">Ready to Start?</h3>
                <p className="text-green-100 mb-6">
                  Join Nobel Environment Academy and begin your journey of academic excellence and
                  holistic development.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold rounded-lg transition duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Program Info Card */}
              <div className="top-24 bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-green-900 mb-6">Program Info</h3>

                <div className="space-y-4 mb-8">
                  <div className="pb-4 border-b border-green-200 flex items-center gap-3">
                    <BarChart2 className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Level</p>
                      <p className="font-bold text-green-900">{program.level}</p>
                    </div>
                  </div>
                  <div className="pb-4 border-b border-green-200 flex items-center gap-3">
                    <Clock className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-green-900">{program.duration}</p>
                    </div>
                  </div>
                  <div className="pb-4 border-b border-green-200 flex items-center gap-3">
                    <BookMarked className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Affiliation</p>
                      <p className="font-bold text-green-900">NEB Affiliated</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Language</p>
                      <p className="font-bold text-green-900">Nepali & English</p>
                    </div>
                  </div>
                </div>

                
                
              </div>

              {/* Other Programs */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 ">
                <h3 className="text-lg font-bold text-green-900 mb-3">Other Programs</h3>
                <div className="space-y-3">
                  {otherPrograms.map((prog) => (
                    <Link
                      key={prog.id}
                      href={`/programs/${prog.slug}`}
                      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-green-600 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        {sidebarIcons[prog.slug] ?? <GraduationCap className="w-5 h-5 text-green-700" />}
                      </div>
                      <div>
                        <p className="font-semibold text-green-900 text-sm">{prog.title}</p>
                        <p className="text-xs text-gray-600 mt-1">{prog.level}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function generateStaticParams(): Array<{ slug: string }> {
  return programs.map((program) => ({
    slug: program.slug
  }))
}

export const revalidate = 3600 // Revalidate every hour (ISR)

export default ProgramPage
