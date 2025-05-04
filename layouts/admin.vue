<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

// Vérification d'authentification à chaque navigation dans les pages admin
onMounted(() => {
  if (process.client) {
    checkAuthentication();
  }
});

const checkAuthentication = () => {
  // Ignorer la vérification pour la page de login
  if (route.path === '/admin/login') {
    return;
  }
  
  // Vérifier si l'utilisateur est authentifié
  const isAuthenticated = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
  
  // Si non authentifié, rediriger vers la page de login
  if (!isAuthenticated) {
    console.log('Non authentifié, redirection vers login');
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
