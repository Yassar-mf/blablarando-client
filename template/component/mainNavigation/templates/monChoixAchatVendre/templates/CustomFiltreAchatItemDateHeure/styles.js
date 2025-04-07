<<<<<<< HEAD
import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
=======
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
>>>>>>> 3da4c8d (repush)
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default styles;