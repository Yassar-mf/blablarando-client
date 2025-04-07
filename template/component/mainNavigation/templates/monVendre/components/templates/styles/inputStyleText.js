import {Dimensions} from 'react-native'
const {width:vW,height:vH} = Dimensions.get('window')
const style = {
  fontSize: vH*0.02,
  paddingHorizontal: vW*0.05,
}
export default style;