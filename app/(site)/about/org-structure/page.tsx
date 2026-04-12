'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import {
  Download, Crown, GraduationCap, Users, Building2,
  ChevronRight, Music
} from 'lucide-react'

const navLinks = [
  { label: 'Introduction', href: '/about/introduction', active: false },
  { label: 'Message From Principal', href: '/about/principal', active: false },
  { label: 'Org Structure', href: '/about/org-structure', active: true },
]

const orgMembers = [
  {
    icon: Crown,
    name: 'Leadership Team',
    position: 'School Administration',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    iconBg: 'bg-amber-100',
  },
  {
    icon: GraduationCap,
    name: 'Academic Department',
    position: 'Teaching Staff',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Users,
    name: 'Support Staff',
    position: 'Administrative Support',
    color: 'bg-purple-50 border-purple-200 text-purple-700',
    iconBg: 'bg-purple-100',
  },
  {
    icon: Building2,
    name: 'Facilities Team',
    position: 'Campus Management',
    color: 'bg-green-50 border-green-200 text-green-700',
    iconBg: 'bg-green-100',
  },
]

const hierarchy = [
  { role: 'Principal', desc: 'Overall school administration and strategic planning' },
  { role: 'Academic Coordinators', desc: 'Curriculum development and teacher supervision' },
  { role: 'Department Heads', desc: 'Subject-specific guidance and coordination' },
  { role: 'Teachers', desc: 'Classroom instruction and student mentoring' },
  { role: 'Support Staff', desc: 'Administrative and facility management' },
]

const OrgStructurePage: FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <PageBanner
        title="Organization Structure"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Org Structure', href: '/about/org-structure' },
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

      {/* Main */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT — Org overview */}
          <div className="space-y-10">

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600">Our Team</span>
              <h2 className="text-3xl font-bold text-green-900 mt-2 mb-4">Organization Overview</h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Nobel Environment Academy is managed by a dedicated team of experienced educators and
                administrators committed to delivering quality education. Our structure ensures effective
                communication, strong leadership, and comprehensive support across all levels.
              </p>
            </div>

            {/* Org cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {orgMembers.map(({ icon: Icon, name, position, color, iconBg }) => (
                <div
                  key={name}
                  className={`flex items-center gap-4 p-5 rounded-2xl border ${color} hover:shadow-md transition-shadow duration-200`}
                >
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{position}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hierarchy */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-green-800 px-5 py-4">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Organizational Hierarchy</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {hierarchy.map(({ role, desc }, i) => (
                  <div key={role} className="flex items-start gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                    <div className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-900 flex items-center gap-1">
                        <ChevronRight size={13} className="text-green-500" />
                        {role}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Nobel Geet */}
          <div className="flex flex-col">
            <div className="rounded-2xl overflow-hidden border border-green-200 shadow-sm h-full">
              <div className="bg-green-800 px-5 py-4 flex items-center gap-2">
                <Music size={16} className="text-green-300" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">नोबल गीत</h3>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 px-6 py-8 h-full">
                <p className="text-green-900 leading-[2.2] text-center text-sm sm:text-base font-medium">
                  ज्ञान दिने मन्दिर यो (पूजा गर्छौँ हामी) २<br />
                  मनमुटुमा वस्न सफल (नोबल एकेडेमी) ३<br />
                  (कोपिलालाई फूलाउने मुटु हो यो माटोको) २<br />
                  (भविष्यका कर्णधारलाई हिंडाउने वाटो यो) २<br />
                  ज्ञान दिने मन्दिर यो (पूजा गर्छौँ हामी) २<br />
                  मनमुटुमा वस्न सफल (नोबल एकेडेमी) ३<br />
                  (शिक्षा दिन्छौँ व्यवहारिक समाजलाई सुहाउने) २<br />
                  (बालबच्चाका आफ्नै चाह उद्देश्यमा पुऱ्याउने) २<br />
                  ज्ञान दिने मन्दिर यो (पूजा गर्छौँ हामी) २<br />
                  मनमुटुमा बस्न सफल (नोबल एकेडेमी) ३<br />
                  (बालमैत्री वातावरण असल मार्ग दिएर) २<br />
                  (अनुशासित वनाउँछौँ आफ्नै पाटो ठानेर) २<br />
                  ज्ञान दिने मन्दिर यो (पूजा गर्छौँ हामी) २<br />
                  मनमुटुमा बस्न सफल (नोबल एकेडेमी) ३<br />
                  (अतिरिक्त क्रियाकलाप अगाडि छौँ सधैँ नै) २<br />
                  (निरन्तर लागि परी पूरा गर्छौं आफै नै) २<br />
                  ज्ञान दिने मन्दिर यो (पूजा गर्छौँ हामी) २<br />
                  मनमुटुमा बस्न सफल (नोबल एकेडेमी) ३
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OrgStructurePage
