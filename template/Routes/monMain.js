import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import mesRoutes from './index';
import MonDrawer from './monDrawer';
const Stack = createNativeStackNavigator();
import {Text,View} from 'react-native'

const Tst = () => {
   return(
      <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
         <Text>Tst</Text>
      </View>
   )
}
const Tst2 = () => {
   return(
      <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
         <Text>Tst2</Text>
      </View>
   )
}

const { MonAccueil, MonLogin, MonIscription, MonMotDePasseOublie, SaisieNouveauMotDePasse,MonPageIntermediaire,} = mesRoutes

export default function App() {
  return (
     <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Liste" component={MonAccueil}/>
            <Stack.Screen name="Login" component={MonLogin}/>
            <Stack.Screen name="PageIntermediaire" component={MonPageIntermediaire}/>
            <Stack.Screen name="SaisieNouveauMotDePasse" component={SaisieNouveauMotDePasse}/>

            <Stack.Screen name="Inscription" component={MonIscription}/>
            <Stack.Screen name="Mot de passe oublié" component={MonMotDePasseOublie}/>

            <Stack.Screen name="MonPrincipal" component={MonDrawer} options={{headerShown:false}}/>


         </Stack.Navigator>
       </NavigationContainer>
  );
}

/*
<NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Liste" component={MonAccueil}/>
       <Stack.Screen name="Login" component={MonLogin}/>
       <Stack.Screen name="PageIntermediaire" component={MonPageIntermediaire}/>
       <Stack.Screen name="SaisieNouveauMotDePasse" component={SaisieNouveauMotDePasse}/>

       <Stack.Screen name="Inscription" component={MonIscription}/>
       <Stack.Screen name="Mot de passe oublié" component={MonMotDePasseOublie}/>

       <Stack.Screen name="MonPrincipal" component={MonDrawer} options={{headerShown:false}}/>


    </Stack.Navigator>
  </NavigationContainer>
*/

