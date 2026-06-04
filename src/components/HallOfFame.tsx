import React from 'react';
import { HOF_ITEMS } from '../data/portfolioData';

export default function HallOfFame() {
  return (
    <section id="hof" data-reveal>
      <h2 className="section-title">
        <span aria-hidden="true">&gt; ./</span>hall_of_fame
      </h2>
      <div className="section-cmd" aria-hidden="true">
        <span className="prompt">root@tensi:~#</span>{' '}
        <span className="cmd">curl -I https://bounty.target</span>
      </div>

      <p className="hof-kicker">
        Acknowledged by <span className="hof-count">25+</span> major companies around the globe
      </p>

      <div className="hof-cards">
        {HOF_ITEMS.map((c) => (
          <article key={c.name} className="hof-card card-hover" title={c.name} aria-label={c.name}>
            <div className="hof-logo-wrap" aria-hidden="true">
              <img
                className="hof-logo"
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = 'none';
                  const parent = img.parentElement;
                  if (parent) parent.classList.add('hof-logo-wrap--fallback');
                }}
              />
              <div className="hof-fallback">{c.name.slice(0, 1)}</div>
            </div>

            <div className="hof-meta">
              <div className="hof-name">{c.name}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
