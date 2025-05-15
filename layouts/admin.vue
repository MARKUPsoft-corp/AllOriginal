<template>
  <div>
    <!-- Ne rien afficher pendant la vérification -->
    <div v-if="isVerifying" class="d-flex justify-content-center align-items-center min-vh-100">
      <div class="spinner-border text-orange" role="status">
        <span class="visually-hidden">Chargement...</span>
      </div>
    </div>
    
    <!-- Afficher le contenu uniquement si authentifié ou sur la page login -->
    <template v-else-if="isAuthenticated || route.path === '/admin/login'">
      <!-- Barre de navigation admin (visible uniquement si authentifié et non sur la page login) -->
      <nav v-if="isAuthenticated && route.path !== '/admin/login'" class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div class="container-fluid">
          <!-- Logo -->
          <NuxtLink to="/admin" class="navbar-brand d-flex align-items-center">
            <i class="bi bi-phone text-orange me-2"></i>
            <span class="fw-bold">All Original <span class="small text-muted">Admin</span></span>
          </NuxtLink>
          
          <!-- Bouton hamburger pour mobile -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNavbar" aria-controls="adminNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <!-- Contenu de la navbar -->
          <div class="collapse navbar-collapse" id="adminNavbar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NuxtLink to="/admin" class="nav-link" :class="{ 'active': route.path === '/admin' }">
                  <i class="bi bi-speedometer2 me-1"></i> Tableau de bord
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/admin/produits" class="nav-link" :class="{ 'active': route.path.includes('/admin/produits') }">
                  <i class="bi bi-box-seam me-1"></i> Produits
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/admin/categories" class="nav-link" :class="{ 'active': route.path.includes('/admin/categories') }">
                  <i class="bi bi-tag me-1"></i> Catégories
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/admin/parametres" class="nav-link" :class="{ 'active': route.path.includes('/admin/parametres') }">
                  <i class="bi bi-gear me-1"></i> Paramètres
                </NuxtLink>
              </li>
            </ul>
            
            <!-- Informations et déconnexion utilisateur -->
            <div class="d-flex align-items-center">
              <div class="dropdown">
                <button class="btn btn-link nav-link dropdown-toggle d-flex align-items-center" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-person-circle me-1"></i>
                  <span v-if="currentUser">{{ currentUser.email }}</span>
                  <span v-else>Admin</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li><h6 class="dropdown-header">Compte administrateur</h6></li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <button @click="logout" class="dropdown-item text-danger">
                      <i class="bi bi-box-arrow-right me-2"></i> Déconnexion
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <!-- Contenu de la page -->
      <slot />
    </template>
    <!-- Sinon, on n'affiche rien car la redirection va se produire -->
  </div>
</template>

<script setup>
import authService from '~/services/auth';

const router = useRouter();
const route = useRoute();
const currentUser = ref(null);
const isAuthenticated = ref(false);
const isVerifying = ref(true); // Commence par une vérification

// Vérification d'authentification à chaque navigation dans les pages admin
onMounted(() => {
  if (process.client) {
    checkAuthentication();
  }
});

/**
 * Fonction de vérification d'authentification pour TOUTES les routes admin
 * Cette fonction garantit que l'utilisateur est bien authentifié avant d'accéder à une page
 */
const checkAuthentication = async () => {
  console.log('⚙️ PROTECTION ADMIN - Vérification d’authentification pour:', route.path);
  isVerifying.value = true;
  
  // 1. Exception pour la page de login - toujours accessible
  if (route.path === '/admin/login') {
    console.log('✅ Page de login exclue de la vérification');
    isVerifying.value = false;
    isAuthenticated.value = false; // Force à false pour garantir le workflow de login
    return;
  }
  
  // 2. Vérification côté client de la présence d'un token
  const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
  isAuthenticated.value = !!token;
  
  // 3. Si aucun token n'est trouvé, redirection immédiate vers login
  if (!token) {
    console.warn('⛔️ PROTECTION ADMIN - Aucun token trouvé, accès refusé à:', route.path);
    isVerifying.value = false;
    // Rediriger avec l'URL actuelle pour y revenir après login
    router.push({
      path: '/admin/login',
      query: { redirect: route.fullPath }
    });
    return;
  }
  
  // 4. Validation du token auprès du backend
  try {
    console.log('⚙️ Vérification du token auprès du backend...');
    // Récupérer les informations de l'utilisateur pour vérifier que le token est valide
    const user = await authService.getCurrentUser();
    currentUser.value = user;
    console.log('✅ Token valide - Accès autorisé à:', route.path);
    isVerifying.value = false; // Fin de la vérification - authentifié
  } catch (error) {
    console.error('⚠️ Erreur de validation du token:', error);
    // Si une erreur se produit (token invalide ou expiré), rediriger vers login
    authService.forceLogout();
    isAuthenticated.value = false;
    isVerifying.value = false;
    // Forcer la suppression des tokens
    localStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  }
};

// Fonction de déconnexion
const logout = async () => {
  try {
    // Appel au service d'authentification pour supprimer le token
    await authService.logout();
    
    // Afficher un message pour indiquer que la déconnexion a réussi
    console.log('Déconnecté avec succès');
    
    // Rediriger vers la page de login
    router.push('/admin/login');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
    
    // Même en cas d'erreur, on force la déconnexion
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
