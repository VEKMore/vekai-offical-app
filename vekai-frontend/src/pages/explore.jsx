import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';
import { fetchScenes, fetchCategories } from '../lib/apiClient';

export default function ExplorePage() {
  const [category, setCategory] = useState('All Categories');
  const [query, setQuery] = useState('');
  const [scenes, setScenes] = useState([]);
  const [categories, setCategories] = useState(['All Categories']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    Promise.all([fetchScenes(), fetchCategories()])
      .then(([fetchedScenes, fetchedCategories]) => {
        if (!mounted) return;
        setScenes(fetchedScenes);
        setCategories(fetchedCategories);
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
      const searchText = [scene.title, scene.category, scene.desc].join(' ').toLowerCase();
      const matchesQuery = searchText.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    }),
    [scenes, category, query]
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

        <section className="grid gap-6 xl:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-mega text-cyberGray">Search scenes</h2>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, genre, or mood..."
                className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none"
              />
              <label className="block text-sm uppercase tracking-wide text-cyberGrayMuted">Category</label>
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
          </aside>

          <div className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Available scenes</p>
              <div className="mt-4 text-sm text-cyberGray">{loading ? 'Loading...' : `${filteredScenes.length} scenes matching your filters.`}</div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredScenes.map((scene) => (
                <div key={scene.id} className="overflow-hidden rounded-3xl border border-white/10 bg-cyberPanelDeep shadow-glow-sm">
                  <img src={scene.image} alt={scene.title} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3 text-2xs uppercase tracking-wide text-cyberGrayMuted">
                      <span>{scene.category}</span>
                      <span>{scene.views} views</span>
                    </div>
                    <h3 className="mt-4 text-lg font-black text-white">{scene.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-cyberGray">{scene.desc}</p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-cyberPurple/10 px-3 py-1 text-2xs font-black uppercase tracking-wider text-cyberPurpleLight">{scene.roles}</span>
                      <PrimaryButton href="/community" className="px-4 py-2 text-2xs" variant="primary">
                        Cast Now
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              ))}
              {filteredScenes.length === 0 && (
                <div className="col-span-full rounded-4xl border border-white/10 bg-white/5 p-8 text-center text-sm text-cyberGray">
                  No scenes match your search. Try a broader category or new keyword.
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
