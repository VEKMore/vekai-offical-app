import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { CROWN_CUTS, TRENDING_FEED } from '../data/siteData';

export default function CommunityPage() {
  return (
    <Layout>
      <div className="space-y-10 p-8">
        <section className="mx-auto max-w-[1200px] rounded-4xl border border-white/10 bg-cyberPanel/95 p-8 shadow-glow">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Community</p>
              <h1 className="mt-3 text-4xl font-black text-white">Connect, vote, and celebrate creator moments.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-cyberGray">Explore official cuts, join live polls, and discover the creators shaping the Roleverse experience.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/community" className="rounded-2xl bg-cyberPurple px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-cyberPurpleSoft">Follow creators</Link>
              <Link href="/explore" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-wide text-white/80 transition hover:bg-white/10">Start a cut</Link>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Official community cuts</p>
                <h2 className="mt-3 text-xl font-black text-white">The hottest shared creative drops</h2>
              </div>
              <Link href="/campaigns" className="rounded-full bg-white/5 px-4 py-2 text-2xs uppercase tracking-wider text-white/80 transition hover:bg-white/10">See leaderboard</Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {CROWN_CUTS.map((cut) => (
                <div key={cut.id} className="overflow-hidden rounded-3xl border border-white/10 bg-cyberPanelDeep shadow-glow-sm">
                  <img src={cut.image} alt={cut.title} className="h-64 w-full object-cover" />
                  <div className="p-5">
                    <span className="inline-flex rounded-full bg-cyberYellow/10 px-3 py-1 text-2xs font-black uppercase tracking-wider text-cyberYellow">Official Cut</span>
                    <h3 className="mt-4 text-lg font-black text-white">{cut.title}</h3>
                    <p className="mt-2 text-xs uppercase tracking-wide text-cyberGrayMuted">{cut.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Trending feed</p>
                <h2 className="mt-3 text-xl font-black text-white">What the Roleverse is talking about</h2>
              </div>
              <Link href="/community" className="rounded-full bg-white/5 px-4 py-2 text-2xs uppercase tracking-wider text-white/80 transition hover:bg-white/10">View all updates</Link>
            </div>
            <div className="mt-6 space-y-4">
              {TRENDING_FEED.map((item) => (
                <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-gray-200">{item.text}</p>
                  <div className="mt-4 flex items-center justify-between gap-4 text-3xs uppercase tracking-wide text-cyberGray">
                    <span>♥ {item.likes}</span>
                    <span>↻ {item.shares}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
