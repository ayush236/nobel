import { programs } from '@/lib/data'


export default function AdminPrograms() {

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Programs</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-6 py-3 text-gray-500 font-semibold">Program</th>
              <th className="text-left px-6 py-3 text-gray-500 font-semibold">Level</th>
              <th className="text-left px-6 py-3 text-gray-500 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {programs.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-800 font-medium">{p.title}</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">{p.level}</span>
                </td>
                <td className="px-6 py-4 text-gray-400">{p.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
