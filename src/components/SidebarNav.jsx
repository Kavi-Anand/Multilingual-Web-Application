import React from 'react';
import { BookOpen, Mic, GraduationCap, BarChart3, Gamepad2, ChevronRight, Zap } from 'lucide-react';

export default function SidebarNav({ activeModule, setActiveModule, isOffline }) {
  const navItems = [
    {
      id: 'home',
      title: 'Home Dashboard',
      subtitle: 'Aarav Stats & Quick Actions',
      icon: BookOpen,
      badge: 'Hero',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'upload',
      title: 'UPLOAD LESSON',
      subtitle: 'Bring Your Own Material',
      icon: Zap,
      badge: 'New',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      id: 'student',
      title: 'LEARN',
      subtitle: 'Transcreation & 15 Lessons',
      icon: BookOpen,
      badge: 'Module 1',
      badgeColor: 'bg-teal-100 text-teal-900 border-teal-300'
    },
    {
      id: 'speak',
      title: 'SPEAK',
      subtitle: 'Pronunciation & Voice Quiz',
      icon: Mic,
      badge: 'Module 2',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      id: 'game',
      title: 'PLAY',
      subtitle: 'Bhasha Bazaar & Story',
      icon: Gamepad2,
      badge: 'Module 3',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'teacher',
      title: 'TEACH',
      subtitle: 'Teacher Co-Pilot',
      icon: GraduationCap,
      badge: 'Module 4',
      badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300'
    },
    {
      id: 'insights',
      title: 'Progress Analytics',
      subtitle: 'NEP 2020 & Adaptive Difficulty',
      icon: BarChart3,
      badge: 'Module 5',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300'
    }
  ];

  return (
    <aside className="w-full lg:w-72 bg-[#FFFBF5] border-r border-teal-200/60 p-4 flex flex-col gap-4 flex-shrink-0">
      {/* Offline Status Badge Banner */}
      <div className="bg-teal-50 border border-teal-200 p-3 rounded-2xl flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${isOffline ? 'bg-amber-600 animate-pulse' : 'bg-emerald-600 animate-pulse'}`}></div>
          <div>
            <div className="text-xs font-bold text-slate-800">
              {isOffline ? 'Offline Edge Mode Active' : 'Bhashini Cloud Connected'}
            </div>
            <div className="text-[11px] text-slate-500">
              {isOffline ? '14 lessons cached on device' : 'Multi-Engine TTS Active'}
            </div>
          </div>
        </div>
        <Zap className="w-4 h-4 text-teal-700" />
      </div>

      {/* Navigation Title */}
      <div className="px-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Pedagogy Stack Modules
        </span>
      </div>

      {/* Navigation Buttons */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`group relative text-left p-3 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                isActive
                  ? 'bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white hover:bg-teal-50/60 text-slate-700 border-slate-200 hover:border-teal-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl transition-colors ${
                  isActive ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-900 group-hover:bg-teal-200'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-xs leading-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </span>
                  </div>
                  <span className={`text-[11px] block mt-0.5 ${isActive ? 'text-teal-100' : 'text-slate-500'}`}>
                    {item.subtitle}
                  </span>
                </div>
              </div>

              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                isActive ? 'text-white translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
              }`} />
            </button>
          );
        })}
      </nav>

      {/* Footer Tagline Box */}
      <div className="mt-auto bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950 p-4 rounded-2xl text-teal-100 border border-teal-700/50 shadow-sm">
        <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1">
          <span>Vernacular Core</span>
        </div>
        <p className="text-xs leading-relaxed italic text-teal-100/90 font-serif">
          "Translating not just words, but the exact cultural context a child understands at home."
        </p>
      </div>
    </aside>
  );
}
