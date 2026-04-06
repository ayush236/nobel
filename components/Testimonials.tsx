'use client'

import { FC, useState, useEffect } from 'react'
import type { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Nobel Environment Academy gave my child the perfect foundation. Teachers are caring and the environment is truly child-friendly.',
    name: 'Ram Prasad Gurung',
    role: 'Parent of Grade 5 Student',
    initials: 'RG'
  },
  {
    id: 2,
    quote: 'I passed my SEE with distinction thanks to the dedicated teachers and structured environment at Nobel.',
    name: 'Sita Thapa',
    role: 'SEE Graduate 2080',
    initials: 'ST'
  },
  {
    id: 3,
    quote: "The Montessori program shaped my child's curiosity and confidence from a very young age.",
    name: 'Kamala Devi Pun',
    role: 'Parent of Pre-School Graduate',
    initials: 'KP'
  }
]

const Testimonials: FC = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-20 sm:py-28 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto text-center">

        {/* Label */}
        <p className="text-green-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          Testimonials
        </p>

        {/* Large quote mark */}
        <div className="text-green-100 text-[120px] leading-none font-serif select-none -mb-8">
          "
        </div>

        {/* Sliding quote */}
        <div className="relative min-h-[120px] flex items-center justify-center mb-8">
          {testimonials.map((t, i) => (
            <p
              key={t.id}
              className="absolute text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-light transition-all duration-700 px-2"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? 'translateY(0)' : 'translateY(10px)',
                pointerEvents: i === current ? 'auto' : 'none',
              }}
            >
              {t.quote}
            </p>
          ))}
        </div>

        {/* Author */}
        <div className="relative min-h-[56px] flex flex-col items-center justify-center mb-10">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="absolute flex flex-col items-center gap-1 transition-all duration-700"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? 'translateY(0)' : 'translateY(8px)',
                pointerEvents: i === current ? 'auto' : 'none',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-700 text-white text-xs font-bold flex items-center justify-center">
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="text-green-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-green-600' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
