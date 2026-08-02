import React, { useMemo, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';
import { fetchProducts } from '../lib/apiClient';

export default function StorePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    let mounted = true;
    fetchProducts()
      .then((p) => {
        if (mounted) setProducts(p);
      })
      .catch(() => {})
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(() => ['All', ...new Set(products.map((item) => item.category))], [products]);

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((item) => {
      const matchesText = [item.title, item.category, item.price].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
      return matchesText && matchesCategory;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === 'price') {
        return Number(String(a.price).replace(/[^\d.]/g, '')) - Number(String(b.price).replace(/[^\d.]/g, ''));
      }
      return 0;
    });
  }, [products, query, categoryFilter, sortBy]);

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
            <PrimaryButton className="inline-flex h-14 px-6" variant="accent" icon="shop">
              Checkout
            </PrimaryButton>
          </div>
        </section>

        <section className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-glow">
          <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr_1fr]">
            <div className="space-y-2">
              <label className="text-2xs uppercase tracking-wider text-cyberGray">Search merch</label>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title or category"
                className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-2xs uppercase tracking-wider text-cyberGray">Category</label>
              <select
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none"
              >
                {categories.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-2xs uppercase tracking-wider text-cyberGray">Sort</label>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-cyberBlack/20 px-4 py-3 text-sm text-white outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price">Price: Low to High</option>
              </select>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            <div className="text-cyberGray">Loading...</div>
          ) : (
            visibleProducts.map((item) => (
              <div key={item.id} className="space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-cyberPanelDeep p-6 shadow-glow-sm">
                <div className="flex h-44 items-end rounded-3xl border border-white/10 bg-gradient-to-br from-cyberPurple/40 to-cyberTeal/20 p-4">
                  <div className="rounded-full bg-black/20 px-3 py-1 text-2xs uppercase tracking-wider text-white">{item.category}</div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-black text-white">{item.title}</h2>
                  <p className="text-lg font-black text-cyberYellow">{item.price}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <PrimaryButton className="w-full sm:w-auto btn-small" variant="primary" icon="shop">
                    Add to cart
                  </PrimaryButton>
                  <PrimaryButton className="w-full sm:w-auto btn-small" variant="secondary" icon="search">
                    Details
                  </PrimaryButton>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </Layout>
  );
}
