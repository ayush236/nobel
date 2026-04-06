'use client'

import React, { FC, useActionState, useEffect, useState } from 'react'
import { sendContactEmail } from '@/app/actions/sendEmail'

const initialState = { success: false, message: '' }

interface Errors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

const inputClass = (error?: string) =>
  `w-full border rounded-lg p-2.5 sm:p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-sm ${
    error ? 'border-red-400 bg-red-50' : 'border-gray-300'
  }`

const ContactForm: FC = () => {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState)
  const [toast, setToast] = useState<{ success: boolean; message: string } | null>(null)
  const [errors, setErrors] = useState<Errors>({})

  useEffect(() => {
    if (!state.message) return
    setToast({ success: state.success, message: state.message })
    const t = setTimeout(() => setToast(null), 10000)
    return () => clearTimeout(t)
  }, [state])

  const validate = (form: HTMLFormElement): boolean => {
    const data = new FormData(form)
    const name    = (data.get('name')    as string).trim()
    const email   = (data.get('email')   as string).trim()
    const phone   = (data.get('phone')   as string).trim()
    const subject = (data.get('subject') as string).trim()
    const message = (data.get('message') as string).trim()
    const errs: Errors = {}

    if (!name) errs.name = 'Full name is required.'
    else if (name.length < 3) errs.name = 'Name must be at least 3 characters.'

    if (!email) errs.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address.'

    if (!phone) errs.phone = 'Phone number is required.'
    else if (!/^\d+$/.test(phone)) errs.phone = 'Phone must contain numbers only.'
    else if (phone.length !== 10) errs.phone = 'Phone must be exactly 10 digits.'

    if (!subject) errs.subject = 'Please select a subject.'

    if (!message) errs.message = 'Message is required.'
    else if (message.length < 10) errs.message = 'Message must be at least 10 characters.'

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validate(e.currentTarget)) {
      e.preventDefault()
    }
  }

  return (
    <div>
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-white text-sm font-medium transition-all duration-500 max-w-sm ${
          toast.success ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-rose-600'
        }`}>
          <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            {toast.success ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            )}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">{toast.success ? 'Message Sent!' : 'Failed to Send'}</p>
            <p className="text-white/80 text-xs mt-0.5">{toast.message}</p>
          </div>
          <button onClick={() => setToast(null)} className="shrink-0 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      )}

      <form action={formAction} onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">

        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name (min 3 chars)"
              className={inputClass(errors.name)}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={inputClass(errors.email)}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Phone and Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="10-digit number only"
              maxLength={10}
              onKeyDown={(e) => {
                if (!/[0-9]/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight'].includes(e.key)) {
                  e.preventDefault()
                }
              }}
              className={inputClass(errors.phone)}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              className={`${inputClass(errors.subject)} bg-white`}
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Admission Inquiry">Admission Inquiry</option>
              <option value="Program Information">Program Information</option>
              <option value="Facilities">Facilities</option>
              <option value="Fee Structure">Fee Structure</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
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
            placeholder="Write your message here (min 10 characters)"
            rows={4}
            className={inputClass(errors.message) + ' resize-none'}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-bold py-2.5 sm:py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg text-sm sm:text-base"
        >
          {pending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
 