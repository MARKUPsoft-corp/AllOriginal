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
    return apiClient.get('/products/search/', { params: { q: query } })
      .then(response => {
        console.log('Réponse brute de l\'API recherche produits:', response.data);
        return adaptProducts(response.data);
      });
  },

  /**
   * Créer un nouveau produit (admin uniquement)
   * @param {Object} productData - Données du produit
   * @returns {Promise} - Promesse avec les détails du produit créé
   */
  createProduct(productData) {
    return apiClient.post('/products/', productData)
      .then(response => {
        console.log('Produit créé:', response.data);
        return adaptProduct(response.data);
      });
  },

  /**
   * Mettre à jour un produit (admin uniquement)
   * @param {string} slug - Slug du produit
   * @param {Object} productData - Données mises à jour du produit
   * @returns {Promise} - Promesse avec les détails du produit mis à jour
   */
  updateProduct(slug, productData) {
    return apiClient.put(`/products/${slug}/`, productData)
      .then(response => {
        console.log(`Produit ${slug} mis à jour:`, response.data);
        return adaptProduct(response.data);
      });
  },

  /**
   * Supprimer un produit (admin uniquement)
   * @param {string} slug - Slug du produit
   * @returns {Promise} - Promesse avec le statut de suppression
   */
  deleteProduct(slug) {
    return apiClient.delete(`/products/${slug}/`)
      .then(response => {
        console.log(`Produit ${slug} supprimé:`, response.data);
        return response.data;
      });
  },

  /**
   * Ajouter une image à un produit (admin uniquement)
   * @param {string} slug - Slug du produit
   * @param {FormData} imageData - Données de l'image (doit être un FormData)
   * @returns {Promise} - Promesse avec les détails de l'image ajoutée
   */
  addProductImage(slug, imageData) {
    // Pour les fichiers, nous devons utiliser FormData et modifier les headers
    return apiClient.post(`/products/${slug}/add_image/`, imageData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(`Image ajoutée au produit ${slug}:`, response.data);
      return response.data;
    });
  },

  /**
   * Récupérer toutes les spécifications d'un produit
   * @param {string} slug - Slug du produit
   * @returns {Promise} - Promesse avec la liste des spécifications
   */
  getProductSpecifications(slug) {
    // Puisque l'API n'a pas d'endpoint spécifique pour les spécifications,
    // nous les récupérons directement depuis les détails du produit
    return this.getProduct(slug)
      .then(product => {
        console.log(`Spécifications du produit ${slug}:`, product.specs);
        return product.specs || [];
      });
  },

  /**
   * Ajouter une spécification à un produit (admin uniquement)
   * @param {string} slug - Slug du produit
   * @param {Object} specData - Données de la spécification
   * @returns {Promise} - Promesse avec les détails de la spécification ajoutée
   */
  addProductSpecification(slug, specData) {
    return apiClient.post(`/products/${slug}/add_specification/`, specData)
      .then(response => {
        console.log(`Spécification ajoutée au produit ${slug}:`, response.data);
        return response.data;
      });
  },
  
  /**
   * Mettre à jour ou créer une spécification pour un produit
   * Cette fonction vérifie d'abord si la spécification existe et la met à jour
   * ou crée une nouvelle spécification si nécessaire
   * @param {string} slug - Slug du produit
   * @param {Object} specData - Données de la spécification
   * @returns {Promise} - Promesse avec les détails de la spécification
   */
  updateOrCreateSpecification(slug, specData) {
    // D'abord, récupérer le produit complet pour avoir accès aux spécifications
    return this.getProduct(slug)
      .then(product => {
        // Convertir toutes les spécifications en un format facile à manipuler
        // Le format des spécifications dans le détail du produit est sous forme d'objet complet
        const existingSpecs = product.specifications || [];
        
        // Chercher si une spécification avec ce nom existe déjà
        const existingSpec = existingSpecs.find(spec => spec.name === specData.name);
        
        if (existingSpec) {
          console.log(`Spécification "${specData.name}" déjà existante, mise à jour...`);
          // Si la spécification existe, on la met à jour en utilisant son ID
          // On doit passer le slug du produit pour pouvoir recréer la spécification après suppression
          return this.updateSpecification(existingSpec.id, specData, slug);
        } else {
          console.log(`Spécification "${specData.name}" nouvelle, création...`);
          // Si la spécification n'existe pas, on la crée
          return this.addProductSpecification(slug, specData);
        }
      });
  },

  /**
   * Mettre à jour une spécification (admin uniquement)
   * Comme il n'y a pas d'endpoint direct pour la mise à jour, nous supprimons puis recréons
   * @param {number} specId - ID de la spécification
   * @param {Object} specData - Données de la spécification
   * @param {string} productSlug - Slug du produit (nécessaire pour recréer la spécification)
   * @returns {Promise} - Promesse avec les détails de la spécification
   */
  updateSpecification(specId, specData, productSlug) {
    // Comme nous n'avons pas d'endpoint de mise à jour des spécifications,
    // nous devons supprimer puis recréer
    return this.deleteSpecification(specId)
      .then(() => {
        console.log(`Spécification ${specId} supprimée, recréation avec nouvelle valeur...`);
        // Une fois la spécification supprimée, nous en créons une nouvelle
        return this.addProductSpecification(productSlug, specData);
      })
      .then(response => {
        console.log(`Spécification recréée avec ID ${response.id}:`, response);
        return response;
      });
  },

  /**
   * Supprimer une image de produit (admin uniquement)
   * @param {string} slug - Slug du produit
   * @param {number} imageId - ID de l'image à supprimer
   * @returns {Promise} - Promesse avec le statut de suppression
   */
  deleteProductImage(slug, imageId) {
    return apiClient.delete(`/products/${slug}/images/${imageId}/`)
      .then(response => {
        console.log(`Image ${imageId} supprimée du produit ${slug}`);
        return response.data;
      });
  },
  
  /**
   * Supprimer une spécification (admin uniquement)
   * @param {number} specId - ID de la spécification
   * @returns {Promise} - Promesse avec le statut de suppression
   */
  deleteSpecification(specId) {
    return apiClient.delete(`/specifications/${specId}/`)
      .then(response => {
        console.log(`Spécification ${specId} supprimée:`, response.data);
        return response.data;
      });
  },

  /**
   * Récupère les types de spécifications disponibles
   * Note: Pour l'instant, cette fonction retourne des données statiques car
   * l'API backend n'a pas encore de route /specification-types/
   * @returns {Promise} - Promesse avec la liste des types de spécifications
   */
  getSpecificationTypes() {
    // Utiliser des données statiques au lieu d'un appel API
    // Ces spécifications sont courantes pour des produits électroniques
    const specTypes = [
      { id: 1, name: 'Processeur', category: 'Performance' },
      { id: 2, name: 'Mémoire RAM', category: 'Performance' },
      { id: 3, name: 'Stockage', category: 'Performance' },
      { id: 4, name: 'Écran', category: 'Affichage' },
      { id: 5, name: 'Résolution', category: 'Affichage' },
      { id: 6, name: 'Batterie', category: 'Autonomie' },
      { id: 7, name: 'Système d\'exploitation', category: 'Logiciel' },
      { id: 8, name: 'Appareil photo', category: 'Multimédia' },
      { id: 9, name: 'Connectivité', category: 'Connectique' },
      { id: 10, name: 'Dimensions', category: 'Physique' },
      { id: 11, name: 'Poids', category: 'Physique' },
      { id: 12, name: 'Couleur', category: 'Apparence' },
      { id: 13, name: 'Garantie', category: 'Service' }
    ];
    
    console.log('Types de spécifications (statiques):', specTypes);
    
    // Renvoyer les données sous forme de promesse résolue
    return Promise.resolve(specTypes);
  }
};
