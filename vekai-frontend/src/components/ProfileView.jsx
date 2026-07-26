import React from 'react';

const FEED_POSTS = [
  { id: 'f1', title: 'Just a quiet drama moment with Dr. Solis. More to come.', views: '281', shares: '4' },
  { id: 'f2', title: 'Dropped my hero arc in Shadowstrike - this is the one 🔥 #NeonFrontier', views: '1,432', shares: '24' },
  { id: 'f3', title: 'Vibing with the Maestro in Groove Odyssey ✨ Rhythm hits different when you\'re in the scene.', views: '982', shares: '13' }
];

const MY_SCENES = [
  { id: 's1', name: 'SHADOWSTRIKE: CITY UNDER SIEGE', genre: 'Drama', status: '72,000 views' },
  { id: 's2', name: 'GROOVE ODYSSEY: NEON STAGE', genre: 'Musical/Dance', status: '23,401 views' },
  { id: 's3', name: 'WHISPERS IN THE WARD', genre: 'Drama', status: '430 views' }
];

const MERCHANDISE = [
  { id: 'm1', name: 'NEON FRONTIER HERO TEE', category: 'Apparel', price: '$34.99' },
  { id: 'm2', name: 'SHADOWSTRIKE POSTER SERIES VOL.1', category: 'Poster/Print', price: '$19.99' },
  { id: 'm3', name: 'GROOVE ODYSSEY DIGITAL COLLECTIBLE TOKEN', category: 'Digital Collectible', price: '$9.99' },
  { id: 'm4', name: 'VELVET RUNWAY ENAMEL PIN SET', category: 'Accessory', price: '$14.99' },
  { id: 'm5', name: 'GROOVE ODYSSEY CANVAS PRINT', category: 'Home Decor', price: '$44.99' },
  { id: 'm6', name: 'URBAN LEGEND UNISEX HOODIE', category: 'Apparel', price: '$54.99' },
  { id: 'm7', name: 'RHYTHM STAGE EXCLUSIVE PRINT', category: 'Poster/Print', price: '$24.99' }
];

const SUBMISSIONS = [
  { id: 'sub1', title: 'GROOVE ODYSSEY: NEON STAGE', tag: 'Musical/Dance' },
  { id: 'sub2', title: 'VELVET RUNWAY: SEASON ZERO', tag: 'Fashion Show' }
];

export default function ProfileView({ onNavigate }) {
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
                  if (tab === 'Home') onNavigate('profile');
                }}
                className={`w-full text-left px-3 py-2.5 rounded-md text-[11px] font-black tracking-wider uppercase transition-all cursor-pointer ${
                  tab === 'Home' ? 'text-[#00ffcc] bg-white/5' : 'text-gray-400 hover:text-white'
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

      {/* 💻 MAIN PROFILE WORKSPACE */}
      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto w-full max-w-6xl mx-auto">
        
        {/* PROFILE HEADER CARD */}
        <section className="w-full bg-[#1b1924] border border-white/10 rounded-xl p-6 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center border-2 border-[#00ffcc] text-2xl shadow-xl shadow-[#00ffcc]/5">🎭</div>
            <div className="flex flex-col">
              <h2 className="text-xl font-black tracking-wide text-white uppercase">TESTUSER@EXAMPLE.COM</h2>
              <span className="text-xs text-gray-400 font-mono mt-0.5">...edit me. · <span className="text-[#00ffcc]">1 following</span></span>
            </div>
          </div>
          
          <div className="w-full bg-black/40 border border-white/5 rounded-lg p-4 flex justify-between items-center mt-2">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">My Boundless Avatar</span>
              <span className="text-xs text-gray-300 font-semibold font-mono">Non-binary · Caucasian · Sidekick Artist</span>
            </div>
            <button onClick={() => onNavigate('avatar_builder')} className="bg-[#9d4edd] hover:bg-[#7b2cbf] text-white text-[10px] font-black px-4 py-2 rounded-md uppercase tracking-wider transition-colors">Edit Avatar</button>
          </div>
        </section>

        {/* MY FEED SECTION */}
        <section className="w-full flex flex-col gap-3">
          <div className="w-full flex justify-between items-center border-b border-white/5 pb-2">
            <h3 className="text-white font-black text-xs tracking-widest uppercase">MY FEED</h3>
            <span className="text-gray-500 text-[9px] font-mono uppercase">Your generated video experiences</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEED_POSTS.map((post) => (
              <div key={post.id} className="bg-[#0c0b11] border border-white/5 p-4 rounded-xl flex flex-col justify-between gap-4">
                <div className="w-full aspect-[16/10] bg-neutral-900 border border-white/5 rounded-md flex items-center justify-center text-[10px] text-white/5 font-mono uppercase">[ Video Feed Clip ]</div>
                <p className="text-gray-300 text-[11px] leading-relaxed line-clamp-2">{post.title}</p>
                <div className="flex items-center gap-3 text-[10px] text-gray-500 font-mono">
                  <span>💜 {post.views}</span>
                  <span>🔗 {post.shares}</span>
                </div>
                <div className="flex gap-1.5 border-t border-white/5 pt-3">
                  <button className="bg-yellow-600 text-black text-[9px] font-black px-2.5 py-1.5 rounded-sm uppercase">Share</button>
                  <button className="bg-white/5 text-gray-400 text-[9px] font-black px-2.5 py-1.5 rounded-sm uppercase">Edit</button>
                  <button className="bg-red-600/20 text-red-500 text-[9px] font-black px-2.5 py-1.5 rounded-sm uppercase">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MY SCENES SECTION */}
        <section className="w-full flex flex-col gap-3">
          <h3 className="text-white font-black text-xs tracking-widest uppercase border-b border-white/5 pb-2">MY SCENES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MY_SCENES.map((scene) => (
              <div key={scene.id} className="bg-[#0c0b11] border border-white/5 p-4 rounded-xl flex flex-col gap-2">
                <div className="w-full aspect-[16/10] bg-neutral-900 border border-white/5 rounded-md flex items-center justify-center text-[9px] text-white/5 font-mono uppercase">[ Scene Shot ]</div>
                <h4 className="text-white font-black text-[11px] tracking-wide uppercase mt-1 truncate">{scene.name}</h4>
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                  <span>{scene.genre}</span>
                  <span>{scene.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CAMPAIGN HISTORY SECTION */}
        <section className="w-full flex flex-col gap-2">
          <h3 className="text-white font-black text-xs tracking-widest uppercase border-b border-white/5 pb-2">CAMPAIGN HISTORY</h3>
          <div className="w-full bg-white/[0.01] border border-dashed border-white/10 p-5 text-center text-gray-500 text-xs italic font-serif">
            🔒 No past event tokens logged.
          </div>
        </section>

        {/* MY MERCHANDISE SECTION */}
        <section className="w-full flex flex-col gap-3">
          <h3 className="text-white font-black text-xs tracking-widest uppercase border-b border-white/5 pb-2">MY MERCHANDISE</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {MERCHANDISE.map((merch) => (
              <div key={merch.id} className="bg-[#0c0b11] border border-white/5 p-3 rounded-lg flex flex-col gap-2 justify-between group">
[ {merch.category} ]{merch.category}{merch.name}{merch.price}))}{/* MY COMMUNITY SUBMISSIONS SECTION */});}