const translations = {
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-services': 'Services',
    'nav-careers': 'Careers',
    'nav-contact': 'Contact',
    // News Hero
    'news-hero-title': 'GKS Logistics News Hub',
    'news-hero-cta': 'Explore News',
    'news-hero-subtitle': 'Updates | Events | Community',
    // Categories
    'category-all': 'All',
    'category-journee-poste': 'Post Day',
    'category-community': 'Community Initiatives',
    // News Cards
    'news-title-1': 'GKS Logistics at Mali Post Day',
    'news-desc-1': 'Discover our dynamic participation in Post Day, showcasing logistics innovation in Mali.',
    'news-date-1': 'March 15, 2025',
    'news-title-2': 'GKS at Blood Donation Day',
    'news-desc-2': 'Our team commits to saving lives during the national blood donation day.',
    'news-date-2': 'April 10, 2025',
    'news-title-3': 'GKS at Breast Cancer Awareness Day',
    'news-desc-3': 'Supporting awareness with community actions for women’s health.',
    'news-date-3': 'October 20, 2024',
    'news-title-4': 'Family Day',
    'news-desc-4': 'A memorable day to strengthen bonds with our employees’ families.',
    'news-date-4': 'June 5, 2024',
    'news-title-5': 'Mali Post Day',
    'news-desc-5': 'Highlights of our presence at the national postal event.',
    'news-date-5': 'March 15, 2025',
    'news-title-6': 'Store Presentation',
    'news-desc-6': 'Discover our state-of-the-art logistics store in Bamako.',
    'news-date-6': 'February 1, 2025',
    // Chatbot
    'chatbot-title': 'GKS Assistant',
    'chatbot-welcome': 'Hello! Welcome to GKS Logistics. How can I assist you today?',
    'chatbot-placeholder': 'Type your question here...',
    // Footer
    'footer-about': 'Your global logistics partner',
    'footer-links-title': 'Useful Links',
    'footer-contact-title': 'Contact Us',
    'footer-newsletter-title': 'Newsletter',
    'newsletter-placeholder': 'Your email',
    'newsletter-cta': 'Subscribe',
    'newsletter-confirmation': 'Thank you for subscribing!',
    'footer-copy': '© 2025 GKS Logistics. All rights reserved.'
  },
  fr: {
    // Navigation
    'nav-home': 'Accueil',
    'nav-services': 'Services',
    'nav-careers': 'Carrières',
    'nav-contact': 'Contact',
    // News Hero
    'news-hero-title': 'Centre d’Actualités GKS Logistics',
    'news-hero-cta': 'Explorer les Actualités',
    'news-hero-subtitle': 'Mises à jour | Événements | Communauté',
    // Categories
    'category-all': 'Tous',
    'category-journee-poste': 'Journée de la Poste',
    'category-community': 'Initiatives Communautaires',
    // News Cards
    'news-title-1': 'GKS Logistics à la Journée de la Poste au Mali',
    'news-desc-1': 'Découvrez notre participation dynamique à la Journée de la Poste, mettant en avant l’innovation logistique au Mali.',
    'news-date-1': '15 Mars 2025',
    'news-title-2': 'GKS à la Journée du Don de Sang',
    'news-desc-2': 'Notre équipe s’engage pour sauver des vies lors de la journée nationale du don de sang.',
    'news-date-2': '10 Avril 2025',
    'news-title-3': 'GKS à la Journée de Sensibilisation contre le Cancer du Sein',
    'news-desc-3': 'Soutien à la sensibilisation avec des actions communautaires pour la santé des femmes.',
    'news-date-3': '20 Octobre 2024',
    'news-title-4': 'Family Day',
    'news-desc-4': 'Une journée mémorable pour renforcer les liens avec les familles de nos employés.',
    'news-date-4': '5 Juin 2024',
    'news-title-5': 'Journée de la Poste au Mali',
    'news-desc-5': 'Moments forts de notre présence à l’événement postal national.',
    'news-date-5': '15 Mars 2025',
    'news-title-6': 'Présentation du Magasin',
    'news-desc-6': 'Découvrez notre nouveau magasin logistique ultramoderne à Bamako.',
    'news-date-6': '1 Février 2025',
    // Chatbot
    'chatbot-title': 'GKS Assistant',
    'chatbot-welcome': 'Bonjour ! Bienvenue chez GKS Logistics. Comment puis-je vous aider aujourd’hui ?',
    'chatbot-placeholder': 'Tapez votre question ici...',
    // Footer
    'footer-about': 'Votre partenaire logistique mondial',
    'footer-links-title': 'Liens Utiles',
    'footer-contact-title': 'Contactez-nous',
    'footer-newsletter-title': 'Newsletter',
    'newsletter-placeholder': 'Votre email',
    'newsletter-cta': 'S\'inscrire',
    'newsletter-confirmation': 'Merci de vous être abonné !',
    'footer-copy': '© 2025 GKS Logistics. Tous droits réservés.'
  }
};

let currentLanguage = 'fr'; // Default to French

// Simulated bot responses in French
const botResponses = [
  { keywords: ['bonjour', 'salut', 'hey'], response: () => translations.fr['chatbot-welcome'] },
  { keywords: ['qui êtes-vous', 'qu\'est-ce que gks', 'gks logistics'], response: () => 'GKS Logistics est une entreprise de transport et de logistique fondée en 2019 à Bamako, Mali. Nous offrons des solutions logistiques innovantes dans plus de 10 pays, avec des services comme le fret aérien, maritime, terrestre et l’entreposage. Notre mission est de connecter le monde avec des solutions fiables et durables.' },
  { keywords: ['site web', 'website', 'site'], response: () => 'Notre site web présente nos services (fret aérien, maritime, terrestre, entreposage), notre présence internationale, et plus encore. Utilisez le menu pour naviguer ou demandez-moi des détails spécifiques sur une section !' },
  { keywords: ['aide', 'assistance', 'aider'], response: () => 'Je suis ici pour répondre à vos questions sur GKS Logistics ! Vous pouvez me demander des informations sur nos services, notre présence, nos contacts par pays, ou autre. Par quoi commencer ?' },
  { keywords: ['merci', 'remerciement'], response: () => 'De rien ! Comment puis-je vous aider davantage ?' },
  { keywords: ['horaires', 'heures', 'opération'], response: () => 'Nos bureaux sont ouverts du lundi au vendredi, de 8h à 18h. Vous pouvez nous contacter à tout moment via e-mail ou notre formulaire de contact.' },
  { keywords: ['localisation', 'où êtes-vous', 'siège'], response: () => 'Notre siège est à Bamako, Mali, à la Zone aéroportuaire-fret. Nous sommes également présents dans plus de 10 pays. Voulez-vous les coordonnées d’un bureau spécifique ?' },
  { keywords: ['fondation', 'création', 'quand commencé'], response: () => 'Fondation de GKS Logistics à Bamako. Créé en 2019, GKS Logistics est une entreprise qui évolue dans le domaine du transport et de la logistique avec les compétences et expériences nécessaires pour acquérir le marché.' },
  { keywords: ['mission', 'but'], response: () => translations.fr['footer-about'] + ' Nous visons à offrir des solutions logistiques qui répondent aux besoins de nos clients à travers le monde.' },
  { keywords: ['vision'], response: () => 'Redéfinir la logistique grâce à la technologie et la durabilité. Nous intégrons des technologies avancées pour optimiser nos services tout en réduisant notre impact environnemental.' },
  { keywords: ['engagement', 'promesse'], response: () => 'Garantir l’excellence et la fiabilité à chaque étape. Chaque client bénéficie de notre expertise pour des livraisons fiables et sécurisées.' },
  { keywords: ['histoire', 'historique'], response: () => 'Fondée en 2019 à Bamako, GKS Logistics s’est étendue en Afrique de l’Ouest en 2020, recevant le prix de la meilleure entreprise logistique. En 2025, nous sommes présents dans plus de 10 pays. Consultez la section "À Propos" pour plus de détails !' },
  { keywords: ['prix', 'récompense', 'award'], response: () => 'Expansion en Afrique de l’Ouest. En 2020, elle a reçu le prix de la meilleure entreprise de logistique de par son expérience et son savoir-faire et ses ambitions de conquérir le territoire national et international.' },
  { keywords: ['global', 'international', 'mondial'], response: () => 'GKS Logistics est présent mondialement dans plus de 10 pays, avec une forte implantation en Afrique de l’Ouest, ainsi qu’en Europe, en Amérique du Nord et au Moyen-Orient. Grâce à notre réseau international, nous offrons des solutions logistiques intégrées, fiables et flexibles, adaptées aux besoins spécifiques de chaque marché.' },
  { keywords: ['pays', 'opérations', 'présence'], response: () => 'Nous opérons dans plus de 10 pays, dont le Mali, le Niger, la France, les États-Unis, Dubaï, la Côte d’Ivoire, et plus encore. Consultez la section "Présence Internationale" ou demandez-moi les contacts d’un pays spécifique !' },
  { keywords: ['services', 'offres', 'que proposez-vous'], response: () => 'Nous proposons le fret aérien (98% à temps), le fret maritime (95% efficacité), le transport terrestre (97% couverture) et l’entreposage (99% sécurité). Chaque service est conçu pour répondre à vos besoins logistiques. Souhaitez-vous des détails sur un service ?' },
  { keywords: ['fret aérien', 'air'], response: () => 'Livraisons rapide et sécurisées à l’international. Avec un taux de ponctualité de 98%, c’est idéal pour les livraisons urgentes à l’international. Contactez-nous pour un devis !' },
  { keywords: ['fret maritime', 'mer', 'maritime'], response: () => 'Transport économique pour grandes cargaisons. Parfait pour les grandes cargaisons, avec 95% d’efficacité. Demandez un devis via notre formulaire de contact.' },
  { keywords: ['transport terrestre', 'terrestre', 'camion'], response: () => 'Réseau régional optimisé pour vos besoins. Notre réseau couvre 97% des besoins régionaux, idéal pour les livraisons locales.' },
  { keywords: ['entreposage', 'stockage'], response: () => 'Solutions de stockage modernes et sécurisées. Nos entrepôts modernes offrent une sécurité de 99%. Contactez-nous pour des solutions adaptées.' },
  { keywords: ['douanes', 'formalités douanières'], response: () => 'Nous simplifions les processus douaniers pour un transport fluide. Envoyez-nous vos besoins via contact@gkslogistics.com pour plus d’informations.' },
  { keywords: ['coût fret', 'tarifs', 'prix'], response: () => 'Les tarifs varient selon le service (aérien, maritime, terrestre) et la destination. Remplissez notre formulaire de contact pour un devis personnalisé.' },
  { keywords: ['délai livraison', 'temps livraison'], response: () => 'Les délais dépendent du service : le fret aérien est le plus rapide, le maritime est plus économique. Contactez-nous avec les détails de votre envoi pour une estimation précise.' },
  { keywords: ['suivi expédition', 'tracking'], response: () => 'Pour suivre votre expédition, envoyez votre numéro de suivi à contact@gkslogistics.com. Nous vous fournirons des mises à jour en temps réel.' },
  { keywords: ['envoi volumineux', 'gros cargo'], response: () => 'Notre service de fret maritime est idéal pour les cargaisons volumineuses, avec 95% d’efficacité. Consultez la section "Services" ou contactez-nous pour un devis.' },
  { keywords: ['livraison urgente', 'express'], response: () => 'Pour les livraisons urgentes, optez pour notre fret aérien avec 98% de ponctualité. Demandez un devis via notre formulaire de contact !' },
  { keywords: ['régional', 'local'], response: () => 'Nous optimisons les livraisons régionales avec un réseau couvrant 97% des zones.' },
  { keywords: ['stockage sécurisé', 'sécurité'], response: () => 'Nos entrepôts utilisent des technologies avancées pour garantir une sécurité de 99%.' },
  { keywords: ['solutions logistiques', 'personnalisées'], response: () => 'Nous adaptons nos services à vos besoins spécifiques.' },
  { keywords: ['chaîne d’approvisionnement', 'supply chain'], response: () => 'Nous optimisons votre chaîne d’approvisionnement avec des livraisons rapides et fiables. Lisez les avis de nos clients dans la section "Témoignages" !' },
  { keywords: ['contact', 'joindre', 'contacter'], response: () => 'Vous pouvez nous contacter à contact@gkslogistics.com ou au +223 90929273. Voulez-vous les coordonnées d’un bureau spécifique ?' },
  { keywords: ['email', 'courriel'], response: () => 'Notre e-mail général est contact@gkslogistics.com. Pour un bureau spécifique, indiquez le pays !' },
  { keywords: ['téléphone', 'numéro'], response: () => 'Appelez-nous au +223 90929273 pour une assistance immédiate. Souhaitez-vous un numéro pour un autre pays ?' },
  { keywords: ['devis', 'estimation'], response: () => 'Pour un devis, remplissez le formulaire dans la section "Contact" ou envoyez-nous un e-mail à contact@gkslogistics.com avec les détails de votre projet.' },
  { keywords: ['support', 'service client'], response: () => 'Notre équipe de service client est disponible via e-mail (contact@gkslogistics.com) ou téléphone (+223 90929273). Comment puis-je vous aider ?' },
  { keywords: ['plainte', 'problème'], response: () => 'Désolé pour tout désagrément ! Veuillez envoyer les détails à contact@gkslogistics.com, et nous résoudrons le problème rapidement.' },
  { keywords: ['retour', 'avis client', 'feedback'], response: () => 'Nous apprécions vos commentaires ! Partagez-les via notre formulaire de contact ou à contact@gkslogistics.com.' },
  { keywords: ['rendez-vous', 'réunion'], response: () => 'Pour planifier une réunion, contactez-nous à contact@gkslogistics.com ou au +223 90929273.' },
  { keywords: ['bureau', 'visite'], response: () => 'Notre bureau principal est à Bamako, Mali. Contactez-nous pour organiser une visite ou obtenir l’adresse d’un autre bureau.' },
  { keywords: ['partenariat', 'collaboration'], response: () => 'Intéressé par un partenariat ? Envoyez-nous un e-mail à contact@gkslogistics.com pour discuter des opportunités.' },
  { keywords: ['carrières', 'emplois', 'travailler'], response: () => 'Découvrez les opportunités de carrière chez GKS Logistics dans la section "Carrières". Nous recherchons des talents passionnés !' },
  { keywords: ['candidature', 'postuler'], response: () => 'Pour postuler, visitez la section "Carrières" et soumettez votre candidature via les offres listées.' },
  { keywords: ['stage', 'formation'], response: () => 'Nous proposons des stages dans divers départements. Consultez la section "Carrières" pour les opportunités actuelles.' },
  { keywords: ['chauffeur', 'conducteur', 'camionneur'], response: () => 'Nous recrutons des chauffeurs qualifiés pour notre service de transport terrestre. Postulez via la section "Carrières" !' },
  { keywords: ['avantages', 'bénéfices'], response: () => 'Nos employés bénéficient de salaires compétitifs, de formations et d’opportunités de croissance. Plus de détails dans la section "Carrières".' },
  { keywords: ['culture d’entreprise', 'environnement'], response: () => 'Chez GKS Logistics, nous favorisons un environnement collaboratif et innovant. Rejoignez-nous pour faire la différence !' },
  { keywords: ['postes vacants', 'offres d’emploi'], response: () => 'Les offres d’emploi actuelles sont listées dans la section "Carrières". Revenez régulièrement pour les mises à jour !' },
  { keywords: ['ressources humaines', 'rh'], response: () => 'Contactez notre équipe RH à hr@gkslogistics.com pour toute question liée aux carrières.' },
  { keywords: ['télétravail', 'travail à distance'], response: () => 'Certains postes offrent des options de télétravail. Vérifiez les détails dans les offres d’emploi de la section "Carrières".' },
  { keywords: ['salaire', 'rémunération'], response: () => 'Les salaires varient selon le poste et l’expérience. Postulez via la section "Carrières" pour discuter des détails.' },
  { keywords: ['nouvelles', 'actualités'], response: () => 'Restez informé de nos dernières réalisations et annonces dans la section "Nouvelles" !' },
  { keywords: ['récent', 'dernier'], response: () => 'Consultez la section "Nouvelles" pour nos mises à jour récentes et insights sur l’industrie.' },
  { keywords: ['presse', 'médias'], response: () => 'Pour les demandes médias, contactez-nous à media@gkslogistics.com ou visitez la section "Nouvelles".' },
  { keywords: ['événements', 'webinaire'], response: () => 'Nous organisons des événements et webinaires sur la logistique. Consultez la section "Nouvelles" pour le calendrier !' },
  { keywords: ['newsletter', 'inscription'], response: () => 'Inscrivez-vous à notre newsletter via le formulaire en bas de page pour recevoir les dernières nouvelles !' },
  { keywords: ['annonce', 'nouveau service'], response: () => 'Les nouveaux services et expansions sont annoncés dans la section "Nouvelles". Restez à l’écoute !' },
  { keywords: ['durabilité', 'écologique'], response: () => 'Nous investissons dans des pratiques durables pour réduire notre empreinte carbone.' },
  { keywords: ['tendances', 'logistique'], response: () => 'Informez-vous sur les tendances de la logistique via nos articles dans la section "Nouvelles" !' },
  { keywords: ['mali', 'bamako'], response: () => 'Services logistiques complets pour vos activités locales. Contact : +223 90929273, E-mail : sales@gkslogistics.com, Adresse : Zone aéroportuaire-fret, Bamako, Mali.' },
  { keywords: ['niger', 'niamey'], response: () => 'Services logistiques en Afrique de l’Ouest. Contact : +227 98257225 / +227 90966002 / +227 93913545, E-mail : salesniger@gkslogistics.com, Adresse : Poudrière, Avenue Damergou, CI 48, BP: 2900, Niamey, Niger.' },
  { keywords: ['france', 'paris'], response: () => 'Solutions avancées pour l’Europe. Contact : +33 769423631 / +33 605637035, E-mail : paris@gkslogistics.com, Adresse : 02 Rue Maryse Bastié, 93120, La Courneuve, France.' },
  { keywords: ['dubaï', 'dubai'], response: () => 'Liaisons dynamiques entre l’Afrique et l’Asie. Contact : +971 545835717 / +223 77977326, E-mail : mohamed.keita@gkslogistics.com, sales@gkslogistics.com, Adresse : FAST CFS Shop#6, Naif Arcade Opp: New California Hotel Deira, Dubaï.' },
  { keywords: ['côte d’ivoire', 'abidjan'], response: () => 'Logistique adaptée aux besoins régionaux. Contact : +225 0758421888, E-mail : salesabidjan@gkslogistics.com, Adresse : En cours de déménagement, contactez-nous pour les détails.' },
  { keywords: ['états-unis', 'usa', 'houston'], response: () => 'Réseau robuste pour le commerce international. Contact : +1 8323524313, E-mail : souleymane.samassekou@gkslogistics.com, Adresse : Pas d’adresse physique pour le moment.' },
  { keywords: ['guinée', 'conakry'], response: () => 'Services logistiques fiables en Afrique de l’Ouest. Contactez notre bureau principal à Bamako pour les services en Guinée : +223 90929273, sales@gkslogistics.com.' },
  { keywords: ['burkina faso', 'ouagadougou'], response: () => 'Solutions logistiques pour le commerce régional. Contactez notre bureau principal à Bamako pour les services au Burkina Faso : +223 90929273, sales@gkslogistics.com.' },
  { keywords: ['turquie', 'turkey'], response: () => 'Liaisons dynamiques entre l’Afrique et l’Asie. Contactez notre bureau à Dubaï pour les services en Turquie : +971 545835717, mohamed.keita@gkslogistics.com.' },
  { keywords: ['réseau', 'couverture'], response: () => 'Notre Présence Internationale. Nous couvrons l’Afrique de l’Ouest, l’Europe, l’Amérique du Nord et le Moyen-Orient.' },
  { keywords: ['témoignages', 'avis clients'], response: () => 'Nos clients apprécient notre fiabilité et notre service. Lisez leurs témoignages dans la section "Avis de Nos Clients" !' },
  { keywords: ['retard livraison', 'délai'], response: () => 'Les retards peuvent survenir en raison des douanes ou de conditions météorologiques. Envoyez votre numéro de suivi à contact@gkslogistics.com pour une mise à jour.' },
  { keywords: ['assurance', 'protection'], response: () => 'Nous offrons une assurance pour sécuriser vos expéditions. Contactez-nous lors de votre demande de devis pour plus de détails.' },
  { keywords: ['retour', 'remboursement'], response: () => 'Pour les demandes de retour ou remboursement, envoyez les détails de votre expédition à contact@gkslogistics.com.' },
  { keywords: ['technologie', 'tech'], response: () => 'Nous utilisons des technologies de pointe pour optimiser nos services logistiques, comme le suivi en temps réel. Consultez la section "À Propos" !' },
  { keywords: ['sécurité', 'sûreté'], response: () => 'La sécurité de vos marchandises est notre priorité. Nos entrepôts offrent 99% de sécurité, et tous nos services sont hautement fiables.' },
  { keywords: ['temps réponse', 'délai devis'], response: () => 'Nous répondons aux demandes de devis sous 24 à 48 heures. Soumettez votre demande via le formulaire de contact !' },
  { keywords: ['langues', 'support linguistique'], response: () => 'Notre site supporte le français et l’anglais. Utilisez le bouton de langue pour changer !' },
  { keywords: ['accessibilité', 'navigation'], response: () => 'Notre site est conçu pour être accessible. Contactez-nous si vous avez besoin d’aide pour naviguer !' },
  { keywords: ['réseaux sociaux', 'facebook', 'twitter'], response: () => 'Suivez-nous sur les réseaux sociaux pour les dernières mises à jour ! Les liens sont dans le pied de page.' },
  { keywords: ['blog', 'articles'], response: () => 'Consultez la section "Nouvelles" pour des articles et mises à jour sur notre entreprise !' },
  { keywords: ['faq', 'questions fréquentes'], response: () => 'Pour les questions courantes, explorez notre site ou posez-moi une question spécifique ici !' },
  { keywords: ['conditions', 'termes'], response: () => 'Nos termes et conditions sont disponibles sur demande. Envoyez un e-mail à contact@gkslogistics.com.' },
  { keywords: ['confidentialité', 'données'], response: () => 'Nous respectons votre vie privée. Contactez-nous à contact@gkslogistics.com pour notre politique de confidentialité.' }
];

// Update content based on language
function updateLanguage(lang) {
  currentLanguage = lang;
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
      element.placeholder = translations[lang][`${key}-placeholder`] || translations[lang][key] || element.placeholder;
    } else if (element.tagName === 'OPTION') {
      element.textContent = translations[lang][key] || element.textContent;
    } else {
      element.textContent = translations[lang][key] || element.textContent;
    }
  });

  // Update language toggle button
  const langToggle = document.getElementById('languageToggle');
  if (langToggle) {
    if (lang === 'en') {
      langToggle.innerHTML = '<i class="fas fa-globe"></i>';
      langToggle.title = 'Switch to French';
    } else {
      langToggle.innerHTML = '<i class="fas fa-globe"></i>';
      langToggle.title = 'Switch to English';
    }
  }
}

// Language Toggle
const languageToggle = document.getElementById('languageToggle');
if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const newLang = currentLanguage === 'en' ? 'fr' : 'en';
    updateLanguage(newLang);
  });
}

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
const newsletterConfirmation = document.getElementById('newsletterConfirmation');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      alert(translations[currentLanguage]['newsletter-placeholder'] + ' est requis.');
      return;
    }

    console.log('Subscribed email:', email);
    newsletterConfirmation.style.display = 'block';
    newsletterForm.reset();
    setTimeout(() => {
      newsletterConfirmation.style.display = 'none';
    }, 5000);
  });
}

// Document Ready
document.addEventListener('DOMContentLoaded', function () {
  // Initialize language
  updateLanguage(currentLanguage);

  // Hero Slideshow
  const heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 0) {
    let currentSlide = 0;

    function showHeroSlide(index) {
      heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function showNextHeroSlide() {
      currentSlide = (currentSlide + 1) % heroSlides.length;
      showHeroSlide(currentSlide);
    }

    showHeroSlide(currentSlide);
    setInterval(showNextHeroSlide, 5000);
  }

  // News Slideshow
  const slideshows = document.querySelectorAll('.slideshow');
  slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll('.slideshow-image');
    let currentImage = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    function showNextImage() {
      currentImage = (currentImage + 1) % images.length;
      showImage(currentImage);
    }

    showImage(currentImage);
    setInterval(showNextImage, 5000);
  });

  // Category Filter
  const categoryButtons = document.querySelectorAll('.category-btn');
  const newsCards = document.querySelectorAll('.news-cards .card');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      newsCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
          card.style.display = 'block';
          setTimeout(() => card.classList.add('visible'), 100);
        } else {
          card.classList.remove('visible');
          card.style.display = 'none';
        }
      });
    });
  });

  // Video Play Overlay
  const videoContainers = document.querySelectorAll('.video-container');
  videoContainers.forEach(container => {
    const video = container.querySelector('video');
    const overlay = container.querySelector('.play-overlay');

    if (video && overlay) {
      // Play video when overlay is clicked
      overlay.addEventListener('click', () => {
        video.play().then(() => {
          overlay.style.opacity = '0';
          overlay.style.pointerEvents = 'none';
        }).catch(error => {
          console.error('Error playing video:', error);
        });
      });

      // Hide overlay when video plays
      video.addEventListener('play', () => {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
      });

      // Show overlay when video pauses
      video.addEventListener('pause', () => {
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'auto';
      });

      // Show overlay when video ends
      video.addEventListener('ended', () => {
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'auto';
      });
    }
  });

  // Chatbot Functionality
  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbot = document.getElementById('chatbot');
  const chatbotClose = document.getElementById('chatbotClose');
  const chatbotSend = document.getElementById('chatbotSend');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotMessages = document.getElementById('chatbotMessages');

  if (chatbotToggle && chatbot && chatbotClose && chatbotSend && chatbotInput && chatbotMessages) {
    chatbotToggle.addEventListener('click', () => {
      chatbot.classList.toggle('active');
    });

    chatbotClose.addEventListener('click', () => {
      chatbot.classList.remove('active');
    });

    function addMessage(content, isUser = false) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', isUser ? 'user-message' : 'bot-message');
      messageDiv.innerHTML = `<p>${content}</p>`;
      chatbotMessages.appendChild(messageDiv);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
      const userMessage = chatbotInput.value.trim();
      if (!userMessage) return;

      addMessage(userMessage, true);
      chatbotInput.value = '';

      setTimeout(() => {
        let botResponse = translations.fr['chatbot-welcome'];
        const userMessageLower = userMessage.toLowerCase();

        for (const response of botResponses) {
          if (response.keywords.some(keyword => userMessageLower.includes(keyword))) {
            botResponse = typeof response.response === 'function' ? response.response() : response.response;
            break;
          }
        }

        addMessage(botResponse);
      }, 1000);
    }
  }

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Scroll Animations
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  newsCards.forEach(card => {
    observer.observe(card);
  });

  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
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
  }
});