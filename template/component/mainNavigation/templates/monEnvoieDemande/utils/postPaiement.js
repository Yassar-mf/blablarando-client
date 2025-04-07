import axios from 'axios'

import Urls from '../../../../../Constants/urls'
const mUrl = Urls.prod
const mmurl = `${mUrl}/creerAchat`


const postPaiement = async (url,data) => {

    try{    
        console.log('doooooollllnéeees : ',data)
        console.log('dooos : ',url)

        const response = await axios.post(mmurl,data)
        return response;
    }catch(e){
        console.log('erreur bbbbb:',e)
    }
}

export default  postPaiement;