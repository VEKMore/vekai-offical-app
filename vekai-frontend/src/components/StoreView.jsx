import React, { useState } from 'react';

const ALL_PRODUCTS = [
  { id: 'p1', name: 'RHYTHM STAGE EXCLUSIVE PRINT', price: '$24.99', type: 'Poster/Print', desc: 'Premium poster celebrating the best Rhythm Wars performances.', scene: 'Rhythm Stage', tag: 'Standard' },
  { id: 'p2', name: 'URBAN LEGEND UNISEX HOODIE', price: '$54.99', type: 'Apparel', desc: 'Classic hoodie with urban hero iconography, available in multiple sizes.', scene: 'Urban Legend', tag: 'Standard' },
  { id: 'p3', name: 'GROOVE ODYSSEY CANVAS PRINT', price: '$44.99', type: 'Home Decor', desc: 'Canvas wall art print from the iconic Groove Odyssey stage.', scene: 'Groove Odyssey', tag: 'Standard' },
  { id: 'p4', name: 'VELVET RUNWAY ENAMEL PIN SET', price: '$14.99', type: 'Accessory', desc: 'Handcrafted enamel pin set inspired by the Velvet Runway Fashion Show scene.', scene: 'Velvet Runway', tag: 'Standard' },
  { id: 'p5', name: 'GROOVE ODYSSEY DIGITAL COLLECTIBLE TOKEN', price: '$9.99', type: 'Digital Collectible', desc: 'A rare digital collectible tied to the Groove Odyssey Musical scene.', scene: 'Groove Odyssey', tag: 'Standard' },
  { id: 'p6', name: 'SHADOWSTRIKE POSTER SERIES VOL.1', price: '$19.99', type: 'Poster/Print', desc: 'High-quality print poster capturing the most iconic Shadowstrike scenes.', scene: 'Shadowstrike', tag: 'Exclusive' },
  { id: 'p7', name: 'NEON FRONTIER HERO TEE', price: '$34.99', type: 'Apparel', desc: 'Limited-edition campaign tee featuring the Hero emblem from Neon Frontier.', scene: 'Neon Frontier', tag: 'Exclusive' }
];

const SCENES = ["Neon Frontier", "Shadowstrike", "Rhythm Stage", "Urban Legend", "Groove Odyssey", "Velvet Runway"];

export default function StoreView() {
  const [selectedType, setSelectedType] = useState('All Types');
  const [searchScene, setSearchScene] = useState('');
  const [cart, setCart] = useState([]);

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesType = selectedType === 'All Types' || product.type === selectedType;
    const matchesScene = searchScene === '' || product.scene.toLowerCase().includes(searchScene.toLowerCase());
    return matchesType && matchesScene;
  });

  return (
    <div className="w-full min-h-screen bg-[#14131a] text-[#f5f5f7] font-sans flex antialiased select-none">
      
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
              <span className="text-[10px] text-gray-500 font-bold tracking-wide uppercase truncate">testuser@example.com</span>
              <span className="text-[9px] text-[#00ffcc] font-black tracking-widest uppercase mt-0.5">Creator Tier</span>
            </div>
          </div>

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
        </div>
      </aside>

      {/* 💻 MAIN GRID GRID CONTAINER */}
      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto w-full">
        <header className="w-full flex justify-between items-center border-b border-white/5 pb-4">
          <div className="text-xs text-gray-400 font-mono tracking-wider">Server Pipeline: Status Online</div>
        </header>

        {/* PROMOTION HERO BANNER */}
        <section className="w-full bg-[#1b1924] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-xl">
          <div className="flex flex-col gap-4 max-w-xl z-10">
            <h2 className="text-3xl font-black tracking-wide text-white">THE ROLEVERSE STORE</h2>
            <p className="text-gray-400 text-xs font-serif leading-relaxed italic max-w-md">
              Wear the role. Own the moment. Shop merch tied to the scenes and community cuts you love.
            </p>
          </div>
          <div className="w-[280px] aspect-[16/10] bg-neutral-900 border border-white/10 flex items-center justify-center text-center p-4 relative shrink-0 overflow-hidden shadow-2xl rounded-md">
            <img src="https://fals.ai" alt="User Profile" className="w-full h-full object-cover opacity-80" />
          </div>
        </section>

        {/* CAMPAIGN EXCLUSIVE DROP GRID */}
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
            {ALL_PRODUCTS.filter(p => p.tag === 'Exclusive').map((item) => (
              <div key={item.id} className="bg-[#0c0b11] border border-white/10 p-5 rounded-lg flex flex-col gap-4 justify-between group">
                <div className="flex flex-col gap-2">
                  <span className="bg-[#ffb703] text-black font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-sm self-start uppercase">Exclusive</span>
                  <h4 className="text-white font-black text-sm mt-1 tracking-wide group-hover:text-[#00ffcc] transition-colors">{item.name}</h4>
                  <span className="text-gray-400 font-mono text-xs font-bold">{item.price}</span>
                </div>
                <button onClick={() => setCart(prev => [...prev, item.id])} className="w-full bg-[#9d4edd] text-white font-black py-3 text-[10px] tracking-widest uppercase rounded-md shadow-md">Add to Bag</button>
              </div>
            ))}
          </div>
        </section>

        {/* BROWSE AND FILTER SYSTEM */}
        <section className="w-full bg-[#0c0b11] border border-white/5 p-5 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-4">
          <h3 className="text-white font-black text-xs tracking-widest uppercase">BROWSE ALL MERCHANDISE</h3>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 flex-1 max-w-xl justify-end">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Item Type</label>
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="bg-[#14131a] border border-white/10 text-xs text-white px-3 py-2.5 rounded-md outline-none font-bold">
                {['All Types', 'Apparel', 'Poster/Print', 'Home Decor', 'Accessory', 'Digital Collectible'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Associated Scene</label>
              <input type="text" placeholder="Search by scene..." value={searchScene} onChange={(e) => setSearchScene(e.target.value)} className="bg-[#14131a] border border-white/10 text-xs text-white px-3 py-2.5 rounded-md outline-none placeholder-gray-600 font-bold" />
            </div>
            <button onClick={() => { setSelectedType('All Types'); setSearchScene(''); }} className="bg-[#9d4edd] text-white font-black px-5 py-2.5 text-[10px] tracking-widest uppercase rounded-md self-end h-10 shadow-md">
              Clear
            </button>
          </div>
        </section>

        {/* MAIN PRODUCT CATALOGUE GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-[#0c0b11] border border-white/5 p-4 rounded-lg flex flex-col justify-between gap-4 group hover:border-white/15 transition-all">
              <div className="w-full aspect-[4/3] bg-[#14131a] border border-white/5 flex flex-col justify-center items-center p-3 relative rounded-sm overflow-hidden">
[ {product.type} ]{product.type}{product.name}{product.desc}{product.price}<button onClick={() => setCart(prev => [...prev, product.id])} className="w-full bg-transparent border border-white/10 text-gray-400 group-hover:text-black group-hover:bg-[#00ffcc] group-hover:border-[#00ffcc] font-black py-2.5 text-[10px] tracking-widest uppercase transition-all rounded-sm">Add to Bag))}{/* SCENE BUNDLE SECTIONS */}{/* FLOATING ACTION HUD OVERLAY */}{cart.length > 0 && (🛍️ CART COUNT{cart.length}<button onClick={() => setCart([])} className="text-[9px] border-l border-black/20 pl-2 opacity-60 hover:opacity-100 uppercase">Clear)});}