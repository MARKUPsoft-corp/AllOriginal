<template>
  <div class="container py-5 my-5">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-4 text-gradient">Mentions Légales</h1>
        
        <div class="card shadow-sm rounded-4 p-4 mb-4">
          <h3 class="mb-3 fs-5">Informations légales</h3>
          <p>
            <strong>All Original</strong><br>
            SARL au capital de 5 000 000 FCFA<br>
            RCS Douala: 12345678<br>
            Siège social: Bonanjo, Douala, Cameroun<br>
            TVA: CM123456789
          </p>
        </div>
        
        <div class="card shadow-sm rounded-4 p-4 mb-4">
          <h3 class="mb-3 fs-5">Directeur de la publication</h3>
          <p>
            M. Emmanuel Yakam<br>
            E-mail: contact@alloriginal.cm<br>
            Téléphone: +237 6xx xx xx xx
          </p>
        </div>
        
        <div class="card shadow-sm rounded-4 p-4 mb-4">
          <h3 class="mb-3 fs-5">Hébergement</h3>
          <p>
            Ce site est hébergé par: AWS (Amazon Web Services)<br>
            Adresse: 38 Avenue John F. Kennedy, L-1855 Luxembourg
          </p>
        </div>
        
        <div class="card shadow-sm rounded-4 p-4 mb-4">
          <h3 class="mb-3 fs-5">Propriété intellectuelle</h3>
          <p>
            L'ensemble du contenu du site (images, textes, vidéos, etc.) est protégé par les lois relatives 
            à la propriété intellectuelle. Toute reproduction totale ou partielle du contenu est strictement 
            interdite sans autorisation préalable.
          </p>
        </div>
        
        <div class="card shadow-sm rounded-4 p-4 mb-4">
          <h3 class="mb-3 fs-5">Protection des données personnelles</h3>
          <p>
            Conformément à la réglementation applicable en matière de protection des données personnelles, 
            vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. 
            Pour exercer ces droits, veuillez nous contacter à l'adresse email: privacy@alloriginal.cm
          </p>
        </div>
        
        <div class="card shadow-sm rounded-4 p-4">
          <h3 class="mb-3 fs-5">Cookies</h3>
          <p>
            Ce site utilise des cookies pour améliorer l'expérience utilisateur, réaliser des statistiques 
            d'audience et proposer des contenus adaptés. En naviguant sur ce site, vous acceptez l'utilisation 
            de cookies conformément à notre politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Mentions Légales | All Original',
  meta: [
    { name: 'description', content: 'Mentions légales et informations juridiques concernant All Original, votre boutique high-tech premium au Cameroun.' }
  ]
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #ff8c00, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
</style>
