import React, { useState } from 'react';

// ==========================================================================
// 📊 HIGH FIDELITY DESIGN REGISTRY (PIXEL PERFECT SPECIFICATION)
// ==========================================================================
const LEADERBOARD_ITEMS = [
  { rank: '1', name: '@Alpha_Valkyrie', metrics: '96.4K PV', status: '+15.2%' },
  { rank: '2', name: '@Cyber_Ronin_X', metrics: '84.1K PV', status: '+8.4%' },
  { rank: '3', name: '@MetaCreator_Alpha', metrics: '43.4K PV', status: '+2.1%' }
];

const CROWN_WINNERS = [
  { id: 'cw1', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', creator: '@Alpha_Valkyrie', img: 'https://unsplash.com' },
  { id: 'cw2', title: 'GROOVE ODYSSEY: NEON STAGE', creator: '@Cyber_Ronin_X', img: 'https://unsplash.com' }
];

const GENERAL_SCENES = [
  { id: 'gs1', tag: 'Action Movie', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', desc: 'A high-octane action movie scene set in a dystopian city, featuring explosive stunts and hero-villain face-offs.', roles: '2 roles', views: '96.4K views', img: 'https://unsplash.com', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
  { id: 'gs2', tag: 'AI Original', title: 'ORIGEN: AI DREAMSCAPE', desc: 'A fully AI-original high-concept dreamscape with surreal visuals and narrative arcs.', roles: '0 roles', views: '11.5K views', img: 'https://unsplash.com', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  { id: 'gs3', tag: 'Musical/Dance', title: 'GROOVE ODYSSEY: NEON STAGE', desc: 'A vibrant musical dance scene bursting with neon lights and rhythm.', roles: '1 role', views: '51.2K views', img: 'https://unsplash.com', color: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
  { id: 'gs4', tag: 'Fashion Show', title: 'VELVET RUNWAY: SEASON ZERO', desc: 'A glamorous fashion show runway scene submitted by a community creator.', roles: '0 roles', views: '46.7K views', img: 'https://unsplash.com', color: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20' },
  { id: 'gs5', tag: 'News Broadcast', title: 'BREAKING NOW: STUDIO 7 LIVE', desc: 'A live-style news broadcast scene with an AI anchor delivering breaking news.', roles: '1 role', views: '51.0K views', img: 'https://unsplash.com', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  { id: 'gs6', tag: 'TV Drama', title: 'WHISPERS IN THE WARD', desc: 'An emotional TV drama unfolding in a hospital ward, with complex character dynamics.', roles: '2 roles', views: '43.5K views', img: 'https://unsplash.com', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
  { id: 'gs7', tag: 'Sports Event', title: 'CHAMPIONSHIP CLASH: FINAL QUARTER', desc: 'An intense sports event scene capturing the final moments of a championship game.', roles: '0 roles', views: '16.2K views', img: 'https://unsplash.com', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  { id: 'gs8', tag: 'Virtual Comic', title: 'PANEL 42: THE AWAKENING', desc: 'A virtual comic-style scene exploring a superhero origin story, AI-generated.', roles: '0 roles', views: '39.8K views', img: 'https://unsplash.com', color: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
  { id: 'gs9', tag: 'Circus Art', title: 'MIDNIGHT CARNIVAL SPECTACULAR', desc: 'A whimsical circus and performance art scene full of acrobatics and color.', roles: '1 role', views: '12.9K views', img: 'https://unsplash.com', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' }
];

const FEED_STREAMS = [
  { id: 'f1', user: 'testuser@example.com', avatar: '🎭', timestamp: '2 hours ago', text: 'Just completed my first face-swap mapping inside the Shadowstrike block grid. The rendering pipelines processed the alignment maps perfectly without manual warp adjustments.', likes: '1,432', comments: '24' },
  { id: 'f2', id_tag: 'alpha_creator_99', avatar: '🦾', timestamp: '5 hours ago', text: 'The capsule merch integrations tied to the Neon Stage are fully responsive. Zero-lag screen-to-bag operations are solid.', likes: '982', comments: '13' },
  { id: 'f3', id_tag: 'valkyrie_mesh', avatar: '⚡', timestamp: '1 day ago', text: 'Casting deep physics meshes onto the Origen dreamscape baseline. Traditional costume details scale perfectly with no polygon intersection crashes.', likes: '542', comments: '8' }
];

export default function PerfectDesignEngine() {
  const [activeTab, setActiveTab] = useState('home'); 
  const [searchFilter, setSearchFilter] = useState('');

  const displayedScenes = GENERAL_SCENES.filter(scene => 
    scene.title.toLowerCase().includes(searchFilter.toLowerCase()) || 
    scene.tag.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#0e0e12] text-[#f5f5f7] font-sans flex flex-col antialiased select-none">
      
      {/* 🌐 HORIZONTAL APEX APP HEAD TRACK BAR */}
      <header className="w-full h-16 bg-[#070709] border-b border-white/5 px-8 flex justify-between items-center shrink-0 z-50 fixed top-0 left-0 right-0">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-[#00ffcc] flex items-center justify-center text-black font-black text-[10px]">R</div>
            <span className="font-sans font-black text-xs tracking-[0.25em] text-white">ROLEVERSE</span>
          </div>
          <nav className="flex items-center gap-8 text-[11px] font-black tracking-widest uppercase text-gray-400">
            <button onClick={() => setActiveTab('home')} className={`transition-colors cursor-pointer outline-none bg-transparent border-0 ${activeTab === 'home' ? 'text-white border-b-2 border-purple-500 pb-5 pt-5 mt-0.5' : 'hover:text-white'}`}>Home</button>
            <button onClick={() => setActiveTab('explore')} className={`transition-colors cursor-pointer outline-none bg-transparent border-0 ${activeTab === 'explore' ? 'text-white border-b-2 border-purple-500 pb-5 pt-5 mt-0.5' : 'hover:text-white'}`}>Explore</button>
            <button onClick={() => setActiveTab('community')} className={`transition-colors cursor-pointer outline-none bg-transparent border-0 ${activeTab === 'community' ? 'text-white border-b-2 border-purple-500 pb-5 pt-5 mt-0.5' : 'hover:text-white'}`}>Community</button>
            <button className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none opacity-40">Campaigns</button>
            <button className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none opacity-40">Store</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-gray-500 tracking-wider hidden sm:block">SYSTEM NODE SECURE // ONLINE</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]" />
        </div>
      </header>

      {/* BASE WRAPPER FOR UNDER-HEADER LAYOUT SPLIT CONTAINER */}
      <div className="w-full flex flex-1 pt-16 overflow-hidden">
        
        {/* 🧭 LEFT SIDE NAVIGATION COLUMN DECK */}
        <aside className="w-64 bg-[#070709] border-r border-white/5 p-6 flex flex-col justify-between shrink-0 hidden md:flex min-h-[calc(100vh-64px)]">
          <div className="flex flex-col gap-6">
            <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs">👤</div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[11px] text-white font-black truncate">testuser@example.com</span>
                <span className="text-[9px] text-gray-500 font-black tracking-wider uppercase mt-0.5">Creator Workspace</span>
              </div>
            </div>

            <div className="text-[9px] text-gray-500 font-black tracking-widest uppercase px-1">Navigation Hub</div>
            <nav className="flex flex-col gap-1 text-xs font-black text-gray-400 uppercase tracking-wider">
              <button onClick={() => setActiveTab('home')} className={`text-left px-3 py-2.5 rounded-md transition-all cursor-pointer border-0 outline-none ${activeTab === 'home' ? 'bg-[#9d4edd]/10 text-[#00ffcc] border-l-2 border-[#00ffcc]' : 'bg-transparent hover:bg-white/5'}`}>▪ My Feed Dashboard</button>
              <button onClick={() => setActiveTab('explore')} className={`text-left px-3 py-2.5 rounded-md transition-all cursor-pointer border-0 outline-none ${activeTab === 'explore' ? 'bg-[#9d4edd]/10 text-[#00ffcc] border-l-2 border-[#00ffcc]' : 'bg-transparent hover:bg-white/5'}`}>▫ Explore Library</button>
              <button onClick={() => setActiveTab('community')} className={`text-left px-3 py-2.5 rounded-md transition-all cursor-pointer border-0 outline-none ${activeTab === 'community' ? 'bg-[#9d4edd]/10 text-[#00ffcc] border-l-2 border-[#00ffcc]' : 'bg-transparent hover:bg-white/5'}`}>▫ Stage Elections</button>
            </nav>
STEAL THE SPOTLIGHTCast your avatar features into premium cinematic scenes live.<button onClick={() => setActiveTab('explore')} className="bg-black/20 hover:bg-black/30 text-white text-[9px] font-black tracking-widest py-2 px-3 rounded-md uppercase transition-colors self-start border-0 outline-none mt-1 cursor-pointer">Cast SceneCommunity HubAccount Configuration{/* 💻 CENTRAL OPERATIONAL VIEWPORT LAYER */}{/* ============================================================== /}{/ VIEW MODE 1: CORE HOME INDEX WORKSPACE BOARD                  /}{/ ============================================================== /}{activeTab === 'home' && ({/ PRIMARY APP PROMOTION HERO BANNER ELEMENT */}{/* LIVE LEADERBOARD TRACK CAMPAIGN ARRAYS MODULES */}{/* LANDSCAPE MEDIA COMMUNITY ARENA ELECTIONS SLOT ROWS */}{/* 4-COLUMN ASYMMETRIC SCENE SHOWCASE PREVIEW SHEETS */}{/* NETWORK CREATOR FEEDS TIMELINE INTERACTION BLOCKS */})}{/* ============================================================== /}{/ VIEW MODE 2: EXPLICIT SCENE SELECTION MATRIX PACK GRID        /}{/ ============================================================== */}{activeTab === 'explore' && ({displayedScenes.map((scene) => (<span className={${scene.color} border font-black text-[8px] tracking-widest px-2 py-0.5 uppercase rounded-sm}>{scene.tag}👑 Merch Linked{scene.title}{scene.desc}👥 Configuration: {scene.roles}👁️ Telemetry: {scene.views}<button onClick={() => alert(Staging credentials loop for film payload context: ${scene.title})} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-2.5 rounded text-[10px] tracking-widest uppercase transition-colors border-0 outline-none cursor-pointer mt-1">Cast Avatar Into Scene))}{displayedScenes.length === 0 && (No active scene templates align with your text search criteria fields.)})}{/* ============================================================== /}{/ VIEW MODE 3: CROWD ARENA CROWN ELECTIONS                      /}{/ ============================================================== */}{activeTab === 'community' && (🔒 Staging arena queues are balanced for this election timeframe. Check active channel alerts for loop updates.);}
