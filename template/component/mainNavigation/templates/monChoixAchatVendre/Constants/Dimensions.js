import D from '../../../../../Constants/Dimensions'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
const btHeight = height*0.07;
const narginVerticalBtn = height*0.02;
const Dim = {
  ...D,
  xfA:-width*0.27,
  yfA : -height*0.575 + btHeight + narginVerticalBtn*2,
  xfV : width*0.22,
  yfV :-height*0.575,
  btH:btHeight,
  mV:narginVerticalBtn,
  brBtn:width*0.02
}

export default Dim