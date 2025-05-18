/**
 * Service API de base pour communiquer avec le backend Django
 */
import axios from 'axios';
import { useRuntimeConfig } from 'nuxt/app';

// Récupération de la configuration d'exécution
const config = useRuntimeConfig();

// Création de l'instance axios avec la configuration de base
const apiClient = axios.create({
  // URL du backend Django - configurée dans nuxt.config.ts
  baseURL: config.public.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 30000 // Augmentation du timeout pour permettre des requêtes plus lentes
});

// Intercepteur pour ajouter le token d'authentification si disponible
apiClient.interceptors.request.use(
  config => {
    // Récupérer le token depuis le stockage local ou de session
    const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
    
    // Si un token existe, l'ajouter aux headers
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    
    // Logs pour débogage
    console.log(`[API Request] ${config.method.toUpperCase()} ${config.baseURL}${config.url}`, {
      headers: config.headers,
      data: config.data,
      params: config.params
    });
    
    return config;
  },
  error => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les réponses et les erreurs globalement
apiClient.interceptors.response.use(
  response => {
    // Log des réponses réussies
    console.log(`[API Response] ${response.status} ${response.statusText}`, {
      url: response.config.url,
      data: response.data,
      headers: response.headers
    });
    return response;
  },
  error => {
    // Log détaillé des erreurs
    if (error.response) {
      // La requête a été faite et le serveur a répondu avec un code d'erreur
      console.error(`[API Error] ${error.response.status} ${error.response.statusText}`, {
        url: error.config.url,
        data: error.response.data,
        headers: error.response.headers
      });
      
      // Gérer les erreurs 401 (non authentifié)
      if (error.response.status === 401) {
        // Rediriger vers la page de login si l'utilisateur n'est pas authentifié
        if (window.location.pathname.startsWith('/admin') && 
            window.location.pathname !== '/admin/login') {
          console.warn('[API Auth] Redirection vers la page de login');
          window.location.href = '/admin/login';
        }
      }
    } else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      console.error('[API Error] Aucune réponse du serveur', {
        url: error.config.url,
        request: error.request
      });
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      console.error('[API Error] Erreur de configuration', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
