import React from 'react';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';

const LANDING_FEATURES = [
  { title: 'Create without limits', text: 'Blend avatars, scenes, stories, and brand worlds into one expressive workspace.' },
  { title: 'Launch with community', text: 'Collect feedback, publish drops, and turn momentum into campaigns and merch.' },
  { title: 'Stay in sync', text: 'Move from concept to review to release without leaving the platform.' }
];

export default function HomePage() {
  return (
    <Layout>
      <div className="space-y-6">
        <section className="rounded-[2.5rem] border border-white/10 bg-cyberPanel/95 p-8 shadow-glow-lg backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Welcome to Roleverse</p>
              <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tightest text-white sm:text-5xl">Build your world as a guest — or join the member experience when you&apos;re ready.</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-cyberGray">Discover polished scenes, explore creator-led campaigns, and see how the platform flows from story idea to shared launch. Sign up to unlock the full member dashboard with campaign tools, community spaces, and workflow controls.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/signup" className="w-full sm:w-auto" variant="primary" icon="user">
                  Create account
                </PrimaryButton>
                <PrimaryButton href="/login" className="w-full sm:w-auto" variant="secondary" icon="search">
                  Member login
                </PrimaryButton>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyberPurple/30 via-cyberPanel/80 to-cyberTeal/20 p-6 shadow-glow">
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">What you&apos;ll get</p>
              <div className="mt-5 space-y-3">
                {LANDING_FEATURES.map((feature) => (
                  <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-black text-white">{feature.title}</p>
                    <p className="mt-2 text-sm leading-6 text-cyberGray">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Explore</p>
            <h2 className="mt-3 text-2xl font-black text-white">Browse curated scenes</h2>
            <p className="mt-3 text-sm leading-7 text-cyberGray">See the quality of the experience before entering the member workspace.</p>
            <PrimaryButton href="/explore" className="mt-5 w-full" variant="secondary" icon="search">
              Open Explore
            </PrimaryButton>
          </div>
          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Community</p>
            <h2 className="mt-3 text-2xl font-black text-white">Join the discussion</h2>
            <p className="mt-3 text-sm leading-7 text-cyberGray">Follow the latest drops, polls, and creator stories from the community hub.</p>
            <PrimaryButton href="/community" className="mt-5 w-full" variant="secondary" icon="user">
              Visit Community
            </PrimaryButton>
          </div>
          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Member access</p>
            <h2 className="mt-3 text-2xl font-black text-white">Switch into the full app</h2>
            <p className="mt-3 text-sm leading-7 text-cyberGray">Once you create an account, the dashboard unlocks campaign planning, community tools, and production workflows.</p>
            <PrimaryButton href="/signup" className="mt-5 w-full" variant="primary" icon="play">
              Jump in now
            </PrimaryButton>
          </div>
        </section>
      </div>
    </Layout>
  );
}
