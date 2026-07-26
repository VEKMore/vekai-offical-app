import React, { useState } from 'react';

const ALL_PRODUCTS = [
  { id: '1', name: 'NEON FRONTIER HERO TEE', price: '$34.99', type: 'Apparel', tag: 'Exclusive', scene: 'Neon Frontier' },
  { id: '2', name: 'SHADOWSTRIKE POSTER SERIES VOL.1', price: '$19.99', type: 'Poster/Print', tag: 'Exclusive', scene: 'Shadowstrike' },
  { id: '3', name: 'RHYTHM STAGE EXCLUSIVE PRINT', price: '$24.99', type: 'Poster/Print', tag: 'Standard', scene: 'Rhythm Stage' },
  { id: '4', name: 'URBAN LEGEND UNISEX HOODIE', price: '$54.99', type: 'Apparel', tag: 'Standard', scene: 'Urban Legend' },
  { id: '5', name: 'GROOVE ODYSSEY CANVAS PRINT', price: '$44.99', type: 'Home Decor', tag: 'Standard', scene: 'Groove Odyssey' },
  { id: '6', name: 'VELVET RUNWAY ENAMEL PIN SET', price: '$14.99', type: 'Accessory', tag: 'Standard', scene: 'Velvet Runway' },
  { id: '7', name: 'GROOVE ODYSSEY DIGITAL COLLECTIBLE TOKEN', price: '$9.99', type: 'Digital Collectible', tag: 'Standard', scene: 'Groove Odyssey' }
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
      
      {/* 🧭 LEFT COLUMN: NAVIGATION HUBS */}
      <aside className="w-64 bg-[#0A0A0C] border-r border-white/5 p-6 flex flex-col justify-between hidden md:flex shrink-0">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#00FFCC] flex items-center justify-center text-[#0A0A0C] font-black text-sm">R</div>
            <span className="font-black text-sm tracking-widest text-[#F5F5F7]">ROLEVERSE</span>
          </div>
          <div className="text-xs text-gray-500 font-bold tracking-widest uppercase">Creator</div>
          <nav className="flex flex-col gap-2.5">
            {['Home', 'Explore', 'Community', 'Campaigns', 'Store'].map((link) => (
              <button key={link} className={`w-full text-left px-4 py-3 rounded-lg text-xs font-black tracking-wider uppercase transition-all ${link === 'Store' ? 'bg-[#00FFCC] text-[#0A0A0C]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
                {link === 'Store' ? '🛍️' : '▪'} {link}
              </button>
            ))}
          </nav>
          <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mt-4">Personal</div>
          <nav className="flex flex-col gap-2.5">
            {['My Avatar', 'My Scenes', 'My Feed', 'Active Campaigns', 'Merchandise Store'].map((link) => (
              <button key={link} className="w-full text-left px-4 py-3 rounded-lg text-xs font-black tracking-wider uppercase text-gray-400 hover:bg-white/5 hover:text-white">
                {link === 'Merchandise Store' ? '🏷️' : '▫'} {link}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/5 pt-4 text-[11px] font-bold text-gray-500 tracking-wider">
          <button className="text-left hover:text-white uppercase">Community Hub</button>
          <button className="text-left hover:text-white uppercase">Account Settings</button>
        </div>
      </aside>

      {/* 💻 RIGHT COLUMN: MAIN INTERACTIVE STORAGE SHOWCASE AREA */}
      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto max-w-7xl mx-auto w-full">
        
        {/* Top Operational Command Bar */}
        <header className="w-full flex justify-between items-center border-b border-white/5 pb-4">
          <div className="text-xs text-gray-400 font-mono tracking-wider">Active Channel: testuser@example.com</div>
          <button className="bg-white/5 border border-white/10 px-4 py-2 text-xs font-black tracking-widest uppercase rounded-sm hover:bg-white/10 transition-all">Log Out</button>
        </header>

        {/* 🪟 THE ROLEVERSE STORE HERO PROMOTION SPLIT PANEL CONTAINER */}
        <section className="w-full bg-gradient-to-r from-[#FF007F]/20 via-[#0A0A0C] to-[#0A0A0C] border border-white/10 p-8 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col gap-4 max-w-xl z-10">
            <h2 className="text-3xl font-black tracking-wider text-[#F5F5F7]">THE ROLEVERSE STORE</h2>
            <p className="text-gray-400 text-sm leading-relaxed font-serif italic">
              Wear the role. Own the moment. Shop merch tied to the scenes and community cuts you love.
            </p>
            <button className="self-start bg-[#00FFCC] text-[#0A0A0C] font-black px-6 py-3 text-xs tracking-widest uppercase rounded-sm shadow-lg shadow-[#00FFCC]/20 hover:scale-[1.02] transition-transform">
              Add Merchandise
            </button>
          </div>
          {/* Dynamic Wireframe Visual Display Node Box Frame */}
          <div className="w-full max-w-md aspect-[16/10] bg-neutral-900 border-2 border-dashed border-white/10 flex items-center justify-center text-center p-4 relative shrink-0">
            <span className="text-white/10 text-xs font-mono tracking-widest uppercase select-none">[ Dynamic Identity Media Display Canvas ]</span>
          </div>
        </section>

        {/* 🏷️ CAMPAIGN EXCLUSIVE DROPS PANEL SECTION */}
        <section className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-between items-end border-b border-white/5 pb-2">
            <div>
              <span className="text-[10px] text-[#FF007F] font-black uppercase tracking-widest">Campaign Exclusive Drop</span>
              <h3 className="text-white font-black text-lg tracking-wide mt-0.5">BE THE LEAD—LIMITED COLLECTION</h3>
            </div>
            <div className="bg-[#FF007F]/10 border border-[#FF007F]/30 text-[#FF007F] font-mono text-xs px-3 py-1.5 rounded-sm tracking-widest animate-pulse">
              Drops ends in: 02:14:39
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ALL_PRODUCTS.slice(0, 2).map((item) => (
              <div key={item.id} className="bg-[#0A0A0C] border border-white/15 p-6 rounded-lg flex flex-col justify-between gap-4 group">
                <div>
                  <span className="bg-[#00FFCC] text-[#0A0A0C] font-sans font-black text-[9px] tracking-widest px-2.5 py-1 rounded-sm uppercase">{item.tag}</span>
                  <h4 className="text-[#F5F5F7] font-black text-base mt-3 tracking-wide group-hover:text-[#00FFCC] transition-colors">{item.name}</h4>
                  <span className="text-gray-400 font-mono text-sm block mt-1">{item.price}</span>
                </div>
                <button onClick={() => setCart(prev => [...prev, item.id])} className="w-full bg-[#FF007F] text-white font-black py-3.5 text-xs tracking-widest uppercase shadow-md shadow-[#FF007F]/10 rounded-sm active:scale-[0.99] transition-transform">
                  View Item
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 🔍 FILTER ENGINE LAYOUT BLOCK CONTAINER */}
        <section className="w-full bg-[#0A0A0C] border border-white/5 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-white font-black text-base tracking-widest uppercase md:self-start">BROWSE ALL MERCHANDISE</h3>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 flex-1 max-w-2xl justify-end">
            <div className="flex-1 sm:max-w-xs flex flex-col gap-1.5">
              <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Item Type</label>
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="bg-[#111217] border border-white/10 text-xs font-bold text-white px-4 py-3 rounded-md focus:border-[#00FFCC] outline-none">
                {['All Types', 'Apparel', 'Poster/Print', 'Home Decor', 'Accessory', 'Digital Collectible'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="flex-1 sm:max-w-xs flex flex-col gap-1.5">
              <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Associated Scene</label>
              <input type="text" placeholder="Search by scene..." value={searchScene} onChange={(e) => setSearchScene(e.target.value)} className="bg-[#111217] border border-white/10 text-xs text-white px-4 py-3 rounded-md focus:border-[#00FFCC] outline-none placeholder-gray-600" />
            </div>

            <button onClick={() => { setSelectedType('All Types'); setSearchScene(''); }} className="bg-[#FF007F] text-white font-black px-6 py-3 text-xs tracking-widest uppercase rounded-md self-end h-11 transition-all active:scale-[0.98]">
              Apply Filters
            </button>
          </div>
        </section>

        {/* 📦 BROWSE ITEM DIRECT GRID SECTION */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-[#0A0A0C] border border-white/5 p-4 rounded-lg flex flex-col justify-between gap-4 group transition-all hover:border-white/20">
              <div className="w-full aspect-square bg-[#111217] flex flex-col justify-center items-center text-center p-3 relative">
[ {product.type} ]{product.tag === 'Exclusive' && {product.tag}}{product.type}{product.name}{product.price}<button onClick={() => setCart(prev => [...prev, product.id])} className="w-full bg-transparent border border-white/10 text-gray-400 group-hover:text-[#0A0A0C] group-hover:bg-[#00FFCC] group-hover:border-[#00FFCC] font-black py-3 text-[10px] tracking-widest uppercase transition-all rounded-sm">Details))}{/* 🎬 SCENE PACK COLLECTIONS MATRIX SLOTS SECTION */}{/* Floating Shopping Tray Widget Overlay */}{cart.length > 0 && (🛍️ SHOPPING BAG{cart.length}<button onClick={() => setCart([])} className="text-[10px] border-l border-[#0A0A0C]/20 pl-2 opacity-60 hover:opacity-100 uppercase">Clear)});}