import React, { FC } from 'react'
import type { FeatureCard } from '@/types'

const FeatureCards: FC = () => {
  const features: FeatureCard[] = [
    {
      id: 1,
      emoji: '🌿',
      title: 'Eco-Friendly Campus',
      description: 'Green, peaceful environment in Kotihawa inspiring focused and healthy learning.'
    },
    {
      id: 2,
      emoji: '📚',
      title: 'Holistic Education',
      description: 'Structured, age-appropriate learning from Montessori through Grade 10.'
    },
    {
      id: 3,
      emoji: '👨‍🏫',
      title: 'Dedicated Teachers',
      description: 'Qualified and caring faculty committed to all-round student development.'
    },
    {
      id: 4,
      emoji: '🏆',
      title: 'Proven Excellence',
      description: 'Consistent academic results and co-curricular achievements since 2068 B.S.'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-900 mb-8 sm:mb-12 leading-tight">
          Why Nobel Academy?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border-t-4 border-green-700 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-lg font-bold text-green-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards
