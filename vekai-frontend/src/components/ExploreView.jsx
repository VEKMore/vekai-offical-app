import React, { useState } from 'react';

const SCENES_DATA = [
  { id: 's1', tag: 'Action Movie', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', desc: 'A high-octane action movie scene set in a dystopian city, featuring explosive stunts and hero-villain face-offs.', roles: '2 roles', views: '96,400 views', color: 'bg-red-600' },
  { id: 's2', tag: 'AI Original', title: 'ORIGEN: AI DREAMSCAPE', desc: 'A fully AI-original high-concept dreamscape with surreal visuals and narrative arcs.', roles: '0 roles', views: '11,500 views', color: 'bg-purple-600' },
  { id: 's3', tag: 'Musical/Dance', title: 'GROOVE ODYSSEY: NEON STAGE', desc: 'A vibrant musical dance scene submitted by a community creator, bursting with neon lights and rhythm.', roles: '1 role', views: '51,200 views', color: 'bg-pink-600' },
  { id: 's4', tag: 'Fashion Show', title: 'VELVET RUNWAY: SEASON ZERO', desc: 'A glamorous fashion show runway scene submitted by a community creator.', roles: '0 roles', views: '46,700 views', color: 'bg-fuchsia-600' },
  { id: 's5', tag: 'News Broadcast', title: 'BREAKING NOW: STUDIO 7 LIVE', desc: 'A live-style news broadcast scene with an AI anchor delivering breaking news.', roles: '1 role', views: '51,000 views', color: 'bg-blue-600' },
  { id: 's6', tag: 'TV Drama', title: 'WHISPERS IN THE WARD', desc: 'An emotional TV drama unfolding in a hospital ward, with complex character dynamics.', roles: '2 roles', views: '43,500 views', color: 'bg-indigo-600' },
  { id: 's7', tag: 'Sports Event', title: 'CHAMPIONSHIP CLASH: FINAL QUARTER', desc: 'An intense sports event scene capturing the final moments of a championship game.', roles: '0 roles', views: '16,200 views', color: 'bg-orange-600' },
  { id: 's8', tag: 'Virtual Comic', title: 'PANEL 42: THE AWAKENING', desc: 'A virtual comic-style scene exploring a superhero origin story, AI-generated.', roles: '0 roles', views: '39,800 views', color: 'bg-teal-600' },
  { id: 's9', tag: 'Circus/Performance Art', title: 'MIDNIGHT CARNIVAL SPECTACULAR', desc: 'A whimsical circus and performance art scene full of acrobatics and color.', roles: '1 role', views: '12,900 views', color: 'bg-emerald-600' }
];

export default function ExploreView({ onNavigate }) {
  const [categoryFilter, setCategoryFilter] = useState('All Categories');

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
                  if (tab === 'Explore') onNavigate('explore');
                  if (tab === 'Community') onNavigate('community');
                }}
                className={`w-full text-left px-3 py-2.5 rounded-md text-[11px] font-black tracking-wider uppercase transition-all cursor-pointer ${
                  tab === 'Explore' ? 'text-[#00ffcc] bg-white/5' : 'text-gray-400 hover:text-white'
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
              className="w-full text-left px-3 py-2.5 rounded-md text-[11px] font-black tracking-wider uppercase text-gray-400 hover:text-white transition-all cursor-pointer"
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

      {/* 💻 MAIN EXPLORE WORKSPACE */}
      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto w-full max-w-7xl mx-auto">
        
        {/* HEADER BAR */}
        <header className="w-full flex justify-between items-center border-b border-white/5 pb-4">
          <div className="text-xs text-gray-400 font-mono tracking-wider">Server Pipeline: Status Online</div>
          <button className="bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-black tracking-widest uppercase rounded-sm hover:bg-white/10 transition-all">Log Out</button>
        </header>

        {/* HERO BANNER SECTION */}
        <section className="w-full bg-[#1b1924] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-xl">
          <div className="flex flex-col gap-4 max-w-xl z-10">
            <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Scene Library</span>
            <h2 className="text-3xl font-black tracking-wide text-white uppercase">STEP INTO ANY STORY</h2>
            <p className="text-gray-400 text-xs font-serif leading-relaxed italic max-w-md">
              Browse cinematic scenes, pick your role, and cast your avatar into the spotlight. Or dream up something entirely new with the AI Scene Generator.
            </p>
            <div className="flex gap-3 mt-2">
              <button className="bg-[#9d4edd] text-white font-black px-4 py-2.5 text-[10px] tracking-widest uppercase rounded-md shadow-md">Create New Scene</button>
              <button className="bg-white/5 border border-white/10 text-gray-300 font-black px-4 py-2.5 text-[10px] tracking-widest uppercase rounded-md">Upload Scene</button>
            </div>
          </div>
          {/* Cinema Picture House Visual Graphic box */}
          <div className="w-[280px] aspect-[16/10] bg-neutral-900 border border-white/10 flex flex-col justify-center items-center text-center p-4 relative shrink-0 overflow-hidden shadow-2xl rounded-md">
            <div className="absolute inset-0 bg-yellow-600/10 border border-yellow-500/30 flex flex-col justify-center items-center font-mono">
              <span className="text-yellow-500 text-xs font-black tracking-widest">CINEMA</span>
              <span className="text-red-500 text-[10px] tracking-wide mt-1">CENTRAL CINEMA</span>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER LINE CARD CONTAINER */}
        <section className="w-full bg-[#0c0b11] border border-white/5 p-4 rounded-xl flex justify-between items-center font-sans">
          <div className="flex flex-col gap-1 w-full max-w-xs">
            <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Filter by Category</label>
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="bg-[#14131a] border border-white/10 text-xs text-white px-3 py-2 rounded-md outline-none font-bold">
              {['All Categories', 'Action Movie', 'AI Original', 'Musical/Dance', 'Fashion Show', 'News Broadcast', 'TV Drama'].map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <span className="text-gray-500 text-[10px] tracking-wide hidden sm:block">Showing scenes ready for casting</span>
        </section>

        {/* AVAILABLE SCENES GRID MATRIX CARD STACKS */}
        <section className="w-full flex flex-col gap-4">
          <h3 className="text-white font-black text-xs tracking-widest uppercase border-b border-white/5 pb-2">AVAILABLE SCENES</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SCENES_DATA.map((scene) => (
              <div key={scene.id} className="bg-[#0c0b11] border border-white/5 p-5 rounded-lg flex flex-col justify-between gap-4 group hover:border-white/15 transition-all">
                <div className="flex flex-col gap-3">
                  {/* Category Badges Row Layout */}
                  <div className="flex gap-1.5 items-center">
                    <span className={`${scene.color} text-white font-black text-[8px] tracking-widest px-2 py-0.5 uppercase rounded-sm`}>{scene.tag}</span>
                    <span className="bg-[#ffb703] text-black font-black text-[8px] tracking-widest px-2 py-0.5 uppercase rounded-sm">👑 Merch</span>
                  </div>
                  
                  <h4 className="text-white font-black text-xs tracking-wide uppercase leading-tight min-h-[32px] group-hover:text-[#00ffcc] transition-colors">{scene.title}</h4>
                  <p className="text-gray-400 text-[11px] font-serif leading-relaxed italic line-clamp-3">{scene.desc}</p>
                  
{/* Statistical views track info badges row layout */}👥 {scene.roles}👁️ {scene.views}{/* Lower Cast Controls Array Row Layout */}Cast Into Scene⚙️🗑️))});}