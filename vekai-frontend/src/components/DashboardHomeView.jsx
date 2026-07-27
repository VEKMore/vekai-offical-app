import React from 'react';

const LEADERBOARD = [
  { rank: '🥇 1', user: '@Alpha_Valkyrie', pv: '96.4K', status: '+15%' },
  { rank: '🥈 2', user: '@Cyber_Ronin_X', pv: '84.1K', status: '+8%' },
  { rank: '🥉 3', user: '@MetaCreator_Alpha', pv: '43.4K', status: '+2%' }
];

const OFFICIAL_CUTS = [
  { id: 'oc1', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', image: 'https://unsplash.com' },
  { id: 'oc2', title: 'GROOVE ODYSSEY: NEON STAGE', image: 'https://unsplash.com' }
];

const FEATURED_SCENES = [
  { title: 'SHADOWSTRIKE: CITY UNDER SIEGE', tag: 'Action Movie', image: 'https://unsplash.com' },
  { title: 'ORIGEN: AI DREAMSCAPE', tag: 'AI Original', image: 'https://unsplash.com' },
  { title: 'GROOVE ODYSSEY: NEON STAGE', tag: 'Musical/Dance', image: 'https://unsplash.com' },
  { title: 'VELVET RUNWAY: SEASON ZERO', tag: 'Fashion Show', image: 'https://unsplash.com' },
  { title: 'BREAKING NOW: STUDIO 7 LIVE', tag: 'News Broadcast', image: 'https://unsplash.com' },
  { title: 'WHISPERS IN THE WARD', tag: 'TV Drama', image: 'https://unsplash.com' },
  { title: 'CHAMPIONSHIP CLASH: FINAL QUARTER', tag: 'Sports Event', image: 'https://unsplash.com' },
  { title: 'PANEL 42: THE AWAKENING', tag: 'Virtual Comic', image: 'https://unsplash.com' },
  { title: 'MIDNIGHT CARNIVAL SPECTACULAR', tag: 'Circus Art', image: 'https://unsplash.com' }
];

const FEED_POSTS = [
  { id: 'fp1', author: 'testuser@example.com', text: 'Just launched my rogue variant run in the Shadowstrike scene grid! The landmark orientation matches perfectly.', likes: '1.4K', comments: '24' },
  { id: 'fp2', author: 'alpha_creator_99', text: 'The apparel merch drop tied to the Neon Stage scene is super high-fidelity. Screen-to-cart workflow is incredibly smooth. 🔥', likes: '982', comments: '13' },
  { id: 'fp3', author: 'valkyrie_mesh', text: 'Testing out an older traditional silk hanbok costume overlay inside the Origen environment path. No physics clipping at all.', likes: '542', comments: '8' }
];

export default function DashboardHomeView({ onNavigate }) {
  return (
    <div className="w-full min-h-screen bg-[#0e0e12] text-white font-sans flex flex-col antialiased select-none">
      
      {/* 🌐 TOP APP HEADER NAVIGATION BAR */}
      <header className="w-full h-16 bg-[#070709] border-b border-white/5 px-6 flex justify-between items-center shrink-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-[#00ffcc] flex items-center justify-center text-black font-black text-[10px]">R</div>
            <span className="font-sans font-black text-xs tracking-[0.2em] text-gray-500">ROLEVERSE</span>
          </div>
          <nav className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <button onClick={() => onNavigate?.('profile')} className="text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Home</button>
            <button onClick={() => onNavigate?.('explore')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Explore</button>
            <button onClick={() => onNavigate?.('community')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Community</button>
            <button className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Campaigns</button>
            <button onClick={() => onNavigate?.('store')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Store</button>
          </nav>
        </div>
        <button className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider bg-transparent border-0 outline-none">Log Out</button>
      </header>

      {/* LOWER SPLIT LAYOUT ENVIRONMENT FRAME */}
      <div className="w-full flex flex-1 overflow-hidden">
        
        {/* 🧭 STATIC LEFT SIDEBAR PANEL */}
        <aside className="w-60 bg-[#070709] border-r border-white/5 p-6 flex flex-col justify-between shrink-0 hidden md:flex">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-black text-white truncate">testuser@example.com</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Creator</span>
            </div>

            <nav className="flex flex-col gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mt-4">
              <button onClick={() => onNavigate?.('avatar_builder')} className="text-left hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">My Avatar</button>
              <button className="text-left hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">📋 My Scenes</button>
              <button className="text-left text-[#00ffcc] transition-colors cursor-pointer bg-transparent border-0 outline-none">✔ My Feed</button>
              <button className="text-left hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">📍 Active Campaigns</button>
              <button onClick={() => onNavigate?.('store')} className="text-left hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Merchandise Store</button>
            </nav>

            {/* STEAL THE SPOTLIGHT DISCOVERY WIDGET */}
            <div className="w-full bg-[#a239ea] text-white p-5 rounded-lg mt-4 flex flex-col gap-2 shadow-lg">
              <h4 className="text-[11px] font-black tracking-widest uppercase">STEAL THE SPOTLIGHT</h4>
              <p className="text-white/80 text-[10px] leading-relaxed font-medium">Cast yourself into a new scene and climb today's leaderboard.</p>
              <button className="text-left text-white/90 hover:text-white text-[10px] font-black tracking-wider uppercase bg-black/20 px-3 py-1.5 rounded mt-1 transition-colors self-start">Cast a Scene</button>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 text-[10px] font-bold text-gray-600 uppercase tracking-wider">
            <button className="text-left hover:text-white">Community Hub</button>
            <button className="text-left hover:text-white">Account Settings</button>
          </div>
        </aside>

        {/* 💻 MAIN HUB SUB-PAGE CONTENT ROUTER REGION */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto flex flex-col gap-8 w-full max-w-7xl mx-auto">
          
          {/* HERO BANNER BLOCK */}
          <section className="w-full bg-[#15141b] border border-white/5 p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xl relative overflow-hidden">
            <div className="flex flex-col gap-2 z-10">
              <h2 className="text-3xl font-black tracking-wide text-white uppercase">BECOME ANYONE. STAR IN EVERYTHING.</h2>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xl font-serif italic">
                Swap your features instantly into high-fidelity cinematic scenes. Vote in active campaigns and customize shoppable look profiles.
              </p>
              <div className="flex gap-3 mt-2 font-sans">
                <button onClick={() => onNavigate?.('explore')} className="bg-[#a239ea] hover:bg-[#8b2fd1] text-white font-black px-4 py-2 rounded text-[10px] tracking-widest uppercase transition-colors">Explore Scenes</button>
                <button onClick={() => onNavigate?.('avatar_builder')} className="bg-white/5 border border-white/10 text-gray-300 font-black px-4 py-2 rounded text-[10px] tracking-widest uppercase transition-colors">Open Studio</button>
              </div>
            </div>
          </section>

          {/* LEADERBOARD ACCRUAL TRACKING PANELS */}
          <section className="w-full flex flex-col gap-3 bg-[#070709] border border-white/5 p-5 rounded-xl shadow-xl">
            <div className="w-full flex justify-between items-center border-b border-white/5 pb-2">
              <h3 className="text-white font-black text-xs tracking-widest uppercase">LIVE LEADERBOARD CAMPAIGNS</h3>
              <span className="text-[#00ffcc] font-mono text-[10px] uppercase font-bold tracking-widest">Active Stacking</span>
            </div>
            <div className="flex flex-col gap-2 font-mono text-xs text-gray-300">
              {LEADERBOARD.map((item, idx) => (
                <div key={idx} className="w-full bg-white/[0.01] border border-white/5 px-4 py-3 rounded flex justify-between items-center">
                  <span className="font-bold">{item.rank} . {item.user}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-white font-black">{item.pv} PV</span>
                    <span className="text-[#00ffcc] font-bold text-[11px]">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
