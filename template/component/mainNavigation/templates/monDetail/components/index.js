// AffichageDonnees.js
import React from 'react';
import { FlatList, View, Pressable, Text, StyleSheet, Image,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomInput from './templates/CustomInput'
import calcCout from './utils/calculCout'
import Couleurs from '../../../../../Constants/Couleurs'


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
        <Text style={styles.payerButtonText}>Payer</Text>
       </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
  },
  payerButton: {
    backgroundColor: Couleurs.primaryColor_one,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  payerButtonText: {
    color: Couleurs.neutralColor_one,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  details:{

  },
  photo:{
    
  }
});

export default AffichageDonnees;