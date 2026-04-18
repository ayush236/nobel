import { notices } from '@/lib/data'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export default function AdminNotices() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Notices</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-6 py-3 text-gray-500 font-semibold">Title</th>
              <th className="text-left px-6 py-3 text-gray-500 font-semibold">Category</th>
              <th className="text-left px-6 py-3 text-gray-500 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {notices.map((n) => (
              <tr key={n.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-800 font-medium">{n.title}</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700">{n.category}</span>
                </td>
                <td className="px-6 py-4 text-gray-400">{n.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
