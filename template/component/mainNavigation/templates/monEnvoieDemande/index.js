import React,{useEffect} from 'react';
import { View, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import postPaiement from './utils/postPaiement';
import calculerPrixTotal from './utils/calculRemise';
import Urls from '../../../../Constants/urls'
<<<<<<< HEAD
const mUrl = Urls.dev
=======
const mUrl = Urls.prod
>>>>>>> 3da4c8d (repush)
const url = `${mUrl}/creerAchat`

const Paiement = ({ route }) => {
 const navigation = useNavigation();

  const {cout,data, placesVendues,emailUtilisateur }  = route ? route.params : {};

  const nbGros = data.vente.nbPrixEnGros ? parseInt(data.vente.nbPrixEnGros) : 1
  const pxGros = data.vente.prixEnGros ? parseInt(data.vente.prixEnGros) : 1
  const px = parseInt(data.vente.prix)

  const handleConfirmerPaiement = async () => {

    const body = {cout,data,placesVendues,emailUtilisateur};
    console.log('body : ',body)
    console.log('url : ',url)
    const res = await postPaiement(url,body)
    
    console.log('res : ',res)
    navigation.navigate('DemandeConfirme',{cout,data,placesVendues,emailUtilisateur});
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.text}>Kilos vendus : {placesVendues}</Text>
=======
      <Text style={styles.text}>Places vendus : {placesVendues}</Text>
>>>>>>> 3da4c8d (repush)
      <Text style={styles.text}>Prix total : {cout}€</Text>
      <Text style={{color:"green", fontWeight:"bold"}}>
        { nbGros > 1 && placesVendues >= nbGros ?
        `vosu beneficiez d'une remise de ${cout
            - (Math.floor(placesVendues / nbGros ) * pxGros
            + placesVendues % nbGros * px)}€`:``}</Text>
      <Pressable
        style={styles.confirmerButton}
        onPress={() => handleConfirmerPaiement()}
      >
        <Text style={styles.confirmerButtonText}>Confirmer la commande</Text>
      </Pressable>
    </View>
  );
};


export default Paiement;