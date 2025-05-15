// Importing animation libraries
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    // Delay AOS initialization to avoid hydration issues
    setTimeout(() => {
      // Initialize AOS only after hydration is complete
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true, // Changed to true to prevent re-animation
        mirror: false, // Disabled mirroring to reduce complexity
        offset: 50,
        disable: 'mobile' // Disable on mobile for better performance
      })
    }, 200) // Delay of 200ms to ensure complete hydration

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