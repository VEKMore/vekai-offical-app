import React, { useState } from 'react';

const STORE_ITEMS = [
  { id: 'p1', name: 'RHYTHM STAGE EXCLUSIVE PRINT', price: '$24.99', type: 'Poster/Print', desc: 'Premium poster celebrating the best Rhythm Wars performances.', scene: 'Rhythm Stage' },
  { id: 'p2', name: 'URBAN LEGEND UNISEX HOODIE', price: '$54.99', type: 'Apparel', desc: 'Classic hoodie with urban hero iconography, available in multiple sizes.', scene: 'Urban Legend' },
  { id: 'p3', name: 'GROOVE ODYSSEY CANVAS PRINT', price: '$44.99', type: 'Home Decor', desc: 'Canvas wall art print from the iconic Groove Odyssey stage.', scene: 'Groove Odyssey' },
  { id: 'p4', name: 'VELVET RUNWAY ENAMEL PIN SET', price: '$14.99', type: 'Accessory', desc: 'Handcrafted enamel pin set inspired by the Velvet Runway Fashion Show scene.', scene: 'Velvet Runway' },
  { id: 'p5', name: 'GROOVE ODYSSEY DIGITAL COLLECTIBLE TOKEN', price: '$9.99', type: 'Digital Collectible', desc: 'A rare digital collectible tied to the Groove Odyssey Musical scene.', scene: 'Groove Odyssey' },
  { id: 'p6', name: 'SHADOWSTRIKE POSTER SERIES VOL.1', price: '$19.99', type: 'Poster/Print', desc: 'High-quality print poster capturing the most iconic Shadowstrike scenes.', scene: 'Shadowstrike' },
  { id: 'p7', name: 'NEON FRONTIER HERO TEE', price: '$34.99', type: 'Apparel', desc: 'Limited-edition campaign tee featuring the Hero emblem from Neon Frontier.', scene: 'Neon Frontier' }
];

const SCENE_COLLECTIONS = [
  "Neon Frontier", "Shadowstrike", "Rhythm Stage",
  "Urban Legend", "Groove Odyssey", "Velvet Runway",
  "Synth Wave", "Matrix Cut", "Hyper Core"
];

export default function StoreView({ onNavigate }) {
  const [selectedType, setSelectedType] = useState('All Types');
  const [searchScene, setSearchScene] = useState('');
  const [cart, setCart] = useState([]);

  const filteredProducts = STORE_ITEMS.filter(product => {
    const matchesType = selectedType === 'All Types' || product.type === selectedType;
    const matchesScene = searchScene === '' || product.name.toLowerCase().includes(searchScene.toLowerCase()) || product.scene.toLowerCase().includes(searchScene.toLowerCase());
    return matchesType && matchesScene;
  });

  return (
    <div className="w-full min-h-screen bg-[#0e0e12] text-white font-sans flex flex-col antialiased select-none">
      
      {/* 🌐 GLOBAL APP HEADER */}
      <header className="w-full h-16 bg-[#070709] border-b border-white/5 px-6 flex justify-between items-center shrink-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-[#00ffcc] flex items-center justify-center text-black font-black text-[10px]">R</div>
            <span className="font-sans font-black text-xs tracking-[0.2em] text-gray-500">ROLEVERSE</span>
          </div>
          <nav className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <button onClick={() => onNavigate?.('profile')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Home</button>
            <button onClick={() => onNavigate?.('explore')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Explore</button>
            <button onClick={() => onNavigate?.('community')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Community</button>
            <button className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Campaigns</button>
            <button onClick={() => onNavigate?.('store')} className="text-white transition-colors cursor-pointer bg-transparent border-0 outline-none">Store</button>
          </nav>
        </div>
        <button className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider bg-transparent border-0 outline-none">Log Out</button>
      </header>

      {/* LOWER DIVISION WORKSPACE SPLIT */}
      <div className="w-full flex flex-1 overflow-hidden">
        
        {/* 静态左侧边栏 */}
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
              <button onClick={() => onNavigate?.('store')} className="text-left text-[#00ffcc] transition-colors cursor-pointer bg-transparent border-0 outline-none">Merchandise Store</button>
            </nav>

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

        {/* 💻 主要商品管理中心区域 */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto flex flex-col gap-8 w-full max-w-7xl mx-auto">
          
          {/* THE ROLEVERSE STORE MASTER BANNER */}
          <section className="w-full bg-[#15141b] border border-white/5 p-6 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
            <div className="flex flex-col gap-3 max-w-xl z-10">
              <h2 className="text-3xl font-black tracking-wide text-white uppercase">THE ROLEVERSE STORE</h2>
              <p className="text-gray-400 text-xs leading-relaxed max-w-md font-serif italic">
                Wear the role. Own the moment. Shop merch tied to the scenes and community cuts you love.
              </p>
              <button className="bg-[#ffb703] text-black font-black px-5 py-2.5 text-[10px] tracking-widest uppercase rounded-md shadow-md shadow-[#ffb703]/10 self-start">
                Add Merchandise
              </button>
            </div>
            <div className="w-[300px] aspect-[16/10] bg-[#070709] border border-white/10 flex flex-col justify-center items-center text-center rounded-lg shrink-0 shadow-2xl relative overflow-hidden">
              <img src="https://fals.ai" alt="Store Presentation Video frame reference" className="w-full h-full object-cover opacity-80" />
            </div>
          </section>

          {/* CAMPAIGN EXCLUSIVE EVENT TIME DROPS BAR */}
          <section className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between items-end border-b border-white/5 pb-2">
              <div>
                <span className="text-[9px] text-[#ff0055] font-black uppercase tracking-widest block">Campaign Exclusive Drop</span>
                <h3 className="text-white font-black text-base tracking-wide mt-0.5">BE THE LEAD—LIMITED COLLECTION</h3>
              </div>
              <div className="bg-[#ff0055]/10 border border-[#ff0055]/20 text-[#ff0055] font-mono text-[11px] px-3 py-1.5 rounded-sm tracking-widest font-bold">
                Drops ends in: 02:14:39
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#070709] border border-white/10 p-5 rounded-lg flex flex-col gap-4 justify-between group">
                <div className="flex flex-col gap-2">
                  <span className="bg-[#ffb703] text-black font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-sm self-start uppercase">Exclusive</span>
                  <h4 className="text-white font-black text-sm mt-1 tracking-wide group-hover:text-[#00ffcc] transition-colors">NEON FRONTIER HERO TEE</h4>
                  <span className="text-gray-400 font-mono text-xs font-bold">$34.99</span>
                </div>
                <button onClick={() => setCart(prev => [...prev, 'p7'])} className="w-full bg-[#9d4edd] text-white font-black py-3 text-[10px] tracking-widest uppercase rounded-md shadow-md">View Item</button>
              </div>

              <div className="bg-[#070709] border border-white/10 p-5 rounded-lg flex flex-col gap-4 justify-between group">
                <div className="flex flex-col gap-2">
ExclusiveSHADOWSTRIKE POSTER SERIES VOL.1$19.99<button onClick={() => setCart(prev => [...prev, 'p6'])} className="w-full bg-[#9d4edd] text-white font-black py-3 text-[10px] tracking-widest uppercase rounded-md shadow-md">View Item{/* CONTROL PARAMETERS BROWSE ALL MERCHANDISE FILTERS */}{/* MAIN PRODUCT CATALOGUE SHUNT GRID DISPLAY */}{filteredProducts.map((product) => ())}{/* CURATED SCENE COLLECTIONS SLOTS GRID */}{/* FLOATING ACTION CART HUD BASKET DISPLAY WIDGET OVERLAY */}{cart.length > 0 && (🛍️ CART COUNT{cart.length}<button onClick={() => setCart([])} className="text-[9px] border-l border-black/20 pl-2 opacity-60 hover:opacity-100 uppercase">Clear)});}