import axios from 'axios';
import handleLinking from './handleLinking';
const handlePress = async (commande) => {
  

  const response = await axios.post(`https://blablarando.replit.app/paiement/${commande.acheteur}`,commande)
  const url = response.data.sessionUrl;
  handleLinking(url);
}

export default handlePress;
