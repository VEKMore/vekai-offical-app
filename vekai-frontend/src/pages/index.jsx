import React, { useState } from 'react';

const LEADERBOARD_ITEMS = [
  { rank: '01', name: 'testuser@example.com', score: '46,400', change: '+12.7%' },
  { rank: '02', name: 'Neon Frontier Challenge', score: '39,000', change: '+8.1%' },
  { rank: '03', name: 'Velvet Runway Challenge', score: '27,300', change: '+3.2%' }
];

const FEATURED_SCENES = [
  { id: 'f1', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', label: 'Action Movie', image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80', role: 'Hero', views: '72,000' },
  { id: 'f2', title: 'ORIGEN: AI DREAMSCAPE', label: 'AI Original', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80', role: 'AI Role', views: '91,500' },
  { id: 'f3', title: 'GROOVE ODYSSEY: NEON STAGE', label: 'Musical/Dance', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80', role: 'Mentor', views: '27,600' }
];

const SCENE_LIBRARY = [
  { id: 'gs1', category: 'Action Movie', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', desc: 'A high-octane action movie scene set in a dystopian city, featuring explosive stunts and hero-villain face-offs.', roles: '2 roles', views: '96,400', image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80' },
  { id: 'gs2', category: 'AI Original', title: 'ORIGEN: AI DREAMSCAPE', desc: 'A fully AI-original high-concept dreamscape with surreal visuals and narrative arcs.', roles: '0 roles', views: '91,500', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80' },
  { id: 'gs3', category: 'Musical/Dance', title: 'GROOVE ODYSSEY: NEON STAGE', desc: 'A vibrant musical dance scene bursting with neon lights and rhythm.', roles: '1 role', views: '27,600', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80' },
  { id: 'gs4', category: 'Fashion Show', title: 'VELVET RUNWAY: SEASON ZERO', desc: 'A glamorous fashion show runway scene submitted by a community creator.', roles: '0 roles', views: '46,700', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80' },
  { id: 'gs5', category: 'News Broadcast', title: 'BREAKING NOW: STUDIO 7 LIVE', desc: 'A live-style news broadcast scene with an AI anchor delivering breaking news.', roles: '1 role', views: '51,000', image: 'https://images.unsplash.com/photo-1523293834415-9bc1e1b80baf?auto=format&fit=crop&w=900&q=80' },
  { id: 'gs6', category: 'TV Drama', title: 'WHISPERS IN THE WARD', desc: 'An emotional TV drama unfolding in a hospital ward, with complex character dynamics.', roles: '2 roles', views: '43,500', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80' },
  { id: 'gs7', category: 'Sports Event', title: 'CHAMPIONSHIP CLASH: FINAL QUARTER', desc: 'An intense sports event scene capturing the final moments of a championship game.', roles: '0 roles', views: '18,200', image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=900&q=80' },
  { id: 'gs8', category: 'Virtual Comic', title: 'PANEL 42: THE AWAKENING', desc: 'A virtual comic-style scene exploring a superhero origin story, AI-generated.', roles: '0 roles', views: '39,800', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80' },
  { id: 'gs9', category: 'Circus Art', title: 'MIDNIGHT CARNIVAL SPECTACULAR', desc: 'A whimsical circus and performance art scene full of acrobatics and color.', roles: '1 role', views: '12,900', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80' }
];

const MERCH_ITEMS = [
  { id: 'm1', title: 'NEON FRONTIER HERO TEE', category: 'Apparel', price: '$34.99' },
  { id: 'm2', title: 'SHADOWSTRIKE POSTER SERIES VOL.1', category: 'Poster/Print', price: '$19.99' },
  { id: 'm3', title: 'GROOVE ODYSSEY DIGITAL COLLECTIBLE TOKEN', category: 'Digital Collectible', price: '$9.99' },
  { id: 'm4', title: 'VELVET RUNWAY ENAMEL PIN SET', category: 'Accessory', price: '$14.99' },
  { id: 'm5', title: 'GROOVE ODYSSEY CANVAS PRINT', category: 'Home Decor', price: '$44.99' },
  { id: 'm6', title: 'URBAN LEGEND UNISEX HOODIE', category: 'Apparel', price: '$54.99' }
];

const CROWN_CUTS = [
  { id: 'c1', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', user: 'testuser@example.com', image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80' },
  { id: 'c2', title: 'GROOVE ODYSSEY: NEON STAGE', user: 'testuser@example.com', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80' }
];

const TRENDING_FEED = [
  { id: 't1', text: 'Just a quiet drama moment with Dr. Sollis. More to come.', likes: '210', shares: '45' },
  { id: 't2', text: 'Dropped my hero arc in Shadowstrike — this is the one. #NeonFrontier', likes: '18,700', shares: '3,400' },
  { id: 't3', text: 'Vibing with the Maestro in Groove Odyssey ✨ Rhythm hits different when you’re in the scene.', likes: '4,300', shares: '980' }
];

const TOP_NAV = [
  { key: 'home', label: 'Home' },
  { key: 'explore', label: 'Explore' },
  { key: 'community', label: 'Community' },
  { key: 'campaigns', label: 'Campaigns' },
  { key: 'store', label: 'Store' }
];

const SIDEBAR_NAV = [
  { key: 'home', label: 'My Avatar' },
  { key: 'explore', label: 'My Scenes' },
  { key: 'community', label: 'My Feed' },
  { key: 'campaigns', label: 'Active Campaigns' },
  { key: 'store', label: 'Merchandise Store' }
];

export default function RoleverseDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchFilter, setSearchFilter] = useState('');
  const [category, setCategory] = useState('All Categories');

  const filteredScenes = SCENE_LIBRARY.filter((scene) => {
    const query = searchFilter.toLowerCase();
    return (
      scene.title.toLowerCase().includes(query) ||
      scene.category.toLowerCase().includes(query) ||
      scene.desc.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[#090a0f] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07080f]/95 px-4 py-4 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <span className="text-sm font-black uppercase tracking-[0.35em] text-white/90">ROLEVERSE</span>
            <nav className="hidden items-center gap-5 text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 md:flex">
              {TOP_NAV.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`transition-colors ${activeTab === item.key ? 'text-white' : 'hover:text-white'} `}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:border-white/20 hover:bg-white/10">
            Log Out
          </button>
        </div>
      </header>

      <div className="pt-24">
        <div className="mx-auto flex w-full max-w-[1480px] gap-6 px-4 pb-12 sm:px-6 lg:px-8">
          <aside className="hidden w-80 shrink-0 flex-col gap-6 rounded-3xl border border-white/10 bg-[#0b0d16]/95 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.8)] md:flex">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-[#00ffcc] text-base font-black text-[#0b0d16]">A</div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.3em] text-white">testuser@example.com</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gray-500">Creator</p>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                {SIDEBAR_NAV.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-black uppercase tracking-[0.2em] transition ${activeTab === item.key ? 'bg-[#1a1d2e] text-[#00ffcc]' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#7b3fff]/70 to-[#00ffcc]/20 p-5 text-white shadow-lg shadow-[#00ffcc]/10">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-white/80">STEAL THE SPOTLIGHT</p>
              <p className="mt-3 text-sm leading-6 text-white/90">Cast yourself into a new scene and climb today’s leaderboard.</p>
              <button onClick={() => setActiveTab('explore')} className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[#0b0d16] px-4 py-3 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-white/10">
                Cast a Scene
              </button>
            </div>

            <div className="space-y-2 text-xs uppercase tracking-[0.35em] text-gray-500">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Community Hub</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Account Settings</div>
            </div>
          </aside>

          <main className="flex-1 space-y-6">
            {activeTab === 'home' && (
              <div className="space-y-6">
                <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
                  <div className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.8)] backdrop-blur-sm">
                    <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Your stage awaits</p>
                    <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-[-0.03em] text-white sm:text-5xl">Become anyone. Star in everything.</h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">Craft your boundless avatar into cinematic scenes with real-world experiences, and share your spotlight with the world.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <button className="rounded-2xl bg-[#7b3fff] px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#9562ff]">Explore Scenes</button>
                      <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10">Build Your Avatar</button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-6 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Campaign Challenges</p>
                          <h2 className="mt-3 text-lg font-black text-white">Live Leaderboard</h2>
                        </div>
                        <span className="rounded-full bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-gray-300">Top 3</span>
                      </div>
                      <div className="mt-6 space-y-3">
                        {LEADERBOARD_ITEMS.map((item) => (
                          <div key={item.rank} className="rounded-3xl border border-white/5 bg-white/5 p-4">
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">#{item.rank}</p>
                                <p className="mt-2 text-sm font-black text-white">{item.name}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-black text-[#00ffcc]">{item.score}</p>
                                <p className="mt-1 text-xs text-gray-400">{item.change}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-6 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Official Community Cuts</p>
                          <h2 className="mt-3 text-lg font-black text-white">Watch, vote & crown the best cuts</h2>
                        </div>
                        <button className="rounded-full bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/80 transition hover:bg-white/10">View all cuts</button>
                      </div>
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {CROWN_CUTS.map((item) => (
                          <div key={item.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                            <img src={item.image} alt={item.title} className="h-36 w-full object-cover" />
                            <div className="p-4">
                              <span className="inline-flex rounded-full bg-[#ffcc00]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.25em] text-[#ffcc00]">Official Cut</span>
                              <h3 className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-white">{item.title}</h3>
                              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-400">{item.user}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-6 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Featured Scenes</p>
                      <h2 className="mt-3 text-xl font-black text-white">Featured drops from the network</h2>
                    </div>
                    <button className="rounded-full bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/80 transition hover:bg-white/10">Browse the library</button>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {FEATURED_SCENES.map((scene) => (
                      <div key={scene.id} className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1120]">
                        <img src={scene.image} alt={scene.title} className="h-48 w-full object-cover" />
                        <div className="p-5">
                          <span className="inline-flex rounded-full bg-[#7b3fff]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-[#b2a8ff]">{scene.label}</span>
                          <h3 className="mt-4 text-lg font-black text-white">{scene.title}</h3>
                          <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-gray-400">
                            <span>{scene.role}</span>
                            <span>{scene.views} views</span>
                          </div>
                          <button className="mt-5 inline-flex items-center justify-center rounded-2xl bg-[#7b3fff] px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#9562ff]">Cast Into Scene</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-6 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Trending Creations</p>
                      <h2 className="mt-3 text-xl font-black text-white">Your generated video experiences</h2>
                    </div>
                    <button className="rounded-full bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/80 transition hover:bg-white/10">Follow</button>
                  </div>
                  <div className="mt-6 space-y-4">
                    {TRENDING_FEED.map((item) => (
                      <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-sm text-gray-200">{item.text}</p>
                          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                            <span>♥ {item.likes}</span>
                            <span>↻ {item.shares}</span>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <button className="rounded-2xl bg-[#7b3fff] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#9562ff]">Share</button>
                          <button className="rounded-2xl border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 transition hover:border-white/30">Edit</button>
                          <button className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-300 transition hover:bg-red-500/20">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'explore' && (
              <div className="space-y-6">
                <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-8 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                    <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Scene Library</p>
                    <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">Step into any story</h2>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">Browse cinematic scenes, pick your role, and cast your avatar into the spotlight. Or dream up something entirely new with the AI Scene Generator.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <button className="rounded-2xl bg-[#7b3fff] px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#9562ff]">Create New Scene</button>
                      <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10">Upload Scene</button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#10131f]/95 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                    <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80" alt="Scene banner" className="h-full min-h-[260px] w-full object-cover" />
                  </div>
                </section>

                <section className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-6 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Filter by Category</p>
                      <div className="flex flex-wrap gap-3">
                        <select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none">
                          <option>All Categories</option>
                          <option>Action Movie</option>
                          <option>AI Original</option>
                          <option>Musical/Dance</option>
                          <option>Fashion Show</option>
                        </select>
                        <input
                          value={searchFilter}
                          onChange={(event) => setSearchFilter(event.target.value)}
                          placeholder="Search by scene..."
                          className="min-w-[240px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none"
                        />
                      </div>
                    </div>
                    <button className="rounded-2xl bg-[#7b3fff] px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#9562ff]">Apply Filters</button>
                  </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {filteredScenes.map((scene) => (
                    <div key={scene.id} className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1120] shadow-[0_20px_60px_-50px_rgba(0,0,0,0.8)]">
                      <img src={scene.image} alt={scene.title} className="h-48 w-full object-cover" />
                      <div className="p-5">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-[#ffcc00]/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#ffcc00]">{scene.category}</span>
                          <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-white/80">Merch</span>
                        </div>
                        <h3 className="mt-4 text-lg font-black text-white">{scene.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-gray-400">{scene.desc}</p>
                        <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-gray-500">
                          <span>{scene.roles}</span>
                          <span>{scene.views}</span>
                        </div>
                        <button className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[#7b3fff] px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#9562ff]">Cast Into Scene</button>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="space-y-6">
                <section className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-8 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                  <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Community Stage</p>
                  <div className="mt-4 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                    <div className="max-w-2xl">
                      <h2 className="text-4xl font-black tracking-[-0.03em] text-white">Watch, vote & crown the best cuts</h2>
                      <p className="mt-4 text-sm leading-7 text-gray-400">Step into the spotlight. Vote for your favorite creator submissions and help crown each scene’s Official Community Cut.</p>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1120] shadow-[0_20px_60px_-50px_rgba(0,0,0,0.8)]">
                      <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80" alt="Community stage" className="h-56 w-full object-cover sm:h-64" />
                    </div>
                  </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                  {CROWN_CUTS.map((cut) => (
                    <div key={cut.id} className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1120] shadow-[0_20px_60px_-50px_rgba(0,0,0,0.8)]">
                      <img src={cut.image} alt={cut.title} className="h-64 w-full object-cover" />
                      <div className="p-5">
                        <div className="inline-flex rounded-full bg-[#ffcc00]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#ffcc00]">Official Cut</div>
                        <h3 className="mt-4 text-lg font-black text-white">{cut.title}</h3>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">{cut.user}</p>
                      </div>
                    </div>
                  ))}
                </section>

                <section className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-6 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Active Polls</p>
                      <h2 className="mt-3 text-xl font-black text-white">Cast your vote before time runs out</h2>
                    </div>
                    <span className="rounded-full bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-gray-300">Live</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {TRENDING_FEED.map((item) => (
                      <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-sm text-gray-200">{item.text}</p>
                          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                            <span>{item.likes} votes</span>
                            <span>{item.shares} comments</span>
                          </div>
                        </div>
                        <button className="mt-4 rounded-2xl bg-[#7b3fff] px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#9562ff]">Vote now</button>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'campaigns' && (
              <div className="space-y-6">
                <section className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-8 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Campaign Exclusive Drop</p>
                      <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white">Be the lead — limited collection</h2>
                    </div>
                    <div className="space-y-2 rounded-3xl bg-[#0d1120] p-5 shadow-[0_20px_60px_-50px_rgba(0,0,0,0.8)]">
                      <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Drops ends in</p>
                      <div className="text-2xl font-black text-white">02:14:39</div>
                    </div>
                  </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {MERCH_ITEMS.slice(0, 3).map((item) => (
                    <div key={item.id} className="rounded-3xl border border-white/10 bg-[#0d1120] p-6 shadow-[0_20px_60px_-50px_rgba(0,0,0,0.8)]">
                      <div className="inline-flex rounded-full bg-[#ffcc00]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#ffcc00]">Exclusive</div>
                      <h3 className="mt-4 text-lg font-black text-white">{item.title}</h3>
                      <p className="mt-4 text-sm text-gray-400">{item.category}</p>
                      <div className="mt-5 flex items-center justify-between gap-4">
                        <span className="text-lg font-black text-white">{item.price}</span>
                        <button className="rounded-2xl bg-[#7b3fff] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#9562ff]">View Item</button>
                      </div>
                    </div>
                  ))}
                </section>

                <section className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-6 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Browse all merchandise</p>
                      <p className="mt-2 text-sm text-gray-400">Shop merch tied to the scenes and community cuts you love.</p>
                    </div>
                    <button className="rounded-2xl bg-[#7b3fff] px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#9562ff]">Browse catalog</button>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {MERCH_ITEMS.map((item) => (
                      <div key={item.id} className="rounded-3xl border border-white/10 bg-[#0d1120] p-5">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-gray-400">{item.category}</div>
                        <h3 className="mt-3 text-sm font-black text-white">{item.title}</h3>
                        <div className="mt-4 flex items-center justify-between gap-4 text-sm font-black text-white">
                          <span>{item.price}</span>
                          <button className="rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10">Details</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'store' && (
              <div className="space-y-6">
                <section className="rounded-[32px] border border-white/10 bg-[#7b3fff]/10 p-8 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#bfb8ff]">The Roleverse Store</p>
                      <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white">Wear the role. Own the moment.</h2>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">Shop merch tied to the scenes and community cuts you love.</p>
                    </div>
                    <button className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#ffcc00] px-8 text-sm font-black uppercase tracking-[0.2em] text-[#0b0d16] transition hover:bg-[#ffe75a]">Add Merchandise</button>
                  </div>
                </section>

                <section className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-6 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                  <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Campaign Exclusive Drop</p>
                      <h2 className="mt-3 text-xl font-black text-white">Be the lead — limited collection</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {MERCH_ITEMS.slice(0, 2).map((item) => (
                        <div key={item.id} className="rounded-3xl border border-white/10 bg-[#0d1120] p-4">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{item.category}</p>
                          <h3 className="mt-2 text-sm font-black text-white">{item.title}</h3>
                          <p className="mt-4 text-lg font-black text-[#ffcc00]">{item.price}</p>
                          <button className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[#7b3fff] px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#9562ff]">View Item</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="rounded-[32px] border border-white/10 bg-[#10131f]/95 p-6 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.8)]">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#8e94a3]">Scene Collections</p>
                      <p className="mt-2 text-sm text-gray-400">Shop merch tied to this production.</p>
                    </div>
                    <button className="rounded-2xl bg-[#7b3fff] px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#9562ff]">View Collection</button>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="rounded-3xl border border-white/10 bg-[#0d1120] p-5">
                        <div className="h-24 rounded-2xl bg-white/5" />
                        <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-white">Shop merch tied to this production</p>
                        <button className="mt-5 rounded-full border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10">View Collection</button>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
