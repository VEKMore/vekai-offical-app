import React from 'react';
import Layout from '../components/Layout';

const CHANNELS = [
  { name: 'Story circle', members: '24 members', active: true },
  { name: 'Scene feedback', members: '12 members', active: false },
  { name: 'Campaign crew', members: '9 members', active: false }
];

const MESSAGES = [
  { author: 'Mina', text: 'The new avatar mood fits the scene really well.' },
  { author: 'Jules', text: 'Can we add a stronger mythic reference to the opening shot?' },
  { author: 'Ari', text: 'Yes — I’ll update the storyboard and share the next draft tonight.' }
];

export default function CommunicationPage() {
  return (
    <Layout>
      <div className="space-y-8 p-8">
        <section className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-8 shadow-glow">
          <div className="max-w-2xl">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Communication hub</p>
            <h1 className="mt-3 text-4xl font-black text-white">Stay connected with collaborators, funders, and your creative community.</h1>
            <p className="mt-4 text-sm leading-7 text-cyberGray">Bring feedback, planning, and discussion into one place so every creative decision stays visible and shared.</p>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Channels</p>
            <div className="mt-5 space-y-3">
              {CHANNELS.map((channel) => (
                <div key={channel.name} className={`rounded-2xl border p-4 ${channel.active ? 'border-cyberTeal/30 bg-cyberTeal/10' : 'border-white/10 bg-white/5'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-black text-white">{channel.name}</p>
                    {channel.active && <span className="text-2xs font-black uppercase tracking-wider text-cyberTeal">Live</span>}
                  </div>
                  <p className="mt-2 text-xs text-cyberGray">{channel.members}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-cyberPanel/95 p-6 shadow-glow">
            <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Latest discussion</p>
            <div className="mt-5 space-y-3">
              {MESSAGES.map((message) => (
                <div key={message.author + message.text} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-black text-white">{message.author}</p>
                  <p className="mt-2 text-sm leading-6 text-cyberGray">{message.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-4 text-sm text-cyberGray">
              Add a note, share a scene revision, or start a new discussion thread.
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
