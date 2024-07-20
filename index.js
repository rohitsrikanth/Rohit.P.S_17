// Add event listeners to navigation menu items
document.querySelectorAll('nav a').forEach((link) => {
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
