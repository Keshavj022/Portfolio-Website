document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.slide-up');
  
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  sections.forEach(section => observer.observe(section));

  // Navbar toggle for small screens
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav ul');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Hero video and thumbnail
  const video = document.querySelector('.hero-video');
  const thumbnail = document.querySelector('.video-thumbnail');
  if (video) {
    video.addEventListener('ended', () => {
      video.classList.add('hidden');
      thumbnail.classList.remove('hidden');
    });
  }

  // Project carousel and detail view
  const projects = document.querySelectorAll('.project');
  const projectDetail = document.querySelector('.project-detail');
  const backArrow = document.querySelector('.back-arrow');
  const projectContent = document.querySelector('.project-content');

  projects.forEach(project => {
    project.addEventListener('click', () => {
      const link = project.getAttribute('data-link');
      const details = project.querySelector('.project-back').innerHTML;
      projectContent.innerHTML = `<h3>${project.querySelector('.project-front h3').innerHTML}</h3>${details}<a href="${link}" target="_blank">View Project➡</a>`;
      projectDetail.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  backArrow.addEventListener('click', () => {
    projectDetail.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Skills bar animation
  const skillBars = document.querySelectorAll('.skill-level');
  const skillsSection = document.getElementById('skills');

  const animateSkills = () => {
    skillBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = level;
    });
  };

  observer.observe(skillsSection);
  skillsSection.addEventListener('transitionend', animateSkills, { once: true });

// Tab functionality for projects
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    tabContents.forEach(content => {
      if (content.getAttribute('data-tab-content') === targetTab) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });
  });
});
