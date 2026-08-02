import React from 'react';
import Layout from '../components/Layout';

const STAGES = [
  { title: 'Brief', text: 'Define the campaign story, audience, and release window.' },
  { title: 'Assets', text: 'Prepare avatar variants, scene beats, and support visuals.' },
  { title: 'Review', text: 'Collect feedback, fine-tune timing, and lock the final cut.' },
  { title: 'Launch', text: 'Publish the reel, track community reactions, and ship follow-ups.' }
];

const CHECKLIST = [
  'Final scene order approved',
  'Avatar presets exported for social',
  'Launch copy and CTA ready',
  'Community poll scheduled for day-of-release'
];

const NEXT_UP = [
  { label: 'Share draft with the campaign crew', detail: '4 collaborators are ready to review' },
  { label: 'Publish community teaser', detail: 'Queued for 6:30 PM' },
  { label: 'Prep reward unlock', detail: 'Badge and reward panel are already staged' }
];

export default function WorkflowPage() {
  return (
    <Layout>
      <div className="space-y-8 p-8">
        <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-8 shadow-glow">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Campaign builder</p>
              <h1 className="mt-3 text-4xl font-black text-white">Turn creation into a launch-ready production flow.</h1>
              <p className="mt-4 text-sm leading-7 text-cyberGray">Use this workspace to shape the campaign, hand off assets, review feedback, and prep the community rollout from one place.</p>
            </div>
            <div className="rounded-2xl border border-cyberTeal/20 bg-cyberTeal/10 px-4 py-3 text-sm text-cyberTeal">
              <p className="font-black uppercase tracking-wider">Status</p>
              <p className="mt-1 text-white">Draft ready for review</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Production stages</p>
                  <h2 className="mt-2 text-xl font-black text-white">Build the campaign in order</h2>
                </div>
                <span className="rounded-full border border-cyberPurple/20 bg-cyberPurple/10 px-3 py-1 text-2xs font-black uppercase tracking-wider text-cyberPurple">72% complete</span>
              </div>
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
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Launch checklist</p>
              <div className="mt-5 space-y-3">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyberTeal/20 text-xs font-black text-cyberTeal">✓</span>
                    <span className="text-sm text-cyberGray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">What happens next</p>
            <div className="mt-5 space-y-4">
              {NEXT_UP.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-black text-white">{item.label}</p>
                  <p className="mt-2 text-sm text-cyberGray">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyberPurple/20 bg-cyberPurple/10 p-4">
              <p className="text-sm font-black uppercase tracking-wider text-cyberPurple">Suggested handoff</p>
              <p className="mt-2 text-sm leading-6 text-cyberGray">Route the final cut to Community, then open Campaigns for the reward and milestone flow.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
