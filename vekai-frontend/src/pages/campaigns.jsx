import React, { useMemo, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';
import { fetchCampaigns, fetchProducts } from '../lib/apiClient';

const CAMPAIGN_MILESTONES = [
  { title: 'Open the gate', detail: 'Reach 500 campaign points', pct: '72%' },
  { title: 'Unlock neon drop', detail: 'Complete 2 scene casts', pct: '48%' },
  { title: 'Community spotlight', detail: 'Trigger 3 creator votes', pct: '24%' }
];

const CAMPAIGN_STATS = [
  { label: 'Points needed', value: '1,820' },
  { label: 'Days remaining', value: '6' },
  { label: 'Active teams', value: '14' }
];

export default function CampaignsPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('leaderboard');

  useEffect(() => {
    let mounted = true;
    Promise.all([fetchCampaigns(), fetchProducts()])
      .then(([campaigns, products]) => {
        if (!mounted) return;
        setLeaderboard(campaigns);
        setProducts(products);
      })
      .catch(() => {})
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const featuredReward = useMemo(() => products[0], [products]);

  return (
    <Layout>
      <div className="space-y-10 p-8">
        <section className="mx-auto max-w-[1200px] rounded-4xl border border-white/10 bg-cyberPanel/95 p-8 shadow-glow">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Campaigns</p>
              <h1 className="mt-3 text-4xl font-black text-white">Join active drops and power up your scene.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-cyberGray">Compete for leaderboard spots, unlock exclusive merch rewards, and take your avatar into live production challenges.</p>
            </div>
            <PrimaryButton href="/explore" className="w-full sm:w-auto h-14" variant="primary" icon="search">
              Discover scenes
            </PrimaryButton>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {CAMPAIGN_STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-3xs uppercase tracking-wider text-cyberGray">{stat.label}</p>
                <p className="mt-2 text-xl font-black text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSelectedTab('leaderboard')}
              className={`rounded-full px-4 py-2 text-2xs font-black uppercase tracking-wider transition ${selectedTab === 'leaderboard' ? 'bg-cyberPurple text-white' : 'border border-white/10 bg-white/5 text-cyberGray'}`}
            >
              Leaderboard
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab('rewards')}
              className={`rounded-full px-4 py-2 text-2xs font-black uppercase tracking-wider transition ${selectedTab === 'rewards' ? 'bg-cyberPurple text-white' : 'border border-white/10 bg-white/5 text-cyberGray'}`}
            >
              Rewards
            </button>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_0.85fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              {selectedTab === 'leaderboard' ? (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Leaderboard</p>
                      <h2 className="mt-3 text-xl font-black text-white">Top campaign performers</h2>
                    </div>
                    <PrimaryButton href="/community" variant="secondary" className="rounded-full px-4 py-2 text-2xs" icon="user">
                      See all
                    </PrimaryButton>
                  </div>
                  <div className="mt-6 space-y-4">
                    {loading ? (
                      <div className="text-cyberGray">Loading...</div>
                    ) : (
                      leaderboard.map((item, idx) => (
                        <div key={item.id || idx} className="rounded-3xl border border-white/10 bg-cyberPanelDeep p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-2xs uppercase tracking-wider text-cyberGrayMuted">#{item.rank || idx + 1}</p>
                              <p className="mt-2 text-sm font-black text-white">{item.name || item.title}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-black text-cyberTeal">{item.score || item.points}</p>
                              <p className="mt-1 text-xs text-cyberGray">{item.change || ''}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Rewards</p>
                      <h2 className="mt-3 text-xl font-black text-white">Campaign-exclusive merch</h2>
                    </div>
                    <PrimaryButton href="/store" variant="secondary" className="rounded-full px-4 py-2 text-2xs" icon="shop">
                      Shop now
                    </PrimaryButton>
                  </div>
                  <div className="mt-6 grid gap-4">
                    {loading ? (
                      <div className="text-cyberGray">Loading...</div>
                    ) : (
                      products.slice(0, 4).map((item) => (
                        <div key={item.id} className="rounded-3xl border border-white/10 bg-cyberPanelDeep p-5">
                          <div className="text-2xs uppercase tracking-wider text-cyberGray">{item.category}</div>
                          <h3 className="mt-3 text-sm font-black text-white">{item.title}</h3>
                          <div className="mt-4 flex items-center justify-between gap-4">
                            <span className="text-lg font-black text-white">{item.price}</span>
                            <PrimaryButton href="/store" variant="secondary" className="rounded-full px-3 py-2 text-2xs btn-small" icon="shop">
                              Claim
                            </PrimaryButton>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyberPurple/20 to-cyberTeal/15 p-6">
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Featured reward</p>
                <h3 className="mt-3 text-2xl font-black text-white">{featuredReward?.title || 'Unlock your next drop'}</h3>
                <p className="mt-4 text-sm leading-7 text-cyberGray">Collect campaign points, unlock limited drops, and turn progress into premium creator merch.</p>
                <div className="mt-6 flex items-center justify-between rounded-3xl border border-white/10 bg-black/15 px-4 py-4">
                  <span className="text-lg font-black text-cyberYellow">{featuredReward?.price || '$0.00'}</span>
                  <PrimaryButton href="/store" variant="primary" className="rounded-full px-4 py-2 text-2xs" icon="shop">
                    Unlock reward
                  </PrimaryButton>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Milestones</p>
                    <h2 className="mt-3 text-xl font-black text-white">Next unlocks</h2>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {CAMPAIGN_MILESTONES.map((milestone) => (
                    <div key={milestone.title} className="rounded-2xl border border-white/10 bg-cyberPanelDeep px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-black text-white">{milestone.title}</p>
                          <p className="mt-1 text-xs text-cyberGray">{milestone.detail}</p>
                        </div>
                        <span className="text-xs font-black uppercase tracking-wider text-cyberTeal">{milestone.pct}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
