
import {StyleSheet, Dimensions} from 'react-native'
import Couleurs from '../../Constants/Couleurs'
import D from '../../Constants/Dimensions'
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: WIDTH*0.03,
  },
  pickedDateContainer: {
    padding: WIDTH*0.02,
    backgroundColor: '#eee',
    borderRadius: WIDTH*0.01,
  },
  pickedDate: {
    fontSize: WIDTH*0.04,
    color: 'black',
  },
  btnContainer: {
    padding: WIDTH*0.03,
  },

  btnItem:{
    paddingVertical:HEIGHT * 0.02,
    paddingHorizontal:WIDTH * 0.02,
    backgroundColor: Couleurs.primaryColor_three,
    borderRadius:D.borderRadius
  },

  // This only works on iOS
  datePicker: {
    width: WIDTH*0.32,
    height: WIDTH*0.26,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default styles;