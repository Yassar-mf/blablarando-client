import axios from 'axios'

const postPaiement = async (url,data) => {
    console.log('doooooollllnéeees : ',data)
    try{
        const response = await axios.post(url,data)
        return response;
    }catch(e){
        console.log('erreur :',e)
    }
}

export default  postPaiement;