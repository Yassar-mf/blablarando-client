import axios from 'axios'
const url = 'https://blablarando.replit.app/creerVente'
const handleCreerVente = async (navigation,data) =>{
    console.log('vendreeeeeeeeeeeeee',data)
    const response = await axios.post(url,{data})
    navigation.navigate('Vente cree',{data})
}

export default handleCreerVente;