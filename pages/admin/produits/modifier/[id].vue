<template>
  <div>
    <!-- Section Hero Admin Modifier Produit avec Particles -->
    <section class="py-5 bg-white position-relative admin-hero-section-sm overflow-hidden">
      <div id="particles-admin-edit-product" class="particles-container"></div>
      <div class="container py-4 position-relative">
        <div class="row">
          <div class="col-lg-8" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect">Gestion des produits</span>
            <h1 class="display-5 fw-bold mb-3">Modifier un <span class="text-orange border-3 border-bottom border-orange pb-1 shine-text">Produit</span></h1>
            <p class="lead mb-4 opacity-75">
              Modifiez les informations du produit
            </p>
          </div>
          <div class="col-lg-4 d-flex justify-content-lg-end align-items-center mt-4 mt-lg-0" data-aos="fade-left">
            <NuxtLink to="/admin/produits" class="btn btn-outline-primary btn-lg px-4 py-3 shadow-sm shine-effect">
              <i class="bi bi-arrow-left me-2"></i> Retour à la liste
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#f8f9fa" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,26.7C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <!-- Section Formulaire Modifier Produit -->
    <section class="edit-product-form-section py-5 section-styled position-relative overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Indicateur de chargement -->
            <div v-if="loading" class="text-center p-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Chargement...</span>
              </div>
              <p class="mt-3">Chargement des données du produit...</p>
            </div>
            
            <div v-else class="admin-card rounded-4 shadow-sm p-4 p-lg-5">
              <!-- Formulaire en plusieurs étapes -->
              <div class="edit-product-stepper mb-5">
                <div class="stepper-container">
                  <div class="step" :class="{ 'active': currentStep >= 1, 'completed': currentStep > 1 }">
                    <div class="step-circle">
                      <span v-if="currentStep <= 1">1</span>
                      <i v-else class="bi bi-check-lg"></i>
                    </div>
                    <div class="step-label">Informations</div>
                  </div>
                  <div class="step-line" :class="{ 'active': currentStep > 1 }"></div>
                  
                  <div class="step" :class="{ 'active': currentStep >= 2, 'completed': currentStep > 2 }">
                    <div class="step-circle">
                      <span v-if="currentStep <= 2">2</span>
                      <i v-else class="bi bi-check-lg"></i>
                    </div>
                    <div class="step-label">Prix & Stock</div>
                  </div>
                  <div class="step-line" :class="{ 'active': currentStep > 2 }"></div>
                  
                  <div class="step" :class="{ 'active': currentStep >= 3, 'completed': currentStep > 3 }">
                    <div class="step-circle">
                      <span v-if="currentStep <= 3">3</span>
                      <i v-else class="bi bi-check-lg"></i>
                    </div>
                    <div class="step-label">Spécifications</div>
                  </div>
                  <div class="step-line" :class="{ 'active': currentStep > 3 }"></div>
                  
                  <div class="step" :class="{ 'active': currentStep >= 4 }">
                    <div class="step-circle">
                      <span v-if="currentStep <= 4">4</span>
                      <i v-else class="bi bi-check-lg"></i>
                    </div>
                    <div class="step-label">Images</div>
                  </div>
                </div>
              </div>
              
              <!-- Formulaire Étape 1 - Informations générales -->
              <div v-if="currentStep === 1" data-aos="fade-up">
                <h3 class="mb-4 fs-4 text-gradient">Informations générales</h3>
                
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="form-floating custom-floating">
                      <input 
                        type="text" 
                        class="form-control custom-form-control" 
                        id="productName" 
                        placeholder="Nom du produit" 
                        v-model="product.name"
                        @input="generateSlug"
                      >
                      <label for="productName">Nom du produit*</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-floating custom-floating">
                      <input 
                        type="text" 
                        class="form-control custom-form-control" 
                        id="productSlug" 
                        placeholder="Slug (URL)" 
                        v-model="product.slug"
                      >
                      <label for="productSlug">Slug (URL)*</label>
                    </div>
                    <small class="text-muted">Le slug est généré automatiquement mais peut être personnalisé</small>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-floating custom-floating">
                      <input 
                        type="text" 
                        class="form-control custom-form-control" 
                        id="productBrand" 
                        placeholder="Marque" 
                        v-model="product.brand"
                      >
                      <label for="productBrand">Marque*</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-floating custom-floating">
                      <input 
                        type="text" 
                        class="form-control custom-form-control" 
                        id="productModel" 
                        placeholder="Modèle" 
                        v-model="product.model"
                      >
                      <label for="productModel">Modèle</label>
                    </div>
                  </div>
                  
                  <div class="col-md-12">
                    <div class="form-floating custom-floating">
                      <select 
                        class="form-select custom-form-select" 
                        id="productCategory" 
                        v-model="product.category_id"
                      >
                        <option value="">Sélectionnez une catégorie</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                          {{ category.name }}
                        </option>
                      </select>
                      <label for="productCategory">Catégorie*</label>
                    </div>
                  </div>
                  
                  <div class="col-md-12">
                    <div class="form-floating custom-floating">
                      <textarea 
                        class="form-control custom-form-control" 
                        id="productDescription" 
                        placeholder="Description du produit" 
                        style="height: 120px"
                        v-model="product.description"
                      ></textarea>
                      <label for="productDescription">Description du produit*</label>
                    </div>
                  </div>
                </div>
                
                <div class="d-flex justify-content-end mt-4">
                  <button class="btn btn-primary btn-lg px-5 shine-effect btn-animated" @click="goToStep(2)">
                    Continuer <i class="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
              
              <!-- Formulaire Étape 2 - Prix & Stock -->
              <div v-if="currentStep === 2" data-aos="fade-up">
                <h3 class="mb-4 fs-4 text-gradient">Prix & Stock</h3>
                
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="form-floating custom-floating">
                      <input 
                        type="number" 
                        class="form-control custom-form-control" 
                        id="productPrice" 
                        placeholder="Prix" 
                        v-model.number="product.price"
                      >
                      <label for="productPrice">Prix (FCFA)*</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-floating custom-floating">
                      <input 
                        type="number" 
                        class="form-control custom-form-control" 
                        id="productOldPrice" 
                        placeholder="Ancien prix (si promo)" 
                        v-model.number="product.old_price"
                        :disabled="!product.promo"
                      >
                      <label for="productOldPrice">Ancien prix (FCFA)</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-check form-switch custom-switch py-3">
                      <input 
                        class="form-check-input styled-switch" 
                        type="checkbox" 
                        id="productPromo" 
                        v-model="product.promo"
                      >
                      <label class="form-check-label ms-2" for="productPromo">Produit en promotion</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-check form-switch custom-switch py-3">
                      <input 
                        class="form-check-input styled-switch" 
                        type="checkbox" 
                        id="productInStock" 
                        v-model="product.in_stock"
                      >
                      <label class="form-check-label ms-2" for="productInStock">Produit en stock</label>
                    </div>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between mt-4">
                  <button class="btn btn-outline-primary btn-lg px-5 shine-effect btn-prev" @click="goToStep(1)">
                    <i class="bi bi-arrow-left me-2"></i> Précédent
                  </button>
                  <button class="btn btn-primary btn-lg px-5 shine-effect btn-animated" @click="goToStep(3)">
                    Continuer <i class="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
              
              <!-- Formulaire Étape 3 - Spécifications -->
              <div v-if="currentStep === 3" data-aos="fade-up">
                <h3 class="mb-4 fs-4 text-gradient">Spécifications du produit</h3>
                
                <div class="row g-4">
                  <div class="col-12">
                    <div class="specs-container p-4 border rounded-3 mb-2">
                      <div v-for="(spec, index) in product.specItems" :key="index" class="spec-item mb-3">
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="form-floating custom-floating">
                              <input 
                                type="text" 
                                class="form-control custom-form-control" 
                                :id="'spec-name-' + index" 
                                placeholder="Nom"
                                v-model="spec.name"
                              >
                              <label :for="'spec-name-' + index">Nom</label>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="form-floating custom-floating">
                              <input 
                                type="text" 
                                class="form-control custom-form-control" 
                                :id="'spec-value-' + index" 
                                placeholder="Valeur"
                                v-model="spec.value"
                              >
                              <label :for="'spec-value-' + index">Valeur</label>
                            </div>
                          </div>
                          <div class="col-md-2 d-flex align-items-center">
                            <button class="btn btn-outline-danger" @click="removeSpec(index)">
                              <i class="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <button class="btn btn-outline-primary mt-3 shine-effect btn-animated" @click="addSpec">
                        <i class="bi bi-plus-circle me-2"></i> Ajouter une spécification
                      </button>
                    </div>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between mt-4">
                  <button class="btn btn-outline-primary btn-lg px-5 shine-effect btn-prev" @click="goToStep(2)">
                    <i class="bi bi-arrow-left me-2"></i> Précédent
                  </button>
                  <button class="btn btn-primary btn-lg px-5 shine-effect btn-animated" @click="goToStep(4)">
                    Continuer <i class="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
              
              <!-- Formulaire Étape 4 - Images -->
              <div v-if="currentStep === 4" data-aos="fade-up">
                <h3 class="mb-4 fs-4 text-gradient">Images du produit</h3>
                
                <div class="row g-4">
                  <div class="col-12">
                    <div class="image-upload-container p-4 border rounded-3 mb-2">
                      <h5 class="mb-3">Image principale</h5>
                      <div class="image-upload-area d-flex flex-column align-items-center justify-content-center">
                        <div class="image-preview mb-3" v-if="product.images && product.images.length > 0">
                          <img :src="product.images[0]" alt="Image principale" class="img-fluid rounded shadow-sm" style="max-height: 200px;">
                        </div>
                        <div class="image-placeholder mb-3" v-else>
                          <i class="bi bi-image fs-1 text-muted"></i>
                          <p class="mb-0">Aucune image</p>
                        </div>
                        <label for="mainImage" class="btn btn-outline-primary shine-effect">
                          <i class="bi bi-upload me-2"></i> Choisir une image
                        </label>
                        <input type="file" id="mainImage" class="d-none" accept="image/*" @change="handleImageUpload($event, 0)">
                      </div>
                      
                      <hr class="my-4">
                      
                      <h5 class="mb-3">Images secondaires</h5>
                      <div class="row g-3">
                        <div class="col-md-6" v-for="index in [1, 2]" :key="index">
                          <div class="image-upload-area d-flex flex-column align-items-center justify-content-center p-3 border rounded">
                            <div class="image-preview mb-3" v-if="product.images && product.images[index]">
                              <img :src="product.images[index]" alt="Image secondaire" class="img-fluid rounded shadow-sm" style="max-height: 150px;">
                            </div>
                            <div class="image-placeholder mb-3" v-else>
                              <i class="bi bi-image fs-2 text-muted"></i>
                              <p class="mb-0 small">Image {{ index }}</p>
                            </div>
                            <label :for="'secondaryImage' + index" class="btn btn-sm btn-outline-primary shine-effect">
                              <i class="bi bi-upload me-2"></i> Choisir une image
                            </label>
                            <input type="file" :id="'secondaryImage' + index" class="d-none" accept="image/*" @change="handleImageUpload($event, index)">
                          </div>
                        </div>
                      </div>
                      
                      <div class="image-upload-note mt-4">
                        <p class="text-muted small mb-0">
                          <i class="bi bi-info-circle me-2"></i>
                          Formats recommandés : JPG, PNG. Taille max : 2 MB. Résolution idéale : 1200x800 pixels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between mt-4">
                  <button class="btn btn-outline-primary btn-lg px-5 shine-effect btn-prev" @click="goToStep(3)">
                    <i class="bi bi-arrow-left me-2"></i> Précédent
                  </button>
                  <button class="btn btn-success btn-lg px-5 shine-effect btn-animated" @click="saveProduct">
                    <i class="bi bi-check-circle me-2"></i> Enregistrer le produit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// États
const route = useRoute();
const router = useRouter();
const productSlug = computed(() => route.params.id); // On utilise l'ID de la route comme slug
const currentStep = ref(1);
const loading = ref(true);
const categories = ref([]);
const imageFiles = ref([]);
const originalProduct = ref(null);

// État du produit
const product = reactive({
  id: null,
  name: '',
  slug: '',
  brand: '',
  model: '',
  price: null,
  old_price: null,
  promo: false,
  category_id: '',
  in_stock: true,
  description: '',
  specs: [],       // Pour compatibilité avec l'API
  specItems: [],   // Pour l'édition dans le formulaire
  images: []
});

// Charger les données
const loadData = async () => {
  try {
    loading.value = true;
    
    // Charger les catégories via le service API
    const categoriesService = await import('~/services/categories').then(m => m.default);
    categories.value = await categoriesService.getAllCategories();
    
    // Charger les produits via le service API
    const productsService = await import('~/services/products').then(m => m.default);
    
    // Récupérer directement le produit par son slug
    try {
      const foundProduct = await productsService.getProduct(productSlug.value);
    
      if (!foundProduct) {
        alert('Produit non trouvé');
        router.push('/admin/produits');
        return;
      }
      
      // Copier les données dans le state
      Object.assign(product, foundProduct);
    } catch (error) {
      console.error('Erreur lors de la récupération du produit:', error);
      alert('Erreur lors du chargement du produit');
      router.push('/admin/produits');
      return;
    }
    
    // Si specifications existe dans les données du produit, les utiliser pour initialiser specItems
    if (product.specifications && product.specifications.length > 0) {
      // Initialiser specItems à partir des specifications complètes
      product.specItems = product.specifications.map(spec => ({
        id: spec.id,
        name: spec.name,
        value: spec.value,
        is_highlighted: spec.is_highlighted || true
      }));
    } else {
      // Sinon initialiser avec trois éléments vides
      product.specItems = [
        { name: '', value: '', is_highlighted: true },
        { name: '', value: '', is_highlighted: true },
        { name: '', value: '', is_highlighted: true }
      ];
    }
    
    // Générer le format de specs pour la compatibilité API
    product.specs = product.specItems
      .filter(item => item.name && item.value) // Ne garder que les specs complètes
      .map(item => `${item.name}: ${item.value}`);
    
    // Si images n'existe pas, initialiser avec un tableau vide
    if (!product.images) {
      product.images = [];
    }
    
    // Sauvegarder l'état original pour comparaison
    originalProduct.value = JSON.parse(JSON.stringify(product));
    
    loading.value = false;
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
    loading.value = false;
  }
};

// Générer un slug à partir du nom
const generateSlug = () => {
  if (product.name) {
    product.slug = product.name
      .toLowerCase()
      .replace(/[àáâãäå]/g, 'a')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõö]/g, 'o')
      .replace(/[ùúûü]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9]/g, ' ')
      .trim()
      .replace(/\s+/g, '-');
  }
};

// Formater le prix avec des espaces
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR').format(price);
};

// Naviguer vers une étape
const goToStep = (step) => {
  // Validation simple pour chaque étape
  if (step > currentStep.value) {
    if (step === 2 && (!product.name || !product.slug || !product.brand || !product.category_id || !product.description)) {
      alert('Veuillez remplir tous les champs obligatoires avant de continuer.');
      return;
    }
    
    if (step === 3 && !product.price) {
      alert('Veuillez spécifier un prix pour le produit.');
      return;
    }
  }
  
  currentStep.value = step;
  
  // Scroll en haut du formulaire
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Ajouter une spécification
const addSpec = () => {
  product.specItems.push({
    name: '',
    value: '',
    is_highlighted: true
  });
};

// Supprimer une spécification
const removeSpec = (index) => {
  // Vérifier si la spécification a un ID (existe déjà dans la base de données)
  const specToRemove = product.specItems[index];
  product.specItems.splice(index, 1);
  
  // Mettre à jour specs pour la compatibilité avec l'API
  product.specs = product.specItems
    .filter(item => item.name && item.value)
    .map(item => `${item.name}: ${item.value}`);
};

// Générer un dégradé de couleur en fonction de la marque
const getBrandGradient = (brand) => {
  const brandColors = {
    'Apple': 'linear-gradient(135deg, #A8B2C3 0%, #48494B 100%)',
    'Samsung': 'linear-gradient(135deg, #1428A0 0%, #000000 100%)',
    'Google': 'linear-gradient(135deg, #EA4335 0%, #4285F4 100%)',
    'Xiaomi': 'linear-gradient(135deg, #FF6900 0%, #ffb02e 100%)',
    'OnePlus': 'linear-gradient(135deg, #F5010C 0%, #8d0208 100%)',
    'Dell': 'linear-gradient(135deg, #007DB8 0%, #003c72 100%)',
    'Lenovo': 'linear-gradient(135deg, #E2231A 0%, #73110d 100%)',
    'Microsoft': 'linear-gradient(135deg, #7FBA00 0%, #3a5800 100%)',
    'Sony': 'linear-gradient(135deg, #0063C8 0%, #001e3e 100%)',
    'Anker': 'linear-gradient(135deg, #6CC04A 0%, #439922 100%)'
  };
  
  return brandColors[brand] || 'linear-gradient(135deg, #5D6272 0%, #2F3137 100%)';
};

// Sauvegarder le produit
const saveProduct = async () => {
  // Démarrer l'indicateur de chargement
  loading.value = true;
  
  // Effectuer la validation finale
  if (!product.name || !product.slug || !product.brand || !product.category_id || !product.description || !product.price) {
    alert('Veuillez remplir tous les champs obligatoires avant de sauvegarder.');
    loading.value = false;
    return;
  }
  
  // Nettoyer les spécifications vides
  product.specs = product.specs.filter(spec => spec.trim() !== '');
  
  try {
    // Log des données avant soumission
    console.log('Valeurs du formulaire avant soumission:', {
      name: product.name,
      slug: product.slug,
      description: product.description, 
      category_id: product.category_id,
      brand: product.brand,
      model: product.model,
      price: product.price,
      promo: product.promo,
      old_price: product.old_price,
      in_stock: product.in_stock,
      is_featured: product.is_featured,
      is_active: product.is_active
    });
    
    // APPROCHE TRÈS SIMPLE POUR LES PROMOTIONS
    // Dans Django, une promotion existe quand original_price > price
    
    console.log('===== DONNÉES DE PROMOTION (SIMPLIFIÉES) =====');
    console.log('Prix actuel:', product.price);
    console.log('Ancien prix:', product.old_price);
    console.log('Promotion activée?', product.promo);
    
    // Définir un prix original uniquement si la case promo est cochée
    let originalPrice = null;
    if (product.promo && product.old_price) {
      originalPrice = parseFloat(product.old_price);
      // Vérification simple que l'ancien prix est supérieur
      if (originalPrice <= parseFloat(product.price)) {
        alert('Pour une promotion, l\'ancien prix doit être supérieur au prix actuel!');
      }
    }
    
    // Préparer les données pour l'API Django - version simplifiée
    const productData = {
      name: product.name,
      slug: product.slug,
      description: product.description,
      category: parseInt(product.category_id),
      brand: product.brand,
      model: product.model || null,
      price: parseFloat(product.price),
      
      // Cette ligne est cruciale: on envoie juste l'ancien prix si promo est coché
      original_price: originalPrice,
      
      // Disponibilité - envoyer le statut directement, pas un booléen in_stock
      status: product.in_stock ? 'in_stock' : 'out_of_stock',
      
      // Options
      is_featured: product.is_featured,
      is_active: product.is_active
    }
    
    // Log pour débogage
    console.log('Détail complet des données envoyées au backend:', productData);
    
    console.log('Données à envoyer pour la mise à jour:', productData);
    
    // Appel à l'API pour mettre à jour le produit
    const productsService = await import('~/services/products').then(m => m.default);
    const updatedProduct = await productsService.updateProduct(productSlug.value, productData);
    
    console.log('Produit mis à jour:', updatedProduct);
    
    // SOLUTION TRÈS SIMPLE POUR LES IMAGES
    try {
      // Si nous avons des nouvelles images à ajouter
      if (imageFiles.value && imageFiles.value.some(file => file !== null)) {
        // 1. D'abord supprimer TOUTES les images existantes
        const productDetails = await productsService.getProduct(updatedProduct.slug);
        const existingImages = productDetails.images || [];
        console.log('===== GESTION DES IMAGES =====');
        console.log(`${existingImages.length} images existantes trouvées`, existingImages);
        
        // Supprimer chaque image une par une
        for (const image of existingImages) {
          if (image && image.id) {
            try {
              console.log(`Suppression de l'image ID=${image.id}...`);
              await productsService.deleteProductImage(updatedProduct.slug, image.id);
              console.log(`Image ID=${image.id} supprimée avec succès`);
              // Pause à chaque suppression pour éviter les problèmes
              await new Promise(resolve => setTimeout(resolve, 300));
            } catch (err) {
              console.error(`Erreur lors de la suppression de l'image ${image.id}:`, err);
            }
          }
        }
        
        // 2. Ensuite, attendre un moment avant d'ajouter les nouvelles images
        console.log('Attente avant ajout des nouvelles images...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 3. Enfin, ajouter toutes les nouvelles images
        console.log('Ajout des nouvelles images:');
        for (let i = 0; i < imageFiles.value.length; i++) {
          if (imageFiles.value[i]) {
            // Préparer l'image à envoyer
            const file = imageFiles.value[i];
            const isPrimary = i === 0; // La première est principale
            
            const formData = new FormData();
            formData.append('image', file);
            formData.append('is_primary', isPrimary);
            formData.append('alt_text', product.name);
            
            try {
              console.log(`Ajout de l'image ${i+1}...`);
              const result = await productsService.addProductImage(updatedProduct.slug, formData);
              console.log(`Image ${i+1} ajoutée avec succès:`, result);
              // Pause entre chaque ajout
              await new Promise(resolve => setTimeout(resolve, 300));
            } catch (err) {
              console.error(`Erreur lors de l'ajout de l'image ${i+1}:`, err);
            }
          }
        }
      }
    } catch (error) {
      console.error('Erreur lors de la gestion des images:', error);
    }
    
    // Traiter les spécifications modifiées
    if (product.specItems && product.specItems.length > 0) {
      console.log('Mise à jour des spécifications...');
      
      // Récupérer d'abord toutes les spécifications existantes du produit
      try {
        const productDetails = await productsService.getProduct(updatedProduct.slug);
        const existingSpecs = productDetails.specifications || [];
        
        console.log('Spécifications existantes:', existingSpecs);
        console.log('Spécifications à mettre à jour:', product.specItems);
        
        // Parcourir toutes les spécifications du formulaire
        for (const specItem of product.specItems) {
          // Ne traiter que les spécifications qui ont un nom et une valeur
          if (specItem.name && specItem.name.trim() && specItem.value && specItem.value.trim()) {
            // Chercher si cette spécification existe déjà
            const existingSpec = existingSpecs.find(s => s.name === specItem.name);
            
            try {
              if (existingSpec) {
                console.log(`Mise à jour de la spécification existante "${specItem.name}"`);
                
                // Si la valeur a changé, supprimer l'ancienne spécification et en créer une nouvelle
                if (existingSpec.value !== specItem.value) {
                  // FIX: Passer le slug du produit comme second paramètre
                  await productsService.deleteSpecification(existingSpec.id, updatedProduct.slug);
                  await productsService.addProductSpecification(updatedProduct.slug, {
                    name: specItem.name,
                    value: specItem.value,
                    is_highlighted: true
                  });
                  console.log(`Spécification "${specItem.name}" mise à jour avec la nouvelle valeur "${specItem.value}"`);
                } else {
                  console.log(`Spécification "${specItem.name}" inchangée, aucune action nécessaire`);
                }
              } else {
                // Créer une nouvelle spécification
                console.log(`Création de la nouvelle spécification "${specItem.name}"`);
                await productsService.addProductSpecification(updatedProduct.slug, {
                  name: specItem.name,
                  value: specItem.value,
                  is_highlighted: true
                });
              }
            } catch (specError) {
              console.error(`Erreur lors de la mise à jour de la spécification "${specItem.name}":`, specError);
            }
          }
        }
        
        // Supprimer les spécifications qui n'existent plus dans le formulaire
        for (const existingSpec of existingSpecs) {
          const stillExists = product.specItems.some(item => item.name === existingSpec.name);
          
          if (!stillExists) {
            try {
              console.log(`Suppression de la spécification "${existingSpec.name}" qui n'existe plus dans le formulaire`);
              // Passer le slug du produit en second paramètre pour former l'URL correcte
              await productsService.deleteSpecification(existingSpec.id, updatedProduct.slug);
              console.log(`Spécification "${existingSpec.name}" supprimée avec succès`);
            } catch (deleteError) {
              console.error(`Erreur lors de la suppression de la spécification "${existingSpec.name}":`, deleteError);
            }
          }
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des spécifications existantes:', error);
      }
    }
    
    
    // Notification de succès
    alert('Produit mis à jour avec succès !');
    
    // Rediriger vers la liste des produits
    router.push('/admin/produits');
  } catch (error) {
    console.error('Erreur lors de la mise à jour du produit:', error);
    alert(`Erreur lors de la mise à jour: ${error.message || 'Veuillez réessayer'}`);
  } finally {
    loading.value = false;
  }
};

// Gestion du téléchargement d'images
const handleImageUpload = (event, index) => {
  const file = event.target.files[0];
  if (!file) return;
  
  // Vérification du type de fichier
  if (!file.type.match('image.*')) {
    alert('Veuillez sélectionner une image valide (JPG, PNG, GIF).');
    return;
  }
  
  // Vérification de la taille du fichier (max 2MB)
  if (file.size > 2 * 1024 * 1024) {
    alert('L\'image est trop volumineuse. La taille maximale est de 2 Mo.');
    return;
  }
  
  // Dans un vrai backend, on uploaderait le fichier au serveur ici
  // Pour la démo, on utilise FileReader pour prévisualiser l'image
  const reader = new FileReader();
  reader.onload = (e) => {
    // Assurer que le tableau des images existe
    if (!product.images) product.images = [];
    
    // Assigner l'URL de l'image à la position spécifiée
    if (product.images.length <= index) {
      // Ajouter des éléments vides si nécessaire
      while (product.images.length < index) {
        product.images.push('');
      }
      product.images.push(e.target.result);
    } else {
      product.images[index] = e.target.result;
    }
  };
  reader.readAsDataURL(file);
  
  // Stocker la référence au fichier pour un futur upload
  imageFiles.value[index] = file;
};

onMounted(() => {
  // Initialiser particles.js
  if (window.particlesJS) {
    window.particlesJS('particles-admin-edit-product', {
      particles: {
        number: { value: 65, density: { enable: true, value_area: 800 } },
        color: { value: ['#FF8C00', '#FFA500', '#FFD700', '#FF6B6B', '#FF9E80'] },
        shape: { 
          type: ['circle', 'triangle', 'polygon'],
          polygon: { nb_sides: 6 }
        },
        opacity: { value: 0.22, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 6, random: true, anim: { enable: true, speed: 2, size_min: 2, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#FF8C00', opacity: 0.25, width: 1.2 },
        move: { 
          enable: true, 
          speed: 2.5, 
          direction: 'none', 
          random: true, 
          straight: false, 
          out_mode: 'out', 
          bounce: false,
          attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { 
          onhover: { enable: true, mode: 'bubble' }, 
          onclick: { enable: true, mode: 'push' }, 
          resize: true 
        },
        modes: { 
          grab: { distance: 140, line_linked: { opacity: 0.5 } },
          bubble: { distance: 200, size: 10, duration: 2, opacity: 0.8, speed: 3 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
  
  // Initialiser AOS
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true
    });
  }
  
  // Charger les données du produit
  loadData();
});
</script>

<style scoped>
/* Hero section moins haute */
.admin-hero-section-sm {
  padding-top: 100px;
  padding-bottom: 70px;
  position: relative;
  min-height: 30vh;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.5) 0%, rgba(248, 249, 250, 0.5) 100%);
}

.wave-shape-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  line-height: 0;
  direction: ltr;
}

.wave-shape-bottom svg {
  display: block;
  width: 100%;
  height: 40px;
}

/* Particles container */
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Admin card */
.admin-card {
  background-color: #fff;
  transition: all 0.3s ease;
  border-radius: 16px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 140, 0, 0.1);
  overflow: hidden;
}

.admin-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

/* Form controls */
.form-control, .form-select, .form-check-input {
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  border: 1px solid #dee2e6;
}

.custom-form-control, .custom-form-select {
  border-radius: 0.75rem !important;
  border-width: 1.5px !important;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  background-color: rgba(255, 255, 255, 0.9) !important;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.02) !important;
}

.custom-form-control::placeholder {
  color: transparent !important;
}

.custom-form-control:hover, .custom-form-select:hover {
  background-color: #fff !important;
  border-color: rgba(var(--bs-primary-rgb), 0.5) !important;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03) !important;
}

.custom-form-control:focus, .custom-form-select:focus {
  border-color: var(--bs-primary) !important;
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.2) !important;
  transform: translateY(-2px);
  background-color: #fff !important;
  font-weight: normal !important;
}

.custom-floating label {
  background: linear-gradient(to right, var(--bs-primary), #FF8C00);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0;
  font-weight: normal;
}

.custom-floating input:focus ~ label,
.custom-floating input:not(:placeholder-shown) ~ label {
  opacity: 1;
  animation: floatLabel 0.4s ease-in-out forwards;
}

@keyframes floatLabel {
  0% { transform: translate3d(0, 0, 0); opacity: 0; }
  50% { transform: translate3d(0, -1.2rem, 0); opacity: 0.7; }
  100% { transform: scale(0.85) translate3d(0, -1rem, 0); opacity: 1; }
}

.custom-floating {
  margin-bottom: 0.5rem;
}

.form-floating > .form-control, 
.form-floating > .form-select {
  border-radius: 0.75rem;
  height: calc(3.5rem + 2px);
  line-height: 1.25;
  padding: 1.5rem 1rem 0.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.form-floating > label {
  padding: 1rem 1rem;
  color: #6c757d;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0.7;
  transform-origin: 0 0;
  pointer-events: none; /* Permet de cliquer à travers le label */
}

.form-floating > .form-control:placeholder-shown ~ label {
  transform: translate3d(0, 0.5rem, 0);
  opacity: 0.5;
  font-weight: normal;
}

.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 1;
  transform: scale(0.85) translate3d(0, -1rem, 0);
  color: var(--bs-primary);
  font-weight: 500;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.03);
}

/* Form controls et inputs */
.form-check-input {
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-check-input:checked {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.15rem rgba(var(--bs-primary-rgb), 0.2);
  transform: scale(1.05);
}

.form-check-label {
  cursor: pointer;
  transition: all 0.3s ease;
  padding-left: 5px;
  font-weight: normal;
  color: #495057;
}

.form-check-input:checked ~ .form-check-label {
  color: var(--bs-primary);
  font-weight: normal;
}

.form-floating > textarea.form-control {
  height: 120px;
  padding-top: 1.5rem;
}

/* Custom switches */
.custom-switch {
  padding-left: 2.5rem;
}

.custom-switch .form-check-input.styled-switch {
  width: 3rem !important;
  height: 1.5rem;
  margin-top: 0.25rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.custom-switch .form-check-input.styled-switch:checked {
  background-position: right center;
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.15rem rgba(var(--bs-primary-rgb), 0.2);
}

.custom-switch .form-check-input.styled-switch:focus {
  box-shadow: 0 0 0 0.15rem rgba(var(--bs-primary-rgb), 0.25);
  border-color: rgba(var(--bs-primary-rgb), 0.7);
}

.custom-switch .form-check-label {
  font-size: 1rem;
  font-weight: normal;
  padding-left: 0.5rem;
  color: #495057;
}

/* Stepper */
.edit-product-stepper {
  padding: 1rem 0;
}

.stepper-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.step-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #f8f9fa;
  border: 2px solid #dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #6c757d;
  margin-bottom: 0.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.step-circle:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.step.active .step-circle {
  background: linear-gradient(135deg, var(--bs-primary) 0%, #FF8C00 100%);
  border-color: transparent;
  color: white;
  box-shadow: 0 0 0 5px rgba(var(--bs-primary-rgb), 0.2), 0 5px 15px rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
  animation: pulse 2s infinite;
}

.step.completed .step-circle {
  background: linear-gradient(135deg, #198754 0%, #20c997 100%);
  border-color: transparent;
  color: white;
  box-shadow: 0 3px 8px rgba(32, 201, 151, 0.3);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0.5), 0 5px 15px rgba(0, 0, 0, 0.1); }
  70% { box-shadow: 0 0 0 8px rgba(var(--bs-primary-rgb), 0), 0 5px 15px rgba(0, 0, 0, 0.1); }
  100% { box-shadow: 0 0 0 0 rgba(var(--bs-primary-rgb), 0), 0 5px 15px rgba(0, 0, 0, 0.1); }
}

.step-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6c757d;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.step.active .step-label,
.step.completed .step-label {
  color: var(--bs-dark);
  font-weight: 600;
}

.step-line {
  flex: 1;
  height: 3px;
  background-color: #dee2e6;
  margin: 0 0.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.step-line.active {
  background-color: var(--bs-primary);
}

/* Image upload area */
.image-upload-container {
  background-color: #fff;
  border-radius: 12px;
  border: 1px dashed rgba(var(--bs-primary-rgb), 0.4) !important;
}

.image-upload-area {
  padding: 2rem;
  background-color: rgba(248, 249, 250, 0.5);
  border-radius: 12px;
  border: 2px dashed rgba(var(--bs-primary-rgb), 0.2);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.image-upload-area::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(var(--bs-primary-rgb), 0.03) 0%, rgba(255, 255, 255, 0) 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.image-upload-area:hover {
  background-color: rgba(248, 249, 250, 0.8);
  border-color: var(--bs-primary);
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.07);
}

.image-upload-area:hover::after {
  opacity: 1;
}

.image-preview img {
  transition: all 0.3s ease;
  border: 3px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.image-preview img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
  padding: 1.5rem;
}

/* Animations et effets */
.shine-effect {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.shine-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 70%);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
  pointer-events: none;
}

.shine-effect:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.btn-animated {
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.btn-animated:hover i {
  animation: moveRightIcon 0.5s ease forwards;
}

.btn-prev:hover i {
  animation: moveLeftIcon 0.5s ease forwards;
}

@keyframes moveLeftIcon {
  0% { transform: translateX(0); }
  50% { transform: translateX(-3px); }
  100% { transform: translateX(0); }
}

@keyframes moveRightIcon {
  0% { transform: translateX(0); }
  50% { transform: translateX(3px); }
  100% { transform: translateX(0); }
}

.shine-effect:hover::before {
  left: 100%;
}

.text-gradient {
  background: linear-gradient(90deg, var(--bs-primary) 0%, #FF8C00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  position: relative;
  font-weight: 500;
}

.text-gradient::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, var(--bs-primary) 0%, #FF8C00 100%);
  border-radius: 2px;
}

.section-styled {
  position: relative;
  background-color: var(--bs-light);
}

/* Specs container */
.specs-container {
  background-color: rgba(248, 249, 250, 0.5);
  border-radius: 12px !important;
  border: 1px dashed rgba(var(--bs-primary-rgb), 0.3) !important;
}

.spec-item {
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 12px 15px;
  margin-bottom: 15px !important;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.spec-item:hover {
  transform: translateX(5px);
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border-color: rgba(var(--bs-primary-rgb), 0.2);
}
</style>
