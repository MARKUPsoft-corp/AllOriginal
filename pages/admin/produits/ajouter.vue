<template>
  <div>
    <!-- Section Hero Admin Ajouter Produit avec Particles -->
    <section class="py-5 bg-white position-relative admin-hero-section-sm overflow-hidden">
      <div id="particles-admin-add-product" class="particles-container"></div>
      <div class="container py-4 position-relative">
        <div class="row">
          <div class="col-lg-8" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect">Gestion des produits</span>
            <h1 class="display-5 fw-bold mb-3">Ajouter un <span class="text-orange border-3 border-bottom border-orange pb-1 shine-text">Produit</span></h1>
            <p class="lead mb-4 opacity-75">
              Créez un nouveau produit dans votre catalogue
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
    
    <!-- Section Formulaire Ajouter Produit -->
    <section class="add-product-form-section py-5 section-styled position-relative overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="admin-card rounded-4 shadow-sm p-4 p-lg-5">
              <!-- Formulaire en plusieurs étapes -->
              <div class="add-product-stepper mb-5">
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
                    <div class="step-label">Prix & Disponibilité</div>
                  </div>
                  <div class="step-line" :class="{ 'active': currentStep > 2 }"></div>
                  
                  <div class="step" :class="{ 'active': currentStep >= 3, 'completed': currentStep > 3 }">
                    <div class="step-circle">
                      <span v-if="currentStep <= 3">3</span>
                      <i v-else class="bi bi-check-lg"></i>
                    </div>
                    <div class="step-label">Spécifications</div>
                  </div>
                </div>
              </div>
              
              <!-- Formulaire Étape 1 - Informations générales -->
              <div v-if="currentStep === 1" data-aos="fade-up">
                <h3 class="mb-4 fs-4 text-gradient">Informations générales</h3>
                
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input 
                        type="text" 
                        class="form-control" 
                        id="productName" 
                        placeholder="Nom du produit" 
                        v-model="product.name"
                        @input="generateSlug"
                      >
                      <label for="productName">Nom du produit*</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input 
                        type="text" 
                        class="form-control" 
                        id="productSlug" 
                        placeholder="Slug (URL)" 
                        v-model="product.slug"
                      >
                      <label for="productSlug">Slug (URL)*</label>
                    </div>
                    <small class="text-muted">Le slug est généré automatiquement mais peut être personnalisé</small>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input 
                        type="text" 
                        class="form-control" 
                        id="productBrand" 
                        placeholder="Marque" 
                        v-model="product.brand"
                      >
                      <label for="productBrand">Marque*</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input 
                        type="text" 
                        class="form-control" 
                        id="productModel" 
                        placeholder="Modèle" 
                        v-model="product.model"
                      >
                      <label for="productModel">Modèle</label>
                    </div>
                  </div>
                  
                  <div class="col-md-12">
                    <div class="form-floating">
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
                    <div class="form-floating">
                      <textarea 
                        class="form-control" 
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
              
              <!-- Formulaire Étape 2 - Prix & Disponibilité -->
              <div v-if="currentStep === 2" data-aos="fade-up">
                <h3 class="mb-4 fs-4 text-gradient">Prix & Disponibilité</h3>
                
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input 
                        type="number" 
                        class="form-control" 
                        id="productPrice" 
                        placeholder="Prix" 
                        v-model="product.price"
                      >
                      <label for="productPrice">Prix (FCFA)*</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input 
                        type="number" 
                        class="form-control" 
                        id="productOldPrice" 
                        placeholder="Ancien prix (si promo)" 
                        v-model="product.old_price"
                        :disabled="!product.promo"
                      >
                      <label for="productOldPrice">Ancien prix (FCFA)</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-check form-switch py-3">
                      <input 
                        class="form-check-input" 
                        type="checkbox" 
                        id="productPromo" 
                        v-model="product.promo"
                      >
                      <label class="form-check-label ms-2" for="productPromo">Produit en promotion</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-check form-switch py-3">
                      <input 
                        class="form-check-input" 
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
              
              <!-- Formulaire Étape 3 - Spécifications et Images -->
              <div v-if="currentStep === 3" data-aos="fade-up">
                <h3 class="mb-4 fs-4 text-gradient">Spécifications et Images</h3>
                
                <div class="row g-4 mb-5">
                  <div class="col-12">
                    <h4 class="fs-5 mb-3">Spécifications techniques</h4>
                    <p class="text-muted mb-4">Ajoutez les caractéristiques techniques principales du produit. Format: <span class="fw-bold">Nom: Valeur</span> (exemple: "Processeur: Snapdragon 888")</p>
                    
                    <div class="specs-container">
                      <div v-for="(spec, index) in product.specs" :key="index" class="spec-item mb-3">
                        <div class="input-group">
                          <input type="text" class="form-control" v-model="product.specs[index]" placeholder="Nom: Valeur">
                          <button class="btn btn-outline-danger" type="button" @click="removeSpec(index)">
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                      
                      <button class="btn btn-outline-primary btn-sm" @click="addSpec">
                        <i class="bi bi-plus-circle me-2"></i> Ajouter une spécification
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Section d'upload d'images -->
                <div class="row g-4">
                  <div class="col-12">
                    <h4 class="fs-5 mb-3">Images du produit</h4>
                    <p class="text-muted mb-4">Ajoutez au moins une image principale pour votre produit. Formats supportés: JPG, PNG, WEBP.</p>
                    
                    <div class="product-images-uploader mb-4">
                      <div class="row">
                        <!-- Preview des images sélectionnées -->
                        <div v-if="imagePreviewUrls.length > 0" class="col-12 mb-4">
                          <div class="images-preview-container d-flex flex-wrap gap-3">
                            <div v-for="(url, index) in imagePreviewUrls" :key="index" class="image-preview-item position-relative">
                              <img :src="url" class="img-thumbnail" alt="Aperçu" style="width: 150px; height: 150px; object-fit: cover;">
                              <div class="image-actions position-absolute top-0 end-0 d-flex">
                                <button v-if="index === 0" class="btn btn-sm btn-success me-1" disabled title="Image principale">
                                  <i class="bi bi-star-fill"></i>
                                </button>
                                <button v-else class="btn btn-sm btn-outline-secondary me-1" @click="setAsPrimary(index)" title="Définir comme principale">
                                  <i class="bi bi-star"></i>
                                </button>
                                <button class="btn btn-sm btn-danger" @click="removeImage(index)" title="Supprimer">
                                  <i class="bi bi-trash"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <!-- Zone de drop ou sélection de fichier -->
                        <div class="col-12">
                          <div class="dropzone-container p-4 border border-dashed rounded-3 text-center" 
                               @dragover.prevent="onDragOver"
                               @dragleave.prevent="onDragLeave"
                               @drop.prevent="onDrop"
                               :class="{ 'drag-over': isDragging }">
                            <input type="file" ref="fileInput" @change="onFileSelected" multiple accept="image/*" class="d-none">
                            <div class="dropzone-content">
                              <i class="bi bi-cloud-arrow-up text-primary" style="font-size: 2.5rem;"></i>
                              <h5 class="mt-3">Glissez vos images ici</h5>
                              <p class="text-muted">ou</p>
                              <button type="button" class="btn btn-outline-primary" @click="$refs.fileInput.click()">
                                <i class="bi bi-folder2-open me-2"></i> Parcourir
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between mt-4">
                  <button class="btn btn-outline-primary btn-lg px-5 shine-effect btn-prev" @click="goToStep(2)">
                    <i class="bi bi-arrow-left me-2"></i> Précédent
                  </button>
                  <button class="btn btn-success btn-lg px-5 shine-effect btn-animated" @click="saveProduct">
                    <i class="bi bi-check-circle me-2"></i> Enregistrer le produit
                  </button>
                </div>
              </div>
              
              <!-- Aperçu du produit (toujours visible) -->
              <div class="product-preview mt-5 pt-4 border-top">
                <h3 class="mb-4 fs-5 text-muted">Aperçu du produit</h3>
                
                <div class="row">
                  <div class="col-md-6 offset-md-3">
                    <div class="product-card shadow-sm rounded-4 overflow-hidden">
                      <div class="product-brand p-3 bg-light">
                        <span class="brand-badge bg-primary text-white rounded-pill px-3 py-1">{{ product.brand || 'Marque' }}</span>
                        <span class="stock-badge px-2 py-1 rounded-pill ms-2" :class="product.in_stock ? 'stock-badge-success' : 'stock-badge-danger'">
                          {{ product.in_stock ? "En stock" : "Rupture" }}
                        </span>
                      </div>
                      
                      <div class="product-image p-4 d-flex justify-content-center align-items-center">
                        <div class="product-placeholder shadow-lg rounded-4 tilt-effect" :style="{ background: getBrandGradient(product.brand) }">
                          <span class="brand-initial">{{ product.brand ? product.brand.charAt(0) : 'A' }}</span>
                          <span class="brand-model opacity-50">{{ product.model || (product.name ? product.name.split(' ')[0] : 'Modèle') }}</span>
                        </div>
                      </div>
                      
                      <div class="product-info p-3">
                        <h3 class="product-title h5">{{ product.name || 'Nom du produit' }}</h3>
                        <div class="product-features my-2" v-if="product.specs && product.specs.length > 0">
                          <span v-for="(spec, index) in product.specs.slice(0, 3)" :key="index" class="feature-badge me-2 rounded-pill px-2 py-1 bg-light">
                            {{ spec }}
                          </span>
                        </div>
                        <p class="product-description small text-muted">{{ product.description || 'Description du produit' }}</p>
                        <div class="product-price-container d-flex align-items-center mb-3">
                          <div class="product-price fw-bold">{{ formatPrice(product.price || 0) }} <span class="currency">FCFA</span></div>
                          <div v-if="product.promo" class="product-old-price ms-2 small text-muted text-decoration-line-through">{{ formatPrice(product.old_price || 0) }} FCFA</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import '~/assets/css/admin-styles.css';
import productService from '~/services/products';
import categoriesService from '~/services/categories';

// Router pour la navigation
const router = useRouter();

// État du formulaire
const currentStep = ref(1);
const isLoading = ref(false); // Indicateur de chargement
const categories = ref([]);
const brands = ref(['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'OnePlus', 'Google', 'Oppo', 'Vivo', 'Lenovo', 'HP', 'Dell', 'Asus', 'Acer', 'MSI', 'Sony', 'LG', 'JBL', 'Autre']);

// Gestion des images
const fileInput = ref(null);
const isDragging = ref(false);
const selectedFiles = ref([]);
const imagePreviewUrls = ref([]);

// État du produit
const product = reactive({
  name: '',
  slug: '',
  brand: '',
  model: '',
  category_id: '',
  description: '',
  price: '',
  original_price: '',
  old_price: '',
  status: 'in_stock',
  promo: false,
  is_featured: false,
  is_active: true,
  specs: ['']
});

// Charger les données depuis le backend
const loadData = async () => {
  try {
    isLoading.value = true;
    
    // Récupérer les catégories depuis l'API Django
    const response = await categoriesService.getAllCategories();
    categories.value = response;
    
    // Récupérer les types de spécifications pour les suggestions
    const specTypes = await productService.getSpecificationTypes();
    console.log('Types de spécifications disponibles:', specTypes);
    
    // Si aucune catégorie n'est trouvée, afficher un message d'erreur
    if (categories.value.length === 0) {
      console.warn('Aucune catégorie trouvée dans la base de données. Utilisation des catégories par défaut.');
      categories.value = [
        { id: 1, name: 'Smartphones' },
        { id: 2, name: 'Ordinateurs portables' },
        { id: 3, name: 'Tablettes' },
        { id: 4, name: 'Accessoires' },
        { id: 5, name: 'Écouteurs & Audio' },
      ];
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
    alert('Erreur lors du chargement des catégories. Utilisation des catégories par défaut.');
    // Utiliser des catégories par défaut en cas d'erreur
    categories.value = [
      { id: 1, name: 'Smartphones' },
      { id: 2, name: 'Ordinateurs portables' },
      { id: 3, name: 'Tablettes' },
      { id: 4, name: 'Accessoires' },
      { id: 5, name: 'Écouteurs & Audio' },
    ];
  } finally {
    isLoading.value = false;
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
  product.specs.push('');
};

// Supprimer une spécification
const removeSpec = (index) => {
  product.specs.splice(index, 1);
};

// Méthodes de gestion des images
const onDragOver = () => {
  isDragging.value = true;
};

const onDragLeave = () => {
  isDragging.value = false;
};

const onDrop = (event) => {
  isDragging.value = false;
  handleFiles(event.dataTransfer.files);
};

const onFileSelected = (event) => {
  handleFiles(event.target.files);
};

const handleFiles = (files) => {
  if (!files || files.length === 0) return;
  
  // Convertir FileList en Array
  const newFiles = Array.from(files);
  
  // Filtrer pour n'accepter que des images (jpg, png, webp, etc.)
  const imageFiles = newFiles.filter(file => file.type.startsWith('image/'));
  
  if (imageFiles.length === 0) {
    alert('Veuillez sélectionner uniquement des fichiers image (JPG, PNG, WEBP)');
    return;
  }
  
  // Ajouter les nouveaux fichiers à la liste des fichiers sélectionnés
  selectedFiles.value = [...selectedFiles.value, ...imageFiles];
  
  // Générer des URL pour les prévisualisations
  imageFiles.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreviewUrls.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  });
};

const removeImage = (index) => {
  // Supprimer le fichier et la prévisualisation
  selectedFiles.value.splice(index, 1);
  imagePreviewUrls.value.splice(index, 1);
};

const setAsPrimary = (index) => {
  // Déplacer l'image sélectionnée en première position (image principale)
  if (index > 0) {
    // Sauvegarder les éléments à échanger
    const file = selectedFiles.value[index];
    const url = imagePreviewUrls.value[index];
    
    // Supprimer les éléments de leur position actuelle
    selectedFiles.value.splice(index, 1);
    imagePreviewUrls.value.splice(index, 1);
    
    // Les insérer au début des tableaux
    selectedFiles.value.unshift(file);
    imagePreviewUrls.value.unshift(url);
  }
};

// Sauvegarder le produit
const saveProduct = async () => {
  // Afficher le spinner de chargement
  isLoading.value = true;
  
  // Effectuer la validation finale
  if (!product.name || !product.slug || !product.brand || !product.category_id || !product.description || !product.price) {
    alert('Veuillez remplir tous les champs obligatoires avant de sauvegarder.');
    isLoading.value = false;
    return;
  }
  
  // Vérifier si au moins une image a été sélectionnée
  if (selectedFiles.value.length === 0) {
    alert('Veuillez ajouter au moins une image pour le produit.');
    isLoading.value = false;
    return;
  }
  
  try {
    // Préparer les données pour l'API Django
    const productData = {
      name: product.name,
      slug: product.slug,
      description: product.description,
      category: parseInt(product.category_id), // Django attend un ID numérique
      brand: product.brand,
      model: product.model || null,
      price: parseFloat(product.price),
      original_price: product.original_price ? parseFloat(product.original_price) : null,
      status: product.in_stock ? 'in_stock' : 'out_of_stock', // Statut basé sur in_stock
      is_featured: product.is_featured,
      is_active: product.is_active
    };
    
    console.log('Produit à sauvegarder:', productData);
    
    // 1. Créer le produit dans la base de données
    const savedProduct = await productService.createProduct(productData);
    console.log('Produit enregistré:', savedProduct);
    
    // 2. Ajouter les images au produit
    for (let i = 0; i < selectedFiles.value.length; i++) {
      const file = selectedFiles.value[i];
      const isPrimary = i === 0; // La première image est définie comme principale
      
      // Créer un FormData pour l'upload de fichier
      const formData = new FormData();
      formData.append('image', file);
      formData.append('is_primary', isPrimary);
      formData.append('alt_text', product.name); // Utiliser le nom du produit comme texte alternatif par défaut
      
      await productService.addProductImage(savedProduct.slug, formData);
      console.log(`Image ${i+1}/${selectedFiles.value.length} ajoutée`);
    }
    
    // 3. Ajouter les spécifications au produit
    const specs = product.specs.filter(spec => spec.trim() !== '');
    
    if (savedProduct && savedProduct.slug && specs.length > 0) {
      // Traiter chaque spécification
      for (const spec of specs) {
        const [name, value] = spec.split(':').map(s => s.trim());
        if (name && value) {
          await productService.addProductSpecification(savedProduct.slug, {
            name,
            value,
            is_highlighted: true
          });
        }
      }
      console.log(`${specs.length} spécifications ajoutées`);
    }
    
    // Rediriger vers la liste des produits avec un message de succès
    setTimeout(() => {
      alert('Produit et images enregistrés avec succès !');
      router.push('/admin/produits');
    }, 500);
    
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du produit:', error);
    alert(`Erreur lors de l'enregistrement: ${error.message || 'Veuillez réessayer'}`);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  // Initialiser particles.js
  if (window.particlesJS) {
    window.particlesJS('particles-admin-add-product', {
      particles: {
        number: { value: 65, density: { enable: true, value_area: 800 } },
        color: { value: ['#FF8C00', '#FFA500', '#FFD700', '#FF6B6B', '#FF9E80'] },
        shape: { type: ['circle', 'triangle', 'polygon'], polygon: { nb_sides: 6 } },
        opacity: { value: 0.22, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 6, random: true, anim: { enable: true, speed: 2, size_min: 2, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#FF8C00', opacity: 0.25, width: 1.2 },
        move: { enable: true, speed: 2.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 0.3 } } }
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
  
  // Charger les données
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

/* Admin card */
.admin-card {
  background-color: #fff;
  transition: all 0.3s ease;
}

/* Form controls */
.form-control, .form-select, .form-check-input {
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.form-floating > .form-control, 
.form-floating > .form-select {
  border-radius: 0.5rem;
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}

.form-floating > label {
  padding: 1rem 0.75rem;
}

.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.form-control:focus, .form-select:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.15);
}

.form-check-input:checked {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.form-floating > textarea.form-control {
  height: 100px;
}

/* Stepper */
.add-product-stepper {
  padding: 1rem 0;
}

.stepper-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f8f9fa;
  border: 2px solid #dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #6c757d;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.step.active .step-circle {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  color: white;
  box-shadow: 0 0 0 5px rgba(var(--bs-primary-rgb), 0.2);
}

.step.completed .step-circle {
  background-color: #198754;
  border-color: #198754;
  color: white;
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
  color: var(--bs-secondary);
  font-weight: 600;
}

.step-line {
  flex: 1;
  height: 2px;
  background-color: #dee2e6;
  margin: 0 0.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.step-line.active {
  background-color: var(--bs-primary);
}

/* Spécifications */
.specs-container {
  background-color: rgba(var(--bs-light-rgb), 0.5);
}

/* Aperçu du produit */
.product-card {
  background-color: #fff;
  transition: all 0.3s ease;
}

.brand-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
}

.stock-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
}

.stock-badge-success {
  background-color: rgba(25, 135, 84, 0.1);
  color: #198754;
}

.stock-badge-danger {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}

.feature-badge {
  font-size: 0.75rem;
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  color: var(--bs-primary);
}

.product-placeholder {
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.3s ease;
}

.brand-initial {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}

.brand-model {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Animations et effets */
.tilt-effect {
  transition: transform 0.3s ease;
}

.tilt-effect:hover {
  transform: perspective(500px) rotateX(5deg) rotateY(5deg);
}

.section-styled {
  position: relative;
  background-color: var(--bs-light);
}

/* Responsive */
@media (max-width: 768px) {
  .admin-hero-section-sm {
    padding-top: 80px;
    padding-bottom: 50px;
  }
  
  .stepper-container {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .step {
    flex-direction: row;
    margin-bottom: 1rem;
    width: 100%;
  }
  
  .step-circle {
    margin-bottom: 0;
    margin-right: 1rem;
  }
  
  .step-line {
    width: 2px;
    height: 20px;
    margin: 0.5rem 0;
    margin-left: 19px;
  }
  
  .product-placeholder {
    width: 120px;
    height: 120px;
  }
}
</style>
