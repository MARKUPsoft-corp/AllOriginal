import { defineEventHandler } from 'h3'
import { SitemapStream, streamToPromise } from 'sitemap'
import { useRuntimeConfig } from '#imports'
import { createGzip } from 'zlib'

export default defineEventHandler(async (event) => {
  // Récupérer la configuration
  const config = useRuntimeConfig()
  const hostname = 'https://alloriginal-shop.com'
  
  // Créer le stream pour le sitemap
  const sitemap = new SitemapStream({ hostname })
  const gzipper = createGzip()
  
  try {
    // Routes statiques principales
    // Note: La page /debug a été supprimée et est exclue du sitemap
    sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })
    sitemap.write({ url: '/catalogue', changefreq: 'daily', priority: 0.9 })
    sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 })
    sitemap.write({ url: '/a-propos', changefreq: 'monthly', priority: 0.7 })
    sitemap.write({ url: '/livraison', changefreq: 'monthly', priority: 0.7 })
    sitemap.write({ url: '/conditions-generales', changefreq: 'monthly', priority: 0.6 })
    sitemap.write({ url: '/politique-confidentialite', changefreq: 'monthly', priority: 0.6 })
    
    const apiBaseUrl = config.public.apiBaseUrl || 'https://alloriginal-backend.onrender.com/api'
    let categories = []
    
    // Récupérer les données de l'API - Catégories
    try {
      const categoriesRes = await fetch(`${apiBaseUrl}/categories/`)
      
      if (categoriesRes.ok) {
        categories = await categoriesRes.json()
        
        // Ajouter les routes de catégories
        for (const category of categories) {
          sitemap.write({ 
            url: `/catalogue?category=${category.slug}`, 
            changefreq: 'weekly', 
            priority: 0.8 
          })
        }
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error)
    }
    
    // Récupérer les données de l'API - Produits
    try {
      const productsRes = await fetch(`${apiBaseUrl}/products/`)
      
      if (productsRes.ok) {
        const products = await productsRes.json()
        
        // Récupérer les marques uniques
        const brands = [...new Set(products.map((product: any) => product.brand))]
        
        // Ajouter les routes de produits
        for (const product of products) {
          sitemap.write({ 
            url: `/produit/${product.slug}`, 
            changefreq: 'monthly', 
            priority: 0.7,
            lastmod: product.updated_at || new Date().toISOString()
          })
        }
        
        // Ajouter les routes de marques
        for (const brand of brands) {
          if (brand) {
            const brandSlug = brand.toString().toLowerCase().replace(/\s+/g, '-')
            sitemap.write({
              url: `/catalogue?brand=${brandSlug}`,
              changefreq: 'weekly',
              priority: 0.7
            })
          }
        }
        
        // Ajouter les combinaisons catégorie/marque
        try {
          if (categories && categories.length > 0) {
            for (const category of categories) {
              for (const brand of brands) {
                if (brand) {
                  const brandSlug = brand.toString().toLowerCase().replace(/\s+/g, '-')
                  sitemap.write({
                    url: `/catalogue?category=${category.slug}&brand=${brandSlug}`,
                    changefreq: 'weekly',
                    priority: 0.6
                  })
                }
              }
            }
          }
        } catch (error) {
          console.error('Erreur lors de la génération des combinaisons catégorie/marque:', error)
        }
        
        // Ajouter les filtres de prix
        const priceRanges = [
          { min: 0, max: 100000 },
          { min: 100000, max: 300000 },
          { min: 300000, max: 500000 },
          { min: 500000, max: 1000000 },
          { min: 1000000, max: null }
        ]
        
        for (const range of priceRanges) {
          let url = `/catalogue?price_min=${range.min}`
          if (range.max) url += `&price_max=${range.max}`
          
          sitemap.write({
            url,
            changefreq: 'weekly',
            priority: 0.5
          })
        }
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des produits:', error)
    }
    
    // Finaliser le sitemap
    sitemap.end()
    
    // Définir les en-têtes de réponse
    event.node.res.setHeader('Content-Type', 'application/xml')
    event.node.res.setHeader('Content-Encoding', 'gzip')
    
    // Retourner le sitemap
    return streamToPromise(sitemap.pipe(gzipper))
  } catch (error) {
    console.error('Erreur lors de la génération du sitemap:', error)
    
    // En cas d'erreur, retourner un sitemap minimal
    event.node.res.setHeader('Content-Type', 'application/xml')
    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${hostname}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
      </urlset>`
  }
}) 