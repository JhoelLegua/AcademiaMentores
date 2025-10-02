// Script consolidado de index, comCMD y comLINUX

// Barra de progreso de lectura / scroll
function updateProgressBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const bar = document.querySelector('.progress-bar');
  if (bar) bar.style.width = scrolled + '%';
}
window.addEventListener('scroll', updateProgressBar);

// Animaciones de entrada (solo página principal)
(function initEntryAnimations(){
  if (!document.querySelector('.subject-card')) return; // Solo en home
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('animate-in'); });
  }, observerOptions);
  document.querySelectorAll('.subject-card, .stat-card').forEach(el => observer.observe(el));
})();

// Parallax elementos flotantes (home)
(function initParallax(){
  const elements = document.querySelectorAll('.floating-element');
  if (!elements.length) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    elements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
  });
})();

// Contadores animados (home)
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + (element.dataset.suffix || '');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + (element.dataset.suffix || '');
    }
  }, 16);
}
(function initCounters(){
  const cards = document.querySelectorAll('.stat-card');
  if (!cards.length) return;
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target.querySelector('h4');
        if (!counter) return;
        const isPercentage = /%$/.test(counter.textContent.trim());
        if (counter.classList.contains('animated')) return;
        const numeric = parseInt(counter.textContent.replace(/[^\d]/g,''), 10);
        if (!isNaN(numeric)) {
          counter.classList.add('animated');
          if (isPercentage) counter.dataset.suffix = '%';
          animateCounter(counter, numeric);
        }
      }
    });
  });
  cards.forEach(card => statsObserver.observe(card));
})();

// Utilidad: ajuste header en páginas internas (ej: shrink on scroll)
(function headerCondense(){
  const pageHeader = document.querySelector('.page-header');
  if (!pageHeader) return;
  const body = document.body;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) body.classList.add('header-condensed');
    else body.classList.remove('header-condensed');
  });
})();

// Inicialización inmediata para estado inicial de la barra
updateProgressBar();
