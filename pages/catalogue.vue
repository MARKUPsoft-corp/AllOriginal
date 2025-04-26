<template>
  <div>
    <section class="catalogue-header">
      <div class="container">
        <h1 class="catalogue-title">Catalogue</h1>
        <p class="catalogue-subtitle">Découvrez notre gamme complète de produits high-tech</p>
      </div>
    </section>
    
    <section class="catalogue-content section">
      <div class="container">
        <!-- Filtres et catégories -->
        <div class="filters">
          <div class="categories-tabs">
            <button 
              v-for="cat in categories" 
              :key="cat.id"
              class="category-tab"
              :class="{ 'active': activeCategory === cat.slug }"
              @click="setCategory(cat.slug)"
            >
              <span v-if="cat.icon === 'smartphone'">📱</span>
              <span v-else-if="cat.icon === 'laptop'">💻</span>
              <span v-else-if="cat.icon === 'tablet'">📱</span>
              <span v-else-if="cat.icon === 'headphones'">🎧</span>
              <span v-else>📦</span>
              {{ cat.name }}
            </button>
            <button 
              class="category-tab"
              :class="{ 'active': activeCategory === 'tous' }"
              @click="setCategory('tous')"
            >
              <span>📦</span>
              Tous les produits
            </button>
          </div>
          
          <div class="search-filters">
            <div class="search-bar">
              <input 
                type="text" 
                placeholder="Rechercher un produit..." 
                v-model="searchQuery"
                class="search-input"
              />
              <button class="search-button">🔍</button>
            </div>
            
            <div class="filter-dropdowns">
              <div class="filter-dropdown">
                <select v-model="selectedBrand" class="filter-select">
                  <option value="">Toutes les marques</option>
                  <option v-for="brand in availableBrands" :key="brand" :value="brand">{{ brand }}</option>
                </select>
              </div>
              
              <div class="filter-dropdown">
                <select v-model="priceRange" class="filter-select">
                  <option value="">Tous les prix</option>
                  <option value="low">Prix croissant</option>
                  <option value="high">Prix décroissant</option>
                </select>
              </div>
              
              <div class="stock-filter">
                <label class="filter-checkbox">
                  <input type="checkbox" v-model="inStockOnly" />
                  <span>En stock uniquement</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Résultats -->
        <div v-if="filteredProducts.length > 0" class="products-grid">
          <div v-for="product in filteredProducts" :key="product.id" class="product-item">
            <ProductCard :product="product" />
          </div>
        </div>
        
        <!-- Message si aucun résultat -->
        <div v-else class="no-results">
          <p>Aucun produit ne correspond à vos critères de recherche.</p>
          <button @click="resetFilters" class="reset-button">Réinitialiser les filtres</button>
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
  background-color: var(--gray-color);
  padding: 3rem 0;
  text-align: center;
}

.catalogue-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.catalogue-subtitle {
  font-size: 1.125rem;
  color: var(--text-color);
}

.catalogue-content {
  padding-top: 2rem;
}

.filters {
  margin-bottom: 2rem;
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
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--light-color);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.category-tab.active {
  background-color: var(--primary-color);
  color: var(--light-color);
  border-color: var(--primary-color);
}

.search-filters {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-bar {
  display: flex;
  position: relative;
}

.search-input {
  flex-grow: 1;
  padding: 0.75rem 1rem;
  padding-right: 3rem;
  border-radius: 0.375rem;
  border: 1px solid var(--border-color);
  font-size: 1rem;
}

.search-button {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
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

.filter-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid var(--border-color);
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em;
}

.stock-filter {
  display: flex;
  align-items: center;
}

.filter-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

.no-results {
  text-align: center;
  padding: 3rem;
  border: 1px dashed var(--border-color);
  border-radius: 0.5rem;
}

.reset-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: var(--light-color);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

@media (min-width: 768px) {
  .search-filters {
    flex-direction: row;
    align-items: center;
  }
  
  .search-bar {
    flex: 2;
  }
  
  .filter-dropdowns {
    flex: 3;
  }
  
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 