import React from 'react';

export default function About() {
  return (
    <section id="about" data-reveal>
      <h2 className="section-title">
        <span aria-hidden="true">&gt; ./</span>about_me
      </h2>
      <div className="section-cmd" aria-hidden="true">
        <span className="prompt">root@tensi:~#</span> <span className="cmd">cat about.txt</span>
      </div>

      <div className="terminal-card card-hover">
        <p>
          Penetration tester with four years of professional offensive security experience across web,
          mobile, API, network, and thick client environments. Recognized in bug bounty programs at
          Google, Sony, IBM, Pfizer, and Epic Games. Android security specialist with expertise in dynamic
          instrumentation, APK reverse engineering, and exploit development. Currently leading a
          government security engineering team in Eastern Province, Saudi Arabia.
        </p>
      </div>
    </section>
  );
}
