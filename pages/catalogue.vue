<template>
  <div class="catalogue-page">
    <!-- En-tête avec vague et particules -->
    <section class="catalogue-header position-relative overflow-hidden">
      <div id="particles-catalogue" class="particles-container"></div>
      <div class="animated-bg"></div>
      <div class="radial-gradient-overlay-orange"></div>
      <div class="radial-gradient-overlay-blue"></div>
      
      <!-- Icônes flottantes -->
      <div class="floating-icons">
        <!-- Ordinateurs et portables -->
        <i class="bi bi-laptop floating-icon laptop-icon" style="top: 15%; left: 20%;"></i>
        <i class="bi bi-laptop floating-icon laptop-icon" style="bottom: 20%; right: 15%;"></i>
        <i class="bi bi-pc-display floating-icon desktop-icon" style="top: 25%; right: 10%;"></i>
        <i class="bi bi-pc-display-horizontal floating-icon desktop-icon" style="bottom: 30%; left: 25%;"></i>
        
        <!-- Téléphones et tablettes -->
        <i class="bi bi-phone floating-icon phone-icon" style="top: 30%; right: 20%;"></i>
        <i class="bi bi-phone floating-icon phone-icon" style="bottom: 35%; left: 10%;"></i>
        <i class="bi bi-phone-vibrate floating-icon phone-icon" style="top: 50%; left: 15%;"></i>
        <i class="bi bi-phone-landscape floating-icon phone-icon" style="bottom: 45%; right: 22%;"></i>
        <i class="bi bi-tablet floating-icon tablet-icon" style="top: 60%; left: 15%;"></i>
        <i class="bi bi-tablet floating-icon tablet-icon" style="top: 40%; right: 30%;"></i>
        <i class="bi bi-tablet-landscape floating-icon tablet-icon" style="bottom: 25%; left: 30%;"></i>
        
        <!-- Accessoires -->
        <i class="bi bi-headphones floating-icon accessory-icon" style="bottom: 25%; right: 15%;"></i>
        <i class="bi bi-earbuds floating-icon accessory-icon" style="top: 35%; left: 28%;"></i>
        <i class="bi bi-mouse3 floating-icon accessory-icon" style="top: 45%; right: 30%;"></i>
        <i class="bi bi-keyboard floating-icon accessory-icon" style="bottom: 40%; right: 35%;"></i>
        <i class="bi bi-printer floating-icon accessory-icon" style="top: 20%; left: 35%;"></i>
        <i class="bi bi-speaker floating-icon accessory-icon" style="bottom: 15%; left: 20%;"></i>
        
        <!-- Stockage et connectique -->
        <i class="bi bi-usb-drive floating-icon storage-icon" style="bottom: 35%; left: 35%;"></i>
        <i class="bi bi-sd-card floating-icon storage-icon" style="top: 55%; right: 15%;"></i>
        <i class="bi bi-hdd floating-icon storage-icon" style="top: 10%; right: 35%;"></i>
        <i class="bi bi-usb-c floating-icon storage-icon" style="bottom: 20%; right: 40%;"></i>
        
        <!-- Autres icônes tech -->
        <i class="bi bi-cpu floating-icon tech-icon" style="top: 70%; right: 25%;"></i>
        <i class="bi bi-gpu-card floating-icon tech-icon" style="bottom: 60%; left: 40%;"></i>
        <i class="bi bi-battery-full floating-icon tech-icon" style="top: 25%; left: 45%;"></i>
        <i class="bi bi-smartwatch floating-icon tech-icon" style="bottom: 50%; right: 45%;"></i>
        <i class="bi bi-camera floating-icon tech-icon" style="top: 48%; left: 48%;"></i>
        <i class="bi bi-bluetooth floating-icon tech-icon" style="bottom: 55%; left: 8%;"></i>
        <i class="bi bi-wifi floating-icon tech-icon" style="top: 38%; right: 8%;"></i>
        <i class="bi bi-activity floating-icon tech-icon" style="bottom: 28%; right: 28%;"></i>
      </div>
      
      <div class="container position-relative z-3">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <div class="title-container">
              <h1 class="catalogue-title display-4 fw-bold mb-3" data-aos="fade-up">
                Notre Catalogue
              </h1>
              <div class="gradient-underline mx-auto mb-4"></div>
              <p class="catalogue-subtitle fs-5 mb-4" data-aos="fade-up" data-aos-delay="100">
                Découvrez notre sélection premium de produits high-tech certifiés originaux
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="catalogue-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,176C672,192,768,192,864,181.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <section class="catalogue-content py-5">
      <div class="container">
        <!-- Filtres et catégories -->
        <div class="filters-container mb-5" data-aos="fade-up">
          <div class="card filter-card shadow-sm border-0">
            <div class="card-body p-0">
              <!-- Onglets de catégories -->
              <div class="categories-tabs p-3 border-bottom">
                <div class="scrollable-tabs">
                  <button 
                    v-for="cat in categories" 
                    :key="cat.id"
                    class="category-tab"
                    :class="{ 'active': activeCategory === cat.slug }"
                    @click="setCategory(cat.slug)"
                  >
                    <i :class="`bi bi-${getCategoryIcon(cat.icon)}`"></i>
                    {{ cat.name }}
                  </button>
                  <button 
                    class="category-tab"
                    :class="{ 'active': activeCategory === 'tous' }"
                    @click="setCategory('tous')"
                  >
                    <i class="bi bi-grid"></i>
                    Tous les produits
                  </button>
                </div>
              </div>
              
              <!-- Recherche et filtres -->
              <div class="search-filters p-4">
                <div class="row g-3 align-items-center">
                  <div class="col-12 col-md-5">
                    <div class="search-bar position-relative">
                      <input 
                        type="text" 
                        placeholder="Rechercher un produit..." 
                        v-model="searchQuery"
                        class="form-control search-input py-2 ps-4 pe-5"
                      />
                      <i class="bi bi-search search-icon"></i>
                    </div>
                  </div>
                  
                  <div class="col-12 col-md-7">
                    <div class="row g-3">
                      <div class="col-6 col-sm-4">
                        <select v-model="selectedBrand" class="form-select py-2">
                          <option value="">Toutes les marques</option>
                          <option v-for="brand in availableBrands" :key="brand" :value="brand">{{ brand }}</option>
                        </select>
                      </div>
                      
                      <div class="col-6 col-sm-4">
                        <select v-model="priceRange" class="form-select py-2">
                          <option value="">Tous les prix</option>
                          <option value="low">Prix croissant</option>
                          <option value="high">Prix décroissant</option>
                        </select>
                      </div>
                      
                      <div class="col-12 col-sm-4">
                        <div class="stock-filter form-check form-switch">
                          <input class="form-check-input" type="checkbox" id="stockSwitch" v-model="inStockOnly">
                          <label class="form-check-label" for="stockSwitch">En stock uniquement</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Résultats -->
        <div v-if="filteredProducts.length > 0" class="product-results">
          <div class="results-header d-flex justify-content-between align-items-center mb-4" data-aos="fade-up">
            <p class="results-count mb-0">
              <span class="fw-bold">{{ filteredProducts.length }}</span> produits trouvés
            </p>
            <button @click="resetFilters" class="btn-reset" v-if="isFilterActive">
              <i class="bi bi-x-circle me-2"></i> Réinitialiser les filtres
            </button>
          </div>
          
          <div class="row g-4">
            <div v-for="(product, index) in filteredProducts" :key="product.id" class="col-12 col-md-6 col-lg-4" 
                 data-aos="fade-up" :data-aos-delay="`${index * 50}`">
              <ProductCard :product="product" />
            </div>
          </div>
        </div>
        
        <!-- Message si aucun résultat -->
        <div v-else class="no-results text-center py-5" data-aos="fade-up">
          <div class="no-results-content p-5">
            <i class="bi bi-search display-1 text-muted mb-3"></i>
            <h3 class="fs-4 mb-3">Aucun produit ne correspond à vos critères</h3>
            <p class="text-muted mb-4">Essayez d'élargir votre recherche ou de modifier les filtres appliqués.</p>
            <button @click="resetFilters" class="btn btn-primary">
              <i class="bi bi-arrow-repeat me-2"></i> Réinitialiser les filtres
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// SEO
definePageMeta({
  title: 'Catalogue - All Original',
  description: 'Explorez notre catalogue complet de produits high-tech: téléphones, ordinateurs, tablettes et accessoires au meilleur prix au Cameroun.'
});

// Route et router
const route = useRoute();
const router = useRouter();

// Données
const categories = ref([]);
const products = ref([]);
const activeCategory = ref('tous');
const searchQuery = ref('');
const selectedBrand = ref('');
const priceRange = ref('');
const inStockOnly = ref(false);

// Récupération des données
onMounted(async () => {
  try {
    // Chargement des catégories
    const categoriesResponse = await fetch('/data/categories.json');
    categories.value = await categoriesResponse.json();
    
    // Chargement des produits
    const productsResponse = await fetch('/data/products.json');
    products.value = await productsResponse.json();
    
    // Récupération de la catégorie depuis l'URL
    const categoryParam = route.query.category;
    if (categoryParam) {
      activeCategory.value = categoryParam;
    }
    
    // Initialisation des particules avec des couleurs orange et noir
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-catalogue', {
        particles: {
          number: { value: 40, density: { enable: true, value_area: 1200 } },
          color: { 
            value: ["#ff8c00", "#ff6b00", "#222222", "#444444"] 
          },
          opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1, opacity_min: 0.4, sync: false } },
          size: { value: 4, random: true, anim: { enable: true, speed: 2, size_min: 2, sync: false } },
          line_linked: { enable: true, color: "#ff8c00", opacity: 0.4, width: 1 },
          move: { 
            enable: true, 
            speed: 1, 
            direction: "none", 
            random: true, 
            straight: false, 
            out_mode: "out",
            bounce: false,
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
          }
        }
      });
    }
    
    // Initialiser AOS si disponible
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
  }
});

// Marques disponibles
const availableBrands = computed(() => {
  const brands = new Set();
  products.value.forEach(product => brands.add(product.brand));
  return Array.from(brands);
});

// Filtrage des produits
const filteredProducts = computed(() => {
  let result = [...products.value];
  
  // Filtre par catégorie
  if (activeCategory.value && activeCategory.value !== 'tous') {
    const category = categories.value.find(cat => cat.slug === activeCategory.value);
    if (category) {
      result = result.filter(product => product.category_id === category.id);
    }
  }
  
  // Filtre par recherche
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query)
    );
  }
  
  // Filtre par marque
  if (selectedBrand.value) {
    result = result.filter(product => product.brand === selectedBrand.value);
  }
  
  // Filtre par stock
  if (inStockOnly.value) {
    result = result.filter(product => product.in_stock);
  }
  
  // Tri par prix
  if (priceRange.value === 'low') {
    result.sort((a, b) => a.price - b.price);
  } else if (priceRange.value === 'high') {
    result.sort((a, b) => b.price - a.price);
  }
  
  return result;
});

// Vérifier si des filtres sont appliqués
const isFilterActive = computed(() => {
  return searchQuery.value !== '' || 
         selectedBrand.value !== '' || 
         priceRange.value !== '' || 
         inStockOnly.value || 
         activeCategory.value !== 'tous';
});

// Mise à jour de l'URL lors du changement de catégorie
const setCategory = (category) => {
  activeCategory.value = category;
  router.push({ query: { ...route.query, category } });
  
  // Scroll vers le haut si sur mobile
  if (window.innerWidth < 768) {
    window.scrollTo({ top: document.querySelector('.catalogue-content').offsetTop - 80, behavior: 'smooth' });
  }
};

// Réinitialisation des filtres
const resetFilters = () => {
  searchQuery.value = '';
  selectedBrand.value = '';
  priceRange.value = '';
  inStockOnly.value = false;
  setCategory('tous');
};

// Observer les changements d'URL
watch(() => route.query.category, (newCategory) => {
  if (newCategory) {
    activeCategory.value = newCategory;
  } else {
    activeCategory.value = 'tous';
  }
});

// Convertir les icônes emoji en classes Bootstrap Icons
const getCategoryIcon = (icon) => {
  const iconMap = {
    'smartphone': 'phone',
    'laptop': 'laptop',
    'tablet': 'tablet',
    'headphones': 'headphones',
    'default': 'box'
  };
  
  return iconMap[icon] || iconMap.default;
};
</script>

<style scoped>
.catalogue-page {
  min-height: calc(100vh - 70px); /* Ajuster en fonction de la hauteur du header */
}

.catalogue-header {
  background: transparent;
  padding: 5rem 0 8rem;
  text-align: center;
  position: relative;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
}

.animated-bg {
  display: none;
}

.radial-gradient-overlay-orange {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 50%;
  height: 50%;
  background: radial-gradient(circle, rgba(var(--bs-orange-rgb), 0.25) 0%, rgba(var(--bs-orange-rgb), 0) 70%);
  z-index: 2;
  opacity: 0.9;
}

.radial-gradient-overlay-blue {
  position: absolute;
  bottom: -10%;
  left: -5%;
  width: 50%;
  height: 50%;
  background: radial-gradient(circle, rgba(var(--bs-primary-rgb), 0.15) 0%, rgba(var(--bs-primary-rgb), 0) 70%);
  z-index: 2;
  opacity: 0.7;
}

.title-container {
  position: relative;
  padding: 2.5rem 2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  max-width: 650px;
  margin: 0 auto;
  z-index: 5;
  border-top: 3px solid var(--bs-orange);
}

.catalogue-title {
  position: relative;
  display: inline-block;
  margin-bottom: 0.5rem;
  color: #000;
  font-size: 2.5rem;
  font-weight: 700;
}

.gradient-underline {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--bs-orange) 30%, var(--bs-primary) 100%);
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

.catalogue-subtitle {
  color: var(--bs-gray-700);
  font-weight: 400;
}

.catalogue-wave {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  z-index: 2;
  line-height: 0;
}

.opacity-80 {
  opacity: 1;
  font-weight: 500;
  color: #000;
}

.filters-container {
  position: relative;
  margin-top: -70px;
  z-index: 10;
  padding: 0 1.25rem;
}

.filter-card {
  border-radius: 1.2rem;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06), 0 3px 15px rgba(0, 0, 0, 0.04);
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.categories-tabs {
  display: flex;
  justify-content: center;
  padding: 1.2rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgba(248, 249, 250, 0.5);
}

.scrollable-tabs {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  justify-content: flex-start;
  max-width: 100%;
  margin: 0 auto;
  padding: 0.5rem 0.75rem;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  position: relative;
}

.scrollable-tabs::-webkit-scrollbar {
  display: none; /* Chrome et Safari */
}

.scrollable-tabs::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 30px;
  background: linear-gradient(90deg, rgba(248, 249, 250, 0) 0%, rgba(248, 249, 250, 0.8) 100%);
  pointer-events: none;
  opacity: 0.8;
  z-index: 10;
}

.category-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: var(--bs-gray-600);
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.175);
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.category-tab:hover {
  transform: translateY(-3px);
  border-color: rgba(var(--bs-orange-rgb), 0.5);
  box-shadow: 0 5px 15px rgba(var(--bs-orange-rgb), 0.15);
  color: var(--bs-orange);
}

.category-tab.active {
  background: linear-gradient(135deg, var(--bs-orange) 0%, #e66c00 100%);
  color: white;
  border-color: transparent;
  box-shadow: 0 5px 15px rgba(var(--bs-orange-rgb), 0.25);
}

.category-tab.active:hover {
  box-shadow: 0 7px 20px rgba(var(--bs-orange-rgb), 0.35);
  transform: translateY(-4px) scale(1.02);
}

.category-tab i {
  transition: transform 0.3s ease;
}

.category-tab:hover i {
  transform: scale(1.2);
}

.search-filters {
  padding: 1.5rem;
  background-color: white;
}

.search-bar {
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .search-bar {
    margin-bottom: 0;
  }
}

.search-input {
  border-radius: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
}

.search-input:focus {
  border-color: rgba(var(--bs-orange-rgb), 0.5);
  box-shadow: 0 0 0 4px rgba(var(--bs-orange-rgb), 0.1);
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--bs-gray-500);
  font-size: 1rem;
}

.form-select {
  border-radius: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.02);
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background-position: right 1rem center;
}

.form-select:focus {
  border-color: rgba(var(--bs-orange-rgb), 0.5);
  box-shadow: 0 0 0 4px rgba(var(--bs-orange-rgb), 0.1);
}

.stock-filter {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
}

.form-check-input {
  width: 2.5rem;
  height: 1.25rem;
  margin-top: 0;
  transition: all 0.2s ease;
}

.form-check-input:checked {
  background-color: var(--bs-orange);
  border-color: var(--bs-orange);
}

.form-check-input:focus {
  box-shadow: 0 0 0 3px rgba(var(--bs-orange-rgb), 0.15);
}

.form-check-label {
  transition: color 0.2s ease;
  font-size: 0.95rem;
}

.form-check-input:checked ~ .form-check-label {
  color: var(--bs-orange);
}

.results-count {
  color: var(--bs-gray-600);
  font-size: 0.95rem;
}

.btn-reset {
  background: none;
  border: none;
  color: var(--bs-gray-600);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 2rem;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-reset:hover {
  background-color: rgba(var(--bs-orange-rgb), 0.1);
  color: var(--bs-orange);
}

.no-results {
  padding: 2rem 0;
}

.no-results-content {
  background-color: #f8f9fa;
  border-radius: 1rem;
  border: 1px dashed rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background: linear-gradient(135deg, var(--bs-orange) 0%, darken(var(--bs-orange), 10%) 100%);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 5px 15px rgba(var(--bs-orange-rgb), 0.2);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(var(--bs-orange-rgb), 0.3);
}

@media (max-width: 767px) {
  .catalogue-header {
    padding: 3rem 0 6rem;
  }
  
  .catalogue-title {
    font-size: 1.85rem;
  }
  
  .filters-container {
    margin-top: -50px;
    padding: 0 0.75rem;
  }
  
  .filter-card {
    border-radius: 1rem;
  }
  
  .categories-tabs {
    padding: 0.75rem 0.5rem 0.75rem 0.25rem;
  }
  
  .scrollable-tabs {
    padding: 0.25rem 0.5rem;
  }
  
  .category-tab {
    padding: 0.35rem 0.85rem;
    font-size: 0.8rem;
    gap: 0.25rem;
  }
  
  .category-tab i {
    font-size: 0.9rem;
  }
  
  .search-filters {
    padding: 1rem 1rem 1.25rem;
  }
  
  .stock-filter {
    margin-top: 0.25rem;
    justify-content: flex-start;
  }
  
  .search-input, .form-select {
    font-size: 0.85rem;
    padding: 0.45rem 1rem;
  }
  
  .search-icon {
    right: 12px;
  }
  
  /* Ajuster les colonnes pour mobile */
  .col-6 {
    padding-right: 0.25rem;
    padding-left: 0.25rem;
  }
  
  .row.g-3 {
    margin: 0 -0.25rem;
  }
}

@media (min-width: 992px) {
  .search-bar {
    max-width: 100%;
  }
  
  .scrollable-tabs {
    max-width: 90%;
  }
}

/* Icônes flottantes */
.floating-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.floating-icon {
  position: absolute;
  color: rgba(255, 140, 0, 0.7);
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.3));
  animation: floating 8s infinite ease-in-out;
  opacity: 0.7;
  font-size: 1.8rem;
}

.laptop-icon, .desktop-icon {
  font-size: 2.3rem;
  color: rgba(255, 140, 0, 0.8);
}

.phone-icon, .tablet-icon {
  font-size: 1.7rem;
}

.accessory-icon {
  font-size: 1.6rem;
  color: rgba(255, 140, 0, 0.75);
}

.storage-icon {
  font-size: 1.5rem;
  color: rgba(255, 140, 0, 0.65);
}

.tech-icon {
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.65);
}

/* Animation pour les icônes flottantes */
.floating-icon {
  animation-duration: calc(8s + (var(--i, 0) * 1s));
  animation-delay: calc(var(--i, 0) * 0.5s);
}

/* On crée plusieurs animations différentes */
.floating-icon:nth-child(3n) {
  animation-name: floating1;
}

.floating-icon:nth-child(3n+1) {
  animation-name: floating2;
}

.floating-icon:nth-child(3n+2) {
  animation-name: floating3;
}

@keyframes floating1 {
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-15px) rotate(3deg) scale(1.05);
  }
  50% {
    transform: translateY(5px) rotate(-2deg) scale(0.95);
  }
  75% {
    transform: translateY(-8px) rotate(1deg) scale(1.02);
  }
}

@keyframes floating2 {
  0%, 100% {
    transform: translateX(0) rotate(0deg) scale(1);
  }
  33% {
    transform: translateX(10px) rotate(2deg) scale(1.03);
  }
  66% {
    transform: translateX(-8px) rotate(-3deg) scale(0.97);
  }
}

@keyframes floating3 {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  30% {
    transform: translateY(-12px) translateX(8px) rotate(5deg);
  }
  60% {
    transform: translateY(8px) translateX(-5px) rotate(-3deg);
  }
}

/* Au survol des icônes, on les fait briller légèrement */
@media (hover: hover) {
  .floating-icon:hover {
    opacity: 1;
    color: var(--bs-orange);
    filter: drop-shadow(0 0 8px rgba(255, 140, 0, 0.5));
    animation-play-state: paused;
  }
}

/* Ajustements responsives */
@media (max-width: 768px) {
  .floating-icon {
    font-size: 1.2rem !important;
  }
  
  .laptop-icon, .desktop-icon {
    font-size: 1.4rem !important;
  }
}
</style> 