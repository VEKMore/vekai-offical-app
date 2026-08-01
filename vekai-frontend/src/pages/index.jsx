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
  { id: 'f1', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', label: 'Action Movie', image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80', role: 'Hero', views: '72,000' },
  { id: 'f2', title: 'ORIGEN: AI DREAMSCAPE', label: 'AI Original', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80', role: 'AI Role', views: '91,500' },
  { id: 'f3', title: 'GROOVE ODYSSEY: NEON STAGE', label: 'Musical/Dance', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80', role: 'Mentor', views: '27,600' }
];

const CROWN_CUTS = [
  { id: 'c1', title: 'SHADOWSTRIKE: CITY UNDER SIEGE', user: 'testuser@example.com', image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80' },
  { id: 'c2', title: 'GROOVE ODYSSEY: NEON STAGE', user: 'testuser@example.com', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80' }
];

const DEMO_VIDEO = {
  src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
  poster: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80'
};

const TRENDING_FEED = [
  { id: 't1', text: 'Just a quiet drama moment with Dr. Sollis. More to come.', likes: '210', shares: '45', video: DEMO_VIDEO.src, poster: DEMO_VIDEO.poster },
  { id: 't2', text: 'Dropped my hero arc in Shadowstrike — this is the one. #NeonFrontier', likes: '18,700', shares: '3,400', thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80' },
  { id: 't3', text: 'Vibing with the Maestro in Groove Odyssey ✨ Rhythm hits different when you’re in the scene.', likes: '4,300', shares: '980', thumb: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80' }
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/explore" className="w-full sm:w-auto" variant="primary">
                Explore Scenes
              </PrimaryButton>
              <PrimaryButton href="/community" className="w-full sm:w-auto" variant="secondary">
                Join the Community
              </PrimaryButton>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Campaign Challenges</p>
                  <h2 className="mt-3 text-lg font-black text-white">Live Leaderboard</h2>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-2 text-2xs uppercase tracking-wider text-cyberGrayMuted">Top 3</span>
              </div>
              <div className="mt-6 space-y-3">
                {LEADERBOARD_ITEMS.map((item) => (
                  <div key={item.rank} className="rounded-3xl border border-white/5 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-2xs uppercase tracking-wider text-cyberGrayMuted">#{item.rank}</p>
                        <p className="mt-2 text-sm font-black text-white">{item.name}</p>
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
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Official Community Cuts</p>
                  <h2 className="mt-3 text-lg font-black text-white">Watch, vote & crown the best cuts</h2>
                </div>
                <PrimaryButton href="/community" variant="secondary" className="rounded-full px-4 py-2 text-2xs">
                  View all cuts
                </PrimaryButton>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {CROWN_CUTS.map((item) => (
                  <div key={item.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <img src={item.image} alt={item.title} className="h-36 w-full object-cover" />
                    <div className="p-4">
                      <span className="inline-flex rounded-full bg-cyberYellow/10 px-3 py-1 text-3xs font-black uppercase tracking-wider text-cyberYellow">Official Cut</span>
                      <h3 className="mt-3 text-sm font-black uppercase tracking-wide text-white">{item.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-wide text-cyberGray">{item.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Featured Scenes</p>
              <h2 className="mt-3 text-xl font-black text-white">Featured drops from the network</h2>
            </div>
            <PrimaryButton href="/explore" variant="secondary" className="rounded-full px-4 py-2 text-2xs">
              Browse the library
            </PrimaryButton>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {FEATURED_SCENES.map((scene) => (
              <div key={scene.id} className="overflow-hidden rounded-3xl border border-white/10 bg-cyberPanelDeep">
                <img src={scene.image} alt={scene.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <span className="inline-flex rounded-full bg-cyberPurple/10 px-3 py-1 text-2xs font-black uppercase tracking-mega text-cyberPurpleLight">{scene.label}</span>
                  <h3 className="mt-4 text-lg font-black text-white">{scene.title}</h3>
                  <div className="mt-4 flex items-center justify-between text-3xs uppercase tracking-wide text-cyberGray">
                    <span>{scene.role}</span>
                    <span>{scene.views} views</span>
                  </div>
                  <PrimaryButton className="mt-5 text-2xs px-4 py-3" variant="primary">
                    Cast Into Scene
                  </PrimaryButton>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Trending Creations</p>
              <h2 className="mt-3 text-xl font-black text-white">Your generated video experiences</h2>
            </div>
            <PrimaryButton href="/store" variant="secondary" className="rounded-full px-4 py-2 text-2xs">
              Shop merch
            </PrimaryButton>
          </div>
          <div className="mt-6 space-y-4">
            {TRENDING_FEED.map((item) => (
              <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-200">{item.text}</p>
                  <div className="flex items-center gap-4 text-3xs uppercase tracking-wide text-cyberGray">
                    <span>♥ {item.likes}</span>
                    <span>↻ {item.shares}</span>
                  </div>
                </div>

                {/* demo video or thumbnail */}
                {item.video ? (
                  <div className="mt-4">
                    <video
                      controls
                      src={item.video}
                      poster={item.poster}
                      className="w-full rounded-2xl bg-black"
                    />
                  </div>
                ) : item.thumb ? (
                  <img src={item.thumb} alt="trending-thumb" className="mt-4 h-44 w-full object-cover rounded-2xl" />
                ) : null}

                <div className="mt-4 flex flex-wrap gap-3">
                  <PrimaryButton className="px-4 py-2 text-2xs" variant="primary">
                    Share
                  </PrimaryButton>
                  <PrimaryButton className="px-4 py-2 text-2xs" variant="secondary">
                    Edit
                  </PrimaryButton>
                  <PrimaryButton className="px-4 py-2 text-2xs" variant="danger">
                    Delete
                  </PrimaryButton>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
