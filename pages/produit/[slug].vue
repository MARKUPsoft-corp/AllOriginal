<template>
  <div>
    <div v-if="product" class="product-detail">
      <div class="container">
        <!-- Fil d'Ariane -->
        <div class="breadcrumb">
          <NuxtLink to="/" class="breadcrumb-link">Accueil</NuxtLink>
          <span class="breadcrumb-separator">›</span>
          <NuxtLink :to="`/catalogue?category=${category ? category.slug : 'tous'}`" class="breadcrumb-link">
            {{ category ? category.name : 'Catalogue' }}
          </NuxtLink>
          <span class="breadcrumb-separator">›</span>
          <span class="breadcrumb-current">{{ product.name }}</span>
        </div>
        
        <div class="product-content">
          <div class="product-gallery">
            <div class="product-main-image">
              <div 
                class="product-placeholder" 
                :style="{ backgroundColor: getBrandColor(product.brand) }"
              >
                {{ product.brand.charAt(0) }}
              </div>
            </div>
            <div class="product-thumbnails">
              <div 
                v-for="i in 2" 
                :key="i" 
                class="thumbnail"
                :class="{ 'active': i === 1 }"
              >
                <div class="thumbnail-placeholder" :style="{ backgroundColor: getBrandColor(product.brand, i) }"></div>
              </div>
            </div>
          </div>
          
          <div class="product-info">
            <div class="product-header">
              <span class="product-brand">{{ product.brand }}</span>
              <h1 class="product-title">{{ product.name }}</h1>
              <div class="product-stock" :class="{ 'in-stock': product.in_stock, 'out-of-stock': !product.in_stock }">
                {{ product.in_stock ? 'En stock' : 'Rupture de stock' }}
              </div>
            </div>
            
            <div class="product-price">{{ formatPrice(product.price) }} FCFA</div>
            
            <div class="product-description">
              <h2 class="description-title">Description</h2>
              <p class="description-text">{{ product.long_description || product.description }}</p>
            </div>
            
            <div class="product-action">
              <WhatsAppButton 
                :product-name="product.name" 
                :disabled="!product.in_stock" 
              />
            </div>
            
            <div class="product-additional">
              <div class="product-guarantee">
                <div class="guarantee-icon">🛡️</div>
                <div class="guarantee-text">
                  <strong>Qualité Garantie</strong>
                  <p>Produit 100% authentique avec garantie fabricant</p>
                </div>
              </div>
              
              <div class="product-delivery">
                <div class="delivery-icon">🚚</div>
                <div class="delivery-text">
                  <strong>Livraison Rapide</strong>
                  <p>Partout au Cameroun sous 24h à 72h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Chargement du produit...</p>
    </div>
    
    <div v-else class="error-container">
      <div class="error-icon">⚠️</div>
      <h2 class="error-title">Produit non trouvé</h2>
      <p class="error-message">Le produit que vous recherchez n'existe pas ou a été supprimé.</p>
      <NuxtLink to="/catalogue?category=tous" class="error-button">
        Voir tous les produits
      </NuxtLink>
    </div>
    
    <!-- Section produits similaires -->
    <section v-if="product && similarProducts.length > 0" class="similar-products section">
      <div class="container">
        <h2 class="section-title">Produits similaires</h2>
        <div class="products-grid">
          <div v-for="similarProduct in similarProducts" :key="similarProduct.id" class="product-item">
            <ProductCard :product="similarProduct" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// SEO dynamique
const route = useRoute();
const slug = computed(() => route.params.slug);

// État du chargement
const loading = ref(true);
const product = ref(null);
const category = ref(null);
const categories = ref([]);
const allProducts = ref([]);
const mainImage = ref('');

// SEO
definePageMeta({
  title: null,
  description: null
});

// Formater les prix avec séparateur de milliers
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// Retourne une couleur différente pour chaque marque et variation
const getBrandColor = (brand, variation = 0) => {
  // Couleurs de base pour chaque marque
  const brandColors = {
    'APPLE': '#A2AAAD',
    'SAMSUNG': '#1428A0',
    'XIAOMI': '#FF6700',
    'DELL': '#007DB8',
    'HP': '#0096D6'
  };
  
  // Variation de la teinte pour les thumbnails
  let color = brandColors[brand] || '#FFA500'; // Couleur par défaut
  
  if (variation > 0) {
    // Assombrir légèrement pour les thumbnails
    return color + '99'; // Ajoute une transparence
  }
  
  return color;
};

// Produits similaires (même catégorie, différent ID)
const similarProducts = computed(() => {
  if (!product.value) return [];
  
  return allProducts.value
    .filter(p => p.category_id === product.value.category_id && p.id !== product.value.id)
    .slice(0, 3);
});

// Récupération des données du produit
onMounted(async () => {
  try {
    // Chargement des catégories
    const categoriesResponse = await fetch('/data/categories.json');
    categories.value = await categoriesResponse.json();
    
    // Chargement de tous les produits
    const productsResponse = await fetch('/data/products.json');
    allProducts.value = await productsResponse.json();
    
    // Recherche du produit par slug
    product.value = allProducts.value.find(p => p.slug === slug.value);
    
    if (product.value) {
      // Définir l'image principale (maintenant un placeholder)
      mainImage.value = product.value.images[0];
      
      // Récupérer la catégorie du produit
      category.value = categories.value.find(c => c.id === product.value.category_id);
      
      // Mettre à jour les métadonnées SEO
      const pageTitle = `${product.value.name} - All Original`;
      const pageDescription = product.value.description;
      
      // Mettre à jour le titre et la description de la page
      useHead({
        title: pageTitle,
        meta: [
          { name: 'description', content: pageDescription },
          { property: 'og:title', content: pageTitle },
          { property: 'og:description', content: pageDescription },
          { property: 'og:type', content: 'product' }
        ]
      });
    }
    
    loading.value = false;
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
    loading.value = false;
  }
});
</script>

<style scoped>
.product-detail {
  padding: 2rem 0;
}

.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  font-size: 0.875rem;
}

.breadcrumb-link {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: var(--primary-color);
}

.breadcrumb-separator {
  margin: 0 0.5rem;
  color: var(--border-color);
}

.breadcrumb-current {
  color: var(--primary-color);
  font-weight: 500;
}

.product-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.product-gallery {
  flex: 1;
}

.product-main-image {
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

/* Placeholder pour l'image principale */
.product-placeholder {
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  color: var(--light-color);
  font-size: 6rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-thumbnails {
  display: flex;
  gap: 0.5rem;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 0.375rem;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumbnail.active {
  border-color: var(--primary-color);
}

.thumbnail-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
}

.product-info {
  flex: 1;
}

.product-header {
  margin-bottom: 1rem;
}

.product-brand {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--secondary-color);
  color: var(--light-color);
  margin-bottom: 0.5rem;
}

.product-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.product-stock {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}

.in-stock {
  background-color: var(--success-color);
  color: var(--light-color);
}

.out-of-stock {
  background-color: var(--danger-color);
  color: var(--light-color);
}

.product-price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.product-description {
  margin-bottom: 2rem;
}

.description-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.description-text {
  line-height: 1.7;
  color: var(--text-color);
}

.product-action {
  margin-bottom: 2rem;
}

.product-additional {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.product-guarantee,
.product-delivery {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.guarantee-icon,
.delivery-icon {
  font-size: 2rem;
  color: var(--primary-color);
}

.guarantee-text p,
.delivery-text p {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--text-color);
}

/* Loading and Error States */
.loading-container,
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  text-align: center;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--gray-color);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.error-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--danger-color);
}

.error-message {
  margin-bottom: 2rem;
  color: var(--text-color);
}

.error-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: var(--light-color);
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.error-button:hover {
  background-color: darken(var(--primary-color), 10%);
  transform: translateY(-2px);
}

/* Similar Products Section */
.similar-products {
  background-color: var(--gray-color);
  padding: 3rem 0;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--secondary-color);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .product-content {
    flex-direction: row;
  }
  
  .product-additional {
    flex-direction: row;
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