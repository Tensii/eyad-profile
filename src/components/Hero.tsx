import React from 'react';

export default function Hero() {
  return (
    <div className="hero" data-reveal>
      <div className="hero-avatar" aria-hidden="true">
        <span className="hero-avatar__inner">EA</span>
      </div>

      <div className="hero-text">
        <div className="glitch-wrapper">
          <h1 className="glitch" data-text="Eyad Ayoub">
            Eyad Ayoub
          </h1>
        </div>

        <p className="subtitle">Penetration Tester | Security Researcher</p>

        <div className="hero-cta" aria-label="Primary actions">
          <a className="btn btn-glow" href="/Eyad-Ayoub-Resume.pdf" download>
            Download CV
          </a>
          <a
            className="btn btn-glow"
            href="https://www.linkedin.com/in/tensi4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
