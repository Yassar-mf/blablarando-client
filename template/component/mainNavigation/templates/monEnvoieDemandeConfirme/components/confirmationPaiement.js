// PaiementConfirme.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Couleurs from '../../../../../Constants/Couleurs'
import Urls from '../../../../../Constants/urls'

const PaiementConfirme = ({route}) => {
  const {emailUtilisateur} = route.params
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Pressable onPress={()=> navigation.navigate('Accueil',{monEmail: emailUtilisateur})}>
=======
      <Pressable onPress={()=> navigation.navigate('Accueil',{monEmail: emailUtilisateur,barDeReChercheAffichee: false})}>
>>>>>>> 3da4c8d (repush)
        <Text style={styles.text}>Paiement confirmé avec succès !</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: Couleurs.primaryColor_one,
    fontWeight: 'bold',
  },
});

export default PaiementConfirme;
