import {Text, View, Pressable, Modal, StyleSheet} from 'react-native'
import Dim from '../../../../Constants/Dimensions'
import Couleurs from '../../../..//Constants/Couleurs'

import handleAfficherListeVente from './utils/handleAfficherListeVente'


const AfficherMessageVide = ({showMessageVide, 
  setShowMessageVide,
  setListeVente, gListeVente, setShowReloaded }) => {

   console.log(`mess vide : ${showMessageVide}`)
   
   return (
           <View>
               <Modal 
                  visible={showMessageVide}
                  animationType="slide"
                  style={styles.modal}
                  >
                  <View style={styles.mView}>
                       <Text style={styles.textModal}>
                          Aucune vente trouvée
                       </Text>
         
                       <Pressable 
                         onPress = {() =>  
                            handleAfficherListeVente(
                            setShowMessageVide,
                            setListeVente,gListeVente,setShowReloaded)}>
                          <View style={styles.p}>
                          <Text>
                            Afficher toutes les ventes
                          </Text>
                          </View>
                       </Pressable>
                  </View>
               </Modal>
           </View>
      
   )
}

const styles = StyleSheet.create({
   modal:{
      elevation:1,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
   },
   mView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
   },
   textModal:{
      marginBottom:100,
      fontWeight:"bold",
      fontSize:20,
      
   },
   p:{
      height:60,
      padding:20,
      borderRadius: Dim.borderRadius,
      backgroundColor: Couleurs.primaryColor_one
   }
})

export default AfficherMessageVide;


