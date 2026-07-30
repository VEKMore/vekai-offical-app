// Mock products API for store
import { MERCH_ITEMS } from '../../../data/siteData'

export default function handler(req, res) {
  const products = (MERCH_ITEMS || []).map((p, i) => ({ id: p.id || i, ...p }))
  res.status(200).json({ products })
}
