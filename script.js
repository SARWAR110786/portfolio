/* =========================================================
   THE PAPER GUN — interaction & physics (vanilla JS)
   ========================================================= */
(() => {
  'use strict';

  /* ---------------------------------------------------------
     CONFIG — fill these in. Nothing is invented: if a field is
     empty, the matching contact button is simply not shown.
     --------------------------------------------------------- */
  const CONFIG = {
    whatsapp: '923173024105',
    whatsappDisplay: '0317 3024105',   // international number, digits only, e.g. '923001234567'
    email: 'sarwardeveloper@gmail.com',      // e.g. 'hello@example.com'
    linkedin: 'https://www.linkedin.com/in/sarwar-ali-6991b1277/',
    github: 'https://github.com/SARWAR110786',
    instagram: 'https://www.instagram.com/sarwar9695/',
    facebook: 'https://www.facebook.com/Saruali',
    cv: 'cv/Sarwar-Ali-CV.pdf', // replace this file with your own CV any time
  };

  /* ---------------------------------------------------------
     CONTENT — every slip is something real about Sarwar.
     --------------------------------------------------------- */
  const BIG = [
    // A. Projects
    { id: 'p1', group: 'work', kicker: 'Project 01', title: 'AI Chatbot', sub: 'n8n · Supabase · OpenAI',
      desc: 'An AI-powered chatbot built using n8n, Supabase, and OpenAI. Designed to understand user questions, maintain conversation context, and provide intelligent responses.',
      tech: ['n8n', 'Supabase', 'OpenAI'] },
    { id: 'p2', group: 'work', kicker: 'Project 02', title: 'WhatsApp AI Agent', sub: 'AI Automation',
      desc: 'An intelligent WhatsApp automation system built with n8n and OpenAI that handles customer conversations, understands documents and automates business communication.',
      tech: ['n8n', 'OpenAI', 'WhatsApp'] },
    { id: 'p3', group: 'work', kicker: 'Project 03', title: 'Skilltek Portal', sub: 'Vibe Coding · Web Development',
      desc: 'A student portal website developed for Skilltek Institute using modern AI-assisted development and vibe coding techniques.',
      tech: ['Vibe coding', 'Web development', 'AI-assisted tools'] },
    { id: 'p4', group: 'work', kicker: 'Project 04', title: 'RTI Chatbot', sub: 'Collective Pakistan',
      desc: 'The Jamhoriyat Saheliyan chatbot: a multi-flow WhatsApp assistant built for Collective Pakistan. It helps citizens understand the Sindh Transparency and Right to Information Act 2016 and prepare RTI applications.',
      tech: ['WhatsApp', 'n8n', 'Multi-flow chatbot'] },
    { id: 'p5', group: 'work', kicker: 'Project 05', title: 'Opportunity Desk', sub: 'n8n · AI · Automation',
      desc: 'An automated opportunity discovery system that scans websites, identifies relevant opportunities, filters results using AI, and sends reports with application links.',
      tech: ['n8n', 'AI', 'Automation'] },
    { id: 'p6', group: 'work', kicker: 'Project 06', title: 'Skilltek Agentic AI', sub: 'Next.js · Vercel · Course site',
      desc: "The website for The Skilltek Institute & Media Solution's 2-month, hands-on Agentic AI & Automation program. It presents a 14-module curriculum covering n8n, AI agents, WhatsApp automation, RAG assistants, MCP integrations and multi-agent systems.",
      tech: ['Next.js', 'Vercel', 'Vibe coding'], url: 'https://skilltek-agentic-ai.vercel.app/' },
    { id: 'p7', group: 'work', kicker: 'Project 07', title: 'Jamhoriyat Saheliyan', sub: 'Website',
      desc: 'The website for the Jamhoriyat Saheliyan initiative, built alongside its WhatsApp RTI chatbot.',
      tech: ['TypeScript', 'Vibe coding'], url: 'https://jamhoriyatsaheliyan.com/' },
    { id: 'p8', group: 'work', kicker: 'Project 08', title: 'Taleem Sathi', sub: 'PWA · Android · n8n agent',
      desc: "A study-buddy chat app and website for a People's School Thatta student project. The installable app (PWA and Android APK) talks to a live n8n agent.",
      tech: ['PWA', 'n8n', 'AI agent'], url: 'https://github.com/SARWAR110786/taleem-sathi', urlLabel: 'View on GitHub ↗' },
    { id: 'p9', group: 'work', kicker: 'Project 09', title: 'MIPS Portal', sub: 'Institute portal · Thatta',
      desc: 'A portal for Makli Institute of Paramedical Sciences & Technology (MIPS), Thatta.',
      tech: ['TypeScript', 'Web app'] },
    { id: 'p10', group: 'work', kicker: 'Project 10', title: 'Pizza Sales', sub: 'MySQL · Power BI',
      desc: 'End-to-end retail analytics in MySQL: revenue baselines, JOINs, window functions and CTEs to find top earners per category and hourly demand peaks.',
      tech: ['MySQL', 'CTEs', 'Power BI'], url: 'https://github.com/SARWAR110786/Pizza-Sale-Analysis-', urlLabel: 'View on GitHub ↗' },
    { id: 'p11', group: 'work', kicker: 'Project 11', title: 'Churn Analysis', sub: 'Python · 7,043 customers',
      desc: 'Telecom customer churn EDA: month-to-month contracts, short tenure and electronic-check payments drive churn. Includes retention recommendations.',
      tech: ['Pandas', 'Seaborn', 'Jupyter'], url: 'https://github.com/SARWAR110786/Telecom-Customer-Churn-Analysis', urlLabel: 'View on GitHub ↗' },
    { id: 'p12', group: 'work', kicker: 'Project 12', title: 'Nexora Brand', sub: 'Logo & branding · 2026',
      desc: 'Logo and brand identity design for Nexora Solution (Jan–Feb 2026).',
      tech: ['Photoshop', 'Illustrator'] },

    // B. Skills
    { id: 'python', group: 'skills', kicker: 'Skill', title: 'Python', sub: 'Programming',
      desc: 'Python programming, data manipulation, automation, and working with data science libraries.' },
    { id: 'data', group: 'skills', kicker: 'Skill', title: 'Data Analytics', sub: 'Data-driven thinking',
      desc: 'Working with datasets, data cleaning, analysis, visualization, and extracting useful insights.' },
    { id: 'powerbi', group: 'skills', kicker: 'Skill', title: 'Power BI', sub: 'Dashboards',
      desc: 'Creating interactive dashboards, reports, and visual representations of data.' },
    { id: 'sql', group: 'skills', kicker: 'Skill', title: 'SQL', sub: 'Database management',
      desc: 'MySQL, SQL queries, filtering, joins, and relational database fundamentals.' },
    { id: 'pandas', group: 'skills', kicker: 'Skill', title: 'Pandas', sub: 'Data manipulation',
      desc: 'Data cleaning, transformation, exploration, and analysis using Pandas.' },
    { id: 'numpy', group: 'skills', kicker: 'Skill', title: 'NumPy', sub: 'Numerical computing',
      desc: 'Array operations and numerical computing using NumPy.' },
    { id: 'n8n', group: 'skills', kicker: 'Skill', title: 'n8n', sub: 'Workflow automation',
      desc: 'Building automated workflows, AI agents, API integrations, and business process automation.' },
    { id: 'supabase', group: 'skills', kicker: 'Skill', title: 'Supabase', sub: 'Database · Backend',
      desc: 'Using Supabase for database management, application backends, and chatbot conversation storage.' },
    { id: 'openai', group: 'skills', kicker: 'Skill', title: 'OpenAI', sub: 'AI integration',
      desc: 'Integrating OpenAI models into chatbots, automation systems, and intelligent applications.' },
    { id: 'excel', group: 'skills', kicker: 'Skill', title: 'Excel', sub: 'Data analysis',
      desc: 'Spreadsheet management, data organization, calculations, and reporting.' },
    { id: 'make', group: 'skills', kicker: 'Skill', title: 'Make & Zapier', sub: 'No-code automation',
      desc: 'Connecting applications and automating repetitive tasks using no-code automation platforms.' },
    { id: 'vibe', group: 'skills', kicker: 'Skill', title: 'Vibe Coding', sub: 'AI-assisted development',
      desc: 'Turning ideas into working websites and apps with AI-assisted development tools — from WhatsApp chatbot experiences to the Skilltek student portal.',
      tech: ['AI-assisted tools', 'Web development', 'Rapid prototyping'] },
    { id: 'design', group: 'skills', kicker: 'Skill', title: 'Graphic Design', sub: 'Creative design',
      desc: 'Visual communication, graphic design, and creative content using Adobe Photoshop and Illustrator.',
      tech: ['Photoshop', 'Illustrator'] },

    // C. Background
    { id: 'cs', group: 'about', kicker: 'Education', title: 'CS Graduate', sub: 'University of Sindh',
      desc: "Graduated with a BS in Computer Science from the University of Sindh." },
    { id: 'trainer', group: 'about', kicker: 'Experience', title: 'PITP Trainer', sub: 'PITP · MUET · 2024–now',
      desc: "Graphic Designing Instructor for the People's Information Technology Programme (Govt. of Sindh, MUET) in Thatta since Jan 2024. Completed 4 batches in Phase 1, now teaching Phase 2." },
    { id: 'navttc', group: 'about', kicker: 'Experience', title: 'NAVTTC', sub: 'Instructor · 2026–now',
      desc: 'Part-time graphic design instructor at Perfect Computer System Institute under the NAVTTC programme, Thatta, since Feb 2026.' },
    { id: 'ydwo', group: 'about', kicker: 'Experience', title: 'Social Lead', sub: 'Youth Dev. Welfare Org.',
      desc: 'Director Social Media at Youth Development Welfare Organization, Makli, Thatta, since Jan 2023.' },
    { id: 'fiverr', group: 'about', kicker: 'Experience', title: 'Fiverr', sub: 'Freelance · since 2018',
      desc: 'Self-employed on Fiverr since Oct 2018: started with design, grew into AI agents, automation and data work.' },
    { id: 'certs', group: 'about', kicker: 'Certified', title: 'Certificates', sub: 'Google · DeepLearning.AI',
      list: ['Gemini Certified Educator (Google)', 'AI Python for Beginners (DeepLearning.AI)', 'Job Ready Data Science (CodeWithHarry)', 'Complete Python Bootcamp (CodeWithHarry)', 'Content Marketing (LinkedIn)'] },
    { id: 'builder', group: 'about', kicker: 'Background', title: 'AI Builder', sub: 'Learning by building',
      desc: 'Exploring AI automation, intelligent agents, modern development tools, and practical AI-powered solutions.' },

    // Profile
    { id: 'about', group: 'about', kicker: 'Profile', title: 'About Sarwar', sub: 'CS · AI · Data', photo: true,
      desc: "I'm the CTO of SkillTek Institute & Media Solutions in Thatta, a Computer Science graduate and an AI automation developer. I build WhatsApp chatbots, AI agents, websites and dashboards." },
    { id: 'cto', group: 'about', kicker: 'Experience', title: 'SkillTek CTO', sub: 'Chief Technology Officer', photo: true,
      desc: 'Chief Technology Officer at SkillTek Institute & Media Solutions, Thatta: technology strategy, the website, student portal, LMS and automation tools, IT infrastructure and digital systems.',
      url: 'https://theskilltek.com/', urlLabel: 'Visit SkillTek ↗' },
    { id: 'whatido', group: 'about', kicker: 'Profile', title: 'What I Do', sub: 'Build · Automate · Analyse',
      list: ['AI-powered chatbots', 'WhatsApp automation', 'Business workflow automation', 'AI agent development',
             'Data analysis and visualization', 'Dashboard development',
             'Website development using AI-assisted tools', 'Graphic design and digital content'] },
    { id: 'approach', group: 'about', kicker: 'Profile', title: 'My Approach', sub: 'Learn by building',
      desc: 'Learn by building. Solve real problems. Automate repetitive work. Turn ideas into working solutions.' },
    { id: 'contact', group: 'contact', kicker: 'Contact', title: "Let's Talk", sub: 'Build something useful', photo: true,
      desc: "Have an idea or a project in mind? Let's build something useful together.", contact: true },
  ];

  const ref = (id) => () => BIG.find((s) => s.id === id).desc;
  const TAGS = [
    ['Python', ref('python')], ['SQL', ref('sql')], ['Power BI', ref('powerbi')], ['Excel', ref('excel')],
    ['Pandas', ref('pandas')], ['NumPy', ref('numpy')], ['n8n', ref('n8n')], ['OpenAI', ref('openai')],
    ['Supabase', ref('supabase')],
    ['APIs', () => 'API integrations inside n8n workflows, AI agents and automation systems.'],
    ['WhatsApp', () => 'Home to my WhatsApp AI Agent and the Jamhoriyat Saheliyan RTI chatbot for Collective Pakistan.'],
    ['Thatta', () => 'Home base: Makli, Thatta, Sindh, Pakistan.'],
    ['Next.js', () => 'The framework behind the Skilltek Agentic AI course site.'],
    ['Automation', () => 'Workflow and business process automation with n8n, Make and Zapier.'],
    ['AI Agents', () => 'Building AI agents with n8n and OpenAI integrations.'],
    ['Photoshop', () => 'Adobe Photoshop — part of my graphic design toolkit.'],
    ['Illustrator', () => 'Adobe Illustrator — part of my graphic design toolkit.'],
    ['Figma', () => 'Figma — part of my design toolkit.'],
    ['Vibe Coding', () => 'AI-assisted development — the approach behind the Skilltek student portal.'],
    ['MySQL', ref('sql')],
    ['2026', () => 'This edition of my portfolio — 2026.'],
  ].map(([title, desc]) => ({
    id: 't-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    type: 'tag', group: 'tag', kicker: 'Tag', title, get desc() { return desc(); },
  }));
  BIG.forEach((s) => { s.type = 'big'; });

  const BY_ID = Object.fromEntries([...BIG, ...TAGS].map((s) => [s.id, s]));

  // Order used while holding the trigger (every 4th shot is swapped for a random tag)
  const ROTATION = ['cto', 'p4', 'p2', 'n8n', 'about', 'p6', 'vibe', 'p1', 'trainer', 'p8', 'python', 'p10', 'sql',
    'p7', 'openai', 'cs', 'p5', 'p11', 'powerbi', 'navttc', 'p3', 'supabase', 'whatido', 'p9', 'pandas', 'fiverr',
    'design', 'p12', 'certs', 'data', 'ydwo', 'numpy', 'excel', 'make', 'approach', 'builder', 'contact'];

  const GROUPS = {
    work: ['p4', 'p2', 'p6', 'p1', 'p8', 'p5', 'p7', 'p3', 'p9', 'p10', 'p11', 'p12'],
    skills: ['python', 'data', 'powerbi', 'sql', 'pandas', 'numpy', 'n8n', 'supabase', 'openai', 'excel', 'make', 'vibe', 'design'],
    about: ['about', 'cto', 'trainer', 'navttc', 'ydwo', 'fiverr', 'cs', 'certs', 'whatido', 'approach', 'builder'],
    contact: ['contact', 't-whatsapp', 'about'],
  };

  const PAPERS = [
    { c: '#ff5fa8', dark: false }, { c: '#ffd23f', dark: false }, { c: '#3f6bff', dark: true },
    { c: '#3fe0a8', dark: false }, { c: '#ff8a2a', dark: false }, { c: '#8b5cff', dark: true },
    { c: '#c8f03c', dark: false }, { c: '#5cc8ff', dark: false }, { c: '#1c1c22', dark: true },
    { c: '#ffffff', dark: false },
  ];

  /* ---------------------------------------------------------
     DOM
     --------------------------------------------------------- */
  const $ = (id) => document.getElementById(id);
  const hero = document.querySelector('.hero');
  const layer = $('slipLayer');
  const trayGrid = $('trayGrid');
  const gun = $('gun');
  const gunRecoil = $('gunRecoil');
  const trigger = $('trigger');
  const slotEl = $('slot');
  const sprayBtn = $('sprayBtn');
  const cleanBtn = $('cleanBtn');
  const countEl = $('count');
  const countWord = $('countWord');
  const card = $('card');

  /* ---------------------------------------------------------
     Motion settings
     --------------------------------------------------------- */
  const rmQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = rmQuery.matches;
  rmQuery.addEventListener?.('change', (e) => { reduced = e.matches; });

  const T = () => reduced
    ? { holdEvery: 190, burstEvery: 170, flyMin: 300, flyMax: 450, glide: 380 }
    : { holdEvery: 85, burstEvery: 95, flyMin: 700, flyMax: 1100, glide: 700 };

  const TRAY_H = 58;         // docked slip height
  const GAP = 10;

  /* ---------------------------------------------------------
     State
     --------------------------------------------------------- */
  const state = {
    slots: [],               // [{ id, x, y, w, h, scale, el, docked }]
    slotById: new Map(),
    colorById: new Map(),
    colorIdx: 0,
    flying: [],              // active particles
    queue: [],               // pending burst shots
    holding: 0,              // number of active hold sources
    lastShot: 0,
    shots: 0,
    picks: 0,
    rotIdx: 0,
    groupIdx: {},
    raf: 0,
    lastFrame: 0,
    recoil: { x: 0, v: 0 },
    trig: { a: 0, v: 0 },
  };

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */
  const rand = (a, b) => a + Math.random() * (b - a);
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const lerp = (a, b, t) => a + (b - a) * t;

  function heroRect() { return hero.getBoundingClientRect(); }

  function slotPoint() {
    const h = heroRect();
    const r = slotEl.getBoundingClientRect();
    return { x: r.left + r.width / 2 - h.left, y: r.top + r.height / 2 - h.top };
  }

  function paperFor(id) {
    if (!state.colorById.has(id)) {
      state.colorById.set(id, PAPERS[state.colorIdx % PAPERS.length]);
      state.colorIdx++;
    }
    return state.colorById.get(id);
  }

  function titleSize(item) {
    const t = item.title;
    if (item.type === 'tag') {
      if (t.length <= 5) return 16;
      if (!t.includes(' ') && t.length > 9) return 11;
      return t.length <= 8 ? 13.5 : 12.5;
    }
    if (t.length <= 8) return 25;
    if (t.length <= 11) return 21;
    if (t.length <= 14) return 18;
    if (t.length <= 17) return 15.5;
    return 13.5;
  }

  function buildSlip(item) {
    const paper = paperFor(item.id);
    const el = document.createElement('button');
    el.type = 'button';
    el.className = `slip slip--${item.type}` + (paper.dark ? '' : ' is-light');
    el.tabIndex = -1;
    el.style.setProperty('--c', paper.c);
    el.style.setProperty('--ink', paper.dark ? '#ffffff' : '#141416');
    el.style.setProperty('--fs', titleSize(item) + 'px');
    el.dataset.id = item.id;
    el.setAttribute('aria-label', `${item.title} — ${item.kicker}. Open details.`);

    const face = document.createElement('span');
    face.className = 'slip-face';
    if (item.type === 'big') {
      const subSize = item.sub.length > 22 ? 10 : 12.5;
      face.innerHTML =
        `<span class="slip-kicker"><span></span><span>№${String(BIG.indexOf(item) + 1).padStart(2, '0')}</span></span>` +
        `<span class="slip-title"></span><span class="slip-sub" style="font-size:${subSize}px"></span><span class="slip-seal"></span>`;
      face.querySelector('.slip-kicker span').textContent = item.kicker;
      face.querySelector('.slip-title').textContent = item.title;
      face.querySelector('.slip-sub').textContent = item.sub;
      if (item.photo) {
        el.classList.add('has-photo');
        const img = document.createElement('img');
        img.className = 'slip-photo';
        img.src = 'assets/sarwar-sm.jpg';
        img.alt = '';
        img.decoding = 'async';
        face.querySelector('.slip-seal').replaceWith(img);
      }
    } else {
      face.innerHTML = '<span class="slip-hash">#</span><span class="slip-title"></span>';
      face.querySelector('.slip-title').textContent = item.title;
    }
    el.appendChild(face);
    return el;
  }

  /* ---------------------------------------------------------
     Tray layout
     --------------------------------------------------------- */
  function sizeFor(item) {
    const w = item.type === 'big' ? 220 : 88;
    const h = item.type === 'big' ? 84 : 64;
    return { w, h, scale: TRAY_H / h };
  }

  function layoutTray(animate = false) {
    const h = heroRect();
    const g = trayGrid.getBoundingClientRect();
    const ox = g.left - h.left;
    const oy = g.top - h.top;
    const maxW = g.width;
    let x = 0, y = 0;
    for (const s of state.slots) {
      const dw = s.w * s.scale;
      if (x > 0 && x + dw > maxW) { x = 0; y += TRAY_H + GAP; }
      const nx = ox + x, ny = oy + y;
      const moved = nx !== s.x || ny !== s.y;
      s.x = nx; s.y = ny;
      x += dw + GAP;
      if (s.docked && moved) {
        if (animate) s.el.classList.add('relayout');
        placeDocked(s);
      }
    }
    const rows = state.slots.length ? y + TRAY_H : 0;
    trayGrid.style.minHeight = Math.max(136, rows + 8) + 'px';
  }

  function placeDocked(s) {
    const cx = s.x + (s.w * s.scale) / 2;
    const cy = s.y + (s.h * s.scale) / 2;
    s.el.style.transform =
      `translate3d(${(cx - s.w / 2).toFixed(1)}px, ${(cy - s.h / 2).toFixed(1)}px, 0) scale(${s.scale})`;
  }

  function ensureSlot(item) {
    let s = state.slotById.get(item.id);
    if (s) return { slot: s, isRepeat: true };
    const { w, h, scale } = sizeFor(item);
    s = { id: item.id, x: 0, y: 0, w, h, scale, el: null, docked: false };
    state.slots.push(s);
    state.slotById.set(item.id, s);
    layoutTray();
    return { slot: s, isRepeat: false };
  }

  /* ---------------------------------------------------------
     Firing
     --------------------------------------------------------- */
  function nextRotationItem() {
    // every fourth shot is a random small tag slip
    if (state.picks++ % 4 === 3) return TAGS[(Math.random() * TAGS.length) | 0];
    const id = ROTATION[state.rotIdx % ROTATION.length];
    state.rotIdx++;
    return BY_ID[id];
  }

  function fire(item) {
    const { slot, isRepeat } = ensureSlot(item);
    const el = buildSlip(item);
    if (!isRepeat) slot.el = el;

    const p = slotPoint();
    const { w, h } = slot;
    const t = T();
    const narrow = hero.clientWidth < 961;
    const speedScale = narrow ? Math.max(0.42, Math.min(0.75, hero.clientWidth / 1100)) : 1;
    const ang = rand(150, 190) * Math.PI / 180;
    const speed = rand(9, 15.5) * speedScale;

    const part = {
      item, el, slot, isRepeat, w, h,
      cx: p.x, cy: p.y,
      vx: Math.cos(ang) * speed,
      vy: Math.sin(ang) * speed,          // screen y points down → 150°–190° = left, mostly slightly down
      rot: rand(-25, 10),
      vr: rand(-9, 9),
      rx: 0,
      flipF: rand(0.006, 0.012),
      flutF: rand(0.008, 0.016),
      phase0: rand(0, Math.PI * 2),
      age: 0,
      fly: rand(t.flyMin, t.flyMax),
      glide: t.glide,
      mode: 'fly',
      from: null,
      scale: 0.55,                          // pops out of the slot, grows to full size
    };
    el.style.transform = transformOf(part);
    layer.appendChild(el);
    state.flying.push(part);

    // gun feedback
    state.recoil.v += 11;                   // kick backwards (spring brings it forward)
    state.shots++;
    updateCounter();
    wake();
  }

  function transformOf(p) {
    return `translate3d(${(p.cx - p.w / 2).toFixed(1)}px, ${(p.cy - p.h / 2).toFixed(1)}px, 0) ` +
      `perspective(700px) rotate(${p.rot.toFixed(2)}deg) rotateX(${p.rx.toFixed(2)}deg) scale(${p.scale.toFixed(3)})`;
  }

  function updateCounter() {
    countEl.textContent = state.shots;
    countWord.textContent = state.shots === 1 ? 'slip' : 'slips';
    countEl.classList.remove('bump');
    void countEl.offsetWidth;               // restart the bump animation
    countEl.classList.add('bump');
  }

  function burst(items) {
    state.queue.push(...items);
    wake();
  }

  /* ---------------------------------------------------------
     Main loop — runs only while something is moving
     --------------------------------------------------------- */
  function wake() {
    if (!state.raf) {
      state.lastFrame = performance.now();
      state.raf = requestAnimationFrame(tick);
    }
  }

  function tick(now) {
    const dt = Math.min(50, now - state.lastFrame);
    state.lastFrame = now;
    const f = dt / 16.667;                  // frame factor (1 at 60fps)
    const t = T();

    // ---- shooting scheduler
    if (state.queue.length) {
      if (now - state.lastShot >= t.burstEvery) {
        fire(state.queue.shift());
        state.lastShot = now;
      }
    } else if (state.holding > 0 && now - state.lastShot >= t.holdEvery) {
      fire(nextRotationItem());
      state.lastShot = now;
    }
    const firing = state.holding > 0 || state.queue.length > 0;

    // ---- gun springs (recoil + trigger)
    const r = state.recoil;
    r.v += (-r.x * 0.22) * f;
    r.v *= Math.pow(0.72, f);
    r.x += r.v * f;
    if (r.x > 14) { r.x = 14; r.v = Math.min(r.v, 0); }
    gunRecoil.style.transform = `translate3d(${r.x.toFixed(2)}px, ${(-r.x * 0.12).toFixed(2)}px, 0) rotate(${(-r.x * 0.12).toFixed(2)}deg)`;

    const tg = state.trig;
    const target = firing ? -20 : 0;
    tg.v += (target - tg.a) * 0.3 * f;
    tg.v *= Math.pow(0.6, f);
    tg.a += tg.v * f;
    trigger.style.transform = `rotate(${tg.a.toFixed(2)}deg)`;

    // ---- particles
    const list = state.flying;
    for (let i = list.length - 1; i >= 0; i--) {
      const p = list[i];
      p.age += dt;

      if (p.mode === 'fly') {
        p.vy = Math.min(5, p.vy + 0.28 * f);
        p.vx *= Math.pow(0.975, f);
        p.cx += (p.vx + Math.sin(p.age * p.flutF + p.phase0) * 1.4) * f;
        p.cy += p.vy * f;
        p.vr *= Math.pow(0.985, f);
        p.rot += (p.vr + Math.cos(p.age * p.flutF + p.phase0) * 1.1) * f;
        p.rx = Math.sin(p.age * p.flipF + p.phase0) * 55;
        p.scale = Math.min(1, p.scale + 0.06 * f);

        if (p.age >= p.fly) {
          p.mode = 'glide';
          p.gAge = 0;
          p.from = { cx: p.cx, cy: p.cy, rot: p.rot % 360, rx: p.rx, scale: p.scale };
          // pick the shortest way back to 0°
          if (p.from.rot > 180) p.from.rot -= 360;
          if (p.from.rot < -180) p.from.rot += 360;
        }
      } else if (p.mode === 'glide') {
        p.gAge += dt;
        const k = Math.min(1, p.gAge / p.glide);
        const e = easeOut(k);
        const s = p.slot;
        const tx = s.x + (s.w * s.scale) / 2;
        const ty = s.y + (s.h * s.scale) / 2;
        // slight arc while gliding in
        const arc = Math.sin(k * Math.PI) * -18;
        p.cx = lerp(p.from.cx, tx, e);
        p.cy = lerp(p.from.cy, ty, e) + arc;
        p.rot = lerp(p.from.rot, 0, e);
        p.rx = lerp(p.from.rx, 0, e);
        p.scale = lerp(p.from.scale, s.scale, e);
        if (p.isRepeat && k > 0.75) p.el.style.opacity = String(1 - (k - 0.75) / 0.25);

        if (k >= 1) {
          list.splice(i, 1);
          if (p.isRepeat) land(p, true);
          else land(p, false);
          continue;
        }
      }
      p.el.style.transform = transformOf(p);
    }

    const settling = Math.abs(r.x) > 0.02 || Math.abs(r.v) > 0.02 || Math.abs(tg.a - target) > 0.05 || Math.abs(tg.v) > 0.05;
    if (list.length || firing || settling) {
      state.raf = requestAnimationFrame(tick);
    } else {
      state.raf = 0;
    }
  }

  function land(p, isRepeat) {
    const s = p.slot;
    if (isRepeat) {
      p.el.remove();
      if (s.docked && s.el) {
        s.el.classList.remove('bounce');
        void s.el.offsetWidth;
        s.el.classList.add('bounce');
      }
      return;
    }
    // dock it permanently
    p.el.style.setProperty('--inv', (1 / s.scale).toFixed(3));
    p.el.classList.add('docked');
    p.el.tabIndex = 0;
    s.docked = true;
    placeDocked(s);
  }

  /* ---------------------------------------------------------
     Detail card
     --------------------------------------------------------- */
  const cardEls = {
    stripe: $('cardStripe'), kicker: $('cardKicker'), title: $('cardTitle'), body: $('cardBody'),
  };
  let lastFocus = null;

  function contactLinks() {
    const links = [];
    if (CONFIG.whatsapp) links.push({ href: `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, '')}`, label: 'WhatsApp ↗', legend: '⏎', dark: true });
    if (CONFIG.email) links.push({ href: `mailto:${CONFIG.email}`, label: 'Email ↗', legend: '@' });
    if (CONFIG.linkedin) links.push({ href: CONFIG.linkedin, label: 'LinkedIn ↗', legend: 'in' });
    if (CONFIG.github) links.push({ href: CONFIG.github, label: 'GitHub ↗', legend: '<>' });
    if (CONFIG.instagram) links.push({ href: CONFIG.instagram, label: 'Instagram ↗', legend: 'ig' });
    if (CONFIG.facebook) links.push({ href: CONFIG.facebook, label: 'Facebook ↗', legend: 'fb' });
    if (CONFIG.cv) links.push({ href: CONFIG.cv, label: 'View & Download CV ↓', legend: '↓', dark: true, wide: true, download: true, cv: true });
    return links;
  }

  function openCard(id, { focus = false } = {}) {
    const item = BY_ID[id];
    if (!item) return;
    const paper = state.colorById.get(id);
    cardEls.stripe.style.background = paper && paper.c !== '#ffffff' ? paper.c : 'var(--red)';
    cardEls.kicker.textContent = item.type === 'tag' ? 'Tag' : item.kicker;
    cardEls.title.textContent = item.title;
    card.classList.toggle('with-photo', !!item.photo);

    const body = cardEls.body;
    body.textContent = '';
    if (item.desc) {
      const p = document.createElement('p');
      p.textContent = item.desc;
      body.appendChild(p);
    }
    if (item.list) {
      const ul = document.createElement('ul');
      item.list.forEach((li) => { const el = document.createElement('li'); el.textContent = li; ul.appendChild(el); });
      body.appendChild(ul);
    }
    if (item.tech) {
      const wrap = document.createElement('div');
      wrap.className = 'chips';
      item.tech.forEach((t) => { const c = document.createElement('span'); c.className = 'chip'; c.textContent = t; wrap.appendChild(c); });
      body.appendChild(wrap);
    }
    if (item.url) {
      const wrap = document.createElement('div');
      wrap.className = 'card-links';
      const a = document.createElement('a');
      a.className = 'key key--black key--wide';
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML = '<span class="key-legend" aria-hidden="true">↗</span><span class="key-label"></span>';
      a.lastChild.textContent = item.urlLabel || 'Visit live site ↗';
      wrap.appendChild(a);
      body.appendChild(wrap);
    }
    if (item.contact) {
      const plain = [];
      if (CONFIG.whatsapp) plain.push('WhatsApp ' + CONFIG.whatsappDisplay);
      if (CONFIG.email) plain.push(CONFIG.email);
      if (plain.length) {
        const p = document.createElement('p');
        p.className = 'card-contact';
        p.textContent = plain.join('  ·  ');
        body.appendChild(p);
      }
      const links = contactLinks();
      if (links.length) {
        const wrap = document.createElement('div');
        wrap.className = 'card-links';
        links.forEach((l) => {
          const a = document.createElement('a');
          a.className = 'key ' + (l.dark ? 'key--black' : 'key--white') + (l.wide ? ' key--wide' : '');
          if (l.cv) a.dataset.cv = '';
          a.href = l.href;
          if (false) a.setAttribute('download', '');
          else { a.target = '_blank'; a.rel = 'noopener'; }
          a.innerHTML = '<span class="key-legend" aria-hidden="true"></span><span class="key-label"></span>';
          a.firstChild.textContent = l.legend;
          a.lastChild.textContent = l.label;
          wrap.appendChild(a);
        });
        body.appendChild(wrap);
      }
    }

    const wasOpen = card.classList.contains('open');
    card.classList.add('open');
    card.setAttribute('aria-hidden', 'false');
    if (wasOpen) {
      card.classList.remove('swap');
      void card.offsetWidth;
      card.classList.add('swap');
    }
    if (focus) { lastFocus = document.activeElement; $('cardClose').focus({ preventScroll: true }); }
  }

  function closeCard() {
    if (!card.classList.contains('open')) return;
    card.classList.remove('open', 'swap');
    card.setAttribute('aria-hidden', 'true');
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
    lastFocus = null;
  }

  $('cardClose').addEventListener('click', closeCard);

  layer.addEventListener('click', (e) => {
    const slip = e.target.closest('.slip.docked');
    if (!slip) return;
    openCard(slip.dataset.id, { focus: e.detail === 0 });
  });

  /* ---------------------------------------------------------
     Hold-to-spray sources: gun, Spray button, Space key
     --------------------------------------------------------- */
  function startHold() {
    state.holding++;
    const now = performance.now();
    if (state.holding === 1 && !state.queue.length && now - state.lastShot > T().holdEvery) {
      fire(nextRotationItem());             // a tap always fires at least one slip
      state.lastShot = now;
    }
    wake();
  }
  function stopHold() { state.holding = Math.max(0, state.holding - 1); }

  function bindHold(el, pressedClassTarget) {
    let active = false;
    let pointerUsed = false;
    const down = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      if (active) return;
      active = true;
      pointerUsed = true;
      el.setPointerCapture?.(e.pointerId);
      pressedClassTarget?.classList.add('is-pressed');
      startHold();
    };
    const up = () => {
      if (!active) return;
      active = false;
      pressedClassTarget?.classList.remove('is-pressed');
      stopHold();
    };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('lostpointercapture', up);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    // keyboard activation (Enter) → short burst
    el.addEventListener('click', (e) => {
      if (pointerUsed && e.detail !== 0) { pointerUsed = false; return; }
      pointerUsed = false;
      burst(Array.from({ length: 6 }, nextRotationItem));
    });
  }
  bindHold(sprayBtn, sprayBtn);
  bindHold(gun, null);
  gun.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); gun.click(); }
  });

  // Space key — never hijack typing in form fields
  let spaceDown = false;
  const isTypingTarget = (t) => t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
  window.addEventListener('keydown', (e) => {
    if (e.code !== 'Space' || isTypingTarget(e.target)) return;
    e.preventDefault();
    if (e.repeat || spaceDown) return;
    spaceDown = true;
    sprayBtn.classList.add('is-pressed');
    startHold();
  });
  const releaseSpace = () => {
    if (!spaceDown) return;
    spaceDown = false;
    sprayBtn.classList.remove('is-pressed');
    stopHold();
  };
  window.addEventListener('keyup', (e) => { if (e.code === 'Space') releaseSpace(); });
  window.addEventListener('blur', () => { releaseSpace(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCard(); });

  /* ---------------------------------------------------------
     Clean up
     --------------------------------------------------------- */
  cleanBtn.addEventListener('click', () => {
    state.queue.length = 0;
    const els = [...layer.children];
    els.forEach((el) => el.classList.add('fade'));
    setTimeout(() => els.forEach((el) => el.remove()), 340);
    state.flying.length = 0;
    state.slots.length = 0;
    state.slotById.clear();
    state.colorById.clear();
    state.colorIdx = 0;
    state.rotIdx = 0;
    state.picks = 0;
    state.groupIdx = {};
    state.shots = 0;
    countEl.textContent = '0';
    countWord.textContent = 'slips';
    layoutTray();
    closeCard();
    document.querySelectorAll('.nav-link.is-active').forEach((n) => n.classList.remove('is-active'));
  });

  /* ---------------------------------------------------------
     Navigation — filtered bursts
     --------------------------------------------------------- */
  const BURST_MAX = 8;
  function groupBurst(group) {
    const ids = GROUPS[group];
    const start = state.groupIdx[group] || 0;
    const n = Math.min(BURST_MAX, ids.length);
    const items = [];
    for (let i = 0; i < n; i++) items.push(BY_ID[ids[(start + i) % ids.length]]);
    state.groupIdx[group] = (start + n) % ids.length;
    burst(items);
    openCard(ids[0]);
  }

  document.querySelectorAll('.nav-link[data-group]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach((n) => n.classList.toggle('is-active', n === btn));
      const r = gun.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) {
        hero.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      }
      groupBurst(btn.dataset.group);
    });
  });

  // Let's Talk
  const talk = $('talkBtn');
  if (CONFIG.whatsapp) {
    talk.href = `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, '')}`;
    talk.target = '_blank'; talk.rel = 'noopener';
  } else if (CONFIG.email) {
    talk.href = `mailto:${CONFIG.email}`;
  } else {
    talk.addEventListener('click', (e) => { e.preventDefault(); groupBurst('contact'); });
  }

  /* ---------------------------------------------------------
     Optional logo.png — shown only if it loads
     --------------------------------------------------------- */
  const logoImg = document.querySelector('.logo-img');
  const showLogo = () => { logoImg.hidden = false; document.querySelector('.logo-text').hidden = true; };
  if (logoImg.complete && logoImg.naturalWidth) showLogo();
  else logoImg.addEventListener('load', showLogo, { once: true });
  logoImg.addEventListener('error', () => logoImg.remove(), { once: true });

  /* ---------------------------------------------------------
     CV viewer — every "Download CV" button opens it; the PDF
     download button lives inside.
     --------------------------------------------------------- */
  const cvModal = $('cvModal');
  let cvReturn = null;
  function openCV(trigger) {
    cvReturn = trigger || document.activeElement;
    closeCard();
    cvModal.hidden = false;
    document.body.classList.add('cv-open');
    $('cvClose').focus({ preventScroll: true });
  }
  function closeCV() {
    if (cvModal.hidden) return;
    cvModal.hidden = true;
    document.body.classList.remove('cv-open');
    if (cvReturn && document.contains(cvReturn)) cvReturn.focus({ preventScroll: true });
  }
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-cv]');
    if (!t) return;
    e.preventDefault();
    openCV(t);
  });
  $('cvClose').addEventListener('click', closeCV);
  cvModal.addEventListener('click', (e) => { if (e.target === cvModal) closeCV(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCV(); });

  /* ---------------------------------------------------------
     Resize → recalculate tray
     --------------------------------------------------------- */
  let resizeTimer = 0;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      layoutTray(true);
      setTimeout(() => layer.querySelectorAll('.relayout').forEach((el) => el.classList.remove('relayout')), 500);
    }, 80);
  };
  window.addEventListener('resize', onResize);
  if (document.fonts?.ready) document.fonts.ready.then(() => layoutTray(true));

  /* ---------------------------------------------------------
     Intro: 20-slip burst after 700ms
     --------------------------------------------------------- */
  layoutTray();
  setTimeout(() => burst(Array.from({ length: 20 }, nextRotationItem)), 700);
})();
