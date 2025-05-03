<template>
  <div>
    <!-- Section Hero Admin avec Particles -->
    <section class="py-5 bg-white position-relative admin-hero-section overflow-hidden">
      <div id="particles-admin" class="particles-container"></div>
      <div class="container py-5 position-relative">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect">Administration</span>
            <h1 class="display-4 fw-bold mb-3">Tableau de <span class="text-orange border-3 border-bottom border-orange pb-1 shine-text">Bord</span></h1>
            <p class="lead mb-4 opacity-75">
              Gérez votre boutique All Original - Produits, catégories et plus
            </p>
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
                <div>
                  <h3 class="fs-5 mb-0">{{ categoryCount }}</h3>
                  <p class="text-muted mb-0">Catégories</p>
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
              <h3 class="fs-4 mt-4 mb-3">Gestion des Produits</h3>
              <p class="text-muted mb-4">Ajoutez, modifiez ou supprimez les produits de votre catalogue.</p>
              <div class="d-flex justify-content-between">
                <NuxtLink to="/admin/produits" class="btn btn-primary shine-effect">
                  <i class="bi bi-pencil-square me-2"></i> Gérer
                </NuxtLink>
                <NuxtLink to="/admin/produits/ajouter" class="btn btn-outline-primary shine-effect">
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
              <h3 class="fs-4 mt-4 mb-3">Gestion des Catégories</h3>
              <p class="text-muted mb-4">Organisez vos produits avec des catégories personnalisées.</p>
              <div class="d-flex justify-content-between">
                <NuxtLink to="/admin/categories" class="btn btn-primary shine-effect">
                  <i class="bi bi-pencil-square me-2"></i> Gérer
                </NuxtLink>
                <NuxtLink to="/admin/categories/ajouter" class="btn btn-outline-primary shine-effect">
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
              <h3 class="fs-4 mt-4 mb-3">Paramètres du Site</h3>
              <p class="text-muted mb-4">Configurez les informations générales de votre boutique.</p>
              <div class="d-flex justify-content-between">
                <NuxtLink to="/admin/parametres" class="btn btn-primary shine-effect">
                  <i class="bi bi-gear me-2"></i> Configurer
                </NuxtLink>
                <NuxtLink to="/catalogue" target="_blank" class="btn btn-outline-primary shine-effect">
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
            <h2 class="section-title fs-2 mb-1">Activités <span class="text-orange border-3 border-bottom border-orange pb-1 shine-text">Récentes</span></h2>
            <p class="text-muted">Les dernières modifications apportées à votre boutique</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-12" data-aos="fade-up">
            <div class="activity-timeline p-4 rounded-4 shadow-sm">
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
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Données simulées pour la démo - à remplacer par des données réelles
const productCount = ref(0);
const categoryCount = ref(0);
const inStockCount = ref(0);
const recentActivities = ref([]);

// Charger les données
const loadData = async () => {
  try {
    // Charger les produits
    const productsResponse = await fetch('/data/products.json');
    const products = await productsResponse.json();
    productCount.value = products.length;
    inStockCount.value = products.filter(p => p.in_stock).length;
    
    // Charger les catégories
    const categoriesResponse = await fetch('/data/categories.json');
    const categories = await categoriesResponse.json();
    categoryCount.value = categories.length;
    
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
        number: { value: 30, density: { enable: true, value_area: 800 } },
        color: { value: '#FF8C00' },
        shape: { type: 'circle', },
        opacity: { value: 0.1, random: true, },
        size: { value: 5, random: true, },
        line_linked: { enable: true, distance: 150, color: '#FF8C00', opacity: 0.1, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 0.3 } }, }
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
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.stat-icon-container {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(var(--bs-primary-rgb), 0.1) 0%, rgba(var(--bs-primary-rgb), 0.05) 100%);
  transition: all 0.3s ease;
}

/* Admin cards */
.admin-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.admin-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
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
}

.admin-card:hover::before {
  transform: scaleX(1);
}

.admin-card-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(var(--bs-primary-rgb), 0.1) 0%, rgba(var(--bs-primary-rgb), 0.05) 100%);
  transition: all 0.3s ease;
}

.admin-card:hover .admin-card-icon {
  transform: scale(1.05) rotate(5deg);
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
}

.admin-card:hover .admin-card-shine-overlay {
  opacity: 1;
  transform: translateX(100%);
}

/* Timeline activités récentes */
.activity-timeline {
  position: relative;
  background-color: #fff;
}

.timeline-item {
  display: flex;
  margin-bottom: 1.5rem;
  position: relative;
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
}

.timeline-date {
  color: #6c757d;
  font-style: italic;
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
