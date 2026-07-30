import React from 'react';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../lib/apiClient';

export default function StorePage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchProducts()
      .then((p) => { if (mounted) setProducts(p) })
      .catch(() => {})
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  return (
    <Layout>
      <div className="space-y-10 p-8">
        <section className="mx-auto max-w-[1200px] rounded-4xl border border-white/10 bg-cyberPanel/95 p-8 shadow-glow">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-3xs font-black uppercase tracking-mega-xl text-cyberGray">Store</p>
              <h1 className="mt-3 text-4xl font-black text-white">Official Roleverse merchandise for creators and fans.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-cyberGray">Shop exclusive apparel, collectibles, and drops designed to complete your avatar identity and scene presence.</p>
            </div>
            <button className="inline-flex h-14 items-center justify-center rounded-2xl bg-cyberYellow px-6 text-sm font-black uppercase tracking-wide text-cyberSurface transition hover:bg-cyberYellowSoft">
              Checkout
            </button>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            <div className="text-cyberGray">Loading...</div>
          ) : (
            products.map((item) => (
              <div key={item.id} className="space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-cyberPanelDeep p-6 shadow-glow-sm">
                <div className="h-44 rounded-3xl bg-white/5" />
                <div className="space-y-2">
                  <div className="text-2xs uppercase tracking-wider text-cyberGray">{item.category}</div>
                  <h2 className="text-lg font-black text-white">{item.title}</h2>
                  <p className="text-lg font-black text-cyberYellow">{item.price}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button className="w-full rounded-2xl bg-cyberPurple px-4 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-cyberPurpleSoft sm:w-auto">Add to cart</button>
                  <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black uppercase tracking-wide text-white/80 transition hover:bg-white/10 sm:w-auto">Details</button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </Layout>
  );
}
