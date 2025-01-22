import {View, Text, Pressable} from 'react-native'
import envoyerAuServeurPourFiltre from '../utils/envoyerAuServeurPourFiltre'

const BoutonEnvoyer = ({kilo, prixMax, dateHeure, navigation}) => {

  console.log('bouton envoyer donnees:',
              '\nkilo : ',kilo,
              '\nprix max :',prixMax,
              '\ndate heure :',dateHeure)

  return(
    <View>
      <Pressable onPress={() => {
      console.log('yooooooo')
      envoyerAuServeurPourFiltre(kilo, prixMax, dateHeure,navigation)}
      }
        style={{padding: 20, backgroundColor:"green", borderRadius: 10, margin: 10}}
        >
        <Text>Envoyer</Text>
      </Pressable>
    </View>
  )

}

export default BoutonEnvoyer