<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">High-Tech <span class="hero-highlight">Premium</span></h1>
          <p class="hero-description">
            Découvrez notre sélection complète de produits technologiques haut de gamme.
          </p>
          <NuxtLink to="/catalogue?category=tous" class="hero-button">
            Voir le catalogue
          </NuxtLink>
        </div>
        <div class="hero-image">
          <div class="placeholder-image"></div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="section categories-section">
      <div class="container">
        <h2 class="section-title">Nos Catégories</h2>
        <p class="section-subtitle">Explorez nos différentes gammes de produits</p>
        
        <div class="categories-grid">
          <div v-for="category in categories" :key="category.id" class="category-item">
            <CategoryCard :category="category" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="section featured-section">
      <div class="container">
        <h2 class="section-title">Produits Populaires</h2>
        <p class="section-subtitle">Découvrez nos produits les plus demandés</p>
        
        <div class="products-grid">
          <div v-for="product in featuredProducts" :key="product.id" class="product-item">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services-section">
      <div class="container">
        <div class="services-grid">
          <div class="service-item">
            <div class="service-icon">🛡️</div>
            <h3 class="service-title">Qualité Garantie</h3>
            <p class="service-description">
              Tous nos produits sont authentiques et bénéficient d'une garantie constructeur.
            </p>
          </div>
          
          <div class="service-item">
            <div class="service-icon">🚚</div>
            <h3 class="service-title">Livraison Rapide</h3>
            <p class="service-description">
              Livraison partout au Cameroun sous 24h à 72h selon votre localisation.
            </p>
          </div>
          
          <div class="service-item">
            <div class="service-icon">💬</div>
            <h3 class="service-title">Service Client</h3>
            <p class="service-description">
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// SEO
definePageMeta({
  title: 'All Original - Boutique High-Tech Premium au Cameroun',
  description: 'Découvrez notre sélection complète de produits technologiques haut de gamme. Téléphones, ordinateurs et accessoires high-tech disponibles à Douala, Cameroun.'
});

// Données
const categories = ref([]);
const featuredProducts = ref([]);

// Récupération des données
onMounted(async () => {
  try {
    // Chargement des catégories
    const categoriesResponse = await fetch('/data/categories.json');
    categories.value = await categoriesResponse.json();
    
    // Chargement des produits mis en avant
    const productsResponse = await fetch('/data/products.json');
    const products = await productsResponse.json();
    featuredProducts.value = products.filter(product => product.featured);
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
  }
});
</script>

<style scoped>
/* Hero Section */
.hero {
  background-color: var(--light-color);
  padding: 4rem 0;
  overflow: hidden;
}

.hero .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.hero-content {
  text-align: center;
  max-width: 600px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.hero-highlight {
  color: var(--primary-color);
  display: block;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-button {
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--light-color);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.hero-button:hover {
  background-color: darken(var(--primary-color), 10%);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 165, 0, 0.2);
}

.hero-image {
  max-width: 100%;
  height: auto;
}

/* Ajout du placeholder pour l'image */
.placeholder-image {
  width: 300px;
  height: 500px;
  background-color: var(--primary-color);
  border-radius: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.placeholder-image::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

/* Section Styles */
.section {
  padding: 4rem 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.section-subtitle {
  font-size: 1.125rem;
  text-align: center;
  color: var(--text-color);
  margin-bottom: 3rem;
}

/* Categories Section */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

.category-item {
  height: 100%;
}

/* Featured Products Section */
.products-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

.product-item {
  height: 100%;
}

/* Services Section */
.services-section {
  background-color: var(--gray-color);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

.service-item {
  background-color: var(--light-color);
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.service-description {
  color: var(--text-color);
  line-height: 1.6;
}

/* Responsive */
@media (min-width: 768px) {
  .hero .container {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
  
  .hero-content {
    text-align: left;
  }
  
  .hero-highlight {
    display: inline;
  }
  
  .categories-grid,
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .categories-grid,
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 