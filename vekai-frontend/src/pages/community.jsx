import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';
import { useEffect, useState } from 'react';
import { fetchCampaigns, fetchCommunityPosts } from '../lib/apiClient';

export default function CommunityPage() {
  const [cuts, setCuts] = useState([])
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    Promise.all([fetchCampaigns(), fetchCommunityPosts()])
      .then(([campaigns, posts]) => {
        if (!mounted) return
        setCuts(campaigns)
        setPosts(posts)
      })
      .catch(() => {})
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  return (
    <Layout>
      <div className="space-y-10 p-8">
        <section className="mx-auto max-w-[1200px] rounded-4xl border border-white/10 bg-cyberPanel/95 p-8 shadow-glow">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Community</p>
              <h1 className="mt-3 text-4xl font-black text-white">Connect, vote, and celebrate creator moments.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-cyberGray">Explore official cuts, join live polls, and discover the creators shaping the Roleverse experience.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 sm:items-center">
              <PrimaryButton href="/community" className="w-full sm:w-auto" variant="primary">
                Follow creators
              </PrimaryButton>
              <PrimaryButton href="/explore" className="w-full sm:w-auto" variant="secondary">
                Start a cut
              </PrimaryButton>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Official community cuts</p>
                <h2 className="mt-3 text-xl font-black text-white">The hottest shared creative drops</h2>
              </div>
              <PrimaryButton href="/campaigns" variant="secondary" className="rounded-full px-4 py-2 text-2xs">
                See leaderboard
              </PrimaryButton>
            </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
              {loading ? (
                <div className="text-cyberGray">Loading...</div>
              ) : (
                cuts.map((cut) => (
                  <div key={cut.id} className="overflow-hidden rounded-3xl border border-white/10 bg-cyberPanelDeep shadow-glow-sm">
                    <img src={cut.image} alt={cut.title} className="h-64 w-full object-cover" />
                    <div className="p-5">
                      <span className="inline-flex rounded-full bg-cyberYellow/10 px-3 py-1 text-2xs font-black uppercase tracking-wider text-cyberYellow">Official Cut</span>
                      <h3 className="mt-4 text-lg font-black text-white">{cut.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-wide text-cyberGrayMuted">{cut.user}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Trending feed</p>
                <h2 className="mt-3 text-xl font-black text-white">What the Roleverse is talking about</h2>
              </div>
              <PrimaryButton href="/community" variant="secondary" className="rounded-full px-4 py-2 text-2xs">
                View all updates
              </PrimaryButton>
            </div>
            <div className="mt-6 space-y-4">
              {loading ? (
                <div className="text-cyberGray">Loading...</div>
              ) : (
                posts.map((item) => (
                  <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-gray-200">{item.text}</p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-3xs uppercase tracking-wide text-cyberGray">
                      <span>♥ {item.likes}</span>
                      <span>↻ {item.shares}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
