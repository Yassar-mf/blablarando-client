// ForgotPasswordScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from '../styles';
import handleConfirmationMotDePasse from '../utils/handleConfirmationMotDePasse';

const ConfirmPasswordScreen = ({ utilisateur,nouveaumotdepasse,setNouveaumotdepasse,confNouveauMdp,setConfNouveauMdp,navigation}) => {


  console.log('noooooouveua mot de passe ;;;;;;;....:::',nouveaumotdepasse)   
  console.log('set noooooouveua mot de passe ;;;;;;;....:::',setNouveaumotdepasse)   
  console.log('confirmation  mot de passe ;;;;;;;....:::',confNouveauMdp)   
  console.log('set confirmation noooooouveua mot de passe ;;;;;;;....:::',setConfNouveauMdp)   

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modification de mot de passe</Text>
      <TextInput
        style={styles.input}
        label="Veuillez saisir votre mot de passe"
        value={nouveaumotdepasse}
        onChangeText={text => setNouveaumotdepasse(text)}
        secureTextEntry
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        label="Veuillez confirmer le mot  de passe"
        value={confNouveauMdp}
        onChangeText={text => setConfNouveauMdp(text)}
        secureTextEntry
        autoCorrect={false}
      />
      <Button title="Réinitialiser le mot de passe" onPress={() => handleConfirmationMotDePasse(utilisateur.email,nouveaumotdepasse,confNouveauMdp,navigation)} />
    </View>
  );
};

export default ConfirmPasswordScreen;