/**
 * Plugin pour gérer la navigation vers la section administrative
 * Vérifie si l'utilisateur est déjà authentifié pour le rediriger directement au tableau de bord
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Fournir une méthode globale pour la navigation admin
  nuxtApp.provide('navigateToAdmin', (router) => {
    // Vérifier si un token d'authentification existe
    if (process.client) {
      const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
      
      if (token) {
        // Si un token existe, rediriger directement vers le tableau de bord
        console.log('Token d\'authentification détecté, redirection vers le tableau de bord');
        router.push('/admin/dashboard');
      } else {
        // Sinon, rediriger vers la page de login
        console.log('Aucun token d\'authentification, redirection vers login');
        router.push('/admin/login');
      }
    } else {
      // Côté serveur, rediriger vers l'entrée admin
      router.push('/admin');
    }
  });
});
