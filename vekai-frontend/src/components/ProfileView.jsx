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
  { id: 'm3', name: 'GROOVE ODYSSEY DIGITAL COLLECTIBLE TOKEN', category: 'Digital Collectible', price: '$9.99' }
];

export default function ProfileView({ onNavigate }) {
  return (
    <div className="w-full min-h-screen bg-[#111217] text-white font-sans flex antialiased select-none">
      
      {/* 🧭 LEFT SIDE NAVIGATION BAR */}
      <aside className="w-[240px] bg-[#0c0b11] border-r border-white/5 p-5 flex flex-col justify-between shrink-0 min-h-screen">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#9d4edd] to-[#00ffcc] flex items-center justify-center text-black font-black text-xs">R</div>
            <span className="font-black text-xs tracking-[0.2em] text-white">ROLEVERSE</span>
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
        </div>
      </aside>

      {/* 💻 MAIN PROFILE WORKSPACE */}
      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto w-full max-w-6xl mx-auto">
        
        {/* PROFILE HEADER CARD */}
        <section className="w-full bg-[#1b1924] border border-white/10 rounded-xl p-6 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center border-2 border-[#00ffcc] text-2xl">🎭</div>
            <div className="flex flex-col">
              <h2 className="text-xl font-black tracking-wide text-white uppercase">TESTUSER@EXAMPLE.COM</h2>
              <span className="text-xs text-gray-400 font-mono mt-0.5">Creator Portfolio</span>
            </div>
          </div>
        </section>

        {/* MY FEED SECTION */}
        <section className="w-full flex flex-col gap-3">
          <h3 className="text-white font-black text-xs tracking-widest uppercase border-b border-white/5 pb-2">MY FEED</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEED_POSTS.map((post) => (
              <div key={post.id} className="bg-[#0c0b11] border border-white/5 p-4 rounded-xl flex flex-col gap-2">
                <div className="w-full aspect-[16/10] bg-neutral-900 flex items-center justify-center text-[10px] text-white/5 font-mono uppercase">[ Clip ]</div>
                <p className="text-gray-300 text-[11px] leading-relaxed line-clamp-2 mt-2">{post.title}</p>
                <div className="flex items-center gap-3 text-[10px] text-gray-500 font-mono mt-1">
                  <span>💜 {post.views} Views</span>
                  <span>🔗 {post.shares} Shares</span>
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
              <div key={scene.id} className="bg-[#0c0b11] border border-white/5 p-4 rounded-xl flex flex-col gap-1">
                <h4 className="text-white font-black text-[11px] tracking-wide uppercase truncate">{scene.name}</h4>
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 mt-1">
                  <span>{scene.genre}</span>
                  <span>{scene.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MY MERCHANDISE SECTION */}
        <section className="w-full flex flex-col gap-3">
          <h3 className="text-white font-black text-xs tracking-widest uppercase border-b border-white/5 pb-2">MY MERCHANDISE</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {MERCHANDISE.map((merch) => (
              <div key={merch.id} className="bg-[#0c0b11] border border-white/5 p-4 rounded-lg flex flex-col gap-1">
                <span className="text-gray-500 text-[8px] font-mono tracking-widest uppercase">{merch.category}</span>
                <h4 className="text-white font-black text-xs tracking-wide truncate uppercase">{merch.name}</h4>
                <span className="text-gray-400 font-mono text-xs font-bold mt-1 block">{merch.price}</span>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
