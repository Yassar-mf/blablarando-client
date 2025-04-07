import axios from 'axios'
<<<<<<< HEAD
=======
import Urls from '../../../../../Constants/urls'
const mUrl = Urls.prod
const mmurl = `${mUrl}/creerAchat`

>>>>>>> 3da4c8d (repush)
const postPaiement = async (url,data) => {

    try{    
        console.log('doooooollllnéeees : ',data)
        console.log('dooos : ',url)
<<<<<<< HEAD
        const response = await axios.post(url,data)
=======
        const response = await axios.post(mmurl,data)
>>>>>>> 3da4c8d (repush)
        return response;
    }catch(e){
        console.log('erreur bbbbb:',e)
    }
}

export default  postPaiement;