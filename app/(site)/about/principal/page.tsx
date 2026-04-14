import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import { Quote, ArrowRight, Download, Mail, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Introduction', href: '/about/introduction', active: false },
  { label: 'Message From Principal', href: '/about/principal', active: true },
  { label: 'Org Structure', href: '/about/org-structure', active: false },
]

const PrincipalPage: FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <PageBanner
        title="Message from Principal"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Message from Principal', href: '/about/principal' },
        ]}
        image="/images/team.jpg"
      />

      {/* Sub-nav */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-1 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  link.active
                    ? 'border-green-700 text-green-700'
                    : 'border-transparent text-gray-600 hover:text-green-700 hover:border-green-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold border border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition-colors duration-200"
          >
            <Download size={13} />
            Brochure
          </Link>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — Message content */}
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 bg-white">

          {/* Label */}
          <span className="text-xs font-bold uppercase tracking-widest text-green-600 mb-4">
            Principal's Message
          </span>

          {/* Quote */}
          <div className="relative mb-8">
            <Quote size={40} className="text-green-100 mb-2" />
            <p className="text-green-900 text-xl sm:text-2xl font-semibold italic leading-relaxed">
              "Every child possesses unique potential waiting to be nurtured."
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-1 bg-green-700 rounded-full mb-8" />

          {/* Body */}
          <div className="space-y-5 text-gray-600 leading-relaxed text-[15px] mb-10">
            <p>
              Welcome to Nobel Environment Academy. I am honored to serve as Principal of this
              wonderful institution where education goes beyond textbooks. Our commitment is to
              foster a holistic learning experience that develops not just academic knowledge,
              but also character, creativity, and environmental consciousness.
            </p>
            <p>
              We believe in the Montessori philosophy that respects each child's individuality
              and learning pace. Our experienced faculty, supportive community, and green campus
              provide the perfect foundation for students to thrive. We are dedicated to preparing
              responsible, thoughtful citizens who will contribute positively to society.
            </p>
            <p>
              I invite you to visit our campus and experience the Nobel difference. Together, we
              work to inspire excellence and nurture the leaders of tomorrow.
            </p>
          </div>

          {/* Signature */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mb-10">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 ring-2 ring-green-100">
              <Image src="/prin.jpg" alt="Sundar Gurung" fill sizes="48px" className="object-cover object-top" />
            </div>
            <div>
              <p className="font-bold text-green-900">Sundar Gurung</p>
              <p className="text-xs text-gray-400">Principal, Nobel Environment Academy</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              Schedule a Visit <ArrowRight size={15} />
            </Link>
            <Link
              href="/about/introduction"
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-600 hover:border-green-600 hover:text-green-700 text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              About the School
            </Link>
          </div>

        </div>

        {/* RIGHT — Full image */}
        <div className="relative min-h-[40vh] lg:min-h-0 lg:sticky lg:top-0 lg:h-[70vh] lg:self-start lg:mt-16 order-first lg:order-last rounded-2xl overflow-hidden mx-4 lg:mx-8">
          <Image
            src="/prin.jpg"
            alt="Sundar Gurung — Principal"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-xs font-bold uppercase tracking-widest text-green-300 mb-1">Principal</p>
            <h2 className="text-3xl font-bold text-white leading-tight">Sundar Gurung</h2>
            <p className="text-white/70 text-sm mt-1">Nobel Environment Academy</p>
            <div className="flex gap-3 mt-4">
              <a href="mailto:sundargurung@gmail.com"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs rounded-lg backdrop-blur-sm transition-colors">
                <Mail size={12} /> Email
              </a>
              <a href="tel:9857054560"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs rounded-lg backdrop-blur-sm transition-colors">
                <Phone size={12} /> Call
              </a>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default PrincipalPage
