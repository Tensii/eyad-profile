import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" data-reveal>
      <h2 className="section-title">
        <span aria-hidden="true">&gt; ./</span>experience
      </h2>
      <div className="section-cmd" aria-hidden="true">
        <span className="prompt">root@tensi:~#</span>{' '}
        <span className="cmd">cd experience && tail -n +1 timeline.log</span>
      </div>

      <div className="xp-timeline">
        {EXPERIENCE_DATA.map((job) => (
          <article key={`${job.company}-${job.role}`} className="xp-item card-hover" data-reveal>
            <div className="xp-dot" aria-hidden="true" />

            <div className="xp-card">
              <div className="xp-top">
                <div className="xp-title">
                  <div className="xp-company">{job.company}</div>
                  <div className="xp-role">{job.role}</div>
                </div>
                <div className="xp-date">{job.date}</div>
              </div>

              <p className="xp-summary">{job.summary}</p>

              <div className="xp-subtitle">Responsibilities</div>
              <ul className="xp-points">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <div className="xp-tags">
                {job.tags.map((t) => (
                  <span key={t} className="xp-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
