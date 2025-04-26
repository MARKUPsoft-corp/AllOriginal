<template>
  <NuxtLink :to="`/catalogue?category=${category.slug}`" class="category-card">
    <div class="category-icon">
      <span v-if="category.icon === 'smartphone'">📱</span>
      <span v-else-if="category.icon === 'laptop'">💻</span>
      <span v-else-if="category.icon === 'tablet'">📱</span>
      <span v-else-if="category.icon === 'headphones'">🎧</span>
      <span v-else>📦</span>
    </div>
    <h3 class="category-title">{{ category.name }}</h3>
    <p class="category-description">{{ category.description }}</p>
    <div class="category-arrow">
      <span>→</span>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.category-card {
  display: flex;
  flex-direction: column;
  background-color: var(--light-color);
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1.5rem;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s ease;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.category-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.category-description {
  color: var(--text-color);
  font-size: 0.875rem;
  line-height: 1.5;
  flex-grow: 1;
}

.category-arrow {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  color: var(--primary-color);
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.category-card:hover .category-arrow {
  transform: translateX(5px);
}
</style> 