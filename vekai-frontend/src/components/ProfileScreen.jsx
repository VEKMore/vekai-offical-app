import React from 'react';

const HISTORY = [
  { id: '1', thumb: 'https://fals.ai', pv: '12.4K' },
  { id: '2', thumb: 'https://fals.ai', pv: '8.9K' },
  { id: '3', thumb: 'https://fals.ai', pv: '22.1K' },
];

export default function ProfileScreen() {
  return (
    <div className="w-full h-full bg-cyberBlack pt-14 flex flex-col overflow-y-auto pb-24">
      
      {/* BIO SUMMARY ACCOUNT HEADER CARD */}
      <div className="w-full flex flex-col items-center px-6 text-center border-b border-white/5 pb-6">
        <div className="w-20 h-20 rounded-full bg-white/5 border border-cyberTeal flex justify-center items-center text-3xl shadow-xl shadow-cyberTeal/5">🎭</div>
        <h3 className="text-white text-sm font-black tracking-widest uppercase mt-4">@MetaCreator_Alpha</h3>
        <p className="text-gray-400 text-xs mt-1 px-4 leading-relaxed">Dismantling real-world production limitations. Exploring identities.</p>
        
        {/* STATS AGGREGATOR BADGES */}
        <div className="w-full flex justify-around mt-5 border-t border-white/5 pt-4">
          <div><span className="block text-white font-black text-sm">3</span><span className="text-gray-500 text-[9px] font-black uppercase tracking-wider">Created</span></div>
          <div><span className="block text-cyberTeal font-black text-sm">43.4K</span><span className="text-gray-500 text-[9px] font-black uppercase tracking-wider">Total PV</span></div>
        </div>
      </div>

      {/* 3-COLUMN USER GRID GALLERY REVIEWS */}
      <div className="w-full grid grid-cols-3 gap-0.5 p-0.5 mt-2">
        {HISTORY.map((item) => (
          <div key={item.id} className="aspect-[3/4] bg-neutral-900 relative border border-white/5 group overflow-hidden">
            <img src={item.thumb} alt="Transformation summary thumbnail" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            <div className="absolute bottom-2 left-2 bg-black/60 px-1.5 py-0.5 rounded text-[9px] font-bold text-white z-10">👁️ {item.pv}</div>
            
            {/* SHOPPING CART INDICATOR ACCENT BADGE BUTTON */}
            <button onClick={() => alert("Launching embedded shoppable card overlay parameters...")} className="absolute top-2 right-2 w-6 h-6 rounded-full bg-cyberBlack/80 border border-white/10 flex justify-center items-center text-[10px] text-cyberTeal shadow-md cursor-pointer z-10 active:scale-90 transition-transform">🛒</button>
          </div>
        ))}
      </div>

    </div>
  );
}
