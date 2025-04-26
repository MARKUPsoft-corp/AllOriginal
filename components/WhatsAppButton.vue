<template>
  <a 
    :href="whatsappLink" 
    target="_blank" 
    rel="noopener noreferrer"
    class="whatsapp-button"
    :class="{ 'whatsapp-button-disabled': disabled }"
    :aria-disabled="disabled"
    @click="disabled ? $event.preventDefault() : null"
  >
    <span class="whatsapp-icon">💬</span>
    <span class="whatsapp-text">{{ disabled ? text : 'Commander sur WhatsApp' }}</span>
  </a>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  productName: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: 'Indisponible'
  }
});

// Générer le lien WhatsApp avec le message personnalisé
const whatsappLink = computed(() => {
  if (props.disabled) return '#';
  
  const text = props.productName 
    ? `Bonjour, je suis intéressé(e) par le produit ${props.productName}`
    : 'Bonjour, je souhaite passer une commande';
    
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/237XXXXXXXXX?text=${encodedText}`;
});
</script>

<style scoped>
.whatsapp-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 1rem;
  background-color: var(--primary-color);
  color: var(--light-color);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
  width: 100%;
}

.whatsapp-button:hover:not(.whatsapp-button-disabled) {
  background-color: darken(var(--primary-color), 10%);
  transform: translateY(-2px);
}

.whatsapp-button-disabled {
  background-color: var(--gray-color);
  color: var(--text-color);
  cursor: not-allowed;
}

.whatsapp-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.whatsapp-text {
  white-space: nowrap;
}

@media (max-width: 767px) {
  .whatsapp-button {
    padding: 0.75rem 1rem;
  }
}
</style> 