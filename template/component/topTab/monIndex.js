import { createMaterialTopTabNavigator}from '@react-navigation/material-top-tabs'
import ProfilScreen from './templates/profilScreen'
import CommandesScreen from './templates/commandesScreen'
import VentesScreen from './templates/ventesScreen'

const TopTab = createMaterialTopTabNavigator()

const leTopTab = ({ route }) => {
  
 return( 
  <TopTab.Navigator>


      <TopTab.Screen name="Profil" 
                    component={(props)=><ProfilScreen {...props} routeN={route}/>} 
                    options={{ headerShown: false }}/>



      <TopTab.Screen name="Commandes" 
                     component={(props)=><CommandesScreen {...props} routeN={route}/>} 
                     options={{ headerShown: false }}/>


      <TopTab.Screen name="Ventes" 
                     component={(props)=> <VentesScreen {...props} routeN={route}/>} 
                     options={{ headerShown: false }}/>


    </TopTab.Navigator>
    )
  }


export default leTopTab