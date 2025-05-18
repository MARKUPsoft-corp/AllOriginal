// Plugin d'optimisation mobile pour résoudre les problèmes de navigation et de chargement
import { useMobile } from '~/composables/useMobile'

export default defineNuxtPlugin((nuxtApp) => {
  // Utiliser notre composable de détection mobile
  const { isMobile } = useMobile()

  // Résoudre le problème d'actualisation sur mobile
  nuxtApp.hook('app:mounted', () => {
    if (!isMobile.value) return // Optimisation uniquement pour mobile
    
    // Forcer une actualisation complète des données après le chargement de la page
    setTimeout(() => {
      // Marquer que la page a été entièrement chargée
      window.__MOBILE_PAGE_LOADED = true
    }, 200)
  })
  
  // Améliorer la navigation entre les pages sur mobile
  nuxtApp.hook('page:finish', () => {
    if (!isMobile.value || !window.__MOBILE_PAGE_LOADED) return
    
    // Forcer un re-rendu des composants clés
    setTimeout(() => {
      // Chercher et actualiser les éléments qui pourraient ne pas s'afficher correctement
      const productContainers = document.querySelectorAll('.row-cols-1')
      if (productContainers.length > 0) {
        productContainers.forEach(container => {
          // Forcer un recalcul du DOM
          const display = container.style.display
          container.style.display = 'none'
          setTimeout(() => {
            container.style.display = display || ''
          }, 10)
        })
      }
    }, 100)
  })

  // Améliorer le temps de réponse tactile sur mobile
  if (typeof document !== 'undefined' && isMobile.value) {
    document.documentElement.style.setProperty('touch-action', 'manipulation')
    
    // Optimiser la réactivité des éléments interactifs
    const style = document.createElement('style')
    style.innerHTML = `
      @media (max-width: 767px) {
        a, button, .btn, [role="button"] {
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          user-select: none;
        }
        img, a {
          -webkit-user-drag: none;
        }
      }
    `
    document.head.appendChild(style)
  }
})
