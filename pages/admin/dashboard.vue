<template>
<!-- Utiliser le layout sécurisé qui vérifie l'authentification -->
<NuxtLayout name="admin-secure">
  <div>
    <!-- Section Hero Admin avec Particles -->
    <section class="py-5 bg-white position-relative admin-hero-section overflow-hidden">
      <div id="particles-admin" class="particles-container"></div>
      <div class="container py-5 position-relative">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect">Administration</span>
            <h1 class="display-4 fw-bold mb-3">Tableau de <span class="text-gradient">Bord</span></h1>
            <p class="lead mb-4 opacity-75">
              Gérez votre boutique All Original - Produits, catégories et plus
            </p>
            
            <!-- Bouton de déconnexion -->
            <button @click="logout" class="btn btn-danger mt-2 btn-lg">
              <i class="bi bi-box-arrow-right me-2"></i> Déconnexion
            </button>
          </div>
        </div>
        
        <!-- Statistiques rapides -->
        <div class="row mt-5 g-4">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="stat-card p-4 rounded-4 shadow-sm shine-effect-container h-100">
              <div class="d-flex align-items-center">
                <div class="stat-icon-container me-3 tilt-effect">
                  <i class="bi bi-box-seam text-orange fs-1"></i>
                </div>
                <div>
                  <h3 class="fs-5 mb-0">{{ productCount }}</h3>
                  <p class="text-muted mb-0">Produits</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="stat-card p-4 rounded-4 shadow-sm shine-effect-container h-100">
              <div class="d-flex align-items-center">
                <div class="stat-icon-container me-3 tilt-effect">
                  <i class="bi bi-tag text-orange fs-1"></i>
                </div>
                <div class="stat-text">
                  <div class="stat-title h5 mb-1">Catégories</div>
                  <div class="stat-value display-6 fw-bold text-orange">{{ categoryCount }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div class="stat-card p-4 rounded-4 shadow-sm shine-effect-container h-100">
              <div class="d-flex align-items-center">
                <div class="stat-icon-container me-3 tilt-effect">
                  <i class="bi bi-check-circle text-orange fs-1"></i>
                </div>
                <div>
                  <h3 class="fs-5 mb-0">{{ inStockCount }}</h3>
                  <p class="text-muted mb-0">Produits en stock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path fill="#f8f9fa" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <!-- Section des actions principales -->
    <section class="admin-actions-section py-5 section-styled position-relative overflow-hidden">
      <div class="container">
        <div class="row g-4">
          <!-- Carte Gestion des Produits -->
          <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="admin-card rounded-4 shadow-sm p-4 h-100 shine-effect-container position-relative overflow-hidden">
              <div class="admin-card-icon tilt-effect">
                <i class="bi bi-box-seam fs-1 text-orange"></i>
              </div>
              <h3 class="fs-4 mt-4 mb-3 text-gradient">Gestion des Produits</h3>
              <p class="text-muted mb-4">Ajoutez, modifiez ou supprimez les produits de votre catalogue.</p>
              <div class="d-flex justify-content-between">
                <NuxtLink to="/admin/produits" class="btn btn-primary shine-effect btn-animated">
                  <i class="bi bi-pencil-square me-2"></i> Gérer
                </NuxtLink>
                <NuxtLink to="/admin/produits/ajouter" class="btn btn-outline-primary shine-effect btn-animated">
                  <i class="bi bi-plus-circle me-2"></i> Ajouter
                </NuxtLink>
              </div>
              <div class="admin-card-shine-overlay"></div>
            </div>
          </div>
          
          <!-- Carte Gestion des Catégories -->
          <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="admin-card rounded-4 shadow-sm p-4 h-100 shine-effect-container position-relative overflow-hidden">
              <div class="admin-card-icon tilt-effect">
                <i class="bi bi-tag fs-1 text-orange"></i>
              </div>
              <h3 class="fs-4 mt-4 mb-3 text-gradient">Gestion des Catégories</h3>
              <p class="text-muted mb-4">Organisez vos produits avec des catégories personnalisées.</p>
              <div class="d-flex justify-content-between">
                <NuxtLink to="/admin/categories" class="btn btn-primary shine-effect btn-animated">
                  <i class="bi bi-pencil-square me-2"></i> Gérer
                </NuxtLink>
                <NuxtLink to="/admin/categories" class="btn btn-outline-primary shine-effect btn-animated">
                  <i class="bi bi-plus-circle me-2"></i> Ajouter
                </NuxtLink>
              </div>
              <div class="admin-card-shine-overlay"></div>
            </div>
          </div>
          
          <!-- Carte Paramètres du Site -->
          <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="admin-card rounded-4 shadow-sm p-4 h-100 shine-effect-container position-relative overflow-hidden">
              <div class="admin-card-icon tilt-effect">
                <i class="bi bi-gear fs-1 text-orange"></i>
              </div>
              <h3 class="fs-4 mt-4 mb-3 text-gradient">Paramètres du Site</h3>
              <p class="text-muted mb-4">Configurez les informations générales de votre boutique.</p>
              <div class="d-flex justify-content-between">
                <NuxtLink to="/admin/parametres" class="btn btn-primary shine-effect btn-animated">
                  <i class="bi bi-sliders me-2"></i> Configurer
                </NuxtLink>
                <NuxtLink to="/catalogue" target="_blank" class="btn btn-outline-primary shine-effect btn-animated">
                  <i class="bi bi-eye me-2"></i> Voir le site
                </NuxtLink>
              </div>
              <div class="admin-card-shine-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Section des activités récentes -->
    <section class="recent-activity-section py-5 section-styled position-relative overflow-hidden">
      <div class="container">
        <div class="row mb-4">
          <div class="col-lg-8" data-aos="fade-right">
            <h2 class="section-title fs-2 mb-1">Activités <span class="text-gradient">Récentes</span></h2>
            <p class="text-muted">Les dernières modifications apportées à votre boutique</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-12">
            <div class="recent-activity-card admin-card p-4 rounded-4 shadow-sm">
              <div class="timeline-item" v-for="(activity, index) in recentActivities" :key="index">
                <div class="timeline-icon" :class="activity.type">
                  <i :class="'bi ' + activity.icon"></i>
                </div>
                <div class="timeline-content">
                  <h5 class="fs-6 mb-1">{{ activity.title }}</h5>
                  <p class="text-muted small mb-0">{{ activity.description }}</p>
                  <span class="timeline-date small">{{ activity.date }}</span>
                </div>
              </div>
              
              <div v-if="recentActivities.length === 0" class="text-center p-4">
                <p class="text-muted mb-0">Aucune activité récente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import authService from '~/services/auth';
import '~/assets/css/admin-styles.css';

const router = useRouter();

// Vérification d'authentification explicite au chargement de la page
onMounted(() => {
  if (process.client) {
    // Vérifier la présence d'un token (double sécurité en plus du middleware)
    const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
    if (!token) {
      console.warn('⛔️ SÉCURITÉ: Accès non autorisé au dashboard détecté');
      // Redirection immédiate vers login
      router.push('/admin/login');
    } else {
      console.log('✅ Sécurité: Token valide pour le dashboard');
    }
  }
});

// Fonction de déconnexion
const logout = async () => {
  try {
    // Suppression du token d'authentification via le service auth
    await authService.logout();
    console.log('Déconnecté avec succès');
    
    // Redirection vers la page de login
    router.push('/admin/login');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
    // Même en cas d'erreur, forcer la déconnexion
    authService.forceLogout();
    router.push('/admin/login');
  }
};


// Données simulées pour la démo - à remplacer par des données réelles
const productCount = ref(0);
const categoryCount = ref(0);
const inStockCount = ref(0);
const recentActivities = ref([]);

// Charger les données
const loadData = async () => {
  try {
    // Charger les produits via le service API
    try {
      // Importer les services nécessaires
      const productsService = await import('~/services/products').then(m => m.default);
      const categoriesService = await import('~/services/categories').then(m => m.default);
      
      // Récupérer les produits depuis l'API
      const products = await productsService.getAllProducts();
      if (Array.isArray(products)) {
        productCount.value = products.length;
        inStockCount.value = products.filter(p => p.in_stock).length;
      } else {
        console.error('Format de données produits invalide:', products);
        productCount.value = 0;
        inStockCount.value = 0;
      }
      
      // Récupérer les catégories depuis l'API
      const categories = await categoriesService.getAllCategories();
      if (Array.isArray(categories)) {
        categoryCount.value = categories.length;
      } else {
        console.error('Format de données catégories invalide:', categories);
        categoryCount.value = 0;
      }
    } catch (apiError) {
      console.error('Erreur lors de la récupération des données API:', apiError);
      productCount.value = 0;
      inStockCount.value = 0;
      categoryCount.value = 0;
    }
    
    // Simuler des activités récentes
    recentActivities.value = [
      {
        type: 'product',
        icon: 'bi-box-seam',
        title: 'Produit ajouté',
        description: 'iPhone 14 Pro Max a été ajouté au catalogue',
        date: '2 mai 2025'
      },
      {
        type: 'category',
        icon: 'bi-tag',
        title: 'Catégorie modifiée',
        description: 'La catégorie Accessoires a été mise à jour',
        date: '30 avril 2025'
      },
      {
        type: 'settings',
        icon: 'bi-gear',
        title: 'Paramètres modifiés',
        description: 'Numéro WhatsApp mis à jour',
        date: '28 avril 2025'
      }
    ];
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
  }
};

onMounted(() => {
  // Initialiser particles.js pour l'admin (sera configuré dans le plugin)
  if (window.particlesJS) {
    window.particlesJS('particles-admin', {
      particles: {
        number: { value: 65, density: { enable: true, value_area: 800 } },
        color: { value: ['#FF8C00', '#FFA500', '#FFD700', '#FF6B6B', '#FF9E80'] },
        shape: { 
          type: ['circle', 'triangle', 'polygon'],
          polygon: { nb_sides: 6 }
        },
        opacity: { value: 0.22, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 6, random: true, anim: { enable: true, speed: 2, size_min: 2, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#FF8C00', opacity: 0.25, width: 1.2 },
        move: { 
          enable: true, 
          speed: 2.5, 
          direction: 'none', 
          random: true, 
          straight: false, 
          out_mode: 'out', 
          bounce: false,
          attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { 
          onhover: { enable: true, mode: 'bubble' }, 
          onclick: { enable: true, mode: 'push' }, 
          resize: true 
        },
        modes: { 
          grab: { distance: 140, line_linked: { opacity: 0.5 } },
          bubble: { distance: 200, size: 10, duration: 2, opacity: 0.8, speed: 3 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
  
  // Initialiser AOS pour les animations
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true
    });
  }
  
  // Charger les données
  loadData();
});
</script>

<style scoped>
/* Hero section spécifique admin */
.admin-hero-section {
  padding-top: 120px;
  padding-bottom: 100px;
  position: relative;
  min-height: 40vh;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.5) 0%, rgba(248, 249, 250, 0.5) 100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.admin-hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGRjhDMDAiIGZpbGwtb3BhY2l0eT0iLjA1IiBkPSJNMTMgNTFoNzR2MjVIMTN6TTAgMGgxMDB2MTAwSDB6Ii8+PC9nPjwvc3ZnPg==');
  opacity: 0.3;
  z-index: 0;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Stat cards */
.stat-card {
  background-color: #fff;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 16px;
  border: 1px solid rgba(255, 140, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.08);
  border-color: rgba(255, 140, 0, 0.2);
}

.stat-card::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(rgba(255, 140, 0, 0.05), rgba(255, 255, 255, 0.1));
  opacity: 0;
  transition: all 0.5s ease;
}

.stat-card:hover::after {
  opacity: 1;
}

.stat-icon-container {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(var(--bs-primary-rgb), 0.15) 0%, rgba(var(--bs-primary-rgb), 0.08) 100%);
  transition: all 0.3s ease;
  box-shadow: 0 8px 16px -4px rgba(255, 140, 0, 0.1);
}

.stat-card:hover .stat-icon-container {
  transform: scale(1.08) rotate(5deg);
  box-shadow: 0 10px 20px -5px rgba(255, 140, 0, 0.2);
}

/* Admin cards */
.admin-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  border: 1px solid rgba(255, 140, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
}

.admin-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  border-color: rgba(255, 140, 0, 0.15);
}

.admin-card::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--bs-orange) 0%, var(--bs-primary) 100%);
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
  z-index: 10;
}

.admin-card:hover::before {
  transform: scaleX(1);
}

.admin-card::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 0%, rgba(255, 140, 0, 0.03), transparent 70%);
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.admin-card:hover::after {
  opacity: 1;
}

.admin-card-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(var(--bs-primary-rgb), 0.15) 0%, rgba(var(--bs-primary-rgb), 0.05) 100%);
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(var(--bs-primary-rgb), 0.1);
  position: relative;
  overflow: hidden;
}

.admin-card-icon::after {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, transparent 70%);
  top: -25%;
  left: -25%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.admin-card:hover .admin-card-icon::after {
  opacity: 0.8;
}

.admin-card:hover .admin-card-icon {
  transform: scale(1.08) rotate(8deg);
  background: linear-gradient(145deg, rgba(var(--bs-primary-rgb), 0.25) 0%, rgba(var(--bs-primary-rgb), 0.08) 100%);
}

.admin-card-shine-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 70%);
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.3s ease, transform 1s ease;
  z-index: 5;
}

.admin-card:hover .admin-card-shine-overlay {
  opacity: 1;
  transform: translateX(100%);
}

.admin-card h3 {
  color: var(--bs-secondary-emphasis);
  font-weight: 700;
}

.admin-card p {
  transition: all 0.3s ease;
  line-height: 1.6;
}

.admin-card:hover p {
  color: var(--bs-secondary-emphasis);
}

/* Timeline activités récentes */
.activity-timeline {
  position: relative;
  background-color: #fff;
  border-radius: 16px;
  border: 1px solid rgba(255, 140, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  overflow: hidden;
}

.activity-timeline:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  border-color: rgba(255, 140, 0, 0.15);
}

.activity-timeline::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255, 140, 0, 0.05) 0%, transparent 70%);
  top: -50px;
  right: -50px;
  border-radius: 50%;
  transition: all 0.5s ease;
}

.activity-timeline:hover::before {
  transform: scale(1.5);
}

.timeline-item {
  display: flex;
  margin-bottom: 1.5rem;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(5px);
  background-color: rgba(var(--bs-light-rgb), 0.5);
  border-radius: 8px;
  padding-left: 0.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 22px;
  top: 40px;
  bottom: -15px;
  width: 2px;
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  z-index: 1;
}

.timeline-icon {
  width: 45px;
  height: 45px;
  min-width: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  color: var(--bs-primary);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.timeline-item:hover .timeline-icon {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.timeline-icon.product {
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  color: var(--bs-primary);
}

.timeline-icon.category {
  background-color: rgba(25, 135, 84, 0.1);
  color: #198754;
}

.timeline-icon.settings {
  background-color: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

.timeline-content {
  flex: 1;
  padding-right: 0.5rem;
}

.timeline-content h5 {
  font-weight: 600;
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-content h5 {
  color: var(--bs-primary);
}

.timeline-date {
  color: #6c757d;
  font-style: italic;
  font-size: 0.75rem;
  display: inline-block;
  margin-top: 0.25rem;
  padding: 0.1rem 0.5rem;
  background-color: rgba(var(--bs-light-rgb), 0.6);
  border-radius: 10px;
}

/* Animations et effets */
.tilt-effect {
  transition: transform 0.3s ease;
}

.tilt-effect:hover {
  transform: perspective(500px) rotateX(5deg) rotateY(5deg);
}

.section-styled {
  position: relative;
  background-color: var(--bs-light);
}

.shine-effect-container {
  position: relative;
  overflow: hidden;
}

.shine-text {
  position: relative;
  display: inline-block;
}

.shine-text::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: shine 3s infinite linear;
}

@keyframes shine {
  0% { left: -100%; }
  20% { left: 100%; }
  100% { left: 100%; }
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
  height: 60px;
}

/* Responsive */
@media (max-width: 768px) {
  .admin-hero-section {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  
  .timeline-item:not(:last-child)::after {
    left: 20px;
  }
  
  .timeline-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }
}
</style>
