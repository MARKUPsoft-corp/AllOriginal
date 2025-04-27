<template>
  <div>
    <section class="catalogue-header py-5 bg-gradient position-relative overflow-hidden">
      <div class="particles-container" id="catalogue-particles"></div>
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center" data-aos="fade-up">
            <h1 class="catalogue-title display-4 fw-bold mb-3">Catalogue</h1>
            <p class="catalogue-subtitle lead mb-4">Découvrez notre gamme complète de produits high-tech</p>
            <div class="header-separator mx-auto mb-4"></div>
            <div class="d-inline-block position-relative">
              <span class="catalogue-badge badge rounded-pill">
                <i class="bi bi-check-circle-fill me-1"></i> Produits authentiques
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="catalogue-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <section class="catalogue-content section py-5">
      <div class="container">
        <!-- Filtres et catégories -->
        <div class="filters mb-5">
          <div class="filter-header mb-4 d-flex justify-content-between align-items-center">
            <h2 class="filter-title mb-0 h5">
              <i class="bi bi-funnel-fill me-2 text-primary"></i>
              Filtrer les produits
            </h2>
            <button @click="resetFilters" class="btn btn-sm btn-outline-secondary d-flex align-items-center">
              <i class="bi bi-arrow-counterclockwise me-2"></i>
              Réinitialiser
            </button>
          </div>
          
          <div class="categories-tabs mb-4">
            <button 
              v-for="cat in categories" 
              :key="cat.id"
              class="category-tab"
              :class="{ 'active': activeCategory === cat.slug }"
              @click="setCategory(cat.slug)"
            >
              <span class="category-icon">
                <i v-if="cat.icon === 'smartphone'" class="bi bi-phone"></i>
                <i v-else-if="cat.icon === 'laptop'" class="bi bi-laptop"></i>
                <i v-else-if="cat.icon === 'tablet'" class="bi bi-tablet"></i>
                <i v-else-if="cat.icon === 'headphones'" class="bi bi-headphones"></i>
                <i v-else class="bi bi-box"></i>
              </span>
              {{ cat.name }}
            </button>
            <button 
              class="category-tab"
              :class="{ 'active': activeCategory === 'tous' }"
              @click="setCategory('tous')"
            >
              <span class="category-icon">
                <i class="bi bi-grid-3x3-gap"></i>
              </span>
              Tous les produits
            </button>
          </div>
          
          <div class="search-filters">
            <div class="row g-3">
              <div class="col-lg-5">
                <div class="search-bar position-relative">
                  <i class="bi bi-search search-icon"></i>
                  <input 
                    type="text" 
                    placeholder="Rechercher un produit..." 
                    v-model="searchQuery"
                    class="search-input form-control form-control-lg shadow-sm"
                  />
                  <button v-if="searchQuery" @click="searchQuery = ''" class="btn-clear-search">
                    <i class="bi bi-x"></i>
                  </button>
                </div>
              </div>
              
              <div class="col-lg-7">
                <div class="filter-dropdowns d-flex flex-wrap gap-3">
                  <div class="filter-dropdown">
                    <div class="select-wrapper">
                      <select v-model="selectedBrand" class="filter-select form-select">
                        <option value="">Toutes les marques</option>
                        <option v-for="brand in availableBrands" :key="brand" :value="brand">{{ brand }}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="filter-dropdown">
                    <div class="select-wrapper">
                      <select v-model="priceRange" class="filter-select form-select">
                        <option value="">Tous les prix</option>
                        <option value="low">Prix croissant</option>
                        <option value="high">Prix décroissant</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="stock-filter">
                    <label class="filter-checkbox form-check">
                      <input type="checkbox" v-model="inStockOnly" class="form-check-input me-2" />
                      <span class="form-check-label">En stock uniquement</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Étiquette résultats -->
        <div class="results-header mb-4 d-flex justify-content-between align-items-center" v-if="filteredProducts.length > 0">
          <h2 class="h6 mb-0 text-muted">
            <span class="results-count fw-bold">{{ filteredProducts.length }}</span> produits trouvés
          </h2>
          <div class="view-options d-flex gap-2">
            <button class="btn btn-sm btn-outline-secondary active px-3">
              <i class="bi bi-grid-3x3-gap"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary px-3">
              <i class="bi bi-list"></i>
            </button>
          </div>
        </div>

        <!-- Résultats -->
        <div v-if="filteredProducts.length > 0" class="products-grid">
          <div 
            v-for="(product, index) in filteredProducts" 
            :key="product.id"
            class="product-card-wrapper"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <ProductCard :product="product" />
          </div>
        </div>
        
        <div v-else class="no-results">
          <div class="no-results-content">
            <div class="no-results-icon">
              <i class="bi bi-search text-primary"></i>
            </div>
            <h3 class="mt-3 fw-bold">Aucun produit trouvé</h3>
            <p class="text-muted mb-4">Essayez de modifier vos filtres ou d'élargir vos critères de recherche</p>
            <button @click="resetFilters" class="btn btn-primary mt-2 btn-reset-filters">
              <i class="bi bi-arrow-counterclockwise me-2"></i>
              Réinitialiser les filtres
            </button>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination-container d-flex justify-content-center mt-5">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true"><i class="bi bi-chevron-left"></i></span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true"><i class="bi bi-chevron-right"></i></span>
                </a>
              </li>
            </ul>
          </nav>
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

// Mise à jour de l'URL lors du changement de catégorie
const setCategory = (category) => {
  activeCategory.value = category;
  router.push({ query: { ...route.query, category } });
};

// Réinitialisation des filtres
const resetFilters = () => {
  searchQuery.value = '';
  selectedBrand.value = '';
  priceRange.value = '';
  inStockOnly.value = false;
};

// Observer les changements d'URL
watch(() => route.query.category, (newCategory) => {
  if (newCategory) {
    activeCategory.value = newCategory;
  } else {
    activeCategory.value = 'tous';
  }
});
</script>

<style scoped>
.catalogue-header {
  background: linear-gradient(135deg, var(--bs-primary) 0%, #2c66c4 100%);
  color: white;
  padding: 4rem 0 6rem;
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;
}

.catalogue-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  position: relative;
  letter-spacing: -0.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.catalogue-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.header-separator {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, white, rgba(255, 255, 255, 0.2));
  border-radius: 2px;
  margin: 1.5rem auto;
}

.catalogue-badge {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: float 3s ease-in-out infinite;
}

.catalogue-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.catalogue-content {
  padding-top: 2rem;
}

.filters {
  margin-bottom: 2rem;
}

.filter-header {
  margin-bottom: 1.5rem;
}

.filter-title {
  font-weight: 700;
  color: var(--bs-gray-800);
}

.categories-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.category-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 2rem;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  font-weight: 500;
  color: #495057;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.category-tab:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
}

.category-tab.active {
  background-color: var(--bs-primary);
  color: white;
  border-color: var(--bs-primary);
  box-shadow: 0 5px 15px rgba(var(--bs-primary-rgb), 0.2);
}

.category-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.search-filters {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.search-bar {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #adb5bd;
  z-index: 2;
}

.search-input {
  padding-left: 2.75rem;
  border-radius: 0.5rem;
  height: 50px;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: white;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);
}

.btn-clear-search {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #adb5bd;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.filter-dropdowns {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-dropdown {
  flex: 1;
  min-width: 200px;
}

.select-wrapper {
  position: relative;
}

.filter-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  background-color: white;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-select:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 3px rgba(var(--bs-primary-rgb), 0.15);
}

.stock-filter {
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
}

.filter-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0;
}

.form-check-input:checked {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.results-header {
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.results-count {
  color: var(--bs-primary);
}

.view-options button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.view-options button.active {
  background-color: var(--bs-gray-200);
  border-color: var(--bs-gray-400);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  position: relative;
  min-height: 200px;
}

.product-card-wrapper {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  border-radius: 0.75rem;
  overflow: hidden;
  height: 100%;
  position: relative;
  will-change: transform;
  transform: perspective(1000px) translateZ(0);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.product-card-wrapper:hover {
  transform: translateY(-10px) scale(1.02);
  z-index: 10;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(var(--bs-primary-rgb), 0.08);
}

.product-card-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 0.75rem;
  opacity: 0;
  background: radial-gradient(circle at 50% 0%, rgba(var(--bs-primary-rgb), 0.12), transparent 70%);
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.product-card-wrapper:hover::after {
  opacity: 1;
}

.product-card-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 300%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
  border-radius: 0.75rem;
}

.product-card-wrapper:hover::before {
  opacity: 1;
}

.no-results {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f0f1f2 100%);
  border-radius: 1rem;
  animation: fadeIn 0.7s ease;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.03);
  position: relative;
  overflow: hidden;
}

.no-results::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(var(--bs-primary-rgb), 0.03) 0%, transparent 70%);
  z-index: 0;
}

.no-results-content {
  text-align: center;
  max-width: 500px;
  position: relative;
  z-index: 1;
}

.no-results-icon {
  background: rgba(var(--bs-primary-rgb), 0.1);
  width: 90px;
  height: 90px;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 1rem;
  animation: pulse 3s infinite;
  box-shadow: 0 0 0 10px rgba(var(--bs-primary-rgb), 0.03), 0 0 0 20px rgba(var(--bs-primary-rgb), 0.01);
  position: relative;
}

.no-results-icon::after {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 2px dashed rgba(var(--bs-primary-rgb), 0.2);
  animation: spin 20s linear infinite;
}

.btn-reset-filters {
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(var(--bs-primary-rgb), 0.15);
  position: relative;
  overflow: hidden;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.btn-reset-filters:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(var(--bs-primary-rgb), 0.2);
}

.btn-reset-filters::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.btn-reset-filters:hover::after {
  opacity: 1;
  animation: shineButton 1.5s forwards;
}

.pagination-container {
  margin-top: 4rem;
  margin-bottom: 3rem;
  position: relative;
}

.pagination-container::before {
  content: '';
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  width: 100px;
  background: linear-gradient(90deg, transparent, rgba(var(--bs-primary-rgb), 0.3), transparent);
}

.pagination {
  display: inline-flex;
  background-color: white;
  border-radius: 2rem;
  padding: 0.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
}

.pagination:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.pagination .page-item:first-child .page-link {
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  padding-left: 1.25rem;
}

.pagination .page-item:last-child .page-link {
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  padding-right: 1.25rem;
}

.pagination .page-link {
  color: var(--bs-gray-800);
  border: none;
  margin: 0;
  padding: 0.75rem 1.2rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  z-index: 1;
  min-width: 45px;
  text-align: center;
}

.pagination .page-link:hover:not(.active) {
  background-color: var(--bs-gray-100);
  color: var(--bs-primary);
  transform: translateY(-2px);
}

.pagination .page-item.active .page-link {
  background-color: var(--bs-primary);
  color: white;
  box-shadow: 0 5px 15px rgba(var(--bs-primary-rgb), 0.2);
}

.pagination .page-item.active .page-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--bs-primary) 0%, rgba(var(--bs-primary-rgb), 0.8) 100%);
  border-radius: inherit;
  z-index: -1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0.4);
    transform: scale(1);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(var(--bs-primary-rgb), 0);
    transform: scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0);
    transform: scale(1);
  }
}

@keyframes shineButton {
  0% {
    left: -100%;
    opacity: 0.7;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .catalogue-header h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 992px) {
  .catalogue-header {
    padding: 3rem 1rem;
  }

  .filters-section {
    padding: 1.5rem;
  }

  .category-tabs {
    overflow-x: auto;
    padding-bottom: 0.5rem;
    mask-image: linear-gradient(to right, black 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
  }

  .category-tabs .nav-link {
    min-width: auto;
    white-space: nowrap;
    padding: 0.75rem 1.25rem;
  }

  .filter-dropdowns {
    flex-direction: column;
    width: 100%;
  }

  .filter-dropdowns .dropdown {
    width: 100%;
    margin-bottom: 0.75rem;
  }

  .search-box {
    width: 100%;
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .catalogue-header {
    padding: 2.5rem 1rem;
  }

  .catalogue-header h1 {
    font-size: 2rem;
  }

  .catalogue-header p {
    font-size: 1rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.25rem;
  }

  .filters-container {
    gap: 1rem;
    flex-direction: column;
  }

  .active-filters {
    margin-top: 0.5rem;
  }

  .pagination .page-link {
    padding: 0.6rem 1rem;
    min-width: 40px;
  }

  .product-card-wrapper:hover {
    transform: translateY(-5px) scale(1.01);
  }
}

@media (max-width: 576px) {
  .catalogue-header {
    padding: 2rem 0.5rem;
  }

  .catalogue-header h1 {
    font-size: 1.75rem;
  }

  .filters-section {
    padding: 1rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  .no-results {
    padding: 2rem 1rem;
  }

  .no-results-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }

  .pagination .page-link {
    padding: 0.5rem 0.8rem;
    min-width: 36px;
    font-size: 0.9rem;
  }
}

/* Animations and transitions */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-leave-active {
  position: absolute;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(var(--bs-light-rgb), 0.8);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(var(--bs-gray-500-rgb), 0.4);
  border-radius: 10px;
  border: 2px solid rgba(var(--bs-light-rgb), 0.8);
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--bs-primary-rgb), 0.6);
}

/* Page transition effect */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style> 