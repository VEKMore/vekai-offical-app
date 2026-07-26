import React, { useState } from 'react';

// Factual inventory mapped directly from the verified design specification layout
const PRODUCTS_DATA = [
  { id: 'p1', name: 'RHYTHM STAGE EXCLUSIVE PRINT', price: '$24.99', type: 'Poster/Print', desc: 'Premium poster celebrating the best Rhythm Wars performances.', banner: 'Standard' },
  { id: 'p2', name: 'URBAN LEGEND UNISEX HOODIE', price: '$54.99', type: 'Apparel', desc: 'Classic hoodie with urban hero iconography, available in multiple sizes.', banner: 'Standard' },
  { id: 'p3', name: 'GROOVE ODYSSEY CANVAS PRINT', price: '$44.99', type: 'Home Decor', desc: 'Canvas wall art print from the iconic Groove Odyssey stage.', banner: 'Standard' },
  { id: 'p4', name: 'VELVET RUNWAY ENAMEL PIN SET', price: '$14.99', type: 'Accessory', desc: 'Handcrafted enamel pin set inspired by the Velvet Runway Fashion Show scene.', banner: 'Standard' },
  { id: 'p5', name: 'GROOVE ODYSSEY DIGITAL COLLECTIBLE TOKEN', price: '$9.99', type: 'Digital Collectible', desc: 'A rare digital collectible tied to the Groove Odyssey Musical scene.', banner: 'Standard' },
  { id: 'p6', name: 'SHADOWSTRIKE POSTER SERIES VOL.1', price: '$19.99', type: 'Poster/Print', desc: 'High-quality print poster capturing the most iconic Shadowstrike scenes.', banner: 'Standard' },
  { id: 'p7', name: 'NEON FRONTIER HERO TEE', price: '$34.99', type: 'Apparel', desc: 'Limited-edition campaign tee featuring the Hero emblem from Neon Frontier.', banner: 'Standard' }
];

export default function RoleverseStoreDashboard() {
  const [activeType, setActiveType] = useState('All Types');
  const [sceneQuery, setSceneQuery] = useState('');
  const [shoppingCart, setShoppingCart] = useState([]);

  const processedCatalog = PRODUCTS_DATA.filter(item => {
    const typePass = activeType === 'All Types' || item.type === activeType;
    const scenePass = sceneQuery === '' || item.name.toLowerCase().includes(sceneQuery.toLowerCase()) || item.desc.toLowerCase().includes(sceneQuery.toLowerCase());
    return typePass && scenePass;
  });

  return (
    <div className="w-full min-h-screen bg-[#14131a] text-[#f5f5f7] font-sans flex antialiased select-none">
      
      {/* 🧭 LEFT COLUMN PANEL: SIDE NAVIGATION DECK */}
      <aside className="w-[240px] bg-[#0c0b11] border-r border-white/5 p-5 flex flex-col justify-between shrink-0 min-h-screen">
        <div className="flex flex-col gap-6">
          {/* Main Identity Banner Brand Element */}
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#9d4edd] to-[#00ffcc] flex items-center justify-center text-black font-black text-xs">R</div>
            <span className="font-black text-xs tracking-[0.2em] text-white">ROLEVERSE</span>
          </div>

          {/* User Account Verification Segment */}
          <div className="bg-white/[0.02] border border-white/5 p-3 rounded-lg flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm">👤</div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] text-gray-500 font-bold tracking-wide uppercase truncate">testuser@example.com</span>
              <span className="text-[9px] text-[#00ffcc] font-black tracking-widest uppercase mt-0.5">Creator Tier</span>
            </div>
          </div>

          {/* Navigation Action Loops */}
          <div className="flex flex-col gap-1">
            {['Home', 'Explore', 'Community', 'Campaigns', 'Store'].map((tab) => (
              <button key={tab} className={`w-full text-left px-3 py-2.5 rounded-md text-[11px] font-black tracking-wider uppercase transition-all ${tab === 'Store' ? 'bg-[#9d4edd]/20 text-[#00ffcc] border border-[#00ffcc]/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
                {tab === 'Store' ? '🔹' : '▪'} {tab}
              </button>
            ))}
          </div>

          <div className="w-full h-px bg-white/5 my-1" />

          <div className="flex flex-col gap-1">
            {['My Avatar', 'My Scenes', 'My Feed', 'Active Campaigns', 'Merchandise Store'].map((tab) => (
              <button key={tab} className={`w-full text-left px-3 py-2.5 rounded-md text-[11px] font-black tracking-wider uppercase transition-all ${tab === 'Merchandise Store' ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
                {tab === 'Merchandise Store' ? '🏷️' : '▫'} {tab}
              </button>
            ))}
          </div>

          {/* Steal the Spotlight Callout Widget Overlay Box */}
          <div className="w-full bg-gradient-to-br from-[#9d4edd]/30 to-black/40 border border-[#9d4edd]/20 p-4 rounded-xl mt-4 flex flex-col gap-2.5">
            <h4 className="text-[10px] font-black tracking-widest uppercase text-white">STEAL THE SPOTLIGHT</h4>
            <p className="text-gray-400 text-[10px] leading-normal">Cast yourself into a new scene and climb today's leaderboard.</p>
            <button className="w-full bg-[#9d4edd] text-white text-[9px] font-black tracking-widest py-2 rounded-md uppercase hover:bg-[#7b2cbf] transition-colors">Cast a Scene</button>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-2 text-[10px] font-bold text-gray-500 tracking-wider">
          <button className="text-left hover:text-white uppercase">Community Hub</button>
          <button className="text-left hover:text-white uppercase">Account Settings</button>
        </div>
      </aside>

      {/* 💻 RIGHT COLUMN PANEL: MASTER DASHBOARD CONTAINER CONTROLLER */}
      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto w-full">
        
        {/* Dynamic Global Header Status Bar */}
        <header className="w-full flex justify-between items-center border-b border-white/5 pb-4">
          <div className="flex items-center gap-4 text-xs text-gray-400 font-mono tracking-wider">
            <span>Server Pipeline: Status Online</span>
          </div>
          <button className="bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-black tracking-widest uppercase rounded-sm hover:bg-white/10 transition-all">Log Out</button>
        </header>

        {/* 🪟 UPPER HERO REGION: THE ROLEVERSE STORE HERO PROMOTION CANVASES */}
        <section className="w-full bg-[#1b1924] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-xl">
          <div className="flex flex-col gap-4 max-w-xl z-10">
            <h2 className="text-3xl font-black tracking-wide text-white">THE ROLEVERSE STORE</h2>
            <p className="text-gray-400 text-xs font-serif leading-relaxed italic max-w-md">
              Wear the role. Own the moment. Shop merch tied to the scenes and community cuts you love.
            </p>
            <button className="bg-[#ffb703] text-black font-black px-6 py-3 text-[10px] tracking-widest uppercase rounded-md shadow-md shadow-[#ffb703]/10 hover:scale-[1.02] transition-transform self-start">
              Add Merchandise
            </button>
          </div>
          {/* Blueprint Visual Reference Image Frame Layout Container */}
          <div className="w-[280px] aspect-[16/10] bg-neutral-900 border border-white/10 flex items-center justify-center text-center p-4 relative shrink-0 overflow-hidden shadow-2xl rounded-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-transparent" />
            <span className="text-white/20 text-[9px] font-mono tracking-widest uppercase">[ Staging Frame Placeholder ]</span>
          </div>
        </section>

        {/* 🏷️ CAMPAIGN EXCLUSIVE DROP GRID TRACK REGIONS */}
        <section className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-between items-end border-b border-white/5 pb-2">
            <div>
              <span className="text-[9px] text-[#ff0055] font-black uppercase tracking-widest block">Campaign Exclusive Drop</span>
              <h3 className="text-white font-black text-base tracking-wide mt-0.5">BE THE LEAD—LIMITED COLLECTION</h3>
            </div>
            <div className="bg-[#ff0055]/10 border border-[#ff0055]/20 text-[#ff0055] font-mono text-[11px] px-3 py-1.5 rounded-sm tracking-widest animate-pulse font-bold">
              Drops ends in: 02:14:39
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* EXCLUSIVE DROP PRODUCT 1 */}
            <div className="bg-[#0c0b11] border border-white/10 p-5 rounded-lg flex flex-col gap-4 justify-between group">
              <div className="flex flex-col gap-2">
                <span className="bg-[#ffb703] text-black font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-sm self-start uppercase">Exclusive</span>
                <h4 className="text-white font-black text-sm mt-1 tracking-wide group-hover:text-[#00ffcc] transition-colors">NEON FRONTIER HERO TEE</h4>
                <span className="text-gray-400 font-mono text-xs font-bold">$34.99</span>
              </div>
              <button onClick={() => setShoppingCart(prev => [...prev, 'p7'])} className="w-full bg-[#9d4edd] text-white font-black py-3 text-[10px] tracking-widest uppercase rounded-md shadow-md transition-transform active:scale-[0.99]">View Item</button>
            </div>

            {/* EXCLUSIVE DROP PRODUCT 2 */}
            <div className="bg-[#0c0b11] border border-white/10 p-5 rounded-lg flex flex-col gap-4 justify-between group">
              <div className="flex flex-col gap-2">
                <span className="bg-[#ffb703] text-black font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-sm self-start uppercase">Exclusive</span>
SHADOWSTRIKE POSTER SERIES VOL.1$19.99<button onClick={() => setShoppingCart(prev => [...prev, 'p6'])} className="w-full bg-[#9d4edd] text-white font-black py-3 text-[10px] tracking-widest uppercase rounded-md shadow-md transition-transform active:scale-[0.99]">View Item{/* 🔍 FILTER REGION ENGINE LAYOUT MODULE CARDS CONTAINER */}{/* 📦 THE GENERAL SELECTION ITEM CATALOGUE STACKS DIRECT GRIDS */}{processedCatalog.map((product) => ())}{/* 🎬 SCENE COLLECTION BUNDLE SLOTS GRID MATRIX SECTION */}{/* Floating Shopping Bag Tray Action HUD Overlay Component Widget */}{shoppingCart.length > 0 && (🛍️ CART COUNT{shoppingCart.length}<button onClick={() => setShoppingCart([])} className="text-[9px] border-l border-black/20 pl-2 opacity-60 hover:opacity-100 uppercase">Clear)});}
---