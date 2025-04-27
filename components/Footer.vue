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
  margin-top: 8rem;
  background: linear-gradient(180deg, #2c323d 0%, #1a1e24 80%, #141619 100%);
  color: #f8f9fa;
  overflow: hidden;
  --footer-accent: var(--bs-orange);
  --footer-hover: #ff9f40;
}

.footer-wave-top {
  position: absolute;
  top: -120px;
  left: 0;
  width: 100%;
  height: 120px;
  overflow: hidden;
  filter: drop-shadow(0 -5px 10px rgba(0,0,0,0.1));
}

.footer-content {
  position: relative;
  padding: 5rem 0 3rem;
  z-index: 2;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 15% 20%, rgba(255, 140, 0, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 85% 80%, rgba(0, 123, 255, 0.1) 0%, transparent 60%);
  opacity: 0.8;
  z-index: 1;
}

.footer::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--footer-accent), transparent);
  opacity: 0.4;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--footer-accent);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.footer-column:hover .footer-title::after {
  width: 50px;
}

.footer-description {
  color: #b0b0b0;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 0.85rem;
  margin-top: 1.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.5s ease;
}

.social-link:hover {
  background: var(--footer-accent);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(255, 140, 0, 0.3);
  border-color: rgba(255, 140, 0, 0.5);
}

.social-link:hover::before {
  animation: shine 1.2s;
}

@keyframes shine {
  0% {
    top: -100%;
    left: -100%;
  }
  100% {
    top: 100%;
    left: 100%;
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  position: relative;
}

.footer-links li:hover {
  transform: translateX(5px);
}

.footer-link {
  color: #d0d0d0;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  padding-left: 0.5rem;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 0 4px 4px;
  border-color: transparent transparent transparent rgba(255, 140, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.footer-link:hover {
  color: var(--footer-hover);
}

.footer-link:hover::before {
  opacity: 1;
  transform: translateY(-50%) translateX(-3px);
}

.footer-address {
  font-style: normal;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-item i {
  margin-right: 0.85rem;
  color: var(--footer-accent);
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.contact-item:hover i {
  transform: scale(1.2);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  color: #a0a0a0;
  position: relative;
}

.copyright {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.powered-by {
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.powered-by i {
  color: #ff3b5c;
  transform-origin: center;
  animation: heartbeat 1.5s infinite alternate-reverse;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
}

.text-danger {
  color: #ff3b5c;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
  }
  
  .copyright {
    margin-bottom: 0;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .footer-content {
    padding: 3rem 0 1.5rem;
  }
  
  .social-link {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1rem;
  }
  
  .footer-title {
    font-size: 1.15rem;
    margin-bottom: 1.25rem;
  }
  
  .footer-links li {
    margin-bottom: 0.85rem;
  }
  
  .footer-column:first-child {
    grid-column: span 2;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  
  .social-link:active {
    transform: scale(0.95);
  }
}

@media (max-width: 767px) and (min-width: 577px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  .footer-column:first-child {
    grid-column: span 2;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
}

@media (max-width: 991px) and (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 3rem;
  }
  
  .footer-column:first-child {
    grid-column: span 2;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
}
</style> 