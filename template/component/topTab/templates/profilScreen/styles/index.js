import { StyleSheet } from 'react-native';
import Couleurs from '../../../../../Constants/Couleurs'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Couleurs.neutralColor_one, // neutralColor_one
      padding: 20,
    },
    header: {
      backgroundColor: Couleurs.primaryColor_one , // primaryColor_one
      paddingVertical: 15,
      borderRadius: 10,
      marginBottom: 20,
    },
    headerText: {
      color: Couleurs.textColor, // textColor
      fontSize: 24,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    profileContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    profileName: {
      fontSize: 22,
      fontWeight: 'bold',
      color: Couleurs.textColorB, // textColorB
      marginBottom: 5,
    },
    profileEmail: {
      fontSize: 16,
      color: '#0dc547', // primaryColor_one
    },
    button: {
      backgroundColor: Couleurs.primaryColor_two, // buttonColor
      paddingVertical: 15,
      borderRadius: 10,
      marginTop: 30,
      alignItems: 'center',
    },
    buttonText: {
      color: Couleurs.textColor, // textColor
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles;