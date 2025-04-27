export default defineNuxtPlugin((nuxtApp) => {
  // Load particles.js from CDN to avoid bundling issues
  nuxtApp.hook('app:mounted', () => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    
    script.onload = () => {
      if (window.particlesJS) {
        // Initialize particles on all elements with class particles-js
        document.querySelectorAll('.particles-container').forEach(container => {
          window.particlesJS(container.id, {
            particles: {
              number: { value: 50, density: { enable: true, value_area: 800 } },
              color: { value: '#ff8c00' },
              shape: {
                type: ['circle', 'triangle', 'polygon'],
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 6 }
              },
              opacity: {
                value: 0.2,
                random: true,
                anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
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