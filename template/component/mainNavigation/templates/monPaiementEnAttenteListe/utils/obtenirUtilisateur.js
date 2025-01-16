import axios from 'axios'
const url = 'https://blablarando.replit.app'
const obtenirUtilisateur = async (email) => {
  console.log('email listea oqf: ',email)
  try{
    const response = await axios.post(`${url}/obtenirUtilisateur`,{email})
    console.log('response:',response.data)
    const utilisateur = response.data.utilisateur;
    return utilisateur;
  }catch(error){
    console.log('error arttente : ',error)
  }
}

export default obtenirUtilisateur