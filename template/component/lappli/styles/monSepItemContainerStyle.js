import Couleurs from '../../../Constants/Couleurs'
import LesFontsSize from '../../../Constants/FontsSize'
import LesFontFamily from '../../../Constants/mesFontFAmily'
import {Dimensions} from 'react-native'

const vpWidth = Dimensions.get('window').width
const leSepItemContainerStyle = {
  width:vpWidth*0.7,
  height:120,
  marginTop:100,
  marginLeft:'3%',
  flexDirection: 'column',
  justifyContent:'flex-start',
  alignItems:'flex-start',
  backgroundColor:Couleurs.primaryColor_two,
  borderRadius:20,
  paddingVertical:15,
  paddingHorizontal:10,
 
}

export default leSepItemContainerStyle