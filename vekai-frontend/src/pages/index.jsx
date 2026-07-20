import React, { useState } from 'react';

// Hardcoded data mimicking an elegant magazine content layout framework
const MAGAZINE_SECTIONS = [
  { id: '1', title: 'The Cyberpunk Chronicles', genre: 'Sci-Fi', size: 'hero', image: 'https://fals.ai', desc: 'Step directly into neo-neon matrix pipelines where identities are completely decentralized.' },
  { id: '2', title: 'Monaco Speed Grid', genre: 'Racing', size: 'sub', image: 'https://fals.ai', desc: 'High-velocity F1 identity mapping frames.' },
  { id: '3', title: 'Seoul Neon Drop', genre: 'K-Pop', size: 'sub', image: 'https://fals.ai', desc: 'Vibrant performance-driven transformation filters.' }
];

export default function FlipboardStudio() {
  const [currentView, setCurrentView] = useState('magazine'); // 'magazine', 'camera', 'compiling', 'result'
  const [selectedScene, setSelectedScene] = useState(MAGAZINE_SECTIONS[0]);
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div className="w-full h-screen bg-[#0A0A0C] flex justify-center items-center overflow-hidden font-serif antialiased text-[#F5F5F7]">
      {/* 9:16 High-Fidelity Magazine Standalone Framework */}
      <div className="relative w-full max-w-[430px] h-full max-h-[932px] bg-[#0A0A0C] shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col justify-between scrollbar-none pb-8">
        
        {/* ============================================================== */}
        {/* VIEW 1: THE ASYMMETRIC MAGAZINE EDITORIAL GRID                 */}
        {/* ============================================================== */}
        {currentView === 'magazine' && (
          <div className="w-full flex flex-col p-6 gap-6 animate-fadeIn">
            
            {/* Elegant Magazine Top Master Header Nameplate */}
            <div className="w-full border-b-4 border-[#F5F5F7] pb-3 pt-8 flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <h1 className="font-sans font-black text-3xl tracking-[0.2em] text-[#F5F5F7]">VEKAI</h1>
                <span className="font-sans font-black text-[10px] tracking-widest text-[#00FFCC] bg-[#00FFCC]/10 px-2.5 py-1 rounded-sm">EDITION 01</span>
              </div>
              <div className="w-full flex justify-between items-center mt-1 text-[9px] font-sans font-bold tracking-wider text-gray-500 uppercase">
                <span>Tokyo // Staging Environment</span>
                <span>July 2026</span>
              </div>
            </div>

            {/* ASYMMETRIC GRID LOOP INTERACTION SYSTEM */}
            <div className="w-full flex flex-col gap-5">
              {MAGAZINE_SECTIONS.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => { setSelectedScene(item); setCurrentView('camera'); }}
                  className={`w-full group cursor-pointer border-b border-white/5 pb-5 last:border-b-0 flex flex-col gap-3`}
                >
                  {item.size === 'hero' ? (
                    // FEATURE HERO CARD FORMATTING
                    <>
                      <div className="w-full aspect-[16/10] bg-neutral-900 overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                        <span className="absolute top-3 left-3 bg-white text-black font-sans font-black text-[9px] tracking-widest px-2 py-0.5 uppercase z-20">{item.genre}</span>
                      </div>
                      <h2 className="font-black text-xl leading-tight text-[#F5F5F7] group-hover:text-[#00FFCC] transition-colors">{item.title}</h2>
                      <p className="text-gray-400 text-xs font-sans leading-relaxed">{item.desc}</p>
                    </>
                  ) : (
                    // MINIMAL COMPACT SIDEBAR CARDS FORMATTING
                    <div className="w-full flex gap-4 items-start">
                      <div className="w-24 h-24 bg-neutral-900 overflow-hidden shrink-0 relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[#00FFCC] font-sans font-black text-[9px] tracking-widest uppercase">{item.genre}</span>
                        <h3 className="font-black text-sm leading-snug text-[#F5F5F7] group-hover:text-[#00FFCC] transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-[11px] font-sans line-clamp-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: FLIPBOARD IDENTITY CAMERA EXTRACTION VIEWPORT          */}
        {/* ============================================================== */}
        {currentView === 'camera' && (
          <div className="w-full h-full p-6 pt-14 flex flex-col justify-between items-center animate-fadeIn relative">
            <div className="w-full flex justify-between items-center z-10 font-sans">
              <button onClick={() => setCurrentView('magazine')} className="text-xs font-bold text-gray-400 tracking-wider hover:text-white cursor-pointer">✕ CANCEL</button>
              <span className="text-[11px] font-black tracking-[0.2em] text-white">IDENTITY SCAN</span>
              <div className="w-10" />
            </div>

            {/* Elegant Minimalist Framing Ring */}
            <div className="w-[230px] h-[230px] border-4 border-[#F5F5F7] rounded-full flex items-center justify-center relative my-auto shadow-2xl">
              <div className="w-[210px] h-[210px] border border-dashed border-[#00FFCC]/40 rounded-full animate-spin [animation-duration:20s]" />
              <div className="absolute font-sans font-black text-[9px] tracking-widest text-[#00FFCC] bg-black px-3 py-1 top-[-10px]">FACIAL ORIENTATION LOCK</div>
            </div>

            <div className="w-full flex flex-col items-center gap-4 z-10">
              <p className="text-center font-sans text-xs text-gray-400 max-w-[70%] leading-relaxed">Position features completely inside the framing track to synchronize credentials.</p>
              <button onClick={() => { setCurrentView('compiling'); setTimeout(() => setCurrentView('result'), 3000); }} className="w-16 h-16 rounded-full border-4 border-[#F5F5F7] bg-transparent flex justify-center items-center cursor-pointer transition-transform active:scale-90 p-1">
                <div className="w-full h-full rounded-full bg-[#F5F5F7] hover:bg-[#00FFCC] transition-colors" />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: COMPILING RUNTIME OVERLAY                              */}
        {/* ============================================================== */}
        {currentView === 'compiling' && (
          <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center bg-[#0A0A0C] animate-fadeIn">
            <h2 className="text-2xl font-black italic tracking-widest text-[#F5F5F7] animate-pulse">GENERATING PAGE...</h2>
            <div className="w-24 h-1 bg-white/10 mt-4 relative overflow-hidden rounded-full">
              <div className="absolute h-full w-1/3 bg-[#00FFCC] top-0 left-0 animate-loadingMove" />
            </div>
            <p className="font-sans text-xs text-gray-500 mt-4 uppercase tracking-widest">Assembling Identity Matrices cleanly // Staging Stacks</p>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 4: MAGAZINE LAYOUT RESULTS & EDITORIAL POLL               */}
        {/* ============================================================== */}
        {currentView === 'result' && (
          <div className="w-full p-6 pt-14 flex flex-col justify-between gap-6 animate-fadeIn">
            <div className="w-full flex justify-between items-center font-sans border-b border-white/5 pb-4">
              <button onClick={() => setCurrentView('magazine')} className="text-xs font-black tracking-widest text-gray-400 hover:text-white cursor-pointer">✕ DISMISS</button>
              <h3 className="font-black text-xs tracking-[0.2em] text-[#00FFCC]">THE RESULT CUT</h3>
            </div>

            {/* PROCESSED COMPLETED MEDIA PREVIEW CANVAS */}
            <div className="w-full aspect-[16/10] bg-neutral-900 border border-white/10 flex flex-col justify-center items-center relative">
              <span className="text-[10px] font-sans font-black tracking-widest text-white/30 uppercase">[ Looping Face-Swapped Output Asset ]</span>
              <span className="absolute bottom-3 left-3 font-sans font-black text-[9px] tracking-widest bg-[#00FFCC] text-black px-2 py-0.5">COMPILING OK</span>
            </div>

            {/* EDITORIAL CROWD POLL SECTOR PANEL */}
            <div className="w-full flex flex-col gap-4 bg-white/[0.01] border border-white/5 p-5 rounded-sm">
              <div>
                <span className="font-sans font-black text-[9px] tracking-widest text-[#FF007F] uppercase block mb-1">Reader Feedback Loop</span>
Does this dynamic filter representation match the mood of "{selectedScene.title}"?<button onClick={() => setHasVoted(true)} className="w-full h-12 bg-transparent border border-[#F5F5F7]/30 hover:border-[#00FFCC] text-left px-4 flex justify-between items-center text-xs text-white font-bold transition-all relative overflow-hidden cursor-pointer">{hasVoted && }Absolute Hero Cut Alignment{hasVoted && 72%}<button onClick={() => setHasVoted(true)} className="w-full h-12 bg-transparent border border-[#F5F5F7]/30 hover:border-[#FF007F] text-left px-4 flex justify-between items-center text-xs text-white font-bold transition-all relative overflow-hidden cursor-pointer">{hasVoted && }Rogue Alternative Variant{hasVoted && 28%}{/* Primary Content Syndication Button */}📲 SYNDICATE TO SOCIAL MEDIA)});}