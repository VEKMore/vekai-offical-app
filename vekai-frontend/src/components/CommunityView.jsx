import React from 'react';

const COMMUNITY_CUTS = [
  {
    id: 'cut1',
    title: 'SHADOWSTRIKE: CITY UNDER SIEGE',
    creator: 'testuser@example.com',
    bgText: '[ Cinematic City Scene Placeholder ]'
  },
  {
    id: 'cut2',
    title: 'GROOVE ODYSSEY: NEON STAGE',
    creator: 'testuser@example.com',
    bgText: '[ Neon Dance Stage Placeholder ]'
  }
];

export default function CommunityView({ onNavigate }) {
  return (
    <div className="w-full min-h-screen bg-[#111217] text-white font-sans flex antialiased select-none">
      
      {/* 🧭 LEFT SIDE NAVIGATION BAR */}
      <aside className="w-[240px] bg-[#0c0b11] border-r border-white/5 p-5 flex flex-col justify-between shrink-0 min-h-screen hidden md:flex">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#9d4edd] to-[#00ffcc] flex items-center justify-center text-black font-black text-xs">R</div>
            <span className="font-black text-xs tracking-[0.2em] text-white">ROLEVERSE</span>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-3 rounded-lg flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm">👤</div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] text-gray-400 font-bold truncate">testuser@example.com</span>
              <span className="text-[9px] text-[#00ffcc] font-black tracking-widest uppercase mt-0.5">Creator Tier</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {['Home', 'Explore', 'Community', 'Campaigns', 'Store'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => {
                  if (tab === 'Store') onNavigate('store');
                  if (tab === 'Community') onNavigate('community');
                }}
                className={`w-full text-left px-3 py-2.5 rounded-md text-[11px] font-black tracking-wider uppercase transition-all cursor-pointer ${
                  tab === 'Community' ? 'text-[#00ffcc] bg-white/5' : 'text-gray-400 hover:text-white'
                }`}
              >
                ▪ {tab}
              </button>
            ))}
          </div>

          <div className="w-full h-px bg-white/5 my-1" />

          <div className="flex flex-col gap-1">
            <button 
              onClick={() => onNavigate('avatar_builder')}
              className="w-full text-left px-3 py-2.5 rounded-md text-[11px] font-black tracking-wider uppercase transition-all text-gray-500 hover:text-white cursor-pointer"
            >
              ▫ My Avatar
            </button>
            {['My Scenes', 'My Feed', 'Active Campaigns', 'Merchandise Store'].map((tab) => (
              <button key={tab} className="w-full text-left px-3 py-2.5 rounded-md text-[11px] font-black tracking-wider uppercase text-gray-500 hover:text-white transition-all">
                ▫ {tab}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* 💻 MAIN COMMUNITY WORKSPACE */}
      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto w-full max-w-6xl mx-auto">
        
        {/* HEADER BAR */}
        <header className="w-full flex justify-between items-center border-b border-white/5 pb-4">
          <div className="text-xs text-gray-400 font-mono tracking-wider">Server Pipeline: Status Online</div>
          <button className="bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-black tracking-widest uppercase rounded-sm hover:bg-white/10 transition-all">Log Out</button>
        </header>

        {/* HERO BANNER SECTION */}
        <section className="w-full bg-[#1b1924] border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="flex flex-col gap-2 z-10">
            <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Community Stage</span>
            <h2 className="text-2xl font-black tracking-wide text-white uppercase">WATCH, VOTE & CROWN THE BEST CUTS</h2>
            <p className="text-gray-400 text-xs max-w-xl leading-relaxed">
              Step into the spotlight. Vote for your favorite creator submissions and help crown each scene's Official Community Cut.
            </p>
          </div>
          {/* Right Stage Display Thumbnail Box */}
          <div className="w-[180px] aspect-[16/10] bg-neutral-900 border border-white/15 rounded-md flex items-center justify-center p-2 shrink-0 shadow-lg">
            <span className="text-white/10 font-mono text-[9px] tracking-widest uppercase">[ Stage Preview ]</span>
          </div>
        </section>

        {/* OFFICIAL COMMUNITY CUTS SECTION */}
        <section className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-between items-end border-b border-white/5 pb-2">
            <h3 className="text-white font-black text-xs tracking-widest uppercase">OFFICIAL COMMUNITY CUTS</h3>
            <span className="text-gray-500 text-[10px] font-bold tracking-wider">Recently crowned winners</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMUNITY_CUTS.map((cut) => (
              <div key={cut.id} className="bg-[#0c0b11] border border-white/10 p-4 rounded-xl flex flex-col gap-4 shadow-xl">
                {/* Media Container Box Layout */}
                <div className="w-full aspect-[16/10] bg-neutral-900 border border-white/5 flex items-center justify-center relative rounded-lg overflow-hidden">
                  <span className="text-white/5 font-mono text-[10px] tracking-widest uppercase">{cut.bgText}</span>
                </div>

                {/* Golden Crown Badge Line Indicator */}
                <div className="w-full bg-gradient-to-r from-[#ffb703] to-[#ffb703]/60 text-black font-black text-[9px] tracking-widest py-1.5 px-3 rounded-md uppercase flex items-center gap-1.5 shadow-md shadow-[#ffb703]/5">
                  👑 Official Cut
                </div>

                {/* Metadata Tracking Description Content */}
                <div className="flex flex-col gap-3 mt-1">
                  <h4 className="text-white font-black text-xs tracking-wide uppercase">{cut.title}</h4>
                  <div className="flex items-center gap-2 border-t border-white/5 pt-3">
                    <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px]">👤</div>
                    <span className="text-gray-400 font-mono text-[11px] truncate">{cut.creator}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACTIVE POLLS FOOTER SEGMENT INDICATOR */}
        <section className="w-full flex flex-col gap-2 mt-4 border-t border-white/5 pt-6">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-white font-black text-xs tracking-widest uppercase">ACTIVE POLLS</h3>
            <span className="text-gray-500 font-mono text-[10px]">Cast your vote before time runs out</span>
          </div>
          <div className="w-full bg-white/[0.01] border border-dashed border-white/10 p-6 text-center text-gray-500 text-xs italic font-serif">
            No active stage voting matches are running on this cycle tier. Check back soon.
          </div>
        </section>

      </main>
    </div>
  );
}
