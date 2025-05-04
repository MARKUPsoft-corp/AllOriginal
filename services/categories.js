/**
 * Service pour gérer les catégories avec le backend Django
 */
import apiClient from './api';
import { adaptCategories, adaptCategory } from './adapters';

export default {
  /**
   * Récupérer toutes les catégories
   * @returns {Promise} - Promesse avec la liste des catégories
   */
  getAllCategories() {
    return apiClient.get('/categories/')
      .then(response => {
        console.log('Réponse brute de l\'API categories:', response.data);
        return adaptCategories(response.data);
      });
  },

  /**
   * Récupérer une catégorie par son slug
   * @param {string} slug - Slug de la catégorie
   * @returns {Promise} - Promesse avec les détails de la catégorie
   */
  getCategory(slug) {
    return apiClient.get(`/categories/${slug}/`)
      .then(response => {
        console.log(`Réponse brute de l'API pour la catégorie ${slug}:`, response.data);
        return adaptCategory(response.data);
      });
  },

  /**
   * Récupérer les produits d'une catégorie
   * @param {string} slug - Slug de la catégorie
   * @returns {Promise} - Promesse avec la liste des produits de la catégorie
   */
  getCategoryProducts(slug) {
    return apiClient.get(`/categories/${slug}/products/`)
      .then(response => response.data);
  },

  /**
   * Créer une nouvelle catégorie (admin uniquement)
   * @param {Object} categoryData - Données de la catégorie
   * @returns {Promise} - Promesse avec les détails de la catégorie créée
   */
  createCategory(categoryData) {
    return apiClient.post('/categories/', categoryData)
      .then(response => response.data);
  },

  /**
   * Mettre à jour une catégorie (admin uniquement)
   * @param {string} slug - Slug de la catégorie
   * @param {Object} categoryData - Données mises à jour de la catégorie
   * @returns {Promise} - Promesse avec les détails de la catégorie mise à jour
   */
  updateCategory(slug, categoryData) {
    return apiClient.put(`/categories/${slug}/`, categoryData)
      .then(response => response.data);
  },

  /**
   * Supprimer une catégorie (admin uniquement)
   * @param {string} slug - Slug de la catégorie
   * @returns {Promise} - Promesse avec le statut de suppression
   */
  deleteCategory(slug) {
    return apiClient.delete(`/categories/${slug}/`);
  }
};
