cat << 'EOF' > ./src/components/StoreView.jsx
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
    <div className="w-full min-h-screen bg-[#111217] text-white font-sans flex overflow-x-hidden antialiased">
      
      {/* 🧭 LEFT SIDE NAVIGATION */}
      <aside className="w-64 bg-[#0A0A0C] border-r border-white/5 p-6 flex flex-col justify-between hidden md:flex shrink-0">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#00FFCC] flex items-center justify-center text-[#0A0A0C] font-black text-sm">R</div>
            <span className="font-black text-sm tracking-widest text-[#F5F5F7]">ROLEVERSE</span>
          </div>
          <div className="flex flex-col gap-2.5">
            {['Home', 'Explore', 'Community', 'Campaigns', 'Store'].map((link) => (
              <button key={link} className={`w-full text-left px-4 py-3 rounded-lg text-xs font-black tracking-wider uppercase transition-all ${link === 'Store' ? 'bg-[#00FFCC] text-[#0A0A0C]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
                {link === 'Store' ? '🛍️' : '▪'} {link}
              </button>
            ))}
          </div>
          <div className="w-full h-px bg-white/5" />
          <div className="flex flex-col gap-2.5">
            {['My Avatar', 'My Scenes', 'My Feed', 'Active Campaigns', 'Merchandise Store'].map((link) => (
              <button key={link} className="w-full text-left px-4 py-3 rounded-lg text-xs font-black tracking-wider uppercase text-gray-500 hover:text-white">
                ▫ {link}
              </button>
            ))}
          </div>
          <div className="w-full bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/20 p-4 rounded-xl flex flex-col gap-2">
            <h4 className="text-[10px] font-black tracking-widest text-white uppercase">STEAL THE SPOTLIGHT</h4>
            <p className="text-gray-400 text-[10px] leading-normal">Cast yourself into a new scene and climb the leaderboard.</p>
            <button className="w-full bg-purple-600 text-white text-[9px] font-black py-2 rounded-md uppercase">Cast a Scene</button>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[10px] font-bold text-gray-500">
          <button className="text-left hover:text-white uppercase">Community Hub</button>
          <button className="text-left hover:text-white uppercase">Account Settings</button>
        </div>
      </aside>

      {/* 💻 MAIN GRID PANEL CONTENT */}
      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto max-w-7xl mx-auto w-full">
        
        <header className="w-full flex justify-between items-center border-b border-white/5 pb-4">
          <div className="text-xs text-gray-400 font-mono">Channel: testuser@example.com</div>
          <button className="bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest">Log Out</button>
        </header>

        {/* PROMOTION HERO BANNER */}
        <section className="w-full bg-gradient-to-r from-purple-900/20 via-[#0A0A0C] to-[#0A0A0C] border border-white/10 p-8 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col gap-4 max-w-xl z-10">
            <h2 className="text-3xl font-black tracking-wider text-[#F5F5F7]">THE ROLEVERSE STORE</h2>
            <p className="text-gray-400 text-sm leading-relaxed font-serif italic">
              Wear the role. Own the moment. Shop merch tied to the scenes and community cuts you love.
            </p>
            <button className="bg-[#ffb703] text-black font-black px-6 py-3 text-[10px] tracking-widest uppercase rounded-sm self-start">
              Add Merchandise
            </button>
          </div>
          <div className="w-[280px] aspect-[16/10] bg-neutral-900 border border-white/10 flex items-center justify-center text-center p-4 rounded-md">
            <span className="text-white/20 text-[9px] font-mono tracking-widest uppercase">[ Identity Media Preview ]</span>
          </div>
        </section>

        {/* CAMPAIGN EXCLUSIVES */}
        <section className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-between items-end border-b border-white/5 pb-2">
            <div>
              <span className="text-[9px] text-[#FF007F] font-black uppercase tracking-widest">Campaign Exclusive Drop</span>
              <h3 className="text-white font-black text-lg tracking-wide mt-0.5">BE THE LEAD—LIMITED COLLECTION</h3>
            </div>
            <div className="bg-[#FF007F]/10 border border-[#FF007F]/30 text-[#FF007F] font-mono text-xs px-3 py-1.5 tracking-widest animate-pulse rounded-sm font-bold">
              Drops ends in: 02:14:39
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ALL_PRODUCTS.filter(p => p.tag === 'Exclusive').map((item) => (
              <div key={item.id} className="bg-[#0A0A0C] border border-white/15 p-6 rounded-lg flex flex-col justify-between gap-4 group">
                <div>
                  <span className="bg-[#ffb703] text-black font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-sm uppercase">Exclusive</span>
                  <h4 className="text-[#F5F5F7] font-black text-base mt-3 tracking-wide group-hover:text-[#00FFCC] transition-colors">{item.name}</h4>
                  <span className="text-gray-400 font-mono text-sm block mt-1">{item.price}</span>
                </div>
                <button onClick={() => setCart(prev => [...prev, item.id])} className="w-full bg-[#9d4edd] text-white font-black py-3 text-[10px] tracking-widest uppercase rounded-sm">
                  View Item
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FILTER BAR CONTAINER */}
        <section className="w-full bg-[#0A0A0C] border border-white/5 p-6 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-4">
          <h3 className="text-white font-black text-xs tracking-widest uppercase">BROWSE ALL MERCHANDISE</h3>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 flex-1 max-w-xl justify-end">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Item Type</label>
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="bg-[#111217] border border-white/10 text-xs text-white px-3 py-2.5 rounded-md outline-none font-bold">
                {['All Types', 'Apparel', 'Poster/Print', 'Home Decor', 'Accessory', 'Digital Collectible'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Associated Scene</label>
              <input type="text" placeholder="Search by scene..." value={searchScene} onChange={(e) => setSearchScene(e.target.value)} className="bg-[#111217] border border-white/10 text-xs text-white px-3 py-2.5 rounded-md outline-none placeholder-gray-600 font-bold" />
            </div>
            <button onClick={() => { setSelectedType('All Types'); setSearchScene(''); }} className="bg-[#9d4edd] text-white font-black px-5 py-2.5 text-[10px] tracking-widest uppercase rounded-md self-end h-10 shadow-md">
              Apply Filters
            </button>
          </div>
        </section>

        {/* PRODUCTS DIRECT CATALOG CONTAINER GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
[ {product.type} ]{product.type}{product.name}{product.desc}{product.price}<button onClick={() => setCart(prev => [...prev, product.id])} className="w-full bg-transparent border border-white/10 text-gray-400 group-hover:text-black group-hover:bg-[#00FFCC] group-hover:border-[#00FFCC] font-black py-2.5 text-[10px] tracking-widest uppercase transition-all rounded-sm">Details))}{/* SCENE COLLECTIONS MATRIX BUNDLES */}{/* FLOAT CART HUD TRYS */}{cart.length > 0 && (🛍️ CART COUNT{cart.length}<button onClick={() => setCart([])} className="text-[9px] border-l border-black/20 pl-2 opacity-60 hover:opacity-100 uppercase">Clear)});}EOF