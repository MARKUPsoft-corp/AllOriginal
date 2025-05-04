<template>
  <div class="login-page position-relative">
    <!-- Fond avec particules -->
    <div id="particles-admin-login" class="particles-container"></div>
    
    <!-- Section Formulaire de connexion -->
    <section class="login-form-section py-5 position-relative overflow-hidden d-flex align-items-center min-vh-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="admin-card rounded-4 shadow-sm p-4 p-lg-5">
              <div class="text-center mb-4">
                <div class="brand-logo mb-4">
                  <i class="bi bi-phone text-orange fs-1"></i>
                  <span class="brand-text fw-bold fs-3 ms-2">All <span class="text-orange">Original</span></span>
                </div>
                <h3 class="mb-3 fs-4 text-gradient">Connexion Administrateur</h3>
                <p class="text-muted">Entrez vos identifiants pour accéder au tableau de bord</p>
              </div>
              
              <form @submit.prevent="login">
                <div class="mb-4">
                  <div class="form-floating custom-floating">
                    <input 
                      type="email" 
                      class="form-control custom-form-control" 
                      id="loginEmail" 
                      placeholder="Email"
                      v-model="email"
                      required
                    >
                    <label for="loginEmail">Email</label>
                  </div>
                </div>
                
                <div class="mb-4">
                  <div class="form-floating custom-floating">
                    <input 
                      type="password" 
                      class="form-control custom-form-control" 
                      id="loginPassword" 
                      placeholder="Mot de passe"
                      v-model="password"
                      required
                    >
                    <label for="loginPassword">Mot de passe</label>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="rememberMe" v-model="rememberMe">
                    <label class="form-check-label" for="rememberMe">
                      Se souvenir de moi
                    </label>
                  </div>
                  <a href="#" class="text-orange text-decoration-none" @click.prevent="forgotPassword">
                    Mot de passe oublié ?
                  </a>
                </div>
                
                <button type="submit" class="btn btn-primary w-100 py-3 shine-effect btn-animated">
                  <i class="bi bi-box-arrow-in-right me-2"></i> Se connecter
                </button>
                
                <div class="text-center mt-4">
                  <div class="border-top pt-3">
                    <p class="text-muted small">
                      &copy; {{ new Date().getFullYear() }} All Original - Tous droits réservés
                    </p>
                  </div>
                </div>
              </form>
            </div>
            
            <!-- Message d'erreur -->
            <div v-if="errorMessage" class="alert alert-danger mt-4 text-center rounded-3 animate__animated animate__fadeIn">
              <i class="bi bi-exclamation-triangle-fill me-2"></i> {{ errorMessage }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from '#app';
import '~/assets/css/admin-styles.css';

// Router pour la redirection
const router = useRouter();

// États
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const errorMessage = ref('');

// Méthode de connexion
const login = () => {
  // Réinitialiser le message d'erreur
  errorMessage.value = '';
  
  // Simuler une vérification d'identifiants
  // Dans un vrai backend, vous feriez une requête API ici
  if (email.value === 'admin@alloriginal.com' && password.value === 'admin123') {
    // Simuler un délai de chargement
    setTimeout(() => {
      // Stockage du token (simulé)
      if (rememberMe.value) {
        localStorage.setItem('admin_token', 'fake_token_for_demo');
      } else {
        sessionStorage.setItem('admin_token', 'fake_token_for_demo');
      }
      
      // Rediriger vers le tableau de bord de manière simple
      console.log('Redirection vers le tableau de bord...');
      setTimeout(() => {
        window.location.href = '/admin';
      }, 100);
    }, 800);
  } else {
    // Afficher un message d'erreur
    errorMessage.value = 'Email ou mot de passe incorrect. Veuillez réessayer.';
  }
};

// Mot de passe oublié
const forgotPassword = () => {
  alert('Un email de réinitialisation a été envoyé à votre adresse email (fonctionnalité simulée).');
};

onMounted(() => {
  // Supprimer les tokens existants pour forcer la connexion
  localStorage.removeItem('admin_token');
  sessionStorage.removeItem('admin_token');
  
  // Initialiser particles.js avec beaucoup plus de particules
  if (window.particlesJS) {
    window.particlesJS('particles-admin-login', {
      particles: {
        number: { value: 150, density: { enable: true, value_area: 800 } },
        color: { value: ['#FF8C00', '#FFA500', '#FFD700', '#FF6B6B', '#FF9E80', '#FFB347', '#FF7F50'] },
        shape: { type: ['circle', 'triangle', 'polygon', 'star'], polygon: { nb_sides: 6 } },
        opacity: { value: 0.3, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 8, random: true, anim: { enable: true, speed: 2, size_min: 2, sync: false } },
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

/* Login page */
.login-page {
  background: linear-gradient(145deg, rgba(255, 140, 0, 0.05) 0%, rgba(255, 165, 0, 0.1) 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.login-form-section {
  z-index: 2;
  flex: 1;
}

.admin-card {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.admin-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
  transform: translateY(-5px);
}

/* Animation bouton */
@keyframes pulse-border {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--bs-primary-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0);
  }
}

.btn-primary:focus {
  animation: pulse-border 1.5s infinite;
}
</style>
