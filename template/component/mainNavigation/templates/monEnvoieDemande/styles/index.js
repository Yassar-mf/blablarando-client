import { StyleSheet } from "react-native"
import Couleurs from '../../../../../Constants/Couleurs'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
    },
    confirmerButton: {
      backgroundColor: Couleurs.primaryColor_two,
      padding: 10,
      borderRadius: 5,
    },
    confirmerButtonText: {
      color: Couleurs.neutralColor_two,
      fontWeight: 'bold',
    },
  });
  
  export default styles;