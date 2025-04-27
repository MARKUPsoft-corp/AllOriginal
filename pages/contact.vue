<template>
  <div>
    <section class="contact-header py-4 position-relative overflow-hidden">
      <div id="particles-contact" class="particles-container"></div>
      <div class="container py-4 text-center position-relative">
        <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect" data-aos="fade-down">Contact</span>
        <h1 class="display-4 fw-bold mb-3 text-with-glow" data-aos="fade-up">Contactez-nous</h1>
        <div class="separator-line mx-auto mb-4 glow-line" data-aos="fade-up" data-aos-delay="100"></div>
        <p class="lead col-lg-8 mx-auto opacity-75" data-aos="fade-up" data-aos-delay="200">Nous sommes à votre écoute pour toute question ou demande concernant nos produits et services</p>
      </div>
      <div class="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path fill="#ffffff" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <section class="contact-content py-3 section-styled position-relative overflow-hidden">
      <div id="particles-contact-body" class="particles-container"></div>
      <!-- Formes décoratives -->
      <div class="decorative-shape shape-1"></div>
      <div class="decorative-shape shape-2"></div>
      <div class="container py-4 position-relative">
        <div class="row g-4">
          <div class="col-lg-5 mb-4 mb-lg-0" data-aos="fade-right">
            <div class="contact-info card border-0 rounded-4 shadow h-100">
              <div class="card-body p-4 p-lg-5">
                <h2 class="card-title fw-bold mb-4 position-relative">Nos coordonnées
                  <span class="title-underline"></span>
                </h2>
                
                <div class="info-item d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay="100">
                  <div class="info-icon-wrapper me-3">
                    <i class="bi bi-geo-alt info-icon"></i>
                  </div>
                  <div class="info-content">
                    <h3 class="info-subtitle fs-5 fw-semibold mb-2">Adresse</h3>
                    <p class="text-muted mb-0">Douala, Cameroun</p>
                  </div>
                </div>
                
                <div class="info-item d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay="200">
                  <div class="info-icon-wrapper me-3">
                    <i class="bi bi-phone info-icon"></i>
                  </div>
                  <div class="info-content">
                    <h3 class="info-subtitle fs-5 fw-semibold mb-2">Téléphone</h3>
                    <p class="text-muted mb-0">+237 XXX XXX XXX</p>
                  </div>
                </div>
                
                <div class="info-item d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div class="info-icon-wrapper me-3">
                    <i class="bi bi-envelope info-icon"></i>
                  </div>
                  <div class="info-content">
                    <h3 class="info-subtitle fs-5 fw-semibold mb-2">Email</h3>
                    <p class="text-muted mb-0">contact@alloriginal.cm</p>
                  </div>
                </div>
                
                <div class="info-item d-flex align-items-start" data-aos="fade-up" data-aos-delay="400">
                  <div class="info-icon-wrapper me-3">
                    <i class="bi bi-clock info-icon"></i>
                  </div>
                  <div class="info-content">
                    <h3 class="info-subtitle fs-5 fw-semibold mb-2">Horaires</h3>
                    <p class="text-muted mb-0">Lundi - Samedi: 9h00 - 18h00</p>
                    <p class="text-muted mb-0">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-7" data-aos="fade-left">
            <div class="contact-form-container card border-0 rounded-4 shadow">
              <div class="card-body p-4 p-lg-5">
                <h2 class="card-title fw-bold mb-4 position-relative">Envoyez-nous un message
                  <span class="title-underline"></span>
                </h2>
                
                <form class="contact-form" @submit.prevent="submitForm">
                  <div class="row g-4">
                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                      <div class="form-floating mb-md-0">
                        <input 
                          type="text" 
                          id="name" 
                          v-model="form.name" 
                          class="form-control" 
                          required
                          placeholder="Votre nom complet"
                        />
                        <label for="name" class="form-label">Nom complet</label>
                      </div>
                    </div>
                    
                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                      <div class="form-floating mb-md-0">
                        <input 
                          type="email" 
                          id="email" 
                          v-model="form.email" 
                          class="form-control" 
                          required
                          placeholder="Votre adresse email"
                        />
                        <label for="email" class="form-label">Email</label>
                      </div>
                    </div>
                    
                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                      <div class="form-floating mb-md-0">
                        <input 
                          type="tel" 
                          id="phone" 
                          v-model="form.phone" 
                          class="form-control"
                          placeholder="Votre numéro de téléphone"
                        />
                        <label for="phone" class="form-label">Téléphone</label>
                      </div>
                    </div>
                    
                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                      <div class="form-floating mb-md-0">
                        <input 
                          type="text" 
                          id="subject" 
                          v-model="form.subject" 
                          class="form-control" 
                          required
                          placeholder="Sujet de votre message"
                        />
                        <label for="subject" class="form-label">Sujet</label>
                      </div>
                    </div>
                    
                    <div class="col-12" data-aos="fade-up" data-aos-delay="500">
                      <div class="form-floating">
                        <textarea 
                          id="message" 
                          v-model="form.message" 
                          class="form-control" 
                          required
                          style="height: 150px"
                          placeholder="Votre message"
                        ></textarea>
                        <label for="message" class="form-label">Message</label>
                      </div>
                    </div>
                    
                    <div class="col-12 mt-3" data-aos="fade-up" data-aos-delay="600">
                      <button type="submit" class="form-submit btn btn-gradient w-100 py-3" :disabled="isSubmitting">
                        <span class="d-flex align-items-center justify-content-center">
                          <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
                        </span>
                      </button>
                    </div>
                  </div>
                  
                  <div v-if="formStatus.message" 
                       class="alert mt-4" 
                       :class="formStatus.type === 'success' ? 'alert-success' : 'alert-danger'"
                       role="alert"
                       data-aos="fade-up">
                    {{ formStatus.message }}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// SEO
definePageMeta({
  title: 'Contact - All Original',
  description: 'Contactez notre équipe All Original pour toute question concernant nos produits ou services. Basés à Douala, Cameroun.'
});

// État du formulaire
const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formStatus = reactive({
  type: '',
  message: ''
});

// Initialisation des particules
onMounted(() => {
  if (typeof window !== 'undefined' && window.particlesJS) {
    // Particules pour l'en-tête
    window.particlesJS('particles-contact', {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#ff8c00" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, color: "#ff8c00", opacity: 0.2 },
        move: { enable: true, speed: 1, direction: "top", random: false, straight: false, out_mode: "out" }
      }
    });
    
    // Particules pour le corps
    window.particlesJS('particles-contact-body', {
      particles: {
        number: { value: 30, density: { enable: true, value_area: 1000 } },
        color: { value: "#0d6efd" },
        opacity: { value: 0.2, random: true },
        size: { value: 2, random: true },
        line_linked: { enable: true, color: "#0d6efd", opacity: 0.1 },
        move: { enable: true, speed: 0.8, direction: "none", random: true, straight: false, out_mode: "out" }
      }
    });
    
    // Initialiser AOS si disponible
    if (window.AOS) {
      window.AOS.refresh();
    }
  }
});

// Soumission du formulaire
const submitForm = async () => {
  isSubmitting.value = true;
  formStatus.message = '';
  
  try {
    // Simuler un appel API (sera remplacé par le backend Django)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Succès (à remplacer par un vrai appel API)
    formStatus.type = 'success';
    formStatus.message = 'Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.';
    
    // Réinitialiser le formulaire
    Object.keys(form).forEach(key => {
      form[key] = '';
    });
    
  } catch (error) {
    // Erreur
    formStatus.type = 'error';
    formStatus.message = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.';
    console.error('Erreur lors de l\'envoi du formulaire:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Base styles and animations */
.contact-header {
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.5;
}

.wave-shape-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(0deg);
  z-index: 1;
}

/* Text effects */
.text-with-glow {
  text-shadow: 0 0 10px rgba(255, 140, 0, 0.2);
  position: relative;
}

.separator-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--bs-orange) 0%, var(--bs-primary) 100%);
  border-radius: 2px;
  position: relative;
}

.separator-line::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 0;
  width: 20px;
  height: 8px;
  background-color: var(--bs-orange);
  border-radius: 4px;
  animation: underlinePulse 3s infinite;
}

@keyframes underlinePulse {
  0%, 100% { left: 0; }
  50% { left: calc(100% - 20px); }
}

/* Badge effects */
.shine-effect {
  position: relative;
  overflow: hidden;
}

.shine-effect::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right, 
    rgba(255, 255, 255, 0) 0%, 
    rgba(255, 255, 255, 0.3) 50%, 
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(30deg); }
  100% { transform: translateX(100%) rotate(30deg); }
}

/* Decorative shapes */
.decorative-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  z-index: 0;
  opacity: 0.1;
  animation: floatShape 15s infinite alternate ease-in-out;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at center, var(--bs-orange) 0%, transparent 70%);
  top: 10%;
  left: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle at center, var(--bs-primary) 0%, transparent 70%);
  bottom: 20%;
  right: -50px;
  animation-delay: 2s;
}

@keyframes floatShape {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.07;
  }
  50% {
    transform: translate(20px, -20px) scale(1.1);
    opacity: 0.15;
  }
  100% {
    transform: translate(-20px, 20px) scale(0.95);
    opacity: 0.07;
  }
}

/* Contact form styling */
.contact-form-container, .contact-info {
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid var(--bs-orange) !important;
  background: linear-gradient(to right, rgba(var(--bs-orange-rgb), 0.03), transparent 50%) !important;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08) !important;
}

.contact-form-container {
  border-left-color: var(--bs-primary) !important;
  background: linear-gradient(to right, rgba(var(--bs-primary-rgb), 0.03), transparent 50%) !important;
}

.contact-form-container:hover, .contact-info:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12) !important;
}

.contact-info::before, .contact-form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, rgba(var(--bs-orange-rgb), 0.05), transparent);
  border-radius: inherit;
  z-index: 0;
  pointer-events: none;
}

.contact-form-container::before {
  background: linear-gradient(to bottom right, rgba(var(--bs-primary-rgb), 0.05), transparent);
}

.title-underline {
  position: absolute;
  bottom: -12px;
  left: 0;
  height: 3px;
  width: 60px;
  background: linear-gradient(90deg, var(--bs-orange) 0%, var(--bs-primary) 100%);
  border-radius: 3px;
}

.info-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--bs-orange-rgb), 0.1);
  color: var(--bs-orange);
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(var(--bs-orange-rgb), 0.1);
}

.info-icon {
  font-size: 1.25rem;
}

.info-item:hover .info-icon-wrapper {
  background: var(--bs-orange);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(var(--bs-orange-rgb), 0.2);
}

/* Form controls */
.form-control {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
}

.form-control:focus {
  box-shadow: 0 0 0 3px rgba(var(--bs-orange-rgb), 0.1);
  border-color: var(--bs-orange);
  background-color: white;
}

.form-floating > .form-control:focus ~ label {
  color: var(--bs-orange);
}

/* Submit button */
.btn-gradient {
  background: linear-gradient(135deg, var(--bs-orange) 0%, #f17c0e 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(var(--bs-orange-rgb), 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
  transform: skewX(-25deg);
  transition: all 0.75s ease;
}

.btn-gradient:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(var(--bs-orange-rgb), 0.3);
  color: white;
}

.btn-gradient:hover::before {
  left: 100%;
}

.btn-gradient:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Alert styles */
.alert {
  border-radius: 10px;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.alert-success {
  background-color: rgba(25, 135, 84, 0.1);
  border-color: rgba(25, 135, 84, 0.2);
  color: #198754;
}

.alert-danger {
  background-color: rgba(220, 53, 69, 0.1);
  border-color: rgba(220, 53, 69, 0.2);
  color: #dc3545;
}

/* Responsive styles */
@media (max-width: 991px) {
  .title-underline {
    width: 50px;
  }
  
  .contact-form-container, .contact-info {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 767px) {
  .contact-header {
    padding: 3rem 0;
  }
  
  .info-icon-wrapper {
    width: 40px;
    height: 40px;
  }
  
  .info-icon {
    font-size: 1rem;
  }
}
</style> 