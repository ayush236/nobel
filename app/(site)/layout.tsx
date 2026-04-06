import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
    </>
  )
}
