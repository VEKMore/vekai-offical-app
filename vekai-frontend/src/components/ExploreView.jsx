import React, { useState } from 'react';

const SCENES_DATA = [
  { id: 's1', tag: 'Action Movie', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', desc: 'A high-octane action movie scene set in a dystopian city, featuring explosive stunts and hero-villain face-offs.', roles: '2 roles', views: '96400 views', color: 'bg-red-600/20 text-red-400 border-red-500/30' },
  { id: 's2', tag: 'AI Original', title: 'ORIGEN: AI DREAMSCAPE', desc: 'A fully AI-original high-concept dreamscape with surreal visuals and narrative arcs.', roles: '0 roles', views: '11500 views', color: 'bg-purple-600/20 text-purple-400 border-purple-500/30' },
  { id: 's3', tag: 'Musical/Dance', title: 'GROOVE ODYSSEY: NEON STAGE', desc: 'A vibrant musical dance scene submitted by a community creator, bursting with neon lights and rhythm.', roles: '1 role', views: '51200 views', color: 'bg-pink-600/20 text-pink-400 border-pink-500/30' },
  { id: 's4', tag: 'Fashion Show', title: 'VELVET RUNWAY: SEASON ZERO', desc: 'A glamorous fashion show runway scene submitted by a community creator.', roles: '0 roles', views: '46700 views', color: 'bg-fuchsia-600/20 text-fuchsia-400 border-fuchsia-500/30' },
  { id: 's5', tag: 'News Broadcast', title: 'BREAKING NOW: STUDIO 7 LIVE', desc: 'A live-style news broadcast scene with an AI anchor delivering breaking news.', roles: '1 role', views: '51000 views', color: 'bg-blue-600/20 text-blue-400 border-blue-500/30' },
  { id: 's6', tag: 'TV Drama', title: 'WHISPERS IN THE WARD', desc: 'An emotional TV drama unfolding in a hospital ward, with complex character dynamics.', roles: '2 roles', views: '43500 views', color: 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30' },
  { id: 's7', tag: 'Sports Event', title: 'CHAMPIONSHIP CLASH: FINAL QUARTER', desc: 'An intense sports event scene capturing the final moments of a championship game.', roles: '0 roles', views: '16200 views', color: 'bg-orange-600/20 text-orange-400 border-orange-500/30' },
  { id: 's8', tag: 'Virtual Comic', title: 'PANEL 42: THE AWAKENING', desc: 'A virtual comic-style scene exploring a superhero origin story, AI-generated.', roles: '0 roles', views: '39800 views', color: 'bg-teal-600/20 text-teal-400 border-teal-500/30' },
  { id: 's9', tag: 'Circus/Performance Art', title: 'MIDNIGHT CARNIVAL SPECTACULAR', desc: 'A whimsical circus and performance art scene full of acrobatics and color.', roles: '1 role', views: '12900 views', color: 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30' }
];

export default function ExploreView({ onNavigate }) {
  const [categoryFilter, setCategoryFilter] = useState('All Categories');

  return (
    <div className="w-full min-h-screen bg-[#0e0e12] text-white font-sans flex flex-col antialiased select-none">
      
      {/* 🧭 TOP ACCENT HORIZONTAL HUB BAR */}
      <header className="w-full h-16 bg-[#070709] border-b border-white/5 px-8 flex justify-between items-center shrink-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-[#00ffcc] flex items-center justify-center text-black font-black text-[10px]">R</div>
            <span className="font-sans font-black text-xs tracking-[0.2em] text-gray-500">ROLEVERSE</span>
          </div>
          <nav className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <button onClick={() => onNavigate('profile')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <button onClick={() => onNavigate('explore')} className="text-white transition-colors cursor-pointer">Explore</button>
            <button onClick={() => onNavigate('community')} className="hover:text-white transition-colors cursor-pointer">Community</button>
            <button className="hover:text-white transition-colors cursor-pointer">Campaigns</button>
            <button onClick={() => onNavigate('store')} className="hover:text-white transition-colors cursor-pointer">Store</button>
          </nav>
        </div>
        <button className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider">Log Out</button>
      </header>

      {/* LOWER SPLIT FRAME LAYOUT CONTROLLER */}
      <div className="w-full flex flex-1 overflow-hidden">
        
        {/* 🧭 LEFT SIDE NAVIGATION BAR COLUMN */}
        <aside className="w-60 bg-[#070709] border-r border-white/5 p-6 flex flex-col justify-between shrink-0 hidden md:flex">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-black text-white truncate">testuser@example.com</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Creator</span>
            </div>

            <nav className="flex flex-col gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mt-4">
              <button onClick={() => onNavigate('avatar_builder')} className="text-left hover:text-white transition-colors cursor-pointer">My Avatar</button>
              <button className="text-left hover:text-white transition-colors cursor-pointer">📋 My Scenes</button>
              <button className="text-left text-[#00ffcc] transition-colors cursor-pointer">✔ My Feed</button>
              <button className="text-left hover:text-white transition-colors cursor-pointer">📍 Active Campaigns</button>
              <button onClick={() => onNavigate('store')} className="text-left hover:text-white transition-colors cursor-pointer">Merchandise Store</button>
            </nav>

            {/* STEAL THE SPOTLIGHT PANEL CARD BOX */}
            <div className="w-full bg-gradient-to-br from-purple-900/20 via-black/40 to-black border border-purple-500/20 p-4 rounded-xl mt-4 flex flex-col gap-2">
              <h4 className="text-[10px] font-black tracking-widest text-white uppercase">STEAL THE SPOTLIGHT</h4>
              <p className="text-gray-400 text-[10px] leading-relaxed font-medium">Cast yourself into a new scene and climb today's leaderboard.</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-[9px] font-black py-2 rounded-md uppercase tracking-widest transition-colors mt-1">Cast a Scene</button>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 text-[10px] font-bold text-gray-600 uppercase tracking-wider">
            <button className="text-left hover:text-white">Community Hub</button>
            <button className="text-left hover:text-white">Account Settings</button>
          </div>
        </aside>

        {/* 💻 MAIN CENTRAL SCROLLABLE PREVIEW REGION CONTAINER */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto flex flex-col gap-8 w-full max-w-7xl mx-auto">
          
          {/* HERO BANNER SECTION */}
          <section className="w-full bg-[#15141b] border border-white/5 p-6 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
            <div className="flex flex-col gap-3 max-w-xl z-10">
              <span className="text-[10px] text-purple-400 font-black uppercase tracking-widest">Scene Library</span>
              <h2 className="text-3xl font-black tracking-wide text-white uppercase">STEP INTO ANY STORY</h2>
              <p className="text-gray-400 text-xs leading-relaxed max-w-md">Browse cinematic scenes, pick your role, and cast your avatar into the spotlight. Or dream up something entirely new with the AI Scene Generator.</p>
              <div className="flex gap-3 mt-2">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-black px-4 py-2.5 text-[10px] tracking-widest uppercase rounded-sm shadow-md transition-colors">Create New Scene</button>
                <button className="bg-white/5 border border-white/10 text-gray-300 font-black px-4 py-2.5 text-[10px] tracking-widest uppercase rounded-sm hover:bg-white/10 transition-colors">Upload Scene</button>
              </div>
            </div>
            {/* The Cinema Central Frame Box Graphic Graphic element */}
            <div className="w-[300px] aspect-[16/10] bg-[#070709] border border-white/10 flex flex-col justify-center items-center text-center p-4 rounded-lg shrink-0 shadow-2xl relative">
              <div className="absolute inset-0 bg-yellow-600/[0.03] border border-yellow-500/20 m-2 rounded flex flex-col justify-center items-center font-mono">
                <span className="text-yellow-500 text-[10px] font-black tracking-[0.3em] uppercase block">PICTURE HOUSE</span>
                <span className="text-red-500 text-xs font-black tracking-[0.1em] mt-1.5 uppercase block">CENTRAL CINEMA</span>
              </div>
            </div>
          </section>

          {/* CATEGORY CONTROLS DROPDOWN STRIP ROW */}
          <section className="w-full bg-[#070709] border border-white/5 p-4 rounded-xl flex justify-between items-center">
            <div className="flex flex-col gap-1 w-full max-w-xs">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Filter by Category</label>
              <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="bg-[#0e0e12] border border-white/10 text-xs text-white px-3 py-2.5 rounded-md outline-none font-bold focus:border-purple-500">
                {['All Categories', 'Action Movie', 'AI Original', 'Musical/Dance', 'Fashion Show', 'News Broadcast', 'TV Drama'].map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <span className="text-gray-500 text-[10px] font-mono tracking-wide hidden sm:block">Showing scenes ready for casting</span>
          </section>

          {/* AVAILABLE SCENES GRID MATRIX CARD CAROUSEL */}
);}