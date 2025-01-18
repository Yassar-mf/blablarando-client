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