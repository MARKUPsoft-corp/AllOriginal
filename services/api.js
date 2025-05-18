/**
 * Service API de base pour communiquer avec le backend Django
 */
import axios from 'axios';

// URL du backend par défaut (fallback)
const DEFAULT_API_URL = 'https://alloriginal-backend.onrender.com';

// Création d'une fonction simple pour récupérer l'URL de base
function getBaseUrl() {
  // Tenter de récupérer l'URL depuis les variables d'environnement
  const envUrl = process.env.API_BASE_URL;
  if (envUrl) return envUrl;

  // Tenter de récupérer depuis la configuration Nuxt
  if (typeof window !== 'undefined' && window.__NUXT__?.config?.public?.apiBaseUrl) {
    return window.__NUXT__.config.public.apiBaseUrl;
  }
  
  // URL par défaut
  return DEFAULT_API_URL;
}

// Créer une factory qui génère un client API prêt à l'emploi
const createApiClient = () => {
  // Création de l'instance axios
  const client = axios.create({
    baseURL: getBaseUrl(),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    timeout: 15000
  });

  // Ajouter un intercepteur pour les tokens d'authentification
  client.interceptors.request.use(config => {
    // Sécurité pour éviter les erreurs
    if (typeof localStorage === 'undefined') return config;
    
    // Ajout du token s'il existe
    const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  });
  
  // Intercepteur de réponses pour gérer les erreurs d'authentification
  client.interceptors.response.use(
    response => response,
    error => {
      // Gérer la redirection en cas d'erreur 401
      if (error.response?.status === 401 && 
          typeof window !== 'undefined' && 
          window.location.pathname.startsWith('/admin') && 
          window.location.pathname !== '/admin/login') {
        window.location.href = '/admin/login';
      }
      return Promise.reject(error);
    }
  );
  
  return client;
};

// Exporter directement la factory pour éviter les problèmes de référence
export default createApiClient;
