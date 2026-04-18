import { Users, BookOpen, Bell, Image } from 'lucide-react'
import { notices, programs, galleryImages } from '@/lib/data'


const stats = [
  { label: 'Total Programs',  value: programs.length,      icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
  { label: 'Active Notices',  value: notices.length,       icon: Bell,     color: 'bg-yellow-50 text-yellow-600' },
  { label: 'Gallery Images',  value: galleryImages.length, icon: Image,    color: 'bg-purple-50 text-purple-600' },
  { label: 'Students',        value: '215+',               icon: Users,    color: 'bg-green-50 text-green-600' },
]

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back, Admin</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-gray-500 text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-bold text-gray-900 mb-4">Recent Notices</h2>
        <div className="space-y-3">
          {notices.slice(0, 5).map((notice) => (
            <div key={notice.id} className="flex items-start justify-between gap-4 py-3 border-b border-gray-50 last:border-0">
              <div>
                <p className="text-sm font-medium text-gray-800">{notice.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{notice.date}</p>
              </div>
              <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                {notice.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
