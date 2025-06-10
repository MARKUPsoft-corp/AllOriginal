<template>
  <div :class="['cloudinary-image-container', containerClass]" :style="containerStyle">
    <client-only>
      <img 
        v-if="processedSrc"
        :src="processedSrc"
        :width="width"
        :height="height"
        :alt="alt"
        :loading="loading"
        :class="imageClass"
        @error="handleImageError"
      />
      <div v-else-if="!processedSrc && !fallbackSrc" class="placeholder-image">
        <span class="placeholder-initial">{{ placeholderText }}</span>
      </div>
      <img
        v-else
        :src="fallbackSrc"
        :width="width"
        :height="height"
        :alt="alt"
        :loading="loading"
        :class="imageClass"
        @error="handleImageError"
      />
    </client-only>
    <div v-if="debug && processedSrc" class="debug-info position-absolute bottom-0 start-0 bg-dark text-white p-1" style="font-size: 0.6rem; opacity: 0.7; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
      {{ processedSrc }}
    </div>
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
  },
  debug: {
    type: Boolean,
    default: false
  }
});

// État et gestion des erreurs
const hasError = ref(false);
const config = useRuntimeConfig();

// Traitement des URLs pour les faire pointer directement sur Cloudinary
const processedSrc = computed(() => {
  if (!props.src) return '';
  
  // Vérifier si c'est déjà une URL Cloudinary directe
  if (props.src.includes('res.cloudinary.com')) {
    return props.src;
  }
  
  // Corriger les URLs qui passent par le backend
  if (props.src.includes('/media/image/upload/')) {
    // Extraction du chemin Cloudinary depuis l'URL du backend
    const regex = /\/media\/image\/upload\/(.+)/;
    const match = props.src.match(regex);
    
    if (match && match[1]) {
      // Construction de l'URL Cloudinary directe
      const cloudName = config.public.cloudinaryCloudName || 'dqwohzfae';
      return `https://res.cloudinary.com/${cloudName}/image/upload/${match[1]}`;
    }
  }
  
  // Si aucune transformation n'est possible, renvoyer l'URL d'origine
  return props.src;
});

// Gestion des erreurs d'image
const handleImageError = (e) => {
  console.error('Erreur de chargement d\'image:', props.src);
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
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
  object-fit: contain;
  background-color: white;
  pointer-events: none; /* Supprime les interactions comme les liens sur les images */
}
</style>
