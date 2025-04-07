import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const mDimensions = {
  itemWidth: width*0.9,
  itemHeight: height*0.45,
<<<<<<< HEAD
  borderRadius:7
=======
  borderRadius:width*0.015
>>>>>>> 3da4c8d (repush)
}
export default mDimensions