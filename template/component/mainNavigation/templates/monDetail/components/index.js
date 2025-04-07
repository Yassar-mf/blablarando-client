// AffichageDonnees.js
import React,{ useEffect, useState } from 'react';
import { FlatList, View, Pressable, Text, StyleSheet, Image,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import CustomInput from './templates/CustomInput'
import calcCout from './utils/calculCout'

import TxtVide from './templates/txtVide'


const AffichageDonnees = ({ route }) => {
  const navigation = useNavigation();
  const emailUtilisateur = route.params
  const [text, onChangeText] = React.useState(0);
  const [cout,setCout] = React.useState(0)

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
  },[text])

  return (
    <View style={styles.container}>
       <Image
            style={styles.photo}
          />
          <Text style={styles.title}>Vendeur : {`${data.vendeur.nom} ${data.vendeur.prenom}`}</Text>
          <Text style={styles.details}>{`Places vendues: ${data.vente.nombrePlace}`}</Text>
          <CustomInput text={text} onChangeText={onChangeText}
            txtVide={txtVide} setTxtVide={setTxtVide}/>
        <TxtVide txtVide={txtVide}/>
          <Text>{cout}</Text>
       <Pressable style={styles.payerButton} onPress={ ()=>handlePayerPress(cout) }>
        <Text style={styles.payerButtonText}>Passer la commande</Text>
       </Pressable>
    </View>
  );
};


export default AffichageDonnees;