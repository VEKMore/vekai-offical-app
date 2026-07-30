// Mock categories API
import { SCENE_CATEGORIES } from '../../../data/siteData'

export default function handler(req, res) {
  res.status(200).json({ categories: SCENE_CATEGORIES || ['All Categories'] })
}
