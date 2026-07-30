import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { fetchCampaigns, fetchProducts } from '../lib/apiClient';

export default function CampaignsPage() {
  const [leaderboard, setLeaderboard] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    Promise.all([fetchCampaigns(), fetchProducts()])
      .then(([campaigns, products]) => {
        if (!mounted) return
        setLeaderboard(campaigns)
        setProducts(products)
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
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Campaigns</p>
              <h1 className="mt-3 text-4xl font-black text-white">Join active drops and power up your scene.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-cyberGray">Compete for leaderboard spots, unlock exclusive merch rewards, and take your avatar into live production challenges.</p>
            </div>
            <Link href="/explore" className="w-full rounded-2xl bg-cyberPurple px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-cyberPurpleSoft sm:w-auto sm:inline-flex sm:items-center sm:justify-center sm:h-14">
              Discover scenes
            </Link>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_0.85fr]">
          <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Leaderboard</p>
                <h2 className="mt-3 text-xl font-black text-white">Top campaign performers</h2>
              </div>
              <Link href="/community" className="rounded-full bg-white/5 px-4 py-2 text-2xs uppercase tracking-wider text-white/80 transition hover:bg-white/10">See all</Link>
            </div>
            <div className="mt-6 space-y-4">
              {loading ? (
                <div className="text-cyberGray">Loading...</div>
              ) : (
                leaderboard.map((item, idx) => (
                  <div key={item.id || idx} className="rounded-3xl border border-white/10 bg-white/5 p-4">
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
          </section>

          <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Rewards</p>
                <h2 className="mt-3 text-xl font-black text-white">Campaign-exclusive merch</h2>
              </div>
              <Link href="/store" className="rounded-full bg-white/5 px-4 py-2 text-2xs uppercase tracking-wider text-white/80 transition hover:bg-white/10">Shop now</Link>
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
                      <Link href="/store" className="rounded-full border border-white/10 px-3 py-2 text-2xs uppercase tracking-wide text-white/80 transition hover:bg-white/10">Claim</Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
