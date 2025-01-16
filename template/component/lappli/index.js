import {View,Dimensions} from 'react-native'
import Header from './templates/Header'
import SeparateurAdditionItem from './templates/separateurAdditionItem'
import MesContributeurs from './templates/mesContributeurs'
import MesProfils from './templates/mesProfils'
import MesStatContributeur from './templates/mesStatContributeurs'
import MonHistoriqueDePartage from './templates/monHistoriqueDePartage'
import Couleurs from '../../Constants/Couleurs'
const vpHeight = Dimensions.get('window').height

const monApp = () => {

   const currentItem = {
     nom:"ampate ba",
     img:""
   }

   return (
     <View style={{ backgroundColor:Couleurs.primaryColor_three, height:1000}}>
          <Header title={"Partage d'addition"} item={currentItem} id={1} />
          <View><SeparateurAdditionItem title={"Montant"} montant={600} /></View>
          {/*<View>
            <View><MesContributeurs /></View>
          </View>*/}
          <View>
            <View><MonHistoriqueDePartage /></View>
            <View><MesStatContributeur /></View>
          </View>
     </View>
   )

}

export default monApp;