/**
 * Service pour gérer l'authentification avec le backend Django
 */
import apiClient from './api';

export default {
  /**
   * Connecter un utilisateur
   * @param {string} email - Email de l'utilisateur
   * @param {string} password - Mot de passe de l'utilisateur
   * @param {boolean} rememberMe - Si vrai, stocke le token dans localStorage, sinon dans sessionStorage
   * @returns {Promise} - Promesse avec les données de l'utilisateur et le token
   */
  login(email, password, rememberMe = false) {
    return apiClient.post('/accounts/login/', { email, password })
      .then(response => {
        const { token, user } = response.data;
        
        // Stocker le token selon l'option "Se souvenir de moi"
        if (rememberMe) {
          localStorage.setItem('admin_token', token);
        } else {
          sessionStorage.setItem('admin_token', token);
        }
        
        // Stocker les informations de l'utilisateur
        localStorage.setItem('admin_user', JSON.stringify(user));
        
        return response.data;
      });
  },
  
  /**
   * Déconnecter l'utilisateur
   * @returns {Promise} - Promesse avec le statut de déconnexion
   */
  logout() {
    return apiClient.post('/accounts/logout/')
      .then(response => {
        // Supprimer le token et les informations de l'utilisateur
        localStorage.removeItem('admin_token');
        sessionStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        
        return response.data;
      })
      .catch(error => {
        // Même en cas d'erreur, on supprime les données locales
        localStorage.removeItem('admin_token');
        sessionStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        
        throw error;
      });
  },
  
  /**
   * Vérifier si l'utilisateur est authentifié
   * @returns {boolean} - Vrai si l'utilisateur est authentifié
   */
  isAuthenticated() {
    return !!(localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token'));
  },
  
  /**
   * Forcer la déconnexion (sans appel API) pour assurer que l'utilisateur 
   * doit toujours se reconnecter en accédant à la section admin
   */
  forceLogout() {
    localStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
  },
  
  /**
   * Obtenir les informations de l'utilisateur courant
   * @returns {Promise} - Promesse avec les données de l'utilisateur
   */
  getCurrentUser() {
    return apiClient.get('/accounts/me/')
      .then(response => response.data);
  }
};
