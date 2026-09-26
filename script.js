/* =========================================================================
   ==========================================================================
                    CUSTOMIZE YOUR WEBSITE HERE
   ==========================================================================
   Everything you personally need to edit lives in the CONFIG object below.
   You do NOT need to understand JavaScript — just replace the text between
   the quote marks " " and keep the commas at the end of each line.

   Do not delete the curly braces { } or square brackets [ ].
   ========================================================================= */

const CONFIG = {

  // The opening screen (Screen 1)
  opening: {
    greeting: "Hey, LITTLE MISS SUNSHINE.",
    subtext: "I made something for you."
  },

  // The hero screen right after entering (Screen 2)
  hero: {
    title: "Happy Birthday, SREE ❤",
    subtitle: "Today is about you, and this little gift belongs to you forever."
  },

  // "For You" — your personal letter to her. This can be as long as you like.
  // Press Enter inside the quotes is not allowed — instead, start a new line
  // of text by closing the quote, adding a comma, then use \n\n for a
  // paragraph break, e.g. "First paragraph.\n\nSecond paragraph."
  letter: {
    text: "Dear Sree,\n\nIt's actually kind of crazy when I think about how all of this started.\n\nWe literally met on Facebook. Then somehow moved to Instagram, then exchanged numbers, ended up on WhatsApp, and somewhere along the way, you went from being a random person I met online to a friend, then my best friend, and eventually… a huge part of my life.\n\nAnd honestly, I don't think either of us planned any of that. It just happened.\n\nWe've had our fair share of quarrels. Actually, \u201cfair share\u201d is probably an understatement. \ud83d\ude02 We've annoyed each other, misunderstood each other, gotten angry, argued over stupid things, and probably tested each other's patience more times than necessary.\n\nBut somehow, after all of that, we still choose each other.\n\nAnd I think that's what makes what we have special to me.\n\nBecause being close to someone isn't about never fighting or never getting irritated with each other. It's about having a hundred reasons to walk away and still deciding, \u201cNah, this idiot is staying.\u201d\n\nYou became someone I could talk to about random nonsense, serious things, stupid things, things that probably didn't even need to be said. You saw different versions of me — the confident one, the confused one, the completely stupid one, and the one who sometimes stopped believing in himself.\n\nAnd even when I didn't have much faith in myself, you somehow still had some left for me.\n\nI'll always be grateful for that.\n\nI don't know what the future is going to look like. Life will change, we'll change, we'll probably have more arguments because apparently that's one of our love languages \ud83d\ude2d, and we'll probably continue annoying the hell out of each other.\n\nBut I genuinely hope that through all of that, we keep choosing each other.\n\nFrom a random Facebook conversation to Instagram, WhatsApp, friendship, best friendship, and somehow becoming this huge part of each other's lives...\n\nI don't want this to just be a chapter.\n\nI hope it stays.\n\nFor a very, very long time.\n\nHappy Birthday, Sree. \u2764\ufe0f\n\nAnd thank you for being you.",
    signature: "— Your Mr. Diplomat"
  },

  // "Little Moments" — your photo gallery. Add or remove entries freely.
  // Put your photo files inside the /images folder and match the file name.
  photos: [
    { src: "images/photo1.jpg", caption: "The day we first met." },
    { src: "images/photo2.jpg", caption: "Days of sharing everything." },
    { src: "images/photo3.jpg", caption: "Us being idiots." },
    { src: "images/photo4.jpg", caption: "That day." },
    { src: "images/photo5.jpg", caption: "One of my favorite memories." },
    { src: "images/photo6.jpg", caption: "US FOREVER." }
  ],

  // "Things I Like About You" — exactly 6 cards, tap to flip and reveal
  likes: [
    "Your eyes — genuinely unfair, like how am I supposed to maintain eye contact and function normally?",
    "Your smile — stupidly cute, and somehow you always make me smile back like an idiot.",
    "Your silly self when you're with me — probably my favourite version of you, because apparently we share one brain cell and take turns using it.",
    "You getting irritated at my ragebaiting — honestly, one of my favourite forms of entertainment. \ud83d\ude02",
    "The way you care about me — especially when I had completely lost faith in myself, you somehow still believed in me. Annoyingly wholesome, but I love you for it.",
    "The way you are — somehow, after everything, you're still someone I know I'll always want in my life."
  ],

  // "Some Little Moments" — your timeline. Add or remove entries freely.
  timeline: [
    { date: "10th December 2024 · Day 1", title: "The beginning", memory: "The day we first met." },
    { date: "25th November 2025 · One Year", title: "The messy part", memory: "We completed our first year of endless bakchodi." },
    { date: "Forever · Ever After", title: "The good part", memory: "We will remain forever." }
  ],

  // The song section
  music: {
    lead: "There's a song I wanted you to hear.",
    file: "music/song.mp3"
  },

  // The final surprise (Screen 8)
  final: {
    preLine1: "Okay...",
    preLine2: "That's everything.",
    buttonLabel: "One Last Thing",
    title: "Happy Birthday, Sree ❤",
    message: "I told you before and I am saying again, doesn't matter far we go, doesn't matter what our future will be. I was, am and will always be there for you. I promised you and will keep it forever that if it's not you then no one. I don't know what will happen but all I want you to know is I love you Sree and I will forever."
  },

  // A hidden, password-locked message. Change the password and the message
  // below. The password check ignores capitalization and extra spaces, so
  // "Us Forever" and "us forever " both work.
  secret: {
    triggerLabel: "there's one more thing, if you know the words",
    promptLabel: "This one needs a password.",
    placeholder: "say the words",
    password: "us forever",
    wrongMessage: "Not quite. Try again.",
    message: "[SECRET MESSAGE GOES HERE]"
  }
};

/* =========================================================================
   ==========================================================================
                 EVERYTHING BELOW THIS LINE RUNS THE SITE
              (you shouldn't need to touch anything below)
   ==========================================================================
   ========================================================================= */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* -------------------------------------------------------------------------
   1. Populate text content from CONFIG
------------------------------------------------------------------------- */
function applyConfig() {
  document.getElementById('gateGreeting').textContent = CONFIG.opening.greeting;
  document.getElementById('gateSub').textContent = CONFIG.opening.subtext;

  document.getElementById('heroTitle').innerHTML = withHeart(CONFIG.hero.title);
  document.getElementById('heroSubtitle').textContent = CONFIG.hero.subtitle;

  document.getElementById('letterText').textContent = CONFIG.letter.text;
  document.getElementById('letterSign').textContent = CONFIG.letter.signature;

  document.getElementById('musicLead').textContent = CONFIG.music.lead;
  document.getElementById('audio').setAttribute('src', CONFIG.music.file);

  document.getElementById('finalBefore').querySelector('.final-pre').textContent = CONFIG.final.preLine1;
  document.getElementById('finalBefore').querySelectorAll('.final-pre')[1].textContent = CONFIG.final.preLine2;
  document.getElementById('finalBtn').textContent = CONFIG.final.buttonLabel;

  document.getElementById('revealTitle').innerHTML = withHeart(CONFIG.final.title);
  document.getElementById('revealMessage').textContent = CONFIG.final.message;

  document.getElementById('secretTriggerLabel').textContent = CONFIG.secret.triggerLabel;
  document.getElementById('secretPromptLabel').textContent = CONFIG.secret.promptLabel;
  document.getElementById('secretInput').setAttribute('placeholder', CONFIG.secret.placeholder);
  document.getElementById('secretMessage').textContent = CONFIG.secret.message;

  renderGallery();
  renderLikes();
  renderTimeline();
}

// Wrap a literal heart character in a span so it can be styled/colored
function withHeart(str) {
  return str.replace(/❤/g, '<span class="heart">❤</span>');
}

function renderGallery() {
  const track = document.getElementById('galleryTrack');
  track.innerHTML = '';
  CONFIG.photos.forEach((photo) => {
    const item = document.createElement('figure');
    item.className = 'gallery__item fade-item';
    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.caption}" loading="lazy"
           onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'gallery__placeholder'}))">
      <figcaption class="gallery__caption">${photo.caption}</figcaption>
    `;
    track.appendChild(item);
  });
}

function renderLikes() {
  const grid = document.getElementById('likesGrid');
  grid.innerHTML = '';
  CONFIG.likes.forEach((text, i) => {
    const num = String(i + 1).padStart(2, '0');
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'like-card fade-item';
    card.setAttribute('aria-expanded', 'false');
    card.innerHTML = `
      <span class="like-card__inner">
        <span class="like-card__face like-card__face--front">
          <span class="like-card__num">${num}</span>
          <span class="like-card__hint">Tap me</span>
        </span>
        <span class="like-card__face like-card__face--back">${text}</span>
      </span>
    `;
    card.addEventListener('click', () => {
      const flipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-expanded', String(flipped));
    });
    grid.appendChild(card);
  });
}

function renderTimeline() {
  const track = document.getElementById('timelineTrack');
  track.innerHTML = '';
  CONFIG.timeline.forEach((entry) => {
    const item = document.createElement('div');
    item.className = 'timeline__item fade-item';
    item.innerHTML = `
      <p class="timeline__date">${entry.date} — ${entry.title}</p>
      <p class="timeline__memory">${entry.memory}</p>
    `;
    track.appendChild(item);
  });
}

/* -------------------------------------------------------------------------
   2. Opening gate
------------------------------------------------------------------------- */
function initGate() {
  document.body.classList.add('gate-locked');
  const gate = document.getElementById('gate');
  const lines = gate.querySelectorAll('[data-reveal-delay]');

  lines.forEach((el) => {
    const delay = Number(el.getAttribute('data-reveal-delay')) * (prefersReducedMotion ? 0 : 260);
    setTimeout(() => el.classList.add('is-shown'), 200 + delay);
  });

  document.getElementById('enterBtn').addEventListener('click', () => {
    gate.classList.add('gate--hidden');
    document.body.classList.remove('gate-locked');
    const site = document.getElementById('site');
    site.removeAttribute('aria-hidden');
    setTimeout(() => {
      gate.style.display = 'none';
      revealSection(document.getElementById('hero'));
    }, prefersReducedMotion ? 0 : 300);
  }, { once: true });
}

/* -------------------------------------------------------------------------
   3. Scroll-triggered fade-ins
------------------------------------------------------------------------- */
function revealSection(el) {
  el.classList.add('in-view');
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.fade-section, .site-footer');
  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    targets.forEach(revealSection);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealSection(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  targets.forEach((t) => observer.observe(t));

  // Individually stagger gallery / like / timeline items once their
  // parent section is in view
  const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        itemObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-item').forEach((el, i) => {
    el.style.transitionDelay = prefersReducedMotion ? '0ms' : `${(i % 6) * 70}ms`;
    itemObserver.observe(el);
  });
}

/* -------------------------------------------------------------------------
   4. Scroll cue on hero
------------------------------------------------------------------------- */
function initScrollCue() {
  document.getElementById('scrollCue').addEventListener('click', () => {
    document.getElementById('letter-section').scrollIntoView({ behavior: 'smooth' });
  });
}

/* -------------------------------------------------------------------------
   5. Music player
------------------------------------------------------------------------- */
function initPlayer() {
  const audio = document.getElementById('audio');
  const toggle = document.getElementById('playToggle');
  const iconPlay = document.getElementById('iconPlay');
  const iconPause = document.getElementById('iconPause');
  const bar = document.getElementById('progressBar');
  const fill = document.getElementById('progressFill');
  const timeCurrent = document.getElementById('timeCurrent');
  const timeDuration = document.getElementById('timeDuration');
  const volume = document.getElementById('volumeSlider');

  audio.volume = Number(volume.value);

  function formatTime(sec) {
    if (!isFinite(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  toggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {
        // File missing or blocked — fail quietly, no console spam for the user
      });
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play', () => {
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
    toggle.setAttribute('aria-label', 'Pause song');
  });

  audio.addEventListener('pause', () => {
    iconPlay.style.display = 'block';
    iconPause.style.display = 'none';
    toggle.setAttribute('aria-label', 'Play song');
  });

  audio.addEventListener('loadedmetadata', () => {
    timeDuration.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      fill.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
      timeCurrent.textContent = formatTime(audio.currentTime);
    }
  });

  audio.addEventListener('ended', () => {
    fill.style.width = '0%';
    timeCurrent.textContent = '0:00';
  });

  bar.addEventListener('click', (e) => {
    if (!audio.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  });

  volume.addEventListener('input', () => {
    audio.volume = Number(volume.value);
  });
}

/* -------------------------------------------------------------------------
   6. Final surprise reveal
------------------------------------------------------------------------- */
function initFinalReveal() {
  const overlay = document.getElementById('revealOverlay');
  const openBtn = document.getElementById('finalBtn');
  const closeBtn = document.getElementById('revealClose');

  openBtn.addEventListener('click', () => {
    overlay.classList.add('is-active');
    overlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    startRevealStars();
    closeBtn.focus();
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('is-active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopRevealStars();
  });
}

/* -------------------------------------------------------------------------
   7. Secret password-locked message
------------------------------------------------------------------------- */
function initSecret() {
  const trigger = document.getElementById('secretTrigger');
  const modal = document.getElementById('secretModal');
  const form = document.getElementById('secretForm');
  const input = document.getElementById('secretInput');
  const errorEl = document.getElementById('secretError');
  const modalClose = document.getElementById('secretModalClose');
  const reveal = document.getElementById('secretReveal');
  const revealClose = document.getElementById('secretRevealClose');

  function openModal() {
    modal.classList.add('is-active');
    modal.removeAttribute('aria-hidden');
    errorEl.textContent = '';
    input.value = '';
    input.classList.remove('is-shaking');
    setTimeout(() => input.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
  }

  function openReveal() {
    reveal.classList.add('is-active');
    reveal.removeAttribute('aria-hidden');
    setTimeout(() => revealClose.focus(), 50);
  }

  function closeReveal() {
    reveal.classList.remove('is-active');
    reveal.setAttribute('aria-hidden', 'true');
  }

  function normalize(str) {
    return str.trim().toLowerCase().replace(/\s+/g, ' ');
  }

  function attemptUnlock(e) {
    e.preventDefault();
    if (normalize(input.value) === normalize(CONFIG.secret.password)) {
      closeModal();
      openReveal();
    } else {
      errorEl.textContent = CONFIG.secret.wrongMessage;
      if (!prefersReducedMotion) {
        input.classList.remove('is-shaking');
        // Force reflow so the shake animation can replay on repeated wrong tries
        void input.offsetWidth;
        input.classList.add('is-shaking');
      }
      input.focus();
      input.select();
    }
  }

  trigger.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  revealClose.addEventListener('click', closeReveal);
  form.addEventListener('submit', attemptUnlock);

  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  reveal.addEventListener('click', (e) => { if (e.target === reveal) closeReveal(); });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (modal.classList.contains('is-active')) closeModal();
    if (reveal.classList.contains('is-active')) closeReveal();
  });
}

/* -------------------------------------------------------------------------
   8. Starfield canvases (background + reveal overlay)
      Lightweight canvas particle field, pauses off-screen / hidden tab,
      and freezes into a static field when reduced motion is requested.
------------------------------------------------------------------------- */
function createStarfield(canvas, options = {}) {
  const ctx = canvas.getContext('2d');
  let stars = [];
  let animId = null;
  let running = false;
  const density = options.density || 0.00012;
  const maxStars = options.maxStars || 160;
  // A gentle, dreamy palette for the twinkling points — mostly soft white,
  // with occasional lantern-gold, lagoon-teal, and evening-lavender specks.
  const palette = ['#f4f1ec', '#f4f1ec', '#f4f1ec', '#f3d38a', '#9be8e2', '#b8a6e0'];

  function resize() {
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    const count = Math.min(maxStars, Math.floor(canvas.width * canvas.height * density));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.3,
      speed: Math.random() * 0.4 + 0.05,
      phase: Math.random() * Math.PI * 2,
      color: palette[Math.floor(Math.random() * palette.length)]
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      const twinkle = prefersReducedMotion ? 0.8 : 0.5 + Math.sin(t / 900 + s.phase) * 0.5;
      ctx.globalAlpha = 0.25 + twinkle * 0.6;
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      if (!prefersReducedMotion) {
        s.y += s.speed * 0.15;
        if (s.y > canvas.height) s.y = 0;
      }
    });
    ctx.globalAlpha = 1;
    if (running && !prefersReducedMotion) {
      animId = requestAnimationFrame(draw);
    }
  }

  function start() {
    if (running) return;
    running = true;
    resize();
    draw(0);
  }

  function stop() {
    running = false;
    if (animId) cancelAnimationFrame(animId);
  }

  window.addEventListener('resize', () => { if (running) resize(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else if (canvas.dataset.active === 'true') start();
  });

  return { start, stop };
}

let bgStars, revealStars;

function initStarfields() {
  bgStars = createStarfield(document.getElementById('stars'), { density: 0.00010, maxStars: 140 });
  bgStars.start();
  document.getElementById('stars').dataset.active = 'true';

  revealStars = createStarfield(document.getElementById('revealStars'), { density: 0.00016, maxStars: 200 });
}

function startRevealStars() {
  const canvas = document.getElementById('revealStars');
  canvas.dataset.active = 'true';
  revealStars.start();
}

function stopRevealStars() {
  const canvas = document.getElementById('revealStars');
  canvas.dataset.active = 'false';
  revealStars.stop();
}

/* -------------------------------------------------------------------------
   Boot
------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  initGate();
  initScrollReveal();
  initScrollCue();
  initPlayer();
  initFinalReveal();
  initSecret();
  initStarfields();
});
