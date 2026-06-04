import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { NAV_ITEMS } from './data/portfolioData';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import HallOfFame from './components/HallOfFame';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './portfolio.css';

function App() {
  const [activeSection, setActiveSection] = useState<string>('about');

  // Smooth reveal on scroll (no libs)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <div className="container">
          <Hero />

          <nav className="quick-nav" aria-label="Section navigation" data-reveal>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-chip ${activeSection === item.id ? 'active' : ''}`}
                aria-current={activeSection === item.id ? 'true' : undefined}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label.replace('_', ' ')}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="container">
        <About />
        <Experience />
        <Projects />
        <HallOfFame />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Eyad Ayoub (@Tensi4). All rights reserved.</p>
      </footer>
      <Analytics />
    </>
  );
}

export default App;
