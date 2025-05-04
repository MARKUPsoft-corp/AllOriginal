/**
 * Middleware pour protéger les routes d'administration
 * Toutes les pages admin sauf la page login nécessitent une authentification
 */
import authService from '~/services/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  // Si la route commence par /admin et n'est pas la page de login
  if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
    // Vérifier si l'utilisateur est authentifié
    if (!process.client) {
      return; // Côté serveur, on ne fait rien
    }
    
    const isAuthenticated = authService.isAuthenticated();
    
    // Si non authentifié, rediriger vers la page de login
    if (!isAuthenticated) {
      console.log('Non authentifié, redirection vers login');
      return navigateTo('/admin/login');
    }
  }
});
