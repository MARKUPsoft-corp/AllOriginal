/**
 * Plugin pour résoudre les problèmes spécifiques aux appareils mobiles réels
 * qui ne se produisent pas dans la simulation mobile d'un navigateur desktop
 */
import { useMobile } from '~/composables/useMobile'

export default defineNuxtPlugin((nuxtApp) => {
  // Utiliser notre composable de détection mobile
  const { isMobile } = useMobile()
  
  if (typeof window === 'undefined') return // Exécuter uniquement côté client
  
  // Corriger les problèmes de caches agressifs
  const fixMobileCacheIssues = () => {
    // Vérifier si c'est un vrai appareil mobile 
    const isRealMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isRealMobileDevice) {
      // Ajouter un timestamp aux requêtes d'images pour éviter la mise en cache
      const originalFetch = window.fetch
      window.fetch = function(...args) {
        const url = args[0]
        if (typeof url === 'string' && (url.includes('/media/') || url.endsWith('.jpg') || url.endsWith('.png'))) {
          const separator = url.includes('?') ? '&' : '?'
          args[0] = `${url}${separator}nocache=${Date.now()}`
        }
        return originalFetch.apply(this, args)
      }
      
      // Force le recalcul des styles et du DOM après le chargement complet
      window.addEventListener('load', () => {
        setTimeout(() => {
          // Recalculer les styles
          document.body.style.zoom = '0.99'
          setTimeout(() => {
            document.body.style.zoom = '1'
          }, 50)
          
          // Forcer le rechargement des images avec un timestamp
          const images = document.querySelectorAll('img')
          images.forEach(img => {
            if (img.src) {
              const separator = img.src.includes('?') ? '&' : '?'
              img.src = `${img.src}${separator}t=${Date.now()}`
            }
          })
        }, 300)
      })
    }
  }
  
  // Corriger le problème d'affichage des cartes produits
  const fixProductCardDisplay = () => {
    // Ce code s'exécute à chaque montage de page
    nuxtApp.hook('page:finish', () => {
      if (!isMobile.value) return
      
      setTimeout(() => {
        // Forcer le recalcul des cartes produits
        const productCards = document.querySelectorAll('.mobile-product-card, .product-card')
        if (productCards.length > 0) {
          productCards.forEach(card => {
            // Astuce pour forcer le recalcul du rendu
            card.style.opacity = '0.99'
            setTimeout(() => {
              card.style.opacity = '1'
            }, 10)
          })
        }
        
        // Vérifier les images non chargées et appliquer un placeholder
        const images = document.querySelectorAll('img')
        images.forEach(img => {
          if (!img.complete || img.naturalHeight === 0) {
            img.onerror = function() {
              this.style.display = 'none'
              const parent = this.parentNode
              if (parent && !parent.querySelector('.product-placeholder')) {
                const placeholder = document.createElement('div')
                placeholder.className = 'product-placeholder'
                placeholder.style.background = 'linear-gradient(135deg, #ff8c00, #ff5722)'
                placeholder.style.width = '100%'
                placeholder.style.height = '200px'
                placeholder.style.borderRadius = '8px'
                placeholder.style.display = 'flex'
                placeholder.style.alignItems = 'center'
                placeholder.style.justifyContent = 'center'
                placeholder.style.color = 'white'
                placeholder.style.fontSize = '2rem'
                placeholder.innerHTML = img.alt ? img.alt.charAt(0) : 'A'
                parent.appendChild(placeholder)
              }
            }
            // Forcer le rechargement
            img.src = img.src
          }
        })
      }, 200)
    })
  }
  
  // Exécuter nos correctifs
  if (process.client) {
    // Exécuter après le chargement complet
    window.addEventListener('load', () => {
      fixMobileCacheIssues()
      fixProductCardDisplay()
      
      // Forcer une actualisation au premier chargement pour les mobiles
      if (isMobile.value && !window.__MOBILE_FIRST_LOAD_FIXED) {
        window.__MOBILE_FIRST_LOAD_FIXED = true
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    })
  }
})
