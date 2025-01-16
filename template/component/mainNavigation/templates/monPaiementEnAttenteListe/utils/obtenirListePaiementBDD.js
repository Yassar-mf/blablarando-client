import axios from 'axios'
const url = 'https://blablarando.replit.app'
const obtenirListePaiement = async (id) => {

  const response = await axios.get(`${url}/paiementListe/${id}`)
  console.log('response:',response.data)
  const liste = response.data.listePaiement
  return liste
}

export default obtenirListePaiement