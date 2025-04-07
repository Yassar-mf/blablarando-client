import {StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')
import Couleurs from '../../../Constants/Couleurs'
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: width * 0.06,
  },
  pickedDateContainer: {
    padding: width * 0.06,
    backgroundColor: '#eee',
    borderRadius: width*0.05,

  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {

    padding: width * 0.07,
  },
  // This only works on iOS
  datePicker: {
    width: width * 0.8,
    height: height * 0.2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default styles;