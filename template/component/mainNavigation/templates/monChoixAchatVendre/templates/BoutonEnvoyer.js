import {View, Text, Pressable} from 'react-native'
import envoyerAuServeurPourFiltre from '../utils/envoyerAuServeurPourFiltre'
import Couleurs from '../Constants/Couleurs'
const BoutonEnvoyer = ({kilo, prixMax, dateHeure, navigation,listeFiltree,
                       setListeFiltree,setShowMessageVide}) => {

  console.log('bouton envoyer donnees:',
              '\nkilo : ',kilo,
              '\nprix max :',prixMax,
              '\ndate heure :',dateHeure)

  return(
    <View>
      <Pressable onPress={() => {

      envoyerAuServeurPourFiltre(kilo, prixMax, dateHeure,navigation,listeFiltree, 
                                setListeFiltree,setShowMessageVide)}
      }
        style={{padding: 20, backgroundColor:Couleurs.primaryColor_two, borderRadius: 10, margin: 10}}
        >
        <Text style={{color:Couleurs.neutralColor_one,alignSelf:"center"}}>ENVOYER</Text>

      </Pressable>
    </View>
  )

}

export default BoutonEnvoyer