import {View, Text, Pressable} from 'react-native'
import envoyerAuServeurPourFiltre from '../utils/envoyerAuServeurPourFiltre'
<<<<<<< HEAD

const BoutonEnvoyer = ({kilo, prixMax, dateHeure, navigation}) => {
=======
import Couleurs from '../Constants/Couleurs'
const BoutonEnvoyer = ({kilo, prixMax, dateHeure, navigation,listeFiltree,
                       setListeFiltree,setShowMessageVide}) => {
>>>>>>> 3da4c8d (repush)

  console.log('bouton envoyer donnees:',
              '\nkilo : ',kilo,
              '\nprix max :',prixMax,
              '\ndate heure :',dateHeure)

  return(
    <View>
      <Pressable onPress={() => {
      console.log('yooooooo')
<<<<<<< HEAD
      envoyerAuServeurPourFiltre(kilo, prixMax, dateHeure,navigation)}
      }
        style={{padding: 20, backgroundColor:"green", borderRadius: 10, margin: 10}}
        >
        <Text>Envoyer</Text>
=======
      envoyerAuServeurPourFiltre(kilo, prixMax, dateHeure,navigation,listeFiltree, 
                                setListeFiltree,setShowMessageVide)}
      }
        style={{padding: 20, backgroundColor:Couleurs.primaryColor_two, borderRadius: 10, margin: 10}}
        >
        <Text style={{color:Couleurs.neutralColor_one,alignSelf:"center"}}>ENVOYER</Text>
>>>>>>> 3da4c8d (repush)
      </Pressable>
    </View>
  )

}

export default BoutonEnvoyer