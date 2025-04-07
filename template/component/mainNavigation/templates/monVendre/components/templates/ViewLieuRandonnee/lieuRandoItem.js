import {Text,Image,View,Pressable} from 'react-native';
import styles from '../styles/mesStyles'
const lieuRandoItem = ({item,lieuRandonnee,setLieuRandonnee}) => {
  return (
    <Pressable onPress={()=>{setLieuRandonnee(item)}}>
      <View style={styles.lrIStyle}>
        <Text>{item.nom}</Text>
        <Text>{item.adresse}</Text>
      </View>
    </Pressable>
  )
}

export default lieuRandoItem;
        /*<View>{item.photos.map(itm => <Image source={{uri: itm.secure_url}}/>)}</View>*/