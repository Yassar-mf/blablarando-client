import {useState, useEffect} from 'react'
import {View} from 'react-native'
import CustomBoutonChoix from './templates/CustomBoutonChoix'
import CustomFiltre from './templates/CustomFiltre'
const MonChoixAchatVendre = ({  navigation, route }) => {

   const [barDeReChercheAffichee,setBarDeReChercheAffichee] = useState(false)

   const state = {
      setBarDeReChercheAffichee, navigation, route
   }

       return(
        <View>
           <CustomBoutonChoix titre={"VENDRE"} navigation={navigation} route={route}  state={state} />
           <CustomBoutonChoix titre={"ACHETER"} navigation={navigation} route={route}  state={state} />
           {barDeReChercheAffichee && <CustomFiltre route={route} navigation={navigation}/>}

        </View>

       )

}

export default MonChoixAchatVendre