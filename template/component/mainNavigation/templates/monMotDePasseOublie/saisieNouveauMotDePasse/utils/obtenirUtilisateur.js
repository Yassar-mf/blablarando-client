import axios from 'axios'
  // URL backend en dur
  

const obtenirUtilisateur = async (token,setUtilisateur) => {

    const backendUrl = `
https://blablarando.replit.app/motdepasseoublie/reset/${token}`; // 
    try {
      console.log(`Fetching utilisateur data from ${backendUrl}`);
      
      const response = await axios.get(backendUrl);

      if (response.data.utilisateur) {
        setUtilisateur(response.data.utilisateur); // Stocke les données utilisateur
      } else {
        Alert.alert("Erreur", "Token invalide ou expiré");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur :", error);
      Alert.alert("Erreur", "Impossible de récupérer les informations de l'utilisateur");
    }
  };

export default obtenirUtilisateur