document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .cards article, .steps > div, .leader-card, .terminal').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});
