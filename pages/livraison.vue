<template>
  <div class="container py-5 my-5">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-4 text-gradient">Informations de Livraison</h1>
        
        <div class="card shadow-sm rounded-4 p-4 mb-5">
          <h3 class="mb-3 fs-4">Nos services de livraison</h3>
          <p class="lead">
            Chez All Original, nous vous proposons une livraison rapide et sécurisée partout au Cameroun.
          </p>
        </div>
        
        <div class="row mb-5">
          <div class="col-md-4 mb-4" data-aos="fade-up">
            <div class="card h-100 border-0 rounded-4 shadow-sm p-4">
              <div class="card-body text-center">
                <div class="icon-box mb-3">
                  <i class="bi bi-truck text-orange fs-1"></i>
                </div>
                <h4 class="card-title fs-5 mb-3">Livraison Standard</h4>
                <p class="card-text">
                  Livraison en 2-3 jours ouvrables dans toutes les grandes villes du Cameroun.
                </p>
                <p class="fw-bold mb-0">2 000 FCFA</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100 border-0 rounded-4 shadow-sm p-4">
              <div class="card-body text-center">
                <div class="icon-box mb-3">
                  <i class="bi bi-lightning-charge text-orange fs-1"></i>
                </div>
                <h4 class="card-title fs-5 mb-3">Livraison Express</h4>
                <p class="card-text">
                  Livraison le jour même ou le lendemain à Douala et Yaoundé.
                </p>
                <p class="fw-bold mb-0">5 000 FCFA</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card h-100 border-0 rounded-4 shadow-sm p-4">
              <div class="card-body text-center">
                <div class="icon-box mb-3">
                  <i class="bi bi-shop text-orange fs-1"></i>
                </div>
                <h4 class="card-title fs-5 mb-3">Retrait en Boutique</h4>
                <p class="card-text">
                  Récupérez votre commande directement dans notre boutique à Bonanjo, Douala.
                </p>
                <p class="fw-bold mb-0">Gratuit</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card shadow-sm rounded-4 p-4 mb-5">
          <h3 class="mb-4 fs-4">Zones de livraison</h3>
          
          <div class="table-responsive">
            <table class="table table-hover">
              <thead class="table-light">
                <tr>
                  <th scope="col">Zone</th>
                  <th scope="col">Villes</th>
                  <th scope="col">Délai standard</th>
                  <th scope="col">Délai express</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Zone 1</td>
                  <td>Douala, Yaoundé</td>
                  <td>1-2 jours</td>
                  <td>Même jour / J+1</td>
                </tr>
                <tr>
                  <td>Zone 2</td>
                  <td>Bafoussam, Limbé, Kribi, Buea</td>
                  <td>2-3 jours</td>
                  <td>J+1</td>
                </tr>
                <tr>
                  <td>Zone 3</td>
                  <td>Autres villes</td>
                  <td>3-5 jours</td>
                  <td>Non disponible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="card shadow-sm rounded-4 p-4 mb-5">
          <h3 class="mb-4 fs-4">Suivi de commande</h3>
          <p>
            Une fois votre commande expédiée, vous recevrez un email contenant un numéro de suivi. 
            Vous pourrez suivre votre colis en temps réel via notre partenaire de livraison.
          </p>
          
          <div class="alert alert-info rounded-3">
            <i class="bi bi-info-circle-fill me-2"></i>
            Pour toute question concernant votre livraison, contactez notre service client au 
            <strong>+237 6xx xx xx xx</strong> ou par email à <strong>livraison@alloriginal.cm</strong>
          </div>
        </div>
        
        <div class="card shadow-sm rounded-4 p-4">
          <h3 class="mb-4 fs-4">Politique de retour</h3>
          <p>
            Si vous n'êtes pas satisfait de votre achat, vous pouvez retourner les produits dans leur emballage d'origine 
            dans un délai de 14 jours à compter de la réception de votre commande.
          </p>
          <p>
            Les frais de retour sont à la charge du client, sauf en cas de produit défectueux ou d'erreur de notre part.
          </p>
          <p class="mb-0">
            Pour plus d'informations, consultez notre <a href="#" class="text-decoration-none text-orange">politique de retour complète</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Informations de Livraison | All Original',
  meta: [
    { name: 'description', content: 'Tout savoir sur nos options de livraison, délais et tarifs pour vos achats sur All Original, votre boutique high-tech premium au Cameroun.' }
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

.text-orange {
  color: #ff8c00;
}

.icon-box {
  height: 80px;
  width: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 140, 0, 0.1);
}
</style>
