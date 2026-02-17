const fs = require('fs');

const file = 'vercel.json';
const cfg = JSON.parse(fs.readFileSync(file, 'utf8'));

// Security headers
cfg.headers = [
  {
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "base-uri 'self'",
          "frame-ancestors 'none'",
          "img-src 'self' https: data:",
          "style-src 'self' 'unsafe-inline' https:",
          // Allow Vercel Analytics
          "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
          "connect-src 'self' https:",
          "font-src 'self' https: data:",
        ].join('; '),
      },
    ],
  },
];

fs.writeFileSync(file, JSON.stringify(cfg, null, 2) + '\n');
console.log('Updated security headers in', file);
