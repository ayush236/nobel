import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import AdminSidebar from '@/app/nea-secure-2068/dashboard/AdminSidebar'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')?.value

  if (!session || session !== process.env.ADMIN_SESSION_SECRET) {
    redirect('/nea-secure-2068/admin-portal')
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className='fixed'>
      <AdminSidebar />
      </div>
      <div className="flex flex-col flex-1 md:pl-64 min-w-0">
      <main className="flex-1 relative overflow-y-auto focus:outline-none p-6 sm:p-8 pt-20 md:pt-8">
        {children}
      </main>
      </div>
    </div>
  )
}
