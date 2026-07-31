import React from 'react';
import Layout from '../components/Layout';

const STYLE_PRESETS = [
  { name: 'Neon Guardian', mood: 'Bold & cinematic' },
  { name: 'Dream Drift', mood: 'Soft & surreal' },
  { name: 'Rogue Echo', mood: 'Dark & futuristic' }
];

export default function AvatarBuilderPage() {
  return (
    <Layout>
      <div className="space-y-8 p-8">
        <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-8 shadow-glow">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-2xl">
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Avatar Studio</p>
              <h1 className="mt-3 text-4xl font-black text-white">Shape your identity, then place it inside any story.</h1>
              <p className="mt-4 text-sm leading-7 text-cyberGray">Create avatars with limitless identity options, style presets, and role-based traits that can be reused across scenes, campaigns, and projects.</p>
            </div>
            <div className="rounded-3xl border border-cyberTeal/20 bg-cyberTeal/10 px-4 py-3 text-sm font-black uppercase tracking-wide text-cyberTeal">
              Ready for scene casting
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Live preview</p>
                <h2 className="mt-2 text-xl font-black text-white">Current avatar concept</h2>
              </div>
              <span className="rounded-full bg-cyberPurple/10 px-3 py-1 text-2xs font-black uppercase tracking-wider text-cyberPurpleLight">Public-ready</span>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-cyberPanelDeep p-6">
              <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-white/15 bg-gradient-to-br from-cyberPurple/20 via-cyberSurface to-cyberTeal/20 text-center text-sm text-cyberGray">
                Preview image placeholder for your custom avatar
              </div>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-cyberGray">Identity</span>
                  <span className="font-black text-white">Non-binary / fluid</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-cyberGray">Role</span>
                  <span className="font-black text-white">Narrator • Explorer</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-cyberGray">Scene fit</span>
                  <span className="font-black text-cyberTeal">Fantasy / cinematic</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Identity controls</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <label className="text-sm text-cyberGray">
                  <span className="mb-2 block text-2xs font-black uppercase tracking-wider text-cyberGrayMuted">Avatar name</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none" defaultValue="Aurora Vey" />
                </label>
                <label className="text-sm text-cyberGray">
                  <span className="mb-2 block text-2xs font-black uppercase tracking-wider text-cyberGrayMuted">Gender / presence</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none" defaultValue="Any / fluid" />
                </label>
                <label className="text-sm text-cyberGray">
                  <span className="mb-2 block text-2xs font-black uppercase tracking-wider text-cyberGrayMuted">Species / archetype</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none" defaultValue="Human + mythic blend" />
                </label>
                <label className="text-sm text-cyberGray">
                  <span className="mb-2 block text-2xs font-black uppercase tracking-wider text-cyberGrayMuted">Visual tone</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none" defaultValue="Cinematic neon" />
                </label>
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Style presets</p>
                  <h2 className="mt-2 text-lg font-black text-white">Choose a starting point</h2>
                </div>
                <span className="text-sm text-cyberGray">Fast build</span>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {STYLE_PRESETS.map((preset) => (
                  <div key={preset.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-black text-white">{preset.name}</p>
                    <p className="mt-2 text-xs text-cyberGray">{preset.mood}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
