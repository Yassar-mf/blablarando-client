import {useState, useEffect} from 'react';
<<<<<<< HEAD
import {FlatList,View} from 'react-native'
import obtenirLieuRando from './utils/obtenirLieuRando'
import LieuRandoItem from './lieuRandoItem'
=======
import {FlatList,View, Dimensions} from 'react-native'
import obtenirLieuRando from './utils/obtenirLieuRando'
import LieuRandoItem from './lieuRandoItem'
import styles from '../styles/mesStyles'
const {width: screenWidth, height: H} = Dimensions.get('window');
>>>>>>> 3da4c8d (repush)
const ViewLieuRandonnee = ({lieuRandonnee, setLieuRandonnee}) => {
  const [lieux, setLieux] = useState([]);
  useEffect(() =>{
    const fetchLieu = async () => {
      const mlieux = await obtenirLieuRando();
<<<<<<< HEAD
=======
      console.log('les lieux :',mlieux)
>>>>>>> 3da4c8d (repush)
      setLieux(mlieux);
    }
    fetchLieu();
  },[])
  useEffect(()=>{
    console.log('lieux :',lieux)
  },[])
  return(
<<<<<<< HEAD
    <View style={{height:'11%',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingVertical:8,backgroundColor:'blue'}}>
=======
    <View style={styles.lrStyle}>
>>>>>>> 3da4c8d (repush)
      <FlatList 
          data={lieux}
          renderItem={({item}) => <LieuRandoItem 
                                    lieuRandonnee={lieuRandonnee}
                                    setLieuRandonnee={setLieuRandonnee}
                                    item={item} 
                                    />
          }
<<<<<<< HEAD
          keyExtractor={(item) => item.id}
        contentContainerStyle={{flexWrap: 1, paddinVertical:10}}
=======
          keyExtractor={(item,index) => index.toString()}
          contentContainerStyle ={{flexWrap: 1, paddingVertical:H*0.008}}
          nestedScrollEnabled = {true}
>>>>>>> 3da4c8d (repush)
        />
    </View>
  )
}

export default ViewLieuRandonnee
