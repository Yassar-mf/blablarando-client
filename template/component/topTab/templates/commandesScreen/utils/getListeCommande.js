import axios from 'axios'

const url = "https://kilo-kello-4d8ce17ec2a1.herokuapp.com/listeAchat"

const getListeCommande = async () => {
    try {
      const response = await axios.get(url);
      const responseData = response.data.liste;
      console.log('liste achat get:', responseData);
      return responseData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  

 

export default getListeCommande