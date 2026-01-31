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

  // Hall of Fame items (ALL CDN logos)
  const HOF_ITEMS: HofItem[] = useMemo(
    () => [
      { name: 'Google VRP', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/google.svg' },
      { name: 'Sony', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/sony.svg' },
      { name: 'IBM', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/ibm.svg' },
      { name: 'Epic Games', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/epicgames.svg' },
      { name: 'TIDAL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tidal.svg' },
      { name: 'Grammarly', logo: 'https://cdn.simpleicons.org/grammarly/000000' },
      { name: 'Marriott', logo: 'https://cdn.simpleicons.org/marriott/000000' },
      { name: 'SHEIN', logo: 'https://img.icons8.com/ios-filled/50/000000/shein.png' },
      { name: 'JetBlue', logo: 'https://cdn.simpleicons.org/jetblue/000000' },

      // FIX FOR PFIZER: Using a direct SVG placeholder service
      { name: 'Pfizer', logo: '/pfizer.svg' },

      // FIX FOR GLOBAL: Using a reliable transparent PNG placeholder
      { name: 'Global', logo: '/global.png' },

      { name: 'Montea', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/homeassistant.svg' },
    ],
    []
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setGlitchActive((prev) => !prev);
    }, 2500);

    return () => window.clearInterval(interval);
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

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="scanline" />
      <div className="overlay" />

      <header>
        <div className="container">
          <div className="glitch-wrapper" data-reveal>
            <h1 className={`glitch ${glitchActive ? 'active' : ''}`} data-text="Eyad Ayoub">
              Eyad Ayoub
            </h1>
          </div>

          <p className="subtitle" data-reveal>
            @Tensi4 | Penetration Tester | Security Researcher
          </p>

          <div className="status" data-reveal>
            <span className="indicator online" /> SYSTEM ONLINE
          </div>

          <nav className="quick-nav" aria-label="Section navigation" data-reveal>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-chip ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="chip-prefix">&gt;</span> ./{item.label}
              </button>
            ))}

            {/* CV download lives in the navbar (same style as the other chips) */}
            <a href="/eyad-ayoub-cv.pdf" className="nav-chip nav-chip--cv" download>
              <span className="chip-prefix">&gt;</span> ./download_cv
            </a>
          </nav>
        </div>
      </header>

      <main className="container">
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
              <article key={c.name} className="hof-card card-hover">
                <div className="hof-logo-wrap" aria-hidden="true">
                  <img
                    className="hof-logo hof-logo--tint"
                    src={c.logo}
                    alt=""
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
                logo: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/phone-fill.svg',
              },
              {
                name: 'CAP',
                sub: 'Certified Application Security Practitioner',
                href: 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXT4EbN2w6ECBRx7UCNm238DyGAghx9RMsz3v1htXv/Yr9NBh+TRqvhUkq/rY7/vNU9PJ0DDqOvdgkhd6d+vkK94=',
                logo: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/shield-lock-fill.svg',
              },
              {
                name: 'ACE',
                sub: 'API Certified Expert',
                href: 'https://www.credly.com/badges/652d0952-4835-46b1-a63d-b4e4cea1cfe1/public_url',
                logo: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/braces-asterisk.svg',
              },
            ].map((cert) => (
              <a
                key={cert.name}
                className="hof-card card-hover cert-link"
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="hof-logo-wrap" aria-hidden="true">
                  <img
                    className="hof-logo hof-logo--tint"
                    src={cert.logo}
                    alt=""
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
                  icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/shield-lock.svg',
                },
                { name: 'Web Application Security', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/globe2.svg' },
                { name: 'Mobile Security Testing', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/phone.svg' },
                { name: 'API Security Testing', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/braces.svg' },
                {
                  name: 'Active Directory Security',
                  icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/diagram-3.svg',
                },
                { name: 'Network Security', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/router.svg' },
                { name: 'Vulnerability Assessment', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/bug.svg' },
                { name: 'Security Auditing', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/clipboard-check.svg' },

                // FIXED: reliable Burp Suite icon CDN
                { name: 'Burp Suite', icon: 'https://cdn.simpleicons.org/burpsuite/000000' },

                { name: 'Metasploit', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/lightning-charge.svg' },
                { name: 'Nmap', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/radar.svg' },
                { name: 'OWASP ZAP', icon: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/shield-check.svg' },

                // also more reliable as simpleicons CDN
                { name: 'Kali Linux', icon: 'https://cdn.simpleicons.org/kalilinux/000000' },
                { name: 'Wireshark', icon: 'https://cdn.simpleicons.org/wireshark/000000' },
                { name: 'Python', icon: 'https://cdn.simpleicons.org/python/000000' },
                { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/000000' },
                { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/000000' },
                { name: 'C/C++', icon: 'https://cdn.simpleicons.org/cplusplus/000000' },
                { name: 'Go', icon: 'https://cdn.simpleicons.org/go/000000' },
                { name: 'PowerShell', icon: 'https://cdn.simpleicons.org/powershell/000000' },
                { name: 'Bash Scripting', icon: 'https://cdn.simpleicons.org/gnubash/000000' },
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
                iconSvg: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope-fill.svg',
              },
              {
                label: 'Phone',
                value: '+966 53 399 1872',
                href: 'tel:+966533991872',
                icon: 'fas fa-phone',
              },
              {
                label: 'LinkedIn',
                value: 'View Profile',
                href: 'https://www.linkedin.com/in/tensi4',
                icon: 'fab fa-linkedin',
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="contact-card"
                {...(c.label === 'LinkedIn' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="contact-icon">
                  {c.iconSvg ? (
                    <img
                    decoding="async" src={c.iconSvg} className="contact-icon-svg" alt="" />
                  ) : (
                    <i className={c.icon} />
                  )}
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
