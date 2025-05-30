<template>
  <header>
    <!-- Navbar principale avec transition et effet de transparence -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 transition-navbar" 
         :class="{ 'navbar-scrolled': isScrolled }"
         ref="navbar">
    <div class="container">
        <!-- Logo avec animation -->
        <NuxtLink to="/" class="navbar-brand d-flex align-items-center shine-effect">
          <i class="bi bi-phone text-orange me-2 fs-3"></i>
          <span class="brand-text fw-bold fs-4">All <span class="text-orange border-animation d-inline-block">Original</span></span>
        </NuxtLink>
        
        <!-- Toggle bouton pour mobile -->
        <button class="navbar-toggler border-0 shadow-none" type="button" 
                @click="toggleMobileMenu"
                aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
            </button>
        
        <!-- Menu principal -->
        <div class="collapse navbar-collapse" id="navbarMain">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link px-3 py-2 mx-1 position-relative" exact-active-class="active" @click="handleNavLinkClick('/')">
                <i class="bi bi-house me-1"></i> Accueil
                <span class="nav-indicator"></span>
              </NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle px-3 py-2 mx-1 position-relative" 
                 href="#" role="button"
                 @click.prevent="toggleDropdown"
                 aria-expanded="false"
                 :class="{ active: $route.path.includes('/catalogue') }">
                <i class="bi bi-grid me-1"></i> Catalogue
                <span class="nav-indicator"></span>
              </a>
              <ul class="dropdown-menu border-0 shadow-lg" :class="{'show': isDropdownOpen}">
                <li>
                  <NuxtLink to="/catalogue?category=tous" class="dropdown-item" @click="handleNavLinkClick('/catalogue?category=tous')">
                    <i class="bi bi-collection me-2 text-orange"></i> Tous les produits
                  </NuxtLink>
                </li>
                <!-- Catégories chargées dynamiquement depuis l'API -->
                <li v-for="category in categories" :key="category.slug">
                  <NuxtLink :to="`/catalogue?category=${category.slug}`" class="dropdown-item" @click="handleNavLinkClick(`/catalogue?category=${category.slug}`)">
                    <i :class="`bi bi-${getCategoryIcon(category.icon)} me-2 text-orange`"></i> {{ category.name }}
                  </NuxtLink>
                </li>
                <li v-if="categories.length > 0"><hr class="dropdown-divider"></li>
                <li>
              <NuxtLink to="/catalogue?category=accessoires" class="dropdown-item" @click="handleNavLinkClick('/catalogue?category=accessoires')">
                    <i class="bi bi-headphones me-2 text-orange"></i> Accessoires
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link px-3 py-2 mx-1 position-relative" exact-active-class="active" @click="handleNavLinkClick('/contact')">
                <i class="bi bi-envelope me-1"></i> Contact
                <span class="nav-indicator"></span>
              </NuxtLink>
            </li>
            <!-- Lien d'administration supprimé -->
            <li class="nav-item ms-lg-2">
              <a href="tel:+237675108876" class="btn btn-sm btn-primary rounded-pill px-3 py-2 d-flex align-items-center shine-effect" @click="closeMobileMenu()">
                <i class="bi bi-telephone-fill me-2"></i> Nous appeler
              </a>
            </li>
          </ul>
            </div>
          </div>
        </nav>
        
    <!-- Espace pour compenser la navbar fixed -->
    <div class="navbar-spacer"></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import categoriesService from '~/services/categories';

// Router pour la navigation
const router = useRouter();
const { $navigateToAdmin } = useNuxtApp();

// Fonction pour naviguer vers la section admin en fonction de l'état d'authentification
const navigateToAdmin = () => {
  // Utiliser le plugin pour déterminer où rediriger (tableau de bord ou login)
  $navigateToAdmin(router);
};

// États réactifs
const isScrolled = ref(false);
const navbar = ref(null);
const isDropdownOpen = ref(false);
const mobileMenuOpen = ref(false);
const categories = ref([]);

// Gérer le dropdown
const toggleDropdown = (event) => {
  event.preventDefault();
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

// Gérer le menu mobile
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  const navbarMain = document.getElementById('navbarMain');
  if (navbarMain) {
    if (mobileMenuOpen.value) {
      navbarMain.classList.add('show');
    } else {
      navbarMain.classList.remove('show');
    }
  }
};

// Fermer le menu mobile
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  const navbarMain = document.getElementById('navbarMain');
  if (navbarMain) {
    navbarMain.classList.remove('show');
  }
};

// Gérer le clic sur un lien de navigation
const handleNavLinkClick = (path) => {
  // Fermer le menu mobile si il est ouvert
  if (window.innerWidth < 992) { // Breakpoint lg de Bootstrap (992px)
    closeMobileMenu();
  }
  
  // Fermer le dropdown si ouvert
  closeDropdown();
  
  // Vérifier si on est déjà sur cette page
  if (window.location.pathname + window.location.search === path) {
    // Si on est sur la même page, actualiser manuellement
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
};

// Convertir les icônes de catégories en classes Bootstrap Icons
const getCategoryIcon = (icon) => {
  if (!icon) return 'grid';
  
  // Retourner directement l'icône si elle est déjà au bon format
  if (icon.startsWith('bi-')) return icon.substring(3);
  if (!icon.includes('bi-')) return icon;
  
  // Correspondances emoji -> classes Bootstrap Icons
  const iconMapping = {
    '📱': 'phone',
    '💻': 'laptop',
    '📟': 'tablet',
    '🖥️': 'pc-display',
    '🎮': 'controller',
    '🎧': 'headphones',
    '🔋': 'battery-full',
    '⌚': 'smartwatch',
    '📀': 'disc',
    '🔌': 'plug',
    '📷': 'camera',
    '🖨️': 'printer',
    '🖱️': 'mouse3'
  };
  
  return iconMapping[icon] || 'grid';
};

// Charger les catégories depuis l'API Django
const loadCategories = async () => {
  try {
    console.log('Navbar: Chargement des catégories depuis l\'API...');
    const categoriesData = await categoriesService.getAllCategories();
    categories.value = categoriesData;
    console.log('Navbar: Catégories chargées:', categories.value);
  } catch (error) {
    console.error('Erreur lors du chargement des catégories:', error);
    categories.value = [];
  }
};

// Fermer le dropdown sur clic à l'extérieur
const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.dropdown');
  if (dropdown && !dropdown.contains(event.target) && isDropdownOpen.value) {
    closeDropdown();
  }
};

// Ajouter classe au scroll avec gestion spécifique mobile
const handleScroll = () => {
  const isMobileView = window.innerWidth < 992; // Breakpoint lg de Bootstrap
  
  if (window.scrollY > 50) {
    isScrolled.value = true;
    
    // Ajouter une classe spécifique pour mobile - moins transparente
    if (isMobileView) {
      document.querySelector('.navbar')?.classList.add('mobile-scrolled');
    } else {
      document.querySelector('.navbar')?.classList.remove('mobile-scrolled');
    }
  } else {
    isScrolled.value = false;
    document.querySelector('.navbar')?.classList.remove('mobile-scrolled');
  }
};

onMounted(() => {
  // Ajout de l'écouteur d'événement pour le scroll
  window.addEventListener('scroll', handleScroll);
  
  // Ajout de l'écouteur pour fermer le dropdown
  document.addEventListener('click', handleClickOutside);
  
  // Charger les catégories depuis l'API Django
  loadCategories();
  
  // Cleanup
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('click', handleClickOutside);
  });
});
</script>

<style scoped>
/* Styles de la navbar */
.transition-navbar {
  transition: all 0.4s ease;
  background-color: rgba(255, 255, 255, 0.98);
  padding-top: 1rem;
  padding-bottom: 1rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.navbar-scrolled {
  background-color: rgba(255, 240, 220, 0.7);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.navbar-scrolled .nav-link {
  color: var(--bs-secondary) !important;
}

.navbar-scrolled .nav-link:hover, 
.navbar-scrolled .nav-link.active {
  color: var(--bs-primary) !important;
}

.navbar-scrolled .brand-text {
  color: var(--bs-secondary-emphasis) !important;
}

.navbar-scrolled .nav-indicator {
  background-color: var(--bs-primary);
}

.navbar-spacer {
  height: 80px;
}

/* Styles des liens */
.nav-link {
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  border-radius: 5px;
  color: var(--bs-secondary);
}

.nav-link:hover, .nav-link.active {
  color: var(--bs-primary) !important;
}

/* Indicateur sous les liens */
.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--bs-primary);
  transform: translateX(-50%);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover .nav-indicator, .nav-link.active .nav-indicator {
  width: 60%;
}

/* Styles pour le dropdown */
.dropdown-menu {
  display: none;
  position: absolute;
  z-index: 1000;
  border-radius: 10px;
  padding: 1rem 0;
  margin-top: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.dropdown-menu.show {
  display: block;
  transform: translateY(0);
  opacity: 1;
}

.dropdown-item {
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
  font-weight: 500;
}

.dropdown-item:hover {
  background-color: rgba(var(--bs-primary-rgb), 0.05);
  transform: translateX(5px);
}

/* Styles du logo */
.navbar-brand {
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
}

.brand-text {
  transition: color 0.3s ease;
  color: var(--bs-secondary-emphasis);
}

/* Animation du bouton mobile */
.navbar-toggler {
  border: none;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.navbar-toggler:focus {
  box-shadow: none;
}

/* Fix pour les liens actifs */
.dropdown-item.nuxt-link-active,
.dropdown-item.nuxt-link-exact-active {
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  color: var(--bs-primary);
}
</style> 