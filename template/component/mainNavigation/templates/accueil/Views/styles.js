import Couleurs from '../../../../../Constants/Couleurs'
import { StyleSheet } from 'react-native';
import Dim from '../../../../../Constants/Dimensions'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Couleurs.neutralColor_one
  },
  item: {
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
});

export default styles;