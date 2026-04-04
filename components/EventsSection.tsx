import React, { FC } from 'react'
import Image from 'next/image'
import type { Event } from '@/types'

const EventsSection: FC = () => {
  const events: Event[] = [
    { id: 1, day: '15', month: 'May', title: 'Graduation Ceremony', image: '/homee.jpg' },
    { id: 2, day: '22', month: 'May', title: 'Annual Sports Meet', image: '/sports.jpg' },
    { id: 3, day: '28', month: 'May', title: 'Science Exhibition', image: '/science2.jpg' },
    { id: 4, day: '05', month: 'June', title: 'Cultural Program', image: '/cultural.jpg' },
    { id: 5, day: '12', month: 'June', title: 'Parents Meeting', image: '/parents.jpg' },
    { id: 6, day: '20', month: 'June', title: 'Tree Plantation Drive', image: '/plant.jpg' }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-green-700 uppercase tracking-widest text-xs sm:text-sm font-bold">
            UPCOMING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-green-900 mt-3 sm:mt-4">Events Calendar</h2>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="flex overflow-x-auto gap-3 sm:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 pb-3 sm:pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {events.map((event) => (
            <div
              key={event.id}
              className="shrink-0 w-72 sm:w-80 md:w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Date Badge */}
              <div className="bg-linear-to-br from-green-700 to-green-800 text-white p-6 text-center">
                <div className="text-4xl font-bold">{event.day}</div>
                <div className="text-lg font-medium mt-1">{event.month}</div>
              </div>

              {/* Event Image */}
              <div className="relative h-40 bg-gray-200 overflow-hidden">
                {event.image && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Title */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-900">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection
