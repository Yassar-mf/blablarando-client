const url = "https://blablarando.replit.app/obtenirListeRando"
import axios from 'axios'
const obtenirLieuxRando = async () => {
  try{
    const response = await axios.get(url)
    const lieux = response.data.data
    return lieux;
  }catch(error){
    console.log('error arttente : ',error)
  }
}

export default obtenirLieuxRando;