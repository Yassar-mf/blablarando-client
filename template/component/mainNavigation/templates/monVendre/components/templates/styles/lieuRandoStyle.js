import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window')
import Couleurs from '../../../Constants/Couleurs'
const lieuRandoStyle = {
  height: height*0.4,
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  paddingVertical:height*0.03,
  backgroundColor:Couleurs.neutralColor_two,
  borderRadius:height*0.01,
  marginBottom:height*0.03,
}
export default lieuRandoStyle;