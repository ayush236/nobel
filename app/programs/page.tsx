import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Palette, BookOpen, FlaskConical, GraduationCap,
  Clock, ArrowRight, Users, Award, CheckCircle
} from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import { programs } from '@/lib/data'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Academic Programs | Nobel Environment Academy',
  description: 'Explore all academic programs from Montessori to Higher Secondary.',
  keywords: ['programs', 'education', 'montessori', 'primary', 'secondary', 'higher secondary'],
}

const programIcons: Record<string, React.ReactNode> = {
  montessori:         <Palette className="w-6 h-6" />,
  primary:            <BookOpen className="w-6 h-6" />,
  'lower-secondary':  <FlaskConical className="w-6 h-6" />,
  secondary:          <GraduationCap className="w-6 h-6" />,
  'higher-secondary': <GraduationCap className="w-6 h-6" />,
}

const programColors = [
  'from-violet-600 to-purple-700',
  'from-blue-600 to-cyan-700',
  'from-emerald-600 to-ticks-700',
  'from-orange-500 to-amber-600',
  'from-rose-600 to-pink-700',
]

const stats = [
  { icon: Users, value: '215+', label: 'Students Enrolled' },
  { icon: Award, value: 'NEB', label: 'Affiliated' },
  { icon: GraduationCap, value: '5', label: 'Programs Offered' },
  { icon: CheckCircle, value: '2068', label: 'Est. B.S.' },
]

const ProgramsPage: FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <Topbar />
      <Navbar />

      <PageBanner
        title="Academic Programs"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs', href: '/programs' },
        ]}
        image="/images/secondary.jpg"
      />

      {/* Stats strip */}
      <div className="bg-green-900 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 mb-2">
                <Icon size={18} className="text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-green-300 mt-0.5 uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Programs list */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mt-2 mb-3">Our Academic Programs</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Quality education designed for every stage of child development — from early childhood to senior secondary.
            </p>
          </div>

          <div className="space-y-6">
            {programs.map((program, index) => (
              <Link
                key={program.id}
                href={`/programs/${program.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-green-200 transition-all duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">

                    {/* Image */}
                    <div className="relative h-52 sm:h-full min-h-[200px] overflow-hidden">
                      <Image
                        src={program.image ?? '/images/homea.jpg'}
                        alt={program.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 320px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                      {/* Level badge on image */}
                      <span className="absolute top-4 left-4 text-xs font-bold bg-white/90 text-green-800 px-3 py-1 rounded-full">
                        {program.level}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        {/* Icon + title */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${programColors[index % programColors.length]} flex items-center justify-center text-white shrink-0`}>
                            {programIcons[program.slug] ?? <GraduationCap className="w-6 h-6" />}
                          </div>
                          <h3 className="text-xl font-bold text-green-900 group-hover:text-green-700 transition-colors">
                            {program.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                          {program.description}
                        </p>

                        {/* Objectives preview */}
                        {program.objectives.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {program.objectives.slice(0, 2).map((obj, i) => (
                              <span key={i} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                                <CheckCircle size={11} className="text-green-500 shrink-0" />
                                {obj}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Footer row */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <Clock size={13} className="text-green-600" />
                          {program.duration}
                        </div>
                        <span className="flex items-center gap-1 text-sm font-semibold text-green-700 group-hover:gap-2 transition-all duration-200">
                          Explore Program <ArrowRight size={15} />
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
   

      <Footer />
    </div>
  )
}

export default ProgramsPage
