<template>
  <div :class="['cloudinary-image-container', containerClass]" :style="containerStyle">
    <client-only>
      <CldImage
        v-if="src && src.includes('cloudinary') || isCloudinaryUrl"
        :src="getCloudinarySrc(src)"
        :width="width"
        :height="height"
        :alt="alt"
        :loading="loading"
        :gravity="gravity"
        :crop="crop"
        :quality="quality"
        :fetch-format="fetchFormat"
        :class="imageClass"
        :placeholder="placeholder"
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

// Vérifier si une URL est une URL Cloudinary
const isCloudinaryUrl = computed(() => {
  if (!props.src) return false;
  return props.src.includes('cloudinary.com') || props.src.includes('res.cloudinary.com');
});

// Extraire le chemin de l'image pour Cloudinary
const getCloudinarySrc = (src) => {
  if (!src) return '';

  // Si c'est déjà une URL Cloudinary complète
  if (src.includes('cloudinary.com')) {
    return src;
  }

  // Si c'est une URL de l'API AllOriginal
  if (src.includes('/media/')) {
    // Extraire juste le chemin du fichier après /media/
    const parts = src.split('/media/');
    if (parts.length > 1) {
      return parts[1];
    }
  }

  return src;
};

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
