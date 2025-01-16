import {Text,Image,View,Pressable} from 'react-native';

const lieuRandoItem = ({item,lieuRandonnee,setLieuRandonnee}) => {
  return (
    <Pressable onPress={()=>{setLieuRandonnee(item)}}>
      <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between'}}>
        <Text>{item.nom}</Text>
        <Text>{item.adresse}</Text>
      </View>
    </Pressable>
  )
}

export default lieuRandoItem;
        /*<View>{item.photos.map(itm => <Image source={{uri: itm.secure_url}}/>)}</View>*/