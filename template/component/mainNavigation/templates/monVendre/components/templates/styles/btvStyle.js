import { Dimensions } from 'react-native';
import Couleurs from '../../../Constants/Couleurs'
const { width, height } = Dimensions.get('window');

const styles = {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Couleurs.primaryColor_one,
    paddingVertical: height * 0.02,  // 2% de la hauteur de l'écran
    paddingHorizontal: width * 0.05, // 5% de la largeur de l'écran
    marginBottom: height * 0.02,  // 2% de la hauteur de l'écran
};

export default styles;
