import React,{useState, useEffect} from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'
import getListeVente from './utils/getListeVente';
import fetchData from './utils/fetchData';
import ListeVendreView from './templates/listeVendreView';
import NouvelleVenteBouton from './templates/nouvelleVenteBouton';


const VenteScreen = ({ navigation, route }) => {
    const [listeVente,setListeVente] = useState([]);
    useEffect(()=>{
        fetchData(setListeVente,getListeVente)
    },[]) 
  return (
    <ScrollView style={styles.container}>

      <ListeVendreView listeVente={listeVente} navigation={navigation} 
                       route={route} styles={styles} array={listeVente} 
                       setListeVente={setListeVente}/>
      <NouvelleVenteBouton navigation={navigation} route={route} />
      
    </ScrollView>
  );
};

export default VenteScreen;
