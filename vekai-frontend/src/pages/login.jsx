import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { isMemberMode, setMemberMode } from '../lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isMemberMode()) {
      router.replace('/dashboard');
    }
  }, [router]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter your email and password to continue.');
      return;
    }

    setMemberMode(true);
    router.push(typeof router.query.next === 'string' ? router.query.next : '/dashboard');
  };

  return (
    <Layout>
      <div className="mx-auto flex max-w-2xl flex-col gap-6 rounded-[2.5rem] border border-white/10 bg-cyberPanel/95 p-8 shadow-glow-lg">
        <div>
          <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Member access</p>
          <h1 className="mt-3 text-4xl font-black text-white">Welcome back</h1>
          <p className="mt-3 text-sm leading-7 text-cyberGray">Sign in to jump into the member dashboard, your campaign workspace, and your creator community.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-black uppercase tracking-wider text-cyberGray">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyberTeal/40"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-black uppercase tracking-wider text-cyberGray">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyberTeal/40"
              placeholder="••••••••"
            />
          </div>
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <button type="submit" className="w-full rounded-2xl bg-cyberPurple px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-cyberPurpleSoft">
            Enter member dashboard
          </button>
        </form>

        <p className="text-sm text-cyberGray">No account yet? <a href="/signup" className="font-black text-cyberTeal">Create one here</a>.</p>
      </div>
    </Layout>
  );
}
