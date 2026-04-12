import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { Phone, Mail, Clock, MapPin, ArrowRight, GraduationCap } from 'lucide-react'

const Footer: FC = () => {
  const quickLinks = [
    { label: 'About Us',     href: '/about' },
    { label: 'Programs',     href: '/programs' },
    { label: 'Facilities',   href: '/facilities' },
    { label: 'Gallery',      href: '/gallery' },
    { label: 'Notice Board', href: '/notice-board' },
    { label: 'Contact',      href: '/contact' },
  ]

  const programs = [
    { label: 'Montessori / Pre-School', href: '/programs/montessori' },
    { label: 'Primary School',          href: '/programs/primary' },
    { label: 'Lower Secondary',         href: '/programs/lower-secondary' },
    { label: 'Secondary School',        href: '/programs/secondary' },
    { label: 'Higher Secondary',        href: '/programs/higher-secondary' },
  ]

  return (
    <footer className="bg-green-950 text-white">

      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
            <GraduationCap className="w-5 h-5 shrink-0" />
             Enroll your child in a nature-inspired learning environment that nurtures creativity, critical thinking, and holistic development.
          </p>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 px-5 py-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold rounded-lg text-sm transition-all duration-300"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-5">
            <Image src="/logo.png" alt="Nobel Academy" width={44} height={44} className="rounded-lg" />
            <div>
              <p className="font-bold text-white text-sm leading-tight">Nobel Environment</p>
          <p className="text-white/70 text-xs">Academy</p>
            </div>
          </Link>
          <p className="text-white/80 text-sm leading-relaxed mb-5">
            Nurturing minds and inspiring excellence in a nature-inspired, child-friendly environment since 2068 B.S.
          </p>
          <div className="flex items-start gap-2 text-white/80 text-sm mb-6">
            <MapPin className="w-4 h-4 text-white mt-0.5 shrink-0" />
            <span>Tilottama-15, Kotihawa, Rupandehi, Lumbini Province, Nepal</span>
          </div>
          
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-white/80 hover:text-yellow-400 text-sm transition-colors duration-200 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Programs */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Programs</h4>
          <ul className="space-y-2.5">
            {programs.map((p) => (
              <li key={p.label}>
                <Link
                  href={p.href}
                  className="flex items-center gap-2 text-white/80 hover:text-yellow-400 text-sm transition-colors duration-200 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact + Newsletter */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h4>
          <ul className="space-y-3 mb-7">
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <Phone className="w-4 h-4 text-white shrink-0" />
              <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-0.5">
                <a href="tel:071514220" className="hover:text-yellow-400 transition-colors">071-514220</a>
                <span className="text-white/30">/</span>
                <a href="tel:9857054560" className="hover:text-yellow-400 transition-colors">9857054560</a>
                <span className="text-white/30">/</span>
                <a href="tel:9867587241" className="hover:text-yellow-400 transition-colors">9867587241</a>
              </div>
            </li>
            <li className="flex items-start gap-3 text-white/80 text-sm">
              <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
               
                <a href="mailto:sundargurung@gmail.com" className="hover:text-yellow-400 transition-colors">sundargurung@gmail.com</a>
              </div>
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <Clock className="w-4 h-4 text-white shrink-0" />
              <span>Sun–Fri: 10:00 AM – 4:00 PM</span>
            </li>
          </ul>

          {/* Newsletter */}
         
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-xs text-white/70">
          <p>© 2068 B.S. Nobel Environment Academy. All rights reserved.</p>
          <div className="flex gap-3">
            <Link
              href="https://www.facebook.com/NobelEnvironmentAcademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/10 flex items-center justify-center transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook className="w-3.5 h-3.5 text-white" />
            </Link>
            <Link
              href="https://www.youtube.com/@nobleyoutubechannel8726"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-600 border border-white/10 flex items-center justify-center transition-all duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
