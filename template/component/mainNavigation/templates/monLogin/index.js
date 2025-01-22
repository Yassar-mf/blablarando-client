import React, { useState } from 'react';
import { View, StyleSheet, Alert, Pressable } from 'react-native';
import { TextInput, Text, Title } from 'react-native-paper';
import styles from './styles/mesStyles'
import connexion from './utils/connexion';

//const monUrl = "http://localhost:8083/connexion"
const monUrl = "https://kilo-kello-4d8ce17ec2a1.herokuapp.com/connexion"

const LoginScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageErreur, setMessageErreur] = useState('');
  const [isLoading, setIsLoading] = useState(false); // État pour gérer le chargement

  const handleLogin = async () => {

    if (isLoading) return;

      setIsLoading(true); // Activer l'état de chargement


        try {
            const connectionMessage = await connexion(email, password);
            console.log('connection message :', connectionMessage);
            const connectionValidee = connectionMessage !== "utilisateur non inscrit";
            console.log('connection validée :', connectionValidee);
        
              setMessageErreur(connectionMessage);

            if (connectionValidee) {
              
              navigation.navigate('MonPrincipal', { monEmail: email, url: monUrl });
            }
      } catch (error) {
        console.error('Erreur de connexion :', error);
        setMessageErreur('Une erreur est survenue lors de la connexion.');
      } finally {
        setIsLoading(false); // Réinitialiser l'état de chargement
      }
      


    
  };

  return (
    <View style={styles.contS}>
      <Title style={styles.titleS}>Connexion</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => { setMessageErreur(""); setEmail(text) }}
        style={styles.inpS}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder={'exemple@youhou.com'}
      />
      <TextInput
        label="Mot de passe"
        value={password}
        onChangeText={text => { setMessageErreur(""); setPassword(text) }}
        style={styles.inpS}
        secureTextEntry
      />
      <Pressable onPress={handleLogin} style={styles.btS} disabled={isLoading}>
        <Text style={styles.coTxt}>{isLoading ? 'Connexion...' : 'Se connecter'}</Text>
      </Pressable>
      <View>
        <Text style={{ color: "red" }}>
          {messageErreur}
        </Text>
      </View>
      <View style={styles.optS}>
        <Pressable onPress={() => navigation.navigate('Inscription')}>
          <Text style={styles.regTxt}>Pas de compte ?</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Mot de passe oublié')}>
          <Text style={styles.fgTxt}>Mot de passe oublié</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
