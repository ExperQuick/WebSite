/* data.js — single site-data loader */
let SITE_DATA = null;

/**
 * loadSiteData()
 * Loads /data/site-data.json once and caches it.
 */
async function loadSiteData() {
  if (SITE_DATA) return SITE_DATA;
  try {
    const res = await fetch('/data/site-data.json', {cache: "no-cache"});
    if (!res.ok) throw new Error('Failed to load site-data.json: ' + res.status);
    SITE_DATA = await res.json();
    return SITE_DATA;
  } catch (err) {
    console.error(err);
    return { blogs: [], tools: [], events: { hackathons: [], webinars: [] }, sponsors: [], collaborators: [], updates: [] };
  }
}
