import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const mDimensions = {
  itemWidth: width*0.9,
  itemHeight: height*0.45,
  borderRadius:7
}
export default mDimensions