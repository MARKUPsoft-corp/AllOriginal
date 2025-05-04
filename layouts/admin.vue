<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import authService from '~/services/auth';

const router = useRouter();
const route = useRoute();
const currentUser = ref(null);

// Vérification d'authentification à chaque navigation dans les pages admin
onMounted(() => {
  if (process.client) {
    checkAuthentication();
  }
});

const checkAuthentication = async () => {
  // Ignorer la vérification pour la page de login
  if (route.path === '/admin/login') {
    return;
  }
  
  // Vérifier si l'utilisateur est authentifié
  const isAuthenticated = authService.isAuthenticated();
  
  // Si non authentifié, rediriger vers la page de login
  if (!isAuthenticated) {
    console.log('Non authentifié, redirection vers login');
    router.push('/admin/login');
    return;
  }
  
  // Si authentifié, on vérifie le token en récupérant les informations de l'utilisateur
  try {
    // Récupérer les informations de l'utilisateur pour vérifier que le token est valide
    const user = await authService.getCurrentUser();
    currentUser.value = user;
  } catch (error) {
    console.error('Erreur lors de la vérification du token:', error);
    // Si une erreur se produit (token invalide ou expiré), rediriger vers login
    authService.forceLogout();
    router.push('/admin/login');
  }
};

// Écouter les changements de route
const unwatchRoute = router.afterEach(() => {
  if (process.client && route.path !== '/admin/login') {
    checkAuthentication();
  }
});

// Nettoyer l'écouteur de route quand le composant est démonté
onUnmounted(() => {
  if (unwatchRoute) {
    unwatchRoute();
  }
});
</script>
