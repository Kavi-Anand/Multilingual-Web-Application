import React, { useState } from 'react';
import MascotVaani from './MascotVaani';
import HeroAudioPanel from './HeroAudioPanel';
import { Sparkles, Users, BookOpen, Layers, CheckCircle2, Zap, Radio, MessageSquare, Download } from 'lucide-react';

export default function TeacherCopilotDashboard({ isOffline, onToast }) {
  const [selectedGrade, setSelectedGrade] = useState(3);
  const [selectedSubject, setSelectedSubject] = useState('math');
  const [teacherLanguage, setTeacherLanguage] = useState('English');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);

  const handleGenerateLesson = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedContent({
        title: 'Addition & Subtraction at the Village Haat',
        explanation: 'Addition combines purchases; subtraction finds money remaining after buying goods.',
        localExamples: 'Buying ₹10 cart mangoes and ₹5 clay toys at the village weekly market.',
        vocabularyList: [
          { eng: 'Market', tn: 'சந்தை', te: 'సంత', hi: 'बाजार' },
          { eng: 'Mango', tn: 'மாம்பழம்', te: 'మామిడిపండు', hi: 'अमरूद' },
          { eng: 'Money', tn: 'பணம்', te: 'డబ్బు', hi: 'रुपया' }
        ],
        mixedClassroomDeliveries: [
          { studentGroup: 'Tamil Native Students', script: 'முத்து ₹10க்கு மாம்பழமும் ₹5க்கு பொம்மையும் வாங்குகிறான். மொத்தம் ₹15.' },
          { studentGroup: 'Telugu Native Students', script: 'రాము ₹10 కి మామిడిపండ్లు, ₹5 కి బొమ్మ కొన్నాడు. మొత్తం ₹15.' },
          { studentGroup: 'Hindi / Bhojpuri Students', script: 'छोटू ₹10 के अमरूद अउरी ₹5 के खिलौना खरीदेला। कुल ₹15।' }
        ],
        teachingActivity: 'Roleplay a village market transaction using play currency notes in small groups.',
        quizQuestion: 'If a student spends ₹10 on fruit and ₹5 on a slate, what is the total cost?',
        homework: 'Ask family members how much 1 kg of rice and 1 kg of pulse cost at the local shop.'
      });
      if (onToast) onToast('✨ Multi-Language Lesson Plan Generated for Mixed Classroom!');
    }, 900);
  };

  return (
    <div className="space-y-6">
      {/* Mascot Header */}
      <MascotVaani
        state="greeting"
        customText="Welcome to Teacher Co-Pilot! Supporting non-native educators in mixed-language primary classrooms."
      />

      {/* Main Container (Deep Indigo Theme #3730A3) */}
      <div className="bg-[#FFFBF5] p-6 rounded-3xl border-2 border-indigo-300 shadow-sm space-y-6">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200 pb-4">
          <div>
            <span className="bg-indigo-800 text-white text-xs font-bold px-3 py-0.5 rounded-full shadow-sm">
              👩‍🏫 Teacher Co-Pilot Dashboard
            </span>
            <h2 className="text-xl font-extrabold text-indigo-950 mt-1">
              Multilingual Classroom Lesson Plan Generator
            </h2>
            <p className="text-xs text-slate-600">
              Assists non-native teachers posted to vernacular primary schools (NEP 2020 MTB-MLE mandate).
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl text-xs font-bold shadow"
          >
            <Download className="w-3.5 h-3.5" /> Export Lesson Plan PDF
          </button>
        </div>

        {/* Generator Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4 rounded-2xl border border-indigo-200">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Target Grade</label>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(Number(e.target.value))}
              className="w-full bg-indigo-50 border border-indigo-300 rounded-xl px-3 py-2 text-xs font-bold text-indigo-950"
            >
              {[1, 2, 3, 4, 5].map((g) => (
                <option key={g} value={g}>Grade {g}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full bg-indigo-50 border border-indigo-300 rounded-xl px-3 py-2 text-xs font-bold text-indigo-950"
            >
              <option value="math">Mathematics</option>
              <option value="evs">Environmental Science</option>
              <option value="sci">Basic Science</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Teacher Language</label>
            <select
              value={teacherLanguage}
              onChange={(e) => setTeacherLanguage(e.target.value)}
              className="w-full bg-indigo-50 border border-indigo-300 rounded-xl px-3 py-2 text-xs font-bold text-indigo-950"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={handleGenerateLesson}
              disabled={isGenerating}
              className="w-full py-2.5 bg-indigo-800 hover:bg-indigo-900 text-white font-extrabold text-xs rounded-xl shadow transition-transform active:scale-95 flex items-center justify-center gap-1.5"
            >
              <Sparkles className={`w-4 h-4 text-amber-300 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Generating...' : 'Generate Localized Lesson'}</span>
            </button>
          </div>
        </div>

        {/* Generated Lesson Output */}
        {generatedContent && (
          <div className="space-y-5 animate-fadeIn">
            {/* MIXED LANGUAGE CLASSROOM FEATURE */}
            <div className="bg-indigo-950 text-white p-6 rounded-3xl border-2 border-indigo-800 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-indigo-900 pb-3">
                <span className="text-xs font-mono font-bold text-amber-300 uppercase flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-teal-400" /> Mixed-Language Classroom Delivery
                </span>
                <span className="bg-indigo-900 text-indigo-200 border border-indigo-700 text-[10px] font-mono px-2.5 py-0.5 rounded-full">
                  1 Concept → 3 Student Languages
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {generatedContent.mixedClassroomDeliveries.map((del, idx) => (
                  <div key={idx} className="bg-indigo-900/90 border border-indigo-800 p-4 rounded-2xl space-y-2">
                    <span className="text-[11px] font-bold text-amber-300 block">{del.studentGroup}:</span>
                    <p className="text-xs font-serif text-slate-100 italic font-semibold leading-relaxed">
                      "{del.script}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Sequence & Lesson Plan Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-indigo-200 space-y-2 text-xs">
                <span className="font-bold text-indigo-900 uppercase tracking-wider block">Simplified Explanation:</span>
                <p className="text-slate-800">{generatedContent.explanation}</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-indigo-200 space-y-2 text-xs">
                <span className="font-bold text-indigo-900 uppercase tracking-wider block">Local Context Examples:</span>
                <p className="text-slate-800">{generatedContent.localExamples}</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-indigo-200 space-y-2 text-xs">
                <span className="font-bold text-indigo-900 uppercase tracking-wider block">Teaching Activity:</span>
                <p className="text-slate-800">{generatedContent.teachingActivity}</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-indigo-200 space-y-2 text-xs">
                <span className="font-bold text-indigo-900 uppercase tracking-wider block">Homework Challenge:</span>
                <p className="text-slate-800">{generatedContent.homework}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
