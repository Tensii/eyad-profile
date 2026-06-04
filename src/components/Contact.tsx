import React from 'react';
import { CONTACT_DATA } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" data-reveal>
      <h2 className="section-title">
        <span aria-hidden="true">&gt; ./</span>contact
      </h2>
      <div className="section-cmd" aria-hidden="true">
        <span className="prompt">root@tensi:~#</span> <span className="cmd">init_comms --secure</span>
      </div>

      <div className="contact-grid">
        {CONTACT_DATA.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="contact-card"
            {...(c.label === 'LinkedIn' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <div className="contact-icon">
              <img decoding="async" src={c.iconSvg} className="contact-icon-svg" alt="" />
            </div>

            <div className="contact-meta">
              <div className="contact-label">{c.label}</div>
              <div className="contact-value">{c.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
