"use client";

import React, { FC, useState } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, School, Bell, Calendar as CalendarIcon } from "lucide-react";

// --- Types ---
interface CalendarEvent {
  dayBS: number;
  eventText?: string;
  type: "holiday" | "exam" | "activity" | "vacation" | "exam-preparation";
}

interface MonthData {
  monthNameNe: string;
  monthNameEn: string;
  yearBS: number;
  daysInMonth: number;
  startingDayOfWeek: number; // 0: Sun, 1: Mon, etc.
  specialDates: CalendarEvent[];
  schoolProgrammes: string[];
}

const toNepaliNumeral = (num: number): string => {
  const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  return String(num).split("").map((d) => nepaliDigits[parseInt(d)]).join("");
};

const InteractiveCalendar: FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Full 12-Month Data based on Nobel Academy 2083 Calendar
  const calendarYear: MonthData[] = [
    {
      monthNameNe: "बैशाख",
      monthNameEn: "APR/MAY 2026",
      yearBS: 2083,
      daysInMonth: 31,
      startingDayOfWeek: 2,
      specialDates: [
        { dayBS: 1, eventText: "New Year", type: "holiday" },
        { dayBS: 18, eventText: "Gautam Buddha Jayanti", type: "holiday" },
      ],
      schoolProgrammes: ["New Academic Session Begins","Admission Open, Orientation programme","Regular Classes Start"],
    },
    {
      monthNameNe: "जेठ",
      monthNameEn: "MAY/JUN 2026",
      yearBS: 2083,
      daysInMonth: 31,
      startingDayOfWeek: 5,
      specialDates: [
        { dayBS: 15, eventText: "Republic Day", type: "holiday" },
      ],
      schoolProgrammes: ["Regular Teaching-Learning Activities", "ECA/ Club Activities"],
    },
    {
      monthNameNe: "असार",
      monthNameEn: "JUN/JUL 2026",
      yearBS: 2083,
      daysInMonth: 32,
      startingDayOfWeek: 1,
      specialDates: [
        { dayBS: 22, eventText: "1st Term Exam", type: "exam-preparation" },
        { dayBS: 23, eventText: "1st Term Exam", type: "exam" },
        { dayBS: 24, eventText: "1st Term Exam", type: "exam" },
        { dayBS: 25, eventText: "1st Term Exam", type: "exam" },
        { dayBS: 26, eventText: "1st Term Exam", type: "exam" },
        { dayBS: 28, eventText: "1st Term Exam", type: "exam" },
        { dayBS: 29, eventText: "1st Term Exam", type: "exam" },
        { dayBS: 30, eventText: "1st Term Exam", type: "exam" },
        
      ],
      schoolProgrammes: ["First Terminal Examination","Result Publication", "Parents-Teachers Meeting","Admission Open-Class XI"],
    },
    {
      monthNameNe: "साउन",
      monthNameEn: "JUL/AUG 2026",
      yearBS: 2083,
      daysInMonth: 31,
      startingDayOfWeek: 5,
      specialDates: [
        { dayBS: 8, eventText: "Result Day", type: "exam" },
      ],
      schoolProgrammes: ["Regular Classes Continue","Project Work / Practical Activities"," Admission Open-Class XI"],
    },
    {
      monthNameNe: "भदौ",
      monthNameEn: "AUG/SEP 2026",
      yearBS: 2083,
      daysInMonth: 31,
      startingDayOfWeek: 1,
      specialDates: [
        { dayBS: 12, eventText: "Janai Purnima", type: "holiday" },
        { dayBS: 19, eventText: "Krishna Janmashtami", type: "holiday" },
        { dayBS: 29, eventText: "Teej", type: "holiday" },

      ],
      schoolProgrammes: ["Regular Teaching-Learning","Quiz/ Debate/ co-curricular Activities"],
    },
    {
      monthNameNe: "आश्विन",
      monthNameEn: "SEP/OCT 2026",
      yearBS: 2083,
      daysInMonth: 30,
      startingDayOfWeek: 4,
      specialDates: [
        { dayBS: 20, eventText: "Exam-Preparation", type: "exam-preparation" },
        { dayBS: 21, eventText: "Half-yearly Exam", type: "exam" },
        { dayBS: 22, eventText: "Half-yearly Exam", type: "exam" },
        { dayBS: 23, eventText: "Half-yearly Exam", type: "exam" },
        { dayBS: 24, eventText: "Ghatasthapana", type: "holiday" },
        { dayBS: 25, eventText: "Half-yearly Exam", type: "exam" },
        { dayBS: 26, eventText: "Half-yearly Exam", type: "exam" },
        { dayBS: 27, eventText: "Half-yearly Exam", type: "exam" },
        { dayBS: 28, eventText: "Half-yearly Exam", type: "exam" },
        { dayBS: 29, eventText: "Half-yearly Exam", type: "exam" },





      ],
      schoolProgrammes: ["Second Terminal Examination", "Dashain Vacation"],
    },
    {
      monthNameNe: "कार्तिक",
      monthNameEn: "OCT/NOV 2026",
      yearBS: 2083,
      daysInMonth: 30,
      startingDayOfWeek: 0,
      specialDates: [
        { dayBS: 1, eventText: " ", type: "holiday" },
        { dayBS: 2, eventText: " ", type: "holiday" },
        { dayBS: 3, eventText: " ", type: "holiday" },
        { dayBS: 4, eventText: " ", type: "holiday" },
        { dayBS: 5, eventText: " ", type: "holiday" },
        { dayBS: 6, eventText: " ", type: "holiday" },
        { dayBS: 22, eventText: " ", type: "holiday" },
        { dayBS: 23, eventText: " ", type: "holiday" },
        { dayBS: 24, eventText: " ", type: "holiday" },
        { dayBS: 25, eventText: " ", type: "holiday" },
        { dayBS: 26, eventText: " ", type: "holiday" },
        { dayBS: 29, eventText: " ", type: "holiday" },




      ],
      schoolProgrammes: ["Classes Resume", "Regular Teaching-Learning Activities", "Annual Sports Meet"],
    },
    {
      monthNameNe: "मंसिर",
      monthNameEn: "NOV/DEC 2026",
      yearBS: 2083,
      daysInMonth: 29,
      startingDayOfWeek: 2,
      specialDates: [
        {},
      ],
      schoolProgrammes: ["Project Work, Picnic", "Practical Activites, Education Tour","Internal Evaluation"],
    },
    {
      monthNameNe: "पुष",
      monthNameEn: "DEC/JAN 2026/27",
      yearBS: 2083,
      daysInMonth: 30,
      startingDayOfWeek: 3,
      specialDates: [
        { dayBS: 9, eventText: "ubhauli parva", type: "holiday" },
        { dayBS: 10, eventText: "Christmas Day", type: "holiday" },
        { dayBS: 15, eventText: "Tamu Losar", type: "holiday" },
        { dayBS: 20, eventText: "Exam-Preparation", type: "exam-preparation" },
        { dayBS: 21, eventText: "Second Terminal", type: "exam" },
        { dayBS: 22, eventText: "Second Terminal", type: "exam" },
        { dayBS: 23, eventText: "Second Terminal", type: "exam" },
        { dayBS: 24, eventText: "Tol Lhosar", type: "holiday" },
        { dayBS: 26, eventText: "Second Terminal", type: "exam" },
        { dayBS: 27, eventText: "Prithivi Jayanti", type: "holiday" },
        { dayBS: 28, eventText: "Second Terminal", type: "exam" },
        { dayBS: 29, eventText: "Second Terminal", type: "exam" },
        { dayBS: 30, eventText: "Second Terminal", type: "exam" },

      ],
      schoolProgrammes: ["Third Terminal Examination","Result Publication"],
    },
    {
      monthNameNe: "माघ",
      monthNameEn: "JAN/FEB 2027",
      yearBS: 2083,
      daysInMonth: 29,
      startingDayOfWeek: 5,
      specialDates: [
        { dayBS: 1, eventText: "Makar Sankranti", type: "holiday" },
        { dayBS: 8, eventText: "Result Day", type: "exam" },
        { dayBS: 24, eventText: "Sonam Lhochhar", type: "holiday" },
        { dayBS: 28, eventText: "Saraswati Pooja", type: "holiday" },
        
      ],
      schoolProgrammes: ["Annual ECA Program", "Annual Function", "Pre-SEE/BLE Examination"],
    },
    {
      monthNameNe: "फाल्गुण",
      monthNameEn: "FEB/MAR 2027",
      yearBS: 2083,
      daysInMonth: 30,
      startingDayOfWeek: 6,
      specialDates: [
        { dayBS: 7, eventText: "Prajatantra Diwas", type: "holiday" },
        { dayBS: 15, eventText: "International Women's Day", type: "holiday" },
        { dayBS: 15, eventText: "Gyalpo Lhosar", type: "holiday" },

      ],
      schoolProgrammes: ["Revision Classes","SEE Preparion Classes"],
    },
    {
      monthNameNe: "चैत्र",
      monthNameEn: "MAR/APR 2027",
      yearBS: 2083,
      daysInMonth: 30,
      startingDayOfWeek: 1,
      specialDates: [
        { dayBS: 8, eventText: "Fagu Poornima(terai)", type: "holiday" },
        { dayBS: 11, eventText: "Final Exam", type: "exam" },
        { dayBS: 12, eventText: "Final Exam", type: "exam" },
        { dayBS: 14, eventText: "Final Exam", type: "exam" },
        { dayBS: 15, eventText: "Final Exam", type: "exam" },
        { dayBS: 16, eventText: "Final Exam", type: "exam" },
        { dayBS: 17, eventText: "Final Exam", type: "exam" },
        { dayBS: 18, eventText: "Final Exam", type: "exam" },
        { dayBS: 30, eventText: "Result Day", type: "exam" },
      ],
      schoolProgrammes: ["Annual Examination", "Final Result Publication","Promotion & Admission Preparation"],
    },
  ];

  const currentMonth = calendarYear[currentIdx];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Helpers for Color Styles
  const getEventStyles = (type: string) => {
    switch (type) {
      case "holiday": return "bg-red-600 text-white";
      case "exam": return "bg-orange-500 text-white";
      case "vacation": return "bg-blue-600 text-white";
      case "activity": return "bg-green-600 text-white";
      case "exam-preparation": return"bg-pink-600 text-white"
      default: return "bg-white text-slate-800";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-4 sm:my-8 bg-white shadow-2xl rounded-3xl overflow-hidden ring-1 ring-gray-200">
      
      {/* --- TOP BRANDING --- */}
      <div className="bg-white border-b p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">NEA</div>
          <div>
            <h1 className="text-xl font-black text-green-800 leading-none">NOBEL ENVIRONMENT ACADEMY</h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Tilottama-15, Rupandehi | Estd. 2068</p>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm font-bold text-red-600">"Good Environment. The Best Education"</p>
        </div>
      </div>

      {/* --- NAVIGATION & MONTH PICKER --- */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 p-6 text-white text-center relative">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <button onClick={() => setCurrentIdx(prev => prev === 0 ? 11 : prev - 1)} className="p-2 hover:bg-white/20 rounded-full transition-colors"><ChevronLeft size={32}/></button>
          <div>
             <h2 className="text-3xl font-bold">{currentMonth.monthNameNe} <span className="text-green-300">२०८३</span></h2>
             <p className="text-xs font-medium tracking-widest opacity-80 uppercase">{currentMonth.monthNameEn}</p>
          </div>
          <button onClick={() => setCurrentIdx(prev => prev === 11 ? 0 : prev + 1)} className="p-2 hover:bg-white/20 rounded-full transition-colors"><ChevronRight size={32}/></button>
        </div>
      </div>

      <div className="p-2 sm:p-4 bg-gray-50 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* --- CALENDAR GRID (Left 9 cols) --- */}
        <div className="lg:col-span-8 bg-white p-2 rounded-2xl shadow-inner border border-gray-200">
          <div className="grid grid-cols-7 gap-1">
            {weekDays.map((day, i) => (
              <div key={day} className={`py-3 text-center text-xs font-black uppercase ${i === 6 ? 'text-red-500' : 'text-green-800'}`}>
                {day}
              </div>
            ))}

            {Array(currentMonth.startingDayOfWeek).fill(null).map((_, i) => (
              <div key={`blank-${i}`} className="aspect-square sm:h-24 bg-gray-50/50 rounded-lg" />
            ))}

            {Array.from({ length: currentMonth.daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const special = currentMonth.specialDates.find(d => d.dayBS === dayNum);
              const isSaturday = (dayNum + currentMonth.startingDayOfWeek) % 7 === 0;
              
              return (
                <div key={dayNum} className={`
                  relative aspect-square sm:h-28 rounded-xl border flex flex-col items-center justify-center transition-all group cursor-pointer
                  ${special ? getEventStyles(special.type) : (isSaturday ? "bg-red-50 border-red-100" : "bg-white border-gray-100 hover:border-green-500")}
                `}>
                  <span className={`text-xl sm:text-3xl font-black ${!special && isSaturday ? "text-red-600" : ""}`}>
                    {toNepaliNumeral(dayNum)}
                  </span>
                  <span className="absolute top-1 right-1.5 text-[10px] opacity-60 font-bold">{dayNum + 13}</span>
                  
                  {special && (
                    <span className="absolute bottom-1 px-1 text-[8px] sm:text-[10px] font-bold text-center leading-tight line-clamp-1 uppercase">
                      {special.eventText}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* --- PROGRAMMES & LEGEND (Right 4 cols) --- */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Legend */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase flex items-center gap-2">
              <Bell size={14} className="text-green-600"/> Color Key
            </h4>
            <div className="grid grid-cols-2 gap-2">
               <div className="flex items-center gap-2 text-[10px] font-bold"><span className="w-3 h-3 bg-red-600 rounded-sm"/> HOLIDAY</div>
               <div className="flex items-center gap-2 text-[10px] font-bold"><span className="w-3 h-3 bg-blue-600 rounded-sm"/> VACATION</div>
               <div className="flex items-center gap-2 text-[10px] font-bold"><span className="w-3 h-3 bg-green-600 rounded-sm"/> ACTIVITY</div>
               <div className="flex items-center gap-2 text-[10px] font-bold"><span className="w-3 h-3 bg-orange-500 rounded-sm"/> EXAMINATION</div>
               <div className="flex items-center gap-2 text-[10px] font-bold"><span className="w-3 h-3 bg-pink-500 rounded-sm"/> EXAM-PREPARATION</div>


            </div>
          </div>

          {/* School Events */}
          <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
            <div className="flex items-center gap-2 mb-4">
              <School className="text-green-700" size={20}/>
              <h3 className="font-black text-green-900 uppercase text-sm tracking-tighter">School Activities</h3>
            </div>
            <ul className="space-y-3">
              {currentMonth.schoolProgrammes.map((p, i) => (
                <li key={i} className="text-xs font-bold text-green-800 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 shrink-0"/> {p}
                </li>
              ))}
            </ul>
          </div>

         

        </div>
      </div>

      {/* --- FOOTER MOTTO --- */}
      <div className="bg-green-900 py-4 px-6 text-center">
        <p className="text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase opacity-80">
          "Good Environment, Best Education & Creative Knowledge"
        </p>
      </div>
    </div>
  );
};

export default InteractiveCalendar;