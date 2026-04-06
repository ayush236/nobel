'use client';

import PageBanner from "@/components/PageBanner";
import SchoolLifeImageSlider from "@/components/SchoolLifeImageSlider";
import { Camera, Music, Trophy, Users, BookOpen, Coffee } from "lucide-react";
import Image from "next/image";

interface Activity {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'School Life', href: '/school-life' }
  ]

export default function SchoolLifePage() {
  const activities: Activity[] = [
    { 
      title: "Sports Club", 
      icon: <Trophy className="w-6 h-6" />, 
      desc: "From football to table tennis, we foster athletic excellence and teamwork." 
    },
    { 
      title: "Arts & Culture", 
      icon: <Music className="w-6 h-6" />, 
      desc: "Music, dance, and drama programs designed to spark creativity." 
    },
    { 
      title: "Student Council", 
      icon: <Users className="w-6 h-6" />, 
      desc: "Developing the next generation of leaders through student-led initiatives." 
    },
    { 
      title: "Science Lab", 
      icon: <BookOpen className="w-6 h-6" />, 
      desc: "Hands-on learning with state-of-the-art equipment and research." 
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
        <PageBanner title="School Life" breadcrumbs={breadcrumbs} image="/images/schoollife2.jpg" />

      
      

      {/* ACTIVITIES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-2">
              Activities
            </h2>
            <p className="text-4xl font-bold text-slate-900">
              Beyond the Classroom
            </p>
          </div>
          <p className="text-slate-500 max-w-md">
            Our diverse range of clubs and organizations allows every student to find their niche.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-emerald-100 hover:border-emerald-400 hover:bg-emerald-600 transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-2"
            >
              <div className="bg-emerald-100 group-hover:bg-white w-12 h-12 rounded-lg flex items-center justify-center text-emerald-600 mb-6 transition-all duration-300">
                {activity.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-emerald-900 group-hover:text-white transition-colors">
                {activity.title}
              </h3>

              <p className="text-emerald-800/70 group-hover:text-emerald-50 transition-colors leading-relaxed">
                {activity.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="relative bg-emerald-900 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row">

          {/* Glow */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-400 opacity-20 blur-[140px] rounded-full"></div>

          {/* TEXT */}
          <div className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-300 text-xs font-bold mb-6 w-fit">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              CAMPUS HIGHLIGHTS
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sustainability and Wellness at our Core
            </h2>

            <div className="space-y-6">
              {[
                { icon: Coffee, text: "Healthy, locally-sourced cafeteria options" },
                { icon: Camera, text: "Modern media labs and creative spaces" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <item.icon className="text-green-400 shrink-0" size={24} />
                  <p className="text-emerald-100/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE SIDE (Next.js optimized) */}
          <div className="lg:w-1/2 relative min-h-[300px]">
            <SchoolLifeImageSlider />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      </section>

    </main>
  );
}