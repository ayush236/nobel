'use client'

import React, { FC, useState, useEffect } from 'react'
import type { Testimonial } from '@/types'

const Testimonials: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        'Nobel Environment Academy gave my child the perfect foundation. Teachers are caring and the environment is truly child-friendly.',
      name: 'Ram Prasad Gurung',
      role: 'Parent of Grade 5 Student',
      initials: 'RG'
    },
    {
      id: 2,
      quote:
        'I passed my SEE with distinction thanks to the dedicated teachers and structured environment at Nobel.',
      name: 'Sita Thapa',
      role: 'SEE Graduate 2080',
      initials: 'ST'
    },
    {
      id: 3,
      quote:
        "The Montessori program shaped my child's curiosity and confidence from a very young age.",
      name: 'Kamala Devi Pun',
      role: 'Parent of Pre-School Graduate',
      initials: 'KP'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-green-700 uppercase tracking-widest text-xs sm:text-sm font-bold">
            PARENT & STUDENT VOICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mt-3 sm:mt-4">Testimonials</h2>
        </div>

        {/* Testimonial Cards */}
        <div className="relative min-h-96 sm:h-96 flex items-center justify-center px-4 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 md:static flex flex-col items-center justify-center transition-opacity duration-500 px-4 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 md:opacity-100'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
                {/* Quote */}
                <p className="text-gray-700 text-center text-base sm:text-lg italic mb-6 sm:mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Avatar */}
                <div className="flex flex-col items-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {testimonial.initials}
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-base sm:text-lg font-bold text-green-900">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-green-700 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
