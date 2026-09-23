document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .cards article, .method-grid article, .project-card, .leader-card, .terminal').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-links a')];
window.addEventListener('scroll', () => {
  const y = window.scrollY + 140;
  let current = '';
  sections.forEach(section => { if (section.offsetTop <= y) current = section.id; });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});
