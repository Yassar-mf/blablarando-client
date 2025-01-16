import Couleurs from '../../../Constants/Couleurs'
import LesFontsSize from '../../../Constants/FontsSize'
import LesFontFamily from '../../../Constants/mesFontFAmily'
import {Dimensions} from 'react-native'

const vpWidth = Dimensions.get('window').width;
const vpHeight = Dimensions.get('window').height

const leHistoriqueItemContainer = {
   width:'100%',
   backgroundColor:Couleurs.secondaryColor_three,
   borderRadius:10
}

export default leHistoriqueItemContainer;
