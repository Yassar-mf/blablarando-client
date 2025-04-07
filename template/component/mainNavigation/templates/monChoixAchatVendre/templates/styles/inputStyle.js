import Couleurs from '../../Constants/Couleurs'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const monInputStyle = {

  width:width*0.95,
  paddingVerticale:height*0.01,
  paddingHorizontal:width*0.01,
  backgroundColor: Couleurs.neutralColor_two
}

export default monInputStyle;