import React, { FC } from 'react'
import LocationMap from '@/components/LocationMap'
import PageBanner from '@/components/PageBanner'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { FaLocationDot, FaBuilding  } from "react-icons/fa6";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";




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
      <section className="py-16 mb-0 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto">
    
    {/* Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
      
      {/* LEFT SECTION */}
      <div className="lg:col-span-2 space-y-8">
        
        {/* Contact Form Card */}
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 md:p-10 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-3">
            Send us a Message
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <ContactForm />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:col-span-1">
        <div className="top-24">
          
          {/* Contact Info Card */}
          <div className="group bg-gradient-to-br from-green-700 to-green-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl hover:scale-[1.02] transition-all duration-300">
            
            <h3 className="text-xl sm:text-2xl font-bold mb-6 tracking-wide">
              Get In Touch
            </h3>

            <div className="space-y-5">
              
              {/* ITEM */}
              {[
                {
                  icon: <FaLocationDot />,
                  label: "Address",
                  value: "Tilottama-15, Kotihawa, Rupandehi, Lumbini, Nepal"
                },
                {
                  icon: <FaPhoneAlt />,
                  label: "Phone",
                  value: "071-514220 / 9857054560"
                },
                {
                  icon: <MdAttachEmail />,
                  label: "Email",
                  value: "sundargurung@gmail.com"
                },
                {
                  icon: <FaClock />,
                  label: "Office Hours",
                  value: "Sunday–Friday, 10:00 AM – 4:00 PM"
                },
                {
                  icon: <FaBuilding />,
                  label: "Established",
                  value: "2068 B.S. (2011 A.D.)"
                }
              ].map((item, index) => (
                
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  
                  {/* Icon */}
                  <div className="text-2xl flex-shrink-0 text-white group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-green-200 text-xs sm:text-sm">
                      {item.label}
                    </p>
                    <p className="text-white font-medium text-sm sm:text-base leading-snug">
                      {item.value}
                    </p>
                  </div>
                </div>

              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


 {/* FULL WIDTH MAP */}
      <div className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
          <LocationMap  />
        </div>
        </div>

      

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ContactPage
