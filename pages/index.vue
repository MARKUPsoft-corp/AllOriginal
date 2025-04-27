<template>
  <div>
    <!-- Hero Section avec Particles -->
    <section class="py-5 bg-white position-relative hero-section overflow-hidden">
      <div id="particles-hero" class="particles-container"></div>
      <div class="container py-5 position-relative">
        <!-- Carousel principal -->
        <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <!-- Indicateurs -->
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          
          <!-- Slides du carousel -->
          <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start" data-aos="fade-right">
                  <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect">All Original</span>
                  <h1 class="display-3 fw-bold mb-3">High-Tech <span class="text-orange border-3 border-bottom border-orange pb-1 shine-text">Premium</span></h1>
                  <p class="lead mb-4 opacity-75">
                    Découvrez notre sélection complète de produits technologiques haut de gamme.
                  </p>
                  <NuxtLink to="/catalogue?category=tous" class="btn btn-primary btn-lg px-4 py-3 shadow-sm shine-effect">
                    Voir le catalogue
                    <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                  </NuxtLink>
                </div>
                <div class="col-lg-6 text-center" data-aos="fade-left" data-aos-delay="200">
                  <div class="hero-image float-animation position-relative">
                    <div class="hero-circle rotate-animation position-absolute" style="z-index: 0;"></div>
                    <div class="placeholder-image rounded-5 shadow-lg tilt-effect position-relative" style="z-index: 1;"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start" data-aos="fade-right">
                  <span class="badge bg-primary-subtle text-primary mb-3 px-3 py-2 rounded-pill shine-effect">Nouveautés</span>
                  <h1 class="display-3 fw-bold mb-3">Découvrez les <span class="text-primary border-3 border-bottom border-primary pb-1 shine-text">Tendances</span></h1>
                  <p class="lead mb-4 opacity-75">
                    Les derniers smartphones et accessoires disponibles dès maintenant.
                  </p>
                  <NuxtLink to="/catalogue?category=telephones" class="btn btn-primary btn-lg px-4 py-3 shadow-sm shine-effect">
                    Voir les nouveautés
                    <i class="bi bi-lightning-fill ms-2"></i>
                  </NuxtLink>
                </div>
                <div class="col-lg-6 text-center" data-aos="fade-left" data-aos-delay="200">
                  <div class="hero-image float-animation position-relative">
                    <div class="hero-circle rotate-animation position-absolute" style="z-index: 0;"></div>
                    <div class="placeholder-image phone-image rounded-5 shadow-lg tilt-effect position-relative" style="z-index: 1;"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Slide 3 -->
            <div class="carousel-item">
              <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start" data-aos="fade-right">
                  <span class="badge bg-success-subtle text-success mb-3 px-3 py-2 rounded-pill shine-effect">Promotions</span>
                  <h1 class="display-3 fw-bold mb-3">Offres <span class="text-success border-3 border-bottom border-success pb-1 shine-text">Spéciales</span></h1>
                  <p class="lead mb-4 opacity-75">
                    Profitez de nos offres limitées sur une sélection de produits high-tech.
                  </p>
                  <NuxtLink to="/catalogue?promo=true" class="btn btn-success btn-lg px-4 py-3 shadow-sm shine-effect">
                    Voir les promos
                    <i class="bi bi-tag-fill ms-2"></i>
                  </NuxtLink>
                </div>
                <div class="col-lg-6 text-center" data-aos="fade-left" data-aos-delay="200">
                  <div class="hero-image float-animation position-relative">
                    <div class="hero-circle rotate-animation position-absolute" style="z-index: 0;"></div>
                    <div class="placeholder-image promo-image rounded-5 shadow-lg tilt-effect position-relative" style="z-index: 1;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contrôles repositionnés en bas -->
          <div class="carousel-controls-wrapper">
            <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Précédent</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Suivant</span>
            </button>
          </div>
        </div>
      </div>
      <div class="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path fill="#f8f9fa" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- Categories Section - Style Sobre -->
    <section class="categories-section-new py-5">
      <div class="container py-5">
        <div class="row mb-5">
          <div class="col-12 text-center" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill">Explorez</span>
            <h2 class="display-5 fw-bold mb-3">Nos Catégories</h2>
            <div class="separator-line mx-auto mb-4"></div>
            <p class="lead col-lg-6 mx-auto opacity-75">Découvrez notre sélection de produits high-tech premium</p>
          </div>
        </div>
        
        <div class="row g-4 justify-content-center">
          <div v-for="(category, index) in categories" :key="category.id" class="col-12 col-md-6 col-lg-3">
            <div class="category-box" 
                data-aos="fade-up" 
                :data-aos-delay="`${index * 50}`">
              <div class="category-icon-container">
                <i :class="`bi bi-${category.icon === 'smartphone' ? 'phone' : category.icon === 'laptop' ? 'laptop' : category.icon === 'tablet' ? 'tablet' : category.icon === 'headphones' ? 'headphones' : 'box'}`"></i>
              </div>
              <h3 class="category-name">{{ category.name }}</h3>
              <p class="category-desc">{{ category.description }}</p>
              <NuxtLink :to="`/catalogue?category=${category.slug}`" class="category-link">
                Découvrir <i class="bi bi-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Featured Products Section - Style Sobre -->
    <section class="featured-products-section py-5">
      <div class="container py-5">
        <div class="row mb-5">
          <div class="col-12 text-center" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill">Tendances</span>
            <h2 class="display-5 fw-bold mb-3">Produits Populaires</h2>
            <div class="separator-line mx-auto mb-4"></div>
            <p class="lead col-lg-6 mx-auto opacity-75">Découvrez nos produits les plus demandés par nos clients</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div v-for="(product, index) in featuredProducts" :key="product.id" class="col-12 col-md-6 col-lg-4">
            <div class="product-card-wrapper"
                 data-aos="fade-up" :data-aos-delay="`${index * 50}`">
              <div class="product-card">
                <ProductCard :product="product" />
                <div class="product-shine"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-5" data-aos="fade-up">
          <NuxtLink to="/catalogue?category=tous" class="btn btn-outline-primary btn-lg px-4">
            Voir tous les produits <i class="bi bi-arrow-right ms-2"></i>
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- Services Section - Style Sobre -->
    <section class="services-section-new py-5">
      <div class="container py-5">
        <div class="row mb-5">
          <div class="col-12 text-center" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill">Services</span>
            <h2 class="display-5 fw-bold mb-3">Pourquoi nous choisir</h2>
            <div class="separator-line mx-auto mb-4"></div>
            <p class="lead col-lg-6 mx-auto opacity-75">Nous nous engageons à offrir la meilleure expérience client</p>
          </div>
        </div>
        
        <div class="row g-4 justify-content-center">
          <!-- Service 1 -->
          <div class="col-md-4" data-aos="fade-up">
            <div class="service-box">
              <div class="service-icon">
                <i class="bi bi-shield-check"></i>
              </div>
              <h3 class="service-title">Qualité Garantie</h3>
              <p class="service-desc">
                Tous nos produits sont authentiques et bénéficient d'une garantie constructeur officielle. Nous sélectionnons avec soin chaque article.
              </p>
            </div>
          </div>
          
          <!-- Service 2 -->
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="service-box">
              <div class="service-icon">
                <i class="bi bi-truck"></i>
              </div>
              <h3 class="service-title">Livraison Rapide</h3>
              <p class="service-desc">
                Livraison express partout au Cameroun sous 24h à 72h selon votre localisation. Suivi de commande en temps réel.
              </p>
            </div>
          </div>
          
          <!-- Service 3 -->
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="service-box">
              <div class="service-icon">
                <i class="bi bi-headset"></i>
              </div>
              <h3 class="service-title">Service Client</h3>
              <p class="service-desc">
                Notre équipe professionnelle est disponible 7j/7 pour répondre à toutes vos questions et vous accompagner dans vos achats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call To Action Section avec gradient animé -->
    <section class="py-5 animated-gradient text-white position-relative cta-section overflow-hidden">
      <div id="particles-cta" class="particles-container"></div>
      <div class="container py-5 position-relative">
        <div class="row align-items-center">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 class="display-4 fw-bold mb-4 text-shadow">Prêt à découvrir nos produits ?</h2>
            <p class="lead mb-4 opacity-85">Explorez notre catalogue complet et trouvez les meilleurs produits high-tech au Cameroun.</p>
            <NuxtLink to="/catalogue?category=tous" class="btn btn-light btn-lg px-5 py-3 fw-semibold text-orange shine-effect">
              Parcourir le catalogue
              <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
            
            <div class="floating-icons position-absolute d-none d-lg-block">
              <i class="bi bi-laptop floating-icon"></i>
              <i class="bi bi-phone floating-icon"></i>
              <i class="bi bi-headphones floating-icon"></i>
              <i class="bi bi-smartwatch floating-icon"></i>
              <i class="bi bi-speaker floating-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// SEO
definePageMeta({
  title: 'All Original - Boutique High-Tech Premium au Cameroun',
  description: 'Découvrez notre sélection complète de produits technologiques haut de gamme. Téléphones, ordinateurs et accessoires high-tech disponibles à Douala, Cameroun.'
});

// Données
const categories = ref([]);
const featuredProducts = ref([]);

// Récupération des données
onMounted(async () => {
  try {
    // Chargement des catégories
    const categoriesResponse = await fetch('/data/categories.json');
    categories.value = await categoriesResponse.json();
    
    // Chargement des produits mis en avant
    const productsResponse = await fetch('/data/products.json');
    const products = await productsResponse.json();
    featuredProducts.value = products.filter(product => product.featured);
    
    // Initialisation des particules
    if (document.getElementById("particles-hero") && window.particlesJS) {
      window.particlesJS('particles-hero', {
        particles: {
          number: { value: 30, density: { enable: true, value_area: 800 } },
          color: { value: '#ff8c00' },
          opacity: { value: 0.2, random: true },
          size: { value: 5, random: true },
          line_linked: { enable: true, color: '#ff8c00', opacity: 0.1 }
        }
      });
    }
    
    if (document.getElementById("particles-cta") && window.particlesJS) {
      window.particlesJS('particles-cta', {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          opacity: { value: 0.3, random: true },
          size: { value: 4, random: true },
          line_linked: { enable: true, color: '#ffffff', opacity: 0.2 }
        }
      });
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
  }
});
</script>

<style scoped>
/* Animations supplémentaires */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-section {
  padding-top: 80px;
  padding-bottom: 120px;
  position: relative;
  min-height: 80vh;
  z-index: 1;
}

.wave-shape-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(0deg);
  z-index: 1;
}

.wave-shape-white path {
  fill: #ffffff;
}

/* Style pour l'image placeholder */
.placeholder-image {
  background: linear-gradient(45deg, var(--bs-primary) 0%, var(--bs-primary-light) 100%);
  height: 360px;
  width: 300px;
  margin: 0 auto;
  transition: transform 0.5s ease;
  position: relative;
  z-index: 2;
}

.hero-image {
  position: relative;
  display: inline-block;
}

.hero-circle {
  position: absolute;
  width: 400px;
  height: 400px;
  top: -20%;
  left: -20%;
  border-radius: 50%;
  border: 2px dashed var(--bs-primary);
  opacity: 0.3;
}

/* Styles pour les formes décoratives */
.shape-decorator {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background-color: rgba(var(--bs-primary-rgb), 0.05);
  z-index: 0;
}

.shape-right {
  top: 10%;
  right: -100px;
}

.shape-left {
  bottom: 10%;
  left: -100px;
}

/* Ombre pour texte sur fond foncé */
.text-shadow {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* Floating icons in CTA section */
.floating-icons {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.floating-icon {
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.4);
  animation: floatingIcons 15s linear infinite;
}

.floating-icon:nth-child(1) {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
  font-size: 2.5rem;
}

.floating-icon:nth-child(2) {
  top: 60%;
  left: 15%;
  animation-delay: 2s;
}

.floating-icon:nth-child(3) {
  top: 25%;
  right: 15%;
  animation-delay: 4s;
  font-size: 1.8rem;
}

.floating-icon:nth-child(4) {
  top: 70%;
  right: 20%;
  animation-delay: 6s;
  font-size: 1.5rem;
}

.floating-icon:nth-child(5) {
  top: 40%;
  right: 5%;
  animation-delay: 8s;
  font-size: 2.2rem;
}

@keyframes floatingIcons {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.4;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
    opacity: 0.4;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.4;
  }
}

.opacity-10 {
  opacity: 0.1;
}

.opacity-75 {
  opacity: 0.75;
}

.opacity-85 {
  opacity: 0.85;
}

/* Styles pour le carousel */
.carousel-item {
  transition: transform 0.6s ease-in-out;
}

.carousel-control-prev, 
.carousel-control-next {
  width: 10%;
  opacity: 1;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: var(--bs-orange);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-size: 24px;
}

.carousel-control-prev:hover .carousel-control-prev-icon,
.carousel-control-next:hover .carousel-control-next-icon {
  background-color: var(--bs-primary);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 40px;
    height: 40px;
    background-size: 20px;
  }
}

.carousel-indicators {
  bottom: -30px;
}

.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: rgba(0, 0, 0, 0.2);
}

.carousel-indicators button.active {
  background-color: var(--bs-primary);
}

/* Images spécifiques pour chaque slide */
.phone-image {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  height: 350px;
}

.promo-image {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  height: 350px;
}

.new-arrivals-image {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  height: 350px;
}

.sale-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 350px;
}

/* Animation de transition pour le carousel */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.carousel-item.active .col-lg-6 {
  animation: fadeInRight 0.5s ease-in-out;
}

/* Styles améliorés pour les contrôles du carousel */
.carousel-controls-wrapper {
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 5;
}

.carousel-control-prev, 
.carousel-control-next {
  position: relative;
  width: 40px;
  height: 40px;
  opacity: 1;
  margin: 0 5px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(255, 140, 0, 0.7);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-size: 20px;
  backdrop-filter: blur(5px);
}

.carousel-control-prev:hover .carousel-control-prev-icon,
.carousel-control-next:hover .carousel-control-next-icon {
  background-color: var(--bs-orange);
  transform: scale(1.1);
}

/* Styles pour la nouvelle section Catégories */
.categories-section {
  background-color: #f8f9fa;
  position: relative;
  z-index: 1;
  padding: 6rem 0;
}

.categories-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 10% 20%, rgba(255, 140, 0, 0.05) 0%, transparent 70%),
                    radial-gradient(circle at 90% 80%, rgba(0, 123, 255, 0.05) 0%, transparent 70%);
  z-index: -1;
}

.section-title-wrapper {
  position: relative;
  margin-bottom: 3rem;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--bs-orange) 0%, var(--bs-primary) 100%);
  border-radius: 2px;
  margin-top: 1rem;
  position: relative;
}

.title-underline::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 0;
  width: 20px;
  height: 8px;
  background-color: var(--bs-orange);
  border-radius: 4px;
  animation: underlinePulse 3s infinite;
}

@keyframes underlinePulse {
  0%, 100% { left: 0; }
  50% { left: calc(100% - 20px); }
}

.categories-wrapper {
  position: relative;
  perspective: 1000px;
}

.category-card-wrapper {
  margin-bottom: 2rem;
  transition: all 0.5s ease;
}

.category-card-container {
  position: relative;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
}

.category-card-container:hover {
  transform: translateY(-10px) rotateY(5deg);
}

.category-card-shape {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 100%;
  height: 100%;
  background-color: var(--bs-orange);
  opacity: 0.1;
  border-radius: 15px;
  z-index: -1;
  transform: scale(0.9);
  transition: all 0.5s ease;
}

.category-card-container:hover .category-card-shape {
  transform: scale(1);
  opacity: 0.2;
}

/* Cercles flottants */
.floating-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 140, 0, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  filter: blur(20px);
  z-index: 0;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -100px;
  animation: floatCircle 20s ease-in-out infinite alternate;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: 100px;
  left: -100px;
  animation: floatCircle 15s ease-in-out infinite alternate-reverse;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 10%;
  animation: floatCircle 17s ease-in-out infinite alternate;
}

@keyframes floatCircle {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(40px, -30px) scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: translate(-20px, 20px) scale(0.9);
    opacity: 0.6;
  }
}

/* Ajustements responsive */
@media (max-width: 768px) {
  .categories-section {
    padding: 4rem 0;
  }
  
  .title-underline {
    width: 60px;
  }
  
  .floating-circle {
    opacity: 0.3;
  }
}

/* Styles pour la nouvelle section des catégories - Style Sobre */
.categories-section-new {
  background-color: #fff;
  padding: 5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.separator-line {
  width: 60px;
  height: 3px;
  background-color: var(--bs-orange);
  border-radius: 3px;
}

.category-box {
  background-color: #fff;
  border-radius: 8px;
  padding: 2.5rem 1.5rem;
  height: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.category-box::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, var(--bs-orange), var(--bs-primary));
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.category-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.category-box:hover::before {
  transform: scaleX(1);
}

.category-icon-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(var(--bs-orange-rgb), 0.1);
  color: var(--bs-orange);
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.category-box:hover .category-icon-container {
  background-color: var(--bs-orange);
  color: white;
  transform: scale(1.1);
}

.category-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--bs-gray-900);
}

.category-desc {
  font-size: 0.9rem;
  color: var(--bs-gray-600);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.category-link {
  color: var(--bs-orange);
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.category-link i {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.category-link:hover {
  color: var(--bs-primary);
}

.category-link:hover i {
  transform: translateX(5px);
}

@media (max-width: 767px) {
  .category-box {
    padding: 2rem 1rem;
  }
  
  .category-icon-container {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }
}

/* Styles pour la nouvelle section des produits populaires - Style Sobre */
.featured-products-section {
  background-color: #f8f9fa;
  padding: 5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.product-card-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.product-card {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.product-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(-45deg);
  opacity: 0;
  transition: all 0.3s ease;
}

.product-card-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.product-card-wrapper:hover .product-shine {
  opacity: 1;
  top: 0;
  left: 0;
}

/* Styles pour la nouvelle section des services - Style Sobre */
.services-section-new {
  background-color: #fff;
  padding: 5rem 0;
}

.service-box {
  background-color: #fff;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

.service-box::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, var(--bs-orange), var(--bs-primary));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}

.service-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.service-box:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.service-icon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: rgba(var(--bs-orange-rgb), 0.1);
  color: var(--bs-orange);
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.service-icon::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px dashed var(--bs-orange);
  opacity: 0.3;
  animation: rotate 15s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.service-box:hover .service-icon {
  background-color: var(--bs-orange);
  color: white;
  transform: scale(1.1);
}

.service-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--bs-gray-900);
}

.service-desc {
  font-size: 0.95rem;
  color: var(--bs-gray-600);
  line-height: 1.6;
}

@media (max-width: 767px) {
  .service-box {
    padding: 2rem 1.5rem;
  }
  
  .service-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
}
</style> 