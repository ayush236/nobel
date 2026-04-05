import React, { FC } from 'react'
import Link from 'next/link'
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";
import { GiMicroscope } from "react-icons/gi";
import { RiGraduationCapFill } from "react-icons/ri";




import type { Program } from '@/types'

const ProgramsSection: FC = () => {
  const programs: Program[] = [
    {
      id: 1,
      emoji: <IoIosColorPalette />,
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
      emoji: <MdOutlineMenuBook />,
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
      emoji: <GiMicroscope />,
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
      emoji: <RiGraduationCapFill />,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{
                backgroundImage: program.image
                  ? `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('${program.image}')`
                  : 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="p-6 h-full flex flex-col justify-between relative ">
                  {/* Hidden content */}

                <div className='opacity-0 hover:opacity-100 transition duration-300'>
                {/* Emoji */}
                <div className="text-5xl mb-4"><span className='text-green-600'>{program.emoji}</span></div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">{program.title}</h3>

                {/* Description */}
                <p className="text-gray-100 text-sm mb-4">{program.description}</p>

                {/* Duration */}
                <p className="text-sm text-gray-300 mb-4">{program.duration}</p>

                {/* Level Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-green-600 text-white text-xs font-semibold rounded-full px-3 py-1">
                    {program.level}
                  </span>
                </div>

                {/* Apply Now Button */}
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition duration-300"
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
