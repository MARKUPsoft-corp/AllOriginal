# All Original - Boutique E-commerce

Un site e-commerce pour la boutique All Original, spécialisée dans la vente de produits high-tech au Cameroun.

## Fonctionnalités

- 🏠 Page d'accueil avec slider, catégories et produits populaires
- 📱 Catalogue de produits avec filtres par catégorie, marque, prix et disponibilité
- 🔍 Détail des produits avec gallerie, description et bouton de commande WhatsApp
- 📝 Formulaire de contact
- 📱 Design responsive "mobile-first"
- 🔍 SEO optimisé (métadonnées, OpenGraph, etc.)

## Technologies utilisées

- **Frontend** : [Nuxt 3](https://nuxt.com) (Vue.js, SSR)
- **Styles** : CSS / SCSS
- **Backend prévu** : Django + PostgreSQL

## Structure du projet

```
all-original/
├── assets/            # Ressources statiques (CSS, images)
├── components/        # Composants Vue réutilisables
├── composables/       # Fonctions et logique réutilisables
├── layouts/           # Layouts de l'application
├── pages/             # Pages de l'application (routage automatique)
├── public/            # Fichiers statiques et données JSON temporaires
└── stores/            # État global de l'application (Pinia)
```

## Scripts NPM

```bash
# Installation des dépendances
npm install

# Démarrer le serveur de développement (http://localhost:3000)
npm run dev

# Construire pour la production
npm run build

# Prévisualiser l'application en mode production
npm run preview

# Lancer les tests
npm run test
```

## Déploiement

### Déploiement sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Reliez votre dépôt GitHub
3. Importez le projet
4. Définissez `nuxt build` comme commande de build
5. Déployez

### Déploiement sur Netlify

1. Créez un compte sur [Netlify](https://netlify.com)
2. Reliez votre dépôt GitHub
3. Importez le projet
4. Définissez `npm run build` comme commande de build et `.output/public` comme dossier de publication
5. Déployez

## Phase 2 : Migration vers l'API Django

Pour migrer vers une API Django en backend :

1. Créez un projet Django avec Django REST Framework
2. Implémentez les modèles Django pour les produits, catégories, etc.
3. Créez des endpoints API RESTful
4. Remplacez les appels aux fichiers JSON dans le frontend par des appels à l'API
5. Configurez CORS pour permettre au frontend de communiquer avec l'API

Les fichiers JSON actuels serviront de structure pour les modèles Django :

- `categories.json` → modèle Category
- `products.json` → modèle Product

## Licence

Tous droits réservés.
