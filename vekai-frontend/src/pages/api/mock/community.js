// Mock community posts API
import { TRENDING_FEED } from '../../../data/siteData'

export default function handler(req, res) {
  const posts = (TRENDING_FEED || []).map((p, i) => ({ id: p.id || i, ...p }))
  res.status(200).json({ posts })
}
