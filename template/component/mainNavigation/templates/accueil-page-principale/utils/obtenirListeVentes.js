import axios from 'axios'
import Urls from '../../../../../Constants/urls'
//const url = "http://localhost:8083/listeVente"
const mUrl = Urls.prod
const url = `${mUrl}/listeVente`

const obtenirListeVentes = async () => { 

    console.log('le uuuyyyuuurl :',url)
    
    try{
        const response = await axios.get(url)
        console.log('erfsqe :',response.data.liste.length)

        const liste = response.data.liste

        return liste;
    }catch(e){
        console.log('erreur nnnn:',e)
        return []
    }

}


export default obtenirListeVentes