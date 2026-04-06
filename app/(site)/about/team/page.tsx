import React, { FC } from 'react'
import Link from 'next/link'
import PageBanner from '@/components/PageBanner'

interface TeamMember {
  id: number
  name: string
  role: string
  department: string
  email: string
}

const TeamPage: FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sundar Gurung',
      role: 'Principal',
      department: 'Administration',
      email: 'sundar@nobelacademy.edu.np'
    },
    {
      id: 2,
      name: 'Purna Bahadur Gurung',
      role: 'President',
      department: 'Administration',
      email: 'purna@nobelacademy.edu.np'
    },
    {
      id: 3,
      name: 'Rameshwor Sharma',
      role: 'Vice Principal',
      department: 'Administration',
      email: 'rameshwor@nobelacademy.edu.np'
    },
    {
      id: 4,
      name: 'Deepa Bhattarai',
      role: 'Head, Montessori Section',
      department: 'Early Childhood',
      email: 'deepa@nobelacademy.edu.np'
    },
    {
      id: 5,
      name: 'Rajesh Karki',
      role: 'Mathematics Coordinator',
      department: 'Academics',
      email: 'rajesh@nobelacademy.edu.np'
    },
    {
      id: 6,
      name: 'Maya Singh',
      role: 'Science Coordinator',
      department: 'Academics',
      email: 'maya@nobelacademy.edu.np'
    }
  ]

  return (
    <div className="flex flex-col">
      <PageBanner
        title="Our Team"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Our Team', href: '/about/team' }
        ]}
      />

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-6">Our Dedicated Faculty</h2>
            <p className="text-gray-700 leading-relaxed text-lg max-w-3xl">
              At Nobel Environment Academy, our success is built on the expertise, passion, and
              dedication of our experienced faculty members. Each team member is committed to
              creating a nurturing, inspiring learning environment for every student.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-green-200 to-green-100 h-48"></div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-2">{member.name}</h3>
                  <p className="text-green-700 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.department}</p>

                  <a
                    href={`mailto:${member.email}`}
                    className="inline-block text-sm text-green-700 hover:text-green-900 font-semibold"
                  >
                    Send Email →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-green-900 mb-4">
              Want to Meet Our Team?
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Visit our campus or schedule a meeting with our team to learn more about Nobel
              Environment Academy and how we can support your child's education.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage
