import React, { useState } from 'react';
import StoreView from '../components/StoreView'; // 🌟 Import the complete roleverse dashboard

const MAGAZINE_SECTIONS = [
  { id: '1', title: 'The Cyberpunk Chronicles', genre: 'Sci-Fi', size: 'hero', image: 'https://fals.ai', desc: 'Step directly into neo-neon matrix pipelines where identities are completely decentralized.' },
  { id: '2', title: 'Monaco Speed Grid', genre: 'Racing', size: 'sub', image: 'https://fals.ai', desc: 'High-velocity F1 identity mapping frames.' }
];

export default function AppEntryRouter() {
  const [currentView, setCurrentView] = useState('magazine'); // 'magazine', 'camera', 'compiling', 'result', 'roleverse_dashboard'
  const [hasVoted, setHasVoted] = useState(false);

  // Math processors for live metric visualization loops
  const totalVotes = 142 + 89 + (hasVoted ? 1 : 0);
  const pctA = Math.round(((142 + (hasVoted ? 1 : 0)) / totalVotes) * 100);
  const pctB = Math.round((89 / totalVotes) * 100);

  // Shortcut key routing path to load full-page store dashboard instantly
  if (currentView === 'roleverse_dashboard') {
    return (
      <div className="relative w-full min-h-screen">
        <StoreView />
        <button onClick={() => setCurrentView('magazine')} className="fixed top-4 right-4 bg-[#FF007F] text-white font-mono text-xs px-4 py-2.5 rounded-sm z-50 shadow-xl uppercase font-black tracking-widest">
          ✕ Return to Mobile Hub
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[#0A0A0C] flex justify-center items-center overflow-hidden font-serif antialiased text-[#F5F5F7] select-none">
      <div className="relative w-full max-w-[430px] h-full max-h-[932px] bg-[#0A0A0C] shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col justify-between scrollbar-none pb-8">
        
        {/* VIEW 1: MAGAZINE GRID */}
        {currentView === 'magazine' && (
          <div className="w-full flex flex-col p-6 gap-6 animate-fadeIn">
            <div className="w-full border-b-4 border-[#F5F5F7] pb-3 pt-8 flex flex-col gap-1">
              <div className="w-full flex justify-between items-end">
                <h1 className="font-sans font-black text-3xl tracking-[0.2em] text-[#F5F5F7]">VEKAI</h1>
                <button onClick={() => setCurrentView('roleverse_dashboard')} className="font-sans font-black text-[9px] tracking-widest text-[#00FFCC] bg-[#00FFCC]/10 px-2.5 py-1 rounded-sm uppercase">🛒 FULL DASHBOARD</button>
              </div>
              <div className="w-full flex justify-between items-center mt-1 text-[9px] font-sans font-bold tracking-wider text-gray-500 uppercase">
                <span>Roleverse Architecture // Staging</span>
                <span>July 2026</span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-5">
              {MAGAZINE_SECTIONS.map((item) => (
                <div key={item.id} onClick={() => setCurrentView('camera')} className="w-full group cursor-pointer border-b border-white/5 pb-5 last:border-b-0 flex flex-col gap-3">
                  <div className="w-full aspect-[16/10] bg-neutral-900 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    <span className="absolute top-3 left-3 bg-white text-black font-sans font-black text-[9px] tracking-widest px-2 py-0.5 uppercase z-20">{item.genre}</span>
                  </div>
                  <h2 className="font-black text-xl leading-tight text-[#F5F5F7] group-hover:text-[#00FFCC] transition-colors">{item.title}</h2>
                  <p className="text-gray-400 text-xs font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: CAMERA VIEWPORT */}
        {currentView === 'camera' && (
          <div className="w-full h-full p-6 pt-14 flex flex-col justify-between items-center animate-fadeIn relative">
            <div className="w-full flex justify-between items-center z-10 font-sans">
              <button onClick={() => setCurrentView('magazine')} className="text-xs font-bold text-gray-400 tracking-wider hover:text-white cursor-pointer">✕ CANCEL</button>
              <span className="text-[11px] font-black tracking-[0.2em] text-white">IDENTITY SCAN</span>
              <div className="w-10" />
            </div>
            <div className="w-[230px] h-[230px] border-4 border-[#F5F5F7] rounded-full flex items-center justify-center relative my-auto shadow-2xl">
              <div className="w-[210px] h-[210px] border border-dashed border-[#00FFCC]/40 rounded-full animate-spin [animation-duration:20s]" />
            </div>
            <button onClick={() => { setCurrentView('compiling'); setTimeout(() => setCurrentView('result'), 2000); }} className="w-16 h-16 rounded-full border-4 border-[#F5F5F7] p-1 mb-8">
              <div className="w-full h-full rounded-full bg-[#F5F5F7]" />
            </button>
          </div>
        )}

        {/* VIEW 3: COMPILING RUNTIME */}
        {currentView === 'compiling' && (
          <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center bg-[#0A0A0C]">
            <h2 className="text-2xl font-black italic tracking-widest text-[#F5F5F7] animate-pulse">GENERATING PAGE...</h2>
            <p className="font-sans text-xs text-gray-500 mt-4 uppercase tracking-widest">Assembling Identity Matrices cleanly // Staging Stacks</p>
          </div>
        )}

        {/* VIEW 4: DYNAMIC FEEDBACK RESULTS LOOP */}
        {currentView === 'result' && (
          <div className="w-full p-6 pt-14 flex flex-col justify-between gap-6 animate-fadeIn">
            <div className="w-full flex justify-between items-center font-sans border-b border-white/5 pb-4">
              <button onClick={() => setCurrentView('magazine')} className="text-xs font-black tracking-widest text-gray-400 hover:text-white cursor-pointer">✕ DISMISS</button>
              <button onClick={() => setCurrentView('roleverse_dashboard')} className="text-xs font-black tracking-widest text-[#00FFCC] bg-[#00FFCC]/10 px-3 py-1.5 rounded-sm uppercase">🛒 OPEN FULL STORE</button>
            </div>
            <div className="w-full aspect-[16/10] bg-neutral-900 border border-white/10 flex items-center justify-center relative">
              <span className="text-[10px] font-sans font-black tracking-widest text-white/30 uppercase">[ Face-Swapped Output Asset ]</span>
            </div>
            <div className="w-full flex flex-col gap-4 bg-white/[0.01] border border-white/5 p-5 rounded-sm">
              <h4 className="font-black text-base text-[#F5F5F7]">Does this dynamic representation match the selection mood context?</h4>
              <div className="flex flex-col gap-2.5 font-sans">
                <button onClick={() => setHasVoted(true)} className="w-full h-12 bg-transparent border border-[#F5F5F7]/30 text-left px-4 flex justify-between items-center text-xs text-white font-bold relative overflow-hidden">
                  {hasVoted && <div className="absolute inset-y-0 left-0 bg-[#00FFCC]/10" style={{ width: `${pctA}%` }} />}
                  <span className="z-10">Absolute Hero Cut Alignment</span>
                  {hasVoted && <span className="text-[#00FFCC] font-black z-10">{pctA}%</span>}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}