import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';

const LEADERBOARD_ITEMS = [
  { rank: '01', name: 'testuser@example.com', score: '46,400', change: '+12.7%' },
  { rank: '02', name: 'Neon Frontier Challenge', score: '39,000', change: '+8.1%' },
  { rank: '03', name: 'Velvet Runway Challenge', score: '27,300', change: '+3.2%' }
];

const FEATURED_SCENES = [
  { id: 'f1', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', label: 'Action Movie', image: '/demo/demo-featured-1.jpg', role: 'Hero', views: '72,000' },
  { id: 'f2', title: 'ORIGEN: AI DREAMSCAPE', label: 'AI Original', image: '/demo/demo-featured-2.jpg', role: 'AI Role', views: '91,500' },
  { id: 'f3', title: 'GROOVE ODYSSEY: NEON STAGE', label: 'Musical/Dance', image: '/demo/demo-featured-3.jpg', role: 'Mentor', views: '27,600' }
];

const CROWN_CUTS = [
  { id: 'c1', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', user: 'testuser@example.com', image: '/demo/demo-crown-1.jpg' },
  { id: 'c2', title: 'GROOVE ODYSSEY: NEON STAGE', user: 'testuser@example.com', image: '/demo/demo-crown-2.jpg' }
];

const DEMO_VIDEO = {
  src: '/demo/demo-video.mp4',
  poster: '/demo/demo-thumb-1.jpg'
};

const TRENDING_FEED = [
  { id: 't1', text: 'Just a quiet drama moment with Dr. Sollis. More to come.', likes: '210', shares: '45', video: DEMO_VIDEO.src, poster: DEMO_VIDEO.poster },
  { id: 't2', text: 'Dropped my hero arc in Shadowstrike — this is the one. #NeonFrontier', likes: '18,700', shares: '3,400', thumb: '/demo/demo-thumb-2.jpg' },
  { id: 't3', text: 'Vibing with the Maestro in Groove Odyssey ✨ Rhythm hits different when you’re in the scene.', likes: '4,300', shares: '980', thumb: '/demo/demo-thumb-3.jpg' }
];

export default function RoleverseDashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-cyberPanel/95 p-8 shadow-glow-lg backdrop-blur-sm">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Your imagination is the limit</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tightest text-white sm:text-5xl">Create any avatar. Build any story. Launch any world.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-cyberGray">Vekai is a creative platform where users can design avatars in any form imaginable—human, same-gender, animal, robot, mythical, role-based, or symbolic—and place them into scenes that feel limitless. Users can write stories inspired by films, documentaries, books, online games, ancient myths, imagination, or entirely original ideas. Inside the app, creators can build projects, raise campaigns, and turn their stories into full reel productions. Nothing is off limits—ideas become communities, discussions, and shared creative ecosystems, while any asset or project can be merchandised or used as a hub for fundraising.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xs uppercase tracking-wider text-cyberGray">Live Creators</p>
                <p className="mt-3 text-2xl font-black text-white">8.4k</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xs uppercase tracking-wider text-cyberGray">Scenes active</p>
                <p className="mt-3 text-2xl font-black text-white">24</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xs uppercase tracking-wider text-cyberGray">Weekly growth</p>
                <p className="mt-3 text-2xl font-black text-cyberTeal">+16.8%</p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-[auto_auto]">
              <PrimaryButton href="/explore" className="w-full" variant="primary">
                Explore Scenes
              </PrimaryButton>
              <PrimaryButton href="/community" className="w-full" variant="secondary">
                Join the Community
              </PrimaryButton>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Campaign Challenges</p>
                  <h2 className="mt-3 text-xl font-black text-white">Leaderboard Picks</h2>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-2 text-2xs uppercase tracking-wider text-cyberGrayMuted">Top 3</span>
              </div>
              <div className="mt-6 space-y-3">
                {LEADERBOARD_ITEMS.map((item) => (
                  <div key={item.rank} className="rounded-3xl border border-white/5 bg-white/5 p-4 transition hover:border-cyberPurple/40 hover:bg-white/10">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-2xs uppercase tracking-wider text-cyberGrayMuted">#{item.rank}</p>
                        <p className="mt-2 text-sm font-black text-white truncate">{item.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-cyberTeal">{item.score}</p>
                        <p className="mt-1 text-xs text-cyberGray">{item.change}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Community Cuts</p>
                  <h2 className="mt-3 text-xl font-black text-white">Editor’s Favorites</h2>
                </div>
                <PrimaryButton href="/community" variant="secondary" className="rounded-full px-4 py-2 text-2xs w-full sm:w-auto">
                  View all cuts
                </PrimaryButton>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {CROWN_CUTS.map((item) => (
                  <div key={item.id} className="overflow-hidden rounded-3xl border border-white/10 bg-cyberPanelDeep">
                    <div className="relative overflow-hidden">
                      <img src={item.image} alt={item.title} className="h-44 w-full object-cover transition duration-500 hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-cyberYellow/90 px-3 py-1 text-2xs font-black uppercase tracking-wider text-black">Official Cut</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-black uppercase tracking-wide text-white">{item.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-wide text-cyberGray">{item.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Featured Scenes</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white">Top editorial picks</h2>
            </div>
            <PrimaryButton href="/explore" variant="secondary" className="rounded-full px-4 py-2 text-2xs w-full sm:w-auto">
              Browse the library
            </PrimaryButton>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {FEATURED_SCENES.map((scene) => (
              <article key={scene.id} className="overflow-hidden rounded-4xl border border-white/10 bg-cyberPanelDeep shadow-glow-sm transition duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img src={scene.image} alt={scene.title} className="h-64 w-full object-cover transition duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-2xs uppercase tracking-wider text-white backdrop-blur-sm">
                    <span>{scene.label}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-black">{scene.title}</h3>
                    <div className="mt-2 flex items-center justify-between text-3xs uppercase tracking-wider text-cyberGray">
                      <span>{scene.role}</span>
                      <span>{scene.views} views</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <PrimaryButton className="w-full text-2xs px-4 py-3" variant="primary">
                    Cast Into Scene
                  </PrimaryButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Trending Creations</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white">Fresh stories in motion</h2>
            </div>
            <PrimaryButton href="/store" variant="secondary" className="rounded-full px-4 py-2 text-2xs w-full sm:w-auto">
              Shop merch
            </PrimaryButton>
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-3">
            {TRENDING_FEED.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-4xl border border-white/10 bg-cyberPanelDeep shadow-glow-sm transition duration-300 hover:-translate-y-1">
                {item.video ? (
                  <div className="relative overflow-hidden">
                    <video
                      controls
                      src={item.video}
                      poster={item.poster}
                      className="h-64 w-full object-cover bg-black"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                ) : (
                  <img src={item.thumb} alt="trending-thumb" className="h-64 w-full object-cover" />
                )}
                <div className="p-5">
                  <p className="text-sm leading-6 text-cyberGray">{item.text}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-2xs uppercase tracking-wider text-cyberGrayMuted">
                    <span>♥ {item.likes}</span>
                    <span>↻ {item.shares}</span>
                  </div>
                  <div className="mt-5">
                    <PrimaryButton className="w-full px-4 py-3 text-2xs" variant="primary">
                      Watch clip
                    </PrimaryButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
