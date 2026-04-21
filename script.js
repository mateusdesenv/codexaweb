const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id], footer[id]');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const formMessage = document.getElementById('formMessage');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navAnchors.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const setActiveLink = () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navAnchors.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
  });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = newsletterEmail.value.trim();

    if (!email || !email.includes('@') || !email.includes('.')) {
      formMessage.textContent = 'Digite um e-mail válido para continuar.';
      return;
    }

    formMessage.textContent = 'Cadastro realizado com sucesso. Em um projeto real, isso pode integrar com sua ferramenta de e-mail.';
    newsletterForm.reset();
  });
}
