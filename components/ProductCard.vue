<template>
  <div class="product-card">
    <div class="product-brand">
      <span class="brand-badge">{{ product.brand }}</span>
      <span class="stock-badge" :class="product.in_stock ? 'stock-badge-success' : 'stock-badge-danger'">
        {{ product.in_stock ? 'En stock' : 'Rupture' }}
      </span>
    </div>
    <div class="product-image">
      <div 
        class="product-placeholder" 
        :style="{ backgroundColor: getBrandColor(product.brand) }"
      >
        {{ product.brand.charAt(0) }}
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-price">{{ formatPrice(product.price) }} FCFA</div>
      <div class="product-actions">
        <NuxtLink :to="`/produit/${product.slug}`" class="btn-details">
          Voir détails
        </NuxtLink>
        <a 
          v-if="product.in_stock"
          :href="getWhatsAppLink(product)" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn-whatsapp">
          Commander sur WhatsApp
        </a>
        <span v-else class="btn-unavailable">
          Indisponible
        </span>
      </div>
    </div>
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

// Retourne une couleur différente pour chaque marque
const getBrandColor = (brand) => {
  const brandColors = {
    'APPLE': '#A2AAAD',
    'SAMSUNG': '#1428A0',
    'XIAOMI': '#FF6700',
    'DELL': '#007DB8',
    'HP': '#0096D6'
  };
  
  return brandColors[brand] || '#FFA500'; // Couleur par défaut
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background-color: var(--light-color);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
}

.product-brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--gray-color);
}

.brand-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--secondary-color);
  color: var(--light-color);
}

.stock-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.stock-badge-success {
  background-color: var(--success-color);
  color: var(--light-color);
}

.stock-badge-danger {
  background-color: var(--danger-color);
  color: var(--light-color);
}

.product-image {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.product-placeholder {
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  color: var(--light-color);
  font-size: 3rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.product-description {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-color);
  margin-bottom: 1rem;
  flex-grow: 1;
}

.product-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.product-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.btn-details, .btn-whatsapp, .btn-unavailable {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-details {
  background-color: var(--light-color);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-details:hover {
  background-color: var(--primary-color);
  color: var(--light-color);
}

.btn-whatsapp {
  background-color: var(--primary-color);
  color: var(--light-color);
  text-decoration: none;
}

.btn-whatsapp:hover {
  background-color: darken(var(--primary-color), 10%);
  transform: translateY(-2px);
}

.btn-unavailable {
  background-color: var(--gray-color);
  color: var(--text-color);
  cursor: not-allowed;
}

@media (min-width: 768px) {
  .product-actions {
    flex-direction: row;
  }
  
  .btn-details, .btn-whatsapp, .btn-unavailable {
    flex: 1;
  }
}
</style> 