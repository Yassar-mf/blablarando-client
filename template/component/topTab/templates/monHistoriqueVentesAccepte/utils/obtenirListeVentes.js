import axios from 'axios';
import urls from '../../../../../Constants/urls';

const url = `${urls.prod}/historiqueVenteUtilisateurAcceptee`

const obtenirListeVentes = async (mEmail) => {
  console.log('monn uuurll :',url)
  try {
    console.log('monn uuurll ttt:',url)
    const response = await axios.post(url,{email:mEmail});
    console.log('jjj a',response.data)
    return response.data;
  } catch (error) {
    console.log("erreur ggg",error);
  }
}

export default obtenirListeVentes