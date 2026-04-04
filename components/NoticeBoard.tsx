import React, { FC } from 'react'
import Link from 'next/link'
import type { Notice } from '@/types'

const NoticeBoard: FC = () => {
  const notices: Notice[] = [
    {
      id: 1,
      category: 'Admission',
      title: 'Admission Open for 2081 B.S. – Montessori to Grade 10',
      date: 'April 2025',
      description: 'We are welcoming new students for the academic year 2081 B.S. across all levels from Montessori to Grade 10.'
    },
    {
      id: 2,
      category: 'Examination',
      title: 'First Terminal Exam Routine Published',
      date: 'March 2025',
      description: 'The exam schedule for the first terminal has been released. Please check the notice board for detailed timing.'
    },
    {
      id: 3,
      category: 'General',
      title: 'Graduation Ceremony for Pre-School Batch 2081',
      date: 'Feb 2025',
      description: 'Join us in celebrating the graduation of our Pre-School batch 2081. All parents and relatives are invited.'
    },
    {
      id: 4,
      category: 'Event',
      title: 'Annual Sports Week Announcement',
      date: 'Jan 2025',
      description: 'Our annual sports week is coming up featuring various athletic competitions and outdoor activities for all students.'
    }
  ]

  const categoryColors: Record<Notice['category'], string> = {
    Admission: 'bg-blue-100 text-blue-700',
    Examination: 'bg-red-100 text-red-700',
    General: 'bg-green-100 text-green-700',
    Event: 'bg-yellow-100 text-yellow-700'
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-green-700 uppercase tracking-widest text-xs sm:text-sm font-bold">
            LATEST UPDATES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mt-3 sm:mt-4">Notice Board</h2>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-8">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="border-l-4 border-green-700 bg-gray-50 p-4 sm:p-6 rounded-r-lg hover:bg-green-50 transition duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div className="flex-1">
                  <span
                    className={`inline-block text-xs font-bold rounded-full px-3 py-1 mb-3 ${categoryColors[notice.category]}`}
                  >
                    {notice.category}
                  </span>
                  <h3 className="text-lg font-bold text-green-900">{notice.title}</h3>
                </div>
                <div className="text-sm text-gray-500 font-medium whitespace-nowrap">
                  {notice.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/notice-board"
            className="inline-block px-8 py-3 border-2 border-green-700 text-green-700 font-bold rounded-lg hover:bg-green-50 transition duration-300"
          >
            View All Notices
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NoticeBoard
