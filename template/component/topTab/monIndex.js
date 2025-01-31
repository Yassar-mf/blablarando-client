
import { createMaterialTopTabNavigator }from '@react-navigation/material-top-tabs'
import HistoriqueScreen from './templates/monListeVentes'


const TopTab = createMaterialTopTabNavigator()

const leTopTab = ({ route }) => {

  const routeN = route.params;
  console.log('le top tab route :',routeN)
 return( 
  <TopTab.Navigator>

      <TopTab.Screen name="Profil" 
                    component={(props)=><HistoriqueScreen {...props} routeN={routeN}/>} 
                    options={{ headerShown: false }}/>

      <TopTab.Screen name="Historiques" 
                     component={(props)=> <HistoriqueScreen {...props} routeN={routeN}/>} 
                     options={{ headerShown: false }}/>
    </TopTab.Navigator>
    )
  }


export default leTopTab