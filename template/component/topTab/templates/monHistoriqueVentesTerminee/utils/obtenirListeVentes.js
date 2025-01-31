import axios from 'axios';
import urls from '../../../../../Constants/urls';

const url = `${urls.prod}/historiqueVenteUtilisateurTerminee`

const obtenirListeVentes = async (mEmail) => {
  console.log('monn uuurll :',url)
  try {
    console.log('monn uuurll ttt:',url)
    const response = await axios.post(url,{email:mEmail});
    console.log('jjj tr',response.data)
    return response.data;
  } catch (error) {
    console.log("erreur ggg",error);
  }
}

export default obtenirListeVentes