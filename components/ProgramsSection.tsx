import React, { FC } from 'react'
import Link from 'next/link'
import { Palette, BookOpen, Microscope, GraduationCap } from 'lucide-react'
import type { Program } from '@/types'

const ProgramsSection: FC = () => {
  const programs: Program[] = [
    {
      id: 1,
      emoji: <Palette className="w-12 h-12 text-green-500" />,
      title: 'Montessori / Pre-School',
      description: 'Play-based early childhood development for ages 3–5.',
      duration: '2 Years',
      level: 'Pre-School',
      image: '/images/monteshri.jpg',
      slug: '',
      credits: '',
      objectives: [],
      career: []
    },
    {
      id: 2,
      emoji: <BookOpen className="w-12 h-12 text-green-500" />,
      title: 'Primary School',
      description: 'Core subjects: English, Nepali, Math, Science, Social Studies.',
      duration: '5 Years',
      level: 'Grade 1–5',
      image: '/images/primary.jpg',
      slug: '',
      credits: '',
      objectives: [],
      career: []    
    },
    {
      id: 3,
      emoji: <Microscope className="w-12 h-12 text-green-500" />,
      title: 'Lower Secondary',
      description: 'Foundation curriculum plus Computer Education.',
      duration: '3 Years',
      level: 'Grade 6–8',
      image: '/images/lower secondary.jpg',
      slug: '',
      credits: '',
      objectives: [],
      career: []      
    },
    {
      id: 4,
      emoji: <GraduationCap className="w-12 h-12 text-green-500" />,
      title: 'Secondary School',
      description: 'SEE Preparation, NEB Affiliated comprehensive curriculum.',
      duration: '2 Years',
      level: 'Grade 9–10',
      image: '/images/secondary.jpg',
      slug: '',
      credits: '',
      objectives: [],
      career: []
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-green-700 uppercase tracking-widest text-xs sm:text-sm font-bold">
            OUR PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-green-900 mt-3 sm:mt-4">
            Educational Programs
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Quality education designed for every stage of child development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 min-h-80"
              style={{
                backgroundImage: program.image
                  ? `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('${program.image}')`
                  : 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="p-4 sm:p-6 h-full flex flex-col justify-between relative md:opacity-0 md:hover:opacity-100 transition duration-300">
                {/* Emoji */}
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                  <span className="text-green-400">{program.emoji}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{program.title}</h3>

                {/* Description */}
                <p className="text-gray-100 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">{program.description}</p>

                {/* Duration */}
                <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">{program.duration}</p>

                {/* Level Badge */}
                <div className="mb-4 sm:mb-6">
                  <span className="inline-block bg-green-600 text-white text-xs font-semibold rounded-full px-3 py-1">
                    {program.level}
                  </span>
                </div>

                {/* Apply Now Button */}
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    className="block w-full sm:w-2/3 md:w-3/4 text-center px-3 sm:px-4 py-2 sm:py-3 bg-green-700 hover:bg-green-600 text-white text-sm sm:text-base font-bold rounded-lg transition duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
