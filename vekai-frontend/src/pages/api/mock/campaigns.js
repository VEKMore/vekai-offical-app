// Mock campaigns API
import { CROWN_CUTS } from '../../../data/siteData'

export default function handler(req, res) {
  const campaigns = (CROWN_CUTS || []).map((c, i) => ({ id: c.id || i, ...c }))
  res.status(200).json({ campaigns })
}
