<template>
  <div>
    <!-- Section Hero Admin Catégories avec Particles -->
    <section class="py-5 bg-white position-relative admin-hero-section-sm overflow-hidden">
      <div id="particles-admin-categories" class="particles-container"></div>
      <div class="container py-4 position-relative">
        <div class="row">
          <div class="col-lg-8" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect">Gestion des catégories</span>
            <h1 class="display-5 fw-bold mb-3">Liste des <span class="text-orange border-3 border-bottom border-orange pb-1 shine-text">Catégories</span></h1>
            <p class="lead mb-4 opacity-75">
              Gérez les catégories de votre boutique
            </p>
          </div>
          <div class="col-lg-4 d-flex justify-content-lg-end align-items-center mt-4 mt-lg-0" data-aos="fade-left">
            <NuxtLink to="/admin/categories/ajouter" class="btn btn-primary btn-lg px-4 py-3 shadow-sm shine-effect btn-animated">
              <i class="bi bi-plus-circle me-2"></i> Ajouter une catégorie
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
    
    <!-- Section des Catégories -->
    <section class="categories-section py-5 section-styled position-relative overflow-hidden">
      <div class="container">
        <!-- Indicateur de chargement -->
        <div v-if="isLoading" class="d-flex justify-content-center mb-5">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Chargement...</span>
          </div>
        </div>
        
        <!-- Message d'erreur -->
        <div v-if="errorMessage" class="alert alert-danger mb-4" role="alert">
          {{ errorMessage }}
        </div>
        
        <!-- Liste des catégories -->
        <div class="row g-4" v-else-if="categories.length > 0">
          <div class="col-md-6 col-lg-4" v-for="category in categories" :key="category.slug" data-aos="fade-up">
            <div class="category-card rounded-4 shadow-sm p-4 h-100 shine-effect-container position-relative overflow-hidden">
              <div class="d-flex justify-content-between align-items-start mb-4">
                <div class="category-icon-container tilt-effect rounded-3 d-flex align-items-center justify-content-center">
                  <i :class="'bi bi-' + (category.icon || 'grid') + ' text-orange fs-1'"></i>
                </div>
                <div class="category-actions">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-primary shine-effect" @click="editCategory(category)">
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-danger shine-effect" @click="confirmDelete(category)">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
              <h3 class="category-title fs-4 mb-2 text-gradient">{{ category.name }}</h3>
              <p class="category-slug text-muted small mb-2">
                <code>{{ category.slug }}</code>
              </p>
              <p class="category-description text-muted mb-3">
                {{ category.description }}
              </p>
              <div class="d-flex align-items-center justify-content-between mt-auto pt-3 border-top">
                <div class="category-product-count">
                  <span class="badge bg-light text-secondary rounded-pill">
                    {{ getProductCountForCategory(category.slug) }} produits
                  </span>
                </div>
                <NuxtLink :to="'/admin/produits?category=' + category.slug" class="category-view-products small">
                  Voir les produits <i class="bi bi-arrow-right ms-1"></i>
                </NuxtLink>
              </div>
              
              <div class="category-card-shine-overlay"></div>
            </div>
          </div>
        </div>
        
        <!-- Message quand il n'y a pas de catégories -->
        <div v-else-if="!isLoading" class="text-center py-5">
          <div class="mb-4">
            <i class="bi bi-grid text-muted" style="font-size: 3rem;"></i>
          </div>
          <h4>Aucune catégorie disponible</h4>
          <p class="text-muted">Commencez par ajouter votre première catégorie</p>
          <button @click="showAddModal" class="btn btn-primary mt-3 shine-effect">
            <i class="bi bi-plus-circle me-2"></i> Ajouter une catégorie
          </button>
        </div>
      </div>
    </section>
    
    <!-- Modal Ajouter/Modifier Catégorie -->
    <div class="modal fade" id="categoryModal" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true" ref="categoryModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header border-0">
            <h5 class="modal-title text-gradient" id="categoryModalLabel">{{ isEditing ? 'Modifier' : 'Ajouter' }} une catégorie</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Message d'erreur dans le modal -->
            <div class="alert alert-danger mb-3" v-if="errorMessage" role="alert">
              {{ errorMessage }}
              <button type="button" class="btn-close float-end" @click="errorMessage = ''"></button>
            </div>
            
            <form @submit.prevent="saveCategory">
              <div class="mb-3 form-floating custom-floating">
                <input 
                  type="text" 
                  class="form-control custom-form-control" 
                  id="categoryName" 
                  placeholder="Nom de la catégorie"
                  v-model="currentCategory.name"
                  @input="generateSlug"
                  required
                >
                <label for="categoryName">Nom de la catégorie*</label>
              </div>
              
              <div class="mb-3 form-floating custom-floating">
                <input 
                  type="text" 
                  class="form-control custom-form-control" 
                  id="categorySlug" 
                  placeholder="Slug (URL)"
                  v-model="currentCategory.slug"
                  required
                >
                <label for="categorySlug">Slug (URL)*</label>
                <small class="text-muted mt-1 d-block">Le slug est généré automatiquement mais peut être personnalisé</small>
              </div>
              
              <div class="mb-3 form-floating custom-floating">
                <input 
                  type="text" 
                  class="form-control custom-form-control" 
                  id="categoryIcon" 
                  placeholder="Icône"
                  v-model="currentCategory.icon"
                >
                <label for="categoryIcon">Icône</label>
                <small class="text-muted mt-1 d-block">Nom de l'icône Bootstrap Icons (sans le préfixe bi-)</small>
              </div>
              
              <div class="mb-3 form-floating custom-floating">
                <textarea 
                  class="form-control custom-form-control" 
                  id="categoryDescription" 
                  style="height: 100px" 
                  placeholder="Description"
                  v-model="currentCategory.description"
                  required
                ></textarea>
                <label for="categoryDescription">Description*</label>
              </div>
              
              <div class="d-flex justify-content-end mt-4">
                <button type="button" class="btn btn-secondary me-2 shine-effect" data-bs-dismiss="modal">Annuler</button>
                <button type="submit" class="btn btn-primary shine-effect btn-animated">{{ isEditing ? 'Mettre à jour' : 'Ajouter' }} <i class="bi bi-check ms-1"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal de confirmation de suppression -->
    <div class="modal fade" id="deleteCategoryModal" tabindex="-1" aria-labelledby="deleteCategoryModalLabel" aria-hidden="true" ref="deleteCategoryModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header border-0">
            <h5 class="modal-title text-gradient" id="deleteCategoryModalLabel">Confirmer la suppression</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Êtes-vous sûr de vouloir supprimer la catégorie <strong v-if="categoryToDelete">{{ categoryToDelete.name }}</strong> ?</p>
            <p class="text-danger mb-0">Attention : Cette action supprimera également le lien entre les produits et cette catégorie.</p>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-secondary shine-effect" data-bs-dismiss="modal">Annuler</button>
            <button type="button" class="btn btn-danger shine-effect btn-animated" @click="deleteCategory">
              <i class="bi bi-trash me-2"></i> Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import '~/assets/css/admin-styles.css';
import categoriesService from '~/services/categories';
import productsService from '~/services/products';

// États
const categories = ref([]);
const products = ref([]);
const isEditing = ref(false);
const isLoading = ref(false);
const categoryModal = ref(null);
const deleteCategoryModal = ref(null);
const categoryToDelete = ref(null);
const errorMessage = ref('');

// Catégorie actuelle (pour ajout/modification)
const currentCategory = reactive({
  id: null,
  name: '',
  slug: '',
  icon: '',
  description: ''
});

// Charger les données depuis l'API Django
const loadData = async () => {
  try {
    // Afficher l'indicateur de chargement
    isLoading.value = true;
    console.log('Début du chargement des données depuis l\'API...');
    
    // Charger les catégories depuis l'API
    console.log('Appel à categoriesService.getAllCategories()...');
    const categoriesData = await categoriesService.getAllCategories();
    console.log('Réponse API des catégories:', categoriesData);
    categories.value = categoriesData;
    
    // Charger les produits pour compter les occurrences par catégorie
    console.log('Appel à productsService.getAllProducts()...');
    const productsData = await productsService.getAllProducts();
    console.log('Réponse API des produits:', productsData);
    products.value = productsData;
    
    // Masquer l'indicateur de chargement
    isLoading.value = false;
    console.log('Données chargées avec succès:', { categories: categories.value, products: products.value });
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
    if (error.response) {
      console.error('Détails de l\'erreur API:', {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data
      });
    } else if (error.request) {
      console.error('Aucune réponse reçue du serveur:', error.request);
    } else {
      console.error('Erreur lors de la configuration de la requête:', error.message);
    }
    isLoading.value = false;
    // Afficher un message d'erreur plus clair
    errorMessage.value = 'Impossible de charger les données depuis l\'API. Veuillez réessayer plus tard.';
    // Initialiser des tableaux vides pour éviter les erreurs
    categories.value = [];
    products.value = [];
  }
};

// Compter le nombre de produits par catégorie
const getProductCountForCategory = (slug) => {
  // Vérifier si les produits ont été chargés
  if (!products.value || products.value.length === 0) return 0;
  
  // Filtrer les produits qui ont cette catégorie
  return products.value.filter(product => product.category === slug).length;
};

// Générer un slug à partir du nom
const generateSlug = () => {
  if (currentCategory.name) {
    currentCategory.slug = currentCategory.name
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

// Afficher le modal d'ajout
const showAddModal = () => {
  isEditing.value = false;
  resetCurrentCategory();
  const modal = new window.bootstrap.Modal(categoryModal.value);
  modal.show();
};

// Éditer une catégorie
const editCategory = (category) => {
  isEditing.value = true;
  Object.assign(currentCategory, category);
  const modal = new window.bootstrap.Modal(categoryModal.value);
  modal.show();
};

// Réinitialiser la catégorie courante
const resetCurrentCategory = () => {
  currentCategory.id = null;
  currentCategory.name = '';
  currentCategory.slug = '';
  currentCategory.icon = '';
  currentCategory.description = '';
};

// Sauvegarder une catégorie via l'API
const saveCategory = async () => {
  // Vérifier si tous les champs requis sont remplis
  if (!currentCategory.name || !currentCategory.slug || !currentCategory.description) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires';
    return;
  }
  
  try {
    isLoading.value = true;
    
    // Préparer les données de la catégorie
    const categoryData = {
      name: currentCategory.name,
      slug: currentCategory.slug,
      description: currentCategory.description,
      icon: currentCategory.icon || '',
      icon_description: currentCategory.icon_description || '',
      status: currentCategory.status || 'active'
    };
    
    // Si nous sommes en mode édition
    if (isEditing.value) {
      // Appeler l'API pour mettre à jour la catégorie
      await categoriesService.updateCategory(currentCategory.slug, categoryData);
      console.log('Catégorie mise à jour avec succès');
    } else {
      // Appeler l'API pour créer une nouvelle catégorie
      await categoriesService.createCategory(categoryData);
      console.log('Nouvelle catégorie créée avec succès');
    }
    
    // Recharger les données pour afficher les modifications
    await loadData();
    
    // Fermer le modal
    const modal = window.bootstrap.Modal.getInstance(categoryModal.value);
    modal.hide();
    
    // Réinitialiser la catégorie courante
    resetCurrentCategory();
    
    // Réinitialiser le message d'erreur
    errorMessage.value = '';
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de la catégorie:', error);
    
    // Afficher un message d'erreur
    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.detail || 'Une erreur est survenue lors de la sauvegarde de la catégorie';
    } else {
      errorMessage.value = 'Une erreur est survenue lors de la sauvegarde de la catégorie';
    }
  } finally {
    isLoading.value = false;
  }
};

// Confirmer la suppression d'une catégorie
const confirmDelete = (category) => {
  categoryToDelete.value = category;
  const modal = new window.bootstrap.Modal(deleteCategoryModal.value);
  modal.show();
};

// Supprimer une catégorie via l'API
const deleteCategory = async () => {
  if (!categoryToDelete.value) return;
  
  try {
    isLoading.value = true;
    
    // Appeler l'API pour supprimer la catégorie
    await categoriesService.deleteCategory(categoryToDelete.value.slug);
    console.log('Catégorie supprimée avec succès');
    
    // Recharger les données pour mettre à jour l'affichage
    await loadData();
    
    // Fermer le modal de confirmation
    const modal = window.bootstrap.Modal.getInstance(deleteCategoryModal.value);
    modal.hide();
    
    // Réinitialiser la catégorie à supprimer
    categoryToDelete.value = null;
  } catch (error) {
    console.error('Erreur lors de la suppression de la catégorie:', error);
    
    // Afficher un message d'erreur
    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.detail || 'Une erreur est survenue lors de la suppression de la catégorie';
    } else {
      errorMessage.value = 'Une erreur est survenue lors de la suppression de la catégorie';
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  // Charger les données depuis l'API
  loadData();
  
  // Initialiser particles.js
  if (window.particlesJS) {
    window.particlesJS('particles-admin-categories', {
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

/* Carte de catégorie */
.category-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.category-card::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--bs-orange) 0%, var(--bs-primary) 100%);
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.category-card:hover::before {
  transform: scaleX(1);
}

.category-icon-container {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, rgba(var(--bs-primary-rgb), 0.1) 0%, rgba(var(--bs-primary-rgb), 0.05) 100%);
  transition: all 0.3s ease;
}

.category-card:hover .category-icon-container {
  transform: scale(1.05) rotate(5deg);
}

.category-title {
  font-weight: 600;
  color: var(--bs-secondary);
}

.category-description {
  font-size: 0.9rem;
  flex-grow: 1;
}

.category-card-shine-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 70%);
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.3s ease, transform 1s ease;
}

.category-card:hover .category-card-shine-overlay {
  opacity: 1;
  transform: translateX(100%);
}

.category-view-products {
  color: var(--bs-primary);
  transition: all 0.3s ease;
  text-decoration: none;
}

.category-view-products:hover {
  color: var(--bs-primary-dark);
  text-decoration: underline;
}

/* Form controls dans les modals */
.form-control, .form-select {
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid #dee2e6;
  transition: all 0.3s ease;
}

.form-control:focus, .form-select:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.15);
}

/* Modal */
.modal-content {
  border-radius: 1rem;
}

.modal-header, .modal-footer {
  padding: 1.25rem 1.5rem;
}

.modal-body {
  padding: 1.5rem;
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
}
</style>
