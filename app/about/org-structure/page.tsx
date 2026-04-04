'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'

interface OrgMember {
  id: number
  name: string
  position: string
  emoji: string
}

const OrgStructurePage: FC = () => {
  const organizationMembers: OrgMember[] = [
    { id: 1, name: 'Leadership Team', position: 'School Administration', emoji: '👔' },
    { id: 2, name: 'Academic Department', position: 'Teaching Staff', emoji: '👨‍🏫' },
    { id: 3, name: 'Support Staff', position: 'Administrative Support', emoji: '👥' },
    { id: 4, name: 'Facilities Team', position: 'Campus Management', emoji: '🏢' }
  ]

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Org Structure', href: '/about/org-structure' }
  ]

  return (
    <div className="flex flex-col">
      <PageBanner title="Organization Structure" breadcrumbs={breadcrumbs} image="/team.jpg" />

      {/* Navigation Tabs */}
      <section className="py-6 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <Link
            href="/about/introduction"
            className="px-6 py-2 rounded-lg font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
          >
            Introduction
          </Link>
          <Link
            href="/about/principal"
            className="px-6 py-2 rounded-lg font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
          >
            Message From Principal
          </Link>
          <Link
            href="/about/org-structure"
            className="px-6 py-2 rounded-lg font-medium bg-green-700 text-white transition"
          >
            Org Structure
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-6">Organization Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              Nobel Environment Academy is managed by a dedicated team of experienced educators and
              administrators committed to delivering quality education and development to our students.
              Our organizational structure ensures effective communication, strong leadership, and
              comprehensive support services across all levels.
            </p>
          </div>

          {/* Organization Structure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{member.name}</h3>
                <p className="text-sm text-green-700 font-medium">{member.position}</p>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="text-lg font-bold text-blue-900 mb-3">Organizational Hierarchy</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span>Principal: Overall school administration and strategic planning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span>Academic Coordinators: Curriculum development and teacher supervision</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span>Department Heads: Subject-specific guidance and coordination</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span>Teachers: Classroom instruction and student mentoring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span>Support Staff: Administrative and facility management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default OrgStructurePage
