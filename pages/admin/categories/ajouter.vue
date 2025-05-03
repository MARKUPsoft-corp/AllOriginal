<template>
  <div>
    <!-- Section Hero Admin Ajouter Catégorie avec Particles -->
    <section class="py-5 bg-white position-relative admin-hero-section-sm overflow-hidden">
      <div id="particles-admin-add-category" class="particles-container"></div>
      <div class="container py-4 position-relative">
        <div class="row">
          <div class="col-lg-8" data-aos="fade-up">
            <span class="badge bg-orange-subtle text-orange mb-3 px-3 py-2 rounded-pill shine-effect">Gestion des catégories</span>
            <h1 class="display-5 fw-bold mb-3">Ajouter une <span class="text-gradient">Catégorie</span></h1>
            <p class="lead mb-4 opacity-75">
              Créez une nouvelle catégorie pour organiser vos produits
            </p>
          </div>
          <div class="col-lg-4 d-flex justify-content-lg-end align-items-center mt-4 mt-lg-0" data-aos="fade-left">
            <NuxtLink to="/admin/categories" class="btn btn-outline-primary btn-lg px-4 py-3 shadow-sm shine-effect btn-animated">
              <i class="bi bi-arrow-left me-2"></i> Retour à la liste
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#f8f9fa" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,26.7C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <!-- Section Formulaire d'ajout de catégorie -->
    <section class="add-category-form-section py-5 section-styled position-relative overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="admin-card rounded-4 shadow-sm p-4 p-lg-5">
              <h3 class="mb-4 fs-4 text-gradient">Informations de la catégorie</h3>
              
              <form @submit.prevent="saveCategory">
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="form-floating custom-floating">
                      <input 
                        type="text" 
                        class="form-control custom-form-control" 
                        id="categoryName" 
                        placeholder="Nom de la catégorie"
                        v-model="category.name"
                        @input="generateSlug"
                        required
                      >
                      <label for="categoryName">Nom de la catégorie*</label>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-floating custom-floating">
                      <input 
                        type="text" 
                        class="form-control custom-form-control" 
                        id="categorySlug" 
                        placeholder="Slug (URL)"
                        v-model="category.slug"
                        required
                      >
                      <label for="categorySlug">Slug (URL)*</label>
                      <small class="text-muted mt-1 d-block">Le slug est généré automatiquement mais peut être personnalisé</small>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-floating custom-floating">
                      <input 
                        type="text" 
                        class="form-control custom-form-control" 
                        id="categoryIconDescription" 
                        placeholder="Description de l'icône"
                        v-model="iconDescription"
                        @input="interpretIconDescription"
                      >
                      <label for="categoryIconDescription">Décrivez l'icône</label>
                      <small class="text-muted mt-1 d-block">Décrivez l'icône en langage naturel (ex: panier d'achat, étoile, téléphone...)</small>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label mb-2">Aperçu de l'icône</label>
                      <div class="category-icon-preview rounded-3 d-flex align-items-center justify-content-center tilt-effect">
                        <i :class="'bi bi-' + (category.icon || 'grid') + ' text-orange fs-1'"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <div class="form-floating custom-floating">
                      <textarea 
                        class="form-control custom-form-control" 
                        id="categoryDescription" 
                        style="height: 120px" 
                        placeholder="Description"
                        v-model="category.description"
                        required
                      ></textarea>
                      <label for="categoryDescription">Description*</label>
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <div class="form-check form-switch mb-3">
                      <input class="form-check-input" type="checkbox" id="categoryActive" v-model="category.active">
                      <label class="form-check-label" for="categoryActive">Catégorie active</label>
                    </div>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between mt-4 pt-3 border-top">
                  <NuxtLink to="/admin/categories" class="btn btn-outline-secondary px-4 shine-effect btn-animated">
                    <i class="bi bi-x-circle me-2"></i> Annuler
                  </NuxtLink>
                  <button type="submit" class="btn btn-primary px-5 shine-effect btn-animated">
                    <i class="bi bi-check-circle me-2"></i> Ajouter la catégorie
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from '#app';
import '~/assets/css/admin-styles.css';

// Router pour la redirection
const router = useRouter();

// Catégorie à ajouter
const category = reactive({
  id: null,
  name: '',
  slug: '',
  icon: 'grid',
  description: '',
  active: true
});

// Description de l'icône en langage naturel
const iconDescription = ref('');

// Tableau de correspondance entre descriptions en langage naturel et icônes Bootstrap
const iconMappings = [
  // Électronique & Appareils
  { keywords: ['ordinateur', 'laptop', 'pc', 'portable', 'macbook'], icon: 'laptop' },
  { keywords: ['smartphone', 'iphone', 'android', 'mobile', 'portable'], icon: 'phone' },
  { keywords: ['tablette', 'ipad', 'tablet'], icon: 'tablet' },
  { keywords: ['casque', 'headphones', 'écouteurs', 'headset'], icon: 'headphones' },
  { keywords: ['télévision', 'tv', 'écran', 'screen', 'monitor', 'moniteur'], icon: 'tv' },
  { keywords: ['caméra', 'appareil photo', 'photo', 'camera'], icon: 'camera' },
  { keywords: ['gamepad', 'controller', 'manette', 'jeu'], icon: 'controller' },
  { keywords: ['imprimante', 'printer'], icon: 'printer' },
  { keywords: ['scanner', 'scan'], icon: 'upc-scan' },
  { keywords: ['souris', 'mouse'], icon: 'mouse' },
  { keywords: ['clavier', 'keyboard'], icon: 'keyboard' },
  { keywords: ['disque dur', 'hard drive', 'storage', 'stockage'], icon: 'hdd' },
  { keywords: ['usb', 'clé usb', 'flash drive'], icon: 'usb-drive' },
  { keywords: ['bluetooth', 'sans fil', 'wireless'], icon: 'bluetooth' },
  { keywords: ['montre intelligente', 'smartwatch', 'wearable'], icon: 'watch' },
  
  // Technologie & Internet
  { keywords: ['wifi', 'internet', 'réseau', 'network'], icon: 'wifi' },
  { keywords: ['cloud', 'nuage', 'sauvegarde', 'backup'], icon: 'cloud' },
  { keywords: ['sécurité', 'security', 'protection', 'lock', 'verrouillage'], icon: 'shield-lock' },
  { keywords: ['code', 'programmation', 'development', 'tag html'], icon: 'code' },
  { keywords: ['téléchargement', 'download'], icon: 'download' },
  { keywords: ['envoi', 'upload'], icon: 'upload' },
  { keywords: ['satellite', 'antenne', 'starlink', 'espace'], icon: 'broadcast' },
  { keywords: ['serveur', 'server', 'data center', 'centre de données'], icon: 'server' },
  { keywords: ['base de données', 'database'], icon: 'database' },
  { keywords: ['globe', 'web', 'mondial', 'international'], icon: 'globe' },
  { keywords: ['bug', 'erreur', 'insecte'], icon: 'bug' },
  { keywords: ['batterie', 'battery', 'énergie'], icon: 'battery' },
  { keywords: ['sim', 'carte sim', 'sim card'], icon: 'sim' },
  { keywords: ['cpu', 'processeur', 'processor', 'chip', 'puce'], icon: 'cpu' },
  { keywords: ['blockchain', 'bitcoin', 'crypto', 'cryptocurrency'], icon: 'currency-bitcoin' },
  { keywords: ['carte mère', 'motherboard', 'circuit', 'puce'], icon: 'motherboard' },
  { keywords: ['réseau', 'network', 'connexion'], icon: 'diagram-3' },
  { keywords: ['robotique', 'robot', 'automatisation'], icon: 'robot' },
  { keywords: ['ia', 'ai', 'intelligence artificielle', 'machine learning'], icon: 'robot' },
  { keywords: ['vr', 'ar', 'réalité virtuelle', 'réalité augmentée', 'casque vr'], icon: 'badge-vr' },
  { keywords: ['cybersecurité', 'cybersecurity', 'cybercriminalité'], icon: 'shield-lock' },
  { keywords: ['drone', 'uav', 'quadcopter'], icon: 'airplane' },
  
  // Applications & Interfaces
  { keywords: ['panier', 'achat', 'cart', 'shopping', 'e-commerce'], icon: 'cart' },
  { keywords: ['utilisateur', 'user', 'personne', 'compte', 'profile'], icon: 'person' },
  { keywords: ['maison', 'accueil', 'home'], icon: 'house' },
  { keywords: ['téléphone', 'phone', 'appel', 'call'], icon: 'telephone' },
  { keywords: ['étoile', 'star', 'favoris', 'rating', 'note'], icon: 'star' },
  { keywords: ['coeur', 'heart', 'like', 'j\'aime', 'favori'], icon: 'heart' },
  { keywords: ['paramètres', 'settings', 'configuration', 'outil', 'preferences'], icon: 'gear' },
  { keywords: ['recherche', 'search', 'loupe', 'find', 'trouver'], icon: 'search' },
  { keywords: ['vérifié', 'check', 'validé', 'terminé', 'completed'], icon: 'check-circle' },
  { keywords: ['tag', 'étiquette', 'prix', 'price', 'label'], icon: 'tag' },
  { keywords: ['enveloppe', 'mail', 'email', 'message', 'lettre'], icon: 'envelope' },
  { keywords: ['image', 'photo', 'picture', 'galerie'], icon: 'image' },
  { keywords: ['vidéo', 'film', 'clip', 'youtube'], icon: 'camera-video' },
  { keywords: ['document', 'fichier', 'file', 'pdf', 'doc'], icon: 'file-earmark' },
  { keywords: ['musique', 'music', 'audio', 'son', 'mp3', 'song'], icon: 'music-note' },
  { keywords: ['graphique', 'statistiques', 'chart', 'stats', 'analytics'], icon: 'bar-chart' },
  { keywords: ['localisation', 'location', 'map', 'carte', 'gps', 'navigation'], icon: 'geo-alt' },
  { keywords: ['horloge', 'temps', 'time', 'montre', 'clock', 'heure'], icon: 'clock' },
  { keywords: ['calendrier', 'date', 'agenda', 'planning', 'événement'], icon: 'calendar' },
  { keywords: ['liste', 'list', 'points', 'todo', 'tâches'], icon: 'list' },
  { keywords: ['grille', 'grid', 'tableau', 'table', 'matrix'], icon: 'grid' },
  { keywords: ['bouclier', 'shield', 'sécurité', 'protection', 'firewall'], icon: 'shield' },
  { keywords: ['chat', 'conversation', 'message', 'discussion'], icon: 'chat' },
  { keywords: ['groupe', 'team', 'collaboration', 'équipe'], icon: 'people' },
  { keywords: ['notifications', 'alerte', 'alert', 'bell', 'cloche'], icon: 'bell' },
  { keywords: ['bookmark', 'signet', 'marque-page'], icon: 'bookmark' },
  { keywords: ['carte de crédit', 'credit card', 'paiement', 'payment'], icon: 'credit-card' },
  { keywords: ['panier', 'bag', 'sac', 'achats'], icon: 'bag' },
  { keywords: ['calculatrice', 'calculator', 'calcul', 'math'], icon: 'calculator' },
  
  // Divers
  { keywords: ['cadenas', 'lock', 'verrouillé'], icon: 'lock' },
  { keywords: ['clé', 'key', 'accès', 'password', 'mot de passe'], icon: 'key' },
  { keywords: ['login', 'connexion', 'sign in'], icon: 'box-arrow-in-right' },
  { keywords: ['logout', 'déconnexion', 'sign out'], icon: 'box-arrow-right' },
  { keywords: ['partage', 'share', 'sharing'], icon: 'share' },
  { keywords: ['zoom', 'loupe', 'agrandir'], icon: 'zoom-in' },
  { keywords: ['lien', 'link', 'url', 'hyperlien'], icon: 'link' },
  { keywords: ['filtre', 'filter', 'tri', 'sort'], icon: 'funnel' },
  { keywords: ['pincé', 'pinceé', 'pinceau', 'brush', 'design'], icon: 'brush' },
  { keywords: ['impression', 'print', 'imprimer'], icon: 'printer' },
  { keywords: ['rafraîchir', 'refresh', 'reload', 'actualiser'], icon: 'arrow-clockwise' },
  { keywords: ['copier', 'copy', 'clone', 'dupliquer'], icon: 'clipboard' },
  { keywords: ['micro', 'microphone', 'audio', 'voice', 'voix'], icon: 'mic' },
  { keywords: ['volume', 'sound', 'speaker', 'haut-parleur'], icon: 'volume-up' },
  { keywords: ['mute', 'muet', 'silence'], icon: 'volume-mute' },
  { keywords: ['flash', 'éclair', 'lightning'], icon: 'lightning' },
  { keywords: ['commentaire', 'comment', 'feedback'], icon: 'chat-text' },
  { keywords: ['instagram', 'photo sociale', 'social'], icon: 'instagram' },
  { keywords: ['facebook', 'social'], icon: 'facebook' },
  { keywords: ['twitter', 'tweet', 'social'], icon: 'twitter' },
  { keywords: ['youtube', 'vidéo sociale'], icon: 'youtube' },
  { keywords: ['linkedin', 'business', 'career', 'carrière'], icon: 'linkedin' },
  { keywords: ['github', 'git', 'code source', 'source code'], icon: 'github' },
  { keywords: ['tiktok', 'short video'], icon: 'tiktok' },
  { keywords: ['whatsapp', 'message instantané'], icon: 'whatsapp' },
  { keywords: ['android', 'mobile os'], icon: 'android2' },
  { keywords: ['apple', 'ios', 'mac', 'iphone'], icon: 'apple' },
  { keywords: ['windows', 'microsoft', 'pc'], icon: 'microsoft' },
  { keywords: ['linux', 'tux', 'open source'], icon: 'terminal' },
  { keywords: ['plug', 'prise', 'connect', 'plugin'], icon: 'plug' },
  { keywords: ['badge', 'médaille'], icon: 'award' }
];

// Interpréter la description de l'icône et trouver l'icône Bootstrap correspondante
const interpretIconDescription = () => {
  if (!iconDescription.value) {
    category.icon = 'grid'; // Icône par défaut
    return;
  }
  
  const description = iconDescription.value.toLowerCase();
  
  // Parcourir les correspondances pour trouver une icône appropriée
  for (const mapping of iconMappings) {
    if (mapping.keywords.some(keyword => description.includes(keyword))) {
      category.icon = mapping.icon;
      return;
    }
  }
  
  // Si aucune correspondance n'est trouvée, utiliser l'icône par défaut
  category.icon = 'grid';
};

// Générer un slug à partir du nom
const generateSlug = () => {
  if (category.name) {
    category.slug = category.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9]/g, ' ')
      .trim()
      .replace(/\s+/g, '-');
  }
};

// Sauvegarder une catégorie
const saveCategory = () => {
  // Effectuer la validation finale
  if (!category.name || !category.slug || !category.description) {
    alert('Veuillez remplir tous les champs obligatoires avant de sauvegarder.');
    return;
  }
  
  // Assigner un ID temporaire (simulé)
  category.id = Math.floor(Math.random() * 1000) + 100;
  
  // Dans un vrai backend, on ferait un appel API ici
  console.log('Catégorie à sauvegarder:', category);
  
  // Notification de succès
  alert('Catégorie ajoutée avec succès !');
  
  // Rediriger vers la liste des catégories
  router.push('/admin/categories');
};

onMounted(() => {
  // Initialiser particles.js
  if (window.particlesJS) {
    window.particlesJS('particles-admin-add-category', {
      particles: {
        number: { value: 65, density: { enable: true, value_area: 800 } },
        color: { value: ['#FF8C00', '#FFA500', '#FFD700', '#FF6B6B', '#FF9E80'] },
        shape: { type: ['circle', 'triangle', 'polygon'], polygon: { nb_sides: 6 } },
        opacity: { value: 0.22, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 6, random: true, anim: { enable: true, speed: 2, size_min: 2, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#FF8C00', opacity: 0.25, width: 1.2 },
        move: { enable: true, speed: 2.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 0.3 } } }
      },
      retina_detect: true
    });
  }
  
  // Initialiser AOS
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true
    });
  }
});
</script>

<style scoped>
/* Hero section moins haute */
.admin-hero-section-sm {
  padding-top: 100px;
  padding-bottom: 70px;
  position: relative;
  min-height: 30vh;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.5) 0%, rgba(248, 249, 250, 0.5) 100%);
}

.wave-shape-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  line-height: 0;
  direction: ltr;
}

.wave-shape-bottom svg {
  display: block;
  width: 100%;
  height: 40px;
}

/* Aperçu de l'icône */
.category-icon-preview {
  height: 100px;
  width: 100px;
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.category-icon-preview:hover {
  transform: scale(1.05);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
</style>
