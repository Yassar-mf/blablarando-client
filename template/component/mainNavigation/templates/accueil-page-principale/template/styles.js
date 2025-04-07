<<<<<<< HEAD
import {StyleSheet} from 'react-native'
import Couleurs from '../../../../../Constants/Couleurs'
import D from '../../../../../Constants/Dimensions'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Couleurs.neutralColor_one,
  },
  item: {
    height: D.itemHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Couleurs.primaryColor_two,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 32,
  },
});

export default styles
=======
import Couleurs from '../Constants/Couleurs'
import { StyleSheet, Dimensions } from 'react-native';
import Dim from '../Constants/Dimensions'
const {width: screenWidth, height: H} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Couleurs.neutralColor_one
  },
  item: {
    height: 'auto', // Dim.itemHeight,
    alignItems: 'center',
    backgroundColor: Couleurs.primaryColor_two,
    marginVertical: screenWidth * 0.02,
    marginHorizontal: screenWidth * 0.04,
    borderRadius: Dim.borderRadius,
    paddingTop: screenWidth * 0.02,
  },
  title: {
    fontSize: screenWidth * 0.08,
    fontWeight:"bold",
    textAlign: 'center'
  },
  details:{
    fontSize: screenWidth * 0.036,
    textAlign: 'center'
  },
  photo:{  width: screenWidth * 0.2, 
           height: screenWidth * 0.2,
           borderRadius: screenWidth * 0.1,
           marginRight: screenWidth * 0.05, 
  },
  imgCarousel:{

  },
  txtDescContainer:{
    width: screenWidth * 0.8,
    paddinhgHorizontal: screenWidth * 0.05,
  }
});

export default styles;
>>>>>>> 3da4c8d (repush)
