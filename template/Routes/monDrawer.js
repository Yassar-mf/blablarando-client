import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import mesRoutes from './index';
const { TopTab, BottomTab, MainNavigation, MonVendre, MonChoixAchatVendre ,PaiementScreens} = mesRoutes

const Drawer = createDrawerNavigator();

const MonDrawer = ({ route }) => {
  
  return(
      <Drawer.Navigator initialRouteName="Accueil">

        <Drawer.Screen name="Accueil" component={MonChoixAchatVendre} initialParams={route.params}/>
        <Drawer.Screen name="Acheter" component={MainNavigation} initialParams={route.params}/>
        <Drawer.Screen name="Vendre" component={MonVendre} initialParams={route.params}/>
        <Drawer.Screen name="Profil utilisateur" component={TopTab} initialParams={route.params}/>
        <Drawer.Screen name="Reglage" component={BottomTab} initialParams={route.params}/>
        
        <Drawer.Screen name="PaiementEnAttente" component={PaiementScreens} options={{title:"Paiement en attente"}} 
          initialParams={route.params}/>
        
      </Drawer.Navigator>
  )
}

export default MonDrawer