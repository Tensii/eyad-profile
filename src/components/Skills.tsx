import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" data-reveal>
      <h2 className="section-title">
        <span aria-hidden="true">&gt; ./</span>skills
      </h2>
      <div className="section-cmd" aria-hidden="true">
        <span className="prompt">root@tensi:~#</span> <span className="cmd">./load_modules --all</span>
      </div>

      <div className="skill-tags">
        {SKILLS_DATA.map((s) => (
          <span key={s.name} className="tag" title={s.name}>
            <img
              className="tag-icon"
              src={s.icon}
              alt=""
              loading="lazy"
              decoding="async"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            {s.name}
          </span>
        ))}
      </div>
    </section>
  );
}
