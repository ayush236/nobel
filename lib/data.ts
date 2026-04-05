import type { Program, Facility, Notice, GalleryImage, CalendarEvent } from '@/types'

export const programs: Program[] = [
  {
    id: 1,
    slug: 'montessori',
    emoji: '🎨',
    title: 'Montessori / Pre-School',
    level: 'Pre-School',
    duration: '2 Years',
    credits: 'N/A',
    description:
      'Our Montessori program provides a nurturing, play-based learning environment for children aged 3–5. Inspired by the Montessori method, children learn through exploration, creativity, and self-directed activity.',
    objectives: [
      'Develop early literacy and numeracy skills',
      'Build social and emotional intelligence',
      'Encourage creativity and curiosity',
      'Establish healthy learning habits from an early age'
    ],
    career: [
      'Smooth transition to Grade 1',
      'Strong foundation for lifelong learning'
    ],
    image: '/images/monteshri.jpg'
  },
  {
    id: 2,
    slug: 'primary',
    emoji: '📖',
    title: 'Primary School',
    level: 'Grade 1–5',
    duration: '5 Years',
    credits: 'N/A',
    description:
      'The Primary program covers core subjects in a structured yet engaging environment, building the academic foundation every child needs.',
    objectives: [
      'Master English, Nepali, Math, Science and Social Studies',
      'Develop reading, writing and critical thinking',
      'Participate in co-curricular activities',
      'Build confidence and communication skills'
    ],
    career: [
      'Prepared for Lower Secondary curriculum',
      'Strong academic base for future studies'
    ],
    image: '/images/primary.jpg'
  },
  {
    id: 3,
    slug: 'lower-secondary',
    emoji: '🔬',
    title: 'Lower Secondary',
    level: 'Grade 6–8',
    duration: '3 Years',
    credits: 'N/A',
    description:
      'Lower Secondary builds on primary education with deeper subject knowledge, computer education, and character development programs.',
    objectives: [
      'Advanced study of core NEB subjects',
      'Introduction to Computer Science and ICT',
      'Sports and co-curricular participation',
      'Leadership and personality development'
    ],
    career: [
      'Readiness for SEE-level Secondary program',
      'Exposure to science and technology fields'
    ],
    image: '/images/lower secondary.jpg'
  },
  {
    id: 4,
    slug: 'secondary',
    emoji: '🎓',
    title: 'Secondary School',
    level: 'Grade 9–10',
    duration: '2 Years',
    credits: 'N/A',
    description:
      'The Secondary program prepares students for the SEE (Secondary Education Examination) with comprehensive NEB-affiliated curriculum and dedicated exam preparation.',
    objectives: [
      'Complete NEB Grade 9–10 curriculum',
      'Intensive SEE examination preparation',
      'Science, Math, English, Nepali, Social Studies, Optional Math',
      'Practical lab work and project-based learning'
    ],
    career: [
      'Higher Secondary (+2) enrollment',
      'Foundation for engineering, medicine, management and humanities'
    ],
    image: '/images/secondary.jpg'
  }
]

export const facilities: Facility[] = [
  {
    id: 1,
    slug: 'library',
    emoji: '📚',
    title: 'Library',
    description:
      'The Nobel Environment Academy library is a hub for academic enrichment, stocked with textbooks, reference books, encyclopedias, journals and newspapers.',
    features: [
      'Large collection of NEB-curriculum textbooks',
      'Reference books and encyclopedias',
      'Newspapers and academic journals',
      'Quiet reading area for students',
      'Dedicated study tables and shelves',
      'Open during all school hours'
    ]
  },
  {
    id: 2,
    slug: 'science-lab',
    emoji: '🔬',
    title: 'Science Laboratory',
    description:
      'Our science lab provides students with hands-on experimental learning in Physics, Chemistry and Biology under the guidance of experienced teachers.',
    features: [
      'Physics, Chemistry and Biology equipment',
      'Safe and supervised lab environment',
      'Regular practical sessions for Grade 6–10',
      'Modern apparatus and glassware',
      'Lab notebooks and record keeping',
      'SEE practical exam preparation'
    ]
  },
  {
    id: 3,
    slug: 'sports',
    emoji: '⚽',
    title: 'Sports Facilities',
    description:
      'Nobel Environment Academy promotes physical fitness and team spirit through a range of sports facilities available to all students.',
    features: [
      'Football and volleyball grounds',
      'Basketball area',
      'Athletics track space',
      'Annual sports week and tournaments',
      'Inter-class sports competitions',
      'Trained physical education teacher'
    ]
  },
  {
    id: 4,
    slug: 'transportation',
    emoji: '🚌',
    title: 'Transportation',
    description:
      'Safe, reliable and punctual school bus service covering Kotihawa and surrounding areas with fixed morning and afternoon routes.',
    features: [
      'Covers Kotihawa and nearby areas',
      'Fixed morning pick-up and afternoon drop routes',
      'Trained and responsible drivers',
      'Student safety is top priority',
      'Route details available from school office',
      'Affordable transport fee'
    ]
  },
  {
    id: 5,
    slug: 'cafeteria',
    emoji: '🍱',
    title: 'Cafeteria',
    description:
      'Our school cafeteria provides clean, hygienic and nutritious meals and snacks for students throughout the school day.',
    features: [
      'Nutritious and balanced meals',
      'Hygienic food preparation',
      'Snacks and lunch options available',
      'Affordable pricing for students',
      'Spacious seating area',
      'Supervised by school staff'
    ]
  }
]

export const notices: Notice[] = [
  {
    id: 1,
    category: 'Admission',
    title: 'Admission Open for 2081 B.S. – Montessori to Grade 10',
    date: 'April 2025',
    description:
      'Applications are now open for all levels from Montessori to Grade 10 for the academic year 2081 B.S. Limited seats available. Contact the school office for details.'
  },
  {
    id: 2,
    category: 'Examination',
    title: 'First Terminal Exam Routine – 2081 B.S.',
    date: 'March 2025',
    description:
      'The first terminal examination routine for all classes has been published. Students are advised to check the schedule and prepare accordingly.'
  },
  {
    id: 3,
    category: 'General',
    title: 'Graduation Ceremony for Pre-School Batch 2081',
    date: 'Feb 2025',
    description:
      'Nobel Environment Academy will hold its annual graduation ceremony for pre-school completers. Parents and guardians are cordially invited.'
  },
  {
    id: 4,
    category: 'Event',
    title: 'Annual Sports Week 2081 – Schedule Announced',
    date: 'Jan 2025',
    description:
      'The annual sports week will be held from Magh 15–20. All students are encouraged to participate in various sports and athletic events.'
  },
  {
    id: 5,
    category: 'General',
    title: 'Parent-Teacher Meeting – Second Term',
    date: 'Dec 2024',
    description:
      'A parent-teacher meeting will be held to discuss student progress for the second term. Attendance of all parents is highly encouraged.'
  },
  {
    id: 6,
    category: 'Examination',
    title: 'SEE Mock Examination Date Announced',
    date: 'Nov 2024',
    description:
      'Grade 10 students will appear in the SEE mock examination starting Mangsir 20. Admit cards will be distributed from the school office.'
  }
]

export const galleryImages: GalleryImage[] = [
  { id: 1, title: 'Primary School', category: 'Academic', bgColor: 'bg-blue-200', image: '/images/primary.jpg' },
  { id: 2, title: 'Secondary School', category: 'Academic', bgColor: 'bg-blue-200', image: '/images/secondary.jpg' },
  { id: 3, title: 'Lower Secondary', category: 'Academic', bgColor: 'bg-blue-200', image: '/images/lower secondary.jpg' },
  { id: 4, title: 'Montessori Program', category: 'Academic', bgColor: 'bg-blue-200', image: '/images/monteshri.jpg' },
  { id: 5, title: 'Science Lab', category: 'Academic', bgColor: 'bg-blue-200', image: '/images/sciencelab.png' },
  { id: 6, title: 'Science Exhibition', category: 'Academic', bgColor: 'bg-blue-200', image: '/images/science2.jpg' },
  { id: 7, title: 'Library', category: 'Academic', bgColor: 'bg-blue-200', image: '/images/library.jpg' },
  { id: 8, title: 'Annual Sports Meet', category: 'Sports', bgColor: 'bg-green-200', image: '/images/sports.jpg' },
  { id: 9, title: 'Sports Activities', category: 'Sports', bgColor: 'bg-green-200', image: '/images/sport.png' },
  { id: 10, title: 'Cultural Program', category: 'Events', bgColor: 'bg-orange-200', image: '/images/cultural.jpg' },
  { id: 11, title: 'Dashain Celebration', category: 'Events', bgColor: 'bg-orange-200', image: '/images/cultural2.jpg' },
  { id: 12, title: 'Cultural Event', category: 'Events', bgColor: 'bg-orange-200', image: '/images/culture.jpg' },
  { id: 13, title: 'Parents Meeting', category: 'Events', bgColor: 'bg-pink-200', image: '/images/parents.jpg' },
  { id: 14, title: 'Notice Board', category: 'Events', bgColor: 'bg-yellow-200', image: '/images/notice.jpg' },
  { id: 15, title: 'Cafeteria', category: 'Campus', bgColor: 'bg-orange-200', image: '/images/cafeteria.jpg' },
  { id: 16, title: 'Campus Garden', category: 'Campus', bgColor: 'bg-teal-200', image: '/images/plant.jpg' },
  { id: 17, title: 'Team', category: 'Campus', bgColor: 'bg-amber-200', image: '/images/team.jpg' },
  { id: 18, title: 'Award Ceremony', category: 'Campus', bgColor: 'bg-yellow-200', image: '/images/award.jpg' },
  { id: 19, title: 'School Bus', category: 'Campus', bgColor: 'bg-lime-200', image: '/images/schoolbus.png' }
]

export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: 'First Terminal Examination',
    titleNepali: 'प्रथम त्रैमासिक परीक्षा',
    startDay: 23,
    endDay: 30,
    month: 'Asar',
    monthNepali: 'असार',
    monthNumber: 3,
    year: 2083,
    type: 'Examination',
    description: 'First terminal examination for all classes from Grade 1 to Grade 10.',
    image: '/images/science2.jpg'
  },
  {
    id: 2,
    title: 'Half Yearly Examination',
    titleNepali: 'अर्धवार्षिक परीक्षा',
    startDay: 21,
    endDay: 29,
    month: 'Ashwin',
    monthNepali: 'असोज',
    monthNumber: 6,
    year: 2083,
    type: 'Examination',
    description: 'Half yearly examination for all classes from Grade 1 to Grade 10.',
    image: '/images/sports.jpg'
  },
  {
    id: 3,
    title: 'Vijaya Dashami (Dashain Tika)',
    titleNepali: 'विजया दशमी (दसैँको टीका)',
    startDay: 1,
    endDay: 7,
    month: 'Kartik',
    monthNepali: 'कार्तिक',
    monthNumber: 7,
    year: 2083,
    type: 'Festival',
    description: 'Dashain festival holiday. School will remain closed.',
    image: '/images/cultural.jpg'
  },
  {
    id: 4,
    title: 'Bhai Tika (Tihar)',
    titleNepali: 'भाइटीका (तिहार)',
    startDay: 21,
    endDay: 29,
    month: 'Kartik',
    monthNepali: 'कार्तिक',
    monthNumber: 7,
    year: 2083,
    type: 'Festival',
    description: 'Tihar festival holiday. School will remain closed.',
    image: '/images/parents.jpg'
  },
  {
    id: 5,
    title: 'Third Terminal Examination',
    titleNepali: 'तृतीय त्रैमासिक परीक्षा',
    startDay: 21,
    endDay: 30,
    month: 'Paush',
    monthNepali: 'पौष',
    monthNumber: 9,
    year: 2083,
    type: 'Examination',
    description: 'Third terminal examination for all classes from Grade 1 to Grade 10.',
    image: '/images/plant.jpg'
  },
  {
    id: 6,
    title: 'Final Examination',
    titleNepali: 'वार्षिक परीक्षा',
    startDay: 11,
    endDay: 18,
    month: 'Chaitra',
    monthNepali: 'चैत्र',
    monthNumber: 12,
    year: 2083,
    type: 'Examination',
    description: 'Annual final examination for all classes. Results will be published within 2 weeks.',
    image: '/images/homea.jpg'
  }
]
