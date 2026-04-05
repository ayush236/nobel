export type Slide = {
  id: number
  heading: string
  subtext: string
  primaryBtn: { label: string; href: string }
  secondaryBtn: { label: string; href: string }
  bgClass: string // Tailwind gradient class
  bgImage?: string // Optional background image path
}

export type FeatureCard = {
  id: number
  emoji: string
  title: string
  description: string
}

export type Program = {
  id: number
  slug: string
  emoji: React.ReactNode
  title: string
  level: string
  duration: string
  credits: string
  description: string
  objectives: string[]
  career: string[]
  image?: string
}

export type Notice = {
  id: number
  category: 'Admission' | 'Examination' | 'General' | 'Event'
  title: string
  date: string
  description: string
}

export type GalleryImage = {
  id: number
  title: string
  category: 'Events' | 'Academic' | 'Sports' | 'Campus'
  bgColor: string
  image?: string
}

export type Event = {
  id: number
  day: string
  month: string
  title: string
  image?: string
}

export type Stat = {
  id: number
  value: number
  suffix: string
  label: string
}

export type Testimonial = {
  id: number
  quote: string
  name: string
  role: string
  initials: string
}

export type Facility = {
  id: number
  slug: string
  emoji: string
  title: string
  description: string
  features: string[]
}

export type CalendarEvent = {
  id: number
  title: string
  titleNepali?: string
  startDay: number
  endDay: number
  month: string
  monthNepali: string
  monthNumber: number
  year: number
  type: 'Examination' | 'Festival' | 'Holiday' | 'Event'
  description?: string
  image?: string
}
