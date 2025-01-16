// PaiementConfirme.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Couleurs from '../../../../../Constants/Couleurs'
const PaiementConfirme = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> navigation.navigate('Principal')}>
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
