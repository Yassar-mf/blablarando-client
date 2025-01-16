import Couleurs from '../../../Constants/Couleurs'
import LesFontsSize from '../../../Constants/FontsSize'
import LesFontFamily from '../../../Constants/mesFontFAmily'
import {Dimensions} from 'react-native'
const vpWidth = Dimensions.get('window').width
const vpHeight = Dimensions.get('window').height
const leListSepContributeurs = {
    position: 'absolute',
    right:vpWidth*0.1,
    top:vpHeight*0.04,
    height: 250,
    backgroundColor: Couleurs.primaryColor_one,
    elevation: 1,
    borderRadius:20,
    paddingVertical:15,
    paddingHorizontal:10,
}

export default leListSepContributeurs;