"use client";

import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import { Trophy, Star, Medal, Award, Target, Lightbulb } from "lucide-react";
import React, { FC } from 'react'
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";


const AchievementsClient: FC = () => {
  const stats = [
    { label: "Awards", value: "120+", icon: Trophy },
    { label: "Rankings", value: "35+", icon: Star },
    { label: "Medals", value: "15+", icon: Medal },
    { label: "Years of Excellence", value: "25+", icon: Award },
  ];

  const achievements = [
    {
      title: "Under-16 District Champions",
      desc: "Top district ranking secured by our students.",
      image: "/images/award.jpg",
    },
    {
      title: "karate Champions",
      desc: "Inter-school championship winners.",
      image: "/images/achievement1.jpg",
      
    },
    {
      title: "Badminton champions",
      desc: "Badminton competition victory.",
      image: "/images/achievement4.jpg",
    },
    {
      title: "Speech Competition Winner",
      desc: "Top performer in the annual speech competition.",
      image: "/images/achievements.jpg",
    },
  ];

  const excellenceAreas = [
    {
      title: "Academic Excellence",
      desc: "Rigorous curriculum and dedicated educators ensuring student success",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Sports Dominance",
      desc: "Championship-winning teams and athletic development programs",
      icon: Trophy,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Innovation & Technology",
      desc: "Cutting-edge labs and digital learning environments",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Achievements", href: "/achievements" },
  ];

  return (
    <main className="min-h-screen  text-green-900 overflow-hidden">
      <Topbar/>
       <Navbar/>


      <PageBanner
        title="Achievements"
        breadcrumbs={breadcrumbs}
        image="/images/achievement2.jpg"
      />

      {/* HERO TEXT */}
      <section className="px-6 pt-16 pb-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Excellence <span className="text-emerald-400">Recognized</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A legacy built through dedication, innovation, and outstanding performance.
        </p>
      </section>

      {/* STATS */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-transparent bg-linear-to-r from-emerald-400 to-green-400 bg-clip-text mb-1">
                  {item.value}
                </h3>
                <p className="text-xs font-semibold text-slate-400 group-hover:text-emerald-300 transition-colors">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 bg-linear-to-br from-emerald-900 to-green-800 border border-emerald-500/30">
          {/* Multiple glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-400 opacity-15 blur-[140px] rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500 opacity-10 blur-[120px] rounded-full"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs font-bold text-emerald-300">our main moto</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              " Good Environment, The Best Eduction & Creative Knowledge "
              
            </h2>

            <p className="text-slate-200 max-w-xl text-lg leading-relaxed">
              Recognized for academic excellence, innovation, and leadership in education.
            </p>
          </div>
        </div>
      </section>

      {/* RECENT ACHIEVEMENTS */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-emerald-900">
      Recent <span className="text-emerald-600">Achievements</span>
    </h2>
    <p className="text-emerald-800/80 max-w-2xl">
      Our students and team's remarkable accomplishments across academics, sports, and cultural events
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {achievements.map((item, i) => (
      <div
        key={i}
        className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100 via-emerald-50 to-green-100 border border-emerald-200 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-emerald-400/30"
      >

        {/* IMAGE */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Soft green overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-emerald-700/20 to-transparent"></div>
        </div>

        {/* CONTENT */}
        <div className="p-5 relative z-10">

          
          

          {/* TITLE */}
          <h3 className="text-lg font-bold mb-2 text-emerald-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-emerald-800/80 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>

        {/* HOVER LIGHT EFFECT */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-emerald-300/20"></div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* EXCELLENCE AREAS */}
      <section className="px-6 max-w-7xl mx-auto pb-20 relative">
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-emerald-900">
      Our <span className="text-emerald-600">Excellence Areas</span>
    </h2>
    <p className="text-emerald-800/80 max-w-2xl">
      Excelling across multiple dimensions of education and development
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {excellenceAreas.map((item, i) => (
      <div
        key={i}
        className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-100/60 to-green-100/60 border border-emerald-200 p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-400/30"
      >
        {/* Top floating gradient shape */}
        <div
          className={`absolute -top-16 -right-16 w-40 h-40 ${item.color} opacity-20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-300`}
        ></div>

        {/* Icon */}
        <div
          className={`relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
        >
          <item.icon className="w-7 h-7 text-black" />
        </div>

        {/* Title */}
        <h3 className="relative z-10 text-xl font-bold mb-3 text-emerald-900 group-hover:text-emerald-700 transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-emerald-800/80 text-sm leading-relaxed">
          {item.desc}
        </p>

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
      </div>
    ))}
  </div>
</section>

    </main>
  );
}
export default AchievementsClient;
