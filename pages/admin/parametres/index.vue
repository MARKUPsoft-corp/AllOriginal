<template>
  <div>
    <!-- Section Hero Admin Paramètres avec Particles -->
    <section class="py-5 bg-white position-relative admin-hero-section-sm overflow-hidden">
      <div id="particles-admin-settings" class="particles-container"></div>
      <div class="container py-4 position-relative">
        <div class="row">
          <div class="col-lg-8" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect">Paramètres</span>
            <h1 class="display-5 fw-bold mb-3">Configuration <span class="text-gradient">Générale</span></h1>
            <p class="lead mb-4 opacity-75">
              Configurez les paramètres de votre boutique
            </p>
          </div>
          <div class="col-lg-4 d-flex justify-content-lg-end align-items-center mt-4 mt-lg-0" data-aos="fade-left">
            <button type="button" class="btn btn-primary btn-lg px-4 py-3 shadow-sm shine-effect btn-animated" @click="saveSettings">
              <i class="bi bi-save me-2"></i> Enregistrer
            </button>
          </div>
        </div>
      </div>
      <div class="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#f8f9fa" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,26.7C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <!-- Section Formulaire Paramètres -->
    <section class="settings-form-section py-5 section-styled position-relative overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="admin-card rounded-4 shadow-sm p-4 p-lg-5">
              <!-- Tabs de navigation -->
              <ul class="nav nav-tabs settings-tabs mb-4" id="settingsTabs" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="true">
                    <i class="bi bi-shop me-2"></i> <span class="btn-animated">Boutique</span>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                    <i class="bi bi-telephone me-2"></i> <span class="btn-animated">Contact</span>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="social-tab" data-bs-toggle="tab" data-bs-target="#social" type="button" role="tab" aria-controls="social" aria-selected="false">
                    <i class="bi bi-share me-2"></i> <span class="btn-animated">Réseaux sociaux</span>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="whatsapp-tab" data-bs-toggle="tab" data-bs-target="#whatsapp" type="button" role="tab" aria-controls="whatsapp" aria-selected="false">
                    <i class="bi bi-whatsapp me-2"></i> <span class="btn-animated">WhatsApp</span>
                  </button>
                </li>
              </ul>
              
              <!-- Contenu des tabs -->
              <div class="tab-content" id="settingsTabsContent">
                <!-- Tab Informations Générales -->
                <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="text" 
                          class="form-control" 
                          id="shopName" 
                          placeholder="Nom de la boutique" 
                          v-model="settings.general.shopName"
                        >
                        <label for="shopName">Nom de la boutique*</label>
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="text" 
                          class="form-control" 
                          id="shopTagline" 
                          placeholder="Slogan" 
                          v-model="settings.general.shopTagline"
                        >
                        <label for="shopTagline">Slogan</label>
                      </div>
                    </div>
                    
                    <div class="col-md-12">
                      <div class="form-floating">
                        <textarea 
                          class="form-control" 
                          id="shopDescription" 
                          placeholder="Description de la boutique" 
                          style="height: 100px"
                          v-model="settings.general.shopDescription"
                        ></textarea>
                        <label for="shopDescription">Description de la boutique*</label>
                      </div>
                      <small class="text-muted">Cette description sera utilisée dans les méta-données pour le SEO</small>
                    </div>
                    
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="text" 
                          class="form-control" 
                          id="shopCurrency" 
                          placeholder="Devise" 
                          v-model="settings.general.currency"
                        >
                        <label for="shopCurrency">Devise*</label>
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="text" 
                          class="form-control" 
                          id="shopCountry" 
                          placeholder="Pays" 
                          v-model="settings.general.country"
                        >
                        <label for="shopCountry">Pays*</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Tab Contact -->
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="email" 
                          class="form-control" 
                          id="contactEmail" 
                          placeholder="Email" 
                          v-model="settings.contact.email"
                        >
                        <label for="contactEmail">Email de contact*</label>
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="tel" 
                          class="form-control" 
                          id="contactPhone" 
                          placeholder="Téléphone" 
                          v-model="settings.contact.phone"
                        >
                        <label for="contactPhone">Téléphone*</label>
                      </div>
                    </div>
                    
                    <div class="col-md-12">
                      <div class="form-floating">
                        <input 
                          type="text" 
                          class="form-control" 
                          id="contactAddress" 
                          placeholder="Adresse" 
                          v-model="settings.contact.address"
                        >
                        <label for="contactAddress">Adresse*</label>
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="text" 
                          class="form-control" 
                          id="contactCity" 
                          placeholder="Ville" 
                          v-model="settings.contact.city"
                        >
                        <label for="contactCity">Ville*</label>
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="text" 
                          class="form-control" 
                          id="contactHours" 
                          placeholder="Horaires d'ouverture" 
                          v-model="settings.contact.hours"
                        >
                        <label for="contactHours">Horaires d'ouverture</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Tab Réseaux Sociaux -->
                <div class="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-facebook"></i></span>
                        <div class="form-floating">
                          <input 
                            type="text" 
                            class="form-control" 
                            id="socialFacebook" 
                            placeholder="Facebook" 
                            v-model="settings.social.facebook"
                          >
                          <label for="socialFacebook">Facebook</label>
                        </div>
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                      <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-instagram"></i></span>
                        <div class="form-floating">
                          <input 
                            type="text" 
                            class="form-control" 
                            id="socialInstagram" 
                            placeholder="Instagram" 
                            v-model="settings.social.instagram"
                          >
                          <label for="socialInstagram">Instagram</label>
                        </div>
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                      <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-twitter"></i></span>
                        <div class="form-floating">
                          <input 
                            type="text" 
                            class="form-control" 
                            id="socialTwitter" 
                            placeholder="Twitter" 
                            v-model="settings.social.twitter"
                          >
                          <label for="socialTwitter">Twitter</label>
                        </div>
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                      <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-linkedin"></i></span>
                        <div class="form-floating">
                          <input 
                            type="text" 
                            class="form-control" 
                            id="socialLinkedin" 
                            placeholder="LinkedIn" 
                            v-model="settings.social.linkedin"
                          >
                          <label for="socialLinkedin">LinkedIn</label>
                        </div>
                      </div>
                    </div>
                    
                    <div class="col-md-12">
                      <small class="text-muted">Indiquez les liens complets de vos profils sociaux (ex: https://facebook.com/alloriginal)</small>
                    </div>
                  </div>
                </div>
                
                <!-- Tab WhatsApp -->
                <div class="tab-pane fade" id="whatsapp" role="tabpanel" aria-labelledby="whatsapp-tab">
                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input 
                          type="tel" 
                          class="form-control" 
                          id="whatsappNumber" 
                          placeholder="Numéro WhatsApp" 
                          v-model="settings.whatsapp.number"
                        >
                        <label for="whatsappNumber">Numéro WhatsApp* (ex: 237600000000)</label>
                      </div>
                      <small class="text-muted">Numéro international sans le '+', avec l'indicatif pays (237 pour le Cameroun)</small>
                    </div>
                    
                    <div class="col-md-6">
                      <div class="form-check form-switch py-3">
                        <input 
                          class="form-check-input" 
                          type="checkbox" 
                          id="whatsappEnabled" 
                          v-model="settings.whatsapp.enabled"
                        >
                        <label class="form-check-label ms-2" for="whatsappEnabled">Activer la commande par WhatsApp</label>
                      </div>
                    </div>
                    
                    <div class="col-md-12">
                      <div class="form-floating">
                        <textarea 
                          class="form-control" 
                          id="whatsappMessage" 
                          placeholder="Message WhatsApp par défaut" 
                          style="height: 100px"
                          v-model="settings.whatsapp.message"
                        ></textarea>
                        <label for="whatsappMessage">Message par défaut*</label>
                      </div>
                      <small class="text-muted">Utilisez {produit} et {prix} comme variables qui seront remplacées automatiquement</small>
                    </div>
                    
                    <div class="col-md-12 mt-4">
                      <div class="preview-container p-3 border rounded-3">
                        <h6 class="mb-3">Aperçu du message</h6>
                        <div class="preview-message p-3 bg-light rounded">
                          {{ getWhatsAppPreviewMessage() }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="d-flex justify-content-end mt-4 pt-3 border-top">
                <button class="btn btn-primary btn-lg px-5 shine-effect btn-animated" @click="saveSettings">
                  <i class="bi bi-save me-2"></i> Enregistrer les paramètres
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import '~/assets/css/admin-styles.css';

// États des paramètres
const settings = reactive({
  general: {
    shopName: 'All Original',
    shopTagline: 'Boutique High-Tech Premium au Cameroun',
    shopDescription: 'Découvrez notre sélection complète de produits technologiques haut de gamme. Téléphones, ordinateurs et accessoires high-tech disponibles à Douala, Cameroun.',
    currency: 'FCFA',
    country: 'Cameroun'
  },
  contact: {
    email: 'contact@alloriginal.cm',
    phone: '+237 600 000 000',
    address: 'Avenue de la Liberté',
    city: 'Douala',
    hours: 'Lun-Sam: 9h-18h'
  },
  social: {
    facebook: 'https://facebook.com/alloriginal',
    instagram: 'https://instagram.com/alloriginal.cm',
    twitter: '',
    linkedin: ''
  },
  whatsapp: {
    number: '237600000000',
    enabled: true,
    message: 'Bonjour, je suis intéressé par le produit {produit} à {prix} FCFA. Est-il disponible ?'
  }
});

// Générer l'aperçu du message WhatsApp
const getWhatsAppPreviewMessage = () => {
  return settings.whatsapp.message
    .replace('{produit}', 'iPhone 14 Pro Max')
    .replace('{prix}', '1 250 000');
};

// Sauvegarder les paramètres
const saveSettings = () => {
  // Validation simple
  if (!settings.general.shopName || !settings.contact.email || !settings.contact.phone) {
    alert('Veuillez remplir tous les champs obligatoires avant de sauvegarder.');
    return;
  }
  
  // Dans un vrai backend, on ferait un appel API ici
  console.log('Paramètres à sauvegarder:', settings);
  
  // Notification de succès
  alert('Paramètres enregistrés avec succès !');
};

onMounted(() => {
  // Initialiser particles.js
  if (window.particlesJS) {
    window.particlesJS('particles-admin-settings', {
      particles: {
        number: { value: 65, density: { enable: true, value_area: 800 } },
        color: { value: ['#FF8C00', '#FFA500', '#FFD700', '#FF6B6B', '#FF9E80'] },
        shape: { type: ['circle', 'triangle', 'polygon'], polygon: { nb_sides: 6 } },
        opacity: { value: 0.22, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 6, random: true, anim: { enable: true, speed: 2, size_min: 2, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#FF8C00', opacity: 0.25, width: 1.2 },
        move: { enable: true, speed: 2.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 0.3 } } }
      },
      retina_detect: true
    });
  }
  
  // Initialiser AOS
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true
    });
  }
});
</script>

<style scoped>
/* Hero section moins haute */
.admin-hero-section-sm {
  padding-top: 100px;
  padding-bottom: 70px;
  position: relative;
  min-height: 30vh;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.5) 0%, rgba(248, 249, 250, 0.5) 100%);
}

.wave-shape-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  line-height: 0;
  direction: ltr;
}

.wave-shape-bottom svg {
  display: block;
  width: 100%;
  height: 40px;
}

/* Admin card */
.admin-card {
  background-color: #fff;
  transition: all 0.3s ease;
}

/* Tabs personnalisés */
.settings-tabs {
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 1.5rem;
}

.settings-tabs .nav-link {
  border: none;
  padding: 0.75rem 1.25rem;
  margin-right: 0.5rem;
  font-weight: 500;
  color: var(--bs-secondary);
  border-radius: 0.5rem 0.5rem 0 0;
  transition: all 0.3s ease;
}

.settings-tabs .nav-link:hover:not(.active) {
  background-color: rgba(var(--bs-primary-rgb), 0.05);
  color: var(--bs-primary);
}

.settings-tabs .nav-link.active {
  color: var(--bs-primary);
  background-color: transparent;
  border-bottom: 3px solid var(--bs-primary);
}

/* Form controls */
.form-control, .form-select, .form-check-input {
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.form-floating > .form-control, 
.form-floating > .form-select {
  border-radius: 0.5rem;
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}

.form-floating > label {
  padding: 1rem 0.75rem;
}

.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.form-control:focus, .form-select:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.15);
}

.form-check-input:checked {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.form-floating > textarea.form-control {
  height: 100px;
}

/* Input group avec icône */
.input-group-text {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.preview-message {
  font-size: 0.9rem;
  color: var(--bs-secondary);
}

/* Animations et effets */
.shine-effect {
  position: relative;
  overflow: hidden;
}

.shine-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 70%);
  transition: all 1s;
}

.shine-effect:hover::before {
  left: 100%;
}

.section-styled {
  position: relative;
  background-color: var(--bs-light);
}

/* Responsive */
@media (max-width: 768px) {
  .admin-hero-section-sm {
    padding-top: 80px;
    padding-bottom: 50px;
  }
  
  .settings-tabs .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
  }
}
</style>
