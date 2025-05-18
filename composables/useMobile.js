import { ref, onMounted, onUnmounted } from 'vue'

// Variable réactive globale partagée entre toutes les instances
const isMobile = ref(false)
const isMobileInitialized = ref(false)

export function useMobile() {
  // Fonction de détection pour appareils mobiles
  function detectMobile() {
    if (typeof window === 'undefined') return
    isMobile.value = window.innerWidth < 768 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  // Initialisation (une seule fois)
  onMounted(() => {
    if (!isMobileInitialized.value) {
      detectMobile()
      window.addEventListener('resize', detectMobile)
      isMobileInitialized.value = true
    }
  })

  // Nettoyage (uniquement si nous sommes la dernière instance)
  onUnmounted(() => {
    // Pas besoin de supprimer l'écouteur car nous voulons conserver l'état
    // entre les composants
  })

  return {
    isMobile
  }
}
