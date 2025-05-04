/**
 * Service pour gérer les produits avec le backend Django
 */
import apiClient from './api';
import { adaptProducts, adaptProduct } from './adapters';

export default {
  /**
   * Récupérer tous les produits
   * @param {Object} params - Paramètres de filtrage (category, price_min, price_max, etc.)
   * @returns {Promise} - Promesse avec la liste des produits
   */
  getAllProducts(params = {}) {
    return apiClient.get('/products/', { params })
      .then(response => {
        console.log('Réponse brute de l\'API products:', response.data);
        return adaptProducts(response.data);
      });
  },

  /**
   * Récupérer un produit par son slug
   * @param {string} slug - Slug du produit
   * @returns {Promise} - Promesse avec les détails du produit
   */
  getProduct(slug) {
    return apiClient.get(`/products/${slug}/`)
      .then(response => {
        console.log(`Réponse brute de l'API pour le produit ${slug}:`, response.data);
        return adaptProduct(response.data);
      });
  },

  /**
   * Récupérer les produits mis en avant
   * @returns {Promise} - Promesse avec la liste des produits mis en avant
   */
  getFeaturedProducts() {
    return apiClient.get('/products/featured/')
      .then(response => {
        console.log('Réponse brute de l\'API produits mis en avant:', response.data);
        return adaptProducts(response.data);
      });
  },

  /**
   * Rechercher des produits
   * @param {string} query - Termes de recherche
   * @returns {Promise} - Promesse avec les résultats de recherche
   */
  searchProducts(query) {
    return apiClient.get(`/products/search/`, { params: { q: query } })
      .then(response => response.data);
  },

  /**
   * Créer un nouveau produit (admin uniquement)
   * @param {Object} productData - Données du produit
   * @returns {Promise} - Promesse avec les détails du produit créé
   */
  createProduct(productData) {
    return apiClient.post('/products/', productData)
      .then(response => response.data);
  },

  /**
   * Mettre à jour un produit (admin uniquement)
   * @param {string} slug - Slug du produit
   * @param {Object} productData - Données mises à jour du produit
   * @returns {Promise} - Promesse avec les détails du produit mis à jour
   */
  updateProduct(slug, productData) {
    return apiClient.put(`/products/${slug}/`, productData)
      .then(response => response.data);
  },

  /**
   * Supprimer un produit (admin uniquement)
   * @param {string} slug - Slug du produit
   * @returns {Promise} - Promesse avec le statut de suppression
   */
  deleteProduct(slug) {
    return apiClient.delete(`/products/${slug}/`);
  },

  /**
   * Ajouter une image à un produit (admin uniquement)
   * @param {string} slug - Slug du produit
   * @param {FormData} imageData - Données de l'image (doit être un FormData)
   * @returns {Promise} - Promesse avec les détails de l'image ajoutée
   */
  addProductImage(slug, imageData) {
    return apiClient.post(`/products/${slug}/add_image/`, imageData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => response.data);
  },

  /**
   * Ajouter une spécification à un produit (admin uniquement)
   * @param {string} slug - Slug du produit
   * @param {Object} specData - Données de la spécification
   * @returns {Promise} - Promesse avec les détails de la spécification ajoutée
   */
  addProductSpecification(slug, specData) {
    return apiClient.post(`/products/${slug}/add_specification/`, specData)
      .then(response => response.data);
  }
};
