/**
 * Utilitaire pour tester les connexions API
 */
import apiClient from './api';

// Fonction pour tester la connexion à l'API
export const testApiConnection = async () => {
  try {
    console.log('Test de connexion à l\'API: ', apiClient.defaults.baseURL);
    const response = await apiClient.get('/');
    console.log('Réponse du test de connexion: ', response.data);
    return {
      success: true,
      message: 'Connexion établie avec succès',
      data: response.data
    };
  } catch (error) {
    console.error('Erreur de connexion à l\'API: ', error);
    return {
      success: false,
      message: `Erreur de connexion: ${error.message}`,
      error: error.response ? error.response.data : error.message
    };
  }
};

// Fonction pour tester la récupération des catégories
export const testCategoriesApi = async () => {
  try {
    console.log('Test de récupération des catégories');
    const response = await apiClient.get('/categories/');
    console.log('Catégories récupérées: ', response.data);
    return {
      success: true,
      count: response.data.length,
      data: response.data
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories: ', error);
    return {
      success: false,
      message: `Erreur: ${error.message}`,
      error: error.response ? error.response.data : error.message
    };
  }
};

// Fonction pour tester la récupération des produits
export const testProductsApi = async () => {
  try {
    console.log('Test de récupération des produits');
    const response = await apiClient.get('/products/');
    console.log('Produits récupérés: ', response.data);
    return {
      success: true,
      count: response.data.length,
      data: response.data
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des produits: ', error);
    return {
      success: false,
      message: `Erreur: ${error.message}`,
      error: error.response ? error.response.data : error.message
    };
  }
};
