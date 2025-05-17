FROM node:18-alpine

# Créer le répertoire de l'application
WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./
COPY nuxt.config.ts ./

# Installer les dépendances
RUN npm ci

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port utilisé par l'application
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["node", ".output/server/index.mjs"]
