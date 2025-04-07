import { Text,View } from 'react-native'
import styles from './styles'
const TxtVide = ({ txtVide }) => {
   console.log('txtVide : ',txtVide)
   return (
      <View>
         {txtVide === true && (<Text style={styles.TxtVideStyle}>
           Veuillez saisir un nombre de place supérieur ou égale à 1
       </Text>)}
      </View>

       )
  
};


export default TxtVide;