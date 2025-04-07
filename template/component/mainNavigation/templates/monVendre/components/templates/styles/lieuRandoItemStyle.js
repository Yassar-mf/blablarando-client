import { Dimensions } from 'react-native';
import Couleurs from '../../../Constants/Couleurs'
const { width, height } = Dimensions.get('window');
const style = {
  backgroundColor:Couleurs.secondaryColor_two,
  width: width*0.9,
  padding: width*0.01,
  paddingVertical: width*0.2,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: height*0.01,
  borderRadius:height*0.01,
}
export default style;