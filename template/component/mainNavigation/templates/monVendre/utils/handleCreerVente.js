import axios from 'axios'
import urls from '../../../../../Constants/urls'

const bUrl = urls.prod

const url = `${bUrl}creerVente`
console.log('yyyyyyy url :',url)
const handleCreerVente = async (navigation,data) =>{
    const date = new Date(data.dateDeDepart);
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    console.log(localDate.toISOString()); // Corrige le décalage horaire
    const newData = {
        ...data,
        dateDeDepart: localDate.toISOString(),
    }
    console.log('vendreeeeeeeeeeeeee',newData)
    const response = await axios.post(url,{data})
    //navigation.navigate('Vente cree',{data})
}

export default handleCreerVente;
// 2025-01-22T19:40:00.000Z