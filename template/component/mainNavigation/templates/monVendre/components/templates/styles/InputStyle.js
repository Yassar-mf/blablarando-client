<<<<<<< HEAD
const monInputStyle = {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
=======
import {StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')
const monInputStyle = {
  height: width*0.1,
  margin: width*0.04,
  borderWidth: 1,
  padding: width*0.02,
>>>>>>> 3da4c8d (repush)
} 

export default monInputStyle;