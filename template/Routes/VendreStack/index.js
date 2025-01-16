import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MonVendre from '../../component/mainNavigation/templates/monVendre/components/monFormVendeur'
import MonVendreConfirme from '../../component/mainNavigation/templates/monVendreConfirme/components/confirmationVendre'
const Stack = createNativeStackNavigator();

const MonMainNavigation = ({ route }) => {

  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Vendre" component={MonVendre} 
        options={{title:"Paiement en attente"}}
        initialParams={route.params}/>

      <Stack.Screen name="Vente cree" 
        options={{title:"Vente créée"}}
        component={MonVendreConfirme} initialParams={route.params}/>
    </Stack.Navigator>
  )

}

export default MonMainNavigation