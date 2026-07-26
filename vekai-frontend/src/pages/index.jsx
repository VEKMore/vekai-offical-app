import React, { useState } from 'react';

const CATALOGUE_PRODUCTS = [
  { id: '1', name: 'RHYTHM STAGE EXCLUSIVE PRINT', price: '$24.99', type: 'Poster/Print', desc: 'Premium poster celebrating the best Rhythm Wars performances.' },
  { id: '2', name: 'URBAN LEGEND UNISEX HOODIE', price: '$54.99', type: 'Apparel', desc: 'Classic hoodie with urban hero iconography, available in multiple sizes.' },
  { id: '3', name: 'GROOVE ODYSSEY CANVAS PRINT', price: '$44.99', type: 'Home Decor', desc: 'Canvas wall art print from the iconic Groove Odyssey stage.' },
  { id: '4', name: 'VELVET RUNWAY ENAMEL PIN SET', price: '$14.99', type: 'Accessory', desc: 'Handcrafted enamel pin set inspired by the Velvet Runway Fashion Show scene.' },
  { id: '5', name: 'GROOVE ODYSSEY DIGITAL COLLECTIBLE TOKEN', price: '$9.99', type: 'Digital Collectible', desc: 'A rare digital collectible tied to the Groove Odyssey Musical scene.' },
  { id: '6', name: 'SHADOWSTRIKE POSTER SERIES VOL.1', price: '$19.99', type: 'Poster/Print', desc: 'High-quality print poster capturing the most iconic Shadowstrike scenes.' },
  { id: '7', name: 'NEON FRONTIER HERO TEE', price: '$34.99', type: 'Apparel', desc: 'Limited-edition campaign tee featuring the Hero emblem from Neon Frontier.' }
];

export default function RoleverseStoreView() {
  const [itemFilter, setItemFilter] = useState('All Types');
  const [searchField, setSearchScene] = useState('');
  const [basket, setBasket] = useState([]);

  const processedMerch = CATALOGUE_PRODUCTS.filter(item => {
    const typeMatch = itemFilter === 'All Types' || item.type === itemFilter;
    const sceneMatch = searchField === '' || item.name.toLowerCase().includes(searchField.toLowerCase());
    return typeMatch && sceneMatch;
  });

  return (
    <div className="w-full min-h-screen bg-[#14131a] text-[#f5f5f7] font-sans flex antialiased select-none">
      
      {/* 🧭 LEFT SIDE NAVIGATION SECTION */}
      <aside className="w-[240px] bg-[#0c0b11] border-r border-white/5 p-5 flex flex-col justify-between shrink-0 min-h-screen">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#9d4edd] to-[#00ffcc] flex items-center justify-center text-black font-black text-xs">R</div>
            <span className="font-black text-xs tracking-[0.2em] text-white">ROLEVERSE</span>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-3 rounded-lg flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm">👤</div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] text-gray-500 font-bold truncate">testuser@example.com</span>
              <span className="text-[9px] text-[#00ffcc] font-black tracking-widest uppercase mt-0.5">Creator</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {['Home', 'Explore', 'Community', 'Campaigns', 'Store'].map((link) => (
              <button key={link} className={`w-full text-left px-3 py-2.5 rounded-md text-[11px] font-black tracking-wider uppercase transition-all ${link === 'Store' ? 'bg-[#9d4edd]/20 text-[#00ffcc] border border-[#00ffcc]/20' : 'text-gray-400 hover:text-white'}`}>
                {link === 'Store' ? '🔹' : '▪'} {link}
              </button>
            ))}
          </div>

          <div className="w-full h-px bg-white/5 my-1" />

          <div className="flex flex-col gap-1">
            {['My Avatar', 'My Scenes', 'My Feed', 'Active Campaigns', 'Merchandise Store'].map((link) => (
              <button key={link} className={`w-full text-left px-3 py-2.5 rounded-md text-[11px] font-black tracking-wider uppercase transition-all ${link === 'Merchandise Store' ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
                {link === 'Merchandise Store' ? '🏷️' : '▫'} {link}
              </button>
            ))}
          </div>

          <div className="w-full bg-gradient-to-br from-[#9d4edd]/30 to-black/40 border border-[#9d4edd]/20 p-4 rounded-xl mt-4 flex flex-col gap-2">
            <h4 className="text-[10px] font-black tracking-widest uppercase text-white">STEAL THE SPOTLIGHT</h4>
            <p className="text-gray-400 text-[10px] leading-normal">Cast yourself into a new scene and climb the leaderboard.</p>
            <button className="w-full bg-[#9d4edd] text-white text-[9px] font-black tracking-widest py-2 rounded-md uppercase">Cast a Scene</button>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[10px] font-bold text-gray-500">
          <button className="text-left hover:text-white uppercase">Community Hub</button>
          <button className="text-left hover:text-white uppercase">Account Settings</button>
        </div>
      </aside>

      {/* 💻 MAIN DISPLAY AREA */}
      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto w-full">
        
        {/* PAGE 1: HERO DISPLAY BANNER MODULE */}
        <section className="w-full bg-[#1b1924] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-xl">
          <div className="flex flex-col gap-4 max-w-xl z-10">
            <h2 className="text-3xl font-black tracking-wide text-white">THE ROLEVERSE STORE</h2>
            <p className="text-gray-400 text-xs font-serif leading-relaxed italic max-w-md">Wear the role. Own the moment. Shop merch tied to the scenes and community cuts you love.</p>
            <button className="bg-[#ffb703] text-black font-black px-6 py-3 text-[10px] tracking-widest uppercase rounded-md shadow-md shadow-[#ffb703]/10 self-start">Add Merchandise</button>
          </div>
          <div className="w-[280px] aspect-[16/10] bg-neutral-900 border border-white/10 flex items-center justify-center text-center p-4 relative shrink-0 overflow-hidden shadow-2xl rounded-md">
            <img src="https://fals.ai" alt="Production Display" className="w-full h-full object-cover opacity-80" />
          </div>
        </section>

        {/* PAGE 2: CAMPAIGN EXCLUSIVE TRACKS */}
        <section className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-between items-end border-b border-white/5 pb-2">
            <div>
              <span className="text-[9px] text-[#ff0055] font-black uppercase tracking-widest block">Campaign Exclusive Drop</span>
              <h3 className="text-white font-black text-base tracking-wide mt-0.5">BE THE LEAD—LIMITED COLLECTION</h3>
            </div>
            <div className="bg-[#ff0055]/10 border border-[#ff0055]/20 text-[#ff0055] font-mono text-[11px] px-3 py-1.5 rounded-sm tracking-widest animate-pulse font-bold">Drops ends in: 02:14:39</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0c0b11] border border-white/10 p-5 rounded-lg flex flex-col gap-4 justify-between group">
              <div>
                <span className="bg-[#ffb703] text-black font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-sm self-start uppercase">Exclusive</span>
                <h4 className="text-white font-black text-sm mt-3 tracking-wide group-hover:text-[#00ffcc] transition-colors">NEON FRONTIER HERO TEE</h4>
                <span className="text-gray-400 font-mono text-xs font-bold">$34.99</span>
              </div>
              <button onClick={() => setBasket(prev => [...prev, 'item'])} className="w-full bg-[#9d4edd] text-white font-black py-3 text-[10px] tracking-widest uppercase rounded-md shadow-md">View Item</button>
            </div>
            <div className="bg-[#0c0b11] border border-white/10 p-5 rounded-lg flex flex-col gap-4 justify-between group">
              <div>
                <span className="bg-[#ffb703] text-black font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-sm self-start uppercase">Exclusive</span>
                <h4 className="text-white font-black text-sm mt-3 tracking-wide group-hover:text-[#00ffcc] transition-colors">SHADOWSTRIKE POSTER SERIES VOL.1</h4>
                <span className="text-gray-400 font-mono text-xs font-bold">$19.99</span>
              </div>
              <button onClick={() => setBasket(prev => [...prev, 'item'])} className="w-full bg-[#9d4edd] text-white font-black py-3 text-[10px] tracking-widest uppercase rounded-md shadow-md">View Item</button>
            </div>
          </div>
        </section>

        {/* PAGE 3: GENERAL CATALOG FILTERS & MATRIX */}
        <section className="w-full bg-[#0c0b11] border border-white/5 p-5 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-4">
          <h3 className="text-white font-black text-xs tracking-widest uppercase">BROWSE ALL MERCHANDISE</h3>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 flex-1 max-w-xl justify-end">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Item Type</label>
              <select value={itemFilter} onChange={(e) => setItemFilter(e.target.value)} className="bg-[#14131a] border border-white/10 text-xs text-white px-3 py-2.5 rounded-md outline-none font-bold">
                {['All Types', 'Apparel', 'Poster/Print', 'Home Decor', 'Accessory', 'Digital Collectible'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Associated Scene</label>
<input type="text" placeholder="Search by scene..." value={searchField} onChange={(e) => setSearchScene(e.target.value)} className="bg-[#14131a] border border-white/10 text-xs text-white px-3 py-2.5 rounded-md outline-none placeholder-gray-600 font-bold" /><button onClick={() => { setItemFilter('All Types'); setSearchScene(''); }} className="bg-[#9d4edd] text-white font-black px-5 py-2.5 text-[10px] tracking-widest uppercase rounded-md self-end h-10 shadow-md">Apply Filters{processedMerch.map((product) => ())}{/* PAGE 4: SCENE COLLECTION MATRIX CARD SLOTS */}{/* FOOTER WIDGET OVERLAY */}{basket.length > 0 && (🛍️ CART COUNT{basket.length})});}