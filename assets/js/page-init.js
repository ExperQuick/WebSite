/* page-init.js — generic subpage initializer
   Expects <body data-page="blogs|tools|events|sponsors|collaborators|updates"> */

async function initPage() {
  const page = document.body.getAttribute('data-page');
  const data = await loadSiteData();
  const container = document.getElementById('page-content');

  if (!container) return;

  if (page === 'blogs') {
    container.innerHTML = (data.blogs || []).map(blogCard).join('');
    return;
  }
  if (page === 'tools') {
    container.innerHTML = (data.tools || []).map(toolCard).join('');
    return;
  }
  if (page === 'events') {
    const arr = (data.events && ((data.events.hackathons || []).concat(data.events.webinars || []))) || [];
    container.innerHTML = arr.map(eventCard).join('');
    return;
  }
  if (page === 'sponsors') {
    container.innerHTML = (data.sponsors || []).map(sponsorCard).join('');
    return;
  }
  if (page === 'collaborators') {
    container.innerHTML = (data.collaborators || []).map(collaboratorCard).join('');
    return;
  }
  if (page === 'updates') {
    const listHtml = (data.updates || []).map(updateItem).join('');
    // if page-content is ul
    if (container.tagName && container.tagName.toLowerCase() === 'ul') {
      container.innerHTML = listHtml;
    } else {
      container.innerHTML = `<ul class="updates-list">${listHtml}</ul>`;
    }
    return;
  }
}

document.addEventListener('DOMContentLoaded', initPage);
