import axios from 'axios'
const postPaiement = async (url,data) => {

    try{    
        console.log('doooooollllnéeees : ',data)
        console.log('dooos : ',url)
        const response = await axios.post(url,data)
        return response;
    }catch(e){
        console.log('erreur bbbbb:',e)
    }
}

export default  postPaiement;