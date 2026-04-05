import React, { FC } from 'react'
import LocationMap from '@/components/LocationMap'
import PageBanner from '@/components/PageBanner'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

const ContactPage: FC = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', href: '/contact' }
  ]

  return (
    <div className="bg-white">
      {/* Page Banner */}
      <PageBanner title="Contact Us" breadcrumbs={breadcrumbs} image="/images/contact.png" />

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* LEFT SECTION - Contact Form (2 columns) */}
            <div className="lg:col-span-2">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8 mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  We'd love to hear from you. Fill out the form below and we'll get back to you
                  as soon as possible.
                </p>
                <ContactForm />
              </div>

                <LocationMap />
            </div>

            {/* RIGHT SECTION - Contact Info Sidebar (1 column) */}
            <div className="lg:col-span-1">
              <div className="space-y-4 md:space-y-6 sticky top-20">
                {/* Contact Info Card */}
                <div className="bg-green-700 text-white rounded-2xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {/* Address */}
                    <div className="flex gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl flex-shrink-0">📍</span>
                      <div className="min-w-0">
                        <p className="text-green-200 text-xs sm:text-sm">Address</p>
                        <p className="text-white font-medium text-xs sm:text-sm line-clamp-2">
                          Tilottama-15, Kotihawa, Rupandehi, Lumbini Province, Nepal
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl flex-shrink-0">📞</span>
                      <div className="min-w-0">
                        <p className="text-green-200 text-xs sm:text-sm">Phone</p>
                        <p className="text-white font-medium text-xs sm:text-sm">071-514220 / 9857054560</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl flex-shrink-0">📧</span>
                      <div className="min-w-0">
                        <p className="text-green-200 text-xs sm:text-sm">Email</p>
                        <p className="text-white font-medium text-xs sm:text-sm break-all">nobelacademy68@gmail.com</p>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="flex gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl flex-shrink-0">🕐</span>
                      <div className="min-w-0">
                        <p className="text-green-200 text-xs sm:text-sm">Office Hours</p>
                        <p className="text-white font-medium text-xs sm:text-sm">Sunday–Friday, 10:00 AM – 4:00 PM</p>
                      </div>
                    </div>

                    {/* Established */}
                    <div className="flex gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl flex-shrink-0">🏫</span>
                      <div className="min-w-0">
                        <p className="text-green-200 text-xs sm:text-sm">Established</p>
                        <p className="text-white font-medium text-xs sm:text-sm">2068 B.S. (2011 A.D.)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Admission Inquiry Card */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-800 mb-2">Admission Inquiry</h3>
                  <p className="text-gray-700 text-xs sm:text-sm mb-4">
                    Interested in enrolling your child? Contact our admission office.
                  </p>
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 mb-4">
                    Apply Now
                  </button>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-yellow-800 font-medium">Phone:</p>
                      <p className="text-gray-700">9857054560</p>
                    </div>
                    <div>
                      <p className="text-yellow-800 font-medium">Email:</p>
                      <p className="text-gray-700">nobelacademy68@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="w-full block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="w-full block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Info Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visit Us Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700 text-sm mb-2">
                Tilottama-15, Kotihawa, Rupandehi, Lumbini Province, Nepal
              </p>
              <p className="text-gray-600 text-xs italic">
                Easy to find in the heart of Kotihawa
              </p>
            </div>

            {/* Call Us Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-700 text-sm mb-1">071-514220</p>
              <p className="text-gray-700 text-sm mb-2">9857054560</p>
              <p className="text-gray-600 text-xs italic">
                Available Sunday–Friday, 10:00 AM – 4:00 PM
              </p>
            </div>

            {/* Email Us Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-700 text-sm mb-2">nobelacademy68@gmail.com</p>
              <p className="text-gray-600 text-xs italic">
                We reply within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ContactPage
