function calculerPrixTotal(nombreProduits) {
    const prixEnGros = 15; // Prix pour 2 produits
    const prixUnitaire = 10; // Prix d'un produit additionnel
    const paireProduits = Math.floor(nombreProduits / 2); // Nombre de paires (chaque paire = 2 produits)
    const produitsRestants = nombreProduits % 2; // Produits restants après les paires
    
    const total = paireProduits * prixEnGros + produitsRestants * prixUnitaire;
    return total;
  }
  
export default calculerPrixTotal;