<template>
  <header>
    <!-- Navbar principale avec transition et effet de transparence -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 transition-navbar" 
         :class="{ 'navbar-scrolled': isScrolled }"
         ref="navbar">
      <div class="container">
        <!-- Logo avec animation -->
        <NuxtLink to="/" class="navbar-brand d-flex align-items-center shine-effect">
          <span class="brand-text fw-bold fs-4">All <span class="text-orange border-animation d-inline-block">Original</span></span>
        </NuxtLink>
        
        <!-- Toggle bouton pour mobile -->
        <button class="navbar-toggler border-0 shadow-none" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarMain" 
                aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Menu principal -->
        <div class="collapse navbar-collapse" id="navbarMain">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link px-3 py-2 mx-1 position-relative" exact-active-class="active">
                <i class="bi bi-house me-1"></i> Accueil
                <span class="nav-indicator"></span>
              </NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle px-3 py-2 mx-1 position-relative" 
                 href="#" role="button"
                 data-bs-toggle="dropdown" 
                 aria-expanded="false"
                 :class="{ active: $route.path.includes('/catalogue') }">
                <i class="bi bi-grid me-1"></i> Catalogue
                <span class="nav-indicator"></span>
              </a>
              <ul class="dropdown-menu dropdown-menu-animated border-0 shadow-lg">
                <li>
                  <NuxtLink to="/catalogue?category=tous" class="dropdown-item">
                    <i class="bi bi-collection me-2 text-orange"></i> Tous les produits
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/catalogue?category=telephones" class="dropdown-item">
                    <i class="bi bi-phone me-2 text-orange"></i> Téléphones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/catalogue?category=ordinateurs" class="dropdown-item">
                    <i class="bi bi-laptop me-2 text-orange"></i> Ordinateurs
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/catalogue?category=tablettes" class="dropdown-item">
                    <i class="bi bi-tablet me-2 text-orange"></i> Tablettes
                  </NuxtLink>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <NuxtLink to="/catalogue?category=accessoires" class="dropdown-item">
                    <i class="bi bi-headphones me-2 text-orange"></i> Accessoires
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link px-3 py-2 mx-1 position-relative" exact-active-class="active">
                <i class="bi bi-envelope me-1"></i> Contact
                <span class="nav-indicator"></span>
              </NuxtLink>
            </li>
            <li class="nav-item ms-lg-2">
              <a href="tel:+237000000000" class="btn btn-sm btn-primary rounded-pill px-3 py-2 d-flex align-items-center shine-effect">
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
import { ref, onMounted } from 'vue';

// États réactifs
const isScrolled = ref(false);
const navbar = ref(null);

// Ajouter classe au scroll
const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

// Initialisation Bootstrap
const initializeBootstrapComponents = () => {
  // Initialiser les dropdowns de Bootstrap
  if (window.bootstrap && window.bootstrap.Dropdown) {
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.map(function (dropdownToggleEl) {
      return new window.bootstrap.Dropdown(dropdownToggleEl);
    });
  }
};

onMounted(() => {
  // Ajout de l'écouteur d'événement pour le scroll
  window.addEventListener('scroll', handleScroll);
  
  // Initialisation des composants Bootstrap
  initializeBootstrapComponents();
  
  // Cleanup
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
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

/* Animation du dropdown */
.dropdown-menu-animated {
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  display: block;
  margin-top: 10px;
  border-radius: 10px;
  padding: 1rem 0;
}

.dropdown:hover .dropdown-menu-animated {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
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

.navbar-toggler:hover {
  transform: rotate(4deg);
}

/* Adaptation mobile */
@media (max-width: 991px) {
  .nav-link {
    margin: 0.25rem 0;
    padding: 0.5rem 1rem !important;
  }
  
  .dropdown-menu-animated {
    display: none;
    opacity: 1;
    visibility: visible;
    transform: none;
    border: none;
    box-shadow: none;
    background: transparent;
    margin-top: 0;
    padding: 0 0 0 1.5rem;
  }
  
  .dropdown-menu-animated.show {
    display: block;
  }
  
  .dropdown:hover .dropdown-menu-animated {
    transform: none;
  }
  
  .dropdown-divider {
    display: none;
  }
  
  .dropdown-item {
    padding: 0.5rem 1rem;
    color: var(--bs-secondary);
  }
  
  .dropdown-item:hover {
    background: transparent;
  }
  
  .nav-indicator {
    display: none;
  }
}
</style> 