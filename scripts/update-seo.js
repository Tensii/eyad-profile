const fs = require('fs');
const path = require('path');

const url = 'https://eyad-profile-sigma.vercel.app/';

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Update og:url
html = html.replace(
  /(<meta[^>]*property="og:url"[^>]*content=")[^"]*("[^>]*>)/,
  `$1${url}$2`
);

// Add/replace canonical
const canonTag = `<link rel="canonical" href="${url}" />`;
if (/<link\s+rel="canonical"/i.test(html)) {
  html = html.replace(/<link\s+rel="canonical"[^>]*>/i, canonTag);
} else {
  const m = html.match(/<meta\s+name="description"[^>]*>\s*/i);
  if (m && m.index != null) {
    const idx = m.index + m[0].length;
    html = html.slice(0, idx) + `\n    ${canonTag}` + html.slice(idx);
  } else {
    html = html.replace(/<\/head>/i, `    ${canonTag}\n  </head>`);
  }
}

fs.writeFileSync(indexPath, html);

fs.writeFileSync(
  path.join(__dirname, '..', 'public', 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url>\n` +
    `    <loc>${url}</loc>\n` +
    `    <changefreq>weekly</changefreq>\n` +
    `    <priority>1.0</priority>\n` +
    `  </url>\n` +
    `</urlset>\n`
);

fs.writeFileSync(
  path.join(__dirname, '..', 'public', 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${url}sitemap.xml\n`
);

console.log('SEO files updated for', url);
