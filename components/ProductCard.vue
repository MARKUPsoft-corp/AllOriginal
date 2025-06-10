<template>
  <!-- Carte produit unique responsive -->
  <div class="product-card shine-effect-container responsive-product-card">
    <div class="product-brand">
      <span class="brand-badge">{{ product.brand }}</span>
      <span class="stock-badge" :class="product.in_stock ? 'stock-badge-success' : 'stock-badge-danger'">
        {{ product.in_stock ? 'En stock' : 'Rupture' }}
      </span>
    </div>
    
    <div class="product-image">
      <!-- Image du produit avec Cloudinary -->
      <CloudinaryImage
        v-if="product.main_image"
        :src="product.main_image"
        :alt="product.name"
        :placeholder-text="product.brand.charAt(0)"
        image-class="product-img shadow-lg rounded-4 tilt-effect"
        :width="400"
        :height="400"
        :crop="'fill'"
        :gravity="'auto'"
        loading="lazy"
        @error="handleImageError"
      />
      <!-- Placeholder si pas d'image -->
      <div
        v-else
        class="product-placeholder shadow-lg rounded-4 tilt-effect"
        :style="{ background: getBrandGradient(product.brand) }"
      >
        <span class="brand-initial">{{ product.brand.charAt(0) }}</span>
        <span class="brand-model opacity-50">{{ product.model || product.name.split(' ')[0] }}</span>
      </div>
    </div>
    
    <div class="product-info">
      <h3 class="product-title">{{ product.name }}</h3>
      <div class="product-features" v-if="product.specs && product.specs.length > 0">
        <span v-for="(spec, index) in product.specs" :key="index" class="feature-badge">
          {{ spec }}
        </span>
      </div>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-price-container">
        <div class="product-price">{{ formatPrice(product.price) }} <span class="currency">FCFA</span></div>
        <div v-if="product.promo" class="product-old-price">{{ formatPrice(product.old_price || Math.round(product.price * 1.2)) }} FCFA</div>
        <div v-if="product.promo" class="product-ribbon">
          <i class="bi bi-tag-fill me-1"></i>Promo
        </div>
      </div>
      <div class="product-actions">
        <NuxtLink :to="`/produit/${product.slug}`" class="btn-details shine-effect">
          <i class="bi bi-eye me-2"></i> Voir détails
        </NuxtLink>
        <a 
          v-if="product.in_stock"
          :href="getWhatsAppLink(product)" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn-whatsapp shine-effect">
          <i class="bi bi-whatsapp me-2"></i> Commander
        </a>
        <span v-else class="btn-unavailable">
          <i class="bi bi-x-circle me-2"></i> Indisponible
        </span>
      </div>
    </div>
    <div class="product-shine-overlay"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, computed } from 'vue';
import CloudinaryImage from '~/components/CloudinaryImage.vue';

// Props du composant
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

// Nous n'avons plus besoin de la détection mobile pour la carte produit

// Gestionnaire d'erreur pour les images
function handleImageError(e) {
  // Chercher le parent de l'image
  const imageContainer = document.querySelector('.product-image');
  if (imageContainer && !imageContainer.querySelector('.product-placeholder')) {
    // Masquer l'image Cloudinary
    const cloudinaryContainer = imageContainer.querySelector('.cloudinary-image-container');
    if (cloudinaryContainer) {
      cloudinaryContainer.style.display = 'none';
    }
    
    // Créer un placeholder
    const placeholder = document.createElement('div');
    placeholder.className = 'product-placeholder shadow-lg rounded-4 tilt-effect';
    placeholder.style.background = getBrandGradient(props.product.brand);
    placeholder.innerHTML = `
      <span class="brand-initial">${props.product.brand.charAt(0)}</span>
      <span class="brand-model opacity-50">${props.product.model || props.product.name.split(' ')[0]}</span>
    `;
    imageContainer.appendChild(placeholder);
  }
}

// Formater le prix avec des espaces
function formatPrice(price) {
  if (!price) return '0';
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// Générer le lien WhatsApp
function getWhatsAppLink(product) {
  const message = `Bonjour, je suis intéressé par ${product.name} à ${formatPrice(product.price)} FCFA. Est-ce disponible ?`;
  return `https://wa.me/237675108876?text=${encodeURIComponent(message)}`;
};

// Générer un dégradé de couleur en fonction de la marque
const getBrandGradient = (brand) => {
  const brandColors = {
    'Apple': 'linear-gradient(135deg, #A8B2C3 0%, #48494B 100%)',
    'Samsung': 'linear-gradient(135deg, #1428A0 0%, #000000 100%)',
    'Google': 'linear-gradient(135deg, #EA4335 0%, #4285F4 100%)',
    'Xiaomi': 'linear-gradient(135deg, #FF6900 0%, #ffb02e 100%)',
    'OnePlus': 'linear-gradient(135deg, #F5010C 0%, #8d0208 100%)',
    'Dell': 'linear-gradient(135deg, #007DB8 0%, #003c72 100%)',
    'Lenovo': 'linear-gradient(135deg, #E2231A 0%, #73110d 100%)',
    'Microsoft': 'linear-gradient(135deg, #7FBA00 0%, #3a5800 100%)',
    'Sony': 'linear-gradient(135deg, #0063C8 0%, #001e3e 100%)',
    'Anker': 'linear-gradient(135deg, #6CC04A 0%, #439922 100%)'
  };
  
  return brandColors[brand] || 'linear-gradient(135deg, #5D6272 0%, #2F3137 100%)';
};

// La fonction getTopSpecs a été supprimée car les spécifications sont déjà formatées par le backend
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.03);
  z-index: 1;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.product-card::before {
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

.product-card:hover::before {
  transform: scaleX(1);
}

.product-ribbon {
  position: absolute;
  right: 0;
  bottom: 0;
  background: var(--bs-orange);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem 0 0 0;
  z-index: 5;
  font-weight: 600;
  font-size: 0.75rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.product-brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.brand-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  background-color: var(--bs-primary);
  color: white;
  letter-spacing: 0.5px;
}

.stock-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
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

.product-image {
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  position: relative;
  overflow: hidden;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  max-height: 180px;
  transition: transform 0.3s ease;
  background-color: white;
  pointer-events: none; /* Désactive les interactions de l'image */
}

.product-card:hover .product-img {
  transform: scale(1.05);
}

.product-placeholder {
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  transition: transform 0.5s ease;
}

.brand-initial {
  font-size: 3.5rem;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.brand-model {
  font-size: 1rem;
  font-weight: 500;
  margin-top: -0.5rem;
}

.tilt-effect {
  transition: transform 0.3s ease;
}

.product-card:hover .tilt-effect {
  transform: perspective(500px) rotateY(5deg) rotateX(5deg) translateZ(10px);
}

.product-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 5;
}

.product-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--bs-gray-800);
  transition: color 0.3s ease;
}

.product-card:hover .product-title {
  color: var(--bs-orange);
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.feature-badge {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.15rem 0.5rem;
  border-radius: 0.25rem;
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  color: var(--bs-primary);
}

.product-description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--bs-gray-600);
  margin-bottom: 1rem;
  flex-grow: 1;
}

.product-price-container {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.25rem;
  position: relative;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--bs-orange);
  margin-right: 0.75rem;
}

.currency {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--bs-gray-600);
}

.product-old-price {
  font-size: 0.9rem;
  color: var(--bs-gray-500);
  text-decoration: line-through;
}

.product-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  z-index: 10;
}

.btn-details, .btn-whatsapp, .btn-unavailable {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  position: relative;
  z-index: 5;
}

.btn-details {
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  color: var(--bs-primary);
  border: none;
}

.btn-details:hover {
  background-color: var(--bs-primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.2);
}

.btn-whatsapp {
  background-color: var(--bs-success);
  color: white;
  border: none;
}

.btn-whatsapp:hover {
  background-color: #0c8a3e;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
}

.btn-unavailable {
  background-color: rgba(var(--bs-gray-400-rgb), 0.2);
  color: var(--bs-gray-600);
  cursor: not-allowed;
}

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
  opacity: 0;
  transition: opacity 0.8s ease;
}

.shine-effect:hover::after {
  opacity: 1;
  animation: shine 1.5s forwards;
}

.shine-effect-container {
  position: relative;
  overflow: hidden;
}

.product-shine {
  position: absolute;
  top: -100%;
  left: -100%;
  width: 250%;
  height: 250%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(-45deg);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-shine {
  opacity: 1;
  animation: cardShine 1.5s forwards;
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

@keyframes cardShine {
  0% {
    top: -100%;
    left: -100%;
    opacity: 0.5;
  }
  100% {
    top: 100%;
    left: 100%;
    opacity: 0;
  }
}

@media (min-width: 768px) {
  .product-actions {
    flex-direction: row;
  }
  
  .btn-details, .btn-whatsapp, .btn-unavailable {
    flex: 1;
  }
}

@media (max-width: 576px) {
  .product-placeholder {
    width: 150px;
    height: 150px;
  }
  
  .product-image {
    height: 180px;
    padding: 1rem;
  }
  
  .brand-initial {
    font-size: 2.5rem;
  }
  
  .product-info {
    padding: 1rem;
  }
  
  .product-title {
    font-size: 1.1rem;
  }
  
  .product-price {
    font-size: 1.25rem;
  }
}

.product-shine-overlay {
  position: absolute;
  top: -100%;
  left: -100%;
  width: 250%;
  height: 250%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(-45deg);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none; /* Important: Permet aux clics de passer à travers */
  z-index: 3;
}

.product-card:hover .product-shine-overlay {
  opacity: 1;
  animation: cardShine 1.5s forwards;
}
/* Styles spécifiques pour la version mobile des cartes de produits */
.mobile-product-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mobile-image-container {
  position: relative;
  width: 100%;
  height: 180px;
  background-color: #f8f9fa;
  overflow: hidden;
}

.mobile-product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.mobile-product-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #ff8c00, #ff4500);
}

.mobile-product-badges {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  z-index: 5;
}

.mobile-brand-badge {
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.mobile-stock-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.mobile-in-stock {
  background-color: rgba(40, 167, 69, 0.8);
  color: #fff;
}

.mobile-out-stock {
  background-color: rgba(220, 53, 69, 0.8);
  color: #fff;
}

.mobile-product-info {
  padding: 12px;
  display: flex;
  flex-direction: column;
}

.mobile-product-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}

.mobile-product-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ff8c00;
  margin-bottom: 4px;
}

.mobile-product-old-price {
  font-size: 0.85rem;
  color: #6c757d;
  text-decoration: line-through;
  margin-bottom: 8px;
}

.mobile-product-actions {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.mobile-btn-view, .mobile-btn-order {
  flex: 1;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.mobile-btn-view {
  background-color: #f8f9fa;
  color: #495057;
  border: 1px solid #dee2e6;
}

.mobile-btn-order {
  background-color: #28a745;
  color: #fff;
  border: none;
}
</style> 