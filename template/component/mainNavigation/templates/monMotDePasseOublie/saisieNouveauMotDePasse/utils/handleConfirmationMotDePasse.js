import {Alert } from 'react-native';
import axios from 'axios'
//const url = "http://localhost:8085/motdepasseoublie/confirmation"
const url = "https://blablarando.replit.app/motdepasseoublie/confirmation"
/*const url = "https://7c0d5591-684e-4d26-ad69-34cae6283f98-00-1gf35ijgexgy9.picard.repl.co/motdepasseoublie/confirmation"*/

const handleConfirmationMotDePasse = async (email,mdp, mdpConfirmation, navigation) => {
  
    if (mdp != mdpConfirmation) {
      Alert.alert('Erreur', 'Les mots de passe sont différents, vérifiez votre saisie');
      return;
    }

    try {
      // Remplacez l'URL par celle de votre API de réinitialisation de mot de passe
      Alert.alert('Succès', 'Votre mot de passe a bien été modifié.');
      const response = await axios.post(url, { email, nouveaumotdepasse: mdp })
      console.log('tui utilisateur mot de passe modifié :',response.data)
      navigation.navigate("Login")
      
      
      
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur est survenue. Veuillez réessayer.');
    }
  };

  export default handleConfirmationMotDePasse