const fs = require('fs');

const url = 'https://eyad-profile-sigma.vercel.app/';
const file = 'index.html';

let html = fs.readFileSync(file, 'utf8');

const jsonld = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Eyad Ayoub',
  url,
  jobTitle: 'Penetration Tester',
  description:
    'Penetration Tester & Security Researcher — portfolio, certifications, hall of fame, and contact.',
};

const scriptTag = `    <script type="application/ld+json">\n${JSON.stringify(jsonld, null, 2)}\n    </script>`;

if (/application\/ld\+json/.test(html)) {
  html = html.replace(
    /\s*<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/m,
    `\n${scriptTag}\n`
  );
} else {
  html = html.replace(/\n\s*<\/head>/, `\n${scriptTag}\n  </head>`);
}

fs.writeFileSync(file, html);
console.log('Added/updated JSON-LD in', file);
