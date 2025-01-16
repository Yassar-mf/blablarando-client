// PaiementConfirme.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Couleurs from '../../../../../Constants/Couleurs'

const PaiementConfirme = ({ route }) => {
  const navigation = useNavigation();

  const {
      nom,
      prenom,
      adresse,
      email,
      telephone,
      dateDeDepart,
      dateDarrive,
      vol,
      kiloVendu,
      prixUnitaire,
      nbPourPrixGros,
      prixEnGros,
      selectedButtons,
      packages
} = route.params.data


  return (
    <View style={styles.container}>
      <Pressable onPress={()=> navigation.navigate('Accueil')}>
        <Text style={{...styles.text, paddingVertical : 20}}>Vente créé avec succès !</Text>
      </Pressable>        
        <View><Text style={styles.text}>Recap</Text>
        <Text style={styles.text}>{nom}</Text>
        <Text style={styles.text}>{prenom}</Text>
        <Text style={styles.text}>{adresse}</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>{telephone}</Text>
        <Text style={styles.text}>{dateDeDepart}</Text>
        <Text style={styles.text}>{dateDarrive}</Text>
        <Text style={styles.text}>{vol}</Text>
        <Text style={styles.text}>{kiloVendu}</Text>
        <Text style={styles.text}>{prixUnitaire}</Text>
        <Text style={styles.text}>{nbPourPrixGros}</Text>
        <Text style={styles.text}>{prixEnGros}</Text>
        {Object.keys(packages).map(item => <Text style={styles.text}>{item}</Text>)}
        </View>
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
    color: Couleurs.primaryColor_two,
    fontWeight: 'bold',
  },
});

export default PaiementConfirme;
