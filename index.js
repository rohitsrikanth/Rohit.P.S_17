// Add event listeners to navigation menu items
document.querySelectorAll('navbar').forEach((link) => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Add event listeners to project links
document.querySelectorAll('#projects a').forEach((link) => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      // Open project in new tab or window
      window.open(link.getAttribute('href'), '_blank');
  });
});

// Add event listener to contact form submit button
document.getElementById('contact').addEventListener('submit', (e) => {
  e.preventDefault();
  // Send form data to server or perform other action
  console.log('Form submitted!');
});

// Add event listener to "More about me" button
document.querySelector('button a').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.createElement('ul');
  menu.innerHTML = `
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#contact">Contact</a></li>
  `;
  menu.classList.add('nav-menu');

  const desktopContainer = document.getElementById('menu-container-desktop');
  const mobileContainer = document.getElementById('menu-container-mobile');
  const menuBtn = document.querySelector('.mobile-menu-btn');

  function moveMenu() {
    if (window.innerWidth > 768) {
      // Move menu to desktop
      if (!desktopContainer.contains(menu)) {
        desktopContainer.appendChild(menu);
        menu.classList.remove('show'); // always visible on desktop
      }
    } else {
      // Move menu to mobile
      if (!mobileContainer.contains(menu)) {
        mobileContainer.appendChild(menu);
      }
    }
  }

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Close menu on link click (mobile)
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  });

  // Scroll effect on navbar
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Smooth scroll
  document.body.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const id = e.target.getAttribute('href').substring(1);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // Initial setup and on resize
  moveMenu();
  window.addEventListener('resize', moveMenu);
});
