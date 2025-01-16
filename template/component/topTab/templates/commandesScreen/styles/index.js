import { StyleSheet } from 'react-native';
import Couleurs from '../../../../../Constants/Couleurs'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Couleurs.neutralColor_one, // neutralColor_two
    },
    detailImage: {
      width: '100%',
      height: 250,
    },
    contentContainer: {
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: Couleurs.primaryColor_one, // primaryColor_one
      marginBottom: 10,
    },
    subTitle: {
      fontSize: 20,
      color: Couleurs.accentColor, // accentColor
      marginBottom: 20,
    },
    paragraph: {
      fontSize: 16,
      color: Couleurs.textColorB, // textColorB
      marginBottom: 15,
      lineHeight: 24,
    },
    button: {
      backgroundColor: Couleurs.primaryColor_two, // buttonColor
      paddingVertical: 15,
      borderRadius: 10,
      margin: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: Couleurs.textColor, // textColor
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles; 