<template>
  <div class="app-wrapper">
    <Navbar />
    <main class="main-content">
      <slot />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
// Layout par défaut
</script>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1 0 auto;
}
</style> 