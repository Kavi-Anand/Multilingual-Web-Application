import React, { useState } from 'react';
import { LANGUAGES_MASTER, CULTURAL_REGIONS } from '../data/masterData';
import { transcreateDynamicText } from '../utils/translatorEngine';
import HeroAudioPanel from './HeroAudioPanel';
import MascotVaani from './MascotVaani';
import { Upload, FileText, Camera, CheckCircle2, Sparkles, ArrowRight, Gamepad2, BookOpen, Brain, RefreshCw, Layers } from 'lucide-react';

export default function UploadLessonSection({ onNavigateToGame, onToast }) {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState(0);
  const [selectedLangId, setSelectedLangId] = useState('tamil');
  const [selectedRegionId, setSelectedRegionId] = useState('tn');
  const [processedLesson, setProcessedLesson] = useState(null);

  const selectedLangObj = LANGUAGES_MASTER.find((l) => l.id === selectedLangId) || LANGUAGES_MASTER[0];

  const handleFileUpload = (e) => {
    const uploaded = e.target.files?.[0];
    if (!uploaded) return;
    processFile(uploaded);
  };

  const processFile = (uploadedFile) => {
    setFile(uploadedFile);
    setIsProcessing(true);
    setProcessStep(1);

    // Simulate 8-step pipeline with realistic timing
    setTimeout(() => setProcessStep(2), 600);
    setTimeout(() => setProcessStep(3), 1200);
    setTimeout(() => setProcessStep(4), 1800);
    setTimeout(() => setProcessStep(5), 2400);
    setTimeout(() => setProcessStep(6), 3000);
    setTimeout(() => setProcessStep(7), 3600);
    setTimeout(() => {
      setProcessStep(8);
      setIsProcessing(false);

      // Generate processed lesson data based on filename / sample content
      const fileNameLower = uploadedFile.name.toLowerCase();
      let extractedText = 'Plants need sunlight, water, carbon dioxide, and rich soil nutrients to grow healthy and strong.';
      let topic = 'Plant Growth & Photosynthesis';
      let subject = 'EVS / Science';
      let grade = 3;
      let gameType = 'garden';

      if (fileNameLower.includes('math') || fileNameLower.includes('addition') || fileNameLower.includes('market')) {
        extractedText = 'The boy buys 4 sweet mangoes for ₹5 each and 2 clay toys for ₹10. How much money does he spend in total?';
        topic = 'Market Addition & Money';
        subject = 'Mathematics';
        grade = 2;
        gameType = 'bazaar';
      } else if (fileNameLower.includes('water') || fileNameLower.includes('cycle')) {
        extractedText = 'Water evaporates from rivers into clouds, condenses in high air, and falls back to earth as rain.';
        topic = 'The Water Cycle';
        subject = 'EVS';
        grade = 4;
        gameType = 'water_cycle';
      }

      const trans = transcreateDynamicText(extractedText, selectedLangId);

      setProcessedLesson({
        fileName: uploadedFile.name,
        fileSize: (uploadedFile.size / 1024).toFixed(1) + ' KB',
        subject,
        grade,
        topic,
        learningObjectives: [
          `Understand basic concepts of ${topic} through mother-tongue examples`,
          'Identify key vocabulary in everyday village context',
          'Solve practical application challenges through gameplay'
        ],
        originalText: extractedText,
        literalTranslation: `[Literal Baseline]: ${extractedText}`,
        transcreatedText: trans.translatedText || `[Transcreated ${selectedLangObj.name}]: ${extractedText}`,
        gameType
      });

      if (onToast) onToast(`🎉 Lesson successfully created from ${uploadedFile.name}!`);
    }, 4200);
  };

  const resetUpload = () => {
    setFile(null);
    setIsProcessing(false);
    setProcessStep(0);
    setProcessedLesson(null);
  };

  return (
    <div className="bg-[#FFFBF5] p-6 rounded-3xl border-2 border-teal-300 shadow-md space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center text-2xl shadow-md">
            📤
          </div>
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider font-mono block">
              NEP 2020 Teacher & Student Co-Pilot
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>Bring Your Own Lesson</span>
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs px-2.5 py-0.5 rounded-full font-mono font-bold">
                PDF / Image / Doc
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              Upload any textbook page or worksheet — Vidya Vaani turns it into a mother-tongue interactive lesson & game!
            </p>
          </div>
        </div>

        {/* Target Language Selection */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-700 font-bold">Target Language:</span>
          <select
            value={selectedLangId}
            onChange={(e) => setSelectedLangId(e.target.value)}
            className="bg-white border border-teal-300 text-slate-900 font-bold text-xs rounded-xl px-3 py-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {LANGUAGES_MASTER.map((l) => (
              <option key={l.id} value={l.id}>
                {l.native} — {l.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* UPLOAD FORM (When no lesson has been uploaded yet) */}
      {!file && !isProcessing && (
        <div className="space-y-4">
          <div className="border-3 border-dashed border-teal-300 bg-white hover:bg-teal-50/50 p-8 rounded-3xl text-center space-y-4 transition-colors cursor-pointer relative group">
            <input
              type="file"
              accept=".pdf,.docx,.txt,.jpg,.png,.jpeg"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mx-auto text-3xl group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-teal-700" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900">
                Drop your lesson file here or click to browse
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Supports PDF, DOCX, TXT, or 📷 Photo of textbook page (JPG/PNG)
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold font-mono">
                📄 Textbook PDF
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold font-mono">
                📝 Worksheet DOCX
              </span>
              <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-xl text-xs font-bold font-mono flex items-center gap-1">
                <Camera className="w-3.5 h-3.5" /> 📷 Textbook Page Photo
              </span>
            </div>
          </div>

          {/* Quick Demo Upload Buttons */}
          <div className="bg-amber-50 border border-amber-300 p-4 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
              🚀 Or Try Quick Sample Uploads:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => processFile({ name: 'Grade_3_Plants_Science.pdf', size: 142000 })}
                className="px-3.5 py-2 bg-white hover:bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-amber-700" />
                <span>🌱 Grade 3 Science — Plants & Water</span>
              </button>

              <button
                onClick={() => processFile({ name: 'Grade_2_Market_Addition.docx', size: 98000 })}
                className="px-3.5 py-2 bg-white hover:bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-amber-700" />
                <span>🧺 Grade 2 Math — Market Addition</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VISUAL 8-STEP FILE PROCESSING PIPELINE */}
      {isProcessing && (
        <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping"></div>
              <h3 className="font-extrabold text-base text-white">
                Vidya Vaani AI Lesson Processing Pipeline
              </h3>
            </div>
            <span className="text-xs font-mono text-amber-300">File: {file?.name}</span>
          </div>

          {/* Step Progress Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {[
              { step: 1, label: 'File Uploaded & Encrypted' },
              { step: 2, label: 'Text Extracted via Indic OCR' },
              { step: 3, label: 'Learning Objective Identified' },
              { step: 4, label: `${selectedLangObj.name} Translation Generated` },
              { step: 5, label: 'Local Village Context Adapted' },
              { step: 6, label: 'Spoken Speech Audio Prepared' },
              { step: 7, label: "Children's Interactive Game Built" },
              { step: 8, label: 'Quiz & Practice Session Ready!' }
            ].map((s) => {
              const isDone = processStep > s.step;
              const isCurrent = processStep === s.step;
              return (
                <div
                  key={s.step}
                  className={`p-3 rounded-2xl border transition-all flex items-center justify-between ${
                    isDone
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50 font-bold'
                      : isCurrent
                      ? 'bg-amber-950 text-amber-300 border-amber-400 font-extrabold animate-pulse'
                      : 'bg-slate-950 text-slate-500 border-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px]">
                        {s.step}
                      </span>
                    )}
                    <span>{s.label}</span>
                  </span>
                  {isCurrent && <span className="text-[10px] uppercase font-mono text-amber-400">Processing...</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* PROCESSED LESSON SCREEN */}
      {processedLesson && !isProcessing && (
        <div className="space-y-6 animate-fadeIn">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-emerald-950 text-white p-5 rounded-3xl shadow-lg border border-teal-700/60 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                Lesson Created By Vidya Vaani
              </span>
              <h3 className="text-xl font-black text-white">
                {processedLesson.topic} ({processedLesson.subject})
              </h3>
              <p className="text-xs text-teal-100">
                Extracted from <strong className="text-white">{processedLesson.fileName}</strong> ({processedLesson.fileSize})
              </p>
            </div>

            <button
              onClick={resetUpload}
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Upload Another
            </button>
          </div>

          {/* Learning Objectives Card */}
          <div className="bg-white p-4 rounded-2xl border border-teal-200 space-y-2 shadow-sm">
            <h4 className="font-extrabold text-xs text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
              <Brain className="w-4 h-4 text-teal-700" /> Extracted Educational Objectives:
            </h4>
            <ul className="space-y-1 text-xs text-slate-700">
              {processedLesson.learningObjectives.map((obj, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Split-Screen Transcreation: Original -> Literal -> Vidya Vaani Adaptation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Original & Literal Translation */}
            <div className="bg-slate-100 border-2 border-slate-300 p-5 rounded-3xl space-y-3">
              <span className="text-xs font-mono font-bold text-slate-600 uppercase block">
                1. Original Document Text & Literal Translation
              </span>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-slate-800 font-serif italic text-xs">
                "{processedLesson.originalText}"
              </div>
              <div className="bg-slate-200/80 p-3.5 rounded-2xl text-slate-700 font-serif text-xs">
                {processedLesson.literalTranslation}
              </div>
            </div>

            {/* Vidya Vaani Pedagogical Adaptation */}
            <div className="bg-emerald-50 border-2 border-emerald-600 p-5 rounded-3xl space-y-3 shadow-md">
              <span className="text-xs font-mono font-extrabold text-emerald-950 uppercase block flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>2. Vidya Vaani Mother-Tongue Transcreation</span>
              </span>
              <div className="bg-white p-4 rounded-2xl border border-emerald-300 font-serif text-base font-bold text-slate-900 leading-relaxed shadow-sm">
                "{processedLesson.transcreatedText}"
              </div>

              {/* Audio Panel */}
              <HeroAudioPanel
                text={processedLesson.transcreatedText}
                langCode={selectedLangObj.code}
                languageName={selectedLangObj.name}
              />
            </div>
          </div>

          {/* THE HERO BUTTON: "TURN MY LESSON INTO A GAME" */}
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 p-6 rounded-3xl shadow-xl flex flex-wrap items-center justify-between gap-4 border-2 border-amber-300">
            <div className="space-y-1">
              <span className="bg-slate-950 text-amber-300 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                The Big Differentiator
              </span>
              <h3 className="text-xl font-black text-slate-950">
                Turn This Lesson Into An Interactive Game 🎮
              </h3>
              <p className="text-xs text-slate-900 font-medium">
                AI automatically builds a child-friendly educational game based on these exact learning objectives!
              </p>
            </div>

            <button
              onClick={() => onNavigateToGame && onNavigateToGame(processedLesson)}
              className="px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-amber-400 font-black text-xs rounded-2xl shadow-2xl transition-transform active:scale-95 flex items-center gap-2"
            >
              <Gamepad2 className="w-5 h-5 text-amber-400" />
              <span>🎮 TURN INTO A GAME NOW</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
