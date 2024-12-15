(() => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navbar = document.querySelector('.navbar');

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Sticky navbar
  window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
          navbar.classList.add('navbar-sticky');
      } else {
          navbar.classList.remove('navbar-sticky');
      }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && 
          !e.target.closest('.nav-content') && 
          navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
      }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
          navLinks.classList.remove('active');
      }
  });
})();