import {Alert } from 'react-native';
import axios from 'axios'
//const url = "http://localhost:8085/motdepasseoublie"
const url = "https://blablarando.replit.app/motdepasseoublie"
//const url = "https://258b4c97-31fc-45d4-8f21-4f325e9a00a6-00-b062oot7ub0r.janeway.repl.co/motdepasseoublie"

const handleForgotPassword = async (email, navigation) => {
    
    if (!email) {
      Alert.alert('Erreur', 'Veuillez entrer un adresse e-mail valide');
      return;
    }

    try {

      Alert.alert('Succès', 'Un lien de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.');
      const response = await axios.post(url, { email })
      const token = response.data.token;

      navigation.navigate("SaisieNouveauMotDePasse",{token})
      
      
      
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur est survenue. Veuillez réessayer.');
    }
  };

  export default handleForgotPassword