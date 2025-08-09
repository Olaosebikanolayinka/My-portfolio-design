// Navbar hamburger menu toggle with close icon
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

if (navbarToggle && navbarLinks) {
  const hamburgerIcon = navbarToggle.querySelector('.hamburger-icon');
  const closeIcon = navbarToggle.querySelector('.close-icon');

  navbarToggle.addEventListener('click', () => {
    const isOpen = navbarLinks.classList.toggle('active');
    navbarToggle.classList.toggle('open', isOpen);

    // Toggle icon visibility
    if (isOpen) {
      hamburgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      hamburgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });

  // Close menu when a link is clicked
  navbarLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navbarLinks.classList.remove('active');
      navbarToggle.classList.remove('open');

      hamburgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('.navbar nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// Contact form handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = 'Sending...';
    formMessage.style.color = '#007bff';

    // Simulate async send
    setTimeout(() => {
      formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
      formMessage.style.color = '#00bfae';
      contactForm.reset();
    }, 1200);
  });
}

// Animated skill bars (About section)
window.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.about-section .skill');
  skills.forEach(skill => {
    // Add a bar dynamically if not present
    if (!skill.querySelector('.skill-bar')) {
      const bar = document.createElement('div');
      bar.className = 'skill-bar';
      skill.appendChild(bar);
    }
  });
});

function animateSkillBars() {
  const skills = document.querySelectorAll('.about-section .skill');
  skills.forEach(skill => {
    const bar = skill.querySelector('.skill-bar');
    if (bar) {
      bar.style.width = skill.dataset.level || '80%';
      bar.style.opacity = 1;
    }
  });
}

let skillsAnimated = false;
window.addEventListener('scroll', () => {
  const aboutSection = document.querySelector('.about-section');
  if (!skillsAnimated && aboutSection && window.scrollY + window.innerHeight > aboutSection.offsetTop + 100) {
    animateSkillBars();
    skillsAnimated = true;
  }
});

// Project modal
function createProjectModal() {
  let modal = document.getElementById('projectModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'projectModal';
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.6)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = 9999;
    modal.style.visibility = 'hidden';
    modal.innerHTML = '<div id="modalContent" style="background:#fff;padding:2rem 1.5rem;border-radius:12px;max-width:400px;position:relative;"><button id="closeModal" style="position:absolute;top:10px;right:10px;font-size:1.2rem;background:none;border:none;cursor:pointer;">&times;</button><div id="modalBody"></div></div>';
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.id === 'closeModal') {
        modal.style.visibility = 'hidden';
      }
    });
  }
  return modal;
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function() {
    const modal = createProjectModal();
    const modalBody = modal.querySelector('#modalBody');
    modalBody.innerHTML = `<h3>${this.querySelector('h3').textContent}</h3><p>${this.querySelector('p').textContent}</p><p>More project details can go here.</p>`;
    modal.style.visibility = 'visible';
  });
});

// Scroll-to-top button

const scrollTopBtn = document.getElementById('scrollTopBtn');

// Show button when scrolling down
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Scroll to top smoothly
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Dark mode toggle
let darkToggle = document.getElementById('darkModeToggle');
if (!darkToggle) {
  darkToggle = document.createElement('button');
  darkToggle.id = 'darkModeToggle';
  darkToggle.textContent = '🌙';
  darkToggle.style.position = 'fixed';
  darkToggle.style.top = '30px';
  darkToggle.style.right = '60px';
  darkToggle.style.padding = '0.5rem 1rem';
  darkToggle.style.fontSize = '1.2rem';
  darkToggle.style.background = '#222';
  darkToggle.style.color = '#fff';
  darkToggle.style.border = 'none';
  darkToggle.style.borderRadius = '20px';
  darkToggle.style.cursor = 'pointer';
  darkToggle.style.zIndex = 10001;
  document.body.appendChild(darkToggle);
}
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    darkToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  darkToggle.textContent = '☀️';
}
