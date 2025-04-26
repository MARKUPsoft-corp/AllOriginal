<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <NuxtLink to="/" class="logo">
          <span class="brand-text">All <span class="brand-highlight">Original</span></span>
        </NuxtLink>
        
        <nav class="main-nav hidden-mobile">
          <NuxtLink to="/" class="nav-link">
            <span class="icon">🏠</span>
            Accueil
          </NuxtLink>
          <div class="dropdown">
            <button class="nav-link dropdown-toggle">
              <span class="icon">📂</span>
              Catalogue <span class="arrow">▼</span>
            </button>
            <div class="dropdown-menu">
              <NuxtLink to="/catalogue?category=tous" class="dropdown-item">
                <span class="icon">📱</span>
                Tous les produits
              </NuxtLink>
              <NuxtLink to="/catalogue?category=telephones" class="dropdown-item">
                <span class="icon">📱</span>
                Téléphones
              </NuxtLink>
              <NuxtLink to="/catalogue?category=ordinateurs" class="dropdown-item">
                <span class="icon">💻</span>
                Ordinateurs
              </NuxtLink>
              <NuxtLink to="/catalogue?category=tablettes" class="dropdown-item">
                <span class="icon">📱</span>
                Tablettes
              </NuxtLink>
              <NuxtLink to="/catalogue?category=accessoires" class="dropdown-item">
                <span class="icon">🎧</span>
                Accessoires
              </NuxtLink>
            </div>
          </div>
          <NuxtLink to="/contact" class="nav-link">
            <span class="icon">✉️</span>
            Contact
          </NuxtLink>
        </nav>
        
        <button class="mobile-menu-toggle hidden-desktop" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <!-- Menu mobile -->
      <div class="mobile-menu" :class="{ 'active': mobileMenuOpen }">
        <NuxtLink to="/" class="mobile-nav-link">Accueil</NuxtLink>
        <NuxtLink to="/catalogue?category=tous" class="mobile-nav-link">Tous les produits</NuxtLink>
        <NuxtLink to="/catalogue?category=telephones" class="mobile-nav-link">Téléphones</NuxtLink>
        <NuxtLink to="/catalogue?category=ordinateurs" class="mobile-nav-link">Ordinateurs</NuxtLink>
        <NuxtLink to="/catalogue?category=tablettes" class="mobile-nav-link">Tablettes</NuxtLink>
        <NuxtLink to="/catalogue?category=accessoires" class="mobile-nav-link">Accessoires</NuxtLink>
        <NuxtLink to="/contact" class="mobile-nav-link">Contact</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
}

.brand-text {
  color: #000;
}

.brand-highlight {
  color: var(--primary-color);
}

.main-nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--primary-color);
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Dropdown */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  min-width: 200px;
  padding: 0.5rem;
  z-index: 20;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--text-color);
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: var(--gray-color);
  color: var(--primary-color);
}

.arrow {
  font-size: 0.75rem;
}

/* Mobile menu */
.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
}

.mobile-menu-toggle span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: var(--text-color);
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 1rem 0;
}

.mobile-nav-link {
  padding: 0.75rem 0;
  color: var(--text-color);
  text-decoration: none;
  border-bottom: 1px solid var(--border-color);
  font-weight: 500;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

/* Mobile styles */
@media (max-width: 767px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .mobile-menu.active {
    display: flex;
  }
  
  .navbar-content {
    padding: 0;
  }
}
</style> 