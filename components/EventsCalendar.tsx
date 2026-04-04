'use client'

import React, { FC, useState, useMemo } from 'react'
import type { CalendarEvent } from '@/types'
import { calendarEvents } from '@/lib/data'

// Helper function to convert numbers to Nepali numerals
const toNepaliNumeral = (num: number): string => {
  const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
  return String(num)
    .split('')
    .map((digit) => nepaliDigits[parseInt(digit)])
    .join('')
}

const EventsCalendar: FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)

  const filters = ['All', 'Examination', 'Festival', 'Holiday', 'Event']

  const typeBadgeColors: Record<CalendarEvent['type'], string> = {
    Examination: 'bg-red-100 text-red-700 border-red-200',
    Festival: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    Holiday: 'bg-blue-100 text-blue-700 border-blue-200',
    Event: 'bg-green-100 text-green-700 border-green-200'
  }

  const typeDotColors: Record<CalendarEvent['type'], string> = {
    Examination: 'bg-red-500',
    Festival: 'bg-yellow-500',
    Holiday: 'bg-blue-500',
    Event: 'bg-green-500'
  }

  // Filter events
  const filteredEvents = useMemo(() => {
    if (activeFilter === 'All') return calendarEvents
    return calendarEvents.filter((event) => event.type === activeFilter)
  }, [activeFilter])

  // Group events by month
  const groupedEvents = useMemo(() => {
    const groups: Record<string, CalendarEvent[]> = {}
    filteredEvents.forEach((event) => {
      const key = `${event.monthNumber}-${event.monthNepali}`
      if (!groups[key]) {
        groups[key] = []
      }
      groups[key].push(event)
    })

    // Sort by month number
    const sorted: Record<string, CalendarEvent[]> = {}
    Object.keys(groups)
      .sort((a, b) => {
        const monthA = parseInt(a.split('-')[0])
        const monthB = parseInt(b.split('-')[0])
        return monthA - monthB
      })
      .forEach((key) => {
        sorted[key] = groups[key]
      })

    return sorted
  }, [filteredEvents])

  // Calculate next upcoming event
  const nextEvent = useMemo(() => {
    const today = { month: 3, day: 1 } // Asar 1, 2083 (hardcoded reference)
    const upcoming = calendarEvents
      .filter(
        (event) =>
          event.monthNumber > today.month ||
          (event.monthNumber === today.month && event.startDay >= today.day)
      )
      .sort((a, b) => {
        if (a.monthNumber !== b.monthNumber) return a.monthNumber - b.monthNumber
        return a.startDay - b.startDay
      })

    return upcoming[0] || null
  }, [])

  // Calculate days until next event
  const daysUntilNext = useMemo(() => {
    if (!nextEvent) return 0
    // Simplified calculation for static demo
    const months = Math.max(0, nextEvent.monthNumber - 3)
    return months * 30 + Math.max(0, nextEvent.startDay - 1)
  }, [nextEvent])

  // Count stats
  const stats = {
    total: calendarEvents.length,
    examinations: calendarEvents.filter((e) => e.type === 'Examination').length,
    festivals: calendarEvents.filter((e) => e.type === 'Festival').length,
    months: Object.keys(groupedEvents).length
  }

  return (
    <div className="w-full">
      {/* Countdown Banner */}
      {nextEvent && (
        <div className="mb-6 sm:mb-8 bg-green-700 text-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl">📅</span>
            <span className="font-semibold text-sm sm:text-base">The Days:</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-center text-sm sm:text-base line-clamp-1">{nextEvent.title}</p>
            <p className="text-xs sm:text-sm text-center text-green-100">
              {nextEvent.startDay} {nextEvent.monthNepali} {nextEvent.year}
            </p>
          </div>
          <div className="bg-white text-green-700 font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap text-xs sm:text-sm">
            {daysUntilNext} days away
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* LEFT PANEL - Timeline View */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-2">Academic Calendar 2083</h2>
            <p className="text-sm sm:text-lg text-gray-500 font-['system-ui']">शैक्षिक पात्रो २०८३</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter)
                  setSelectedEvent(null)
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-green-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Timeline Events */}
          <div className="space-y-4 sm:space-y-6 max-h-[400px] sm:max-h-[600px] overflow-y-auto pr-2">
            {Object.entries(groupedEvents).map(([monthKey, events]) => {
              const monthNepali = monthKey.split('-')[1]
              const monthNumber = parseInt(monthKey.split('-')[0])
              const monthNameEn = events[0]?.month || ''

              return (
                <div key={monthKey}>
                  {/* Month Header */}
                  <div className="bg-green-100 rounded-lg px-3 sm:px-4 py-2 sm:py-3 mb-3 sm:mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                    <div>
                      <p className="text-lg sm:text-xl font-bold text-green-800 font-['system-ui']">
                        {monthNepali}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">{monthNameEn} {2083}</p>
                    </div>
                    <div className="bg-white text-green-700 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-bold border border-green-200">
                      {events.length} event{events.length !== 1 ? 's' : ''}
                    </div>
                  </div>

                  {/* Events in Month */}
                  <div className="space-y-3 ml-4">
                    {events.map((event) => (
                      <div
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        className={`border-l-4 pl-4 py-3 rounded-r-lg transition-all duration-200 cursor-pointer ${
                          selectedEvent?.id === event.id
                            ? 'border-l-green-600 bg-green-50 border-b-2 border-r-2 border-b-green-50 border-r-green-50'
                            : 'border-l-green-200 hover:bg-gray-50'
                        }`}
                      >
                        {/* Date Range Badge */}
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={`w-3 h-3 rounded-full ${typeDotColors[event.type]}`}
                          />
                          <div>
                            <p className="font-semibold text-sm text-gray-700 font-['system-ui']">
                              {toNepaliNumeral(event.startDay)} - {toNepaliNumeral(event.endDay)}{' '}
                              {event.monthNepali}
                            </p>
                            <p className="text-xs text-gray-500">
                              {event.startDay}–{event.endDay} {event.month} {event.year}
                            </p>
                          </div>
                        </div>

                        {/* Title */}
                        <p className="font-semibold text-gray-800 mb-1">{event.title}</p>

                        {/* Nepali Title */}
                        {event.titleNepali && (
                          <p className="text-sm text-gray-500 font-normal font-['system-ui'] mb-2">
                            {event.titleNepali}
                          </p>
                        )}

                        {/* Type Badge */}
                        <div className="mb-2">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${typeBadgeColors[event.type]}`}
                          >
                            {event.type}
                          </span>
                        </div>

                        {/* Description */}
                        {event.description && (
                          <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHT PANEL - Detail + Legend */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Selected Event Detail Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-20">
            {selectedEvent === null ? (
              <div className="text-center py-8 text-gray-400">
                <p className="text-4xl mb-4">📅</p>
                <p>Click any event to view details</p>
              </div>
            ) : (
              <div>
                {/* Type Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-4 py-2 text-sm font-bold rounded-full border ${typeBadgeColors[selectedEvent.type]}`}
                  >
                    {selectedEvent.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedEvent.title}</h3>

                {/* Nepali Title */}
                {selectedEvent.titleNepali && (
                  <p className="text-lg text-green-700 font-['system-ui'] mb-4">
                    {selectedEvent.titleNepali}
                  </p>
                )}

                {/* Divider */}
                <div className="border-t border-gray-200 my-4" />

                {/* Date Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">📅</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Date Range</p>
                      <p className="text-gray-800">
                        {selectedEvent.startDay} to {selectedEvent.endDay} {selectedEvent.month}{' '}
                        {selectedEvent.year} B.S.
                      </p>
                      <p className="text-sm text-gray-600 font-['system-ui']">
                        {toNepaliNumeral(selectedEvent.startDay)} देखि{' '}
                        {toNepaliNumeral(selectedEvent.endDay)} {selectedEvent.monthNepali}{' '}
                        {selectedEvent.year}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-2">
                    <span className="text-lg">⏱️</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Duration</p>
                      <p className="text-gray-800">
                        {selectedEvent.endDay - selectedEvent.startDay + 1} days
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {selectedEvent.description && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Description</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕ Close
                </button>
              </div>
            )}
          </div>

          {/* Legend Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-4 font-['system-ui']">
              Event Types / इभेन्ट प्रकार
            </h3>
            <div className="space-y-3">
              {[
                { type: 'Examination', en: 'Examination', ne: 'परीक्षा', color: 'bg-red-500' },
                { type: 'Festival', en: 'Festival', ne: 'चाडपर्व', color: 'bg-yellow-500' },
                { type: 'Holiday', en: 'Holiday', ne: 'बिदा', color: 'bg-blue-500' },
                { type: 'Event', en: 'Event', ne: 'कार्यक्रम', color: 'bg-green-500' }
              ].map((item) => (
                <div key={item.type} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-gray-700">{item.en}</span>
                  <span className="text-gray-500 font-['system-ui']">— {item.ne}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Summary Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-4">2083 B.S. At a Glance</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: stats.total, label: 'Total Events' },
                { value: stats.examinations, label: 'Examinations' },
                { value: stats.festivals, label: 'Festivals' },
                { value: stats.months, label: 'Months Covered' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center"
                >
                  <p className="text-2xl font-bold text-green-700">{stat.value}</p>
                  <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsCalendar
