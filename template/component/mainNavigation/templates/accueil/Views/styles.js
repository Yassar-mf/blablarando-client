<<<<<<< HEAD
import Couleurs from '../../../../../Constants/Couleurs'
import { StyleSheet } from 'react-native';
import Dim from '../../../../../Constants/Dimensions'
=======
import Couleurs from '../Constants/Couleurs'
import { StyleSheet, Dimensions } from 'react-native';
import Dim from '../Constants/Dimensions'
const {width: screenWidth, height:sH} = Dimensions.get('window');
>>>>>>> 3da4c8d (repush)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Couleurs.neutralColor_one
  },
  item: {
<<<<<<< HEAD
    height: Dim.itemHeight,
    alignItems: 'center',
    backgroundColor: Couleurs.primaryColor_two,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: Dim.borderRadius,
    paddingVertical: 5,
  },
  title: {
    fontSize: 32,
  },
  photo:{
    width:30,
    height:30
  }
=======
    height: sH*0.4, // Dim.itemHeight,
    alignItems: 'center',
    backgroundColor: Couleurs.primaryColor_two,
    marginVertical: screenWidth * 0.16,
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
  
>>>>>>> 3da4c8d (repush)
});

export default styles;