import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';
import { fetchScenes, fetchCategories, fetchSessions } from '../lib/apiClient';

function parseViews(value) {
  return Number(String(value).replace(/,/g, '')) || 0;
}

export default function ExplorePage() {
  const [category, setCategory] = useState('All Categories');
  const [session, setSession] = useState('All Sessions');
  const [query, setQuery] = useState('');
  const [scenes, setScenes] = useState([]);
  const [categories, setCategories] = useState(['All Categories']);
  const [sessions, setSessions] = useState(['All Sessions']);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('popular');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [savedSceneIds, setSavedSceneIds] = useState([]);
  const [previewScene, setPreviewScene] = useState(null);

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

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = window.localStorage.getItem('vekai.explore.savedSceneIds');
      if (saved) {
        setSavedSceneIds(JSON.parse(saved));
      }
    } catch (err) {
      console.error('Failed to restore saved scenes', err);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('vekai.explore.savedSceneIds', JSON.stringify(savedSceneIds));
  }, [savedSceneIds]);

  const visibleScenes = useMemo(() => {
    let filtered = scenes.filter((scene) => {
      const matchesCategory = category === 'All Categories' || scene.category === category;
      const matchesSession = session === 'All Sessions' || scene.session === session;
      const searchText = [scene.title, scene.category, scene.desc, scene.session].join(' ').toLowerCase();
      const matchesQuery = searchText.includes(query.toLowerCase());
      return matchesCategory && matchesSession && matchesQuery;
    });

    if (showSavedOnly) {
      filtered = filtered.filter((scene) => savedSceneIds.includes(scene.id));
    }

    if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => parseViews(b.views) - parseViews(a.views));
    }

    if (sortBy === 'az') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [scenes, category, session, query, showSavedOnly, savedSceneIds, sortBy]);

  const toggleSaveScene = (sceneId) => {
    setSavedSceneIds((current) =>
      current.includes(sceneId) ? current.filter((id) => id !== sceneId) : [...current, sceneId]
    );
  };

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
            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="/campaigns" className="h-14 inline-flex px-6" variant="primary" icon="search">
                View Campaigns
              </PrimaryButton>
              <div className="inline-flex items-center rounded-full border border-cyberPurple/30 bg-cyberPurple/10 px-4 py-2 text-sm text-cyberPurpleLight">
                {savedSceneIds.length} saved scenes
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Available scenes</p>
                <div className="mt-4 text-sm text-cyberGray">{loading ? 'Loading...' : `${visibleScenes.length} scenes matching your filters.`}</div>
              </div>
              <div className="w-full max-w-5xl space-y-4">
                <div className="grid w-full gap-4 lg:grid-cols-[1.7fr_1fr_1fr_0.8fr]">
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
                  <div className="space-y-2">
                    <label className="text-2xs uppercase tracking-wider text-cyberGray">Sort</label>
                    <select
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none"
                    >
                      <option value="popular">Popular</option>
                      <option value="az">A–Z</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSavedOnly((current) => !current)}
                    className={`rounded-full px-4 py-2 text-2xs font-black uppercase tracking-wider transition ${showSavedOnly ? 'bg-cyberPurple text-white' : 'border border-white/10 bg-white/5 text-cyberGray'}`}
                  >
                    {showSavedOnly ? 'Showing saved only' : 'Show saved only'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowSavedOnly(false);
                      setQuery('');
                      setCategory('All Categories');
                      setSession('All Sessions');
                    }}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-2xs font-black uppercase tracking-wider text-cyberGray transition hover:bg-white/10"
                  >
                    Reset filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 masonry-grid">
            {visibleScenes.map((scene) => (
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
                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    <PrimaryButton href="/community" className="w-full px-4 py-2 text-2xs btn-small" variant="primary" icon="cast">
                      Cast Now
                    </PrimaryButton>
                    <PrimaryButton className="w-full px-4 py-2 text-2xs btn-small" variant="secondary" icon="search" onClick={() => setPreviewScene(scene)}>
                      Preview
                    </PrimaryButton>
                    <PrimaryButton className="w-full px-4 py-2 text-2xs btn-small" variant="secondary" icon="user" onClick={() => toggleSaveScene(scene.id)}>
                      {savedSceneIds.includes(scene.id) ? 'Saved' : 'Save'}
                    </PrimaryButton>
                  </div>
                </div>
              </article>
            ))}
            {visibleScenes.length === 0 && (
              <div className="col-span-full rounded-4xl border border-white/10 bg-white/5 p-8 text-center text-sm text-cyberGray">
                No scenes match your search. Try a broader category or new keyword.
              </div>
            )}
          </div>
        </section>
      </div>

      {previewScene && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Scene preview</p>
                <h3 className="mt-2 text-2xl font-black text-white">{previewScene.title}</h3>
              </div>
              <button type="button" onClick={() => setPreviewScene(null)} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-cyberGray">
                Close
              </button>
            </div>
            <div className="mt-4 overflow-hidden rounded-3xl border border-white/10">
              <img src={previewScene.image} alt={previewScene.title} className="h-56 w-full object-cover" />
            </div>
            <p className="mt-4 text-sm leading-7 text-cyberGray">{previewScene.desc}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <PrimaryButton href="/community" variant="primary" icon="cast">
                Open scene
              </PrimaryButton>
              <PrimaryButton onClick={() => toggleSaveScene(previewScene.id)} variant="secondary" icon="user">
                {savedSceneIds.includes(previewScene.id) ? 'Saved' : 'Save scene'}
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
