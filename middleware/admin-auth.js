/**
 * Middleware pour protéger les routes d'administration
 * Vérifie la présence d'un token d'authentification pour toutes les routes admin sauf login
 * Le token reste actif jusqu'à déconnexion explicite par l'utilisateur
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // Ne traiter que les routes admin
  if (to.path.startsWith('/admin')) {
    // Ne pas exécuter côté serveur pour éviter des problèmes d'hydratation
    if (!process.client) return;
    
    // IMPORTANT: Si on accède à la page de login et qu'un token existe déjà,
    // rediriger vers le tableau de bord
    if (to.path === '/admin/login') {
      const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
      
      if (token) {
        console.log('Token existant détecté sur la page login, redirection vers dashboard');
        return navigateTo('/admin/dashboard');
      }
      
      // Si pas de token, laisser l'accès à la page login
      return;
    }
    
    // Pour toutes les autres pages admin, vérifier l'existence d'un token
    const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
    
    // Si aucun token n'est trouvé pour une page admin protégée
    if (!token) {
      console.warn(`❗ Protection admin: Accès non autorisé à ${to.path}`);
      
      // Redirection vers la page de login
      return navigateTo({
        path: '/admin/login',
        // Sauvegarder la page de destination pour redirection après login
        query: { redirect: to.fullPath }
      });
    }
    
    console.log(`✅ Accès autorisé à ${to.path} avec token valide`);
  }
});
