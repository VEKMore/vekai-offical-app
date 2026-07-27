import React from 'react';

export default function CommunityView({ onNavigate }) {
  return (
    <div className="w-full min-h-screen bg-[#111217] text-white flex">
      <aside className="w-64 bg-[#0A0A0C] border-r border-white/5 p-6 flex flex-col gap-6">
        <button onClick={() => onNavigate('profile')} className="text-left text-xs text-gray-400 hover:text-white uppercase">▪ Home</button>
      </aside>
      <main className="flex-1 p-10">
        <h2 className="text-2xl font-black uppercase">COMMUNITY STAGE</h2>
        <p className="text-gray-400 text-xs mt-2">Vote on trending transformation battles.</p>
      </main>
    </div>
  );
}
