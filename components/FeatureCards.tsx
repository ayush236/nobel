import React, { FC } from 'react'
import type { FeatureCard } from '@/types'
import { Leaf, BookOpen, UserCheck, Trophy } from 'lucide-react'

const FeatureCards: FC = () => {
  const features: FeatureCard[] = [
    {
      id: 1,
      icon: <Leaf className="h-12 w-12 text-green-700" />,
      title: 'Eco-Friendly Campus',
      description: 'Green, peaceful environment in Kotihawa inspiring focused and healthy learning.'
    },
    {
      id: 2,
      icon: <BookOpen className="h-12 w-12 text-green-700" />,
      title: 'Holistic Education',
      description: 'Structured, age-appropriate learning from Montessori through Grade 10.'
    },
    {
      id: 3,
      icon: <UserCheck className="h-12 w-12 text-green-700" />,
      title: 'Dedicated Teachers',
      description: 'Qualified and caring faculty committed to all-round student development.'
    },
    {
      id: 4,
      icon: <Trophy className="h-12 w-12 text-green-700" />,
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
              className="group bg-white border-t-4 border-green-700 rounded-lg shadow-md p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 p-4 text-green-700 transition-colors duration-300 group-hover:bg-green-100 group-hover:text-green-900">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-3 transition-colors duration-300 group-hover:text-green-800">{feature.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards
