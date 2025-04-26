<template>
  <div>
    <section class="contact-header">
      <div class="container">
        <h1 class="contact-title">Contact</h1>
        <p class="contact-subtitle">Nous sommes à votre écoute pour toute question ou demande</p>
      </div>
    </section>
    
    <section class="contact-content section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2 class="info-title">Nos coordonnées</h2>
            
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div class="info-content">
                <h3 class="info-subtitle">Adresse</h3>
                <p>Douala, Cameroun</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📱</div>
              <div class="info-content">
                <h3 class="info-subtitle">Téléphone</h3>
                <p>+237 XXX XXX XXX</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">✉️</div>
              <div class="info-content">
                <h3 class="info-subtitle">Email</h3>
                <p>contact@alloriginal.cm</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">⏰</div>
              <div class="info-content">
                <h3 class="info-subtitle">Horaires</h3>
                <p>Lundi - Samedi: 9h00 - 18h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
            
            <div class="whatsapp-contact">
              <h3 class="whatsapp-title">Contactez-nous directement sur WhatsApp</h3>
              <WhatsAppButton />
            </div>
          </div>
          
          <div class="contact-form-container">
            <h2 class="form-title">Envoyez-nous un message</h2>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name" class="form-label">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  class="form-input" 
                  required
                  placeholder="Votre nom complet"
                />
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="form-input" 
                  required
                  placeholder="Votre adresse email"
                />
              </div>
              
              <div class="form-group">
                <label for="phone" class="form-label">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  class="form-input"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  class="form-input" 
                  required
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  class="form-textarea" 
                  required
                  rows="5"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button type="submit" class="form-submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>
              
              <div v-if="formStatus.message" class="form-status" :class="formStatus.type">
                {{ formStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

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
.contact-header {
  background-color: var(--gray-color);
  padding: 3rem 0;
  text-align: center;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.contact-subtitle {
  font-size: 1.125rem;
  color: var(--text-color);
}

.contact-content {
  padding: 4rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.contact-info {
  background-color: var(--light-color);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.info-title, .form-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--secondary-color);
  position: relative;
}

.info-title::after, .form-title::after {
  content: '';
  position: absolute;
  bottom: -0.75rem;
  left: 0;
  width: 4rem;
  height: 3px;
  background-color: var(--primary-color);
}

.info-item {
  display: flex;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.info-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  color: var(--primary-color);
}

.info-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.info-content p {
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.whatsapp-contact {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.whatsapp-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.contact-form-container {
  background-color: var(--light-color);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--secondary-color);
}

.form-input, .form-textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid var(--border-color);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.1);
}

.form-textarea {
  resize: vertical;
}

.form-submit {
  display: inline-block;
  width: 100%;
  padding: 0.875rem 1.5rem;
  background-color: var(--primary-color);
  color: var(--light-color);
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-submit:hover:not(:disabled) {
  background-color: darken(var(--primary-color), 10%);
  transform: translateY(-2px);
}

.form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-status {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 0.375rem;
  text-align: center;
}

.form-status.success {
  background-color: rgba(52, 199, 89, 0.1);
  color: var(--success-color);
  border: 1px solid var(--success-color);
}

.form-status.error {
  background-color: rgba(255, 59, 48, 0.1);
  color: var(--danger-color);
  border: 1px solid var(--danger-color);
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 