<<<<<<< HEAD
import {StyleSheet} from 'react-native'
=======
import {StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')
import Couleurs from '../../../Constants/Couleurs'
>>>>>>> 3da4c8d (repush)
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
<<<<<<< HEAD
    padding: 30,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
=======
    padding: width * 0.06,
  },
  pickedDateContainer: {
    padding: width * 0.06,
    backgroundColor: '#eee',
    borderRadius: width*0.05,
>>>>>>> 3da4c8d (repush)
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
<<<<<<< HEAD
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
=======
    padding: width * 0.07,
  },
  // This only works on iOS
  datePicker: {
    width: width * 0.8,
    height: height * 0.2,
>>>>>>> 3da4c8d (repush)
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default styles;