export type HofItem = {
  name: string;
  logo: string;
};

export const HOF_ITEMS: HofItem[] = [
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
];

export const NAV_ITEMS = [
  { id: 'about', label: 'about_me' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'hof', label: 'hall_of_fame' },
  { id: 'certs', label: 'certifications' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
];

export const EXPERIENCE_DATA = [
  {
    company: 'Eastern Province Eamana',
    role: 'Cyber Security Engineer',
    date: '2025/01 – Present',
    summary:
      'Leading a government security engineering team in Eastern Province, Saudi Arabia, overseeing security operations for critical infrastructure.',
    points: [
      'Led a team of engineers to manage security posture and operational priorities across the organization.',
      'Directed security assessments and technical decision-making for complex escalations.',
      'Improved internal security workflows and reporting quality across various government engagements.',
    ],
    tags: ['Leadership', 'Security Engineering', 'GovSec', 'Risk Management'],
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
];

export const PROJECTS_DATA = [
  {
    name: 'BreachPilot',
    desc: 'AI-assisted autonomous penetration testing platform designed to streamline security assessments through intelligent automation and adaptive scanning techniques.',
    tags: ['AI', 'Python', 'Automation', 'OSINT'],
    icon: '/icons/bi-lightning-charge.svg',
    github: 'https://github.com/Tensii/BreachPilot',
  },
  {
    name: 'reconHarvest',
    desc: 'Modular Python reconnaissance framework for automated target mapping, subdomain discovery, and surface area analysis across large-scale environments.',
    tags: ['Recon', 'Python', 'Security', 'Scalability'],
    icon: '/icons/bi-radar.svg',
    github: 'https://github.com/Tensii/reconHarvest-PythonV',
  },
];

export const CERTIFICATIONS_DATA = [
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
];

export const SKILLS_DATA = [
  { name: 'Penetration Testing', icon: '/icons/bi-shield-lock.svg' },
  { name: 'Web Application Security', icon: '/icons/bi-globe2.svg' },
  { name: 'Mobile Security Testing', icon: '/icons/bi-phone.svg' },
  { name: 'API Security Testing', icon: '/icons/bi-braces.svg' },
  { name: 'Active Directory Security', icon: '/icons/bi-diagram-3.svg' },
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
];

export const CONTACT_DATA = [
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
];
