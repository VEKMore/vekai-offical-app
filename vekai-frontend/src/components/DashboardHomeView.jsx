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
  { title: 'VELVET RUNWAY: SEASON ZERO', tag: 'Fashion Show', image: 'https://unsplash.com' }
];

const FEED_POSTS = [
  { id: 'fp1', author: 'testuser@example.com', text: 'Just launched my rogue variant run in the Shadowstrike scene grid! The landmark orientation matches perfectly.', likes: '1.4K', comments: '24' },
  { id: 'fp2', author: 'alpha_creator_99', text: 'The apparel merch drop tied to the Neon Stage scene is super high-fidelity. Screen-to-cart workflow is incredibly smooth. 🔥', likes: '982', comments: '13' }
];

export default function DashboardHomeView({ onNavigate }) {
  return (
    <div className="w-full min-h-screen bg-[#0e0e12] text-white font-sans flex flex-col antialiased select-none">
      <header className="w-full h-16 bg-[#070709] border-b border-white/5 px-6 flex justify-between items-center shrink-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-[#00ffcc] flex items-center justify-center text-black font-black text-[10px]">R</div>
            <span className="font-sans font-black text-xs tracking-[0.2em] text-gray-500">ROLEVERSE</span>
          </div>
          <nav className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Home</button>
            <button onClick={() => onNavigate('explore')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Explore</button>
            <button onClick={() => onNavigate('community')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Community</button>
            <button onClick={() => onNavigate('store')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Store</button>
          </nav>
        </div>
        <button className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider bg-transparent border-0 outline-none">Log Out</button>
      </header>

      <div className="w-full flex flex-1 overflow-hidden">
        <aside className="w-60 bg-[#070709] border-r border-white/5 p-6 flex flex-col justify-between shrink-0 hidden md:flex">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-black text-white truncate">testuser@example.com</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Creator</span>
            </div>

            <nav className="flex flex-col gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mt-4">
              <button className="text-left text-[#00ffcc] transition-colors cursor-pointer bg-transparent border-0 outline-none">✔ My Feed</button>
              <button onClick={() => onNavigate('explore')} className="text-left hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">📋 Explore Scenes</button>
              <button onClick={() => onNavigate('community')} className="text-left hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">📍 Active Campaigns</button>
              <button onClick={() => onNavigate('store')} className="text-left hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Merchandise Store</button>
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-6 lg:p-8 overflow-y-auto flex flex-col gap-8 w-full max-w-7xl mx-auto">
          <section className="w-full bg-[#15141b] border border-white/5 p-6 rounded-xl">
            <h2 className="text-3xl font-black text-white uppercase tracking-wide">BECOME ANYONE. STAR IN EVERYTHING.</h2>
            <p className="text-gray-400 text-xs font-serif italic mt-2 leading-relaxed">
              Swap features instantly into high-fidelity cinematic scenes. Vote in active campaigns and customize shoppable look profiles.
            </p>
          </section>

          <section className="w-full flex flex-col gap-3 bg-[#070709] border border-white/5 p-5 rounded-xl shadow-xl">
            <div className="w-full flex justify-between items-center border-b border-white/5 pb-2">
              <h3 className="text-white font-black text-xs tracking-widest uppercase">LIVE LEADERBOARD CAMPAIGNS</h3>
              <span className="text-[#00ffcc] font-mono text-[10px] font-bold">ACTIVE TRACKING</span>
            </div>
            <div className="flex flex-col gap-2 font-mono text-xs text-gray-300">
              {LEADERBOARD.map((item, idx) => (
                <div key={idx} className="w-full bg-white/[0.01] border border-white/5 px-4 py-3 rounded flex justify-between items-center">
                  <span className="font-bold">{item.rank} . {item.user}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-white font-black">{item.pv} PV</span>
                    <span className="text-[#00ffcc] font-bold">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full flex flex-col gap-3">
            <h3 className="text-white font-black text-xs tracking-widest uppercase border-b border-white/5 pb-2">OFFICIAL COMMUNITY CUTS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OFFICIAL_CUTS.map((cut) => (
                <div key={cut.id} className="bg-[#070709] border border-white/5 p-4 rounded-xl flex flex-col gap-2">
                  <div className="w-full aspect-[21/9] bg-[#14131a] rounded-lg overflow-hidden border border-white/5">
                    <img src={cut.image} alt={cut.title} className="w-full h-full object-cover opacity-70" />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <h4 className="text-white font-black text-[11px] uppercase truncate">{cut.title}</h4>
                    <span className="text-[#ffb703] font-black text-[9px] uppercase">👑 Winner</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full flex flex-col gap-4">
            <h3 className="text-white font-black text-xs tracking-widest uppercase border-b border-white/5 pb-2">FEATURED SCENES</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {FEATURED_SCENES.map((scene, idx) => (
                <div key={idx} className="bg-[#070709] border border-white/5 p-4 rounded-lg flex flex-col gap-2">
                  <div className="w-full aspect-[4/3] bg-[#14131a] rounded-sm overflow-hidden border border-white/5">
                    <img src={scene.image} alt={scene.title} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <span className="text-gray-500 text-[8px] font-mono uppercase tracking-wider block mt-1">{scene.tag}</span>
                  <h4 className="text-white font-black text-[10px] uppercase truncate">{scene.title}</h4>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full flex flex-col gap-4">
            <h3 className="text-white font-black text-xs tracking-widest uppercase border-b border-white/5 pb-2">CREATOR FEED</h3>
            <div className="flex flex-col gap-4">
              {FEED_POSTS.map((post) => (
                <div key={post.id} className="bg-[#070709] border border-white/5 p-5 rounded-xl flex flex-col gap-3">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-white font-black font-mono">👤 {post.author}</span>
                  </div>
                  <p className="text-gray-300 text-xs italic font-serif pl-4">"{post.text}"</p>
                  <div className="flex gap-4 text-[10px] font-mono text-gray-500 pl-4 border-t border-white/5 pt-2">
                    <span>❤️ {post.likes} Likes</span>
                    <span>💬 {post.comments} Comments</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}