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
            <div v-if="errorMessage" class="alert alert-danger text-center mb-4" role="alert">
              {{ errorMessage }}
            </div>
            
            <!-- Message de succès -->
            <div v-if="successMessage" class="alert alert-success text-center mb-4" role="alert">
              {{ successMessage }}
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
import authService from '~/services/auth';

// Router pour la redirection
const router = useRouter();
const route = useRoute();

// États
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const errorMessage = ref('');
const isLoading = ref(false);
const successMessage = ref('');

// Récupérer l'URL de redirection si présente dans les paramètres
const redirectUrl = ref(route.query.redirect || '/admin');

/**
 * Vérifier si l'utilisateur est déjà authentifié
 */
onMounted(() => {
  if (process.client) {
    const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
    
    // Si un token existe déjà, rediriger directement vers le tableau de bord
    if (token) {
      console.log('Token d\'authentification existant détecté, redirection vers le tableau de bord');
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 100);
    }
  }
});

/**
 * Fonction asynchrone pour connecter l'utilisateur
 */
const login = async () => {
  // Réinitialiser les messages d'erreur
  errorMessage.value = null;
  isLoading.value = true;
  
  try {
    console.log('Tentative de connexion avec:', email.value, '******');
    
    // Pas de suppression des tokens existants - ils resteront jusqu'à déconnexion explicite
    
    // Appel à l'API d'authentification
    const response = await authService.login(email.value, password.value, rememberMe.value);
    
    console.log('Connexion réussie:', response);
    console.log('Token stocké dans', rememberMe.value ? 'localStorage' : 'sessionStorage');
    
    // Vérifier que le token est bien présent
    const tokenExists = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
    
    if (!tokenExists) {
      throw new Error('Le token n\'a pas été stocké correctement');
    }
    
    // Afficher un message de succès
    successMessage.value = 'Connexion réussie! Redirection en cours...';
    
    // Simuler un délai pour une meilleure expérience utilisateur
    setTimeout(() => {
      isLoading.value = false;
      // Rediriger vers le tableau de bord admin ou l'URL spécifiée dans le paramètre redirect
      const targetUrl = redirectUrl.value || '/admin';
      console.log(`Redirection vers ${targetUrl}...`);
      router.push(targetUrl);
    }, 500);
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    isLoading.value = false;
    
    // Gérer les différents types d'erreur
    if (error.response && error.response.status === 401) {
      errorMessage.value = 'Email ou mot de passe incorrect';
    } else if (error.response && error.response.data && error.response.data.detail) {
      errorMessage.value = error.response.data.detail;
    } else {
      errorMessage.value = 'Erreur lors de la connexion au backend. Vérifiez que le serveur Django est en cours d\'exécution sur le port 8001.';
    }
    console.error('Erreur de connexion:', error);
  }
};

// Mot de passe oublié
const forgotPassword = () => {
  alert('Un email de réinitialisation a été envoyé à votre adresse email (fonctionnalité simulée).');
};

onMounted(() => {
  // Forcer la déconnexion à chaque accès à la page de login
  // Cela garantit que l'utilisateur doit toujours s'authentifier
  // même s'il a déjà un token valide
  authService.forceLogout();
  
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
