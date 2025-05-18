export default defineNuxtPlugin((nuxtApp) => {
  // Détection des appareils mobiles
  const isMobile = () => {
    if (typeof window === 'undefined') return false
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
  }
  
  // Load particles.js from CDN to avoid bundling issues
  nuxtApp.hook('app:mounted', () => {
    // Vérifier si c'est un appareil mobile
    const mobile = isMobile()
    
    // Si c'est un appareil mobile, supprimer complètement les conteneurs de particules
    if (mobile) {
      document.querySelectorAll('.particles-container').forEach(container => {
        container.style.display = 'none'
      })
      return // Ne pas charger particles.js sur mobile
    }
    
    // Continuer avec le chargement de particles.js uniquement sur desktop
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    
    script.onload = () => {
      if (window.particlesJS) {
        // Initialize particles on all elements with class particles-js
        document.querySelectorAll('.particles-container').forEach(container => {
          window.particlesJS(container.id, {
            particles: {
              number: { value: 30, density: { enable: true, value_area: 800 } }, // Réduit le nombre de particules
              color: { value: '#ff8c00' },
              shape: {
                type: ['circle'],  // Simplifie en utilisant seulement des cercles
                stroke: { width: 0, color: '#000000' }
              },
              opacity: {
                value: 0.2,
                random: true,
                anim: { enable: false } // Désactive l'animation d'opacité
              },
              size: {
                value: 3,  // Réduit la taille
                random: true,
                anim: { enable: false } // Désactive l'animation de taille
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ff8c00',
                opacity: 0.2,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: false, mode: 'push' },
                resize: true
              },
              modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } }
              }
            },
            retina_detect: true
          })
        })
      }
    }
    
    document.head.appendChild(script)
  })
}) 