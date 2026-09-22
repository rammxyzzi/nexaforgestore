// Promo bar close
document.getElementById('promoClose').addEventListener('click', () => {
  document.getElementById('promoBar').style.display = 'none';
});

// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');
reveals.forEach((el, i) => el.style.setProperty('--i', i % 6));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
