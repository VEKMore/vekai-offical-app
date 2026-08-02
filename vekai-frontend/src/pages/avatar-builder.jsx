import React, { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';

const STYLE_PRESETS = [
  {
    name: 'Neon Guardian',
    mood: 'Bold & cinematic',
    tone: 'Cinematic neon',
    presence: 'Any / fluid',
    species: 'Human + mythic blend',
    role: 'Hero • Protector',
    sceneFit: 'Fantasy / cinematic',
    energy: 'Electric',
    aura: 'Radiant'
  },
  {
    name: 'Dream Drift',
    mood: 'Soft & surreal',
    tone: 'Moonlit dreamscape',
    presence: 'Androgynous',
    species: 'Dream-born hybrid',
    role: 'Narrator • Explorer',
    sceneFit: 'Dreamscape / art house',
    energy: 'Gentle',
    aura: 'Luminous'
  },
  {
    name: 'Rogue Echo',
    mood: 'Dark & futuristic',
    tone: 'Night-shift synth',
    presence: 'Non-binary',
    species: 'Cyber mythic',
    role: 'Outlaw • Strategist',
    sceneFit: 'Sci-fi / noir',
    energy: 'Razor-sharp',
    aura: 'Shadowed'
  }
];

const BUILD_STEPS = [
  { label: 'Identity', done: true },
  { label: 'Style layer', done: true },
  { label: 'Scene fit', done: false }
];

export default function AvatarBuilderPage() {
  const [avatar, setAvatar] = useState({
    name: 'Aurora Vey',
    presence: 'Any / fluid',
    species: 'Human + mythic blend',
    tone: 'Cinematic neon',
    role: 'Hero • Protector',
    sceneFit: 'Fantasy / cinematic',
    energy: 'Electric',
    aura: 'Radiant',
    style: 'Neon Guardian'
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [saved, setSaved] = useState(false);

  const handleInput = (field) => (event) => {
    setAvatar((current) => ({ ...current, [field]: event.target.value }));
  };

  const applyPreset = (preset) => {
    setAvatar((current) => ({ ...current, ...preset }));
  };

  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const progress = useMemo(() => {
    const doneCount = BUILD_STEPS.filter((step) => step.done).length;
    return `${Math.round((doneCount / BUILD_STEPS.length) * 100)}%`;
  }, []);

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
            <div className="flex flex-wrap gap-3">
              <div className="rounded-3xl border border-cyberTeal/20 bg-cyberTeal/10 px-4 py-3 text-sm font-black uppercase tracking-wide text-cyberTeal">
                Ready for scene casting
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black uppercase tracking-wide text-cyberGray">
                Build progress {progress}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Live preview</p>
                <h2 className="mt-2 text-xl font-black text-white">Current avatar concept</h2>
              </div>
              <span className="rounded-full bg-cyberPurple/10 px-3 py-1 text-2xs font-black uppercase tracking-wider text-cyberPurpleLight">{saved ? 'Saved' : 'Draft'}</span>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-cyberPanelDeep p-6">
              <label className="flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-3xl border border-dashed border-white/15 bg-gradient-to-br from-cyberPurple/20 via-cyberSurface to-cyberTeal/20 text-center text-sm text-cyberGray transition hover:border-cyberPurple/50">
                {previewImage ? (
                  <img src={previewImage} alt="Avatar preview" className="h-full w-full object-cover" />
                ) : (
                  <span className="max-w-xs px-4">Upload a visual reference or keep the concept as a polished character brief.</span>
                )}
                <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
              </label>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-cyberGray">Identity</span>
                  <span className="font-black text-white">{avatar.name}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-cyberGray">Role</span>
                  <span className="font-black text-white">{avatar.role}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-cyberGray">Scene fit</span>
                  <span className="font-black text-cyberTeal">{avatar.sceneFit}</span>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <PrimaryButton variant="primary" className="w-full" icon="cast" onClick={() => setSaved(true)}>
                  Save concept
                </PrimaryButton>
                <PrimaryButton variant="secondary" className="w-full" icon="search" onClick={() => setPreviewImage(null)}>
                  Clear preview
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Identity controls</p>
                  <h2 className="mt-2 text-lg font-black text-white">Fine-tune the character details</h2>
                </div>
                <span className="text-sm text-cyberGray">Live update</span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <label className="text-sm text-cyberGray">
                  <span className="mb-2 block text-2xs font-black uppercase tracking-wider text-cyberGrayMuted">Avatar name</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none" value={avatar.name} onChange={handleInput('name')} />
                </label>
                <label className="text-sm text-cyberGray">
                  <span className="mb-2 block text-2xs font-black uppercase tracking-wider text-cyberGrayMuted">Gender / presence</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none" value={avatar.presence} onChange={handleInput('presence')} />
                </label>
                <label className="text-sm text-cyberGray">
                  <span className="mb-2 block text-2xs font-black uppercase tracking-wider text-cyberGrayMuted">Species / archetype</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none" value={avatar.species} onChange={handleInput('species')} />
                </label>
                <label className="text-sm text-cyberGray">
                  <span className="mb-2 block text-2xs font-black uppercase tracking-wider text-cyberGrayMuted">Visual tone</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none" value={avatar.tone} onChange={handleInput('tone')} />
                </label>
                <label className="text-sm text-cyberGray">
                  <span className="mb-2 block text-2xs font-black uppercase tracking-wider text-cyberGrayMuted">Energy</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none" value={avatar.energy} onChange={handleInput('energy')} />
                </label>
                <label className="text-sm text-cyberGray">
                  <span className="mb-2 block text-2xs font-black uppercase tracking-wider text-cyberGrayMuted">Aura</span>
                  <input className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none" value={avatar.aura} onChange={handleInput('aura')} />
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
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => applyPreset(preset)}
                    className={`rounded-2xl border p-4 text-left transition ${avatar.style === preset.name ? 'border-cyberPurple/60 bg-cyberPurple/10' : 'border-white/10 bg-white/5 hover:border-cyberPurple/40'}`}
                  >
                    <p className="text-sm font-black text-white">{preset.name}</p>
                    <p className="mt-2 text-xs text-cyberGray">{preset.mood}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Build checklist</p>
                  <h2 className="mt-2 text-lg font-black text-white">Keep the concept moving</h2>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {BUILD_STEPS.map((step) => (
                  <div key={step.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm text-white">{step.label}</span>
                    <span className={`text-xs font-black uppercase tracking-wider ${step.done ? 'text-cyberTeal' : 'text-cyberGray'}`}>
                      {step.done ? 'Complete' : 'Pending'}
                    </span>
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
