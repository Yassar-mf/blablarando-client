import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MonDetailsScreen from './templates/monDetail/components/index';
import MonRegister from './templates/monRegister/register'
import MonMotDePasseOublie from './templates/monMotDePasseOublie/index'
import MonAccueilPrincipale from './templates/accueil-page-principale/index'
import MonPaiement from './templates/monEnvoieDemande/index'
import MonPaiementConfirme from './templates/monEnvoieDemandeConfirme/components/confirmationPaiement'
import MonVendreConfirme from './templates/monVendreConfirme/components/confirmationVendre'
import SaisieNouveauMotDePasse from './templates/monMotDePasseOublie/saisieNouveauMotDePasse';
import MonPayer from './templates/monPayer'
const Stack = createStackNavigator();

const MonMainNavigation = ({ route }) => {

  return (
      <Stack.Navigator initialRouteName="Accueil">
        
        <Stack.Screen name="Principal" 
                      component={(props)=><MonAccueilPrincipale {...props} routeN={route}/>} 
                      options={{headerShown:false}} />

        <Stack.Screen name="Detailles" 
                      component={(props)=><MonDetailsScreen  {...props} routeN={route}/>} options={{headerShown:false}} />
        
        <Stack.Screen name="Inscription" component={(props)=><MonRegister  {...props} routeN={route}/>} 
              options={{headerShown:false}} />

        <Stack.Screen name="Mot de passe oubliee" 
                      component={(props)=><MonMotDePasseOublie  {...props} routeN={route}/>} 
              options={{headerShown:false}} />

        <Stack.Screen name="SaisieNouveauMotDePasse" 
                      component={(props)=><SaisieNouveauMotDePasse  {...props} routeN={route}/>} 
              options={{headerShown:false}} />


        <Stack.Screen name="EnvoieDemande" component={(props)=><MonPaiement  {...props} routeN={route}/>} 
              options={{headerShown:false}} />


        <Stack.Screen name="DemandeConfirme" 
              component={(props)=><MonPaiementConfirme  {...props} routeN={route}/>} 
              options={{headerShown:false}} />


        <Stack.Screen name="Vente cree" component={(props)=><MonVendreConfirme  {...props} routeN={route}/>} 
              options={{headerShown:false}} />
            
        <Stack.Screen name="Payer" component={(props)=><MonPayer  {...props} routeN={route}/>} 
              options={{title:"Payer"}} />
      </Stack.Navigator>
   
    
  );
};

export default MonMainNavigation;