import {Text, View, Pressable, Modal, StyleSheet, Dimensions} from 'react-native'
import Dim from '../Constants/Dimensions'
import Couleurs from '../Constants/Couleurs'
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')
import goPagePrincipaleFiltre from '../utils/goPagePrincipaleFiltre'
const AfficherMessageVide = ({showMessageVide, 
  setShowMessageVide,listeFiltree, navigation }) => {

   console.log(`mess vide : ${showMessageVide}`)
   console.log(`showMessageVide !== false : ${showMessageVide !== false}`)
   console.log(`typeof showMessageVide != 'undefined' : ${typeof showMessageVide !== 'undefined'}`)


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
                         onPress = {() =>  {
                            setShowMessageVide(false)
                            goPagePrincipaleFiltre(listeFiltree,navigation)
                         }}>
                          <View style={styles.p}>
                          <Text style={styles.pTxt}>
                            Afficher toutes les ventes
                          </Text>
                          </View>
                       </Pressable>
                  </View>
               </Modal>
           </View>

   )
}
// succes
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
      marginBottom:HEIGHT*0.1,
      fontWeight:"bold",
      fontSize:WIDTH*0.07

   },
   p:{
      height:HEIGHT*0.06,
      paddingVertical:HEIGHT*0.015,
      paddingHorizontal:WIDTH*0.05,
      borderRadius: Dim.borderRadius,
      backgroundColor: Couleurs.primaryColor_one
   },
   pTxt:{
      fontSize:WIDTH*0.04,
   }
})

export default AfficherMessageVide;


