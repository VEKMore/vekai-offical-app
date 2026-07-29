import React, { useState } from 'react';

// ==========================================================================
// 📊 HIGH FIDELITY DESIGN REGISTRY (PIXEL PERFECT SPECIFICATION)
// ==========================================================================
const LEADERBOARD_ITEMS = [
  { rank: '1', name: '@Alpha_Valkyrie', metrics: '96.4K PV', status: '+15.2%' },
  { rank: '2', name: '@Cyber_Ronin_X', metrics: '84.1K PV', status: '+8.4%' },
  { rank: '3', name: '@MetaCreator_Alpha', metrics: '43.4K PV', status: '+2.1%' }
];

const CROWN_WINNERS = [
  { id: 'cw1', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', creator: '@Alpha_Valkyrie', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80' },
  { id: 'cw2', title: 'GROOVE ODYSSEY: NEON STAGE', creator: '@Cyber_Ronin_X', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80' }
];

const GENERAL_SCENES = [
  { id: 'gs1', tag: 'Action Movie', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', desc: 'A high-octane action movie scene set in a dystopian city, featuring explosive stunts and hero-villain face-offs.', roles: '2 roles', views: '96.4K views', img: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
  { id: 'gs2', tag: 'AI Original', title: 'ORIGEN: AI DREAMSCAPE', desc: 'A fully AI-original high-concept dreamscape with surreal visuals and narrative arcs.', roles: '0 roles', views: '11.5K views', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  { id: 'gs3', tag: 'Musical/Dance', title: 'GROOVE ODYSSEY: NEON STAGE', desc: 'A vibrant musical dance scene bursting with neon lights and rhythm.', roles: '1 role', views: '51.2K views', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80', color: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
  { id: 'gs4', tag: 'Fashion Show', title: 'VELVET RUNWAY: SEASON ZERO', desc: 'A glamorous fashion show runway scene submitted by a community creator.', roles: '0 roles', views: '46.7K views', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', color: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20' }
];

const FEED_STREAMS = [
  { id: 'f1', user: 'testuser@example.com', avatar: '🎭', timestamp: '2 hours ago', text: 'Just completed my first face-swap mapping inside the Shadowstrike block grid. The rendering pipelines processed the alignment maps perfectly without manual warp adjustments.', likes: '1,432', comments: '24' },
  { id: 'f2', id_tag: 'alpha_creator_99', avatar: '🦾', timestamp: '5 hours ago', text: 'The capsule merch integrations tied to the Neon Stage are fully responsive. Zero-lag screen-to-bag operations are solid.', likes: '982', comments: '13' },
  { id: 'f3', id_tag: 'valkyrie_mesh', avatar: '⚡', timestamp: '1 day ago', text: 'Casting deep physics meshes onto the Origen dreamscape baseline. Traditional costume details scale perfectly with no polygon intersection crashes.', likes: '542', comments: '8' }
];

export default function PerfectDesignEngine() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchFilter, setSearchFilter] = useState('');

  const displayedScenes = GENERAL_SCENES.filter((scene) => {
    const query = searchFilter.toLowerCase();
    return scene.title.toLowerCase().includes(query) || scene.tag.toLowerCase().includes(query);
  });

  return (
    <div className="min-h-screen bg-[#0e0e12] text-[#f5f5f7] font-sans">
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/5 bg-[#070709] px-6 md:px-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-[#00ffcc] text-[10px] font-black text-black">R</div>
            <span className="text-xs font-black tracking-[0.25em] text-white">ROLEVERSE</span>
          </div>
          <nav className="hidden items-center gap-6 text-[11px] font-black uppercase tracking-widest text-gray-400 md:flex">
            <button onClick={() => setActiveTab('home')} className={`bg-transparent outline-none transition-colors ${activeTab === 'home' ? 'border-b-2 border-purple-500 pb-5 pt-5 text-white' : 'hover:text-white'}`}>Home</button>
            <button onClick={() => setActiveTab('explore')} className={`bg-transparent outline-none transition-colors ${activeTab === 'explore' ? 'border-b-2 border-purple-500 pb-5 pt-5 text-white' : 'hover:text-white'}`}>Explore</button>
            <button onClick={() => setActiveTab('community')} className={`bg-transparent outline-none transition-colors ${activeTab === 'community' ? 'border-b-2 border-purple-500 pb-5 pt-5 text-white' : 'hover:text-white'}`}>Community</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-[10px] font-mono tracking-wider text-gray-500 sm:block">SYSTEM NODE SECURE // ONLINE</span>
          <div className="h-1.5 w-1.5 rounded-full bg-[#00ffcc]" />
        </div>
      </header>

      <div className="flex min-h-screen pt-16">
        <aside className="hidden min-h-[calc(100vh-64px)] w-64 shrink-0 flex-col justify-between border-r border-white/5 bg-[#070709] p-6 md:flex">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.01] p-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-neutral-800 text-xs">👤</div>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-[11px] font-black text-white">testuser@example.com</span>
                <span className="mt-0.5 text-[9px] font-black uppercase tracking-wider text-gray-500">Creator Workspace</span>
              </div>
            </div>

            <div className="px-1 text-[9px] font-black uppercase tracking-widest text-gray-500">Navigation Hub</div>
            <nav className="flex flex-col gap-1 text-xs font-black uppercase tracking-wider text-gray-400">
              <button onClick={() => setActiveTab('home')} className={`rounded-md border-0 px-3 py-2.5 text-left outline-none transition-all ${activeTab === 'home' ? 'border-l-2 border-[#00ffcc] bg-[#9d4edd]/10 text-[#00ffcc]' : 'bg-transparent hover:bg-white/5'}`}>▪ My Feed Dashboard</button>
              <button onClick={() => setActiveTab('explore')} className={`rounded-md border-0 px-3 py-2.5 text-left outline-none transition-all ${activeTab === 'explore' ? 'border-l-2 border-[#00ffcc] bg-[#9d4edd]/10 text-[#00ffcc]' : 'bg-transparent hover:bg-white/5'}`}>▫ Explore Library</button>
              <button onClick={() => setActiveTab('community')} className={`rounded-md border-0 px-3 py-2.5 text-left outline-none transition-all ${activeTab === 'community' ? 'border-l-2 border-[#00ffcc] bg-[#9d4edd]/10 text-[#00ffcc]' : 'bg-transparent hover:bg-white/5'}`}>▫ Stage Elections</button>
            </nav>
          </div>

          <button onClick={() => setActiveTab('explore')} className="self-start rounded-md border-0 bg-black/20 px-3 py-2 text-[9px] font-black uppercase tracking-widest text-white transition-colors hover:bg-black/30">Cast Scene</button>
        </aside>

        <main className="flex-1 overflow-auto p-6 md:p-8">
          {activeTab === 'home' && (
            <div className="space-y-6">
              <section className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-purple-600/20 via-[#0e0e12] to-[#00ffcc]/10 p-6 md:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl space-y-4">
                    <div className="inline-flex items-center rounded-full border border-[#00ffcc]/20 bg-[#00ffcc]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-[#00ffcc]">Live Scene Studio</div>
                    <h1 className="text-3xl font-black tracking-[0.2em] text-white sm:text-4xl">STEAL THE SPOTLIGHT</h1>
                    <p className="max-w-xl text-sm leading-7 text-gray-300">Cast your avatar features into premium cinematic scenes live, then publish instantly to the creator feed.</p>
                  </div>
                  <button onClick={() => setActiveTab('explore')} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white transition-colors hover:bg-white/20">Open Library</button>
                </div>
              </section>

              <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-white/10 bg-[#111116] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Leaderboard</h2>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#00ffcc]">Weekly Pulse</span>
                  </div>
                  <div className="space-y-3">
                    {LEADERBOARD_ITEMS.map((item) => (
                      <div key={item.rank} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00ffcc]/15 text-sm font-black text-[#00ffcc]">#{item.rank}</div>
                          <div>
                            <div className="text-sm font-black text-white">{item.name}</div>
                            <div className="text-[11px] text-gray-500">{item.metrics}</div>
                          </div>
                        </div>
                        <div className="text-sm font-black text-[#00ffcc]">{item.status}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111116] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Crown Winners</h2>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-purple-400">Featured</span>
                  </div>
                  <div className="space-y-3">
                    {CROWN_WINNERS.map((winner) => (
                      <div key={winner.id} className="overflow-hidden rounded-2xl border border-white/5 bg-black/20">
                        <img src={winner.img} alt={winner.title} className="h-28 w-full object-cover" />
                        <div className="p-4">
                          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">Crown</div>
                          <div className="mt-2 text-sm font-black text-white">{winner.title}</div>
                          <div className="mt-1 text-[11px] text-gray-500">{winner.creator}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-[#111116] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Creator Feed</h2>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#00ffcc]">Synced</span>
                </div>
                <div className="space-y-3">
                  {FEED_STREAMS.map((post) => (
                    <div key={post.id} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9d4edd]/20 text-lg">{post.avatar}</div>
                        <div>
                          <div className="text-sm font-black text-white">{post.user || post.id_tag}</div>
                          <div className="text-[11px] text-gray-500">{post.timestamp}</div>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-gray-300">{post.text}</p>
                      <div className="mt-3 flex gap-4 text-[11px] uppercase tracking-[0.2em] text-gray-500">
                        <span>♥ {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'explore' && (
            <div className="space-y-6">
              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#111116] p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Explore Library</h2>
                  <p className="mt-2 text-sm text-gray-300">Search and preview cinematic scene templates.</p>
                </div>
                <input
                  value={searchFilter}
                  onChange={(event) => setSearchFilter(event.target.value)}
                  placeholder="Search scenes"
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white outline-none"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {displayedScenes.map((scene) => (
                  <div key={scene.id} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111116]">
                    <img src={scene.img} alt={scene.title} className="h-36 w-full object-cover" />
                    <div className="p-4">
                      <div className={`inline-flex rounded-full border px-2 py-1 text-[10px] font-black uppercase tracking-[0.3em] ${scene.color}`}>{scene.tag}</div>
                      <h3 className="mt-3 text-sm font-black text-white">{scene.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-400">{scene.desc}</p>
                      <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-gray-500">
                        <span>{scene.roles}</span>
                        <span>{scene.views}</span>
                      </div>
                      <button className="mt-4 w-full rounded-lg bg-purple-600 px-3 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white transition-colors hover:bg-purple-700">Cast Avatar Into Scene</button>
                    </div>
                  </div>
                ))}
              </div>

              {displayedScenes.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-[#111116] p-6 text-center text-sm text-gray-400">No active scene templates match your current search.</div>
              )}
            </div>
          )}

          {activeTab === 'community' && (
            <div className="rounded-2xl border border-white/10 bg-[#111116] p-6">
              <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Community Hub</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300">Join live polls, creator showcases, and world-building challenges from the Roleverse network.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="text-sm font-black text-white">Account Configuration</div>
                  <p className="mt-2 text-sm text-gray-400">Tune scene permissions, moderation, and publishing preferences.</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="text-sm font-black text-white">Creator Spotlight</div>
                  <p className="mt-2 text-sm text-gray-400">Highlight your latest scene drops and community reactions.</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
