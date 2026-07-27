import React, { useState } from 'react';

const ALL_PRODUCTS = [
  { id: 'p1', name: 'RHYTHM STAGE EXCLUSIVE PRINT', price: '$24.99', type: 'Poster/Print', desc: 'Premium poster celebrating the best Rhythm Wars performances.', scene: 'Rhythm Stage', tag: 'Standard' },
  { id: 'p2', name: 'URBAN LEGEND UNISEX HOODIE', price: '$54.99', type: 'Apparel', desc: 'Classic hoodie with urban hero iconography.', scene: 'Urban Legend', tag: 'Standard' },
  { id: 'p6', name: 'SHADOWSTRIKE POSTER SERIES VOL.1', price: '$19.99', type: 'Poster/Print', desc: 'High-quality print poster capturing the most iconic Shadowstrike scenes.', scene: 'Shadowstrike', tag: 'Exclusive' },
  { id: 'p7', name: 'NEON FRONTIER HERO TEE', price: '$34.99', type: 'Apparel', desc: 'Limited-edition campaign tee featuring the Hero emblem.', scene: 'Neon Frontier', tag: 'Exclusive' }
];

export default function StoreView({ onNavigate }) {
  const [cart, setCart] = useState([]);

  return (
    <div className="w-full min-h-screen bg-[#111217] text-white flex antialiased">
      <aside className="w-64 bg-[#0A0A0C] border-r border-white/5 p-6 flex flex-col gap-6 shrink-0">
        <div className="font-black text-xs tracking-widest">ROLEVERSE STORE</div>
        <button onClick={() => onNavigate('profile')} className="text-left text-xs text-gray-400 hover:text-white uppercase">▪ Home</button>
        <button onClick={() => onNavigate('explore')} className="text-left text-xs text-gray-400 hover:text-white uppercase">▪ Explore</button>
        <button onClick={() => onNavigate('community')} className="text-left text-xs text-gray-400 hover:text-white uppercase">▪ Community</button>
        <button onClick={() => onNavigate('avatar_builder')} className="text-left text-xs text-gray-400 hover:text-white uppercase">▫ My Avatar</button>
      </aside>
      <main className="flex-1 p-10 flex flex-col gap-6">
        <h2 className="text-2xl font-black">STORE MERCHANDISE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ALL_PRODUCTS.map((product) => (
            <div key={product.id} className="bg-[#0A0A0C] border border-white/5 p-4 rounded-lg flex flex-col justify-between gap-4">
              <div>
                <span className="text-gray-500 text-[8px] font-mono tracking-widest block uppercase">{product.type}</span>
                <h4 className="font-black text-xs mt-1 uppercase">{product.name}</h4>
                <p className="text-gray-400 text-[10px] mt-1">{product.desc}</p>
                <span className="text-white font-mono text-xs font-bold block mt-2">{product.price}</span>
              </div>
              <button onClick={() => setCart(prev => [...prev, product.id])} className="w-full bg-purple-600 text-white font-black py-2 text-[10px] uppercase rounded-sm">Add to Bag</button>
            </div>
          ))}
        </div>
        {cart.length > 0 && <div className="fixed bottom-6 right-6 bg-[#00FFCC] text-black px-4 py-3 rounded-full font-black text-xs">🛍️ CART: {cart.length}</div>}
      </main>
    </div>
  );
}
