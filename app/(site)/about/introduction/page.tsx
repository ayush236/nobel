import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import {
  MapPin, Phone, Mail, GraduationCap, Users, Calendar, Award,
  Leaf, BookOpen, Trophy, ArrowRight, CheckCircle, Download
} from 'lucide-react'

const stats = [
  { icon: Calendar, label: 'Established', value: '2068 B.S.', sub: '2011 A.D.' },
  { icon: Users, label: 'Students', value: '215+', sub: 'Enrolled' },
  { icon: GraduationCap, label: 'Programs', value: '6', sub: 'Levels' },
  { icon: Award, label: 'Affiliation', value: 'NEB', sub: 'Certified' },
]

const highlights = [
  'Montessori to Grade 10 curriculum',
  'NEB affiliated secondary education',
  'Nature-inspired eco-conscious campus',
  'Experienced & dedicated faculty',
  'Strong SEE examination results',
  'Holistic character development',
]

const whyCards = [
  {
    icon: Leaf,
    title: 'Green Environment',
    description: 'Our eco-conscious campus on the banks of Kotihawa river creates a calm, focused learning atmosphere surrounded by nature.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: BookOpen,
    title: 'Experienced Faculty',
    description: 'Qualified, passionate teachers committed to nurturing every student\'s potential through modern, child-friendly pedagogy.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Consistent academic excellence and strong SEE results since our establishment, building futures one student at a time.',
    color: 'from-amber-500 to-orange-600',
  },
]

const notices = [
  { category: 'Admission', title: 'Admission Open for 2081 B.S.', date: 'April 2025', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { category: 'Event', title: 'Annual Sports Week', date: 'May 2025', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  { category: 'Examination', title: 'First Terminal Exam Routine', date: 'March 2025', color: 'bg-red-100 text-red-700 border-red-200' },
]

const navLinks = [
  { label: 'Introduction', href: '/about/introduction', active: true },
  { label: 'Message From Principal', href: '/about/principal', active: false },
  { label: 'Org Structure', href: '/about/org-structure', active: false },
]

const IntroductionPage: FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <PageBanner
        title="Introduction"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Introduction', href: '/about/introduction' },
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

      {/* Hero intro strip */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 mb-3">
                <Icon size={22} className="text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white">{value}</div>
              <div className="text-xs text-green-300 mt-0.5">{sub}</div>
              <div className="text-xs text-white/60 mt-0.5 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left — main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* About text + image */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mt-2 mb-6 leading-tight">
                Nobel Environment Academy
              </h2>

              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/7]">
                <Image
                  src="/images/school1.jpg"
                  alt="Nobel Environment Academy campus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium text-green-200">Tilottama-15, Kotihawa, Rupandehi</p>
                  <p className="text-sm font-bold">Lumbini Province, Nepal</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nobel Environment Academy is a private Montessori and secondary school established
                  in <strong className="text-green-800">2068 B.S. (2011 A.D.)</strong> located at Tilottama-15, Kotihawa, Rupandehi,
                  Lumbini Province, Nepal. Affiliated with the National Examination Board (NEB), we
                  offer education from Montessori/Pre-School through Grade 10.
                </p>
                <p>
                  With <strong className="text-green-800">215+ enrolled students</strong>, experienced faculty, and a strong community
                  spirit, the school fosters academic excellence and holistic development in a green,
                  inspiring environment on the banks of Kotihawa river.
                </p>
                <p>
                  We believe in nurturing not just academic skills but also character, creativity,
                  and environmental consciousness — preparing every student for a bright future.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-100">
              <h3 className="text-lg font-bold text-green-900 mb-5">What We Offer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-600 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              {/* <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl transition-colors duration-200 text-sm"
              >
                Apply Now <ArrowRight size={16} />
              </Link> */}
              <Link
                href="/programs"
                className="flex items-center gap-2 px-6 py-3 border border-green-700 text-green-700 hover:bg-green-50 font-semibold rounded-xl transition-colors duration-200 text-sm"
              >
                View Programs <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right — sidebar */}
          <div className="lg:col-span-1 space-y-6">

            {/* Contact card */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-green-800 px-5 py-4">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Quick Contact</h3>
              </div>
              <div className="p-5 space-y-4 bg-white">
                <a href="https://www.google.com/maps/place/Nobel+environment+academy" target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-700 hover:text-green-700 transition-colors group">
                  <MapPin size={16} className="text-green-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Tilottama-15, Kotihawa, Rupandehi, Nepal</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <Phone size={16} className="text-green-600 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <a href="tel:071514220" className="block hover:text-green-700 transition-colors">071-514220</a>
                    <a href="tel:9857054560" className="block hover:text-green-700 transition-colors">9857054560</a>
                    <a href="tel:9867587241" className="block hover:text-green-700 transition-colors">9867587241</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <Mail size={16} className="text-green-600 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                  
                    <a href="mailto:sundargurung@gmail.com" className="block hover:text-green-700 transition-colors">sundargurung@gmail.com</a>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-100 space-y-2">
                  <Link href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-xl transition-colors duration-200">
                    Contact Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent notices */}
            <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gray-800 px-5 py-4">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Recent Notices</h3>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {notices.map((notice, i) => (
                  <div key={i} className="px-5 py-4 hover:bg-gray-50 transition-colors">
                    <span className={`inline-block text-[10px] font-bold rounded-full px-2 py-0.5 border mb-2 ${notice.color}`}>
                      {notice.category}
                    </span>
                    <p className="text-sm font-medium text-gray-800 leading-snug">{notice.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{notice.date}</p>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                <Link href="/notice-board"
                  className="flex items-center justify-center gap-1 text-xs font-semibold text-green-700 hover:text-green-800 transition-colors">
                  View All Notices <ArrowRight size={12} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Nobel */}
      {/* <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">Our Strengths</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mt-2">Why Choose Nobel?</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              A school that goes beyond textbooks — nurturing well-rounded individuals ready for tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color} mb-5 shadow-md`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}

export default IntroductionPage
