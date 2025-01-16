import Couleurs from '../../../Constants/Couleurs'
import LesFontsSize from '../../../Constants/FontsSize'
import LesFontFamily from '../../../Constants/mesFontFAmily'
import {Dimensions} from 'react-native'

const vpWidth = Dimensions.get('window').width;
const vpHeight = Dimensions.get('window').height

const leHistoriqueItemContainer = {
   width: 200,
   height: 180,
   marginVertical: 10,
   backgroundColor:Couleurs.secondaryColor_two,
   marginHorizontal:10,
   paddingVertical:15,
   paddingHorizontal:10,
   borderRadius:15

}

export default leHistoriqueItemContainer;
