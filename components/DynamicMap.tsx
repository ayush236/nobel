'use client'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full bg-gray-200 rounded-xl h-56 sm:h-80 md:h-96 flex items-center justify-center border-2 border-green-200">
      <div className="text-center">
        <p className="text-3xl sm:text-4xl mb-2">📍</p>
        <p className="text-gray-600 font-medium text-sm sm:text-base">Loading Map...</p>
      </div>
    </div>
  )
})

export default function DynamicMap() {
  return <Map />
}
