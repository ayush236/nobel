import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import AdminSidebar from '@/app/admin/(dashboard)/AdminSidebar'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')?.value

  if (!session || session !== process.env.ADMIN_SESSION_SECRET) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 md:flex">
      <AdminSidebar />
      <main className="flex-1 p-6 sm:p-8 overflow-auto md:pt-6 pt-20">
        {children}
      </main>
    </div>
  )
}
