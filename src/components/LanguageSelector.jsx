import React from 'react';
import { ALL_LANGUAGES, TIER1_LANGUAGES, TIER2_LANGUAGES } from '../data/languages';
import { Globe, Bell, Sparkles, Sliders, ChevronDown } from 'lucide-react';

export default function LanguageSelector({
  selectedLangId,
  setSelectedLangId,
  selectedDialectId,
  setSelectedDialectId,
  onNotifySchool
}) {
  const currentLang = ALL_LANGUAGES.find((l) => l.id === selectedLangId) || TIER1_LANGUAGES[0];
  const hasDialects = currentLang.dialects && currentLang.dialects.length > 0;

  return (
    <div className="space-y-3">
      {/* 2-Tier Grouped Main Language Select */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex-1 min-w-[240px]">
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-teal-700" /> Vernacular Mother Tongue (22 Schedule Languages):
            </span>
            <span className="text-[10px] font-mono text-teal-800 font-bold bg-teal-100 px-2 py-0.5 rounded-full border border-teal-300">
              {currentLang.tier === 'fully-live' ? 'Fully Live' : 'Architecture-Ready'}
            </span>
          </label>

          <select
            value={selectedLangId}
            onChange={(e) => {
              const newLangId = e.target.value;
              setSelectedLangId(newLangId);
              const newLang = ALL_LANGUAGES.find((l) => l.id === newLangId);
              if (newLang && newLang.dialects && newLang.dialects.length > 0) {
                setSelectedDialectId(newLang.dialects[0].id);
              } else {
                setSelectedDialectId('');
              }
            }}
            className={`w-full border rounded-xl px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-teal-500 focus:outline-none ${
              currentLang.tier === 'fully-live'
                ? 'bg-teal-50/80 border-teal-300 text-slate-900'
                : 'bg-slate-100 border-slate-300 text-slate-700'
            }`}
          >
            <optgroup label="✅ FULLY LIVE & SUPPORTED (8 Vernacular Belts)">
              {TIER1_LANGUAGES.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.flag} {lang.name} — {lang.region}
                </option>
              ))}
            </optgroup>

            <optgroup label="⏳ EXPANDING SOON — 22 EIGHTH SCHEDULE LANGUAGES (Bhashini Pipeline Ready)">
              {TIER2_LANGUAGES.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.flag} {lang.name} — {lang.region} [Phase 2 Ready]
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Secondary Sub-Regional Dialect Dropdown (If Tier 1 language has sub-variants) */}
        {hasDialects && (
          <div className="w-full sm:w-auto min-w-[220px]">
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-amber-700" /> Sub-Regional Dialect Register:
            </label>
            <select
              value={selectedDialectId}
              onChange={(e) => setSelectedDialectId(e.target.value)}
              className="w-full bg-amber-50 border border-amber-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            >
              {currentLang.dialects.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Phase 2 Placeholder Card for Tier 2 Languages */}
      {currentLang.tier === 'expanding-soon' && (
        <div className="bg-slate-100 border border-slate-300 p-4 rounded-2xl space-y-2 text-xs text-slate-700 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <Sparkles className="w-3 h-3 text-amber-700" /> Bhashini / IndicTrans2 Engine Connected
            </span>
            <button
              onClick={() => onNotifySchool && onNotifySchool(currentLang.name)}
              className="flex items-center gap-1 px-3 py-1 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold transition-all text-[11px] shadow-sm"
            >
              <Bell className="w-3 h-3" /> Notify My School
            </button>
          </div>

          <p className="font-semibold text-slate-800 leading-snug">
            Full lesson library for <strong>{currentLang.name}</strong> launches in Phase 2 — translation engine (Bhashini/IndicTrans2) already supports this language; we're prioritizing culturally-reviewed content with local educators first.
          </p>
          <span className="text-[11px] text-slate-500 block font-mono">
            Region: {currentLang.region} • Bhashini ULCA Pipeline ID: {currentLang.code}
          </span>
        </div>
      )}
    </div>
  );
}
