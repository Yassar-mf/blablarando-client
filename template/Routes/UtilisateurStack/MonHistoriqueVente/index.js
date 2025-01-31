import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MonHistoriqueVente from '../../../component/topTab/monIndex'
const Stack = createNativeStackNavigator();

const MesVentesStack = ({ route }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Historique de vente" component={MonHistoriqueVente}
        options={{ title: "Mes ventes" }}
        initialParams={route.params} />
    </Stack.Navigator>
  );
}