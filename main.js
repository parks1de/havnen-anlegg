/* ============================================================
   HAVNEN ANLEGG AS – Main JS
   ============================================================ */

// ── Navbar scroll effect ──
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Mobile burger menu ──
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});

// ── Smooth active-link highlight on scroll ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

// ── Scroll-reveal animation ──
const revealEls = document.querySelectorAll(
  '.service-card, .machine-card, .project-card, .cert-badge, .stat'
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, 80 * (entry.target.dataset.revealIndex || 0));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el, i) => {
  el.dataset.revealIndex = i % 6;
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Inject reveal styles
const style = document.createElement('style');
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .reveal.revealed {
    opacity: 1;
    transform: none;
  }
  .nav__links a.active {
    color: var(--gold) !important;
  }
`;
document.head.appendChild(style);

// ── Contact form handler ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Sender…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✓ Sendt! Vi tek kontakt snart.';
    btn.style.background = '#2e7d32';
    btn.style.borderColor = '#2e7d32';
    e.target.reset();
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 4000);
  }, 1000);
}
