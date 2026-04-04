'use client'

import React, { FC, useState } from 'react'
import type { Notice } from '@/types'

interface NoticeFilterProps {
  notices: Notice[]
}

type CategoryType = 'All' | 'Admission' | 'Examination' | 'General' | 'Event'

const NoticeFilter: FC<NoticeFilterProps> = ({ notices }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All')

  const categories: CategoryType[] = ['All', 'Admission', 'Examination', 'General', 'Event']

  const filteredNotices =
    activeCategory === 'All'
      ? notices
      : notices.filter((notice) => notice.category === activeCategory)

  const categoryColors: Record<Notice['category'], string> = {
    Admission: 'bg-blue-100 text-blue-700',
    Examination: 'bg-red-100 text-red-700',
    General: 'bg-green-100 text-green-700',
    Event: 'bg-yellow-100 text-yellow-700'
  }

  const truncateText = (text: string, lines: number = 2) => {
    const textLines = text.split('\n')
    return textLines.slice(0, lines).join('\n')
  }

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
              activeCategory === category
                ? 'bg-green-700 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Notice List */}
      <div className="space-y-3 sm:space-y-4">
        {filteredNotices.map((notice, index) => (
          <div key={notice.id}>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {/* Left Section - Category & Date */}
                <div className="col-span-1">
                  <div className="space-y-2 sm:space-y-3">
                    <span
                      className={`inline-block text-xs font-bold rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 ${categoryColors[notice.category]}`}
                    >
                      {notice.category}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">{notice.date}</p>
                  </div>
                </div>

                {/* Right Section - Title & Description */}
                <div className="col-span-1 sm:col-span-2">
                  <h3 className="text-base sm:text-lg font-semibold hover:text-green-700 transition-colors duration-300 cursor-pointer mb-1 sm:mb-2 line-clamp-2">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{notice.description}</p>
                  <button className="text-green-700 font-semibold text-xs sm:text-sm hover:text-green-800 transition-colors mt-1 sm:mt-2">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index < filteredNotices.length - 1 && <div className="border-b border-gray-200 my-2 sm:my-4"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NoticeFilter
