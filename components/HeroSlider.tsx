'use client'

import React, { FC, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Slide } from '@/types'

const slides: Slide[] = [
  {
    id: 1,
    heading: 'Admissions Open – 2083 B.S.',
    subtext: 'Enroll your child in a nurturing, nature-inspired learning environment.',
    primaryBtn: { label: 'About Us', href: '/about' },
    secondaryBtn: { label: 'Apply Now', href: '/contact' },
    bgClass: 'from-green-900 to-green-700',
    bgImage: '/images/homea.jpg'
  },
  {
    id: 2,
    heading: 'Montessori & Secondary School in Kotihawa',
    subtext: 'Quality education from pre-school to Grade 10 in Rupandehi, Nepal.',
    primaryBtn: { label: 'Our Programs', href: '/programs' },
    secondaryBtn: { label: 'Contact Us', href: '/contact' },
    bgClass: 'from-green-800 to-teal-700',
    bgImage: '/images/homeb.jpg'
  },
  {
    id: 3,
    heading: 'Growing Minds, Greener Futures',
    subtext: 'Nurturing academic excellence in an eco-conscious, child-friendly campus.',
    primaryBtn: { label: 'About Us', href: '/about' },
    secondaryBtn: { label: 'Apply Now', href: '/contact' },
    bgClass: 'from-teal-900 to-green-800',
    bgImage: '/images/homec.jpg'
  },
  {
    id: 4,
    heading: 'Award-Winning Faculty & Programs',
    subtext: 'Expert educators dedicated to student success and holistic development.',
    primaryBtn: { label: 'Meet Our Team', href: '/about/team' },
    secondaryBtn: { label: 'Learn More', href: '/about' },
    bgClass: 'from-green-900 to-emerald-800',
    bgImage: '/images/homed.png'
  },
  {
    id: 5,
    heading: 'Join Nobel Environment Academy Today',
    subtext: 'Begin your journey to excellence in a supportive, eco-friendly community.',
    primaryBtn: { label: 'Apply Now', href: '/contact' },
    secondaryBtn: { label: 'Schedule Visit', href: '/contact' },
    bgClass: 'from-emerald-900 to-green-800',
    bgImage: '/images/homee.png'
  }
]

const INTERVAL = 5000

const HeroSlider: FC = () => {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length)
    setProgress(0)
  }, [])

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [])

  const goTo = (i: number) => {
    setCurrent(i)
    setProgress(0)
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  // Progress bar
  useEffect(() => {
    setProgress(0)
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const pct = Math.min(((now - start) / INTERVAL) * 100, 100)
      setProgress(pct)
      if (pct < 100) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [current])

  return (
    <div id="hero" className="relative w-full min-h-screen md:h-screen overflow-hidden bg-black">

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* Image */}
          <Image
            src={slide.bgImage!}
            alt={slide.heading}
            fill
            priority={i === 0}
            className="object-cover object-center scale-105"
            style={{
              transform: i === current ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 6s ease-out',
            }}
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center pb-32">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="absolute max-w-2xl"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.9s ease, transform 0.9s ease',
                transitionDelay: i === current ? '0.3s' : '0s',
                pointerEvents: i === current ? 'auto' : 'none',
              }}
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                ESTD.: 2068 BS
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 drop-shadow-xl">
                {slide.heading}
              </h1>

              <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
                {slide.subtext}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={slide.primaryBtn.href}
                  className="px-7 py-3 bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5"
                >
                  {slide.primaryBtn.label}
                </Link>
                <Link
                  href={slide.secondaryBtn.href}
                  className="px-7 py-3 border-2 border-white/60 hover:border-white text-white font-bold rounded-lg text-sm transition-all duration-300 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-0.5"
                >
                  {slide.secondaryBtn.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar — dots + progress + arrows */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-10 pb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

          {/* Slide counter + dots */}
          <div className="flex items-center gap-4">
            <span className="text-white/50 text-xs font-mono tabular-nums">
              {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: i === current ? 40 : 16, background: 'rgba(255,255,255,0.25)' }}
                >
                  {i === current && (
                    <span
                      className="absolute inset-y-0 left-0 bg-yellow-400 rounded-full"
                      style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full border border-white/30 hover:border-white/70 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full border border-white/30 hover:border-white/70 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Side thumbnail strip — desktop only */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-2">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative w-16 h-10 rounded-md overflow-hidden transition-all duration-300"
            style={{
              opacity: i === current ? 1 : 0.45,
              outline: i === current ? '2px solid #eab308' : '2px solid transparent',
              outlineOffset: '2px',
            }}
          >
            <Image
              src={slide.bgImage!}
              alt={slide.heading}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
