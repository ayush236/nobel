import React, { FC } from 'react'
import Link from 'next/link'
import MuxPlayer from '@mux/mux-player-react'

interface InfoPill {
  label: string
  value: string
}

const AboutSection: FC = () => {
  const infoPills: InfoPill[] = [
    { label: 'Est.', value: '2068 B.S.' },
    { label: 'Students', value: '215+' }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Left Side */}
          <div className="flex-1">
            <span className="text-green-700 uppercase tracking-widest text-xs sm:text-sm font-bold">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mt-3 sm:mt-4 mb-4 sm:mb-6">
              About Nobel Environment Academy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Nobel Environment Academy is a private Montessori and secondary school established in
              2068 B.S. (2011 A.D.) located at Tilottama-15, Kotihawa, Rupandehi, Lumbini Province,
              Nepal. With 215+ enrolled students, we provide quality child-friendly education from
              pre-school through Grade 10. Led by Principal Sundar Gurung and President Purna
              Bahadur Gurung, we foster academic excellence and holistic development.
            </p>

            {/* Info Pills */}
            <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
              {infoPills.map((pill, index) => (
                <div
                  key={index}
                  className="bg-green-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-center border border-green-200"
                >
                  <div className="text-xs sm:text-sm text-gray-600">{pill.label}</div>
                  <div className="text-base sm:text-lg font-bold text-green-800">{pill.value}</div>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <Link
              href="/about"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition duration-300 text-sm sm:text-base"
            >
              Learn More →
            </Link>
          </div>

          {/* Right Side - Video */}
          <div className="flex-1 w-full">
            <div className="relative bg-gray-200 rounded-2xl aspect-video overflow-hidden">
              <MuxPlayer
                playbackId="z01mNqcbPO4qQnjUNvCgiMA59Kja5kWuxaUzxdeL8WnY"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
