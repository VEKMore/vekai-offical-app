import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TOP_NAV = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'explore', label: 'Explore', href: '/explore' },
  { key: 'community', label: 'Community', href: '/community' },
  { key: 'campaigns', label: 'Campaigns', href: '/campaigns' },
  { key: 'store', label: 'Store', href: '/store' }
];

const SIDEBAR_NAV = [
  { key: 'home', label: 'My Avatar', href: '/' },
  { key: 'explore', label: 'My Scenes', href: '/explore' },
  { key: 'community', label: 'My Feed', href: '/community' },
  { key: 'campaigns', label: 'Active Campaigns', href: '/campaigns' },
  { key: 'store', label: 'Merchandise Store', href: '/store' }
];

export default function Layout({ children }) {
  const router = useRouter();
  const activePath = router.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activePath]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-cyberBlack text-cyberWhite font-sans">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[540px] overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyberPurple/20 blur-3xl" />
        <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-cyberTeal/15 blur-3xl" />
        <div className="absolute left-1/2 top-4 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-cyberSurface/95 px-4 py-4 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <span className="text-sm font-black uppercase tracking-mega-xl text-white/90">ROLEVERSE</span>
            <nav aria-label="Primary site navigation" className="hidden items-center gap-5 text-3xs uppercase tracking-wider md:flex">
              {TOP_NAV.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`transition-colors ${activePath === item.href ? 'text-cyberTeal font-black' : 'text-cyberGrayMuted hover:text-white font-semibold'}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-black uppercase tracking-wide text-white transition hover:border-white/20 hover:bg-white/10 md:hidden"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black uppercase tracking-wide text-white transition hover:border-white/20 hover:bg-white/10">
              Log Out
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          aria-hidden={!mobileMenuOpen}
          className={`fixed inset-x-0 top-[5.5rem] z-40 overflow-hidden border-b border-white/10 bg-cyberSurface/95 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <nav aria-label="Mobile primary navigation" className="mx-auto flex max-w-[1480px] flex-col gap-2 px-4 py-4">
            {TOP_NAV.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-2xl px-3 py-3 text-left text-sm uppercase tracking-wide transition ${activePath === item.href ? 'bg-cyberTeal/10 text-cyberTeal' : 'border border-white/10 bg-white/5 text-cyberGrayMuted hover:border-white/20 hover:bg-white/10 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="pt-24">
        <div className="mx-auto flex w-full max-w-[1480px] gap-6 px-4 pb-12 sm:px-6 lg:px-8">
          <aside className="hidden w-80 shrink-0 flex-col gap-6 rounded-3xl border border-white/10 bg-cyberSurface/95 p-6 shadow-glow-md backdrop-blur-xl md:flex">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyberPurple to-cyberTeal text-base font-black text-cyberSurface">A</div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-mega text-white">testuser@example.com</p>
                    <p className="mt-1 text-xs uppercase tracking-mega text-cyberGrayMuted">Creator</p>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                {SIDEBAR_NAV.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`block rounded-2xl px-4 py-3 text-left text-sm uppercase tracking-wide transition ${activePath === item.href ? 'bg-cyberPanelShade text-cyberTeal shadow-glow-sm' : 'bg-white/5 text-cyberGrayMuted hover:bg-white/10'}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyberPurple/70 to-cyberTeal/20 p-5 text-white shadow-lg shadow-cyberTeal/10">
              <p className="text-3xs font-black uppercase tracking-mega-xl text-white/80">STEAL THE SPOTLIGHT</p>
              <p className="mt-3 text-sm leading-6 text-white/90">Cast yourself into a new scene and climb today’s leaderboard.</p>
                <Link href="/explore" className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-cyberSurface px-4 py-3 text-sm font-black uppercase tracking-wide-md text-white transition hover:bg-white/10">
                  Cast a Scene
                </Link>
              <Link href="/community" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black uppercase tracking-wide text-white/80 transition hover:bg-white/10">
                Community Hub
              </Link>
              <Link href="/" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black uppercase tracking-wide text-white/80 transition hover:bg-white/10">
                Account Settings
              </Link>
            </div>
          </aside>

          <main className="flex-1 min-h-[calc(100vh-6rem)]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
