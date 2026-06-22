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
      'hero.stat3': 'années en cyber',
      'hero.stat4': 'ans d\'alternance en informatique',
      'hero.bachelorLabel': 'Bachelor',
      'hero.bachelorDesc': 'Diplômé avec mention Bien',
      'hero.masterLabel': 'Mastère',
      'hero.masterDesc': 'Fin de préparation',

      'about.title': '$ whoami',
      'about.p1': 'J’ai intégré l’ESGI sans expérience technique préalable. J’ai construit des bases solides en systèmes, réseaux et administration, puis j’ai découvert un véritable intérêt pour la cybersécurité.',
      'about.p2': 'Actuellement en dernière année, j’effectue mon alternance en tant qu’<strong>Expert Technique chez Oodrive</strong>, où j’interviens sur des environnements Linux/RHEL, l’automatisation avec Ansible, ainsi que sur des projets de déploiement et de migration client. À court terme, je souhaite évoluer vers un poste d’analyste SOC, avec pour objectif à plus long terme de me spécialiser en <strong>sécurité offensive (Red Team / Pentest)</strong>, domaine qui me passionne depuis plusieurs années.',
      'about.p3': 'Je porte un intérêt particulier à <strong>l’exploitation bas niveau</strong>, au <strong>reverse engineering</strong> et à <strong>la sécurisation des infrastructures</strong>. Mon investissement et ma passion pour ces sujets se reflètent dans chaque projet que je mène.',
      'about.progressionTitle': '~ Progression académique',
      'about.year2022': 'Entrée à l\'ESGI',
      'about.year2024': 'Entrée en Spécialité Cybersécurité',
      'about.year2026': 'Mastère · Alternance Oodrive',

      'parcours.title': 'Parcours',
      'parcours.intro': 'Mon évolution technique, de la base système jusqu’à la cybersécurité opérationnelle.',
      'parcours.domain1.meta': '2022 – 2023',
      'parcours.domain1.title': 'Bases systèmes et réseaux',
      'parcours.domain1.summary': 'Maîtrise de Linux, administration serveur et protocoles réseau. Pose d’une fondation solide pour des environnements sécurisés.',
      'parcours.domain2.meta': '2023 – 2024',
      'parcours.domain2.title': 'Premiers pas en cybersécurité',
      'parcours.domain2.summary': 'Apprentissage des vulnérabilités, cryptographie et audits. Mise en pratique avec des analyses d’attaque et des exercices concrets.',
      'parcours.domain3.meta': '2024 – 2025',
      'parcours.domain3.title': 'Offensive et reverse engineering',
      'parcours.domain3.summary': 'Exploitation de binaires, assembly et reverse engineering. Construction de scénarios d’attaque et compréhension approfondie des failles.',
      'parcours.domain4.meta': '2025 – 2026',
      'parcours.domain4.title': 'Production et défense',
      'parcours.domain4.summary': 'Alternance Oodrive : Linux/RHEL, Ansible, hardening, déploiements et détection en environnement client.',
      'parcours.domain5.meta': 'Transversal',
      'parcours.domain5.title': 'Automatisation & veille',
      'parcours.domain5.summary': 'Scripts Python/Bash, OSINT et outils d’analyse. Automation des workflows et veille sur les techniques d’attaque.',

      'skills.title': 'Compétences clés',
      'skills.intro': 'Regroupées par pratique, avec un focus sur l’offensive, la défense et l’infrastructure.',
      'skills.offensive.title': 'Sécurité offensive',
      'skills.offensive.item1': 'Tests d’intrusion / Red Team',
      'skills.offensive.item2': 'Exploitation binaire, ROP, shellcode',
      'skills.offensive.item3': 'Reverse engineering et analyse de malwares',
      'skills.offensive.item4': 'Vulnérabilités web et applications',
      'skills.defense.title': 'Défense & détection',
      'skills.defense.item1': 'Blue Team, SOC et détection d’intrusions',
      'skills.defense.item2': 'SIEM / Wazuh / Sigma',
      'skills.defense.item3': 'Incident response et audit de sécurité',
      'skills.defense.item4': 'Forensics et investigation',
      'skills.systems.title': 'Systèmes & infrastructure',
      'skills.systems.item1': 'Linux / RHEL / Red Hat',
      'skills.systems.item2': 'Ansible, déploiements et hardening',
      'skills.systems.item3': 'Active Directory et gestion IAM',
      'skills.systems.item4': 'Réseau, TCP/IP, VPN et firewall',
      'skills.dev.title': 'Développement & automation',
      'skills.dev.item1': 'Python, Bash, Java et scripting',
      'skills.dev.item2': 'Automatisation et outils de sécurité',
      'skills.dev.item3': 'Projets en production / CI',
      'skills.dev.item4': 'OSINT et veille technologique',

      'projects.title': 'Projets',
      'projects.intro': 'Cas concrets et compétences mises en œuvre, orientés sécurité et production.',
      'projects.featuredBadge': 'Projet phare',
      'projects.p1.title': 'Plateforme de détection de vulnérabilités',
      'projects.p1.desc': 'Développement d’un moteur d’analyse de code orienté sécurité, basé sur des modèles LLM. J’ai conçu la chaîne de traitement, l’intégration Rust/Python et la publication d’un modèle sur Hugging Face.',
      'projects.p1.codeComment': '// Exemple de pipeline de détection',
      'projects.p1.stat1': 'Delivery du prototype en version Rust',
      'projects.p1.stat2': 'Focus sur la détection de CVE et de mauvaises pratiques',
      'projects.p1.tag3': 'Sécurité code',
      'projects.p1.tag4': 'IA',
      'projects.p2.desc': 'Réalisation d’un parcours avancé de reverse/exploitation : buffer overflow, chaînage ROP et confinement. <br>Projet axé sur la rigueur des tests et l’automatisation des environnements sécurisés.',
      'projects.p2.link': '→ Profil pwn.college',
      'projects.p3.title': 'Étude de cas défensive sur RAT',
      'projects.p3.desc': 'Analyse d’un accès distant multi-OS avec production de règles de détection et de recommandations de durcissement. <br>Objectif : transformer une menace potentielle en piste de défense opérationnelle.',
      'projects.p3.link': '→ GitHub privé (sur demande)',
      'projects.p3.tag2': 'Détection',
      'projects.p4.title': 'Gestionnaire de mots de passe en assembleur',
      'projects.p4.desc': 'Conception d’un outil de stockage sécurisé en assembleur, documenté et livré avec script de déploiement. Projet démontrant une maîtrise du bas niveau et des bonnes pratiques de protection des secrets.',
      'projects.p4.stat1': 'Livraison d’un prototype fonctionnel',
      'projects.p4.stat2': 'Mise en valeur des compétences en ingénierie logicielle',
      'projects.p4.tag3': 'Sécurité',

      'certifs.title': 'Certifications / Diplômes',
      'certifs.intro': 'Diplômes et certifications sélectionnés pour mettre en valeur mon parcours technique et mes acquis.',
      'certifs.groupCompleted': 'Obtenus',
      'certifs.groupPrep': 'En préparation',
      'certifs.statusObtained': 'Obtenu',
      'certifs.statusInProgress': 'En cours',
      'certifs.statusGoal': 'Objectif',
      'certifs.bachelor.org': 'ESGI · Mention Bien',
      'certifs.toeic.org': 'ETS · Niveau anglais',
      'certifs.master.title': 'Mastère Cybersécurité',
      'certifs.master.org': 'ESGI · Promotion 2025-2026',
      'certifs.regulTitle': '~ Cadre réglementaire maîtrisé',
      'certifs.tag.rgpd': 'RGPD',

      'contact.title': '$ ./contact',
      'contact.heading': 'Travaillons ensemble.',
      'contact.text': 'Je suis ouvert aux opportunités en <strong>SOC, pentest et cybersécurité offensive</strong>, en France ou en remote.',
      'contact.text2': 'N\'hésitez pas à me contacter pour discuter de collaborations, opportunités professionnelles, ou simplement échanger sur la cybersécurité !',
    },
    en: {
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.certifs': 'Certifications',
      'nav.contact': 'Contact',

      'hero.statusLabel': 'Available · MSc Cybersecurity · ESGI',
      'hero.subtitle': '<span class="accent">Offensive security</span>, low-level exploitation, <span class="accent">blue team</span>, defensive security.',
      'hero.subtitle2': 'Technical Expert Apprentice <a href="https://www.oodrive.com" target="_blank" rel="noopener">@ Oodrive</a>.',
      'hero.ctaProjects': '→ View my projects',
      'hero.ctaContact': 'Get in touch',
      'hero.stat3': 'years in cyber',
      'hero.stat4': 'years of apprenticeship in IT',
      'hero.bachelorLabel': 'Bachelor',
      'hero.bachelorDesc': 'Graduated with Honors',
      'hero.masterLabel': 'MSc',
      'hero.masterDesc': 'In progress',

      'about.title': '$ whoami',
      'about.p1': 'I joined ESGI with no prior technical experience. I built solid foundations in systems, networking and administration, then discovered a genuine passion for cybersecurity.',
      'about.p2': 'Now in my final year, I\'m doing my apprenticeship as a <strong>Technical Expert at Oodrive</strong>, working on Linux/RHEL environments, automation with Ansible, and customer deployment/migration projects. In the short term, I want to move into a SOC analyst role, with the longer-term goal of specializing in <strong>offensive security (Red Team / Pentest)</strong>, a field I\'ve been passionate about for several years.',
      'about.p3': 'I have a particular interest in <strong>low-level exploitation</strong>, <strong>reverse engineering</strong> and <strong>infrastructure security</strong>. My dedication and passion for these topics show in every project I work on.',
      'about.progressionTitle': '~ Academic progression',
      'about.year2022': 'Entered ESGI',
      'about.year2024': 'Entered Cybersecurity specialization',
      'about.year2026': 'MSc · Oodrive apprenticeship',

      'parcours.title': 'Journey',
      'parcours.intro': 'My technical evolution, from system fundamentals to operational cybersecurity.',
      'parcours.domain1.meta': '2022 – 2023',
      'parcours.domain1.title': 'Systems & network fundamentals',
      'parcours.domain1.summary': 'Mastering Linux, server administration and network protocols. Laying a solid foundation for secure environments.',
      'parcours.domain2.meta': '2023 – 2024',
      'parcours.domain2.title': 'First steps in cybersecurity',
      'parcours.domain2.summary': 'Learning about vulnerabilities, cryptography and audits. Hands-on practice through attack analysis and real exercises.',
      'parcours.domain3.meta': '2024 – 2025',
      'parcours.domain3.title': 'Offensive security & reverse engineering',
      'parcours.domain3.summary': 'Binary exploitation, assembly and reverse engineering. Building attack scenarios and gaining a deep understanding of vulnerabilities.',
      'parcours.domain4.meta': '2025 – 2026',
      'parcours.domain4.title': 'Production & defense',
      'parcours.domain4.summary': 'Oodrive apprenticeship: Linux/RHEL, Ansible, hardening, deployments and detection in a customer environment.',
      'parcours.domain5.meta': 'Cross-cutting',
      'parcours.domain5.title': 'Automation & threat awareness',
      'parcours.domain5.summary': 'Python/Bash scripts, OSINT and analysis tools. Automating workflows and tracking attack techniques.',

      'skills.title': 'Key skills',
      'skills.intro': 'Grouped by practice area, with a focus on offense, defense and infrastructure.',
      'skills.offensive.title': 'Offensive security',
      'skills.offensive.item1': 'Penetration testing / Red Team',
      'skills.offensive.item2': 'Binary exploitation, ROP, shellcode',
      'skills.offensive.item3': 'Reverse engineering and malware analysis',
      'skills.offensive.item4': 'Web and application vulnerabilities',
      'skills.defense.title': 'Defense & detection',
      'skills.defense.item1': 'Blue Team, SOC and intrusion detection',
      'skills.defense.item2': 'SIEM / Wazuh / Sigma',
      'skills.defense.item3': 'Incident response and security audits',
      'skills.defense.item4': 'Forensics and investigation',
      'skills.systems.title': 'Systems & infrastructure',
      'skills.systems.item1': 'Linux / RHEL / Red Hat',
      'skills.systems.item2': 'Ansible, deployments and hardening',
      'skills.systems.item3': 'Active Directory and IAM management',
      'skills.systems.item4': 'Networking, TCP/IP, VPN and firewall',
      'skills.dev.title': 'Development & automation',
      'skills.dev.item1': 'Python, Bash, Java and scripting',
      'skills.dev.item2': 'Automation and security tooling',
      'skills.dev.item3': 'Production projects / CI',
      'skills.dev.item4': 'OSINT and tech monitoring',

      'projects.title': 'Projects',
      'projects.intro': 'Concrete case studies and applied skills, focused on security and production.',
      'projects.featuredBadge': 'Flagship project',
      'projects.p1.title': 'Vulnerability detection platform',
      'projects.p1.desc': 'Built a security-focused code analysis engine powered by LLMs. I designed the processing pipeline, the Rust/Python integration, and published a model on Hugging Face.',
      'projects.p1.codeComment': '// Example detection pipeline',
      'projects.p1.stat1': 'Prototype delivered in Rust',
      'projects.p1.stat2': 'Focused on CVE detection and bad-practice scanning',
      'projects.p1.tag3': 'Code security',
      'projects.p1.tag4': 'AI',
      'projects.p2.desc': 'Completed an advanced reverse engineering/exploitation track: buffer overflows, ROP chaining and containment. <br>A project focused on rigorous testing and automating secure environments.',
      'projects.p2.link': '→ pwn.college profile',
      'projects.p3.title': 'Defensive case study on a RAT',
      'projects.p3.desc': 'Analyzed a multi-OS remote access tool, producing detection rules and hardening recommendations. <br>Goal: turn a potential threat into an operational defense playbook.',
      'projects.p3.link': '→ Private GitHub (on request)',
      'projects.p3.tag2': 'Detection',
      'projects.p4.title': 'Password manager written in Assembly',
      'projects.p4.desc': 'Designed a secure storage tool written in Assembly, documented and shipped with a deployment script. A project demonstrating low-level mastery and secrets-protection best practices.',
      'projects.p4.stat1': 'Working prototype delivered',
      'projects.p4.stat2': 'Showcases software engineering skills',
      'projects.p4.tag3': 'Security',

      'certifs.title': 'Certifications / Degrees',
      'certifs.intro': 'Degrees and certifications selected to highlight my technical background and skills.',
      'certifs.groupCompleted': 'Completed',
      'certifs.groupPrep': 'In preparation',
      'certifs.statusObtained': 'Completed',
      'certifs.statusInProgress': 'In progress',
      'certifs.statusGoal': 'Goal',
      'certifs.bachelor.org': 'ESGI · High Honors',
      'certifs.toeic.org': 'ETS · English level',
      'certifs.master.title': 'MSc Cybersecurity',
      'certifs.master.org': 'ESGI · Class of 2025-2026',
      'certifs.regulTitle': '~ Regulatory framework mastered',
      'certifs.tag.rgpd': 'GDPR',

      'contact.title': '$ ./contact',
      'contact.heading': 'Let\'s work together.',
      'contact.text': 'I\'m open to opportunities in <strong>SOC, pentest and offensive security</strong>, in France or remote.',
      'contact.text2': 'Feel free to reach out to discuss collaborations, professional opportunities, or just to chat about cybersecurity!',
    },
  };

  const langToggle = document.getElementById('lang-toggle');
  let currentLang = (() => {
    try { return localStorage.getItem('lang') || (navigator.language?.startsWith('en') ? 'en' : 'fr'); }
    catch { return 'fr'; }
  })();

  function applyLang(lang, animate = true) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch {}

    const elements = document.querySelectorAll('[data-i18n]');
    const swapContent = () => {
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = i18n[lang]?.[key];
        if (val) el.innerHTML = val;
      });
    };

    if (animate && !prefersReducedMotion) {
      elements.forEach(el => el.classList.add('i18n-fading'));
      setTimeout(() => {
        swapContent();
        elements.forEach(el => el.classList.remove('i18n-fading'));
      }, 180);
    } else {
      swapContent();
    }

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

  // Apply on load (pas de fondu nécessaire avant le premier rendu)
  applyLang(currentLang, false);

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
