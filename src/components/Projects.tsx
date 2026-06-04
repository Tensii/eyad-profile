import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" data-reveal>
      <h2 className="section-title">
        <span aria-hidden="true">&gt; ./</span>projects
      </h2>
      <div className="section-cmd" aria-hidden="true">
        <span className="prompt">root@tensi:~#</span> <span className="cmd">ls -la projects/</span>
      </div>

      <div className="projects-grid">
        {PROJECTS_DATA.map((proj) => (
          <article key={proj.name} className="project-card card-hover">
            <div className="project-icon">
              <img
                src={proj.icon}
                alt=""
                aria-hidden="true"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
            <div className="project-content">
              <h3 className="project-name">{proj.name}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tags">
                {proj.tags.map((t) => (
                  <span key={t} className="proj-tag">
                    {t}
                  </span>
                ))}
              </div>
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link btn btn-glow"
                  style={{ marginTop: '10px' }}
                >
                  View Source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
