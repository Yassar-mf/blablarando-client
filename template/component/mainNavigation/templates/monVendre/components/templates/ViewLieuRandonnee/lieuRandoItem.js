import {Text,Image,View,Pressable} from 'react-native';
<<<<<<< HEAD

const lieuRandoItem = ({item,lieuRandonnee,setLieuRandonnee}) => {
  return (
    <Pressable onPress={()=>{setLieuRandonnee(item)}}>
      <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between'}}>
=======
import styles from '../styles/mesStyles'
const lieuRandoItem = ({item,lieuRandonnee,setLieuRandonnee}) => {
  return (
    <Pressable onPress={()=>{setLieuRandonnee(item)}}>
      <View style={styles.lrIStyle}>
>>>>>>> 3da4c8d (repush)
        <Text>{item.nom}</Text>
        <Text>{item.adresse}</Text>
      </View>
    </Pressable>
  )
}

export default lieuRandoItem;
        /*<View>{item.photos.map(itm => <Image source={{uri: itm.secure_url}}/>)}</View>*/