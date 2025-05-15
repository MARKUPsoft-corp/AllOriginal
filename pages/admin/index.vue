<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <!-- Page de chargement/redirection -->
    <div class="text-center">
      <div class="spinner-border text-orange mb-4" role="status">
        <span class="visually-hidden">Chargement...</span>
      </div>
      <h3 class="mb-3">Vérification de l'authentification...</h3>
      <p class="text-muted">Vous allez être redirigé vers le tableau de bord ou la page de connexion.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Router pour la redirection
const router = useRouter();

// Redirection automatique
onMounted(() => {
  if (process.client) {
    // Vérifier si un token d'authentification existe
    const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
    
    setTimeout(() => {
      if (token) {
        // Si un token existe, rediriger vers le tableau de bord
        console.log('Token trouvé, redirection vers le tableau de bord administratif');
        router.push('/admin/dashboard');
      } else {
        // Si aucun token n'existe, rediriger vers la page de login
        console.log('Aucun token trouvé, redirection vers la page de login');
        router.push('/admin/login');
      }
    }, 500); // Court délai pour permettre l'affichage de l'animation
  }
});
</script>

<style scoped>
.text-orange {
  color: #ff8c00;
}
</style>
