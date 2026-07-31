import React from 'react';
import Layout from '../components/Layout';

const STAGES = [
  { title: 'Concept', text: 'Define the avatar, world, and story tone.' },
  { title: 'Build', text: 'Create the avatar, scene assets, and references.' },
  { title: 'Share', text: 'Publish workflow notes, drafts, and feedback loops.' },
  { title: 'Launch', text: 'Turn the story into reels, campaigns, and community activations.' }
];

export default function WorkflowPage() {
  return (
    <Layout>
      <div className="space-y-8 p-8">
        <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-8 shadow-glow">
          <div className="max-w-2xl">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Workflow & sharing</p>
            <h1 className="mt-3 text-4xl font-black text-white">Move from idea to launch with a collaborative production flow.</h1>
            <p className="mt-4 text-sm leading-7 text-cyberGray">Keep storyboards, references, campaign notes, and publishing tasks in one shared workspace that can move from creator to community with ease.</p>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Production stages</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {STAGES.map((stage) => (
                <div key={stage.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">{stage.title}</p>
                  <p className="mt-2 text-sm leading-6 text-cyberGray">{stage.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Share your workflow</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-black text-white">Link to collaborators</p>
                <p className="mt-2 text-sm text-cyberGray">Share your draft board and campaign notes with teammates, funders, or community partners.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-black text-white">Version history</p>
                <p className="mt-2 text-sm text-cyberGray">Track avatar revisions, scene changes, and story updates in a single timeline.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-cyberTeal/10 p-4 text-sm font-black uppercase tracking-wide text-cyberTeal">
                Publish to community when ready
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
