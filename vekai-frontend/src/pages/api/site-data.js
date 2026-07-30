import * as siteData from '../../data/siteData';

export default function handler(req, res) {
  res.status(200).json(siteData);
}
