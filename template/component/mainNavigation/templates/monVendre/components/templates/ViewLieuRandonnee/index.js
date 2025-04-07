import {useState, useEffect} from 'react';
import {FlatList,View, Dimensions} from 'react-native'
import obtenirLieuRando from './utils/obtenirLieuRando'
import LieuRandoItem from './lieuRandoItem'
import styles from '../styles/mesStyles'
const {width: screenWidth, height: H} = Dimensions.get('window');
const ViewLieuRandonnee = ({lieuRandonnee, setLieuRandonnee}) => {
  const [lieux, setLieux] = useState([]);
  useEffect(() =>{
    const fetchLieu = async () => {
      const mlieux = await obtenirLieuRando();
      console.log('les lieux :',mlieux)
      setLieux(mlieux);
    }
    fetchLieu();
  },[])
  useEffect(()=>{
    console.log('lieux :',lieux)
  },[])
  return(
    <View style={styles.lrStyle}>
      <FlatList 
          data={lieux}
          renderItem={({item}) => <LieuRandoItem 
                                    lieuRandonnee={lieuRandonnee}
                                    setLieuRandonnee={setLieuRandonnee}
                                    item={item} 
                                    />
          }
          keyExtractor={(item,index) => index.toString()}
          contentContainerStyle ={{flexWrap: 1, paddingVertical:H*0.008}}
          nestedScrollEnabled = {true}
        />
    </View>
  )
}

export default ViewLieuRandonnee
