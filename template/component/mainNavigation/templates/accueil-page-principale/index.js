import React, { useRef,useState,useEffect } from 'react';
import { View, Text, StyleSheet, Animated, FlatList } from 'react-native';
import RItem from './template/flatListItemTemplate'
import donnees from './utils/obtenirListeVentes'
import Couleurs from '../../../../Constants/Couleurs'
import postLogin from './utils/postLogin';
import AfficherMessageVide from './AfficherMessageVide'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const itemHeight = 200;
const App = ({ navigation, routeN, route }) => {
  const scrollY = useRef(new Animated.Value(0)).current;


  const email = routeN.params ? routeN.params.monEmail 
  : route.params.monEmail ? route.params.monEmail:'' 


 // const res = postLogin(routeN)

  const [listeVente,setListeVente] = useState([])
  const [showMessageVide,
         setShowMessageVide]
        = useState(false)

  useEffect(() => {

     const fetchListeVente = async () => {
        try {
          const liste = await donnees()
          const listeFiltree = routeN
            .params.listeAchatsFiltre; 

           console.log('listeFiltree :',
              listeFiltree.liste)
          console.log(
            'listeFiltree longueur',
                      listeFiltree.liste.length)


          if(listeFiltree.liste.length > 0){
            //appliquer les filtres
            setListeVente(listeFiltree.liste)
            console.log('liste vente actualisé')
          }



        } catch (error) {
          console.log('eeeeeerrrrrrreeeeeur : ',error)
        }
    }
    fetchListeVente()

  }, [])


  return (
    <View style={styles.container}>
      <Text>{email=='email'?'':email}</Text>
      <AnimatedFlatList
        data={listeVente}
        renderItem={({item,index}) =><RItem item={item} index={index} styles={styles} scrollY={scrollY} itemHeight={itemHeight} navigation={navigation} emailUtilisateur={email}/>}
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

        />

    </View>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Couleurs.neutralColor_one,
  },
  item: {
    height: itemHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Couleurs.primaryColor_two,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 32,
  },
});

export default App;