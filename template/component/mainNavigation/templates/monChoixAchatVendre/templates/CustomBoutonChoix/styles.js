import Couleurs from '../../Constants/Couleurs'
import { StyleSheet, Dimensions } from 'react-native';
import D from '../../Constants/Dimensions'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  containerBoutonChoix: {
    position:"absolute",
    top: height*0.45,
    left: width*0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparant',

  },
  box: {
    width: width*0.45,
    height: D.btH,
    marginVertical:D.mV,
    zIndex:2
  },
  prs:{
    width:"auto",
    height:"100%",
    backgroundColor:Couleurs.primaryColor_two,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:D.brBtn,
  },
  txt:{
    alignSelf: "center",
    color:Couleurs.neutralColor_one
  }
});

export default styles