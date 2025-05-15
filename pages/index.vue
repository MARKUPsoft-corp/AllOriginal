<template>
  <div>
    <!-- Hero Section avec Particles -->
    <section class="py-5 bg-white position-relative hero-section overflow-hidden">
      <div id="particles-hero" class="particles-container"></div>
      <div class="container py-5 position-relative">
        <!-- Carousel principal -->
        <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <!-- Indicateurs -->
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          
          <!-- Slides du carousel -->
          <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start" data-aos="fade-right">
                  <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect">All Original</span>
                  <h1 class="display-3 fw-bold mb-3">High-Tech <span class="text-orange border-3 border-bottom border-orange pb-1 shine-text">Premium</span></h1>
                  <p class="lead mb-4 opacity-75">
            Découvrez notre sélection complète de produits technologiques haut de gamme.
          </p>
                  <NuxtLink to="/catalogue?category=tous" class="btn btn-primary btn-lg px-4 py-3 shadow-sm shine-effect">
            Voir le catalogue
                    <i class="bi bi-arrow-right-circle-fill ms-2"></i>
          </NuxtLink>
        </div>
                <div class="col-lg-6 text-center" data-aos="fade-left" data-aos-delay="200">
                  <div class="hero-image float-animation position-relative">
                    <div class="hero-circle rotate-animation position-absolute" style="z-index: 0;"></div>
                    <div class="placeholder-image rounded-5 shadow-lg tilt-effect position-relative" style="z-index: 1;"></div>
        </div>
                </div>
              </div>
            </div>
            
            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start" data-aos="fade-right">
                  <span class="badge bg-primary-subtle text-primary mb-3 px-3 py-2 rounded-pill shine-effect">Nouveautés</span>
                  <h1 class="display-3 fw-bold mb-3">Découvrez les <span class="text-primary border-3 border-bottom border-primary pb-1 shine-text">Tendances</span></h1>
                  <p class="lead mb-4 opacity-75">
                    Les derniers smartphones et accessoires disponibles dès maintenant.
                  </p>
                  <NuxtLink to="/catalogue?category=telephones" class="btn btn-primary btn-lg px-4 py-3 shadow-sm shine-effect">
                    Voir les nouveautés
                    <i class="bi bi-lightning-fill ms-2"></i>
                  </NuxtLink>
                </div>
                <div class="col-lg-6 text-center" data-aos="fade-left" data-aos-delay="200">
                  <div class="hero-image float-animation position-relative">
                    <div class="hero-circle rotate-animation position-absolute" style="z-index: 0;"></div>
                    <div class="placeholder-image phone-image rounded-5 shadow-lg tilt-effect position-relative" style="z-index: 1;"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Slide 3 -->
            <div class="carousel-item">
              <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start" data-aos="fade-right">
                  <span class="badge bg-success-subtle text-success mb-3 px-3 py-2 rounded-pill shine-effect">Promotions</span>
                  <h1 class="display-3 fw-bold mb-3">Offres <span class="text-success border-3 border-bottom border-success pb-1 shine-text">Spéciales</span></h1>
                  <p class="lead mb-4 opacity-75">
                    Profitez de nos offres limitées sur une sélection de produits high-tech.
                  </p>
                  <NuxtLink to="/catalogue?promo=true" class="btn btn-success btn-lg px-4 py-3 shadow-sm shine-effect">
                    Voir les promos
                    <i class="bi bi-tag-fill ms-2"></i>
                  </NuxtLink>
                </div>
                <div class="col-lg-6 text-center" data-aos="fade-left" data-aos-delay="200">
                  <div class="hero-image float-animation position-relative">
                    <div class="hero-circle rotate-animation position-absolute" style="z-index: 0;"></div>
                    <div class="placeholder-image promo-image rounded-5 shadow-lg tilt-effect position-relative" style="z-index: 1;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contrôles repositionnés en bas -->
          <div class="carousel-controls-wrapper">
            <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Précédent</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Suivant</span>
            </button>
          </div>
        </div>
      </div>
      <div class="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path fill="#f8f9fa" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- Categories Section - Style avec défilement horizontal amélioré -->
    <section class="categories-section-new py-5 section-styled position-relative overflow-hidden">
      <div id="particles-categories" class="particles-container"></div>
      <!-- Formes décoratives -->
      <div class="decorative-shape shape-1"></div>
      <div class="decorative-shape shape-2"></div>
      <div class="decorative-shape shape-3"></div>
      <div class="container py-5 position-relative">
        <div class="row mb-4">
          <div class="col-12 text-center" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect glow-badge">Explorez</span>
            <h2 class="display-5 fw-bold mb-3 text-with-glow">Nos Catégories</h2>
            <div class="separator-line mx-auto mb-4 glow-line"></div>
            <p class="lead col-lg-6 mx-auto opacity-75">Découvrez notre sélection de produits high-tech premium</p>
          </div>
        </div>
        
        <div class="categories-slider-container" data-aos="fade-up">
          <div class="categories-slider" ref="categorySliderRef">
            <div v-for="(category, index) in categories" :key="category.id" class="category-slide">
              <div class="category-box" 
                :data-aos-delay="`${index * 50}`">
                <div class="category-pulse-wrapper">
                  <div class="pulse-effect"></div>
                  <div class="icon-halo"></div>
                  <div class="category-icon-container">
                    <i :class="`bi bi-${category.icon === 'smartphone' ? 'phone' : category.icon === 'laptop' ? 'laptop' : category.icon === 'tablet' ? 'tablet' : category.icon === 'headphones' ? 'headphones' : 'box'}`"></i>
          </div>
        </div>
                <h3 class="category-name">{{ category.name }}</h3>
                <p class="category-desc">{{ category.description }}</p>
                <NuxtLink :to="`/catalogue?category=${category.slug}`" class="category-link">
                  Découvrir <i class="bi bi-arrow-right"></i>
                </NuxtLink>
                <div class="category-hover-effect"></div>
              </div>
            </div>
          </div>
          
          <div class="slider-controls">
            <button class="slider-arrow slider-prev" @click="slidePrev" aria-label="Précédent">
              <i class="bi bi-chevron-left"></i>
            </button>
            <button class="slider-arrow slider-next" @click="slideNext" aria-label="Suivant">
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
          
          <div class="slider-pagination">
            <div class="slider-progress">
              <div class="slider-progress-bar" ref="progressBarRef"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path fill="#ffffff" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- Featured Products Section - Style Sobre -->
    <section class="featured-products-section py-5 section-styled position-relative overflow-hidden">
      <div id="particles-products" class="particles-container"></div>
      <!-- Formes décoratives -->
      <div class="decorative-shape shape-4"></div>
      <div class="decorative-shape shape-5"></div>
      <div class="decorative-shape shape-6"></div>
      <div class="container py-5 position-relative">
        <div class="row mb-5">
          <div class="col-12 text-center" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect glow-badge">Tendances</span>
            <h2 class="display-5 fw-bold mb-3 text-with-glow">Produits Populaires par Catégorie</h2>
            <div class="separator-line mx-auto mb-4 glow-line"></div>
            <p class="lead col-lg-6 mx-auto opacity-75">Découvrez les produits les plus populaires dans chaque catégorie</p>
          </div>
        </div>
        
        <!-- Pour chaque catégorie, afficher un produit populaire -->
        <div v-for="(categoryData, categoryIndex) in categoriesWithProducts" :key="categoryData.category.id" class="category-products-section mb-5" data-aos="fade-up" :data-aos-delay="categoryIndex * 100">
          <!-- En-tête de la catégorie -->
          <div class="category-header d-flex justify-content-between align-items-center mb-4">
            <div class="d-flex align-items-center">
              <div class="category-icon-container me-3">
                <i :class="`bi bi-${getCategoryIcon(categoryData.category.icon)}`"></i>
              </div>
              <h3 class="h4 mb-0">{{ categoryData.category.name }}</h3>
            </div>
            <NuxtLink :to="`/catalogue?category=${categoryData.category.slug}`" class="btn-category-view">
              Voir plus <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
          
          <!-- Produit de la catégorie -->
          <div class="row g-4">
            <div v-for="(product, index) in categoryData.products" :key="product.id" class="col-12 col-md-6 col-lg-4">
              <div class="product-card-wrapper" data-aos="fade-up" :data-aos-delay="`${index * 50}`">
                <ProductCard :product="product" />
              </div>
            </div>
            <!-- Espace réservé si pas assez de produits -->
            <div v-if="categoryData.products.length === 0" class="col-12 text-center py-4">
              <p class="text-muted">Aucun produit populaire dans cette catégorie</p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-5" data-aos="fade-up">
          <NuxtLink to="/catalogue?category=tous" class="btn-view-all">
            Voir tous les produits <i class="bi bi-arrow-right ms-2"></i>
          </NuxtLink>
        </div>
      </div>
      <div class="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path fill="#f8f9fa" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- Services Section - Style Sobre -->
    <section class="services-section-new py-5 section-styled position-relative overflow-hidden">
      <div id="particles-services" class="particles-container"></div>
      <!-- Formes décoratives -->
      <div class="decorative-shape shape-7"></div>
      <div class="decorative-shape shape-8"></div>
      <div class="decorative-shape shape-9"></div>
      <div class="container py-5 position-relative">
        <div class="row mb-5">
          <div class="col-12 text-center" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect glow-badge">Services</span>
            <h2 class="display-5 fw-bold mb-3 text-with-glow">Pourquoi nous choisir</h2>
            <div class="separator-line mx-auto mb-4 glow-line"></div>
            <p class="lead col-lg-6 mx-auto opacity-75">Nous nous engageons à offrir la meilleure expérience client</p>
          </div>
        </div>
        
        <div class="row g-4 justify-content-center">
          <!-- Service 1 -->
          <div class="col-md-4" data-aos="fade-up">
            <div class="service-box">
              <div class="service-icon">
                <i class="bi bi-shield-check"></i>
              </div>
            <h3 class="service-title">Qualité Garantie</h3>
              <p class="service-desc">
                Tous nos produits sont authentiques et bénéficient d'une garantie constructeur officielle. Nous sélectionnons avec soin chaque article.
            </p>
            </div>
          </div>
          
          <!-- Service 2 -->
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="service-box">
              <div class="service-icon">
                <i class="bi bi-truck"></i>
              </div>
            <h3 class="service-title">Livraison Rapide</h3>
              <p class="service-desc">
                Livraison express partout au Cameroun sous 24h à 72h selon votre localisation. Suivi de commande en temps réel.
            </p>
            </div>
          </div>
          
          <!-- Service 3 -->
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="service-box">
              <div class="service-icon">
                <i class="bi bi-headset"></i>
              </div>
            <h3 class="service-title">Service Client</h3>
              <p class="service-desc">
                Notre équipe professionnelle est disponible 7j/7 pour répondre à toutes vos questions et vous accompagner dans vos achats.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call To Action Section - Style Sobre avec animations -->
    <div class="container">
      <section class="cta-section-new py-5 animated-gradient position-relative overflow-hidden rounded-4">
        <div class="container-fluid px-md-5">
          <div id="particles-cta" class="particles-container"></div>
          <div class="cta-bg-container">
            <div class="cta-bg"></div>
          </div>
          <div class="row py-5">
            <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
              <div class="cta-content text-white">
                <span class="badge bg-light text-orange mb-3 px-3 py-2 rounded-pill">Catalogue</span>
                <h2 class="cta-title fw-bold mb-4 text-white text-shadow">Prêt à explorer notre collection ?</h2>
                <p class="cta-description mb-4">Découvrez notre sélection de produits high-tech premium et équipez-vous avec les meilleurs appareils disponibles au Cameroun.</p>
                <div class="cta-btns">
                  <NuxtLink to="/catalogue?category=tous" class="btn cta-btn-primary btn-lg px-4 py-3 me-3">
                    Explorer le catalogue <i class="bi bi-arrow-right ms-2"></i>
                  </NuxtLink>
                  <NuxtLink to="/contact" class="btn cta-btn-secondary btn-lg px-4 py-3">
                    Nous contacter
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div class="cta-image-container">
                <div class="cta-device device-1">
                  <i class="bi bi-phone"></i>
                </div>
                <div class="cta-device device-2">
                  <i class="bi bi-laptop"></i>
                </div>
                <div class="cta-device device-3">
                  <i class="bi bi-headphones"></i>
                </div>
                <div class="cta-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import productsService from '~/services/products';
import categoriesService from '~/services/categories';

// SEO
definePageMeta({
  title: 'All Original - Votre boutique tech au Cameroun',
  description: 'Découvrez notre gamme de produits high-tech certifiés originaux, vendus au Cameroun et garantis.'
});

// État
const allProducts = ref([]);
const featuredProducts = ref([]);
const categories = ref([]);
const loading = ref(true);
const currentSlide = ref(0);
const totalSlides = ref(3); // Le nombre de slides dans le carousel

// Computed property pour organiser les produits populaires par catégorie
const categoriesWithProducts = computed(() => {
  // Créer un tableau contenant chaque catégorie avec ses produits populaires
  const categoriesArray = categories.value.map(category => {
    // Filtrer les produits populaires pour cette catégorie
    const categoryProducts = allProducts.value.filter(product => {
      // Vérifier si la catégorie du produit correspond à la catégorie actuelle
      if (product.category && typeof product.category === 'object') {
        return product.category.id === category.id && product.in_stock && product.is_featured;
      } else if (typeof product.category === 'string') {
        return product.category === category.slug && product.in_stock && product.is_featured;
      } else {
        return (product.category_id === category.id || product.category === category.id) && 
               product.in_stock && product.is_featured;
      }
    });
    
    // Trier par popularité si disponible, sinon par prix décroissant
    const sortedProducts = categoryProducts.sort((a, b) => {
      if (a.popularity && b.popularity) {
        return b.popularity - a.popularity;
      }
      return b.price - a.price; // Par défaut, les produits les plus chers en premier
    });
    
    // Prendre les 3 produits les plus populaires de chaque catégorie
    return {
      category,
      products: sortedProducts.slice(0, 3)
    };
  });
  
  // Filtrer pour ne garder que les catégories qui ont au moins un produit populaire
  return categoriesArray.filter(item => item.products.length > 0);
})

// Références pour le slider de catégories
const categorySliderRef = ref(null);
const progressBarRef = ref(null);
const currentCategoryIndex = ref(0);
const totalCategories = ref(0);
const visibleCategories = ref(4); // Nombre de catégories visibles à la fois (desktop)

// Fonction pour obtenir l'icône Bootstrap correspondant à l'icône de la catégorie
const getCategoryIcon = (icon) => {
  // Mapping des icônes de catégories vers des icônes Bootstrap
  const iconMap = {
    'smartphone': 'phone',
    'laptop': 'laptop',
    'headphone': 'headphones',
    'tv': 'tv',
    'watch': 'smartwatch',
    'camera': 'camera',
    'speaker': 'speaker',
    'tablet': 'tablet',
    'accessory': 'gear',
    'gaming': 'controller',
    'router': 'router',
    'printer': 'printer',
    'storage': 'hdd',
    'audio': 'music-note',
    'wearable': 'smartwatch',
    'computer': 'pc-display',
    'grid': 'grid'
  };
  
  // Retourner l'icône correspondante ou une icône par défaut
  return iconMap[icon] || 'grid';
};

// Récupération des données depuis l'API backend
onMounted(async () => {
  try {
    loading.value = true;
    console.log('Chargement des données depuis l\'API...');
    
    // Chargement parallèle des catégories et de tous les produits
    const [categoriesData, productsData] = await Promise.all([
      categoriesService.getAllCategories(),
      productsService.getAllProducts()
    ]);
    
    console.log('Données catégories reçues de l\'API:', categoriesData);
    console.log('Données produits reçues de l\'API:', productsData);
    
    // Mise à jour des états avec les données de l'API
    categories.value = categoriesData || [];
    allProducts.value = productsData || [];
    totalCategories.value = categories.value.length;
    
    // Filtrer les produits en vedette pour rester compatible avec le code existant
    featuredProducts.value = allProducts.value
      .filter(product => product.in_stock && product.is_featured)
      .slice(0, 6);
    
    // Log des produits par catégorie pour débogage
    console.log('Catégories avec produits:', categoriesWithProducts.value);
    
    // Tri des catégories par nombre de produits (pour montrer d'abord les catégories avec des produits)
    categories.value.sort((a, b) => {
      const aProducts = categoriesWithProducts.value.find(c => c.category.id === a.id)?.products.length || 0;
      const bProducts = categoriesWithProducts.value.find(c => c.category.id === b.id)?.products.length || 0;
      return bProducts - aProducts;
    });
    
    loading.value = false;
    
    // Initialiser les particules
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          opacity: { value: 0.3, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: false },
          move: { enable: true, speed: 1, direction: "top", random: false, straight: false, out_mode: "out" }
        }
      });
    }
    
    // Initialisation du slider de catégories
    await nextTick();
    initCategorySlider();
    
    // Initialiser AOS si disponible
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
    loading.value = false;
  }
});

// Initialisation du slider de catégories
const initCategorySlider = () => {
  if (typeof window === 'undefined') return;
  
  const slider = document.querySelector('.categories-slider');
  categorySliderRef.value = slider;
  progressBarRef.value = document.querySelector('.slider-progress-bar');
  
  if (slider) {
    // Mettre à jour le nombre de catégories visibles en fonction de la largeur d'écran
    updateVisibleCategories();
    window.addEventListener('resize', updateVisibleCategories);
    
    // Ajouter les event listeners aux boutons
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        slideCategoryTo(Math.max(0, currentCategoryIndex.value - visibleCategories.value));
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        slideCategoryTo(Math.min(totalCategories.value - visibleCategories.value, currentCategoryIndex.value + visibleCategories.value));
      });
    }
    
    // Mettre à jour la barre de progression
    updateSliderProgress();
  }
};

// Mise à jour du nombre de catégories visibles en fonction de la largeur d'écran
const updateVisibleCategories = () => {
  if (typeof window === 'undefined') return;
  
  const width = window.innerWidth;
  if (width >= 1400) {
    visibleCategories.value = 4; // 4 cartes sur très grands écrans
  } else if (width >= 1200) {
    visibleCategories.value = 3; // 3 cartes sur grands écrans
  } else if (width >= 992) {
    visibleCategories.value = 3; // 3 cartes sur moyens écrans
  } else if (width >= 768) {
    visibleCategories.value = 2; // 2 cartes sur petits écrans
  } else {
    visibleCategories.value = 1; // 1 carte sur mobiles
  }
  
  // Mettre à jour le slider si on est déjà à un index trop élevé
  const maxIndex = totalCategories.value - visibleCategories.value;
  if (currentCategoryIndex.value > maxIndex) {
    slideCategoryTo(maxIndex);
  } else {
    updateSliderProgress();
  }
};

// Défilement vers une catégorie spécifique
const slideCategoryTo = (index) => {
  if (!categorySliderRef.value) return;
  
  currentCategoryIndex.value = index;
  
  const slideWidth = categorySliderRef.value.querySelector('.category-slide').offsetWidth;
  const gap = parseInt(window.getComputedStyle(categorySliderRef.value).columnGap || '24');
  const scrollLeft = index * (slideWidth + gap);
  
  categorySliderRef.value.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
  
  updateSliderProgress();
};

// Mise à jour de la barre de progression
const updateSliderProgress = () => {
  if (!progressBarRef.value || totalCategories.value === 0) return;
  
  const progress = Math.min(1, visibleCategories.value / totalCategories.value);
  const translateX = (currentCategoryIndex.value / (totalCategories.value - visibleCategories.value)) * 
                    (100 - progress * 100);
  
  progressBarRef.value.style.width = `${progress * 100}%`;
  progressBarRef.value.style.transform = `translateX(${translateX}%)`;
};

// Changer de slide
const changeSlide = (index) => {
  currentSlide.value = index;
};

// Slide suivant/précédent
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
};

// Défilement vers la droite
const slideNext = () => {
  const maxIndex = totalCategories.value - visibleCategories.value;
  const nextIndex = Math.min(maxIndex, currentCategoryIndex.value + visibleCategories.value);
  slideCategoryTo(nextIndex);
};

// Défilement vers la gauche
const slidePrev = () => {
  const prevIndex = Math.max(0, currentCategoryIndex.value - visibleCategories.value);
  slideCategoryTo(prevIndex);
};
</script>

<style scoped>
/* Animations supplémentaires */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Style commun pour les sections (similaire à la page produit) */
.section-styled {
  padding: 6rem 0;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.section-styled .container {
  position: relative;
  z-index: 2;
}

.section-styled .particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.6;
}

.section-styled:nth-child(odd) {
  background-color: #f8f9fa;
}

.section-styled .wave-shape-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(0deg);
  z-index: 1;
}

/* Effets de lueur */
.text-with-glow {
  text-shadow: 0 0 10px rgba(255, 140, 0, 0.2);
  position: relative;
}

.text-with-glow::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 10px;
  background: linear-gradient(90deg, transparent, rgba(255, 140, 0, 0.2), transparent);
  bottom: -10px;
  left: 0;
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0.7;
}

.glow-badge {
  box-shadow: 0 0 15px rgba(255, 140, 0, 0.3);
  border: 1px solid rgba(255, 140, 0, 0.3);
  animation: pulseBadge 3s infinite alternate;
}

.glow-line {
  box-shadow: 0 0 15px rgba(255, 140, 0, 0.3);
  animation: pulseLine 3s infinite alternate;
}

@keyframes pulseBadge {
  0% {
    box-shadow: 0 0 10px rgba(255, 140, 0, 0.3);
    transform: scale(1);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 140, 0, 0.5);
    transform: scale(1.05);
  }
}

@keyframes pulseLine {
  0% {
    box-shadow: 0 0 8px rgba(255, 140, 0, 0.3);
    opacity: 0.8;
  }
  100% {
    box-shadow: 0 0 15px rgba(255, 140, 0, 0.5);
    opacity: 1;
  }
}

/* Formes décoratives */
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

.shape-3 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle at center, var(--bs-orange) 0%, transparent 70%);
  bottom: 10%;
  left: 30%;
  animation-delay: 4s;
}

.shape-4 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle at center, var(--bs-primary) 0%, transparent 70%);
  top: 15%;
  right: -100px;
  animation-delay: 1s;
}

.shape-5 {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle at center, var(--bs-orange) 0%, transparent 70%);
  bottom: 25%;
  left: -80px;
  animation-delay: 3s;
}

.shape-6 {
  width: 220px;
  height: 220px;
  background: radial-gradient(circle at center, var(--bs-primary) 0%, transparent 70%);
  top: 40%;
  left: 20%;
  animation-delay: 5s;
}

.shape-7 {
  width: 280px;
  height: 280px;
  background: radial-gradient(circle at center, var(--bs-orange) 0%, transparent 70%);
  top: 5%;
  left: -120px;
  animation-delay: 0s;
}

.shape-8 {
  width: 190px;
  height: 190px;
  background: radial-gradient(circle at center, var(--bs-primary) 0%, transparent 70%);
  bottom: 15%;
  right: -70px;
  animation-delay: 2.5s;
}

.shape-9 {
  width: 160px;
  height: 160px;
  background: radial-gradient(circle at center, var(--bs-orange) 0%, transparent 70%);
  top: 50%;
  right: 15%;
  animation-delay: 4.5s;
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

/* Animation améliorée pour le hover des éléments */
.category-box, .product-card-wrapper, .service-box {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.category-box:hover, .product-card-wrapper:hover, .service-box:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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

.hero-section {
  padding-top: 80px;
  padding-bottom: 120px;
  position: relative;
  min-height: 80vh;
  z-index: 1;
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

.wave-shape-white path {
  fill: #ffffff;
}

/* Style pour l'image placeholder */
.placeholder-image {
  background: linear-gradient(45deg, var(--bs-primary) 0%, var(--bs-primary-light) 100%);
  height: 360px;
  width: 300px;
  margin: 0 auto;
  transition: transform 0.5s ease;
  position: relative;
  z-index: 2;
}

.hero-image {
  position: relative;
  display: inline-block;
}

.hero-circle {
  position: absolute;
  width: 400px;
  height: 400px;
  top: -20%;
  left: -20%;
  border-radius: 50%;
  border: 2px dashed var(--bs-primary);
  opacity: 0.3;
}

/* Styles pour les formes décoratives */
.shape-decorator {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background-color: rgba(var(--bs-primary-rgb), 0.05);
  z-index: 0;
}

.shape-right {
  top: 10%;
  right: -100px;
}

.shape-left {
  bottom: 10%;
  left: -100px;
}

/* Ombre pour texte sur fond foncé */
.text-shadow {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* Floating icons in CTA section */
.floating-icons {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.floating-icon {
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.4);
  animation: floatingIcons 15s linear infinite;
}

.floating-icon:nth-child(1) {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
  font-size: 2.5rem;
}

.floating-icon:nth-child(2) {
  top: 60%;
  left: 15%;
  animation-delay: 2s;
}

.floating-icon:nth-child(3) {
  top: 25%;
  right: 15%;
  animation-delay: 4s;
  font-size: 1.8rem;
}

.floating-icon:nth-child(4) {
  top: 70%;
  right: 20%;
  animation-delay: 6s;
  font-size: 1.5rem;
}

.floating-icon:nth-child(5) {
  top: 40%;
  right: 5%;
  animation-delay: 8s;
  font-size: 2.2rem;
}

@keyframes floatingIcons {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.4;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
    opacity: 0.4;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.4;
  }
}

.opacity-10 {
  opacity: 0.1;
}

.opacity-75 {
  opacity: 0.75;
}

.opacity-85 {
  opacity: 0.85;
}

/* Styles pour le carousel */
.carousel-item {
  transition: transform 0.6s ease-in-out;
}

.carousel-control-prev, 
.carousel-control-next {
  width: 10%;
  opacity: 1;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: var(--bs-orange);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-size: 24px;
}

.carousel-control-prev:hover .carousel-control-prev-icon,
.carousel-control-next:hover .carousel-control-next-icon {
  background-color: var(--bs-primary);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 40px;
    height: 40px;
    background-size: 20px;
  }
}

.carousel-indicators {
  bottom: -30px;
}

.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: rgba(0, 0, 0, 0.2);
}

.carousel-indicators button.active {
  background-color: var(--bs-primary);
}

/* Images spécifiques pour chaque slide */
.phone-image {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  height: 350px;
}

.promo-image {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  height: 350px;
}

.new-arrivals-image {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  height: 350px;
}

.sale-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 350px;
}

/* Animation de transition pour le carousel */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.carousel-item.active .col-lg-6 {
  animation: fadeInRight 0.5s ease-in-out;
}

/* Styles améliorés pour les contrôles du carousel */
.carousel-controls-wrapper {
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 5;
}

.carousel-control-prev, 
.carousel-control-next {
  position: relative;
  width: 40px;
  height: 40px;
  opacity: 1;
  margin: 0 5px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(255, 140, 0, 0.7);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-size: 20px;
  backdrop-filter: blur(5px);
}

.carousel-control-prev:hover .carousel-control-prev-icon,
.carousel-control-next:hover .carousel-control-next-icon {
  background-color: var(--bs-orange);
  transform: scale(1.1);
}

/* Styles pour la nouvelle section Catégories */
.categories-section {
  background-color: #f8f9fa;
  position: relative;
  z-index: 1;
  padding: 6rem 0;
}

.categories-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 10% 20%, rgba(255, 140, 0, 0.05) 0%, transparent 70%),
                    radial-gradient(circle at 90% 80%, rgba(0, 123, 255, 0.05) 0%, transparent 70%);
  z-index: -1;
}

.section-title-wrapper {
  position: relative;
  margin-bottom: 3rem;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--bs-orange) 0%, var(--bs-primary) 100%);
  border-radius: 2px;
  margin-top: 1rem;
  position: relative;
}

.title-underline::before {
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

.categories-wrapper {
  position: relative;
  perspective: 1000px;
}

.category-card-wrapper {
  margin-bottom: 2rem;
  transition: all 0.5s ease;
}

.category-card-container {
  position: relative;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
}

.category-card-container:hover {
  transform: translateY(-10px) rotateY(5deg);
}

.category-card-shape {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 100%;
  height: 100%;
  background-color: var(--bs-orange);
  opacity: 0.1;
  border-radius: 15px;
  z-index: -1;
  transform: scale(0.9);
  transition: all 0.5s ease;
}

.category-card-container:hover .category-card-shape {
  transform: scale(1);
  opacity: 0.2;
}

/* Cercles flottants */
.floating-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 140, 0, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  filter: blur(20px);
  z-index: 0;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -100px;
  animation: floatCircle 20s ease-in-out infinite alternate;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: 100px;
  left: -100px;
  animation: floatCircle 15s ease-in-out infinite alternate-reverse;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 10%;
  animation: floatCircle 17s ease-in-out infinite alternate;
}

@keyframes floatCircle {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(40px, -30px) scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: translate(-20px, 20px) scale(0.9);
    opacity: 0.6;
  }
}

/* Ajustements responsive */
@media (max-width: 768px) {
  .categories-section {
    padding: 4rem 0;
  }
  
  .title-underline {
    width: 60px;
  }
  
  .floating-circle {
    opacity: 0.3;
  }
}

/* Styles pour la nouvelle section des catégories - Style Sobre */
.categories-section-new {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.category-box {
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  max-height: 380px;
}

.category-icon-container {
  width: 80px;
  height: 80px;
  background: var(--bs-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}

/* Ajout du halo lumineux */
.icon-halo {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(var(--bs-primary-rgb),0.4) 40%, rgba(var(--bs-primary-rgb),0) 70%);
  z-index: 1;
  animation: pulse-halo 3s infinite ease-in-out;
  opacity: 0.7;
  filter: blur(8px);
}

@keyframes pulse-halo {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

.category-box:hover .icon-halo {
  animation: pulse-halo-hover 1.5s infinite ease-in-out;
  background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(var(--bs-orange-rgb),0.5) 40%, rgba(var(--bs-orange-rgb),0) 70%);
}

@keyframes pulse-halo-hover {
  0% {
    transform: scale(1.1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.1);
    opacity: 0.6;
  }
}

.category-pulse-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-effect {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--bs-primary);
  opacity: 0.3;
  animation: pulse-animation 2s infinite;
  z-index: 1;
}

.icon-halo {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg, 
    rgba(var(--bs-primary-rgb), 0.8), 
    rgba(var(--bs-primary-rgb), 0.1), 
    rgba(var(--bs-primary-rgb), 0.8)
  );
  z-index: 0;
  animation: rotate-halo 4s linear infinite;
  opacity: 0.7;
}

@keyframes rotate-halo {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.category-box:hover .icon-halo {
  animation: rotate-halo 2s linear infinite;
  background: conic-gradient(
    from 0deg, 
    rgba(var(--bs-orange-rgb), 0.8), 
    rgba(var(--bs-orange-rgb), 0.2), 
    rgba(var(--bs-orange-rgb), 0.8)
  );
}

.category-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--bs-gray-900);
}

.category-desc {
  font-size: 0.9rem;
  color: var(--bs-gray-600);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.category-link {
  color: var(--bs-orange);
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.category-link i {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.category-link:hover {
  color: var(--bs-primary);
}

.category-link:hover i {
  transform: translateX(5px);
}

.category-link:hover {
  color: var(--bs-primary);
}

.category-link:hover i {
  transform: translateX(5px);
}

@media (max-width: 767px) {
  .category-box {
    padding: 2rem 1rem;
}

  .category-icon-container {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }
}

/* Styles pour la nouvelle section des produits populaires - Style Sobre */
.featured-products-section {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.product-card-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.product-card {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.product-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(-45deg);
  opacity: 0;
  transition: all 0.3s ease;
}

.product-card-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.product-card-wrapper:hover .product-shine {
  opacity: 1;
  top: 0;
  left: 0;
}

/* Styles pour la nouvelle section des services - Style Sobre */
.services-section-new {
  background-color: #fff;
}

.service-box {
  background-color: #fff;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

.service-box::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, var(--bs-orange), var(--bs-primary));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}

.service-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.service-box:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.service-icon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: rgba(var(--bs-orange-rgb), 0.1);
  color: var(--bs-orange);
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.service-icon::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px dashed var(--bs-orange);
  opacity: 0.3;
  animation: rotate 15s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.service-box:hover .service-icon {
  background-color: var(--bs-orange);
  color: white;
  transform: scale(1.1);
}

.service-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--bs-gray-900);
}

.service-desc {
  font-size: 0.95rem;
  color: var(--bs-gray-600);
  line-height: 1.6;
}

@media (max-width: 767px) {
  .service-box {
    padding: 2rem 1.5rem;
  }
  
  .service-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
}

/* Styles pour la nouvelle section CTA - Style Sobre */
.cta-section-new {
  position: relative;
  padding: 4rem 0;
  overflow: hidden;
  color: #fff;
  max-width: 100%;
  margin: 3rem 0;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1199px) {
  .cta-title {
    font-size: 2.5rem;
  }
  
  .cta-description {
    font-size: 1.15rem;
  }
}

@media (max-width: 991px) {
  .cta-section-new {
    padding: 3rem 0;
    margin: 2rem auto;
  }
  
  .cta-content {
  text-align: center;
    padding: 1rem;
  }
  
  .cta-title {
    font-size: 2.25rem;
  }
  
  .cta-description {
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
  }
  
  .cta-btns {
    justify-content: center;
  }
  
  .cta-image-container {
    height: 300px;
    margin-top: 2rem;
  }
  
  .cta-device {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
  
  .cta-circle {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 767px) {
  .cta-title {
    font-size: 1.75rem;
  }
  
  .cta-description {
    font-size: 0.95rem;
    max-width: 100%;
  }
}

@media (max-width: 575px) {
  .cta-section-new {
    padding: 2.5rem 0;
    margin: 1.5rem 0;
  }
  
  .cta-content {
    padding: 0.5rem;
  }
  
  .cta-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
  
  .cta-description {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
    line-height: 1.4;
  }
  
  .cta-btns {
    flex-direction: column;
    width: 100%;
  }
  
  .cta-btn-primary, .cta-btn-secondary {
    width: 100%;
    margin-right: 0 !important;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    padding: 0.6rem 1.25rem !important;
  }
  
  .cta-image-container {
    height: 220px;
  }
  
  .cta-device {
    width: 50px;
    height: 50px;
  font-size: 1.25rem;
  }
}

@media (max-width: 375px) {
  .cta-title {
    font-size: 1.35rem;
  }
  
  .cta-description {
    font-size: 0.8rem;
  }
  
  .cta-btn-primary, .cta-btn-secondary {
    font-size: 0.85rem;
    padding: 0.5rem 1rem !important;
  }
}

.cta-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  opacity: 0.8;
  border-radius: inherit;
}

.cta-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 140, 0, 0.4) 100%);
  transform: skewY(-3deg) scale(1.2);
  transform-origin: bottom right;
  border-radius: inherit;
}

.cta-content {
  padding: 2rem;
  position: relative;
  color: white;
  z-index: 2;
}

.cta-title {
  font-size: 3rem;
  line-height: 1.2;
}

.cta-description {
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
}

.cta-btns {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-btn-primary {
  background-color: #fff;
  color: var(--bs-orange);
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-btn-primary:hover {
  background-color: var(--bs-orange);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.cta-btn-secondary {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  font-weight: 500;
  transition: all 0.3s ease;
}

.cta-btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
  transform: translateY(-3px);
}

.cta-btns .btn-outline-light {
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.cta-btns .btn-outline-light:hover {
  background-color: white;
  color: var(--bs-orange);
}

.cta-image-container {
  position: relative;
  width: 100%;
  height: 400px;
  z-index: 1;
}

.cta-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1;
  }
  
.cta-device {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  color: var(--bs-orange);
  font-size: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 2;
}

.device-1 {
  top: 20%;
  left: 60%;
  animation: float-device 6s ease-in-out infinite;
}

.device-2 {
  top: 50%;
  left: 25%;
  animation: float-device 8s ease-in-out infinite;
  animation-delay: 1s;
}

.device-3 {
  top: 70%;
  left: 55%;
  animation: float-device 7s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes float-device {
  0%, 100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-15px) rotate(3deg);
  }
}

.animated-gradient {
  background: linear-gradient(-45deg, #ff8c00, #ff6600, #333333, #000000);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  border-radius: inherit;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: inherit;
}

/* Responsive pour les sections stylisées */
@media (max-width: 991px) {
  .section-styled {
    padding: 4rem 0;
  }
}

@media (max-width: 767px) {
  .section-styled {
    padding: 3rem 0;
  }
  
  .separator-line {
    width: 60px;
  }
}

@media (max-width: 575px) {
  .section-styled {
    padding: 2.5rem 0;
  }
}

/* Style pour le slider de catégories */
.categories-slider-container {
  position: relative;
  padding: 1.5rem 0;
  margin: 0 -15px;
}

.categories-slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.categories-slider::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.category-slide {
  flex: 0 0 auto;
  width: calc(25% - 1.125rem);
  scroll-snap-align: start;
  transition: transform 0.3s ease;
  height: auto;
}

.category-box {
  position: relative;
  background: white;
  height: 100%;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.03);
  z-index: 1;
  max-height: 380px;
}

.category-box::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, var(--bs-orange), var(--bs-primary));
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
  z-index: 1;
  border-radius: 3px 3px 0 0;
}

.category-box:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}

.category-box:hover::before {
  transform: scaleX(1);
}

.category-pulse-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-effect {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--bs-primary);
  opacity: 0.3;
  animation: pulse-animation 2s infinite;
  z-index: 1;
}

.icon-halo {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg, 
    rgba(var(--bs-primary-rgb), 0.8), 
    rgba(var(--bs-primary-rgb), 0.1), 
    rgba(var(--bs-primary-rgb), 0.8)
  );
  z-index: 0;
  animation: rotate-halo 4s linear infinite;
  opacity: 0.7;
}

@keyframes rotate-halo {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.category-box:hover .icon-halo {
  animation: rotate-halo 2s linear infinite;
  background: conic-gradient(
    from 0deg, 
    rgba(var(--bs-orange-rgb), 0.8), 
    rgba(var(--bs-orange-rgb), 0.2), 
    rgba(var(--bs-orange-rgb), 0.8)
  );
}

.category-icon-container {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(var(--bs-orange-rgb), 0.1) 0%, rgba(var(--bs-primary-rgb), 0.05) 100%);
  color: var(--bs-orange);
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 3;
  box-shadow: 0 8px 25px rgba(var(--bs-orange-rgb), 0.15);
}

.category-name {
  position: relative;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #333;
  z-index: 2;
  transition: color 0.3s ease;
}

.category-desc {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.2rem;
  flex-grow: 1;
  z-index: 2;
  position: relative;
  transition: color 0.3s ease;
  line-height: 1.5;
  max-height: 4.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.category-link {
  color: var(--bs-orange);
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  background-color: rgba(var(--bs-orange-rgb), 0.1);
  transition: all 0.3s ease;
  z-index: 3;
  position: relative;
  font-size: 0.9rem;
}

.category-link i {
  transition: transform 0.3s ease;
}

.category-link:hover {
  color: white;
  background-color: var(--bs-orange);
  box-shadow: 0 5px 15px rgba(var(--bs-orange-rgb), 0.2);
}

.category-link:hover i {
  transform: translateX(5px);
}

.category-hover-effect {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(var(--bs-orange-rgb), 0.05) 0%, rgba(var(--bs-orange-rgb), 0) 70%);
  border-radius: 50%;
  z-index: 0;
  opacity: 0;
  transition: all 0.5s ease;
  transform: scale(0.5);
}

.category-box:hover .category-hover-effect {
  opacity: 1;
  transform: scale(1);
}

/* Flèches de navigation */
.slider-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
    justify-content: space-between;
  pointer-events: none;
  z-index: 10;
  padding: 0 1rem;
}

.slider-arrow {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--bs-orange);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
  pointer-events: auto;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.slider-arrow:hover {
  background-color: var(--bs-orange);
  color: white;
  transform: scale(1.1);
}

.slider-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-pagination {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.slider-progress {
  width: 100px;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.slider-progress-bar {
  height: 100%;
  width: 25%;
  background: linear-gradient(90deg, var(--bs-orange), var(--bs-primary));
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Responsive */
@media (max-width: 1399px) {
  .category-slide {
    width: calc(33.333% - 1rem);
  }
  
  .category-icon-container {
    width: 75px;
    height: 75px;
    font-size: 2.1rem;
  }
  
  .pulse-effect, .icon-halo {
    width: 75px;
    height: 75px;
  }
  
  .category-box {
    padding: 1.8rem 1.2rem;
    max-height: 350px;
  }
}

@media (max-width: 1199px) {
  .category-slide {
    width: calc(33.333% - 1rem);
  }
  
  .category-icon-container {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
  
  .pulse-effect, .icon-halo {
    width: 70px;
    height: 70px;
  }
  
  .category-box {
    padding: 1.8rem 1.2rem;
    max-height: 330px;
  }
}

@media (max-width: 991px) {
  .categories-slider-container {
    padding: 0.5rem 0;
  }
  
  .category-slide {
    width: calc(50% - 0.75rem);
  }
  
  .category-box {
    padding: 1.5rem 1rem;
    max-height: 320px;
  }
  
  .category-name {
    font-size: 1.15rem;
  }
  
  .category-desc {
    -webkit-line-clamp: 2; /* Limiter à 2 lignes sur tablette */
    max-height: 3rem;
  }
  
  .slider-controls {
    top: auto;
    bottom: -15px;
    transform: none;
  }
  
  .slider-arrow {
    transform: scale(0.9);
  }
}

@media (max-width: 767px) {
  .categories-slider {
    gap: 0.75rem;
    padding: 1rem 0.5rem 2rem;
  margin-bottom: 1rem;
  }
  
  .category-slide {
    width: 85%; /* Une carte occupe presque tout l'écran sur mobile */
  }
  
  .category-box {
    padding: 1.5rem 1rem;
    max-height: 280px;
    margin: 0 auto;
  }
  
  .category-icon-container {
    width: 60px;
    height: 60px;
    font-size: 1.6rem;
  }
  
  .pulse-effect, .icon-halo {
    width: 60px;
    height: 60px;
  }
  
  .category-name {
    font-size: 1.1rem;
  }
  
  .category-desc {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    max-height: 2.8rem;
    -webkit-line-clamp: 2;
  }
  
  .category-link {
    padding: 0.3rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .slider-arrow {
    width: 36px;
    height: 36px;
    font-size: 1rem;
    position: absolute;
    bottom: -15px;
    top: auto;
  }
  
  .slider-prev {
    left: calc(50% - 50px);
  }
  
  .slider-next {
    right: calc(50% - 50px);
  }
  
  .slider-pagination {
    margin-top: 0;
  }
}

/* Styles pour les sections de catégories */
.category-products-section {
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.03);
  margin-bottom: 2rem;
}

.category-products-section:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.category-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.category-icon-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bs-orange) 0%, var(--bs-primary) 100%);
  color: white;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(var(--bs-orange-rgb), 0.3);
}

.category-icon-container i {
  font-size: 1.2rem;
}

.btn-category-view {
  color: var(--bs-primary);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.btn-category-view:hover {
  color: var(--bs-orange);
  transform: translateX(5px);
}

@media (max-width: 575px) {
  /* Sur très petits écrans, afficher une carte à la fois */
  .category-slide {
    width: 90%;
  }
  
  .categories-slider {
    padding: 1rem 0 2.5rem;
  }
  
  .category-box {
    max-height: 270px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  }
  
  .category-icon-container {
    width: 55px;
    height: 55px;
    font-size: 1.4rem;
  }
  
  .pulse-effect, .icon-halo {
    width: 55px;
    height: 55px;
  }
  
  .category-name {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .category-desc {
    font-size: 0.8rem;
    line-height: 1.4;
  }
  
  .slider-arrow {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
    bottom: -20px;
  }
  
  .slider-prev {
    left: calc(50% - 45px);
  }
  
  .slider-next {
    right: calc(50% - 45px);
  }
  
  .categories-slider-container {
    margin-bottom: 1rem;
  }
}

@keyframes pulse-animation {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  70% {
    transform: scale(1.4);
    opacity: 0.1;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

.category-box:hover .category-icon-container {
  background: linear-gradient(135deg, var(--bs-orange) 0%, #f17c0e 100%);
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(var(--bs-orange-rgb), 0.3);
}

/* Bouton stylisé pour la section des produits populaires */
.btn-view-all {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--bs-orange) 0%, #f17c0e 100%);
  color: white;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(var(--bs-orange-rgb), 0.25);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  border: none;
  z-index: 1;
}

.btn-view-all::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
  transform: skewX(-25deg);
  transition: all 0.75s ease;
  z-index: -1;
}

.btn-view-all:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 30px rgba(var(--bs-orange-rgb), 0.35);
  color: white;
}

.btn-view-all:hover::before {
  left: 100%;
}

.btn-view-all i {
  transition: transform 0.3s ease;
}

.btn-view-all:hover i {
  transform: translateX(5px);
}

@media (max-width: 767px) {
  .btn-view-all {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
}
</style> 