'use client'

import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import type { Slide } from '@/types'

const HeroSlider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const slides: Slide[] = [
    {
      id: 1,
      heading: 'Admissions Open – 2083 B.S.',
      subtext: 'Enroll your child in a nurturing, nature-inspired learning environment.',
      primaryBtn: { label: 'About Us', href: '/about' },
      secondaryBtn: { label: 'Apply Now', href: '/contact' },
      bgClass: 'from-green-900 to-green-700',
      bgImage: '/homea.jpg'
    },
    {
      id: 2,
      heading: 'Montessori & Secondary School in Kotihawa',
      subtext: 'Quality education from pre-school to Grade 10 in Rupandehi, Nepal.',
      primaryBtn: { label: 'Our Programs', href: '/programs' },
      secondaryBtn: { label: 'Contact Us', href: '/contact' },
      bgClass: 'from-green-800 to-teal-700',
      bgImage: '/homeb.jpg'
    },
    {
      id: 3,
      heading: 'Growing Minds, Greener Futures',
      subtext:
        'Nurturing academic excellence in an eco-conscious, child-friendly campus.',
      primaryBtn: { label: 'About Us', href: '/about' },
      secondaryBtn: { label: 'Apply Now', href: '/contact' },
      bgClass: 'from-teal-900 to-green-800',
      bgImage: '/homec.jpg'
    },
    {
      id: 4,
      heading: 'Award-Winning Faculty & Programs',
      subtext: 'Expert educators dedicated to student success and holistic development.',
      primaryBtn: { label: 'Meet Our Team', href: '/about/team' },
      secondaryBtn: { label: 'Learn More', href: '/about' },
      bgClass: 'from-green-900 to-emerald-800',
      bgImage: '/homed.png'
    },
    {
      id: 5,
      heading: 'Join Nobel Environment Academy Today',
      subtext: 'Begin your journey to excellence in a supportive, eco-friendly community.',
      primaryBtn: { label: 'Apply Now', href: '/contact' },
      secondaryBtn: { label: 'Schedule Visit', href: '/contact' },
      bgClass: 'from-emerald-900 to-green-800',
      bgImage: '/homee.png'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length])

  const handlePrev: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative min-h-screen md:h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
            index === currentSlide ? 'backdrop-opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: slide.bgImage ? `url(${slide.bgImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Content */}
          <div className="relative text-center text-white px-4 sm:px-6 max-w-2xl z-10 drop-shadow-lg py-12 md:py-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">{slide.heading}</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 text-gray-100 line-clamp-3">{slide.subtext}</p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href={slide.primaryBtn.href}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-yellow-500 text-green-900 font-bold rounded text-sm sm:text-base hover:bg-yellow-400 transition duration-300"
              >
                {slide.primaryBtn.label}
              </Link>
              <Link
                href={slide.secondaryBtn.href}
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-yellow-500 text-yellow-500 font-bold rounded text-sm sm:text-base hover:bg-yellow-500 hover:text-green-900 transition duration-300"
              >
                {slide.secondaryBtn.label}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/75 text-white p-1.5 sm:p-3 rounded-full transition duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/75 text-white p-1.5 sm:p-3 rounded-full transition duration-300"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-yellow-500 w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
