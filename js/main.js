(function () {
  'use strict';

  /* ==============================
     DARK MODE
     ============================== */

  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  setTheme(getPreferredTheme());

  themeToggle.addEventListener('click', function () {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  /* ==============================
     MOBILE HAMBURGER MENU
     ============================== */

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function () {
    const isActive = navMenu.classList.toggle('navbar__links--active');
    hamburger.setAttribute('aria-expanded', isActive);
  });

  /* ==============================
     CLOSE MENU ON LINK CLICK
     ============================== */

  navMenu.querySelectorAll('.navbar__link').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('navbar__links--active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ==============================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ============================== */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ==============================
     SCROLL REVEAL ANIMATIONS
     ============================== */

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(function (section) {
    section.classList.add('reveal');
    observer.observe(section);
  });

  document.querySelectorAll('.skills__category, .portfolio__card, .education__card').forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });

  /* ==============================
     NAVBAR BACKGROUND ON SCROLL
     ============================== */

  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 50) {
      navbar.style.background =
        html.getAttribute('data-theme') === 'dark'
          ? 'rgba(10, 25, 47, 0.95)'
          : 'rgba(248, 249, 250, 0.95)';
    } else {
      navbar.style.background =
        html.getAttribute('data-theme') === 'dark'
          ? 'rgba(10, 25, 47, 0.85)'
          : 'rgba(248, 249, 250, 0.85)';
    }
  });

  /* ==============================
     CONTACT FORM HANDLER
     ============================== */

  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const mailtoLink =
      'mailto:ahmadhasanali@example.com' +
      '?subject=Contact from ' + encodeURIComponent(name) +
      '&body=' + encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        'Message:\n' + message
      );

    window.location.href = mailtoLink;
  });

})();
