import { StyleSheet, Dimensions } from 'react-native';
import Couleurs from '../../../../../../Constants/Couleurs'
import Dim from '../../../../../../Constants/Dimensions'
const {width: W, height: H} = Dimensions.get('window');
import TxtVide from './txtVide';
const styles = StyleSheet.create({

  container: {
    flex: 1,

    padding: 10,
  },
  payerButton: {
    backgroundColor: Couleurs.primaryColor_one,
    padding: 10,
    marginVertical: 10,
    borderRadius: Dim.borderRadius-3,
    padding: W * 0.01,
  },
  payerButton: {
    backgroundColor: Couleurs.primaryColor_one,
    padding: W * 0.01,
    marginVertical: W * 0.015,
    borderRadius: Dim.borderRadius-W * 0.008,

  },
  payerButtonText: {
    color: Couleurs.neutralColor_one,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  details:{

  },
  photo:{

  },
  input: {
    height: H * 0.09,
    margin: H * 0.012,
    borderWidth: 1,
    borderColor: 1,
    borderRadius: Dim.borderRadius,
    paddingTop: W * 0.03,
    backgroundColor: Couleurs.neutralColor_one,
  },
  TxtVideStyle:{
    fontSize: W*0.035,
    color: Couleurs.alertColor,
    marginLeft: H * 0.012,
    marginBottom: H * 0.012,
  }

});

export default styles;