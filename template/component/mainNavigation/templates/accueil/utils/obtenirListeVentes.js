import axios from 'axios'

//const url = "http://localhost:8083/listeVente"
//const url = "https://kilo-kello-4d8ce17ec2a1.herokuapp.com/listeVente"
import Urls from '../../../../../Constants/urls'
const mUrl = Urls.prod
const url = `${mUrl}/listeVente`


const obtenirListeVentes = async () => { 

    try{
        const response = await axios.get(url)
        console.log('erfsqe :',response)
        
        const liste = response.data.liste

        return liste;
    }catch(e){
        console.log('erreur nnnn:',e)
        return []
    }


}

export default obtenirListeVentes