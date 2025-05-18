// Importing animation libraries
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  // Détecter si l'appareil est un mobile
  const isMobile = () => {
    if (typeof window === 'undefined') return false
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
  }
  
  nuxtApp.hook('app:mounted', () => {
    // Utiliser une configuration simplifiée sur mobile
    const mobile = isMobile()
    
    // Initialiser AOS avec des paramètres adaptés selon l'appareil
    setTimeout(() => {
      AOS.init({
        duration: mobile ? 400 : 800,
        easing: 'ease-out',
        once: true,
        mirror: false,
        offset: mobile ? 20 : 50,
        disable: mobile // Désactiver complètement sur mobile pour de meilleures performances
      })
    }, mobile ? 100 : 200) // Réduire le délai sur mobile

    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    // Parallax effect for hero section
    const heroImage = document.querySelector('.hero-image')
    if (heroImage) {
      gsap.to(heroImage, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
    }

    // Staggered animations for service items
    const serviceItems = document.querySelectorAll('.service-card')
    if (serviceItems.length) {
      gsap.from(serviceItems, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 70%'
        }
      })
    }

    // CTA section reveal animation
    const ctaSection = document.querySelector('.cta-section')
    if (ctaSection) {
      gsap.from(ctaSection, {
        backgroundPosition: '0% 100%',
        duration: 1.5,
        scrollTrigger: {
          trigger: ctaSection,
          start: 'top 80%'
        }
      })
    }

    // Initialize particles background if element exists
    const particlesContainer = document.getElementById('particles-js')
    if (particlesContainer && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 30, density: { enable: true, value_area: 800 } },
          color: { value: '#ff8c00' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 }
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 1, size_min: 0.1, sync: false }
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
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 3 }
          }
        },
        retina_detect: true
      })
    }
  })

  // Return animation controls for component use
  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
}) 