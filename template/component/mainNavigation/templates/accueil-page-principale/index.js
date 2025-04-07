import React, { useRef,useState,useEffect } from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, Animated, FlatList } from 'react-native';
import RItem from './template/flatListItemTemplate'
import donnees from './utils/obtenirListeVentes'
import AfficherMessageVide from './AfficherMessageVide'
import styles from './template/styles'
//import Dim from '../'
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const itemHeight = 200;
const App = ({ navigation, routeN, route }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const email = routeN.params ? routeN.params.monEmail 
  : route.params.monEmail ? route.params.monEmail:'' 
  const [listeVente,setListeVente] = useState([])
  const [gListeVente,setGListeVente] = useState([])
  const [activeCarousel, setActiveCarousel] = useState(null);
  const [showMessageVide,
         setShowMessageVide]
        = useState(false)
  const [showReloaded,
         setShowReloaded]
        = useState(false)
=======
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
  
>>>>>>> 3da4c8d (repush)
  useEffect(() => {
     const fetchListeVente = async () => {
        try {
          const liste = await donnees()
<<<<<<< HEAD
          const listeFiltree = routeN
            .params.listeAchatsFiltre; 
          if(listeFiltree.liste.length > 0){
            setListeVente(listeFiltree.liste)
          }else{
            setShowMessageVide(true)
=======
          const listeFiltree = routeN.params.listeAchatsFiltre;

          
          if(listeFiltree.liste.length > 0){
            setListeVente(listeFiltree.liste)
          }else{
>>>>>>> 3da4c8d (repush)
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

<<<<<<< HEAD
  useEffect(()=>{
    console.log('lia liiiste',listeVente)
  },[listeVente,showReloaded])
=======

>>>>>>> 3da4c8d (repush)


  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>{email=='email'?'':email}</Text>
      <AnimatedFlatList
        data={listeVente}
        renderItem={({item,index}) =>{
          console.log('uuuuuu iiiitem : ',item)
          return (<RItem item={item} index={index} styles={styles} scrollY={scrollY} itemHeight={itemHeight} navigation={navigation} emailUtilisateur={email}   activeCarousel={activeCarousel} setActiveCarousel = {setActiveCarousel}/>)
        }}
        keyExtractor={(item,index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
      {/* Affichage message pour liste vide */}
      <AfficherMessageVide 
        showMessageVide = {
      showMessageVide
      }
        setShowMessageVide = {
      setShowMessageVide
      }
        setListeVente={
          setListeVente
        }
        gListeVente={gListeVente}

        setShowReloaded={setShowReloaded}
        />
=======
      <View style={styles.emailContainer}>
        <Text>{email=='email'?'':email}</Text>
      </View>
        <ListeVendeurs 
          navigation={navigation}
          email={email}
          listeVente={gListeVente}
          />


>>>>>>> 3da4c8d (repush)

    </View>)
};


export default App;