<template>
  <div>
    <!-- Section Hero Admin Produits avec Particles -->
    <section class="py-5 bg-white position-relative admin-hero-section-sm overflow-hidden">
      <div id="particles-admin-products" class="particles-container"></div>
      <div class="container py-4 position-relative">
        <div class="row">
          <div class="col-lg-8" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect">Gestion des produits</span>
            <h1 class="display-5 fw-bold mb-3" v-if="!categoryName">
              Liste des <span class="text-gradient">Produits</span>
            </h1>
            <h1 class="display-5 fw-bold mb-3" v-else>
              Produits : <span class="text-gradient">{{ categoryName }}</span>
            </h1>
            <p class="lead mb-4 opacity-75" v-if="!categoryName">
              Consultez, modifiez ou supprimez les produits existants
            </p>
            <p class="lead mb-4 opacity-75" v-else>
              Produits de la catégorie <strong>{{ categoryName }}</strong>
            </p>
          </div>
          <div class="col-lg-4 d-flex justify-content-lg-end align-items-center mt-4 mt-lg-0" data-aos="fade-left">
            <NuxtLink to="/admin/produits/ajouter" class="btn btn-primary btn-lg px-4 py-3 shadow-sm shine-effect btn-animated">
              <i class="bi bi-plus-circle me-2"></i> Ajouter un produit
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
    
    <!-- Section Options de filtrage et recherche -->
    <section class="filtering-section py-4 section-styled position-relative overflow-hidden">
      <div class="container">
        <div class="row g-3">
          <div class="col-md-8">
            <div class="input-group mb-0">
              <span class="input-group-text bg-white border-end-0">
                <i class="bi bi-search text-orange"></i>
              </span>
              <input 
                type="text" 
                class="form-control border-start-0 ps-0 form-control-animated" 
                placeholder="Rechercher un produit..." 
                v-model="searchQuery"
                @input="filterProducts"
              >
            </div>
          </div>
          <div class="col-md-4">
            <select 
              class="form-select form-control-animated" 
              v-model="selectedCategory"
              @change="categoryChanged"
            >
              <option value="all">Toutes les catégories</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Section Tableau des produits -->
    <section class="products-table-section py-4 section-styled position-relative overflow-hidden">
      <div class="container">
        <div class="admin-card rounded-4 shadow-sm overflow-hidden">
          <div class="table-responsive">
            <table class="table table-hover products-table mb-0">
              <thead class="table-light">
                <tr>
                  <th scope="col" class="py-3">ID</th>
                  <th scope="col" class="py-3">Produit</th>
                  <th scope="col" class="py-3">Catégorie</th>
                  <th scope="col" class="py-3">Prix</th>
                  <th scope="col" class="py-3">Stock</th>
                  <th scope="col" class="py-3">Promo</th>
                  <th scope="col" class="py-3 text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in filteredProducts" :key="product.id" class="product-row shine-effect-container">
                  <td class="align-middle py-3">{{ product.id }}</td>
                  <td class="align-middle py-3">
                    <div class="d-flex align-items-center">
                      <div class="product-icon me-3 rounded-3 tilt-effect" :style="{ background: getBrandGradient(product.brand) }">
                        <span class="brand-initial">{{ product.brand.charAt(0) }}</span>
                      </div>
                      <div>
                        <h6 class="mb-0">{{ product.name }}</h6>
                        <small class="text-muted">{{ product.brand }}</small>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle py-3">
                    <span class="category-badge px-2 py-1 rounded-pill" :class="'category-' + product.category_id">
                      {{ getCategoryName(product.category_id) }}
                    </span>
                  </td>
                  <td class="align-middle py-3"><strong>{{ formatPrice(product.price) }} FCFA</strong></td>
                  <td class="align-middle py-3">
                    <span class="stock-badge px-2 py-1 rounded-pill" :class="product.in_stock ? 'stock-badge-success' : 'stock-badge-danger'">
                      {{ product.in_stock ? "En stock" : "Rupture" }}
                    </span>
                  </td>
                  <td class="align-middle py-3">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" :id="'promo-switch-' + product.id" v-model="product.promo" @change="updatePromo(product)">
                    </div>
                  </td>
                  <td class="align-middle py-3 text-end">
                    <div class="btn-group">
                      <NuxtLink :to="'/admin/produits/modifier/' + product.id" class="btn btn-sm btn-outline-primary shine-effect btn-animated">
                        <i class="bi bi-pencil"></i>
                      </NuxtLink>
                      <button type="button" class="btn btn-sm btn-outline-danger shine-effect btn-animated" @click="confirmDelete(product)">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr v-if="filteredProducts.length === 0">
                  <td colspan="7" class="text-center py-4">
                    <p class="mb-0 text-muted">Aucun produit trouvé</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- Pagination -->
        <div class="d-flex justify-content-between align-items-center mt-4">
          <div class="pagination-info">
            Affichage de <strong>{{ filteredProducts.length }}</strong> sur <strong>{{ products.length }}</strong> produits
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <i class="bi bi-chevron-left"></i>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <i class="bi bi-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    
    <!-- Modal de confirmation de suppression -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true" ref="deleteModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="deleteModalLabel">Confirmer la suppression</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Êtes-vous sûr de vouloir supprimer le produit <strong v-if="productToDelete">{{ productToDelete.name }}</strong> ?</p>
            <p class="text-muted mb-0">Cette action est irréversible.</p>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-light shine-effect btn-animated" data-bs-dismiss="modal">Annuler</button>
            <button type="button" class="btn btn-danger shine-effect btn-animated" @click="deleteProduct">
              <i class="bi bi-trash me-2"></i> Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from '#app';
import '~/assets/css/admin-styles.css';

// Récupérer la route pour accéder aux paramètres d'URL
const route = useRoute();

// États
const products = ref([]);
const categories = ref([]);
const searchQuery = ref('');
const selectedCategory = ref('all');
const productToDelete = ref(null);
const deleteModal = ref(null);
const categoryName = ref('');

// Charger les données
const loadData = async () => {
  try {
    // Charger les produits
    // Utiliser le service des produits au lieu du fichier JSON statique
    const productsService = await import('~/services/products').then(m => m.default);
    products.value = await productsService.getAllProducts();
    
    // Charger les catégories via le service API
    const categoriesService = await import('~/services/categories').then(m => m.default);
    categories.value = await categoriesService.getAllCategories();
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
  }
};

// Obtenir le nom de la catégorie par son ID
const getCategoryName = (categoryId) => {
  const category = categories.value.find(c => c.id === categoryId);
  return category ? category.name : 'Non catégorisé';
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

// Fonction appelée lorsque la catégorie change dans le sélecteur
const categoryChanged = () => {
  // Mettre à jour le nom de la catégorie pour l'affichage
  if (selectedCategory.value === 'all') {
    categoryName.value = '';
  } else {
    const category = categories.value.find(c => c.id === parseInt(selectedCategory.value));
    if (category) {
      categoryName.value = category.name;
    }
  }
  
  // Filtrer les produits
  filterProducts();
};

// Filtrer les produits en fonction de la recherche et de la catégorie
const filterProducts = () => {
  filteredProducts.value = products.value.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                         product.brand.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesCategory = selectedCategory.value === 'all' || product.category_id === parseInt(selectedCategory.value);
    
    return matchesSearch && matchesCategory;
  });
};

// Produits filtrés
const filteredProducts = ref([]);

// Confirmer la suppression d'un produit
const confirmDelete = (product) => {
  productToDelete.value = product;
  const modal = new window.bootstrap.Modal(deleteModal.value);
  modal.show();
};

// Supprimer un produit
const deleteProduct = () => {
  if (productToDelete.value) {
    // Dans un vrai backend, on ferait un appel API ici
    products.value = products.value.filter(p => p.id !== productToDelete.value.id);
    filteredProducts.value = filteredProducts.value.filter(p => p.id !== productToDelete.value.id);
    
    // Fermer le modal
    const modal = window.bootstrap.Modal.getInstance(deleteModal.value);
    modal.hide();
    
    // Réinitialiser le produit à supprimer
    productToDelete.value = null;
    
    // Afficher une notification (à implémenter)
    alert('Produit supprimé avec succès');
  }
};

// Mettre à jour le statut promo d'un produit
const updatePromo = (product) => {
  // Dans un vrai backend, on ferait un appel API ici
  console.log(`Statut promo du produit ${product.name} mis à jour: ${product.promo}`);
  // Actualiser la liste des produits
  filterProducts();
};

onMounted(() => {
  // Initialiser particles.js
  if (window.particlesJS) {
    window.particlesJS('particles-admin-products', {
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
  loadData().then(() => {
    // Vérifier si un paramètre de catégorie est présent dans l'URL
    const categoryParam = route.query.category;
    if (categoryParam) {
      selectedCategory.value = categoryParam;
      // Mettre à jour le nom de la catégorie pour l'affichage
      const category = categories.value.find(c => c.id === parseInt(categoryParam));
      if (category) {
        categoryName.value = category.name;
      }
    }
    
    // Filtrer les produits en fonction de la catégorie sélectionnée
    filterProducts();
  });
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

/* Tableau des produits */
.products-table {
  margin-bottom: 0;
}

.products-table th {
  font-weight: 600;
  color: var(--bs-secondary);
}

.product-row {
  transition: all 0.3s ease;
}

.product-row:hover {
  background-color: rgba(var(--bs-primary-rgb), 0.02);
}

/* Icône du produit */
.product-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  transition: transform 0.3s ease;
}

.brand-initial {
  font-size: 18px;
  font-weight: 700;
}

/* Badges */
.category-badge {
  font-size: 0.75rem;
  font-weight: 500;
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  color: var(--bs-primary);
}

.category-1 {
  background-color: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

.category-2 {
  background-color: rgba(25, 135, 84, 0.1);
  color: #198754;
}

.category-3 {
  background-color: rgba(102, 16, 242, 0.1);
  color: #6610f2;
}

.category-4 {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}

.category-5 {
  background-color: rgba(255, 193, 7, 0.1);
  color: #ffc107;
}

.stock-badge {
  font-size: 0.75rem;
  font-weight: 500;
}

.stock-badge-success {
  background-color: rgba(25, 135, 84, 0.1);
  color: #198754;
}

.stock-badge-danger {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}

/* Form controls */
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

.input-group-text {
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
}

/* Switch pour promo */
.form-check-input:checked {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

/* Pagination */
.pagination {
  margin-bottom: 0;
}

.pagination .page-link {
  border: none;
  color: var(--bs-secondary);
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  margin: 0 0.125rem;
  transition: all 0.3s ease;
}

.pagination .page-item.active .page-link {
  background-color: var(--bs-primary);
  color: white;
  box-shadow: 0 2px 5px rgba(var(--bs-primary-rgb), 0.3);
}

.pagination .page-link:hover {
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  color: var(--bs-primary);
}

.pagination .page-item.active .page-link:hover {
  background-color: var(--bs-primary);
  color: white;
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
  
  .table-responsive {
    border-radius: 0.5rem;
  }
}
</style>
