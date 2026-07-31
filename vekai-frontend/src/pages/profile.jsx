import React from 'react';
import Layout from '../components/Layout';

const STATS = [
  { label: 'Avatars created', value: '24' },
  { label: 'Scenes joined', value: '18' },
  { label: 'Campaigns backed', value: '7' },
  { label: 'Community votes', value: '3.2k' }
];

const PROJECTS = [
  { title: 'Echoes of the Hollow City', status: 'In production' },
  { title: 'Orchid Protocol', status: 'Storyboard ready' },
  { title: 'Night Market Legends', status: 'Funding open' }
];

export default function ProfilePage() {
  return (
    <Layout>
      <div className="space-y-8 p-8">
        <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-8 shadow-glow">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Creator profile</p>
              <h1 className="mt-3 text-4xl font-black text-white">Your identity hub for avatars, stories, and community momentum.</h1>
              <p className="mt-4 text-sm leading-7 text-cyberGray">Track your creations, showcase your projects, and keep your followers connected to your latest story worlds.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-black uppercase tracking-wide text-cyberTeal">
              Active creator • 2 new collaborations
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyberPurple to-cyberTeal text-xl font-black text-cyberSurface">
                A
              </div>
              <div>
                <h2 className="text-xl font-black text-white">Ari Voss</h2>
                <p className="mt-1 text-sm text-cyberGray">Director • Worldbuilder • Story architect</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-cyberGray">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Featured projects</p>
            <div className="mt-5 space-y-3">
              {PROJECTS.map((project) => (
                <div key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-black text-white">{project.title}</p>
                      <p className="mt-1 text-xs text-cyberGray">{project.status}</p>
                    </div>
                    <span className="rounded-full bg-cyberTeal/10 px-3 py-1 text-2xs font-black uppercase tracking-wider text-cyberTeal">Open</span>
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
