/* ═══════════════════════════════════════════════════════════════════
   MOHAMED BAYA - PORTFOLIO · script.js
   ═══════════════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ───────────────────────────────────────────────────────────────
     1. BOOT SEQUENCE
     ─────────────────────────────────────────────────────────────── */
  const bootEl = document.getElementById('boot');
  const bootOutput = document.getElementById('boot-output');
  const bootSkip = document.getElementById('boot-skip');

  const bootLines = [
    { text: '> initializing portfolio.sys...', cls: '' },
    { text: '[ OK ] mounting /home/mohamed', cls: 'ok' },
    { text: '[ OK ] loading skills database', cls: 'ok' },
    { text: '[ OK ] decrypting projects.tar.gz', cls: 'ok' },
    { text: '[ OK ] establishing secure connection', cls: 'ok' },
    { text: '[INFO] welcome - system ready', cls: 'info' },
  ];

  const hasBooted = sessionStorage !== undefined
    ? (() => { try { return sessionStorage.getItem('booted'); } catch { return null; } })()
    : null;

  function endBoot() {
    if (!bootEl) return;
    bootEl.classList.add('boot--gone');
    setTimeout(() => bootEl.remove(), 500);
    try { sessionStorage.setItem('booted', '1'); } catch {}
  }

  if (hasBooted || prefersReducedMotion) {
    endBoot();
  } else if (bootEl && bootOutput) {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= bootLines.length) {
        clearInterval(interval);
        setTimeout(endBoot, 400);
        return;
      }
      const line = bootLines[i];
      const span = document.createElement('span');
      span.className = line.cls;
      span.textContent = line.text + '\n';
      bootOutput.appendChild(span);
      i++;
    }, 220);

    bootSkip?.addEventListener('click', () => {
      clearInterval(interval);
      endBoot();
    });
  }

  /* ───────────────────────────────────────────────────────────────
     2. TYPING EFFECT sur le nom dans le hero
     ─────────────────────────────────────────────────────────────── */
  const typedEl = document.getElementById('typed-name');
  if (typedEl && !prefersReducedMotion) {
    const fullText = typedEl.textContent;
    typedEl.textContent = '';
    setTimeout(() => {
      let j = 0;
      const typer = setInterval(() => {
        if (j >= fullText.length) {
          clearInterval(typer);
          return;
        }
        typedEl.textContent += fullText[j];
        j++;
      }, 70);
    }, hasBooted ? 400 : 1800);
  }

  /* ───────────────────────────────────────────────────────────────
     3. MENU MOBILE
     ─────────────────────────────────────────────────────────────── */
  const burger = document.getElementById('menu-burger');
  const nav = document.querySelector('.nav');
  burger?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    burger.classList.toggle('menu-burger--open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  // Ferme le menu quand on clique sur un lien
  nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      burger?.classList.remove('menu-burger--open');
      burger?.setAttribute('aria-expanded', 'false');
    });
  });

  /* ───────────────────────────────────────────────────────────────
     4. BILINGUE FR / EN
     ─────────────────────────────────────────────────────────────── */
  const i18n = {
    fr: {
      'nav.about': 'À propos',
      'nav.skills': 'Compétences',
      'nav.projects': 'Projets',
      'nav.certifs': 'Certifications',
      'nav.contact': 'Contact',

      'hero.statusLabel': 'Disponible · Mastère Cybersécurité · ESGI',
      'hero.subtitle': 'Sécurité <span class="accent">offensive</span>, exploitation bas niveau, <span class="accent">blue team</span>, sécurité défensive.',
      'hero.subtitle2': 'Alternant Expert Technique <a href="https://www.oodrive.com" target="_blank" rel="noopener">@ Oodrive</a>.',
      'hero.ctaProjects': '→ Voir mes projets',
      'hero.ctaContact': 'Me contacter',
      'hero.stat1': 'moyenne dernier trimestre',
      'hero.stat2': 'pwn.college sandboxing',
      'hero.stat3': 'années en cyber',

      'about.title': '$ whoami',
      'about.p1': 'J’ai intégré l’ESGI en 2022 sans expérience technique préalable. Après une première année validée avec une moyenne de <strong>11,5</strong>, j’ai développé un réel intérêt pour la cybersécurité dès la 3ᵉ année, ce qui m’a permis d’atteindre une moyenne supérieure à <strong>16</strong> et de maintenir ce niveau depuis.',
      'about.p2': 'Actuellement en 5ᵉ année, j’effectue mon alternance en tant qu’<strong>Expert Technique chez Oodrive</strong>, où j’interviens sur des environnements Linux/RHEL, l’automatisation avec Ansible, ainsi que sur des projets de déploiement et de migration client. À court terme, je souhaite évoluer vers un poste d’analyste SOC, avec pour objectif à plus long terme de me spécialiser en <strong>sécurité offensive (Red Team / Pentest)</strong>, domaine qui me passionne depuis plusieurs années.',
      'about.p3': 'Je porte un intérêt particulier à <strong>l’exploitation bas niveau</strong>, au <strong>reverse engineering</strong> et à <strong>la sécurisation des infrastructures</strong>. Les excellents résultats obtenus dans ces domaines reflètent autant mon investissement que ma passion pour la cybersécurité.',      'about.progressionTitle': '~ Progression académique',
      'about.year2022': 'Entrée à l\'ESGI',
      'about.year2024': 'Entrée en Spécialité Cybersécurité',
      'about.year2026': 'Mastère · Alternance Oodrive',

      'parcours.title': '$ cat ./parcours.log',
      'parcours.intro': 'Voici mon parcours académique présenté à travers des domaines de compétences complémentaires.',
      'parcours.domain1.meta': '2022 · 2023',
      'parcours.domain1.title': 'Fondations système & réseau',
      'parcours.domain1.summary': 'Je commence par comprendre les infrastructures, le Linux, les protocoles réseau et la logique de bas niveau pour poser une base technique solide.',
      'parcours.domain2.meta': '2023 · 2024',
      'parcours.domain2.title': 'Découverte cyber',
      'parcours.domain2.summary': 'Cryptographie, sécurisation des systèmes, vulnérabilités et premiers usages concrets de la cybersécurité, avec une approche plus pratique que théorique.',
      'parcours.domain3.meta': '2024 · 2025',
      'parcours.domain3.title': 'Offensive & reverse',
      'parcours.domain3.summary': 'Exploitation de binaires, reverse engineering, assembly, sandboxing et méthodes de test d’intrusion pour comprendre comment les attaques se construisent.',
      'parcours.domain4.meta': '2025 · 2026',
      'parcours.domain4.title': 'Défense & production',
      'parcours.domain4.summary': 'Alternance chez Oodrive : Linux/RHEL en production, Ansible, déploiements, migrations clients, hardening, détection, SIEM et réponse aux incidents.',
      'parcours.domain5.meta': 'Transversal',
      'parcours.domain5.title': 'Automatisation & veille',
      'parcours.domain5.summary': 'Python, Bash, Rust, scripts, OSINT, forensics et veille sur les techniques d’attaque pour transformer mon parcours en outils réutilisables.',
      'parcours.s1.b1': 'Planification de projets SI',
      'parcours.s1.e1': 'Requêtage et optimisation SQL',
      'parcours.s1.s1a': 'Cisco CCNA 1 et 2',
      'parcours.s1.s1b': 'Cryptographie, clés et certificats',
      'parcours.s1.s1c': 'Détection de vulnérabilités',
      'parcours.s1.s1d': 'Hot-plug et attaques HID',
      'parcours.s1.s1e': 'Language C et algorithmie',
      'parcours.s1.s1f': 'Linux administration avancée',
      'parcours.s1.s1g': 'Scripting Python',
      'parcours.s1.s1h': 'Sécurité WiFi',
      'parcours.s1.s1i': 'Versionning et Git',
      'parcours.s2.b2': 'Assembleur x64',
      'parcours.s2.b3': 'Projet annuel',
      'parcours.s2.b4': 'Blue team : IDS et monitoring',
      'parcours.s2.e2': 'Sécurité Windows',
      'parcours.s2.s2a': 'Crochetage',
      'parcours.s2.s2b': 'Cryptographie, clés et certificats',
      'parcours.s2.s2c': 'Gestion des exploits',
      'parcours.s2.s2d': 'Hardening et sécurité défensive',
      'parcours.s2.s2e': 'Language Rust',
      'parcours.s2.s2f': 'Linux administration avancée',
      'parcours.s2.s2g': 'Mission en entreprise',
      'parcours.s2.s2h': 'Préparation à la certification CEH',
      'parcours.s3.e1': 'Préparation certification GCP Associate Cloud Engineer',
      'parcours.s3.s1a': 'Assembleur avancé',
      'parcours.s3.s1b': 'Blue team : SIEM et détection des intrusions',
      'parcours.s3.s1c': 'Cisco CCNA Security',
      'parcours.s3.s1d': 'Computer forensic',
      'parcours.s3.s1e': 'Cryptographie avancée',
      'parcours.s3.s1f': 'Linux administration système et réseau avancée',
      'parcours.s3.s1g': 'OSINT : collecte d\'informations',
      'parcours.s3.s1h': 'Projet annuel',
      'parcours.s3.s1i': 'Rust : programmation système et réseau',
      'parcours.s3.s1j': 'Sécurité du système d\'information',
      'parcours.s3.s1k': 'Windows Active Directory',
      'parcours.s4.b2': 'Mission entreprise (Oodrive)',
      'parcours.s4.e2': 'Introduction au machine learning',
      'parcours.s4.s2a': 'Exploitation de binaires',
      'parcours.s4.s2b': 'Infrastructure à clé publique',
      'parcours.s4.s2c': 'Mécanismes de sécurité bas niveau',
      'parcours.s4.s2d': 'Ouverture fine et sécurité physique',
      'parcours.s4.s2e': 'Projet annuel (Vulnerability Analyzer)',
      'parcours.s4.s2f': 'Reverse engineering',
      'parcours.s4.s2g': 'Sécurité avec Python',
      'parcours.s4.s2h': 'Sécurité des cartes bancaires',
      'parcours.s4.s2i': 'Sécurité des IoT',
      'parcours.s4.s2j': 'Sécurité RFID et radio',
      'parcours.s4.s2k': 'Sécurité shellcode',
      'parcours.s4.s2l': 'Social engineering',
      'parcours.s5.m2e1': 'Initiation à l\'informatique quantique',
      'parcours.s5.m2t1': 'Anglais (préparation TOEIC 2)',
      'parcours.s5.t1a': 'Audit et test d\'intrusion',
      'parcours.s5.t1b': 'Blue team : Security Operation Center',
      'parcours.s5.t1c': 'Linux sécurité avancée LPIC 303',
      'parcours.s5.t1d': 'Sécurité avancée des systèmes Windows',
      'parcours.s5.t1e': 'Sécurité offensive',

      'skills.title': '$ ls ./skills',
      'skills.advanced': 'Avancé',
      'skills.intermediate': 'Intermédiaire',
      'skills.solid': 'Solide',
      'skills.offensive.title': 'Sécurité offensive',
      'skills.offensive.binary': 'Exploitation binaire',
      'skills.offensive.python': 'Sécurité Python',
      'skills.reverse.title': 'Reverse engineering',
      'skills.reverse.asm': 'Assembleur',
      'skills.reverse.exploits': 'Gestion d\'exploits',
      'skills.sysadmin.title': 'Admin système & Infra',
      'skills.sysadmin.prod': 'Production réelle (Oodrive)',
      'skills.sysadmin.hardening': 'Hardening CIS · audits',
      'skills.defensive.title': 'Sécurité défensive',
      'skills.defensive.blue': 'Blue team · SOC',
      'skills.defensive.detect': 'Règles Sigma · détection',
      'skills.defensive.ir': 'Réponse à incident',
      'skills.network.title': 'Réseau & Cloud',
      'skills.network.prep': '(en préparation)',
      'skills.dev.title': 'Développement & Scripting',
      'skills.dev.llm': 'Fine-tuning LLM (Llama 3, Mistral)',
      'skills.dev.prod': 'Projets en production',

      'projects.title': '$ cat ./projects',
      'projects.featured': '★ Projet phare · IA × Cyber',
      'projects.demo': '→ Démo',
      'projects.vuln.desc': 'Outil d\'analyse de code orienté sécurité par <strong>fine-tuning de LLM</strong> (Llama 3, Mistral 7B) - détection de CVE et mauvaises pratiques. Décliné en version Rust et interface web. Modèles publiés sur Hugging Face.',
      'projects.pwn.desc': 'Résolution de challenges d\'exploitation bas niveau : buffer overflow, ROP chains, sandboxing/chroot.',
      'projects.rat.title': 'RAT multi-OS - Étude de cas défensive',
      'projects.rat.desc': 'Développement d\'un outil d\'accès distant (keylogger, accès caméra, shell distant) fonctionnel sur Linux/macOS/Windows, repackagé en <strong>étude de cas défensive</strong> : architecture, démo vidéo, et <strong>règles Sigma/Wazuh de détection</strong> que j\'ai écrites pour le détecter.',
      'projects.rat.cta': '→ (Dépôt en cours de mise à jour - Indisponible pour le moment)',
      'projects.pwm.title': 'Password Manager en Assembleur',
      'projects.pwm.desc': 'Gestionnaire de mots de passe développé entièrement en <strong>assembleur</strong>, documenté et présenté en vidéo. Une maîtrise rare du très bas niveau, avec dépôt GitHub propre et script de déploiement.',
      'projects.pwm.stat': 'Démo vidéo livrée',

      'certifs.title': '$ ls ./certifications',
      'certifs.completed': 'Validé',
      'certifs.prep': 'En préparation',
      'certifs.inProgress': 'En cours',
      'certifs.esgi': 'Cybersécurité · Promotion 2025-2026',
      'certifs.regulTitle': '~ Cadre réglementaire maîtrisé',

      'contact.title': '$ ./contact',
      'contact.heading': 'Travaillons ensemble.',
      'contact.text': 'Je suis ouvert aux opportunités en <strong>SOC, pentest et cybersécurité offensive</strong>, en France ou en remote.',

      'footer.text': 'echo "Built with HTML/CSS/JS · Hosted on Cloudflare Pages · Source on GitHub"',
    },
    en: {
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.certifs': 'Certifications',
      'nav.contact': 'Contact',

      'hero.statusLabel': 'Available · MSc Cybersecurity · ESGI',
      'hero.subtitle': '<span class="accent">Offensive security</span>, low-level exploitation, and <span class="accent">AI applied</span> to code security.<br />Technical Expert Apprentice <a href="https://www.oodrive.com" target="_blank" rel="noopener">@ Oodrive</a>.',
      'hero.ctaProjects': '→ View my projects',
      'hero.ctaContact': 'Get in touch',
      'hero.stat1': 'latest trimester GPA',
      'hero.stat2': 'pwn.college sandboxing',
      'hero.stat3': 'years in cyber',

      'about.title': '$ whoami',
      'about.p1': 'I started ESGI in 2022 with no technical background and a <strong>11.5/20 GPA</strong>. In my third year, I had my breakthrough discovering cybersecurity - my grades jumped to <strong>16+</strong> and never came back down.',
      'about.p2': 'Today, in my 5th year, I work as a <strong>Technical Expert Apprentice at Oodrive</strong>, handling Linux/RHEL infrastructure, Ansible, deployments and customer migrations. My short-term goal: become a SOC analyst, then move into <strong>offensive security (Red Team / Pentest)</strong>, the field I\'ve been passionate about throughout my studies.',
      'about.p3': 'What drives me: <strong>low-level exploitation</strong>, <strong>reverse engineering</strong>, and lately <strong>AI applied to code security</strong>. My best grades are also my greatest passions.',
      'about.progressionTitle': '~ Academic progression',
      'about.year2022': 'Entered ESGI',
      'about.year2024': 'Cybersecurity track - breakthrough',
      'about.year2026': 'Final year · Oodrive apprenticeship',

      'parcours.title': '$ cat ./parcours.log',
      'parcours.intro': 'Here\'s my academic journey presented through complementary skill domains, rather than isolated subjects.',
      'parcours.domain1.meta': '2022 · 2023',
      'parcours.domain1.title': 'Systems & network foundations',
      'parcours.domain1.summary': 'I started by learning how infrastructure works: Linux, networking, protocols, and low-level logic to build a solid technical base.',
      'parcours.domain2.meta': '2023 · 2024',
      'parcours.domain2.title': 'Cybersecurity discovery',
      'parcours.domain2.summary': 'I explored cryptography, system security, vulnerabilities, and practical cybersecurity use cases with a focus on real-world understanding.',
      'parcours.domain3.meta': '2024 · 2025',
      'parcours.domain3.title': 'Offensive & reverse',
      'parcours.domain3.summary': 'I built skills in binary exploitation, reverse engineering, assembly, sandboxing, and intrusion testing to understand how attacks are engineered.',
      'parcours.domain4.meta': '2025 · 2026',
      'parcours.domain4.title': 'Defense & production',
      'parcours.domain4.summary': 'During my apprenticeship at Oodrive, I worked on production Linux/RHEL systems, Ansible, deployments, migrations, hardening, detection, and incident response.',
      'parcours.domain5.meta': 'Cross-cutting',
      'parcours.domain5.title': 'Automation & threat awareness',
      'parcours.domain5.summary': 'Python, Bash, Rust, scripting, OSINT, forensics, and continuous threat monitoring help me turn my journey into reusable tools and workflows.',
      'parcours.s1.b1': 'IT project planning',
      'parcours.s1.e1': 'SQL querying and optimization',
      'parcours.s1.s1a': 'Cisco CCNA 1 and 2',
      'parcours.s1.s1b': 'Cryptography, keys and certificates',
      'parcours.s1.s1c': 'Vulnerability detection',
      'parcours.s1.s1d': 'Hot-plug and HID attacks',
      'parcours.s1.s1e': 'C language and algorithms',
      'parcours.s1.s1f': 'Advanced Linux administration',
      'parcours.s1.s1g': 'Python scripting',
      'parcours.s1.s1h': 'WiFi security',
      'parcours.s1.s1i': 'Version control and Git',
      'parcours.s2.b2': 'x64 Assembly',
      'parcours.s2.b3': 'Annual project',
      'parcours.s2.b4': 'Blue team: IDS and monitoring',
      'parcours.s2.e2': 'Windows security',
      'parcours.s2.s2a': 'Lockpicking',
      'parcours.s2.s2b': 'Cryptography, keys and certificates',
      'parcours.s2.s2c': 'Exploit management',
      'parcours.s2.s2d': 'Hardening and defensive security',
      'parcours.s2.s2e': 'Rust language',
      'parcours.s2.s2f': 'Advanced Linux administration',
      'parcours.s2.s2g': 'Company mission',
      'parcours.s2.s2h': 'CEH certification preparation',
      'parcours.s3.e1': 'Preparation for GCP Associate Cloud Engineer certification',
      'parcours.s3.s1a': 'Advanced assembly',
      'parcours.s3.s1b': 'Blue team: SIEM and intrusion detection',
      'parcours.s3.s1c': 'Cisco CCNA Security',
      'parcours.s3.s1d': 'Computer forensics',
      'parcours.s3.s1e': 'Advanced cryptography',
      'parcours.s3.s1f': 'Advanced Linux system and network administration',
      'parcours.s3.s1g': 'OSINT: information gathering',
      'parcours.s3.s1h': 'Annual project',
      'parcours.s3.s1i': 'Rust: system and network programming',
      'parcours.s3.s1j': 'Information system security',
      'parcours.s3.s1k': 'Windows Active Directory',
      'parcours.s4.b2': 'Company mission (Oodrive)',
      'parcours.s4.e2': 'Introduction to machine learning',
      'parcours.s4.s2a': 'Binary exploitation',
      'parcours.s4.s2b': 'Public key infrastructure',
      'parcours.s4.s2c': 'Low-level security mechanisms',
      'parcours.s4.s2d': 'Fine-grained access and physical security',
      'parcours.s4.s2e': 'Annual project (Vulnerability Analyzer)',
      'parcours.s4.s2f': 'Reverse engineering',
      'parcours.s4.s2g': 'Python security',
      'parcours.s4.s2h': 'Bank card security',
      'parcours.s4.s2i': 'IoT security',
      'parcours.s4.s2j': 'RFID and radio security',
      'parcours.s4.s2k': 'Shellcode security',
      'parcours.s4.s2l': 'Social engineering',
      'parcours.s5.m2e1': 'Introduction to quantum computing',
      'parcours.s5.m2t1': 'English (TOEIC 2 preparation)',
      'parcours.s5.t1a': 'Audit and penetration testing',
      'parcours.s5.t1b': 'Blue team: Security Operation Center',
      'parcours.s5.t1c': 'Advanced Linux security LPIC 303',
      'parcours.s5.t1d': 'Advanced Windows security',
      'parcours.s5.t1e': 'Offensive security',

      'skills.title': '$ ls ./skills',
      'skills.advanced': 'Advanced',
      'skills.intermediate': 'Intermediate',
      'skills.solid': 'Solid',
      'skills.offensive.title': 'Offensive security',
      'skills.offensive.binary': 'Binary exploitation',
      'skills.offensive.python': 'Python security',
      'skills.reverse.title': 'Reverse engineering',
      'skills.reverse.asm': 'Assembly',
      'skills.reverse.exploits': 'Exploit management',
      'skills.sysadmin.title': 'SysAdmin & Infra',
      'skills.sysadmin.prod': 'Production (Oodrive)',
      'skills.sysadmin.hardening': 'CIS hardening · audits',
      'skills.defensive.title': 'Defensive security',
      'skills.defensive.blue': 'Blue team · SOC',
      'skills.defensive.detect': 'Sigma rules · detection',
      'skills.defensive.ir': 'Incident response',
      'skills.network.title': 'Network & Cloud',
      'skills.network.prep': '(in progress)',
      'skills.dev.title': 'Development & Scripting',
      'skills.dev.llm': 'LLM fine-tuning (Llama 3, Mistral)',
      'skills.dev.prod': 'Production projects',

      'projects.title': '$ cat ./projects',
      'projects.featured': '★ Flagship · AI × Cyber',
      'projects.demo': '→ Demo',
      'projects.vuln.desc': 'Security-oriented code analysis tool via <strong>LLM fine-tuning</strong> (Llama 3, Mistral 7B) - CVE detection and bad practice scanning. Available in Rust and web versions. Models published on Hugging Face.',
      'projects.pwn.desc': 'Low-level exploitation challenges: buffer overflow, ROP chains, sandboxing/chroot. <strong>Only one in my class to complete the Sandboxing section</strong> (18 exercises solved).',
      'projects.pwn.stat': 'Only one in class',
      'projects.rat.title': 'Multi-OS RAT - Defensive case study',
      'projects.rat.desc': 'Built a remote access tool (keylogger, camera access, remote shell) working on Linux/macOS/Windows, then repackaged as a <strong>defensive case study</strong>: architecture, video demo, and <strong>Sigma/Wazuh detection rules</strong> I wrote to detect it.',
      'projects.rat.cta': '→ Read case study',
      'projects.pwm.title': 'Password Manager in Assembly',
      'projects.pwm.desc': 'Password manager developed entirely in <strong>assembly</strong>, documented and presented in a video. A rare low-level mastery, with a clean GitHub repo and deployment script.',
      'projects.pwm.stat': 'Video demo delivered',

      'certifs.title': '$ ls ./certifications',
      'certifs.completed': 'Completed',
      'certifs.prep': 'In preparation',
      'certifs.inProgress': 'In progress',
      'certifs.esgi': 'Cybersecurity · Class of 2025-2026',
      'certifs.regulTitle': '~ Regulatory awareness',

      'contact.title': '$ ./contact',
      'contact.heading': 'Let\'s work together.',
      'contact.text': 'I\'m open to opportunities in <strong>SOC, pentest and offensive security</strong>, in France or remote. Feel free to reach out - I reply within 48h.',

      'footer.text': 'echo "Built with HTML/CSS/JS · Hosted on Cloudflare Pages · Source on GitHub"',
    },
  };

  const langToggle = document.getElementById('lang-toggle');
  let currentLang = (() => {
    try { return localStorage.getItem('lang') || (navigator.language?.startsWith('en') ? 'en' : 'fr'); }
    catch { return 'fr'; }
  })();

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch {}

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = i18n[lang]?.[key];
      if (val) el.innerHTML = val;
    });

    // Update toggle UI
    if (langToggle) {
      const active = langToggle.querySelector('.lang-toggle__active');
      const inactive = langToggle.querySelector('.lang-toggle__inactive');
      if (lang === 'fr') {
        active.textContent = 'FR';
        inactive.textContent = 'EN';
      } else {
        active.textContent = 'EN';
        inactive.textContent = 'FR';
      }
    }
  }

  langToggle?.addEventListener('click', () => {
    applyLang(currentLang === 'fr' ? 'en' : 'fr');
  });

  // Apply on load
  applyLang(currentLang);

  /* ───────────────────────────────────────────────────────────────
     5. SCROLL REVEAL (IntersectionObserver pour les sections)
     ─────────────────────────────────────────────────────────────── */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section').forEach(s => {
      s.style.opacity = '0';
      s.style.transform = 'translateY(30px)';
      s.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(s);
    });
  }
})();
