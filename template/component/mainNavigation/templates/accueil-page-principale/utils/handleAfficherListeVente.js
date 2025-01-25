import donnees from './obtenirListeVentes'
const handleAfficherListeVente = (    setShowMessageVide,setListeVente,gListeVente, setShowReloaded) => {
  setShowMessageVide(false)
  const liste = [...gListeVente]
  console.log('liiist eeeeee : ',liste)
  setListeVente(liste)
  setShowReloaded(true)
  console.log('handleAfficherListeVente youhou')
}

export default handleAfficherListeVente