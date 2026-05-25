# 🎯 Mohamed BAYA — Portfolio Personnel

Portfolio "tasteful terminal" — HTML/CSS/JS pur, bilingue FR/EN, sécurisé, prêt à déployer.

---

## 📁 Structure du projet

```
portfolio/
├── index.html              ← La page principale (toute la structure)
├── style.css               ← Tous les styles
├── script.js               ← Boot sequence, langue, menu mobile
├── _headers                ← Headers sécurité pour Cloudflare Pages
├── robots.txt              ← SEO
├── sitemap.xml             ← SEO
├── README.md               ← Ce fichier
├── .well-known/
│   └── security.txt        ← Politique de divulgation responsable (RFC 9116)
└── assets/
    └── favicon.svg         ← L'icône du site
```

---

## 🚀 Comment ça fonctionne en gros ?

Un site web statique, c'est juste **3 fichiers** :

- `index.html` → la **structure** (les titres, paragraphes, sections, boutons...)
- `style.css` → l'**apparence** (couleurs, polices, espaces, animations)
- `script.js` → l'**interactivité** (boot animation, toggle langue, menu...)

Tu n'as **rien à compiler**. Ouvre `index.html` dans ton navigateur et tu vois le site. C'est tout.

---

## 🔧 Comment customiser

### 1. Changer ton nom / ton titre

Ouvre `index.html`, cherche `Mohamed BAYA` et remplace si besoin. Le `<h1>` du hero est dans la section `<section class="hero">`.

### 2. Changer les textes en français

Ouvre `index.html`, modifie directement les textes entre les balises HTML.
Pour les textes traduits, ouvre aussi `script.js` et modifie l'objet `i18n.fr` (équivalent EN dans `i18n.en`).

### 3. Changer la couleur d'accent

Ouvre `style.css`, ligne ~11, change `--accent: #7dd3fc;` (cyan actuel).
Suggestions :

- Vert phosphore : `#00ff9c`
- Ambre : `#ffb454`
- Magenta : `#ec4899`
- Rouge rubis : `#f43f5e`

Toutes les couleurs du site sont des **variables CSS** dans `:root {}` — change une seule ligne et tout le site se met à jour.

### 4. Ajouter / modifier un projet

Cherche dans `index.html` la balise `<!-- PROJET 1 : ... -->`.
Copie un bloc `<article class="project">...</article>` et adapte-le.

### 5. Ajouter / modifier une compétence

Cherche `<!-- SKILL CARD -->` ou la section `<div class="skills">`.
Chaque carte est un `<article class="skill">`.

### 6. Mettre TES vrais liens

Cherche et remplace ces URLs dans `index.html` :

- `github.com/MohamedBAYA` → ton vrai GitHub
- `linkedin.com/in/mohamed-baya/` → ton vrai LinkedIn
- `pwn.college/hacker/52964` → c'est déjà bon ✅
- `huggingface.co/MohamedBAYA` → vérifie l'URL exacte
- `contact@mohamedbaya.dev` → ton vrai email

---

## 🌐 Comment mettre en ligne

### Étape 1 : Acheter un nom de domaine (10 min · ~11 €/an)

Recommandation : **Porkbun.com** (le moins cher, propre, géré par Cloudflare).

Domaines suggérés (par ordre de préférence pour un profil cyber dev) :

1. `mohamedbaya.dev` — **TLD sécurité**, HTTPS forcé au niveau du registre
2. `mohamedbaya.me` — personnel, court
3. `mohamedbaya.fr` — local France
4. `mohamedbaya.com` — safe default

### Étape 2 : Mettre le code sur GitHub (10 min)

```bash
# Dans le dossier portfolio/
git init
git add .
git commit -m "Initial portfolio"

# Crée un repo sur github.com (public, nommé "portfolio")
git remote add origin https://github.com/MohamedBAYA/portfolio.git
git push -u origin main
```

### Étape 3 : Déployer sur Cloudflare Pages (10 min · gratuit, illimité)

1. Va sur https://dash.cloudflare.com/ → crée un compte gratuit
2. Menu de gauche → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Autorise GitHub → choisis ton repo `portfolio`
4. Configuration du build :
   - **Build command** : (laisse vide)
   - **Build output directory** : `/`
5. **Save and Deploy**

En 2 minutes, ton site est en ligne à `mohamedbaya-portfolio.pages.dev`.

### Étape 4 : Connecter ton domaine custom (5 min)

1. Dans Cloudflare Pages → ton projet → **Custom domains** → **Set up a custom domain**
2. Entre `mohamedbaya.dev` (et aussi `www.mohamedbaya.dev`)
3. Cloudflare te donne les **nameservers** (ex : `xxx.ns.cloudflare.com`)
4. Va sur Porkbun → ton domaine → onglet **Nameservers** → remplace par ceux de Cloudflare
5. Attends 5-30 min que le DNS se propage. C'est fait.

### Étape 5 : Activer les protections sécurité (5 min)

Dans Cloudflare → ton domaine :

- **SSL/TLS** → mode **Full (strict)**
- **SSL/TLS** → **Edge Certificates** → **Always Use HTTPS** ✅
- **SSL/TLS** → **Edge Certificates** → **HTTP Strict Transport Security (HSTS)** → activer avec :
  - Max-Age : 12 months
  - Include subdomains : ON
  - Preload : ON
- **DNS** → active DNSSEC

Va sur https://hstspreload.org/ et soumets ton domaine pour le bonus crédibilité.

### Étape 6 : Vérifier le score sécurité

- https://securityheaders.com/ → vise **A+**
- https://observatory.mozilla.org/ → vise **A+**
- Screenshot ces scores et garde-les pour ton portfolio !

---

## 📋 Mettre le portfolio sur ton CV

1. **Génère un QR code** (gratuit) : https://www.qr-code-monkey.com/ ou https://www.qrcode-generator.com/
   - URL à encoder : `https://mohamedbaya.dev`
   - Format : SVG (vectoriel, propre à toute taille)
   - Taille minimum sur CV : 2,5 cm × 2,5 cm
2. **Ajoute le lien en texte** aussi (au cas où le QR ne soit pas scanné) :
   - Header CV : `mohamedbaya.dev` (sans le `https://`)
3. **Match visuel** : utilise la même police (JetBrains Mono pour les titres) sur le CV pour l'identité de marque.

---

## ✅ Checklist avant publication

- [ ] Tous les liens (GitHub, LinkedIn, email) sont les bons
- [ ] Ta vraie photo (si tu en mets une) est dans `/assets/`
- [ ] La meta description du `<head>` est à jour
- [ ] Test mobile (DevTools → mode responsive)
- [ ] Test sans JS (clic droit → Inspect → désactive JS → la page doit rester lisible)
- [ ] Test `prefers-reduced-motion` (DevTools → Rendering → Emulate CSS prefers-reduced-motion: reduce)
- [ ] Score Lighthouse > 95 partout (DevTools → Lighthouse)
- [ ] Score `securityheaders.com` = A+
- [ ] Score `observatory.mozilla.org` = A+
- [ ] `security.txt` accessible à `/.well-known/security.txt`

---

## 🎨 Idées d'évolution (après la v1)

- Ajouter un **blog** : migre vers Astro (gratuit, simple, Markdown natif)
- Ajouter une **page projet détaillée** (1 fichier HTML par projet phare)
- Ajouter tes **CVE / Bug Bounty hall of fame** dès que tu en as
- Ajouter un **dark/light toggle** (déjà foundation prête via CSS variables)
- Ajouter un **command palette** (Cmd+K → naviguer au clavier comme un IDE)
- Ajouter une **animation de matrix rain** discrète en fond du hero (mais ne PAS sur toute la page — voir mon conseil principal)

---

## 🛡️ Note de sécurité importante

Pour ton **RAT multi-OS** : je l'ai présenté dans le portfolio comme une **étude de cas défensive** (avec règles de détection Sigma/Wazuh que tu écrirais). C'est volontaire — publier les sources d'un keylogger fonctionnel sous ton vrai nom est risqué pour ta carrière et pour ton compte GitHub (politique anti-malware). Garde le code en repo privé que tu peux montrer en entretien, mais sur le portfolio public présente le **comme un défenseur**, pas comme un offensif. C'est exactement ce que les recruteurs SOC/banque veulent voir.

---

**Bonne chance frérot — inch'Allah pour le mastère ! 🚀**
