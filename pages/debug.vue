<template>
  <div class="container py-5">
    <h1 class="mb-4">Débogage API</h1>
    
    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Chargement...</span>
      </div>
    </div>
    
    <div v-if="error" class="alert alert-danger">
      <h4>Erreur :</h4>
      <p>{{ error }}</p>
    </div>
    
    <!-- Panel de test de connexion -->
    <div class="card mb-4">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h2 class="h5 mb-0">Test de connexion à l'API</h2>
        <button class="btn btn-sm btn-primary" @click="testConnection">Tester la connexion</button>
      </div>
      <div class="card-body">
        <div v-if="connectionTest.loaded">
          <div :class="connectionTest.success ? 'alert alert-success' : 'alert alert-danger'">
            <strong>{{ connectionTest.success ? 'Succès !' : 'Échec !' }}</strong> {{ connectionTest.message }}
          </div>
          <div v-if="connectionTest.data" class="mt-3">
            <h5>Réponse du serveur :</h5>
            <pre class="mb-0"><code>{{ JSON.stringify(connectionTest.data, null, 2) }}</code></pre>
          </div>
        </div>
        <div v-else>
          <p class="text-muted">Cliquez sur "Tester la connexion" pour vérifier la connexion à l'API Django.</p>
        </div>
      </div>
    </div>
    
    <div class="row mb-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h2 class="h5 mb-0">Catégories</h2>
            <button class="btn btn-sm btn-primary" @click="fetchCategories">Rafraîchir</button>
          </div>
          <div class="card-body">
            <pre class="mb-0"><code>{{ JSON.stringify(categories, null, 2) }}</code></pre>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h2 class="h5 mb-0">Produits</h2>
            <button class="btn btn-sm btn-primary" @click="fetchProducts">Rafraîchir</button>
          </div>
          <div class="card-body">
            <pre class="mb-0"><code>{{ JSON.stringify(products, null, 2) }}</code></pre>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card mb-4">
      <div class="card-header">
        <h2 class="h5 mb-0">Faire une requête API personnalisée</h2>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="endpoint" class="form-label">Endpoint API</label>
          <input type="text" class="form-control" id="endpoint" v-model="customEndpoint" placeholder="/categories/" />
        </div>
        <button class="btn btn-primary" @click="fetchCustom">Envoyer la requête</button>
      </div>
    </div>
    
    <div class="card" v-if="customResponse">
      <div class="card-header">
        <h2 class="h5 mb-0">Réponse</h2>
      </div>
      <div class="card-body">
        <pre class="mb-0"><code>{{ JSON.stringify(customResponse, null, 2) }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import categoriesService from '~/services/categories';
import productsService from '~/services/products';
import apiClient from '~/services/api';
import { testApiConnection, testCategoriesApi, testProductsApi } from '~/services/api-test';

// États
const categories = ref([]);
const products = ref([]);
const loading = ref(false);
const error = ref(null);
const customEndpoint = ref('/categories/');
const customResponse = ref(null);

// États pour les tests de connexion
const connectionTest = ref({
  loaded: false,
  success: false,
  message: '',
  data: null
});

// Tester la connexion à l'API
const testConnection = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    console.log('Test de connexion à l\'API...');
    const result = await testApiConnection();
    connectionTest.value = {
      loaded: true,
      success: result.success,
      message: result.message,
      data: result.data || result.error
    };
    
    if (!result.success) {
      console.error('Échec du test de connexion:', result.error);
    }
  } catch (err) {
    console.error('Erreur lors du test de connexion:', err);
    connectionTest.value = {
      loaded: true,
      success: false,
      message: `Erreur non gérée: ${err.message}`,
      data: null
    };
  } finally {
    loading.value = false;
  }
};

// Récupérer les catégories
const fetchCategories = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    console.log('Récupération des catégories...');
    categories.value = await categoriesService.getAllCategories();
    console.log('Catégories récupérées:', categories.value);
  } catch (err) {
    console.error('Erreur lors de la récupération des catégories:', err);
    error.value = `Erreur lors de la récupération des catégories: ${err.message}`;
    if (err.response) {
      console.error('Détails de l\'erreur:', err.response.data);
    }
  } finally {
    loading.value = false;
  }
};

// Récupérer les produits
const fetchProducts = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    console.log('Récupération des produits...');
    products.value = await productsService.getAllProducts();
    console.log('Produits récupérés:', products.value);
  } catch (err) {
    console.error('Erreur lors de la récupération des produits:', err);
    error.value = `Erreur lors de la récupération des produits: ${err.message}`;
    if (err.response) {
      console.error('Détails de l\'erreur:', err.response.data);
    }
  } finally {
    loading.value = false;
  }
};

// Faire une requête API personnalisée
const fetchCustom = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    console.log(`Requête personnalisée vers ${customEndpoint.value}...`);
    const response = await apiClient.get(customEndpoint.value);
    customResponse.value = response.data;
    console.log('Réponse de la requête personnalisée:', customResponse.value);
  } catch (err) {
    console.error('Erreur lors de la requête personnalisée:', err);
    error.value = `Erreur lors de la requête personnalisée: ${err.message}`;
    if (err.response) {
      console.error('Détails de l\'erreur:', err.response.data);
      customResponse.value = { error: err.response.data, status: err.response.status };
    }
  } finally {
    loading.value = false;
  }
};

// Charger les données au démarrage
onMounted(() => {
  fetchCategories();
  fetchProducts();
});
</script>

<style scoped>
pre {
  max-height: 400px;
  overflow-y: auto;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.25rem;
}
</style>
