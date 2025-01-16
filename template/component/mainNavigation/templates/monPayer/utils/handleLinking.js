import { Linking } from 'react-native';

const handleLinking = async (url) => {
 
    try {
      // Vérifie si le lien peut être ouvert
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        // Ouvre le lien
        await Linking.openURL(url);
      } else {
        Alert.alert(`Impossible d'ouvrir l'URL : ${url}`);
      }
    } catch (error) {
      console.error('Erreur lors de l\'ouverture de l\'URL :', error);
    }

};

export default handleLinking;
