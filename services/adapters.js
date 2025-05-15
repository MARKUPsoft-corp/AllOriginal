/**
 * Adaptateurs pour harmoniser les structures de données entre le backend Django et le frontend Nuxt
 */
import apiClient from './api';

/**
 * Convertit une catégorie du format Django au format attendu par le frontend
 * @param {Object} category - Catégorie au format Django
 * @returns {Object} - Catégorie au format frontend
 */
export const adaptCategory = (category) => {
  if (!category) return null;
  
  return {
    id: category.id,
    slug: category.slug,
    name: category.name,
    description: category.description || '',
    icon: category.icon || 'grid',
    icon_description: category.icon_description || '',
    is_active: category.is_active !== undefined ? category.is_active : true,
    created_at: category.created_at || new Date().toISOString(),
    updated_at: category.updated_at || new Date().toISOString()
  };
};

/**
 * Convertit une liste de catégories du format Django au format attendu par le frontend
 * @param {Array} categories - Liste de catégories au format Django
 * @returns {Array} - Liste de catégories au format frontend
 */
export const adaptCategories = (categories) => {
  if (!categories) return [];
  if (!Array.isArray(categories)) {
    // Si Django renvoie un objet avec une propriété "results" (pagination)
    if (categories.results && Array.isArray(categories.results)) {
      return categories.results.map(adaptCategory);
    }
    return [];
  }
  return categories.map(adaptCategory);
};

/**
 * Convertit un produit du format Django au format attendu par le frontend
 * @param {Object} product - Produit au format Django
 * @returns {Object} - Produit au format frontend
 */
export const adaptProduct = (product) => {
  if (!product) return null;
  
  // Définir l'URL de base du backend pour les médias
  const BACKEND_URL = apiClient.defaults.baseURL.replace('/api', '');
  
  // Fonction pour construire l'URL complète des images
  const getFullImageUrl = (imagePath) => {
    if (!imagePath) return null;
    
    // Si l'URL est déjà absolue, la retourner telle quelle
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // Sinon, construire l'URL complète
    return `${BACKEND_URL}/media/${imagePath.replace(/^\/media\//g, '')}`;
  };
  
  // Formatage des images pour qu'elles soient facilement utilisables
  let mainImage = null;
  let images = [];
  let fullImages = [];
  
  if (product.primary_image) {
    // Assurer que l'URL de l'image est complète
    mainImage = getFullImageUrl(product.primary_image.image);
  }
  
  if (Array.isArray(product.images)) {
    // Conserver les objets d'image complets avec leurs URLs transformées
    fullImages = product.images.map(img => ({
      id: img.id,
      image: getFullImageUrl(img.image),
      is_primary: img.is_primary,
      alt_text: img.alt_text || ''
    }));
    
    // Assurer que toutes les URLs des images sont complètes (pour compatibilité)
    images = fullImages.map(img => img.image);
  }
  
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description || '',
    price: product.price || 0,
    sale_price: product.discounted_price || null,
    old_price: product.old_price || null,
    promo: product.promo || false,
    // Préserver l'ID de catégorie pour la correspondance dans le tableau des produits
    category_id: product.category ? (typeof product.category === 'object' ? product.category.id : product.category) : null,
    // Conserver aussi le slug de catégorie pour les liens et autres usages
    category: product.category ? (typeof product.category === 'object' ? product.category.slug : product.category) : null,
    // Conserver l'objet catégorie entier si disponible
    category_obj: typeof product.category === 'object' ? product.category : null,
    brand: product.brand || 'Générique',
    model: product.model || '',
    in_stock: product.status === 'in_stock',
    is_featured: product.is_featured !== undefined ? product.is_featured : false,
    is_active: product.is_active !== undefined ? product.is_active : true,
    main_image: mainImage,
    images: images,
    full_images: fullImages,  // Ajout des objets d'images complets
    specifications: product.specifications || [],
    specs: Array.isArray(product.specs) ? product.specs : [],
    created_at: product.created_at || new Date().toISOString(),
    updated_at: product.updated_at || new Date().toISOString()
  };
};

/**
 * Convertit une liste de produits du format Django au format attendu par le frontend
 * @param {Array} products - Liste de produits au format Django
 * @returns {Array} - Liste de produits au format frontend
 */
export const adaptProducts = (products) => {
  if (!products) return [];
  if (!Array.isArray(products)) {
    // Si Django renvoie un objet avec une propriété "results" (pagination)
    if (products.results && Array.isArray(products.results)) {
      return products.results.map(adaptProduct);
    }
    return [];
  }
  return products.map(adaptProduct);
};
