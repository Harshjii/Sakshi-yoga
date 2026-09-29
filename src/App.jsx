import React, { useState } from 'react'
import { Sparkles, Heart, Sun, Moon, Calendar, Users, Award, ChevronRight, Phone, Mail, MapPin } from 'lucide-react'

export default function App() {
  const [selectedClass, setSelectedClass] = useState('all')

  const yogaClasses = [
    {
      id: 1,
      title: 'Hatha Yoga & Mindfulness',
      instructor: 'Sakhi Lead Trainer',
      duration: '60 mins',
      level: 'All Levels',
      category: 'beginner',
      description: 'Gentle posture alignments combined with mindful breathing techniques to revitalize body and soul.',
      badge: 'Most Popular'
    },
    {
      id: 2,
      title: 'Dynamic Vinyasa Flow',
      instructor: 'Senior Instructor',
      duration: '75 mins',
      level: 'Intermediate',
      category: 'intermediate',
      description: 'Energetic sequence linking breath with dynamic motion for core strength, balance, and stamina.',
      badge: 'Energizing'
    },
    {
      id: 3,
      title: 'Pranayama & Deep Meditation',
      instructor: 'Meditation Master',
      duration: '45 mins',
      level: 'All Levels',
      category: 'meditation',
      description: 'Ancient yogic breathwork followed by guided meditation for deep emotional peace and clarity.',
      badge: 'Calming'
    },
    {
      id: 4,
      title: 'Restorative & Yin Yoga',
      instructor: 'Wellness Specialist',
      duration: '60 mins',
      level: 'Beginner Friendly',
      category: 'restorative',
      description: 'Passive, healing poses held longer to stretch deep connective tissues and release chronic stress.',
      badge: 'Healing'
    }
  ]

  const filteredClasses = selectedClass === 'all' 
    ? yogaClasses 
    : yogaClasses.filter(c => c.category === selectedClass)

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-amber-700/10 flex items-center justify-center text-amber-800 font-bold text-xl">
              🧘
            </div>
            <div>
              <span className="text-2xl font-serif tracking-wide font-bold text-amber-950">Sakhi Yoga</span>
              <p className="text-[10px] tracking-widest uppercase text-stone-500 font-medium">Holistic Wellness & Mind</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-amber-800 transition">About</a>
            <a href="#classes" className="hover:text-amber-800 transition">Classes</a>
            <a href="#benefits" className="hover:text-amber-800 transition">Why Us</a>
            <a href="#contact" className="hover:text-amber-800 transition">Contact</a>
          </nav>

          <div>
            <button className="bg-amber-800 hover:bg-amber-900 text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-sm hover:shadow">
              Book a Free Trial
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100/70 text-amber-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Reconnect With Your Inner Harmony
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 max-w-3xl mx-auto leading-tight">
            Nurture Your Soul, Body & Mind with <span className="italic text-amber-800">Sakhi Yoga</span>
          </h1>
          <p className="mt-6 text-stone-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Step into a sacred sanctuary of peace, balance, and mindful movement. Designed for all experience levels to cultivate strength, flexibility, and serenity.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3.5 rounded-full font-medium transition flex items-center gap-2 shadow-md">
              Start Your Journey <ChevronRight className="w-4 h-4" />
            </button>
            <button className="bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 px-8 py-3.5 rounded-full font-medium transition">
              Explore Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Features / Highlights */}
      <section id="benefits" className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-stone-200/60">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Mindful Movement</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Gentle postures aligned with conscious breathing to awaken vitality and release accumulated physical tension.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-stone-200/60">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Holistic Wellness</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Comprehensive practices combining asanas, pranayama, and meditation for total emotional balance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-stone-200/60">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Caring Community</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Warm, supportive environment guided by certified practitioners dedicated to your personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-900">Our Curated Sessions</h2>
          <p className="text-stone-600 mt-3 text-sm md:text-base">Tailored practices for every step of your yogic journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredClasses.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full">
                  {item.badge}
                </span>
                <span className="text-stone-500 text-xs font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {item.duration}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">{item.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <span className="text-xs font-medium text-stone-500">Level: <strong className="text-stone-800">{item.level}</strong></span>
                <button className="text-amber-800 hover:text-amber-900 font-semibold text-sm flex items-center gap-1">
                  Join Session <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-auto bg-stone-900 text-stone-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-serif text-xl font-semibold mb-3">Sakhi Yoga</h4>
            <p className="text-stone-400 text-sm leading-relaxed">
              Empowering individuals through holistic yoga, meditation, and healthy lifestyle practices.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#classes" className="hover:text-white transition">Classes & Schedule</a></li>
              <li><a href="#benefits" className="hover:text-white transition">Why Choose Sakhi</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</h4>
            <div className="space-y-2 text-sm text-stone-400">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-amber-500" /> namaste@sakhiyoga.com</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-500" /> +91 (0) 98765 43210</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-500" /> Wellness Center, Sakhi Studio</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-stone-800 mt-8 pt-6 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Sakhi Yoga. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
