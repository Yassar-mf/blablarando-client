import donnees from './obtenirListeVentes'
const handleAfficherListeVente = (    setShowMessageVide,setListeVente) => {
  setShowMessageVide(false)
  const liste = donnees()
  setListeVente(liste)
  console.log('handleAfficherListeVente youhou')
}

export default handleAfficherListeVente