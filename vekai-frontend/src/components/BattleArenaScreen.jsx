import React, { useState } from 'react';

export default function BattleArenaScreen() {
  const [votes, setVotes] = useState({ creatorA: 1842, creatorB: 2105 });
  const [hasVoted, setHasVoted] = useState(false);

  const total = votes.creatorA + votes.creatorB;
  const pctA = Math.round((votes.creatorA / total) * 100);
  const pctB = Math.round((votes.creatorB / total) * 100);

  const castArenaVote = (target) => {
    if (hasVoted) return;
    setVotes(prev => ({ ...prev, [target]: prev[target] + 1 }));
    setHasVoted(true);
  };

  return (
    <div className="w-full h-full bg-cyberBlack p-4 pt-14 flex flex-col justify-between overflow-y-auto pb-24">
      {/* Screen Title Block */}
      <div className="w-full flex justify-between items-center mb-4">
        <div>
          <h2 className="text-white text-sm font-black tracking-widest uppercase">BATTLE ARENA</h2>
          <p className="text-gray-400 text-[10px] mt-0.5">Swipe or tap to vote on trending transformation clashes.</p>
        </div>
        <div className="bg-cyberPink/10 px-3 py-1 rounded-full border border-cyberPink/20 text-cyberPink text-[9px] font-black tracking-wider animate-pulse">LIVE VOTING</div>
      </div>

      {/* SPLIT COMBAT GRID WRAPPER */}
      <div className="flex-1 w-full flex flex-col gap-2 rounded-2xl overflow-hidden border border-white/10">
        
        {/* UPPER CONTENDER CARD: CREATOR A */}
        <div className="flex-1 bg-neutral-900 relative flex items-center justify-center p-4 border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <div className="text-white/10 font-bold text-xs uppercase z-0 tracking-widest">[ Looping Competitor Cut A ]</div>
          <div className="absolute bottom-4 left-4 z-20">
            <span className="text-white text-xs font-black drop-shadow">@Alpha_Valkyrie</span>
            <span className="block text-cyberTeal text-[10px] font-bold">Score: {hasVoted ? `${pctA}%` : votes.creatorA}</span>
          </div>
          <button onClick={() => castArenaVote('creatorA')} disabled={hasVoted} className="absolute right-4 bottom-4 bg-cyberTeal text-cyberBlack text-[10px] font-black px-4 py-2.5 rounded-full z-20 cursor-pointer shadow-lg active:scale-95 disabled:opacity-40 disabled:cursor-default">⚡ VOTE</button>
        </div>

        {/* LOWER CONTENDER CARD: CREATOR B */}
        <div className="flex-1 bg-neutral-800 relative flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <div className="text-white/10 font-bold text-xs uppercase z-0 tracking-widest">[ Looping Competitor Cut B ]</div>
          <div className="absolute bottom-4 left-4 z-20">
            <span className="text-white text-xs font-black drop-shadow">@Cyber_Ronin_X</span>
            <span className="block text-cyberPink text-[10px] font-bold">Score: {hasVoted ? `${pctB}%` : votes.creatorB}</span>
          </div>
          <button onClick={() => castArenaVote('creatorB')} disabled={hasVoted} className="absolute right-4 bottom-4 bg-cyberPink text-white text-[10px] font-black px-4 py-2.5 rounded-full z-20 cursor-pointer shadow-lg active:scale-95 disabled:opacity-40 disabled:cursor-default">🔥 VOTE</button>
        </div>

      </div>
    </div>
  );
}
