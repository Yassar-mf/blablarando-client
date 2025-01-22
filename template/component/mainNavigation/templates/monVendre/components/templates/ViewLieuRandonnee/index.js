import {useState, useEffect} from 'react';
import {FlatList,View} from 'react-native'
import obtenirLieuRando from './utils/obtenirLieuRando'
import LieuRandoItem from './lieuRandoItem'
const ViewLieuRandonnee = ({lieuRandonnee, setLieuRandonnee}) => {
  const [lieux, setLieux] = useState([]);
  useEffect(() =>{
    const fetchLieu = async () => {
      const mlieux = await obtenirLieuRando();
      setLieux(mlieux);
    }
    fetchLieu();
  },[])
  useEffect(()=>{
    console.log('lieux :',lieux)
  },[])
  return(
    <View style={{height:'11%',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingVertical:8,backgroundColor:'blue'}}>
      <FlatList 
          data={lieux}
          renderItem={({item}) => <LieuRandoItem 
                                    lieuRandonnee={lieuRandonnee}
                                    setLieuRandonnee={setLieuRandonnee}
                                    item={item} 
                                    />
          }
          keyExtractor={(item) => item.id}
        contentContainerStyle={{flexWrap: 1, paddinVertical:10}}
        />
    </View>
  )
}

export default ViewLieuRandonnee
