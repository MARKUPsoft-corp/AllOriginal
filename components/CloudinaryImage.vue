<template>
  <div :class="['cloudinary-image-container', containerClass]" :style="containerStyle">
    <client-only>
      <!-- Si c'est une URL Cloudinary, on utilise CldImage -->
      <img 
        v-if="src"
        :src="src"
        :width="width"
        :height="height"
        :alt="alt"
        :loading="loading"
        :class="imageClass"
      />
      <div v-else-if="!src && !fallbackSrc" class="placeholder-image">
        <span class="placeholder-initial">{{ placeholderText }}</span>
      </div>
      <img
        v-else
        :src="src || fallbackSrc"
        :width="width"
        :height="height"
        :alt="alt"
        :loading="loading"
        :class="imageClass"
        @error="handleImageError"
      />
    </client-only>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRuntimeConfig } from 'nuxt/app';

// Props du composant
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  fallbackSrc: {
    type: String,
    default: ''
  },
  width: {
    type: [Number, String],
    default: 'auto'
  },
  height: {
    type: [Number, String],
    default: 'auto'
  },
  alt: {
    type: String,
    default: 'Image'
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  gravity: {
    type: String,
    default: 'auto'
  },
  crop: {
    type: String,
    default: 'fill'
  },
  quality: {
    type: String,
    default: 'auto'
  },
  fetchFormat: {
    type: String,
    default: 'auto'
  },
  placeholder: {
    type: String,
    default: 'blur'
  },
  placeholderText: {
    type: String,
    default: 'A'
  },
  imageClass: {
    type: String,
    default: ''
  },
  containerClass: {
    type: String,
    default: ''
  },
  containerStyle: {
    type: Object,
    default: () => ({})
  }
});

// État et gestion des erreurs
const hasError = ref(false);

// Aucun besoin de transformation complexe, nous utilisons directement l'URL fournie
// Nous avons supprimé le code de détection et transformation des URLs pour simplifier

// Gestion des erreurs d'image
const handleImageError = (e) => {
  hasError.value = true;
  // Utilisez le fallback si disponible, sinon masquez l'image
  if (!props.fallbackSrc) {
    e.target.style.display = 'none';
  }
};
</script>

<style scoped>
.cloudinary-image-container {
  overflow: hidden;
  position: relative;
}

.placeholder-image {
  background: linear-gradient(135deg, #ff5722, #ff9800);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  height: 100%;
  width: 100%;
  min-height: 100px;
  border-radius: 8px;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
