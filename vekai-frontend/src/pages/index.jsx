cat << 'EOF' > ./src/pages/index.jsx
import React, { useState } from 'react';
import StoreView from '../components/StoreView';

const MAGAZINE_SECTIONS = [
  { id: '1', title: 'The Cyberpunk Chronicles', genre: 'Sci-Fi', size: 'hero', image: 'https://fals.ai', desc: 'Step directly into neo-neon matrix pipelines where identities are completely decentralized.' },
  { id: '2', title: 'Monaco Speed Grid', genre: 'Racing', size: 'sub', image: 'https://fals.ai', desc: 'High-velocity F1 identity mapping frames.' }
];

export default function AppEntryRouter() {
  const [currentView, setCurrentView] = useState('roleverse_dashboard'); // 🌟 Defaults directly to your beautiful dashboard layout
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = 142 + 89 + (hasVoted ? 1 : 0);
  const pctA = Math.round(((142 + (hasVoted ? 1 : 0)) / totalVotes) * 100);

  if (currentView === 'roleverse_dashboard') {
    return (
      <div className="relative w-full min-h-screen">
        <StoreView />
        <button 
          onClick={() => setCurrentView('magazine')} 
          className="fixed top-4 right-4 bg-[#FF007F] text-white font-mono text-xs px-4 py-2.5 rounded-sm z-50 shadow-xl uppercase font-black tracking-widest cursor-pointer"
        >
          ✕ Open Mobile Magazine Hub
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[#0A0A0C] flex justify-center items-center overflow-hidden font-serif antialiased text-[#F5F5F7] select-none">
      <div className="relative w-full max-w-[430px] h-full max-h-[932px] bg-[#0A0A0C] shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col justify-between scrollbar-none pb-8">
        
        {/* VIEW 1: MAGAZINE GRID */}
        <div className="w-full flex flex-col p-6 gap-6 animate-fadeIn">
          <div className="w-full border-b-4 border-[#F5F5F7] pb-3 pt-8 flex flex-col gap-1">
            <div className="w-full flex justify-between items-end">
              <h1 className="font-sans font-black text-3xl tracking-[0.2em] text-[#F5F5F7]">VEKAI</h1>
              <button 
                onClick={() => setCurrentView('roleverse_dashboard')} 
                className="font-sans font-black text-[9px] tracking-widest text-[#00FFCC] bg-[#00FFCC]/10 px-2.5 py-1 rounded-sm uppercase cursor-pointer"
              >
                🛒 ROLEVERSE DASHBOARD
              </button>
            </div>
            <div className="w-full flex justify-between items-center mt-1 text-[9px] font-sans font-bold tracking-wider text-gray-500 uppercase">
              <span>Roleverse Architecture // Staging</span>
              <span>July 2026</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">
            {MAGAZINE_SECTIONS.map((item) => (
              <div key={item.id} className="w-full group border-b border-white/5 pb-5 last:border-b-0 flex flex-col gap-3">
                <div className="w-full aspect-[16/10] bg-neutral-900 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-90" />
                  <span className="absolute top-3 left-3 bg-white text-black font-sans font-black text-[9px] tracking-widest px-2 py-0.5 uppercase z-20">{item.genre}</span>
                </div>
                <h2 className="font-black text-xl leading-tight text-[#F5F5F7]">{item.title}</h2>
                <p className="text-gray-400 text-xs font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
EOF
