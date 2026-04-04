'use client'

import React, { FC, useState, useEffect, useRef } from 'react'
import type { Stat } from '@/types'

const StatsCounter: FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats: Stat[] = [
    { id: 1, value: 215, suffix: '+', label: 'Students' },
    { id: 2, value: 13, suffix: '+', label: 'Years of Excellence' },
    { id: 3, value: 10, suffix: '', label: 'Grades (1–10)' },
    { id: 4, value: 4, suffix: '', label: 'Levels of Education' },
    { id: 5, value: 30, suffix: '+', label: 'Faculty Members' },
    { id: 6, value: 500, suffix: '+', label: 'Graduates' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start the count-up animation
          stats.forEach((stat, index) => {
            const interval = setInterval(() => {
              setCounts((prev) => {
                const newCounts = [...prev]
                if (newCounts[index] < stat.value) {
                  newCounts[index] = Math.min(newCounts[index] + Math.ceil(stat.value / 30), stat.value)
                } else {
                  clearInterval(interval)
                }
                return newCounts
              })
            }, 50)
          })

          // Stop observing after animation starts
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-green-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-white font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
