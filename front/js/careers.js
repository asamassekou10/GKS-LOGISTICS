// Hero Slider
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(showNextSlide, 5000);

  // Initialize Typed.js for Hero
  if (typeof Typed !== 'undefined') {
    new Typed('#typed-hero', {
      strings: [
        translations[currentLanguage]['hero-typed-1'],
        translations[currentLanguage]['hero-typed-2'],
        translations[currentLanguage]['hero-typed-3']
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });
  }
});

// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe Animated Elements
document.querySelectorAll('.animate, .no-jobs-message, .testimonial-cards .card, .footer-content > div').forEach((element) => {
  observer.observe(element);
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Language Toggle
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-services': 'Services',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'nav-news': 'Actualités',
    'hero-title': 'Join the <span>GKS Logistics</span> Team',
    'hero-subtitle': 'Be part of a global leader in logistics, where innovation meets opportunity.',
    'hero-cta': 'Explore Opportunities',
    'hero-typed-1': 'Opportunities',
    'hero-typed-2': 'Careers',
    'hero-typed-3': 'Growth',
    'no-jobs-title': 'No Open Positions Currently',
    'no-jobs-text': 'We currently have no open positions. Subscribe to our newsletter to stay updated on future opportunities at GKS Logistics.',
    'culture-title': 'Why Work at GKS Logistics?',
    'culture-text': 'At GKS Logistics, we’re more than a logistics company—we’re a global family driving innovation and excellence. Join us to make an impact, grow your career, and enjoy a vibrant, inclusive workplace.',
    'culture-benefit-1': 'Competitive salaries and health benefits',
    'culture-benefit-2': 'Flexible work options, including remote roles',
    'culture-benefit-3': 'Continuous learning and career development',
    'culture-benefit-4': 'Diverse, inclusive, and collaborative culture',
    'culture-cta': 'Join Our Team',
    'testimonials-title': 'What Our Team Says',
    'testimonial-1': '"GKS Logistics gave me the opportunity to grow and lead projects across continents. The team’s support is unmatched!"',
    'testimonial-name-1': 'Amina Diallo',
    'testimonial-role-1': 'Operations Manager, Bamako',
    'testimonial-2': '"The flexibility to work remotely and the focus on innovation make GKS an incredible place to build a career."',
    'testimonial-name-2': 'Emre Yılmaz',
    'testimonial-role-2': 'Software Engineer, Remote',
    'footer-about': 'Global logistics solutions for a connected world.',
    'footer-links-title': 'Quick Links',
    'footer-contact-title': 'Contact Us',
    'footer-newsletter-title': 'Newsletter',
    'newsletter-placeholder': 'Your email',
    'newsletter-cta': 'Subscribe'
  },
  fr: {
    'nav-home': 'Accueil',
    'nav-services': 'Services',
    'nav-about': 'À propos',
    'nav-contact': 'Contact',
    'hero-title': 'Rejoignez l’équipe <span>GKS Logistics</span>',
    'hero-subtitle': 'Faites partie d’un leader mondial en logistique, où l’innovation rencontre les opportunités.',
    'hero-cta': 'Découvrir les Opportunités',
    'hero-typed-1': 'Opportunités',
    'hero-typed-2': 'Carrières',
    'hero-typed-3': 'Croissance',
    'no-jobs-title': 'Aucun Poste Ouvert Actuellement',
    'no-jobs-text': 'Nous n’avons actuellement aucun poste vacant. Inscrivez-vous à notre newsletter pour être informé des futures opportunités chez GKS Logistics.',
    'culture-title': 'Pourquoi travailler chez GKS Logistics ?',
    'culture-text': 'Chez GKS Logistics, nous sommes plus qu’une entreprise de logistique — nous sommes une famille mondiale qui favorise l’innovation et l’excellence. Rejoignez-nous pour avoir un impact, développer votre carrière et profiter d’un environnement de travail dynamique et inclusif.',
    'culture-benefit-1': 'Salaires compétitifs et avantages sociaux',
    'culture-benefit-2': 'Options de travail flexibles, y compris des postes à distance',
    'culture-benefit-3': 'Apprentissage continu et développement de carrière',
    'culture-benefit-4': 'Culture diversifiée, inclusive et collaborative',
    'culture-cta': 'Rejoignez notre équipe',
    'testimonials-title': 'Ce que notre équipe dit',
    'testimonial-1': '"GKS Logistics m’a donné l’opportunité de grandir et de diriger des projets à travers les continents. Le soutien de l’équipe est inégalé !"',
    'testimonial-name-1': 'Issiaka COUMARE',
    'testimonial-role-1': 'Chef entreposage & Sécurité',
    'testimonial-2': '"Chez GKS Logistics, notre action ne s\'arrête pas aux livraisons - nous apportons également de l\'espoir, de la sensibilisation et de l\'attention."',
    'testimonial-name-2': 'Seyba Mohamed DIABATE',
    'testimonial-role-2': 'Service Opération',
    'footer-about': 'Solutions logistiques mondiales pour un monde connecté.',
    'footer-links-title': 'Liens rapides',
    'footer-contact-title': 'Nous contacter',
    'footer-newsletter-title': 'Newsletter',
    'newsletter-placeholder': 'Votre email',
    'newsletter-cta': 'S’abonner'
  }
};

let currentLanguage = 'fr';

function translatePage(language) {
  currentLanguage = language;
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const key = element.getAttribute('data-translate');
    element.innerHTML = translations[language][key] || element.innerHTML;
  });
  document.querySelectorAll('[data-translate-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-translate-placeholder');
    element.placeholder = translations[language][key] || element.placeholder;
  });
  document.querySelector('#languageToggle').style.backgroundImage = `url('../assets/${language === 'en' ? 'french' : 'english'}-flag.jpg')`;
  document.querySelector('#languageToggle').title = language === 'en' ? 'Passer à l’anglais' : 'Switch to French';
}

document.getElementById('languageToggle').addEventListener('click', () => {
  const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  translatePage(newLanguage);
});

// Initial translation
translatePage('fr');