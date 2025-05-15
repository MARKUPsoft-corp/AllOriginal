import api from './api'

/**
 * Service pour gérer les avis clients
 */

// URL de base pour l'API reviews
const REVIEWS_URL = '/api/products/reviews/'

/**
 * Récupérer tous les avis pour un produit spécifique
 * @param {string} productSlug - Le slug du produit
 * @returns {Promise} Promesse avec les avis clients
 */
export const getProductReviews = async (productSlug) => {
  try {
    const response = await api.get(`${REVIEWS_URL}by-product/?product_slug=${productSlug}`)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des avis :', error)
    throw error
  }
}

/**
 * Récupérer le résumé des avis pour un produit
 * @param {string} productSlug - Le slug du produit
 * @returns {Promise} Promesse avec les statistiques des avis
 */
export const getProductReviewsSummary = async (productSlug) => {
  try {
    const response = await api.get(`/products/${productSlug}/reviews/`)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération du résumé des avis :', error)
    return {
      reviews: [],
      count: 0,
      avg_rating: 0,
      rating_distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    }
  }
}

/**
 * Soumettre un nouvel avis
 * @param {Object} reviewData - Les données de l'avis
 * @returns {Promise} Promesse avec l'avis créé
 */
export const submitReview = async (reviewData) => {
  try {
    const response = await api.post(REVIEWS_URL, reviewData)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la soumission de l\'avis :', error)
    throw error
  }
}

export default {
  getProductReviews,
  getProductReviewsSummary,
  submitReview
}
