import { StyleSheet } from "react-native";
import Couleurs from '../../../../../../Constants/Couleurs'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: Couleurs.neutralColor_one,
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
  });

  export default styles