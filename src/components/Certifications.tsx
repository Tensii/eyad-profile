import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certs" data-reveal>
      <h2 className="section-title">
        <span aria-hidden="true">&gt; ./</span>certifications
      </h2>
      <div className="section-cmd" aria-hidden="true">
        <span className="prompt">root@tensi:~#</span> <span className="cmd">verify_certs.sh</span>
      </div>

      <div className="hof-cards">
        {CERTIFICATIONS_DATA.map((cert) => (
          <a
            key={cert.name}
            className="hof-card card-hover cert-link"
            href={cert.href}
            title={`${cert.name} — ${cert.sub}`}
            aria-label={`${cert.name} — ${cert.sub}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hof-logo-wrap" aria-hidden="true">
              <img
                className="hof-logo"
                src={cert.logo}
                alt={`${cert.name} certification badge`}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = 'none';
                  const parent = img.parentElement;
                  if (parent) parent.classList.add('hof-logo-wrap--fallback');
                }}
              />
              <div className="hof-fallback">{cert.name.slice(0, 1)}</div>
            </div>

            <div className="hof-meta">
              <div className="hof-name">{cert.name}</div>
              <div className="hof-sub">{cert.sub}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
