'use client'

import React, { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SchoolLifeSlide {
  id: number
  image: string
  alt: string
}

const SchoolLifeImageSlider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const slides: SchoolLifeSlide[] = [
    {
      id: 1,
      image: '/images/school1.jpg',
      alt: 'School Life - Activities'
    },
    {
      id: 2,
      image: '/images/schoollife2.jpg',
      alt: 'School Life - Campus'
    },
    {
      id: 3,
      image: '/images/schoollif3.jpg',
      alt: 'School Life - Events'
    },
    {
      id: 4,
      image: '/images/schoollife4.jpg',
      alt: 'School Life - Students'
    },
    {
      id: 5,
      image: '/images/schoollife5.jpg',
      alt: 'School Life - Culture'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] overflow-hidden rounded-lg group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-emerald-900" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-emerald-900" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default SchoolLifeImageSlider
