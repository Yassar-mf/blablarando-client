import {Text, View, Pressable} from 'react-native'

import handleAfficherListeVente from './utils/handleAfficherListeVente'
//setShowMessageVide
const AfficherMessageVide = ({showMessageVide, 
  setShowMessageVide,
  setListeVente }) => {
   return (
      <View>
         {
            showMessageVide && 
            (<>
              <Text>
                 Aucune vente trouvée
              </Text>

              <Pressable 
                onPress = {() =>  
                   handleAfficherListeVente(
                   setShowMessageVide,
                   setListeVente)}>
                 <Text>
                   Afficher toutes les ventes
                 </Text>
              </Pressable>
            </>)
         }
        {/* Quand tu affiches toutes les ventes tu affiches en plus un bouton filtre */}
      </View>
   )
}

export default AfficherMessageVide;