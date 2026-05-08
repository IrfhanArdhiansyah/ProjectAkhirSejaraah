

const nav = document.getElementById('stickyNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.8) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.bio-section, .portrait-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });