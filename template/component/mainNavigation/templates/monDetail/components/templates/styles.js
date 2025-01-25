import { StyleSheet } from 'react-native';
import Couleurs from '../../../../../../Constants/Couleurs'
import Dim from '../../../../../../Constants/Dimensions'
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
    height: 60,
    margin: 12,
    borderWidth: 1,
    borderColor: 1,
    borderRadius: Dim.borderRadius,
    padding: 10,
    backgroundColor: Couleurs.neutralColor_one,
  },
});

export default styles;