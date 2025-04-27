<template>
  <footer class="footer">
    <div class="footer-wave-top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path fill="#f8f9fa" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
    <div class="footer-content">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <h3 class="footer-title">All Original</h3>
            <p class="footer-description">
              Votre boutique high-tech de confiance à Douala, Cameroun. Téléphones, ordinateurs et accessoires de qualité.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <i class="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">Catégories</h3>
            <ul class="footer-links">
              <li><NuxtLink to="/catalogue?category=telephones" class="footer-link">Téléphones</NuxtLink></li>
              <li><NuxtLink to="/catalogue?category=ordinateurs" class="footer-link">Ordinateurs</NuxtLink></li>
              <li><NuxtLink to="/catalogue?category=tablettes" class="footer-link">Tablettes</NuxtLink></li>
              <li><NuxtLink to="/catalogue?category=accessoires" class="footer-link">Accessoires</NuxtLink></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">À propos</h3>
            <ul class="footer-links">
              <li><NuxtLink to="/contact" class="footer-link">Contact</NuxtLink></li>
              <li><NuxtLink to="/mentions-legales" class="footer-link">Mentions légales</NuxtLink></li>
              <li><NuxtLink to="/livraison" class="footer-link">Livraison</NuxtLink></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">Contact</h3>
            <address class="footer-address">
              <div class="contact-item">
                <i class="bi bi-geo-alt-fill"></i>
                <span>Douala, Cameroun</span>
              </div>
              <div class="contact-item">
                <i class="bi bi-envelope-fill"></i>
                <span>contact@alloriginal.cm</span>
              </div>
              <div class="contact-item">
                <i class="bi bi-telephone-fill"></i>
                <span>+237 XXX XXX XXX</span>
              </div>
            </address>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="copyright">
            &copy; {{ new Date().getFullYear() }} All Original. Tous droits réservés.
          </p>
          <p class="powered-by">
            Site conçu avec <i class="bi bi-heart-fill text-danger"></i> pour la qualité
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

<style scoped>
.footer {
  position: relative;
  margin-top: 5rem;
  background: linear-gradient(180deg, #2e3642 0%, #1a1e24 100%);
  color: #f8f9fa;
  overflow: hidden;
}

.footer-wave-top {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
}

.footer-content {
  position: relative;
  padding: 5rem 0 2rem;
  z-index: 2;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 20% 30%, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(0, 123, 255, 0.1) 0%, transparent 50%);
  opacity: 0.5;
  z-index: 1;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--bs-orange);
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, var(--bs-orange) 0%, transparent 100%);
  border-radius: 2px;
}

.footer-description {
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #adb5bd;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #f8f9fa;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background-color: var(--bs-orange);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.85rem;
  transition: transform 0.3s ease;
}

.footer-links li:hover {
  transform: translateX(5px);
}

.footer-link {
  color: #adb5bd;
  text-decoration: none;
  position: relative;
  padding-left: 0;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.footer-link:hover {
  color: var(--bs-orange);
}

.footer-link::before {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: var(--bs-orange);
  transition: width 0.3s ease;
}

.footer-link:hover::before {
  width: 100%;
}

.footer-address {
  font-style: normal;
  line-height: 1.7;
  color: #adb5bd;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.75rem;
}

.contact-item i {
  color: var(--bs-orange);
  font-size: 1.1rem;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #adb5bd;
}

.copyright {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.powered-by {
  font-size: 0.85rem;
}

.text-danger {
  color: #dc3545;
}

@media (min-width: 576px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
  }
  
  .copyright {
    margin-bottom: 0;
  }
}

@media (min-width: 992px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 3rem;
  }
}

@media (max-width: 576px) {
  .footer-content {
    padding: 3rem 0 1.5rem;
  }
  
  .social-link {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1rem;
  }
  
  .footer-title {
    font-size: 1.1rem;
    margin-bottom: 1.25rem;
  }
  
  .footer-links li {
    margin-bottom: 0.75rem;
  }
}
</style> 