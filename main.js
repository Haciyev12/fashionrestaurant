/* ============================================
   Fashion Street Az — main.js
   ============================================ */

// ── NAV: Add .scrolled class on scroll ──
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE MENU: Toggle open/close ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── MENU TABS: Switch active panel ──
function switchTab(id, btn) {
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

// ── SCROLL REVEAL: Animate elements into view ──
const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target); // Only animate once
    }
  });
}, revealOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
