import React,{useState, useEffect} from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'
import ListeAchatView from './templates/listeAchatView';
import getListeCommande from './utils/getListeCommande';
import fetchData from './utils/fetchData';
import NouvelleAchatBouton from './templates/nouvelleAchatBouton';


const Detail = ({ navigation, route }) => {
    const [listeAchat,setListeAchat] = useState([]);
    useEffect(()=>{
        fetchData(setListeAchat,getListeCommande)
    },[]) 
  return (
    <ScrollView style={styles.container}>
        <ListeAchatView listeAchat={listeAchat} 
                        navigation={navigation} 
                        route={route} styles={styles} array={listeAchat} setListeAchat={setListeAchat} />
          <NouvelleAchatBouton navigation={navigation} route={route} />
    </ScrollView>
  );
};

export default Detail;
