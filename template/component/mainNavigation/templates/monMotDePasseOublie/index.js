// ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './styles';

import handleForgotPassword from './utils/handleMotdePasseOublie';
const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mot de passe oublié</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre adresse e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Réinitialiser le mot de passe" onPress={() => handleForgotPassword(email,navigation)} />
    </View>
  );
};

export default ForgotPasswordScreen;