/* render.js — rendering helpers for all card types */

/* --------- BLOG CARD --------- */
function blogCard(item) {
  const cover = item.cover || '/assets/img/thumbnails/default.jpg';
  return `
    <article class="card blog-card" aria-labelledby="blog-${escapeHtml(item.id)}">
      <img src="${escapeAttr(cover)}" alt="${escapeAttr(item.title)}" loading="lazy">
      <h3 id="blog-${escapeHtml(item.id)}">${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary || '')}</p>
      <a class="read-more" href="${escapeAttr(item.link || '/pg/blogs.html?id=' + item.id)}">Read →</a>
    </article>
  `;
}

/* --------- TOOL CARD --------- */
function toolCard(item) {
  const logo = item.logo || '/assets/img/logos/tool-default.svg';
  const repo = item.repo ? `<a href="${escapeAttr(item.repo)}" target="_blank" rel="noopener">GitHub →</a>` : '';
  return `
    <article class="card tool-card" aria-labelledby="tool-${escapeHtml(item.id)}">
      <img src="${escapeAttr(logo)}" alt="${escapeAttr(item.name)}" loading="lazy">
      <h3 id="tool-${escapeHtml(item.id)}">${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.summary || '')}</p>
      <div class="card-actions">${repo}</div>
    </article>
  `;
}

/* --------- EVENT CARD --------- */
function eventCard(ev) {
  const status = ev.status ? `<span class="badge">${escapeHtml(ev.status)}</span>` : '';
  return `
    <article class="card event-card ${ev.status ? 'has-status' : ''}" aria-labelledby="event-${escapeHtml(ev.id || ev.title)}">
      <h3 id="event-${escapeHtml(ev.id || ev.title)}">${escapeHtml(ev.title)}</h3>
      <div class="date">${escapeHtml(ev.date || '')}</div>
      ${status}
      <p>${escapeHtml(ev.summary || '')}</p>
    </article>
  `;
}

/* --------- SPONSOR CARD --------- */
function sponsorCard(sp) {
  const logo = sp.logo || '/assets/img/sponsors/default.svg';
  return `
    <div class="sponsor-logo" role="img" aria-label="${escapeAttr(sp.name || 'sponsor')}">
      <a href="${escapeAttr(sp.url || '#')}" target="_blank" rel="noopener">
        <img src="${escapeAttr(logo)}" alt="${escapeAttr(sp.name)}" loading="lazy">
      </a>
    </div>
  `;
}

/* --------- COLLABORATOR CARD --------- */
function collaboratorCard(c) {
  const logo = c.logo || '/assets/img/collabs/default.svg';
  return `
    <div class="collab-logo">
      <a href="${escapeAttr(c.url || '#')}" target="_blank" rel="noopener">
        <img src="${escapeAttr(logo)}" alt="${escapeAttr(c.name)}" loading="lazy">
      </a>
    </div>
  `;
}

/* --------- UPDATE ITEM --------- */
function updateItem(up) {
  return `<li class="update-item"><strong>${escapeHtml(up.date || '')}:</strong> ${escapeHtml(up.title || '')}</li>`;
}

/* --------- UTIL: escape helpers (basic) --------- */
function escapeHtml(str) {
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(str) {
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
