<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h3 class="footer-title">All Original</h3>
          <p class="footer-description">
            Votre boutique high-tech de confiance à Douala, Cameroun. Téléphones, ordinateurs et accessoires de qualité.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">📱</a>
            <a href="#" class="social-link" aria-label="Instagram">📷</a>
            <a href="#" class="social-link" aria-label="WhatsApp">💬</a>
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
            <p>Douala, Cameroun</p>
            <p>Email: contact@alloriginal.cm</p>
            <p>Tél: +237 XXX XXX XXX</p>
          </address>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ new Date().getFullYear() }} All Original. Tous droits réservés.
        </p>
        <div class="payment-methods">
          <span class="payment-method">Mobile Money</span>
          <span class="payment-method">Orange Money</span>
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
  background-color: #f8f9fa;
  padding: 3rem 0 1.5rem;
  margin-top: 3rem;
  border-top: 1px solid var(--border-color);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: var(--secondary-color);
}

.footer-description {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background-color: var(--primary-color);
  color: var(--light-color);
  font-size: 1.25rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-link:hover {
  background-color: darken(var(--primary-color), 10%);
  transform: translateY(-3px);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--primary-color);
}

.footer-address {
  font-style: normal;
  line-height: 1.7;
  color: var(--text-color);
}

.footer-address p {
  margin-bottom: 0.5rem;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.copyright {
  color: var(--text-color);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.payment-methods {
  display: flex;
  gap: 1rem;
}

.payment-method {
  font-size: 0.875rem;
  color: var(--text-color);
  background-color: var(--light-color);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid var(--border-color);
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-bottom {
    flex-direction: row;
  }
  
  .copyright {
    margin-bottom: 0;
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style> 