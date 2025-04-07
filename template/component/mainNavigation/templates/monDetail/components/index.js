// AffichageDonnees.js
<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 3da4c8d (repush)
import { FlatList, View, Pressable, Text, StyleSheet, Image,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import CustomInput from './templates/CustomInput'
import calcCout from './utils/calculCout'
<<<<<<< HEAD

=======
import TxtVide from './templates/txtVide'
>>>>>>> 3da4c8d (repush)

const AffichageDonnees = ({ route }) => {
  const navigation = useNavigation();
  const emailUtilisateur = route.params
  const [text, onChangeText] = React.useState(0);
  const [cout,setCout] = React.useState(0)
<<<<<<< HEAD

  const data = route ? route.params.data : defaultData;

  const handlePayerPress = (cout) => {

    navigation.navigate('EnvoieDemande', { cout: cout, data: data, placesVendues:text, emailUtilisateur: emailUtilisateur });
  };

  React.useEffect(()=>{
    const leCout = calcCout(text,data.vente.prix)
    setCout(leCout)
=======
  const [txtVide, setTxtVide] = useState(false)
  const data = route ? route.params.data : defaultData;

  const handlePayerPress = (cout) => {
   
    if(parseInt(text) > 0){
      navigation.navigate('EnvoieDemande', { cout: cout, data: data, placesVendues:text, emailUtilisateur: emailUtilisateur });
    }else{
      setTxtVide(true)
    }
  };

  useEffect(()=>{
    setTxtVide(false)
  },[])
  
  useEffect(()=>{
    console.log('texte vide :',txtVide)
  },[txtVide])
  
  React.useEffect(()=>{
    const leCout = calcCout(text,data.vente.prix)
    setCout(leCout)
    if(parseInt(text) === 0 && text.length !== 0){
      setTxtVide(false)
    } 
>>>>>>> 3da4c8d (repush)
  },[text])

  return (
    <View style={styles.container}>
       <Image
            
            style={styles.photo}
          />
<<<<<<< HEAD
          <Text style={styles.title}>{`${data.vendeur.nom} ${data.vendeur.prenom}`}</Text>
          <Text style={styles.details}>{`Places vendues: ${data.vente.nombrePlace}`}</Text>
          <CustomInput text={text} onChangeText={onChangeText}/>
=======
          <Text style={styles.title}>Vendeur : {`${data.vendeur.nom} ${data.vendeur.prenom}`}</Text>
          <Text style={styles.details}>{`Places vendues: ${data.vente.nombrePlace}`}</Text>
          <CustomInput text={text} onChangeText={onChangeText}
            txtVide={txtVide} setTxtVide={setTxtVide}/>
        <TxtVide txtVide={txtVide}/>
>>>>>>> 3da4c8d (repush)
          <Text>{cout}</Text>
       <Pressable style={styles.payerButton} onPress={ ()=>handlePayerPress(cout) }>
        <Text style={styles.payerButtonText}>Passer la commande</Text>
       </Pressable>
    </View>
  );
};


export default AffichageDonnees;