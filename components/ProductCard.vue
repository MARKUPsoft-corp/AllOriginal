<template>
  <div class="product-card shine-effect-container">
    <!-- Badge promo si le produit est en promotion -->
    <div v-if="product.promo" class="product-ribbon">Promo</div>
    
    <div class="product-brand">
      <span class="brand-badge">{{ product.brand }}</span>
      <span class="stock-badge" :class="product.in_stock ? 'stock-badge-success' : 'stock-badge-danger'">
        <i :class="product.in_stock ? 'bi bi-check-circle-fill me-1' : 'bi bi-x-circle-fill me-1'"></i>
        {{ product.in_stock ? 'En stock' : 'Rupture' }}
      </span>
    </div>
    
    <div class="product-image">
      <div 
        class="product-placeholder shadow-lg rounded-4 tilt-effect" 
        :style="{ background: getBrandGradient(product.brand) }"
      >
        <span class="brand-initial">{{ product.brand.charAt(0) }}</span>
        <span class="brand-model opacity-50">{{ product.model || product.name.split(' ')[0] }}</span>
        <div class="product-glow"></div>
      </div>
    </div>
    
    <div class="product-info">
      <h3 class="product-title">{{ product.name }}</h3>
      <div class="product-features" v-if="product.specs">
        <span v-for="(spec, index) in getTopSpecs(product)" :key="index" class="feature-badge">
          <i class="bi" :class="getSpecIcon(spec)"></i>
          {{ spec }}
        </span>
      </div>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-price-container">
        <div class="product-price">{{ formatPrice(product.price) }} <span class="currency">FCFA</span></div>
        <div v-if="product.promo" class="product-old-price">{{ formatPrice(product.old_price || Math.round(product.price * 1.2)) }} FCFA</div>
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
          class="btn-whatsapp shine-effect pulse-animation">
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
defineProps({
  product: {
    type: Object,
    required: true
  }
});

// Formater le prix avec séparateur de milliers
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// Générer le lien WhatsApp
const getWhatsAppLink = (product) => {
  const text = `Bonjour, je suis intéressé(e) par le produit ${product.name}`;
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/237XXXXXXXXX?text=${encodedText}`;
};

// Retourne un dégradé différent pour chaque marque
const getBrandGradient = (brand) => {
  const brandGradients = {
    'APPLE': 'linear-gradient(135deg, #A2AAAD 0%, #F5F5F7 100%)',
    'SAMSUNG': 'linear-gradient(135deg, #1428A0 0%, #1565C0 100%)',
    'XIAOMI': 'linear-gradient(135deg, #FF6700 0%, #FF9B33 100%)',
    'DELL': 'linear-gradient(135deg, #007DB8 0%, #00B2E3 100%)',
    'HP': 'linear-gradient(135deg, #0096D6 0%, #00BCD4 100%)',
    'HUAWEI': 'linear-gradient(135deg, #CF0A2C 0%, #FF5252 100%)',
    'LENOVO': 'linear-gradient(135deg, #E2231A 0%, #FF5252 100%)'
  };
  
  return brandGradients[brand] || 'linear-gradient(135deg, var(--bs-orange) 0%, #FFAB40 100%)'; // Dégradé par défaut
};

// Extraire les principales spécifications à afficher
const getTopSpecs = (product) => {
  if (!product.specs) return [];
  
  const specs = [];
  // Sélectionner jusqu'à 3 spécifications importantes
  if (product.specs.ram) specs.push(`${product.specs.ram} RAM`);
  if (product.specs.storage) specs.push(`${product.specs.storage}`);
  if (product.specs.processor) specs.push(product.specs.processor.split(' ')[0]);
  if (product.specs.screen && specs.length < 3) specs.push(`${product.specs.screen}"`);
  
  return specs.slice(0, 3);
};

// Retourne une icône adaptée à la spécification
const getSpecIcon = (spec) => {
  if (spec.includes('RAM')) return 'bi-memory';
  if (spec.includes('GB') || spec.includes('TB')) return 'bi-hdd-fill';
  if (spec.includes('Intel') || spec.includes('AMD') || spec.includes('i5') || spec.includes('i7')) return 'bi-cpu-fill';
  if (spec.includes('"')) return 'bi-display-fill';
  return 'bi-gear-fill';
};
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
  animation: fadeIn 0.8s ease forwards;
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
  transition: all 0.3s ease;
}

.product-card:hover .brand-badge {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(var(--bs-primary-rgb), 0.2);
}

.stock-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.stock-badge-success {
  background-color: rgba(var(--bs-success-rgb), 0.15);
  color: var(--bs-success);
}

.stock-badge-danger {
  background-color: rgba(var(--bs-danger-rgb), 0.15);
  color: var(--bs-danger);
}

.product-card:hover .stock-badge-success {
  background-color: rgba(var(--bs-success-rgb), 0.25);
}

.product-card:hover .stock-badge-danger {
  background-color: rgba(var(--bs-danger-rgb), 0.25);
}

.product-image {
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  position: relative;
  overflow: hidden;
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
  overflow: hidden;
}

.brand-initial {
  font-size: 3.5rem;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
}

.brand-model {
  font-size: 1rem;
  font-weight: 500;
  margin-top: -0.5rem;
  position: relative;
  z-index: 2;
}

.product-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%);
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
}

.product-card:hover .product-glow {
  opacity: 1;
  animation: pulse 2s infinite;
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
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s ease;
}

.product-card:hover .feature-badge {
  transform: translateY(-2px);
  background-color: rgba(var(--bs-primary-rgb), 0.2);
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
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--bs-orange);
  margin-right: 0.75rem;
  transition: all 0.3s ease;
}

.product-card:hover .product-price {
  transform: scale(1.05);
  text-shadow: 0 2px 10px rgba(var(--bs-orange-rgb), 0.2);
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

.pulse-animation {
  animation: pulseButton 2.5s infinite;
}

@keyframes pulseButton {
  0% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(40, 167, 69, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.3;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  
  .feature-badge {
    font-size: 0.65rem;
    padding: 0.1rem 0.4rem;
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
</style> 