import {View, Text, Pressable} from 'react-native'
import envoyerAuServeurPourFiltre from '../utils/envoyerAuServeurPourFiltre'

const BoutonEnvoyer = ({kilo, prixMax, dateHeure, navigation}) => {

  console.log('bouton envoyer donnees:',
              '\nkilo : ',kilo,
              '\nprix max :',prixMax,
              '\ndate heure :',dateHeure)

  return(
    <View>
      <Pressable onPress={() => envoyerAuServeurPourFiltre(kilo, prixMax, dateHeure,navigation)}>
        <Text>Envoyer</Text>
      </Pressable>
    </View>
  )

}

export default BoutonEnvoyer