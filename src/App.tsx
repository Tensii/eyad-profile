import React, { useEffect, useMemo, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './portfolio.css';

type HofItem = {
  name: string;
  logo: string;
};

function App() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  // Hall of Fame items
  const HOF_ITEMS: HofItem[] = useMemo(
    () => [
      { name: 'Google VRP', logo: '/icons/si-google.svg' },
      { name: 'Sony', logo: '/icons/si-sony.svg' },
      { name: 'IBM', logo: '/icons/si-ibm.svg' },
      { name: 'Epic Games', logo: '/icons/si-epicgames.svg' },
      { name: 'TIDAL', logo: '/icons/si-tidal.svg' },
      { name: 'Grammarly', logo: '/icons/si-grammarly.svg' },
      { name: 'Marriott', logo: '/icons/si-marriott.svg' },
      { name: 'SHEIN', logo: '/icons/i8-shein.png' },
      { name: 'JetBlue', logo: '/icons/si-jetblue.svg' },
      { name: 'Pfizer', logo: '/pfizer.svg' },
      { name: 'Global', logo: '/global.png' },
      { name: 'Montea', logo: '/icons/si-homeassistant.svg' },
    ],
    []
  );

  useEffect(() => {
    // Keep the glitch effect as a brief accent, and respect reduced motion.
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setGlitchActive((prev) => !prev);
    }, 3000);

    // Tone down after a short period (still keeps the style, but less noisy)
    const stop = window.setTimeout(() => {
      window.clearInterval(interval);
      setGlitchActive(false);
    }, 15000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(stop);
    };
  }, []);

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
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const navItems = useMemo(
    () => [
      { id: 'about', label: 'about_me' },
      { id: 'experience', label: 'experience' },
      { id: 'hof', label: 'hall_of_fame' },
      { id: 'certs', label: 'certifications' },
      { id: 'skills', label: 'skills' },
      { id: 'contact', label: 'contact' },
    ],
    []
  );

  useEffect(() => {
    const sections = navItems
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
      }
    );

    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, [navItems]);

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
      <div className="scanline" />
      <div className="overlay" />

      <header>
        <div className="container">
          <div className="hero" data-reveal>
            <div className="hero-avatar" aria-hidden="true">
              <span className="hero-avatar__inner">EA</span>
            </div>

            <div className="hero-text">
              <div className="glitch-wrapper">
                <h1 className={`glitch ${glitchActive ? 'active' : ''}`} data-text="Eyad Ayoub">
                  Eyad Ayoub
                </h1>
              </div>

              <p className="subtitle">
                @Tensi4 | Penetration Tester | Security Researcher
              </p>

              <div className="hero-cta" aria-label="Primary actions">
                <a className="btn btn-glow" href="/eyad-ayoub-cv.pdf" download>
                  Download CV
                </a>
                <a className="btn btn-glow" href="https://www.linkedin.com/in/tensi4" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>

              <div className="status">
                <span className="indicator online" /> SYSTEM ONLINE
              </div>
            </div>
          </div>

          <nav className="quick-nav" aria-label="Section navigation" data-reveal>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-chip ${activeSection === item.id ? 'active' : ''}`}
                aria-current={activeSection === item.id ? 'true' : undefined}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="chip-prefix">&gt;</span> ./{item.label}
              </button>
            ))}

            {/* CV download moved to hero actions */}
          </nav>
        </div>
      </header>

      <main id="main-content" className="container">
        <section id="about" data-reveal>
          <h2 className="section-title">&gt; ./about_me</h2>
          <div className="section-cmd" aria-hidden="true">
            <span className="prompt">root@tensi:~#</span> <span className="cmd">cd about_me && cat summary.txt</span>
          </div>

          <div className="terminal-card card-hover">
            <p>
              <span className="prompt">root@tensi:~#</span>{' '}
              <span className="tw-cmd" style={{ ['--cmd-steps' as any]: 14, ['--cmd-dur' as any]: '0.9s' }}>
                cat summary.txt
              </span>
              <span className="tw-newline" aria-hidden="true" />

              <span
                className="tw-body"
                style={{
                  ['--body-steps' as any]: 260,
                  ['--body-dur' as any]: '5.5s',
                  ['--cmd-dur' as any]: '0.9s', // must match tw-cmd --cmd-dur
                }}
              >
                Experienced Penetration Tester with over 4 years of practical experience performing in-depth security assessments across
                web, mobile, API, network, and thick client environments. Proven ability to uncover complex vulnerabilities through advanced
                exploitation techniques, deep protocol and application analysis, and meticulous threat modeling. Adept at translating
                technical findings into clear, actionable remediation strategies for development and infrastructure teams. Continuously
                engaged in cybersecurity research, staying ahead of emerging attack vectors and evolving offensive methodologies…
                <span className="cursor" aria-hidden="true">
                  █
                </span>
              </span>
            </p>
          </div>
        </section>

        <section id="experience" data-reveal>
          <h2 className="section-title">&gt; ./experience</h2>

          <div className="section-cmd" aria-hidden="true">
            <span className="prompt">root@tensi:~#</span> <span className="cmd">cd experience && tail -n +1 timeline.log</span>
          </div>

          <div className="xp-timeline">
            {[
              {
                company: 'Eastern Province Eamana',
                role: 'Cyber Security Engineer',
                date: '2025/01 – Present',
                summary:
                  'Overseeing security operations for government hardware/software environments and driving security improvements across teams.',
                points: [
                  'Led a team of 3 engineers to manage security posture and operational priorities.',
                  'Directed security assessments and technical decision-making for escalations.',
                  'Improved internal security workflows and reporting quality across engagements.',
                ],
                tags: ['Leadership', 'Security Operations', 'Risk', 'Governance'],
              },
              {
                company: 'CyberGulf',
                role: 'Penetration Tester',
                date: '2024/09 – 2024/12',
                summary:
                  'Delivered web/mobile/API security testing engagements and helped standardize testing processes and client scoping.',
                points: [
                  'Performed penetration testing on Web, Mobile, and API targets across multiple clients.',
                  'Created internal guidelines to standardize testing methodology and reporting.',
                  'Bridged technical team and sales to ensure accurate scope and expectations.',
                ],
                tags: ['Web', 'Mobile', 'API', 'Reporting'],
              },
              {
                company: 'Pentix',
                role: 'Cybersecurity Consultant',
                date: '2024/02 – 2025/02',
                summary:
                  'Consulted on multi-surface security assessments, focusing on actionable remediation and measurable risk reduction.',
                points: [
                  'Assessed Web, Mobile, API, Network, and Thick Client applications.',
                  'Translated findings into clear remediation plans for dev/infra teams.',
                  'Researched emerging threats to keep testing coverage current.',
                ],
                tags: ['Assessments', 'Threat Research', 'Remediation'],
              },
              {
                company: 'Resecurity',
                role: 'Security Researcher',
                date: '2022/12 – 2023/12',
                summary:
                  'Conducted vulnerability identification and audits with a focus on intelligence-driven research and automation.',
                points: [
                  'Identified vulnerabilities using cyber intelligence techniques and testing.',
                  'Conducted network/security audits and documented risks and mitigations.',
                  'Automated scanning to surface potential security threats at scale.',
                ],
                tags: ['Research', 'Automation', 'Auditing'],
              },
            ].map((job) => (
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

        {/* ✅ Hall of Fame cards with CDN logos */}
        <section id="hof" data-reveal>
          <h2 className="section-title">&gt; ./hall_of_fame</h2>

          <div className="section-cmd" aria-hidden="true">
            <span className="prompt">root@tensi:~#</span> <span className="cmd">cat hall_of_fame.txt</span>
          </div>

          <p className="hof-kicker">
            Acknowledged by <span className="hof-count">25+</span> major companies around the globe
          </p>

          <div className="hof-cards">
            {HOF_ITEMS.map((c) => (
              <article key={c.name} className="hof-card card-hover" title={c.name} aria-label={c.name}>
                <div className="hof-logo-wrap" aria-hidden="true">
                  <img
                    className="hof-logo hof-logo--tint"
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

        <section id="certs" data-reveal>
          <h2 className="section-title">&gt; ./certifications</h2>

          <div className="section-cmd" aria-hidden="true">
            <span className="prompt">root@tensi:~#</span> <span className="cmd">ls -la certs/ && open links</span>
          </div>

          <div className="hof-cards">
            {[
              {
                name: 'eMAPT',
                sub: 'Mobile Application Penetration Tester',
                href: 'https://certs.ine.com/7b65c7a0-4871-4292-8382-fe277a260ff2#acc.KcR2LF31',
                logo: '/icons/bi-phone-fill.svg',
              },
              {
                name: 'CAP',
                sub: 'Certified Application Security Practitioner',
                href: 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXT4EbN2w6ECBRx7UCNm238DyGAghx9RMsz3v1htXv/Yr9NBh+TRqvhUkq/rY7/vNU9PJ0DDqOvdgkhd6d+vkK94=',
                logo: '/icons/bi-shield-lock-fill.svg',
              },
              {
                name: 'ACE',
                sub: 'API Certified Expert',
                href: 'https://www.credly.com/badges/652d0952-4835-46b1-a63d-b4e4cea1cfe1/public_url',
                logo: '/icons/bi-braces-asterisk.svg',
              },
            ].map((cert) => (
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
                    className="hof-logo hof-logo--tint"
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

        <section id="skills" data-reveal>
          <h2 className="section-title">&gt; ./skills_and_tools</h2>

          <div className="section-cmd" aria-hidden="true">
            <span className="prompt">root@tensi:~#</span> <span className="cmd">./list_skills_and_tools.sh</span>
          </div>

          <div className="terminal-card card-hover">
            <p>
              <span className="prompt">root@tensi:~#</span> list_skills_and_tools.sh
            </p>

            <div className="skill-tags">
              {[
                {
                  name: 'Penetration Testing',
                  icon: '/icons/bi-shield-lock.svg',
                },
                { name: 'Web Application Security', icon: '/icons/bi-globe2.svg' },
                { name: 'Mobile Security Testing', icon: '/icons/bi-phone.svg' },
                { name: 'API Security Testing', icon: '/icons/bi-braces.svg' },
                {
                  name: 'Active Directory Security',
                  icon: '/icons/bi-diagram-3.svg',
                },
                { name: 'Network Security', icon: '/icons/bi-router.svg' },
                { name: 'Vulnerability Assessment', icon: '/icons/bi-bug.svg' },
                { name: 'Security Auditing', icon: '/icons/bi-clipboard-check.svg' },
                { name: 'Burp Suite', icon: '/icons/si-burpsuite.svg' },
                { name: 'Metasploit', icon: '/icons/bi-lightning-charge.svg' },
                { name: 'Nmap', icon: '/icons/bi-radar.svg' },
                { name: 'OWASP ZAP', icon: '/icons/bi-shield-check.svg' },
                { name: 'Kali Linux', icon: '/icons/si-kalilinux.svg' },
                { name: 'Wireshark', icon: '/icons/si-wireshark.svg' },
                { name: 'Python', icon: '/icons/si-python.svg' },
                { name: 'Java', icon: '/icons/si-openjdk.svg' },
                { name: 'JavaScript', icon: '/icons/si-javascript.svg' },
                { name: 'C/C++', icon: '/icons/si-cplusplus.svg' },
                { name: 'Go', icon: '/icons/si-go.svg' },
                { name: 'PowerShell', icon: '/icons/si-powershell.svg' },
                { name: 'Bash Scripting', icon: '/icons/si-gnubash.svg' },
              ].map((s) => (
                <span key={s.name} className="tag tag--icon" title={s.name}>
                  <img
                    className="tag-icon tag-icon--tint"
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
          </div>
        </section>

        <section id="contact" data-reveal>
          <h2 className="section-title">&gt; ./contact</h2>

          <div className="section-cmd" aria-hidden="true">
            <span className="prompt">root@tensi:~#</span> <span className="cmd">init_comms --secure</span>
          </div>

          <div className="contact-grid">
            {[
              {
                label: 'Email',
                value: 'tensi4@protonmail.com',
                href: 'mailto:tensi4@protonmail.com',
                iconSvg: '/icons/bi-envelope-fill.svg',
              },
              {
                label: 'Phone',
                value: '+966 53 399 1872',
                href: 'tel:+966533991872',
                iconSvg: '/icons/bi-phone-fill.svg',
              },
              {
                label: 'LinkedIn',
                value: 'View Profile',
                href: 'https://www.linkedin.com/in/tensi4',
                iconSvg: '/icons/si-linkedin.svg',
              },
            ].map((c) => (
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
      </main>

      <footer>
        <p>SYSTEM TERMINATED. COPYRIGHT 2026 @TENSI4.</p>
      </footer>
      <Analytics />
    </>
  );
}

export default App;
