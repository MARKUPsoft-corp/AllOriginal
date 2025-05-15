<template>
  <div v-if="authenticated">
    <!-- Layout sécurisé pour les pages admin, n'affiche le contenu que si authentifié -->
    <slot />
  </div>
  <div v-else class="d-flex align-items-center justify-content-center min-vh-100">
    <div class="text-center">
      <div class="spinner-border text-danger mb-4" role="status">
        <span class="visually-hidden">Vérification...</span>
      </div>
      <h2 class="mb-4">Accès non autorisé</h2>
      <p class="lead mb-4">Redirection vers la page de connexion...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authenticated = ref(false);

// Fonction de vérification stricte d'authentification
function checkAuth() {
  if (process.client) {
    const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
    authenticated.value = !!token;
    
    if (!authenticated.value) {
      console.warn('⛔️ SÉCURITÉ: Blocage accès non autorisé');
      setTimeout(() => {
        router.push('/admin/login');
      }, 1000);
    } else {
      console.log('✅ Accès autorisé: Token valide');
    }
  }
}

// Vérifier à l'initialisation
onMounted(() => {
  checkAuth();
});

// Vérifier à chaque changement de route
watch(() => router.currentRoute.value, () => {
  checkAuth();
}, { immediate: true });
</script>
