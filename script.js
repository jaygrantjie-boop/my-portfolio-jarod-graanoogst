// ===== MOBILE MENU =====
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Attach hamburger listener
document.addEventListener('DOMContentLoaded', function () {

  // Hamburger button
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Mobile menu links — close on click
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', toggleMenu);
  });

  // ===== PROJECT FILTER =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const category = btn.getAttribute('data-cat');
      filterProjects(category, btn);
    });
  });

  // ===== CONTACT FORM =====
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', submitForm);
  }

  // ===== SCROLL FADE-IN =====
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  const animateEls = document.querySelectorAll(
    '.exp-item, .skill-card, .project-card, .timeline-item, .contact-link'
  );
  animateEls.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease ' + (i * 0.07) + 's, transform 0.5s ease ' + (i * 0.07) + 's';
    observer.observe(el);
  });

});

// ===== FILTER FUNCTION =====
function filterProjects(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(function (card) {
    if (category === 'all' || card.getAttribute('data-cat') === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ===== FORM SUBMIT =====
function submitForm() {
  const name = document.getElementById('name') ? document.getElementById('name').value.trim() : '';
  const email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
  const message = document.getElementById('message') ? document.getElementById('message').value.trim() : '';

  if (!name || !email || !message) {
    alert('Vul alle verplichte velden in.');
    return;
  }

  const successEl = document.getElementById('formSuccess');
  if (successEl) successEl.style.display = 'block';

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  if (document.getElementById('subject')) document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
}
