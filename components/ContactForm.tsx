'use client'

import React, { FC, useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Form validation
  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.name.trim()) {
      errors.name = 'Full name is required'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required'
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you'd send this to a backend or email service
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }
  }

  return (
    <div>
      {/* Success Message */}
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 font-semibold">
            ✓ Thank you! We will get back to you soon.
          </p>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-sm"
            />
            {formErrors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.name}</p>}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-sm"
            />
            {formErrors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.email}</p>}
          </div>
        </div>

        {/* Phone and Subject Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-sm"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white text-sm"
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Admission Inquiry">Admission Inquiry</option>
              <option value="Program Information">Program Information</option>
              <option value="Facilities">Facilities</option>
              <option value="Fee Structure">Fee Structure</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message (minimum 10 characters)"
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none text-sm"
          />
          {formErrors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 sm:py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
