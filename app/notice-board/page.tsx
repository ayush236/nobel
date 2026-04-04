'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import NoticeFilter from '@/components/NoticeFilter'
import Footer from '@/components/Footer'
import { notices } from '@/lib/data'

const NoticeBoard: FC = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Notice Board', href: '/notice-board' }
  ]

  // Count notices by category
  const categoryCounts = {
    Admission: notices.filter((n) => n.category === 'Admission').length,
    Examination: notices.filter((n) => n.category === 'Examination').length,
    General: notices.filter((n) => n.category === 'General').length,
    Event: notices.filter((n) => n.category === 'Event').length
  }

  const categoryColors: Record<string, { bg: string; text: string }> = {
    Admission: { bg: 'bg-blue-100', text: 'text-blue-700' },
    Examination: { bg: 'bg-red-100', text: 'text-red-700' },
    General: { bg: 'bg-green-100', text: 'text-green-700' },
    Event: { bg: 'bg-yellow-100', text: 'text-yellow-700' }
  }

  return (
    <div className="bg-white">
      {/* Page Banner */}
      <PageBanner title="Notice Board" breadcrumbs={breadcrumbs} image="/notice.jpg" />

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Section - Notices (2 columns) */}
            <div className="lg:col-span-2">
              <NoticeFilter notices={notices} />
            </div>

            {/* Right Section - Sidebar (1 column) */}
            <div className="lg:col-span-1">
              <div className="space-y-4 md:space-y-6 sticky top-20">
                {/* Notice Categories Card */}
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-4 sm:mb-6">Notice Categories</h3>
                  <div className="space-y-3">
                    {Object.entries(categoryCounts).map(([category, count]) => (
                      <div
                        key={category}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${categoryColors[category].bg} ${categoryColors[category].text}`}
                          >
                            {count}
                          </span>
                          <span className="text-gray-700 font-medium">{category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-green-900 mb-3 sm:mb-4">Quick Info</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold mt-0.5">•</span>
                      <span>Check notices regularly for important updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold mt-0.5">•</span>
                      <span>Subscribe to email notifications for latest announcements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold mt-0.5">•</span>
                      <span>Contact school office for clarification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-700 font-bold mt-0.5">•</span>
                      <span>All notices are archived for future reference</span>
                    </li>
                  </ul>
                </div>

                {/* Apply Now Button */}
                <Link
                  href="/contact"
                  className="block w-full px-6 py-4 text-center bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition-colors duration-300 shadow-lg"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default NoticeBoard
