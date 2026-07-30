export async function getSiteData() {
  const res = await fetch('/api/site-data');
  if (!res.ok) throw new Error('Failed to fetch site data');
  return res.json();
}

export async function fetchScenes() {
  const data = await getSiteData();
  return data.SCENE_LIBRARY || [];
}

export async function fetchCategories() {
  const data = await getSiteData();
  return data.SCENE_CATEGORIES || ['All Categories'];
}

export async function fetchScenesMock(q) {
  const url = q ? `/api/mock/scenes?q=${encodeURIComponent(q)}` : '/api/mock/scenes'
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch mock scenes')
  const { scenes } = await res.json()
  return scenes || []
}

export async function fetchCategoriesMock() {
  const res = await fetch('/api/mock/categories')
  if (!res.ok) throw new Error('Failed to fetch mock categories')
  const { categories } = await res.json()
  return categories || ['All Categories']
}

export async function fetchCommunityPosts() {
  const res = await fetch('/api/mock/community')
  if (!res.ok) throw new Error('Failed to fetch community posts')
  const { posts } = await res.json()
  return posts || []
}

export async function fetchCampaigns() {
  const res = await fetch('/api/mock/campaigns')
  if (!res.ok) throw new Error('Failed to fetch campaigns')
  const { campaigns } = await res.json()
  return campaigns || []
}

export async function fetchProducts() {
  const res = await fetch('/api/mock/products')
  if (!res.ok) throw new Error('Failed to fetch products')
  const { products } = await res.json()
  return products || []
}
