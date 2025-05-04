<template>
  <div class="product-reviews">
    <div class="reviews-summary mb-4">
      <div class="d-flex align-items-center justify-content-between">
        <h3 class="h4 mb-0">Avis clients</h3>
        <button v-if="reviews.length > 0" @click="showReviewForm = !showReviewForm" class="btn btn-sm btn-outline-primary">
          {{ showReviewForm ? 'Annuler' : 'Donner mon avis' }}
        </button>
      </div>
      
      <div v-if="reviews.length > 0" class="rating-summary d-flex align-items-center mt-3">
        <div class="overall-rating me-4">
          <div class="display-4 fw-bold text-center">{{ avgRating.toFixed(1) }}</div>
          <div class="stars">
            <i v-for="n in 5" :key="n" class="bi" :class="getStarClass(n)" style="color: #FFD700;"></i>
          </div>
          <div class="rating-count text-muted text-center">
            {{ reviewsCount }} avis
          </div>
        </div>
        
        <div class="rating-bars flex-grow-1">
          <div v-for="n in 5" :key="n" class="rating-bar-item d-flex align-items-center mb-1">
            <div class="stars me-2">
              <i v-for="i in 5" :key="i" class="bi" :class="i <= (6-n) ? 'bi-star-fill' : 'bi-star'" style="font-size: 0.8rem; color: #FFD700;"></i>
            </div>
            <div class="progress flex-grow-1" style="height: 8px;">
              <div class="progress-bar bg-warning" role="progressbar" 
                   :style="{ width: getPercentage(ratingDistribution[6-n]) + '%' }"></div>
            </div>
            <div class="count ms-2 text-muted" style="min-width: 30px;">
              {{ ratingDistribution[6-n] || 0 }}
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="no-reviews text-center py-4">
        <p class="text-muted mb-3">Aucun avis pour ce produit.</p>
        <button @click="showReviewForm = true" class="btn btn-primary">Soyez le premier à donner votre avis</button>
      </div>
    </div>
    
    <div v-if="showReviewForm" class="review-form-container mb-5 p-4 border rounded-3 bg-light">
      <h4 class="mb-3">Votre avis sur ce produit</h4>
      
      <!-- Alertes -->
      <div v-if="alert.show" class="alert" :class="`alert-${alert.type}`" role="alert">
        {{ alert.message }}
        <button type="button" class="btn-close" @click="alert.show = false" aria-label="Close"></button>
      </div>
      
      <form @submit.prevent="submitReview">
        <div class="form-group mb-3">
          <label class="form-label">Votre note</label>
          <div class="rating-select">
            <i v-for="n in 5" :key="n" class="bi" 
               :class="n <= newReview.rating ? 'bi-star-fill' : 'bi-star'" 
               @click="newReview.rating = n"
               style="font-size: 1.5rem; color: #FFD700; cursor: pointer;"></i>
          </div>
        </div>
        
        <div class="mb-3">
          <label for="reviewerName" class="form-label">Votre nom</label>
          <input type="text" class="form-control" id="reviewerName" v-model="newReview.author_name" required>
        </div>
        
        <div class="mb-3">
          <label for="reviewerEmail" class="form-label">Votre email (ne sera pas publié)</label>
          <input type="email" class="form-control" id="reviewerEmail" v-model="newReview.author_email">
        </div>
        
        <div class="mb-3">
          <label for="reviewTitle" class="form-label">Titre de votre avis</label>
          <input type="text" class="form-control" id="reviewTitle" v-model="newReview.title">
        </div>
        
        <div class="mb-3">
          <label for="reviewComment" class="form-label">Votre commentaire</label>
          <textarea class="form-control" id="reviewComment" rows="4" v-model="newReview.comment" required></textarea>
        </div>
        
        <div class="d-flex justify-content-end">
          <button type="button" @click="showReviewForm = false" class="btn btn-outline-secondary me-2">Annuler</button>
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer mon avis' }}
          </button>
        </div>
      </form>
    </div>
    
    <div v-if="reviews.length > 0" class="reviews-list">
      <div v-for="review in reviews" :key="review.id" class="review-item p-3 mb-3 border-bottom">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <h5 class="mb-1">{{ review.title || 'Avis' }}</h5>
            <div class="stars mb-2">
              <i v-for="n in 5" :key="n" class="bi" 
                 :class="n <= review.rating ? 'bi-star-fill' : 'bi-star'" 
                 style="color: #FFD700;"></i>
            </div>
          </div>
          <div class="review-date text-muted small">
            {{ formatDate(review.created_at) }}
          </div>
        </div>
        
        <p class="review-text mb-2">{{ review.comment }}</p>
        
        <div class="review-author d-flex align-items-center">
          <span class="text-muted small">Par {{ review.author_name }}</span>
          <span v-if="review.is_verified" class="badge bg-success-subtle text-success ms-2 small">Achat vérifié</span>
        </div>
      </div>
      
      <div v-if="reviews.length > 0" class="text-center mt-4">
        <button @click="showReviewForm = true" class="btn btn-outline-primary">Donner mon avis</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getProductReviewsSummary, submitReview as submitReviewApi } from '~/services/reviews'

const props = defineProps({
  productId: {
    type: Number,
    required: true
  },
  productSlug: {
    type: String,
    required: true
  }
})

// États
const reviews = ref([])
const reviewsCount = ref(0)
const avgRating = ref(0)
const ratingDistribution = ref({
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0
})
const alert = ref({
  show: false,
  type: 'success',
  message: ''
})
const showReviewForm = ref(false)
const isSubmitting = ref(false)
const newReview = ref({
  product: props.productId,
  rating: 5,
  author_name: '',
  author_email: '',
  title: '',
  comment: ''
})

// Fonction pour récupérer les avis
const fetchReviews = async () => {
  try {
    const data = await getProductReviewsSummary(props.productSlug)
    reviews.value = data.reviews || []
    reviewsCount.value = data.count || 0
    avgRating.value = data.avg_rating || 0
    ratingDistribution.value = data.rating_distribution || {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
  } catch (error) {
    console.error('Erreur lors du chargement des avis :', error)
  }
}

// Soumettre un nouveau avis
const submitReview = async () => {
  if (newReview.value.rating === 0) {
    alert.value = {
      show: true,
      type: 'danger',
      message: 'Veuillez sélectionner une note'
    }
    return
  }
  
  try {
    isSubmitting.value = true
    await submitReviewApi(newReview.value)
    alert.value = {
      show: true,
      type: 'success',
      message: 'Votre avis a été soumis avec succès'
    }
    showReviewForm.value = false
    
    // Réinitialiser le formulaire
    newReview.value = {
      product: props.productId,
      rating: 5,
      author_name: '',
      author_email: '',
      title: '',
      comment: ''
    }
    
    // Rafraîchir les avis
    await fetchReviews()
  } catch (error) {
    alert.value = {
      show: true,
      type: 'danger',
      message: 'Erreur lors de la soumission de votre avis'
    }
    console.error('Erreur lors de la soumission de l\'avis :', error)
  } finally {
    isSubmitting.value = false
  }
}

// Utilitaires
const getStarClass = (n) => {
  const threshold = n - 0.5
  if (avgRating.value >= n) return 'bi-star-fill'
  if (avgRating.value >= threshold) return 'bi-star-half'
  return 'bi-star'
}

const getPercentage = (count) => {
  if (reviewsCount.value === 0) return 0
  return Math.round((count / reviewsCount.value) * 100)
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

// Charger les avis au montage du composant
onMounted(() => {
  fetchReviews()
})
</script>

<style scoped>
.product-reviews {
  margin-top: 2rem;
}

.rating-select i {
  transition: transform 0.1s ease;
}

.rating-select i:hover {
  transform: scale(1.2);
}
</style>
