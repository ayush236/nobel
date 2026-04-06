'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Images, LogOut } from 'lucide-react'
import { adminLogout } from '@/app/actions/adminAuth'

const navItems = [
  { label: 'Gallery', href: '/admin/gallery', icon: Images },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-60 shrink-0 bg-green-950 text-white flex flex-col min-h-screen">
      <div className="px-6 py-6 border-b border-white/10">
        <p className="font-bold text-sm leading-tight">Nobel Environment</p>
        <p className="text-green-400 text-xs">Admin Portal</p>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active ? 'bg-white/15 text-white' : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>
      <div className="px-3 py-4 border-t border-white/10">
        <form action={adminLogout}>
          <button type="submit" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200">
            <LogOut className="w-4 h-4 shrink-0" />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  )
}
