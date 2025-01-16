import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaiementEnAttente from '../../component/mainNavigation/templates/monPaiementEnAttenteListe'
import MonPayer from '../../component/mainNavigation/templates/monPayer'
const Stack = createNativeStackNavigator();

const MonMainNavigation = ({ route }) => {

  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PaiementEnAttente" component={PaiementEnAttente} 
        options={{title:"Paiement en attente"}}
        initialParams={route.params}/>
      
      <Stack.Screen name="Payer" 
        options={{title:"PAYER"}}
        component={MonPayer} initialParams={route.params}/>
    </Stack.Navigator>
  )
  
}

export default MonMainNavigation