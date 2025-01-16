import React,{useState,useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import obtenirUtilisateur from './utils/obtenirUtilisateur';
import obtenirListe from './utils/obtenirListePaiementBDD'
import LPItem from './template/listePaiementsItem'
const MonPaiementEnAttenteListe = ({ route, navigation}) => {
  const email = route.params.monEmail;
  const [listePaiement, setListePaiement] = useState([]);
  useEffect( () => {
    try{
      const obtenirListePaiementEnAttente = async () =>{
        const utilisateur = await obtenirUtilisateur(email);
        console.log('aiiiiddd :', utilisateur._id)
        const lPaiements = await obtenirListe(utilisateur._id)
        console.log('lPaiements :',lPaiements)
        setListePaiement(lPaiements)
      }
      obtenirListePaiementEnAttente()}catch(error){
        console.log('error : ',error)
      }
    },[])
  return (
    <FlatList 
      data={listePaiement}
      renderItem={({item}) => <LPItem item={item} 
                                navigation={navigation}
                                route={route}
                                />}
      />
  );
};

export default MonPaiementEnAttenteListe;