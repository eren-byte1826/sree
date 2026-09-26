/* =========================================================
   AISHI BIRTHDAY — MIDNIGHT GARDEN
   Works with index.html + script.js
========================================================= */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');

:root {
  --bg: #080914;
  --bg-soft: #101225;
  --card: rgba(255,255,255,.055);
  --card-strong: rgba(255,255,255,.085);
  --text: #f7f3ee;
  --muted: #b9b5c7;
  --pink: #f2a9c4;
  --lavender: #b8a6e0;
  --gold: #f3d38a;
  --line: rgba(255,255,255,.12);
  --shadow: 0 25px 80px rgba(0,0,0,.35);
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "DM Sans", system-ui, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at 15% 10%, rgba(184,166,224,.10), transparent 30rem),
    radial-gradient(circle at 85% 30%, rgba(242,169,196,.08), transparent 28rem),
    var(--bg);
  color: var(--text);
  font-family: var(--sans);
  line-height: 1.65;
  overflow-x: hidden;
}

body.gate-locked {
  overflow: hidden;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

button:focus-visible,
input:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 4px;
}

/* =========================
   STARFIELD
========================= */

.starfield {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

#site {
  position: relative;
  z-index: 1;
}

/* =========================
   OPENING GATE
========================= */

.gate {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 28px;
  text-align: center;
  background:
    radial-gradient(circle at 50% 45%, rgba(184,166,224,.13), transparent 28rem),
    rgba(8,9,20,.97);
  transition: opacity .8s ease, visibility .8s ease, transform .8s ease;
}

.gate--hidden {
  opacity: 0;
  visibility: hidden;
  transform: scale(1.03);
}

.gate__content {
  width: min(700px, 100%);
}

.gate h1,
.hero h2,
.section h2,
.reveal-overlay h2 {
  font-family: var(--serif);
  font-weight: 500;
  letter-spacing: -.025em;
}

.gate h1 {
  margin: 12px 0;
  font-size: clamp(3.1rem, 10vw, 7rem);
  line-height: .95;
}

.gate p:not(.eyebrow) {
  color: var(--muted);
  font-size: clamp(1rem, 3vw, 1.25rem);
}

[data-reveal-delay] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .7s ease, transform .7s ease;
}

[data-reveal-delay].is-shown {
  opacity: 1;
  transform: translateY(0);
}

/* =========================
   SHARED
========================= */

.eyebrow {
  margin: 0 0 12px;
  color: var(--gold);
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.heart {
  color: var(--pink);
  display: inline-block;
}

.section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 110px 22px;
}

.section__inner {
  width: min(1050px, 100%);
  margin: 0 auto;
  text-align: center;
}

.section__intro,
.music-lead {
  margin-left: auto;
  margin-right: auto;
}

.section h2 {
  margin: 0 0 22px;
  font-size: clamp(2.8rem, 7vw, 5.4rem);
  line-height: .98;
}

.section__intro,
.music-lead {
  max-width: 620px;
  margin: 0 0 38px;
  color: var(--muted);
}

.btn {
  border: 0;
  border-radius: 999px;
  padding: 13px 23px;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn--primary {
  color: #17131a;
  background: linear-gradient(135deg, var(--gold), var(--pink));
  box-shadow: 0 12px 40px rgba(242,169,196,.16);
}

.btn--ghost {
  color: var(--text);
  background: rgba(255,255,255,.05);
  border: 1px solid var(--line);
}

/* =========================
   HERO
========================= */

.hero {
  min-height: 100svh;
  padding-top: 80px;
  text-align: center;
  justify-content: center;
}

.hero__content {
  width: min(900px, 100%);
}

.hero h2 {
  margin: 0 auto 24px;
  font-size: clamp(4rem, 12vw, 9rem);
  line-height: .86;
}

.hero p:not(.eyebrow) {
  max-width: 600px;
  margin: 0 auto;
  color: var(--muted);
  font-size: clamp(1rem, 3vw, 1.25rem);
}

.scroll-cue {
  margin-top: 70px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  color: var(--muted);
  background: none;
  border: 0;
  font-size: .72rem;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.scroll-cue__arrow {
  color: var(--gold);
  font-size: 1.2rem;
  animation: bob 1.8s ease-in-out infinite;
}

@keyframes bob {
  50% { transform: translateY(7px); }
}

/* =========================
   SCROLL REVEALS
========================= */

.fade-section {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 1s ease, transform 1s ease;
}

.fade-section.in-view {
  opacity: 1;
  transform: translateY(0);
}

.fade-item {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity .7s ease, transform .7s ease;
}

.fade-item.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* =========================
   LETTER
========================= */

.letter-section {
  background: linear-gradient(180deg, transparent, rgba(255,255,255,.018), transparent);
}

.letter-card {
  position: relative;
  width: min(820px, 100%);
  margin-left: auto;
  margin-right: auto;
  padding: clamp(30px, 6vw, 70px);
  border: 1px solid var(--line);
  border-radius: 28px;
  background: linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.025));
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.letter-card__decor {
  margin-bottom: 20px;
  color: var(--gold);
  font-size: 1.5rem;
}

.letter-card__text {
  margin: 0;
  white-space: pre-line;
  color: #eeeaf0;
  font-family: var(--serif);
  font-size: clamp(1.15rem, 2.2vw, 1.42rem);
  line-height: 1.8;
}

.letter-card__signature {
  margin: 35px 0 0;
  color: var(--pink);
  font-family: var(--serif);
  font-size: 1.5rem;
  text-align: right;
}

/* =========================
   GALLERY
========================= */

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.gallery__item {
  margin: 0;
}

.gallery__item:nth-child(2) {
  transform: translateY(35px);
}

.gallery__item:nth-child(5) {
  transform: translateY(35px);
}

.gallery__item img,
.gallery__placeholder {
  width: 100%;
  aspect-ratio: 4 / 5;
  display: block;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--line);
  background:
    linear-gradient(145deg, rgba(242,169,196,.12), rgba(184,166,224,.08)),
    #111322;
  box-shadow: 0 18px 50px rgba(0,0,0,.22);
}

.gallery__item img {
  transition: transform .45s ease, filter .45s ease;
}

.gallery__item:hover img {
  transform: scale(1.025);
  filter: brightness(1.08);
}

.gallery__caption {
  margin: 10px 4px 0;
  color: var(--muted);
  font-size: .85rem;
}

/* =========================
   LIKE CARDS
========================= */

.likes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.like-card {
  height: 230px;
  padding: 0;
  color: var(--text);
  border: 0;
  background: transparent;
  perspective: 1000px;
}

.like-card__inner {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform .65s cubic-bezier(.2,.7,.2,1);
}

.like-card.is-flipped .like-card__inner {
  transform: rotateY(180deg);
}

.like-card__face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: var(--card);
  backface-visibility: hidden;
  box-shadow: 0 15px 45px rgba(0,0,0,.18);
}

.like-card__face--front {
  flex-direction: column;
  gap: 12px;
}

.like-card__num {
  color: var(--gold);
  font-family: var(--serif);
  font-size: 2.4rem;
}

.like-card__hint {
  color: var(--muted);
  font-size: .8rem;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.like-card__face--back {
  transform: rotateY(180deg);
  color: #f1edf2;
  font-family: var(--serif);
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: center;
  background: linear-gradient(145deg, rgba(242,169,196,.12), rgba(184,166,224,.10));
}

/* =========================
   TIMELINE
========================= */

.timeline {
  position: relative;
  width: min(780px, 100%);
  max-width: 780px;
  margin: 45px auto 0;
  text-align: left;
  padding-left: 30px;
  border-left: 1px solid rgba(243,211,138,.35);
}

.timeline__item {
  position: relative;
  padding: 0 0 48px 25px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -36px;
  top: 5px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 20px rgba(243,211,138,.4);
}

.timeline__date {
  margin: 0 0 7px;
  color: var(--gold);
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.timeline__memory {
  margin: 0;
  color: var(--muted);
  font-family: var(--serif);
  font-size: 1.5rem;
}

/* =========================
   MUSIC
========================= */

.music-section {
  min-height: auto;
  padding-bottom: 130px;
}

.music-player {
  display: flex;
  align-items: center;
  gap: 18px;
  width: min(850px, 100%);
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--card);
  backdrop-filter: blur(14px);
}

.music-player__play {
  flex: 0 0 auto;
  width: 54px;
  height: 54px;
  border: 0;
  border-radius: 50%;
  color: #17131a;
  background: linear-gradient(135deg, var(--gold), var(--pink));
}

.music-player__body {
  flex: 1;
  min-width: 0;
}

.music-player__progress {
  position: relative;
  height: 7px;
  overflow: hidden;
  border-radius: 99px;
  background: rgba(255,255,255,.10);
  cursor: pointer;
}

.music-player__fill {
  width: 0%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--gold), var(--pink));
}

.music-player__times {
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  color: var(--muted);
  font-size: .72rem;
}

.music-player__volume {
  display: flex;
  align-items: center;
  gap: 7px;
}

.music-player__volume input {
  width: 90px;
}

.music-note {
  margin-top: 13px;
  color: #817e8f;
  font-size: .75rem;
}

/* =========================
   FINAL
========================= */

.final-section {
  min-height: 75vh;
  text-align: center;
  justify-content: center;
}

.final-before {
  width: min(700px, 100%);
}

.final-pre {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 1;
}

.final-pre + .final-pre {
  margin-top: 8px;
  color: var(--muted);
}

#finalBtn {
  margin-top: 45px;
}

/* =========================
   REVEAL OVERLAY
========================= */

.reveal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  padding: 28px;
  text-align: center;
  background: rgba(5,6,15,.97);
  opacity: 0;
  visibility: hidden;
  transform: scale(.98);
  transition: opacity .7s ease, visibility .7s ease, transform .7s ease;
}

.reveal-overlay.is-active {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

.reveal-overlay__content {
  position: relative;
  z-index: 2;
  width: min(850px, 100%);
}

.reveal-overlay h2 {
  margin: 10px 0 28px;
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: .88;
}

.reveal-overlay__message {
  max-width: 700px;
  margin: 0 auto;
  white-space: pre-line;
  color: #e9e4eb;
  font-family: var(--serif);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  line-height: 1.7;
}

/* =========================
   SECRET
========================= */

.secret-section {
  min-height: 30vh;
  justify-content: center;
  text-align: center;
}

.secret-trigger-label {
  margin: 0 auto 12px;
  color: #656273;
  font-size: .75rem;
  letter-spacing: .06em;
}

.secret-trigger-label + .btn {
  width: 45px;
  height: 45px;
  padding: 0;
  color: var(--gold);
}

/* =========================
   MODALS
========================= */

.modal {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: grid;
  place-items: center;
  padding: 22px;
  background: rgba(3,4,10,.82);
  backdrop-filter: blur(15px);
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s ease, visibility .3s ease;
}

.modal.is-active {
  opacity: 1;
  visibility: visible;
}

.modal__box {
  position: relative;
  width: min(520px, 100%);
  padding: 42px 28px 32px;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: #111322;
  box-shadow: var(--shadow);
  text-align: center;
}

.modal__box h2 {
  margin: 0 0 25px;
  font-family: var(--serif);
  font-size: 2.7rem;
  line-height: 1;
}

.modal__close {
  position: absolute;
  top: 12px;
  right: 15px;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  color: var(--muted);
  background: rgba(255,255,255,.06);
  font-size: 1.5rem;
}

#secretInput {
  width: 100%;
  margin-bottom: 14px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  outline: none;
  color: var(--text);
  background: rgba(255,255,255,.05);
  text-align: center;
}

.secret-error {
  min-height: 24px;
  margin: 12px 0 0;
  color: var(--pink);
  font-size: .85rem;
}

.secret-message {
  white-space: pre-line;
  color: #eeeaf0;
  font-family: var(--serif);
  font-size: 1.45rem;
  line-height: 1.65;
}

/* =========================
   FOOTER
========================= */

.site-footer {
  padding: 45px 22px 70px;
  color: #666375;
  text-align: center;
  font-size: .75rem;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 800px) {
  .gallery,
  .likes-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery__item:nth-child(2),
  .gallery__item:nth-child(5) {
    transform: none;
  }

  .like-card {
    height: 210px;
  }

  .music-player {
    flex-wrap: wrap;
  }

  .music-player__body {
    order: 3;
    flex-basis: 100%;
  }

  .music-player__volume {
    margin-left: auto;
  }
}

@media (max-width: 520px) {
  .section {
    min-height: auto;
    padding: 85px 18px;
  }

  .hero {
    min-height: 100svh;
    padding-inline: 18px;
  }

  .hero h2 {
    font-size: clamp(3.5rem, 18vw, 5.8rem);
  }

  .letter-card {
    border-radius: 22px;
  }

  .gallery,
  .likes-grid {
    grid-template-columns: 1fr;
  }

  .gallery__item img,
  .gallery__placeholder {
    aspect-ratio: 4 / 5;
  }

  .like-card {
    height: 220px;
  }

  .timeline {
    padding-left: 24px;
  }

  .timeline__item::before {
    left: -30px;
  }

  .music-player__volume {
    display: none;
  }

  .reveal-overlay h2 {
    font-size: clamp(3.2rem, 16vw, 5.5rem);
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
/* =========================================================
   AISHI BIRTHDAY — MIDNIGHT GARDEN
   Works with index.html + script.js
========================================================= */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');

:root {
  --bg: #080914;
  --bg-soft: #101225;
  --card: rgba(255,255,255,.055);
  --card-strong: rgba(255,255,255,.085);
  --text: #f7f3ee;
  --muted: #b9b5c7;
  --pink: #f2a9c4;
  --lavender: #b8a6e0;
  --gold: #f3d38a;
  --line: rgba(255,255,255,.12);
  --shadow: 0 25px 80px rgba(0,0,0,.35);
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "DM Sans", system-ui, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at 15% 10%, rgba(184,166,224,.10), transparent 30rem),
    radial-gradient(circle at 85% 30%, rgba(242,169,196,.08), transparent 28rem),
    var(--bg);
  color: var(--text);
  font-family: var(--sans);
  line-height: 1.65;
  overflow-x: hidden;
}

body.gate-locked {
  overflow: hidden;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

button:focus-visible,
input:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 4px;
}

/* =========================
   STARFIELD
========================= */

.starfield {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

#site {
  position: relative;
  z-index: 1;
}

/* =========================
   OPENING GATE
========================= */

.gate {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 28px;
  text-align: center;
  background:
    radial-gradient(circle at 50% 45%, rgba(184,166,224,.13), transparent 28rem),
    rgba(8,9,20,.97);
  transition: opacity .8s ease, visibility .8s ease, transform .8s ease;
}

.gate--hidden {
  opacity: 0;
  visibility: hidden;
  transform: scale(1.03);
}

.gate__content {
  width: min(700px, 100%);
}

.gate h1,
.hero h2,
.section h2,
.reveal-overlay h2 {
  font-family: var(--serif);
  font-weight: 500;
  letter-spacing: -.025em;
}

.gate h1 {
  margin: 12px 0;
  font-size: clamp(3.1rem, 10vw, 7rem);
  line-height: .95;
}

.gate p:not(.eyebrow) {
  color: var(--muted);
  font-size: clamp(1rem, 3vw, 1.25rem);
}

[data-reveal-delay] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .7s ease, transform .7s ease;
}

[data-reveal-delay].is-shown {
  opacity: 1;
  transform: translateY(0);
}

/* =========================
   SHARED
========================= */

.eyebrow {
  margin: 0 0 12px;
  color: var(--gold);
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.heart {
  color: var(--pink);
  display: inline-block;
}

.section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 110px 22px;
}

.section__inner {
  width: min(1050px, 100%);
  margin: 0 auto;
  text-align: center;
}

.section__intro,
.music-lead {
  margin-left: auto;
  margin-right: auto;
}

.section h2 {
  margin: 0 0 22px;
  font-size: clamp(2.8rem, 7vw, 5.4rem);
  line-height: .98;
}

.section__intro,
.music-lead {
  max-width: 620px;
  margin: 0 0 38px;
  color: var(--muted);
}

.btn {
  border: 0;
  border-radius: 999px;
  padding: 13px 23px;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn--primary {
  color: #17131a;
  background: linear-gradient(135deg, var(--gold), var(--pink));
  box-shadow: 0 12px 40px rgba(242,169,196,.16);
}

.btn--ghost {
  color: var(--text);
  background: rgba(255,255,255,.05);
  border: 1px solid var(--line);
}

/* =========================
   HERO
========================= */

.hero {
  min-height: 100svh;
  padding-top: 80px;
  text-align: center;
  justify-content: center;
}

.hero__content {
  width: min(900px, 100%);
}

.hero h2 {
  margin: 0 auto 24px;
  font-size: clamp(4rem, 12vw, 9rem);
  line-height: .86;
}

.hero p:not(.eyebrow) {
  max-width: 600px;
  margin: 0 auto;
  color: var(--muted);
  font-size: clamp(1rem, 3vw, 1.25rem);
}

.scroll-cue {
  margin-top: 70px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  color: var(--muted);
  background: none;
  border: 0;
  font-size: .72rem;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.scroll-cue__arrow {
  color: var(--gold);
  font-size: 1.2rem;
  animation: bob 1.8s ease-in-out infinite;
}

@keyframes bob {
  50% { transform: translateY(7px); }
}

/* =========================
   SCROLL REVEALS
========================= */

.fade-section {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 1s ease, transform 1s ease;
}

.fade-section.in-view {
  opacity: 1;
  transform: translateY(0);
}

.fade-item {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity .7s ease, transform .7s ease;
}

.fade-item.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* =========================
   LETTER
========================= */

.letter-section {
  background: linear-gradient(180deg, transparent, rgba(255,255,255,.018), transparent);
}

.letter-card {
  position: relative;
  width: min(820px, 100%);
  margin-left: auto;
  margin-right: auto;
  padding: clamp(30px, 6vw, 70px);
  border: 1px solid var(--line);
  border-radius: 28px;
  background: linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.025));
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.letter-card__decor {
  margin-bottom: 20px;
  color: var(--gold);
  font-size: 1.5rem;
}

.letter-card__text {
  margin: 0;
  white-space: pre-line;
  color: #eeeaf0;
  font-family: var(--serif);
  font-size: clamp(1.15rem, 2.2vw, 1.42rem);
  line-height: 1.8;
}

.letter-card__signature {
  margin: 35px 0 0;
  color: var(--pink);
  font-family: var(--serif);
  font-size: 1.5rem;
  text-align: right;
}

/* =========================
   GALLERY
========================= */

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.gallery__item {
  margin: 0;
}

.gallery__item:nth-child(2) {
  transform: translateY(35px);
}

.gallery__item:nth-child(5) {
  transform: translateY(35px);
}

.gallery__item img,
.gallery__placeholder {
  width: 100%;
  aspect-ratio: 4 / 5;
  display: block;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--line);
  background:
    linear-gradient(145deg, rgba(242,169,196,.12), rgba(184,166,224,.08)),
    #111322;
  box-shadow: 0 18px 50px rgba(0,0,0,.22);
}

.gallery__item img {
  transition: transform .45s ease, filter .45s ease;
}

.gallery__item:hover img {
  transform: scale(1.025);
  filter: brightness(1.08);
}

.gallery__caption {
  margin: 10px 4px 0;
  color: var(--muted);
  font-size: .85rem;
}

/* =========================
   LIKE CARDS
========================= */

.likes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.like-card {
  height: 230px;
  padding: 0;
  color: var(--text);
  border: 0;
  background: transparent;
  perspective: 1000px;
}

.like-card__inner {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform .65s cubic-bezier(.2,.7,.2,1);
}

.like-card.is-flipped .like-card__inner {
  transform: rotateY(180deg);
}

.like-card__face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: var(--card);
  backface-visibility: hidden;
  box-shadow: 0 15px 45px rgba(0,0,0,.18);
}

.like-card__face--front {
  flex-direction: column;
  gap: 12px;
}

.like-card__num {
  color: var(--gold);
  font-family: var(--serif);
  font-size: 2.4rem;
}

.like-card__hint {
  color: var(--muted);
  font-size: .8rem;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.like-card__face--back {
  transform: rotateY(180deg);
  color: #f1edf2;
  font-family: var(--serif);
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: center;
  background: linear-gradient(145deg, rgba(242,169,196,.12), rgba(184,166,224,.10));
}

/* =========================
   TIMELINE
========================= */

.timeline {
  position: relative;
  width: min(780px, 100%);
  max-width: 780px;
  margin: 45px auto 0;
  text-align: left;
  padding-left: 30px;
  border-left: 1px solid rgba(243,211,138,.35);
}

.timeline__item {
  position: relative;
  padding: 0 0 48px 25px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -36px;
  top: 5px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 20px rgba(243,211,138,.4);
}

.timeline__date {
  margin: 0 0 7px;
  color: var(--gold);
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.timeline__memory {
  margin: 0;
  color: var(--muted);
  font-family: var(--serif);
  font-size: 1.5rem;
}

/* =========================
   MUSIC
========================= */

.music-section {
  min-height: auto;
  padding-bottom: 130px;
}

.music-player {
  display: flex;
  align-items: center;
  gap: 18px;
  width: min(850px, 100%);
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--card);
  backdrop-filter: blur(14px);
}

.music-player__play {
  flex: 0 0 auto;
  width: 54px;
  height: 54px;
  border: 0;
  border-radius: 50%;
  color: #17131a;
  background: linear-gradient(135deg, var(--gold), var(--pink));
}

.music-player__body {
  flex: 1;
  min-width: 0;
}

.music-player__progress {
  position: relative;
  height: 7px;
  overflow: hidden;
  border-radius: 99px;
  background: rgba(255,255,255,.10);
  cursor: pointer;
}

.music-player__fill {
  width: 0%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--gold), var(--pink));
}

.music-player__times {
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  color: var(--muted);
  font-size: .72rem;
}

.music-player__volume {
  display: flex;
  align-items: center;
  gap: 7px;
}

.music-player__volume input {
  width: 90px;
}

.music-note {
  margin-top: 13px;
  color: #817e8f;
  font-size: .75rem;
}

/* =========================
   FINAL
========================= */

.final-section {
  min-height: 75vh;
  text-align: center;
  justify-content: center;
}

.final-before {
  width: min(700px, 100%);
}

.final-pre {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 1;
}

.final-pre + .final-pre {
  margin-top: 8px;
  color: var(--muted);
}

#finalBtn {
  margin-top: 45px;
}

/* =========================
   REVEAL OVERLAY
========================= */

.reveal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  padding: 28px;
  text-align: center;
  background: rgba(5,6,15,.97);
  opacity: 0;
  visibility: hidden;
  transform: scale(.98);
  transition: opacity .7s ease, visibility .7s ease, transform .7s ease;
}

.reveal-overlay.is-active {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

.reveal-overlay__content {
  position: relative;
  z-index: 2;
  width: min(850px, 100%);
}

.reveal-overlay h2 {
  margin: 10px 0 28px;
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: .88;
}

.reveal-overlay__message {
  max-width: 700px;
  margin: 0 auto;
  white-space: pre-line;
  color: #e9e4eb;
  font-family: var(--serif);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  line-height: 1.7;
}

/* =========================
   SECRET
========================= */

.secret-section {
  min-height: 30vh;
  justify-content: center;
  text-align: center;
}

.secret-trigger-label {
  margin: 0 auto 12px;
  color: #656273;
  font-size: .75rem;
  letter-spacing: .06em;
}

.secret-trigger-label + .btn {
  width: 45px;
  height: 45px;
  padding: 0;
  color: var(--gold);
}

/* =========================
   MODALS
========================= */

.modal {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: grid;
  place-items: center;
  padding: 22px;
  background: rgba(3,4,10,.82);
  backdrop-filter: blur(15px);
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s ease, visibility .3s ease;
}

.modal.is-active {
  opacity: 1;
  visibility: visible;
}

.modal__box {
  position: relative;
  width: min(520px, 100%);
  padding: 42px 28px 32px;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: #111322;
  box-shadow: var(--shadow);
  text-align: center;
}

.modal__box h2 {
  margin: 0 0 25px;
  font-family: var(--serif);
  font-size: 2.7rem;
  line-height: 1;
}

.modal__close {
  position: absolute;
  top: 12px;
  right: 15px;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  color: var(--muted);
  background: rgba(255,255,255,.06);
  font-size: 1.5rem;
}

#secretInput {
  width: 100%;
  margin-bottom: 14px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  outline: none;
  color: var(--text);
  background: rgba(255,255,255,.05);
  text-align: center;
}

.secret-error {
  min-height: 24px;
  margin: 12px 0 0;
  color: var(--pink);
  font-size: .85rem;
}

.secret-message {
  white-space: pre-line;
  color: #eeeaf0;
  font-family: var(--serif);
  font-size: 1.45rem;
  line-height: 1.65;
}

/* =========================
   FOOTER
========================= */

.site-footer {
  padding: 45px 22px 70px;
  color: #666375;
  text-align: center;
  font-size: .75rem;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 800px) {
  .gallery,
  .likes-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery__item:nth-child(2),
  .gallery__item:nth-child(5) {
    transform: none;
  }

  .like-card {
    height: 210px;
  }

  .music-player {
    flex-wrap: wrap;
  }

  .music-player__body {
    order: 3;
    flex-basis: 100%;
  }

  .music-player__volume {
    margin-left: auto;
  }
}

@media (max-width: 520px) {
  .section {
    min-height: auto;
    padding: 85px 18px;
  }

  .hero {
    min-height: 100svh;
    padding-inline: 18px;
  }

  .hero h2 {
    font-size: clamp(3.5rem, 18vw, 5.8rem);
  }

  .letter-card {
    border-radius: 22px;
  }

  .gallery,
  .likes-grid {
    grid-template-columns: 1fr;
  }

  .gallery__item img,
  .gallery__placeholder {
    aspect-ratio: 4 / 5;
  }

  .like-card {
    height: 220px;
  }

  .timeline {
    padding-left: 24px;
  }

  .timeline__item::before {
    left: -30px;
  }

  .music-player__volume {
    display: none;
  }

  .reveal-overlay h2 {
    font-size: clamp(3.2rem, 16vw, 5.5rem);
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
/* =========================================================
   AISHI BIRTHDAY — MIDNIGHT GARDEN
   Works with index.html + script.js
========================================================= */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');

:root {
  --bg: #080914;
  --bg-soft: #101225;
  --card: rgba(255,255,255,.055);
  --card-strong: rgba(255,255,255,.085);
  --text: #f7f3ee;
  --muted: #b9b5c7;
  --pink: #f2a9c4;
  --lavender: #b8a6e0;
  --gold: #f3d38a;
  --line: rgba(255,255,255,.12);
  --shadow: 0 25px 80px rgba(0,0,0,.35);
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "DM Sans", system-ui, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at 15% 10%, rgba(184,166,224,.10), transparent 30rem),
    radial-gradient(circle at 85% 30%, rgba(242,169,196,.08), transparent 28rem),
    var(--bg);
  color: var(--text);
  font-family: var(--sans);
  line-height: 1.65;
  overflow-x: hidden;
}

body.gate-locked {
  overflow: hidden;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

button:focus-visible,
input:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 4px;
}

/* =========================
   STARFIELD
========================= */

.starfield {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

#site {
  position: relative;
  z-index: 1;
}

/* =========================
   OPENING GATE
========================= */

.gate {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 28px;
  text-align: center;
  background:
    radial-gradient(circle at 50% 45%, rgba(184,166,224,.13), transparent 28rem),
    rgba(8,9,20,.97);
  transition: opacity .8s ease, visibility .8s ease, transform .8s ease;
}

.gate--hidden {
  opacity: 0;
  visibility: hidden;
  transform: scale(1.03);
}

.gate__content {
  width: min(700px, 100%);
}

.gate h1,
.hero h2,
.section h2,
.reveal-overlay h2 {
  font-family: var(--serif);
  font-weight: 500;
  letter-spacing: -.025em;
}

.gate h1 {
  margin: 12px 0;
  font-size: clamp(3.1rem, 10vw, 7rem);
  line-height: .95;
}

.gate p:not(.eyebrow) {
  color: var(--muted);
  font-size: clamp(1rem, 3vw, 1.25rem);
}

[data-reveal-delay] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .7s ease, transform .7s ease;
}

[data-reveal-delay].is-shown {
  opacity: 1;
  transform: translateY(0);
}

/* =========================
   SHARED
========================= */

.eyebrow {
  margin: 0 0 12px;
  color: var(--gold);
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.heart {
  color: var(--pink);
  display: inline-block;
}

.section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 110px 22px;
}

.section__inner {
  width: min(1050px, 100%);
  margin: 0 auto;
  text-align: center;
}

.section__intro,
.music-lead {
  margin-left: auto;
  margin-right: auto;
}

.section h2 {
  margin: 0 0 22px;
  font-size: clamp(2.8rem, 7vw, 5.4rem);
  line-height: .98;
}

.section__intro,
.music-lead {
  max-width: 620px;
  margin: 0 0 38px;
  color: var(--muted);
}

.btn {
  border: 0;
  border-radius: 999px;
  padding: 13px 23px;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn--primary {
  color: #17131a;
  background: linear-gradient(135deg, var(--gold), var(--pink));
  box-shadow: 0 12px 40px rgba(242,169,196,.16);
}

.btn--ghost {
  color: var(--text);
  background: rgba(255,255,255,.05);
  border: 1px solid var(--line);
}

/* =========================
   HERO
========================= */

.hero {
  min-height: 100svh;
  padding-top: 80px;
  text-align: center;
  justify-content: center;
}

.hero__content {
  width: min(900px, 100%);
}

.hero h2 {
  margin: 0 auto 24px;
  font-size: clamp(4rem, 12vw, 9rem);
  line-height: .86;
}

.hero p:not(.eyebrow) {
  max-width: 600px;
  margin: 0 auto;
  color: var(--muted);
  font-size: clamp(1rem, 3vw, 1.25rem);
}

.scroll-cue {
  margin-top: 70px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  color: var(--muted);
  background: none;
  border: 0;
  font-size: .72rem;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.scroll-cue__arrow {
  color: var(--gold);
  font-size: 1.2rem;
  animation: bob 1.8s ease-in-out infinite;
}

@keyframes bob {
  50% { transform: translateY(7px); }
}

/* =========================
   SCROLL REVEALS
========================= */

.fade-section {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 1s ease, transform 1s ease;
}

.fade-section.in-view {
  opacity: 1;
  transform: translateY(0);
}

.fade-item {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity .7s ease, transform .7s ease;
}

.fade-item.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* =========================
   LETTER
========================= */

.letter-section {
  background: linear-gradient(180deg, transparent, rgba(255,255,255,.018), transparent);
}

.letter-card {
  position: relative;
  width: min(820px, 100%);
  margin-left: auto;
  margin-right: auto;
  padding: clamp(30px, 6vw, 70px);
  border: 1px solid var(--line);
  border-radius: 28px;
  background: linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.025));
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.letter-card__decor {
  margin-bottom: 20px;
  color: var(--gold);
  font-size: 1.5rem;
}

.letter-card__text {
  margin: 0;
  white-space: pre-line;
  color: #eeeaf0;
  font-family: var(--serif);
  font-size: clamp(1.15rem, 2.2vw, 1.42rem);
  line-height: 1.8;
}

.letter-card__signature {
  margin: 35px 0 0;
  color: var(--pink);
  font-family: var(--serif);
  font-size: 1.5rem;
  text-align: right;
}

/* =========================
   GALLERY
========================= */

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.gallery__item {
  margin: 0;
}

.gallery__item:nth-child(2) {
  transform: translateY(35px);
}

.gallery__item:nth-child(5) {
  transform: translateY(35px);
}

.gallery__item img,
.gallery__placeholder {
  width: 100%;
  aspect-ratio: 4 / 5;
  display: block;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--line);
  background:
    linear-gradient(145deg, rgba(242,169,196,.12), rgba(184,166,224,.08)),
    #111322;
  box-shadow: 0 18px 50px rgba(0,0,0,.22);
}

.gallery__item img {
  transition: transform .45s ease, filter .45s ease;
}

.gallery__item:hover img {
  transform: scale(1.025);
  filter: brightness(1.08);
}

.gallery__caption {
  margin: 10px 4px 0;
  color: var(--muted);
  font-size: .85rem;
}

/* =========================
   LIKE CARDS
========================= */

.likes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.like-card {
  height: 230px;
  padding: 0;
  color: var(--text);
  border: 0;
  background: transparent;
  perspective: 1000px;
}

.like-card__inner {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform .65s cubic-bezier(.2,.7,.2,1);
}

.like-card.is-flipped .like-card__inner {
  transform: rotateY(180deg);
}

.like-card__face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: var(--card);
  backface-visibility: hidden;
  box-shadow: 0 15px 45px rgba(0,0,0,.18);
}

.like-card__face--front {
  flex-direction: column;
  gap: 12px;
}

.like-card__num {
  color: var(--gold);
  font-family: var(--serif);
  font-size: 2.4rem;
}

.like-card__hint {
  color: var(--muted);
  font-size: .8rem;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.like-card__face--back {
  transform: rotateY(180deg);
  color: #f1edf2;
  font-family: var(--serif);
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: center;
  background: linear-gradient(145deg, rgba(242,169,196,.12), rgba(184,166,224,.10));
}

/* =========================
   TIMELINE
========================= */

.timeline {
  position: relative;
  width: min(780px, 100%);
  max-width: 780px;
  margin: 45px auto 0;
  text-align: left;
  padding-left: 30px;
  border-left: 1px solid rgba(243,211,138,.35);
}

.timeline__item {
  position: relative;
  padding: 0 0 48px 25px;
}

.timeline__item::before {
  content: "";
  position: absolute;
  left: -36px;
  top: 5px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 20px rgba(243,211,138,.4);
}

.timeline__date {
  margin: 0 0 7px;
  color: var(--gold);
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.timeline__memory {
  margin: 0;
  color: var(--muted);
  font-family: var(--serif);
  font-size: 1.5rem;
}

/* =========================
   MUSIC
========================= */

.music-section {
  min-height: auto;
  padding-bottom: 130px;
}

.music-player {
  display: flex;
  align-items: center;
  gap: 18px;
  width: min(850px, 100%);
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--card);
  backdrop-filter: blur(14px);
}

.music-player__play {
  flex: 0 0 auto;
  width: 54px;
  height: 54px;
  border: 0;
  border-radius: 50%;
  color: #17131a;
  background: linear-gradient(135deg, var(--gold), var(--pink));
}

.music-player__body {
  flex: 1;
  min-width: 0;
}

.music-player__progress {
  position: relative;
  height: 7px;
  overflow: hidden;
  border-radius: 99px;
  background: rgba(255,255,255,.10);
  cursor: pointer;
}

.music-player__fill {
  width: 0%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--gold), var(--pink));
}

.music-player__times {
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  color: var(--muted);
  font-size: .72rem;
}

.music-player__volume {
  display: flex;
  align-items: center;
  gap: 7px;
}

.music-player__volume input {
  width: 90px;
}

.music-note {
  margin-top: 13px;
  color: #817e8f;
  font-size: .75rem;
}

/* =========================
   FINAL
========================= */

.final-section {
  min-height: 75vh;
  text-align: center;
  justify-content: center;
}

.final-before {
  width: min(700px, 100%);
}

.final-pre {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 1;
}

.final-pre + .final-pre {
  margin-top: 8px;
  color: var(--muted);
}

#finalBtn {
  margin-top: 45px;
}

/* =========================
   REVEAL OVERLAY
========================= */

.reveal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  padding: 28px;
  text-align: center;
  background: rgba(5,6,15,.97);
  opacity: 0;
  visibility: hidden;
  transform: scale(.98);
  transition: opacity .7s ease, visibility .7s ease, transform .7s ease;
}

.reveal-overlay.is-active {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

.reveal-overlay__content {
  position: relative;
  z-index: 2;
  width: min(850px, 100%);
}

.reveal-overlay h2 {
  margin: 10px 0 28px;
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: .88;
}

.reveal-overlay__message {
  max-width: 700px;
  margin: 0 auto;
  white-space: pre-line;
  color: #e9e4eb;
  font-family: var(--serif);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  line-height: 1.7;
}

/* =========================
   SECRET
========================= */

.secret-section {
  min-height: 30vh;
  justify-content: center;
  text-align: center;
}

.secret-trigger-label {
  margin: 0 auto 12px;
  color: #656273;
  font-size: .75rem;
  letter-spacing: .06em;
}

.secret-trigger-label + .btn {
  width: 45px;
  height: 45px;
  padding: 0;
  color: var(--gold);
}

/* =========================
   MODALS
========================= */

.modal {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: grid;
  place-items: center;
  padding: 22px;
  background: rgba(3,4,10,.82);
  backdrop-filter: blur(15px);
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s ease, visibility .3s ease;
}

.modal.is-active {
  opacity: 1;
  visibility: visible;
}

.modal__box {
  position: relative;
  width: min(520px, 100%);
  padding: 42px 28px 32px;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: #111322;
  box-shadow: var(--shadow);
  text-align: center;
}

.modal__box h2 {
  margin: 0 0 25px;
  font-family: var(--serif);
  font-size: 2.7rem;
  line-height: 1;
}

.modal__close {
  position: absolute;
  top: 12px;
  right: 15px;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  color: var(--muted);
  background: rgba(255,255,255,.06);
  font-size: 1.5rem;
}

#secretInput {
  width: 100%;
  margin-bottom: 14px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  outline: none;
  color: var(--text);
  background: rgba(255,255,255,.05);
  text-align: center;
}

.secret-error {
  min-height: 24px;
  margin: 12px 0 0;
  color: var(--pink);
  font-size: .85rem;
}

.secret-message {
  white-space: pre-line;
  color: #eeeaf0;
  font-family: var(--serif);
  font-size: 1.45rem;
  line-height: 1.65;
}

/* =========================
   FOOTER
========================= */

.site-footer {
  padding: 45px 22px 70px;
  color: #666375;
  text-align: center;
  font-size: .75rem;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 800px) {
  .gallery,
  .likes-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery__item:nth-child(2),
  .gallery__item:nth-child(5) {
    transform: none;
  }

  .like-card {
    height: 210px;
  }

  .music-player {
    flex-wrap: wrap;
  }

  .music-player__body {
    order: 3;
    flex-basis: 100%;
  }

  .music-player__volume {
    margin-left: auto;
  }
}

@media (max-width: 520px) {
  .section {
    min-height: auto;
    padding: 85px 18px;
  }

  .hero {
    min-height: 100svh;
    padding-inline: 18px;
  }

  .hero h2 {
    font-size: clamp(3.5rem, 18vw, 5.8rem);
  }

  .letter-card {
    border-radius: 22px;
  }

  .gallery,
  .likes-grid {
    grid-template-columns: 1fr;
  }

  .gallery__item img,
  .gallery__placeholder {
    aspect-ratio: 4 / 5;
  }

  .like-card {
    height: 220px;
  }

  .timeline {
    padding-left: 24px;
  }

  .timeline__item::before {
    left: -30px;
  }

  .music-player__volume {
    display: none;
  }

  .reveal-overlay h2 {
    font-size: clamp(3.2rem, 16vw, 5.5rem);
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
