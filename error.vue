<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <div class="error-code">{{ error.statusCode }}</div>
        <h1 class="error-title">{{ error.statusCode === 404 ? 'Page non trouvée' : 'Une erreur est survenue' }}</h1>
        <p class="error-message">{{ error.message }}</p>
        <NuxtLink to="/" class="error-button">
          Retour à l'accueil
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object
});
</script>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem 0;
}

.error-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 1rem;
}

.error-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.error-message {
  font-size: 1.125rem;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.error-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: var(--light-color);
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.error-button:hover {
  background-color: darken(var(--primary-color), 10%);
  transform: translateY(-2px);
}
</style> 