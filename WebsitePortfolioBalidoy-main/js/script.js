// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');
// Select all sections
const sections = document.querySelectorAll('section');

// Add event listener to handle click-based active state
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'active' class from all links
    navLinks.forEach(nav => nav.classList.remove('active'));
    // Add 'active' class to the clicked link
    link.classList.add('active');
  });
});

// Create an Intersection Observer to handle scroll-based active state
const observer = new IntersectionObserver(entries => {
  let activeSectionId = null; // Track the active section

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activeSectionId = entry.target.id; // Update the active section ID
    }
  });

  // Update the navigation links
  if (activeSectionId) {
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[href="#${activeSectionId}"]`);
    if (activeLink) activeLink.classList.add('active');
  }
}, {
  threshold: 0.1, // Adjust to trigger when 30% of the section is visible
});

// Observe each section
sections.forEach(section => observer.observe(section));

