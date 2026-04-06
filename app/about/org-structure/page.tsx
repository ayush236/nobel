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
      <PageBanner title="Organization Structure" breadcrumbs={breadcrumbs} image="/images/team.jpg" />

      {/* Navigation Tabs */}
      <section className="py-6 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between">
          <div>
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
          <div className='mt-1'>
          <Link
                    href="/brochure"
                    className="text-center px-6 py-2 border-2 border-green-700 text-green-700 font-bold rounded-lg hover:bg-green-50 transition duration-300"
                  >
                    Download Brochure
                  </Link>
                  </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Organization Content */}
          <div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 mt-3">
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

            
          </div>

          {/* Right Side - Nobel Geet */}
          <div className="flex flex-col justify-start shadow-2xl border-2 border-green-200 rounded-2xl p-8 bg-gradient-to-br from-green-50 to-green-100">
            <div className="bg-green-200 p-6 rounded-lg h-full">
              <h2 className="text-4xl font-bold text-green-900 mb-4 flex justify-center">नोबल गीत</h2>
              <p className="text-lg text-green-800 leading-relaxed flex justify-center text-center">
                ज्ञान दिने मन्दिर यो (पूजा गर्छौँ हामी) २<br/>
मनमुटुमा वस्न सफल (नोबल एकेडेमी) ३<br/>
(कोपिलालाई फूलाउने मुटु हो यो माटोको) २<br/>
(भविष्यका कर्णधारलाई हिंडाउने वाटो यो) २<br/>
ज्ञान दिने मन्दिर यो (पूजा गर्छौँ हामी ) २<br/>
मनमुटुमा वस्न सफल (नोबल एकेडेमी) ३<br/>
(शिक्षा दिन्छौँ व्यवहारिक समाजलाई सुहाउने) २<br/>
(बालबच्चाका आफ्नै चाह उद्देश्यमा पुऱ्याउने) २<br/>
ज्ञान दिने मन्दिर यो (पूजा गर्छौँ हामी) २<br/>
मनमुटुमा बस्न सफल (नोबल एकेडेमी) ३<br/>
(बालमैत्री वातावरण असल मार्ग दिएर) २<br/>
(अनुशासित वनाउँछौँ आफ्नै पाटो ठानेर) २<br/>
ज्ञान दिने मन्दिर यो (पूजा गर्छौँ हामी ) २<br/>
मनमुटुमा बस्न सफल (नोबल एकेडेमी) ३<br/>
(अतिरिक्त क्रियाकलाप अगाडि छौँ सधैँ नै) २<br/>
(निरन्तर लागि परी पूरा गर्छौं आफै नै) २<br/>
ज्ञान दिने मन्दिर यो (पूजा गर्छौँ हामी) २<br/>
मनमुटुमा बस्न सफल (नोबल एकेडेमी) ३
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 px-20'>
        {/* Additional Information */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default OrgStructurePage
