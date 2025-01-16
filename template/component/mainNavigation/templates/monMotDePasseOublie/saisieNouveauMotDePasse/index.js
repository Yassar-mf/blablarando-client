import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import axios from 'axios';
import ConfirmPasswordScreen from './view/monConfMdpTemplate';
import obtenirUtilisateur from './utils/obtenirUtilisateur';


const ModifyPasswordScreen = ({ navigation,route }) => {
  const [nouveaumotdepasse, setNouveaumotdepasse] = useState('');
  const [confNouveauMdp, setConfNouveauMdp] = useState('');
  const [utilisateur, setUtilisateur] = useState(null); // État pour stocker les données de l'utilisateur

  // Utilisez directement le token ici
  const token = route.params.token; // Remplacez par un token de test pour vos essais

  // URL backend en dur
  //const backendUrl = `http://localhost:8085/motdepasseoublie/reset/${token}`; // Remplacez par l'adresse IP locale de votre backend
  const backendUrl = `https://kilo-kello-4d8ce17ec2a1.herokuapp.com/motdepasseoublie/reset/${token}`; // Remplacez par l'adresse IP locale de votre backend
  //const backendUrl = `https://258b4c97-31fc-45d4-8f21-4f325e9a00a6-00-b062oot7ub0r.janeway.repl.co/motdepasseoublie/reset/${token}`; // Remplacez par l'adresse IP locale de votre backend

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log(`Fetching utilisateur data from ${backendUrl}`);
        
        const response = await axios.get(backendUrl);

        if (response.data.utilisateur) {
          setUtilisateur(response.data.utilisateur); // Stocke les données utilisateur
        } else {
          Alert.alert("Erreur", "Token invalide ou expiré");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
        Alert.alert("Erreur", "Impossible de récupérer les informations de l'utilisateur");
      }
    };

    // Appel direct de la fonction
    obtenirUtilisateur(token,setUtilisateur);
  }, []); // Appeler lors du montage du composant uniquement

  return (
    <View>
      <View>
        {utilisateur ? (
          <View>
            <Text>Bonjour, {utilisateur.prenom} {utilisateur.nom}</Text>
            <Text>Email : {utilisateur.email}</Text>
            {/* Autres informations utilisateur ici */}
          </View>
        ) : (
          <Text>Chargement des informations utilisateur...</Text>
        )}
      </View>
      <ConfirmPasswordScreen 
        nouveaumotdepasse={nouveaumotdepasse}
        setNouveaumotdepasse={setNouveaumotdepasse}
        confNouveauMdp={confNouveauMdp} 
        setConfNouveauMdp={setConfNouveauMdp}
        utilisateur={utilisateur} // Transmettre l'utilisateur au composant enfant
        navigation={navigation}
      />
    </View>
  );
};

export default ModifyPasswordScreen;
