<template>
  <div>
    <section class="product-detail-section py-5">
      <div class="container" v-if="product">
        <!-- Fil d'Ariane -->
        <div class="breadcrumb-container mb-4 px-3 py-2 rounded-3 bg-light">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <NuxtLink to="/" class="text-decoration-none">
                  <i class="bi bi-house-door me-1"></i> Accueil
                </NuxtLink>
              </li>
              <li class="breadcrumb-item">
                <NuxtLink :to="`/catalogue?category=${category ? category.slug : 'tous'}`" class="text-decoration-none">
            {{ category ? category.name : 'Catalogue' }}
          </NuxtLink>
              </li>
              <li class="breadcrumb-item active text-orange fw-semibold" aria-current="page">{{ product.name }}</li>
            </ol>
          </nav>
        </div>
        
        <div class="row g-4 g-lg-5">
          <!-- Galerie du produit -->
          <div class="col-lg-6" data-aos="fade-right">
          <div class="product-gallery">
              <!-- Image principale -->
              <div class="main-image-wrapper position-relative mb-4 rounded-4 overflow-hidden shadow">
              <div 
                  class="product-main-image"
                  :style="{ background: getBrandGradient(product.brand, activeImageIndex) }"
              >
                  <!-- Image du produit si disponible -->
                  <img 
                    v-if="activeImage" 
                    :src="activeImage" 
                    :alt="product.name" 
                    class="w-100 h-100 object-fit-cover"
                    loading="lazy"
                  />
                  <!-- Placeholder si pas d'image -->
                  <template v-else>
                    <div class="brand-model-badge">{{ product.model || product.name.split(' ')[0] }}</div>
                    <span class="brand-initial">{{ product.brand.charAt(0) }}</span>
                  </template>
                  
                  <!-- Badge promo si applicable -->
                  <div v-if="product.promo" class="product-ribbon">Promo</div>
                </div>
              </div>
              
              <!-- Thumbnails -->
              <div class="thumbnails-wrapper d-flex justify-content-center gap-3 mb-4">
                <!-- Images du produit si disponibles -->
                <template v-if="productHasImages">
                  <div 
                    v-for="(image, index) in displayedImages" 
                    :key="index" 
                    class="thumbnail-item rounded-3 overflow-hidden shadow-sm"
                    :class="{ 'active': activeImageIndex === index }"
                    @click="setActiveImage(index)"
                  >
                    <div class="thumbnail-inner position-relative overflow-hidden">
                      <img 
                        :src="image" 
                        :alt="`Vue ${index + 1} de ${product.name}`" 
                        class="w-100 h-100 object-fit-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </template>
                
                <!-- Placeholders si pas d'images -->
                <template v-else>
                  <div 
                    v-for="i in 3" 
                    :key="i" 
                    class="thumbnail-item rounded-3 overflow-hidden shadow-sm"
                    :class="{ 'active': i === activeImageIndex }"
                    @click="setActiveImage(i)"
                  >
                    <div class="thumbnail-inner" :style="{ background: getBrandGradient(product.brand, i) }">
                    </div>
                  </div>
                </template>
              </div>
              
              <!-- Spécifications -->
              <div class="product-specs mt-4">
                <h2 class="specs-title fw-semibold fs-4 mb-4 border-start border-4 border-orange ps-3">Caractéristiques</h2>
                
                <!-- Message si aucune spécification n'est disponible -->
                <div v-if="!product.specifications || product.specifications.length === 0" 
                     class="text-center p-4 bg-light rounded-3">
                  <i class="bi bi-info-circle text-muted fs-4"></i>
                  <p class="text-muted mt-2 mb-0">Aucune spécification disponible pour ce produit</p>
                </div>
                
                <!-- Affichage dynamique des spécifications -->
                <div v-else class="row g-3">
                  <div class="col-md-6" v-for="(spec, index) in product.specifications" :key="spec.id || index">
                    <div class="spec-item d-flex gap-3 align-items-center p-3">
                      <div class="spec-icon text-orange">
                        <i :class="getSpecIcon(spec.name)"></i>
                      </div>
                      <div class="spec-text">
                        <div class="spec-label mb-0">{{ spec.name }}</div>
                        <div class="spec-value">{{ spec.value }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Informations produit -->
          <div class="col-lg-6" data-aos="fade-left">
            <div class="product-info-container">
              <!-- En-tête du produit -->
              <div class="product-header mb-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="brand-badge px-3 py-2 rounded-pill">{{ product.brand }}</span>
                  <span 
                    :class="[
                      'stock-badge rounded-pill px-3 py-2', 
                      product.in_stock ? 'stock-badge-success' : 'stock-badge-danger'
                    ]"
                  >
                    <i :class="['bi me-1', product.in_stock ? 'bi-check-circle' : 'bi-x-circle']"></i>
                {{ product.in_stock ? 'En stock' : 'Rupture de stock' }}
                  </span>
                </div>
                <h1 class="product-title display-5 fw-bold mb-3">{{ product.name }}</h1>
                
                <!-- Note et avis (simulés) -->
                <div class="rating-wrapper d-flex align-items-center gap-2 mb-3">
                  <div class="stars">
                    <i v-for="n in 5" :key="n" class="bi" :class="n <= 4 ? 'bi-star-fill' : 'bi-star'" style="color: #FFD700;"></i>
                  </div>
                  <span class="rating-count text-muted">(12 avis)</span>
                </div>
              </div>
              
              <!-- Prix -->
              <div class="product-price-container mb-4">
                <div class="d-flex align-items-baseline gap-3">
                  <div class="current-price display-6 fw-bold text-orange">{{ formatPrice(product.price) }} FCFA</div>
                  <div v-if="product.promo" class="old-price text-decoration-line-through text-muted fs-5">
                    {{ formatPrice(product.old_price || Math.round(product.price * 1.2)) }} FCFA
                  </div>
                </div>
                <div v-if="product.promo" class="savings-badge bg-success-subtle text-success small rounded-pill px-2 py-1 d-inline-block mt-2">
                  Économisez {{ calculateDiscount(product) }}%
              </div>
            </div>
            
              <!-- Description -->
              <div class="product-description mb-5">
                <h2 class="description-title fw-semibold fs-4 mb-4 border-start border-4 border-orange ps-3">Description</h2>
                <div class="description-text p-4 bg-light rounded-3 shadow-sm">
                  {{ product.long_description || product.description }}
            </div>
            </div>
            
              <!-- Actions -->
              <div class="product-actions mb-4">
                <div class="d-grid gap-3 d-md-flex">
                  <a 
                    v-if="product.in_stock"
                    :href="getWhatsAppLink(product)" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn btn-success btn-lg px-4 py-3 w-100 shine-effect d-flex align-items-center justify-content-center"
                  >
                    <i class="bi bi-whatsapp fs-4 me-2"></i> Commander sur WhatsApp
                  </a>
                  <button v-else class="btn btn-secondary btn-lg px-4 py-3 w-100 d-flex align-items-center justify-content-center" disabled>
                    <i class="bi bi-x-circle me-2"></i> Indisponible
                  </button>
                </div>
              </div>
              
              <!-- Information additionnelles -->
              <div class="product-additional rounded-4 p-4 bg-light">
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="guarantee-badge d-flex gap-3 align-items-center">
                      <div class="badge-icon text-orange">
                        <i class="bi bi-shield-check fs-2"></i>
                      </div>
                      <div class="badge-text">
                        <h4 class="fw-semibold mb-1 fs-6">Garantie Officielle</h4>
                        <p class="small text-muted mb-0">Tous nos produits sont 100% authentiques</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="delivery-badge d-flex gap-3 align-items-center">
                      <div class="badge-icon text-orange">
                        <i class="bi bi-truck fs-2"></i>
                      </div>
                      <div class="badge-text">
                        <h4 class="fw-semibold mb-1 fs-6">Livraison Express</h4>
                        <p class="small text-muted mb-0">Sous 24h à 72h au Cameroun</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- État de chargement -->
      <div v-else-if="loading" class="container">
        <div class="loading-container py-5">
          <div class="spinner-grow text-orange mb-3" role="status">
            <span class="visually-hidden">Chargement...</span>
          </div>
          <p class="text-muted">Chargement des informations produit...</p>
      </div>
    </div>
    
      <!-- Message d'erreur -->
      <div v-else class="container">
        <div class="error-container py-5 text-center">
          <div class="error-icon fs-1 text-danger mb-3">
            <i class="bi bi-exclamation-triangle"></i>
    </div>
          <h2 class="error-title fs-3 fw-bold mb-3">Produit non trouvé</h2>
          <p class="error-message text-muted mb-4">Le produit que vous recherchez n'existe pas ou a été supprimé.</p>
          <NuxtLink to="/catalogue?category=tous" class="btn btn-primary px-4 py-2 shine-effect">
            <i class="bi bi-grid me-2"></i> Voir tous les produits
      </NuxtLink>
    </div>
      </div>
    </section>
    
    <!-- Section produits similaires -->
    <section v-if="product && similarProducts.length > 0" class="similar-products-section py-5 bg-light">
      <div class="container">
        <div class="section-header text-center mb-5">
          <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill">Découvrez plus</span>
          <h2 class="section-title display-6 fw-bold mb-3">Produits similaires</h2>
          <div class="separator-line mx-auto mb-4"></div>
          <p class="lead col-lg-6 mx-auto text-muted">D'autres produits qui pourraient vous intéresser dans la catégorie {{ category?.name || 'Produits' }}</p>
        </div>
        
        <div class="row g-4">
          <div v-for="(similarProduct, index) in similarProducts" :key="similarProduct.id" class="col-md-6 col-lg-4">
            <div 
              class="product-card-wrapper h-100"
              data-aos="fade-up" 
              :data-aos-delay="`${index * 100}`"
            >
            <ProductCard :product="similarProduct" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import productsService from '~/services/products';
import categoriesService from '~/services/categories';

// SEO dynamique
const route = useRoute();
const slug = computed(() => route.params.slug);

// État du chargement
const loading = ref(true);
const product = ref(null);
const category = ref(null);
const categories = ref([]);
const allProducts = ref([]);
const activeImageIndex = ref(1);

// SEO
definePageMeta({
  title: null,
  description: null
});

// Formater les prix avec séparateur de milliers
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// Calcul de la remise en pourcentage
const calculateDiscount = (product) => {
  if (!product.promo || !product.old_price) {
    return Math.round(20); // 20% par défaut
  }
  
  const discount = ((product.old_price - product.price) / product.old_price) * 100;
  return Math.round(discount);
};

// Retourne un dégradé différent pour chaque marque et variation
const getBrandGradient = (brand, variation = 0) => {
  // Dégradés de base pour chaque marque
  const brandGradients = {
    'APPLE': 'linear-gradient(135deg, #A2AAAD 0%, #F5F5F7 100%)',
    'SAMSUNG': 'linear-gradient(135deg, #1428A0 0%, #1565C0 100%)',
    'XIAOMI': 'linear-gradient(135deg, #FF6700 0%, #FF9B33 100%)',
    'DELL': 'linear-gradient(135deg, #007DB8 0%, #00B2E3 100%)',
    'HP': 'linear-gradient(135deg, #0096D6 0%, #00BCD4 100%)',
    'HUAWEI': 'linear-gradient(135deg, #CF0A2C 0%, #FF5252 100%)',
    'LENOVO': 'linear-gradient(135deg, #E2231A 0%, #FF5252 100%)'
  };
  
  // Dégradé par défaut
  let gradient = brandGradients[brand] || 'linear-gradient(135deg, var(--bs-orange) 0%, #FFAB40 100%)';
  
  // Variation pour les thumbnails
  if (variation > 0) {
    const angles = [135, 45, 225];
    return gradient.replace('135deg', `${angles[variation % angles.length]}deg`);
  }
  
  return gradient;
};

// Changer l'image active
const setActiveImage = (index) => {
  activeImageIndex.value = index;
};

// Vérifier si le produit a des images
const productHasImages = computed(() => {
  if (!product.value) return false;
  
  // Vérifier si le produit a des images complètes (priorité 1)
  if (product.value.full_images && product.value.full_images.length > 0) {
    return true;
  }
  
  // Vérifier si le produit a des URLs d'images simples (priorité 2)
  if (product.value.images && product.value.images.length > 0) {
    return true;
  }
  
  // Vérifier si le produit a une image principale (priorité 3)
  if (product.value.main_image) {
    return true;
  }
  
  return false;
});

// Extraire les URLs des images pour l'affichage
const displayedImages = computed(() => {
  if (!product.value) return [];
  
  // Essayer d'abord avec full_images (plus complet)
  if (product.value.full_images && Array.isArray(product.value.full_images) && product.value.full_images.length > 0) {
    console.log('Utilisation de full_images:', product.value.full_images);
    // Trier pour que l'image principale soit en premier
    const sortedImages = [...product.value.full_images].sort((a, b) => {
      if (a.is_primary) return -1;
      if (b.is_primary) return 1;
      return 0;
    });
    
    // Extraire les URLs des images
    return sortedImages.slice(0, 3).map(img => img.image);
  }
  
  // Essayer ensuite avec les URLs simples
  if (product.value.images && Array.isArray(product.value.images) && product.value.images.length > 0) {
    console.log('Utilisation de images URLs simples');
    // Limiter à 3 images maximum
    return product.value.images.slice(0, 3);
  }
  
  // En dernier recours, utiliser l'image principale
  if (product.value.main_image) {
    console.log('Utilisation de main_image uniquement');
    return [product.value.main_image];
  }
  
  return [];
});

// Image actuellement sélectionnée
const activeImage = computed(() => {
  if (!product.value) return null;
  
  // Si des images sont disponibles dans displayedImages
  if (displayedImages.value && displayedImages.value.length > 0) {
    // Si l'index actif est valide, utiliser cette image
    if (activeImageIndex.value >= 0 && activeImageIndex.value < displayedImages.value.length) {
      return displayedImages.value[activeImageIndex.value];
    }
    // Sinon, utiliser la première image
    return displayedImages.value[0];
  }
  
  return null; // Les autres cas sont déjà couverts par displayedImages
});

// Générer le lien WhatsApp
const getWhatsAppLink = (product) => {
  const text = `Bonjour, je suis intéressé(e) par le produit ${product.name} au prix de ${formatPrice(product.price)} FCFA sur All Original. Pouvez-vous me donner plus d'informations ?`;
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/237XXXXXXXXX?text=${encodedText}`;
};

// Assigner des icônes bootstrap en fonction du nom de la spécification
const getSpecIcon = (specName) => {
  const name = specName.toLowerCase();
  
  // Mapping des noms de spécifications aux icônes Bootstrap
  const iconMapping = {
    'ram': 'bi-memory',
    'mémoire': 'bi-memory',
    'stockage': 'bi-device-hdd',
    'disque': 'bi-device-hdd',
    'ssd': 'bi-device-hdd',
    'processeur': 'bi-cpu-fill',
    'cpu': 'bi-cpu',
    'écran': 'bi-display',
    'affichage': 'bi-display',
    'batterie': 'bi-battery-full',
    'autonomie': 'bi-battery-charging',
    'caméra': 'bi-camera',
    'photo': 'bi-camera-fill',
    'appareil photo': 'bi-camera-fill',
    'résolution': 'bi-aspect-ratio',
    'os': 'bi-gear',
    'système': 'bi-gear-wide',
    'poids': 'bi-speedometer',
    'dimensions': 'bi-rulers',
    'connectivité': 'bi-wifi',
    'réseau': 'bi-reception-4',
    'bluetooth': 'bi-bluetooth',
    'usb': 'bi-usb-symbol',
    'couleur': 'bi-palette',
    'garantie': 'bi-shield-check'
  };
  
  // Parcourir les clés du mapping pour trouver une correspondance
  for (const [key, icon] of Object.entries(iconMapping)) {
    if (name.includes(key)) {
      return icon;
    }
  }
  
  // Icône par défaut si aucune correspondance n'est trouvée
  return 'bi-info-circle';
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
    // Chargement en parallèle des catégories et du produit
    const [productData, categoriesData] = await Promise.all([
      productsService.getProduct(slug.value),
      categoriesService.getAllCategories()
    ]);
    
    // Mise à jour des données
    product.value = productData;
    categories.value = categoriesData;
    
    // Débogage des images
    console.log('Images du produit:', productData.images);
    console.log('Image principale:', productData.primary_image);
    console.log('Images affichées:', displayedImages.value);
    
    if (product.value) {
      // Récupérer la catégorie du produit
      category.value = categories.value.find(c => c.id === product.value.category || c.slug === product.value.category);
      
      // Charger les produits similaires
      if (category.value) {
        const similarProductsData = await productsService.getAllProducts({ category: category.value.slug });
        allProducts.value = similarProductsData.filter(p => p.id !== product.value.id);
      }
      
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
/* Section détail produit */
.product-detail-section {
  padding-top: 6rem;
  padding-bottom: 3rem;
}

/* Fil d'ariane */
.breadcrumb-container {
  border-left: 4px solid var(--bs-orange);
}

.breadcrumb-item a {
  color: var(--bs-gray-600);
  transition: color 0.3s ease;
}

.breadcrumb-item a:hover {
  color: var(--bs-orange);
}

.text-orange {
  color: var(--bs-orange);
}

/* Galerie */
.product-main-image {
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s ease;
}

.brand-initial {
  font-size: 10rem;
  font-weight: bold;
  color: white;
  opacity: 0.8;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.brand-model-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.9rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-ribbon {
  position: absolute;
  top: 20px;
  right: -30px;
  background: var(--bs-orange);
  color: white;
  padding: 0.25rem 2rem;
  transform: rotate(45deg);
  z-index: 2;
  font-weight: 600;
  font-size: 0.85rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.main-image-wrapper:hover .product-main-image {
  transform: scale(1.03);
}

.thumbnails-wrapper {
  margin-top: 1.5rem;
}

.thumbnail-item {
  width: 90px;
  height: 90px;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.thumbnail-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.thumbnail-item:hover .thumbnail-inner {
  transform: scale(1.1);
}

.thumbnail-item.active {
  border-color: var(--bs-orange);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.thumbnail-item.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid var(--bs-orange);
  transform: translateX(-50%) rotate(180deg);
}

/* Spécifications */
.product-specs {
  margin-bottom: 2rem;
}

.spec-item {
  background-color: #f8f9fa;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
}

.spec-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  border-left: 3px solid var(--bs-orange);
}

.spec-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.spec-label {
  font-size: 0.75rem;
  color: var(--bs-gray-600);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.spec-value {
  font-weight: 600;
  color: var(--bs-gray-800);
  font-size: 0.95rem;
  line-height: 1.2;
}

/* Infos produit */
.product-info-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.brand-badge {
  background-color: var(--bs-primary);
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 0.85rem;
}

.stock-badge {
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

.stock-badge-success {
  background-color: rgba(var(--bs-success-rgb), 0.15);
  color: var(--bs-success);
}

.stock-badge-danger {
  background-color: rgba(var(--bs-danger-rgb), 0.15);
  color: var(--bs-danger);
}

.product-title {
  line-height: 1.2;
  color: var(--bs-gray-800);
}

/* Description */
.description-text {
  line-height: 1.9;
  color: var(--bs-gray-700);
  font-size: 1.05rem;
  border-left: 4px solid var(--bs-orange);
}

/* Boutons */
.shine-effect {
  position: relative;
  overflow: hidden;
}

.shine-effect::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(-45deg);
  animation: shine 3s infinite;
  opacity: 0;
}

.shine-effect:hover::after {
  opacity: 1;
}

@keyframes shine {
  0% {
    left: -100%;
    opacity: 0.7;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

/* Badges garantie et livraison */
.product-additional {
  border-left: 4px solid var(--bs-orange);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

/* Section des produits similaires */
.similar-products-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  position: relative;
  overflow: hidden;
}

.similar-products-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 10% 20%, rgba(255, 140, 0, 0.03) 0%, transparent 70%),
                    radial-gradient(circle at 90% 80%, rgba(0, 123, 255, 0.03) 0%, transparent 70%);
  z-index: 0;
}

.similar-products-section .container {
  position: relative;
  z-index: 1;
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

/* États de chargement et d'erreur */
.loading-container,
.error-container {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Responsive */
@media (max-width: 991px) {
  .product-main-image {
    height: 400px;
  }
  
  .brand-initial {
    font-size: 8rem;
  }
  
  .product-info-container {
    margin-top: 1rem;
  }
}

@media (max-width: 767px) {
  .product-main-image {
    height: 350px;
}

  .brand-initial {
    font-size: 7rem;
  }
  
  .spec-item {
    padding: 0.75rem;
}

  .spec-icon {
    font-size: 1.3rem;
  }
  
  .product-title {
    font-size: 2rem;
}

  .thumbnail-item {
    width: 70px;
    height: 70px;
}
}

@media (max-width: 575px) {
  .product-detail-section {
    padding-top: 5rem;
    padding-bottom: 2rem;
  }
  
  .product-main-image {
    height: 280px;
}

  .brand-initial {
    font-size: 5.5rem;
}

  .thumbnail-item {
    width: 60px;
    height: 60px;
}

  .product-title {
    font-size: 1.5rem;
  }
  
  .current-price {
    font-size: 1.75rem;
}

  .spec-item {
    padding: 0.5rem;
}

  .spec-icon {
    font-size: 1.1rem;
  }
  
  .spec-value {
    font-size: 0.85rem;
  }
  
  .similar-products-section {
    padding: 4rem 0;
  }
}
</style> 