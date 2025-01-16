import Couleurs from '../../../Constants/Couleurs'
import LesFontsSize from '../../../Constants/FontsSize'
import LesFontFamily from '../../../Constants/mesFontFAmily'
import {Dimensions} from 'react-native'
const viewportWidth = Dimensions.get('window').width
const viewportHeight = Dimensions.get('window').height
const leHeaderContainerStyle = {
  width:viewportWidth,
  height: viewportHeight*0.09,
  backgroundColor:Couleurs.primaryColor_one,
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:'2%',
  paddingTop:15
}


export default leHeaderContainerStyle;