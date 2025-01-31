
import { createMaterialTopTabNavigator }from '@react-navigation/material-top-tabs'
import HistoriqueScreen from './templates/monHistoriqueVentes'
import HistoriqueScreenAccepte from './templates/monHistoriqueVentesAccepte'
import HistoriqueScreenEnAttente from './templates/monHistoriqueVentesEnAttente'
import HistoriqueScreenAnnule from './templates/monHistoriqueVentesAnnule'
import HistoriqueScreenTermine from './templates/monHistoriqueVentesTerminee'


const TopTab = createMaterialTopTabNavigator()

const leTopTab = ({ route }) => {

  const routeN = route.params;
  console.log('le top tab route :',routeN)
 return( 
  <TopTab.Navigator>


      <TopTab.Screen name="Historiques" 
                     component={(props)=> <HistoriqueScreen {...props} routeN={routeN}/>} 
                     options={{ headerShown: false }}/>
    
      <TopTab.Screen name="VentesAcceptees" 
                    component={(props)=><HistoriqueScreenAccepte {...props} routeN={routeN}/>} 
                    options={{ headerShown: false, title: "Ventes acceptées" }}/>
    
      <TopTab.Screen name="VentesEnAttente" 
                    component={(props)=><HistoriqueScreenEnAttente {...props} routeN={routeN}/>} 
                    options={{ headerShown: false, title: "Ventes en attente" }}/>
    
      <TopTab.Screen name="VentesAnnulees" 
                    component={(props)=><HistoriqueScreenAnnule {...props} routeN={routeN}/>} 
                    options={{ headerShown: false, title: "Ventes annulées" }}/>
    
      <TopTab.Screen name="VentesTermine" 
                    component={(props)=><HistoriqueScreenTermine {...props} routeN={routeN}/>} 
                    options={{ headerShown: false, title: "Ventes terminées" }}/>

    
    </TopTab.Navigator>
    )
  }


export default leTopTab