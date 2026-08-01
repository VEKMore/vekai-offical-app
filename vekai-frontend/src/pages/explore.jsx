import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';
import { fetchScenes, fetchCategories, fetchSessions } from '../lib/apiClient';

export default function ExplorePage() {
  const [category, setCategory] = useState('All Categories');
  const [session, setSession] = useState('All Sessions');
  const [query, setQuery] = useState('');
  const [scenes, setScenes] = useState([]);
  const [categories, setCategories] = useState(['All Categories']);
  const [sessions, setSessions] = useState(['All Sessions']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    Promise.all([fetchScenes(), fetchCategories(), fetchSessions()])
      .then(([fetchedScenes, fetchedCategories, fetchedSessions]) => {
        if (!mounted) return;
        setScenes(fetchedScenes);
        setCategories(fetchedCategories);
        setSessions(fetchedSessions);
      })
      .catch((err) => {
        console.error('Failed to load site data', err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  const filteredScenes = useMemo(
    () => scenes.filter((scene) => {
      const matchesCategory = category === 'All Categories' || scene.category === category;
      const matchesSession = session === 'All Sessions' || scene.session === session;
      const searchText = [scene.title, scene.category, scene.desc, scene.session].join(' ').toLowerCase();
      const matchesQuery = searchText.includes(query.toLowerCase());
      return matchesCategory && matchesSession && matchesQuery;
    }),
    [scenes, category, session, query]
  );

  return (
    <Layout>
      <div className="space-y-10 p-8">
        <section className="mx-auto max-w-[1200px] rounded-4xl border border-white/10 bg-cyberPanel/95 p-8 shadow-glow">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Explore</p>
              <h1 className="mt-3 text-4xl font-black text-white">Find your next scene, role, or creative collaborator.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-cyberGray">Browse curated scenes, filter by category, and jump into the latest role-based challenges across the network.</p>
            </div>
            <PrimaryButton href="/campaigns" className="h-14 inline-flex px-6" variant="primary">
              View Campaigns
            </PrimaryButton>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Available scenes</p>
                <div className="mt-4 text-sm text-cyberGray">{loading ? 'Loading...' : `${filteredScenes.length} scenes matching your filters.`}</div>
              </div>
              <div className="grid w-full gap-4 lg:grid-cols-[1.8fr_1fr_1fr]">
                <div className="space-y-2">
                  <label className="text-2xs uppercase tracking-wider text-cyberGray">Search</label>
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search by scene, genre, or session..."
                    className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-2xs uppercase tracking-wider text-cyberGray">Category</label>
                  <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none"
                  >
                    {categories.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-2xs uppercase tracking-wider text-cyberGray">Session</label>
                  <select
                    value={session}
                    onChange={(event) => setSession(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none"
                  >
                    {sessions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 masonry-grid">
            {filteredScenes.map((scene) => (
              <article key={scene.id} className="masonry-item group overflow-hidden rounded-3xl border border-white/10 bg-cyberPanelDeep shadow-glow-sm transition duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img src={scene.image} alt={scene.title} className="w-full object-cover transition duration-500 group-hover:scale-105 max-h-[420px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyberPurple/90 px-3 py-1 text-2xs font-black uppercase tracking-wider text-white">{scene.category}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-2xs uppercase tracking-wider text-cyberGray">{scene.session}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-black text-white">{scene.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-cyberGray line-clamp-3">{scene.desc}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-2xs uppercase tracking-wider text-cyberGrayMuted">
                    <span>{scene.views} views</span>
                    <span className="rounded-full bg-cyberPurple/10 px-3 py-1 font-black text-cyberPurpleLight">{scene.roles}</span>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <PrimaryButton href="/community" className="w-full px-4 py-2 text-2xs btn-small" variant="primary">
                      Cast Now
                    </PrimaryButton>
                    <PrimaryButton className="w-full px-4 py-2 text-2xs btn-small" variant="secondary">
                      Preview
                    </PrimaryButton>
                  </div>
                </div>
              </article>
            ))}
            {filteredScenes.length === 0 && (
              <div className="col-span-full rounded-4xl border border-white/10 bg-white/5 p-8 text-center text-sm text-cyberGray">
                No scenes match your search. Try a broader category or new keyword.
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
