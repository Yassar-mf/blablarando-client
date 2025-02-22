// AffichageDonnees.js
import React from 'react';
import { FlatList, View, Pressable, Text, StyleSheet, Image,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import CustomInput from './templates/CustomInput'
import calcCout from './utils/calculCout'


const AffichageDonnees = ({ route }) => {
  const navigation = useNavigation();
  const emailUtilisateur = route.params
  const [text, onChangeText] = React.useState(0);
  const [cout,setCout] = React.useState(0)

  const data = route ? route.params.data : defaultData;

  const handlePayerPress = (cout) => {

    navigation.navigate('EnvoieDemande', { cout: cout, data: data, placesVendues:text, emailUtilisateur: emailUtilisateur });
  };

  React.useEffect(()=>{
    const leCout = calcCout(text,data.vente.prix)
    setCout(leCout)
  },[text])

  return (
    <View style={styles.container}>
       <Image
            
            style={styles.photo}
          />
          <Text style={styles.title}>{`${data.vendeur.nom} ${data.vendeur.prenom}`}</Text>
          <Text style={styles.details}>{`Places vendues: ${data.vente.nombrePlace}`}</Text>
          <CustomInput text={text} onChangeText={onChangeText}/>
          <Text>{cout}</Text>
       <Pressable style={styles.payerButton} onPress={ ()=>handlePayerPress(cout) }>
        <Text style={styles.payerButtonText}>Passer la commande</Text>
       </Pressable>
    </View>
  );
};


export default AffichageDonnees;