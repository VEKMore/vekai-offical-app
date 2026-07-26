import React, { useState } from 'react';

const MAGAZINE_SECTIONS = [
  { id: '1', title: 'The Cyberpunk Chronicles', genre: 'Sci-Fi', size: 'hero', image: 'https://fals.ai', desc: 'Step directly into neo-neon matrix pipelines where identities are completely decentralized.' },
  { id: '2', title: 'Monaco Speed Grid', genre: 'Racing', size: 'sub', image: 'https://fals.ai', desc: 'High-velocity F1 identity mapping frames.' },
  { id: '3', title: 'Seoul Neon Drop', genre: 'K-Pop', size: 'sub', image: 'https://fals.ai', desc: 'Vibrant performance-driven transformation filters.' }
];

const MERCHANDISE_ITEMS = [
  { id: 'm1', name: 'Neon Frontier Hero Tee', price: '$34.99', badge: 'Exclusive Drop', type: 'Apparel' },
  { id: 'm2', name: 'Shadowstrike Poster Series Vol.1', price: '$19.99', badge: 'Limited Collection', type: 'Poster/Print' },
  { id: 'm3', name: 'Urban Legend Unisex Hoodie', price: '$54.99', badge: 'Trending', type: 'Apparel' }
];

export default function FlipboardStudio() {
  const [currentView, setCurrentView] = useState('magazine');
  const [selectedScene, setSelectedScene] = useState(MAGAZINE_SECTIONS[0]);
  const [hasVoted, setHasVoted] = useState(false);
  const [arenaVoted, setArenaVoted] = useState(false);
  const [arenaVotes, setArenaVotes] = useState({ creatorA: 1842, creatorB: 2105 });
  const [cartCount, setCartCount] = useState(0);

  const totalVotes = 142 + 89 + (hasVoted ? 1 : 0);
  const pctA = Math.round(((142 + (hasVoted ? 1 : 0)) / totalVotes) * 100);
  const pctB = Math.round((89 / totalVotes) * 100);

  const totalArena = arenaVotes.creatorA + arenaVotes.creatorB;
  const arenaPctA = Math.round((arenaVotes.creatorA / totalArena) * 100);
  const arenaPctB = Math.round((arenaVotes.creatorB / totalArena) * 100);

  const triggerArenaVote = (target) => {
    if (arenaVoted) return;
    setArenaVotes(prev => ({ ...prev, [target]: prev[target] + 1 }));
    setArenaVoted(true);
  };

  return (
    <div className="w-full h-screen bg-[#0A0A0C] flex justify-center items-center overflow-hidden font-serif antialiased text-[#F5F5F7] select-none">
      <div className="relative w-full max-w-[430px] h-full max-h-[932px] bg-[#0A0A0C] shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col justify-between scrollbar-none pb-24">
        
        {/* VIEW 1: MAGAZINE FEED */}
        {currentView === 'magazine' && (
          <div className="w-full flex flex-col p-6 gap-6 animate-fadeIn">
            <div className="w-full border-b-4 border-[#F5F5F7] pb-3 pt-8 flex flex-col gap-1">
              <div className="w-full flex justify-between items-end">
                <h1 className="font-sans font-black text-3xl tracking-[0.2em] text-[#F5F5F7]">VEKAI</h1>
                <span className="font-sans font-black text-[10px] tracking-widest text-[#00FFCC] bg-[#00FFCC]/10 px-2.5 py-1 rounded-sm">EDITION 01</span>
              </div>
              <div className="w-full flex justify-between items-center mt-1 text-[9px] font-sans font-bold tracking-wider text-gray-500 uppercase">
                <span>Roleverse Workspace // Staging</span>
                <span>July 2026</span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-5">
              {MAGAZINE_SECTIONS.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => { setSelectedScene(item); setCurrentView('camera'); }}
                  className="w-full group cursor-pointer border-b border-white/5 pb-5 last:border-b-0 flex flex-col gap-3"
                >
                  {item.size === 'hero' ? (
                    <>
                      <div className="w-full aspect-[16/10] bg-neutral-900 overflow-hidden relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                        <span className="absolute top-3 left-3 bg-white text-black font-sans font-black text-[9px] tracking-widest px-2 py-0.5 uppercase z-20">{item.genre}</span>
                      </div>
                      <h2 className="font-black text-xl leading-tight text-[#F5F5F7] group-hover:text-[#00FFCC] transition-colors">{item.title}</h2>
                      <p className="text-gray-400 text-xs font-sans leading-relaxed">{item.desc}</p>
                    </>
                  ) : (
                    <div className="w-full flex gap-4 items-start">
                      <div className="w-24 h-24 bg-neutral-900 overflow-hidden shrink-0 relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[#00FFCC] font-sans font-black text-[9px] tracking-widest uppercase">{item.genre}</span>
                        <h3 className="font-black text-sm leading-snug text-[#F5F5F7] group-hover:text-[#00FFCC] transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-[11px] font-sans line-clamp-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: CAMERA */}
        {currentView === 'camera' && (
          <div className="w-full h-full p-6 pt-14 flex flex-col justify-between items-center animate-fadeIn relative">
            <div className="w-full flex justify-between items-center z-10 font-sans">
              <button onClick={() => setCurrentView('magazine')} className="text-xs font-bold text-gray-400 tracking-wider hover:text-white cursor-pointer">✕ CANCEL</button>
              <span className="text-[11px] font-black tracking-[0.2em] text-white">IDENTITY SCAN</span>
              <div className="w-10" />
            </div>

            <div className="w-[230px] h-[230px] border-4 border-[#F5F5F7] rounded-full flex items-center justify-center relative my-auto shadow-2xl">
              <div className="w-[210px] h-[210px] border border-dashed border-[#00FFCC]/40 rounded-full animate-spin [animation-duration:20s]" />
              <div className="absolute font-sans font-black text-[9px] tracking-widest text-[#00FFCC] bg-black px-3 py-1 top-[-10px]">FACIAL ORIENTATION LOCK</div>
            </div>

            <div className="w-full flex flex-col items-center gap-4 z-10">
              <p className="text-center font-sans text-xs text-gray-400 max-w-[70%] leading-relaxed">Position features completely inside the framing track to synchronize credentials.</p>
              <button onClick={() => { setCurrentView('compiling'); setTimeout(() => setCurrentView('result'), 2500); }} className="w-16 h-16 rounded-full border-4 border-[#F5F5F7] bg-transparent flex justify-center items-center cursor-pointer transition-transform active:scale-90 p-1">
                <div className="w-full h-full rounded-full bg-[#F5F5F7] hover:bg-[#00FFCC] transition-colors" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: COMPILING */}
        {currentView === 'compiling' && (
          <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center bg-[#0A0A0C] animate-fadeIn">
            <h2 className="text-2xl font-black italic tracking-widest text-[#F5F5F7] animate-pulse">GENERATING PAGE...</h2>
            <div className="w-24 h-1 bg-white/10 mt-4 relative overflow-hidden rounded-full">
              <div className="absolute h-full w-1/3 bg-[#00FFCC] top-0 left-0 animate-loadingMove" />
            </div>
            <p className="font-sans text-xs text-gray-500 mt-4 uppercase tracking-widest">Assembling Identity Matrices cleanly // Staging Stacks</p>
          </div>
        )}

        {/* VIEW 4: RESULTS */}
        {currentView === 'result' && (
          <div className="w-full p-6 pt-14 flex flex-col justify-between gap-6 animate-fadeIn">
            <div className="w-full flex justify-between items-center font-sans border-b border-white/5 pb-4">
              <button onClick={() => setCurrentView('magazine')} className="text-xs font-black tracking-widest text-gray-400 hover:text-white cursor-pointer">✕ DISMISS</button>
              <button onClick={() => setCurrentView('boutique')} className="text-xs font-black tracking-widest text-[#00FFCC] border border-[#00FFCC]/30 px-3 py-1.5 rounded-sm hover:bg-[#00FFCC]/10 cursor-pointer">🛒 LOOK STORE</button>
            </div>

            <div className="w-full aspect-[16/10] bg-neutral-900 border border-white/10 flex flex-col justify-center items-center relative">
              <span className="text-[10px] font-sans font-black tracking-widest text-white/30 uppercase">[ Face-Swapped Output Asset ]</span>
              <span className="absolute bottom-3 left-3 font-sans font-black text-[9px] tracking-widest bg-[#00FFCC] text-black px-2 py-0.5">COMPILING OK</span>
            </div>

            <div className="w-full flex flex-col gap-4 bg-white/[0.01] border border-white/5 p-5 rounded-sm">
              <div>
                <span className="font-sans font-black text-[9px] tracking-widest text-[#FF007F] uppercase block mb-1">Reader Feedback Loop</span>
                <h4 className="font-black text-base text-[#F5F5F7] leading-tight">Does this dynamic representation match the mood of "{selectedScene?.title}"?</h4>
              </div>

              <div className="flex flex-col gap-2.5 font-sans">
<button onClick={() => setHasVoted(true)} className="w-full h-12 bg-transparent border border-[#F5F5F7]/30 hover:border-[#00FFCC] text-left px-4 flex justify-between items-center text-xs text-white font-bold transition-all relative overflow-hidden cursor-pointer">{hasVoted && <div className="absolute inset-y-0 left-0 bg-[#00FFCC]/10" style={{ width: ${pctA}% }} />}Absolute Hero Cut Alignment{hasVoted && {pctA}%}<button onClick={() => setHasVoted(true)} className="w-full h-12 bg-transparent border border-[#F5F5F7]/30 hover:border-[#FF007F] text-left px-4 flex justify-between items-center text-xs text-white font-bold transition-all relative overflow-hidden cursor-pointer">{hasVoted && <div className="absolute inset-y-0 left-0 bg-[#FF007F]/10" style={{ width: ${pctB}% }} />}Rogue Alternative Variant{hasVoted && {pctB}%}<button onClick={() => alert("Syndicating synthetic avatar link...")} className="w-full bg-[#F5F5F7] text-[#0A0A0C] font-sans font-black py-4 text-xs tracking-[0.2em] hover:bg-[#00FFCC] transition-colors cursor-pointer uppercase">📲 SYNDICATE TO SOCIAL MEDIA)}{/* VIEW 5: STOREFRONT */}{currentView === 'boutique' && (ROLEVERSE STOREWear the role. Own the moment.<button onClick={() => setCurrentView('result')} className="text-xs font-black tracking-widest text-gray-400 hover:text-white cursor-pointer">✕ CLOSEShopping Cart Status🛍️ {cartCount} ITEMS{MERCHANDISE_ITEMS.map((item) => ({item.badge}{item.name}{item.type}{item.price}<button onClick={() => setCartCount(prev => prev + 1)} className="w-full bg-transparent border border-[#F5F5F7]/20 hover:border-[#00FFCC] text-white hover:text-[#0A0A0C] hover:bg-[#00FFCC] font-sans font-black py-2.5 text-[10px] tracking-widest transition-all cursor-pointer uppercase">🛒 Add Merchandise to Bag))})}{/* VIEW 6: BATTLE ARENA */}{currentView === 'arena' && (BATTLE ARENAVote live on tracking multi-identity clashes.CROWD POLLING[ Contender A ]@Alpha_ValkyrieMetrics: {arenaVoted ? ${arenaPctA}% : '1,842 PV'}<button onClick={() => triggerArenaVote('creatorA')} disabled={arenaVoted} className="absolute right-4 bottom-4 bg-[#00FFCC] text-[#0A0A0C] text-[10px] font-sans font-black px-4 py-2 rounded-sm z-20 shadow-md disabled:opacity-40 cursor-pointer">⚡ VOTE[ Contender B ]@Cyber_Ronin_XMetrics: {arenaVoted ? ${arenaPctB}% : '2,105 PV'}<button onClick={() => triggerArenaVote('creatorB')} disabled={arenaVoted} className="absolute right-4 bottom-4 bg-[#FF007F] text-white text-[10px] font-sans font-black px-4 py-2 rounded-sm z-20 shadow-md disabled:opacity-40 cursor-pointer">🔥 VOTE)}{/* VIEW 7: VAULT/PROFILE */}{currentView === 'vault' && (🎭@MetaCreator_AlphaDismantling production restrictions. Imagination is the ceiling.2Generated43.4KAccumulated PV{[{ id: 'h1', views: '12.4K PV' },{ id: 'h2', views: '31.0K PV' }].map((h) => ([ Video Thumb ]👁️ {h.views}<button onClick={() => setCurrentView('boutique')} className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#0A0A0C]/80 border border-white/10 flex justify-center items-center text-[10px] text-[#00FFCC] z-10 cursor-pointer active:scale-90">🛒))})}{/* GLOBAL FIXED NAVIGATION DOCK */}{['magazine', 'arena', 'vault'].includes(currentView) && (<button onClick={() => setCurrentView('magazine')} className={flex flex-col items-center gap-1 cursor-pointer transition-colors ${currentView === 'magazine' ? 'text-[#00FFCC]' : 'text-gray-500'}}>🎬STUDIO<button onClick={() => setCurrentView('arena')} className={flex flex-col items-center gap-1 cursor-pointer transition-colors ${currentView === 'arena' ? 'text-[#00FFCC]' : 'text-gray-500'}}>⚔️ARENA<button onClick={() => setCurrentView('vault')} className={flex flex-col items-center gap-1 cursor-pointer transition-colors ${currentView === 'vault' ? 'text-[#00FFCC]' : 'text-gray-500'}}>👤VAULT)});}