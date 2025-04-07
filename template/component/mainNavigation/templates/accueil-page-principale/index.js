import React, { useRef,useState,useEffect } from 'react';
import { View, Text,  Animated} from 'react-native';
import donnees from './utils/obtenirListeVentes'
import styles from './template/styles'
import ListeVendeurs from './template/listeDesVendeurs'
const App = ({ navigation, routeN, route }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const email = routeN.params ? routeN.params.monEmail 
  : route.params.monEmail ? route.params.monEmail:'' ;
  console.log('show message vide : ',routeN.params);
  console.log('show message vide : ',route);

  const [listeVente, setListeVente] = useState([]);
  const [gListeVente, setGListeVente] = useState([]);
  const [showReloaded,
         setShowReloaded]
        = useState(false)
  
  useEffect(() => {
     const fetchListeVente = async () => {
        try {
          const liste = await donnees()
          const listeFiltree = routeN.params.listeAchatsFiltre;

          
          if(listeFiltree.liste.length > 0){
            setListeVente(listeFiltree.liste)
          }else{

            setGListeVente(liste)
          }
          //cas ou on vient de passer une commande
          const casCommadePassee = routeN.params.showReloaded
          if(casCommadePassee === true){
            setShowReloaded(true)
          }
        } catch (error) {
          console.log('eeeeeerrrrrrreeeeeur : ',error)
        }
    }
    fetchListeVente()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.emailContainer}>
        <Text>{email=='email'?'':email}</Text>
      </View>
        <ListeVendeurs 
          navigation={navigation}
          email={email}
          listeVente={gListeVente}
          />

    </View>)
};


export default App;