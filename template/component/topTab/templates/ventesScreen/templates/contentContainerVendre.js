import React from 'react';
import { View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import {Pressable} from 'react-native'
import Couleurs from '../../../../../Constants/Couleurs';
import handleDelete from '../utils/handleDelete';
import styles from '../styles/index'
const ContentContainerVendre = ({ navigation, route, item, array, setListeVente }) => {

  console.log('style veeeendre :',styles)

  return (
    <Pressable onPress={()=>alert(`item ${item.date} pressé`)}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Vente du {item.date}</Text>
        <Text style={styles.subTitle}>pour {item.kiloVendus} kilos</Text>
        
        <Text style={styles.paragraph}>
         à {item.acheteur}
        </Text>
         <View>
          {item.enableDelete ? (<MaterialIcons name="delete"  
                          color={Couleurs.primaryColor_one} 
                          onPress={() => handleDelete(navigation,route,item.id,array,setListeVente) }
                          size={24}
                          />):(<MaterialIcons name="delete"  
                          disabled={true} color={Couleurs.neutralColor_four} size={24}
                          />)
          }
          
         </View>

      </View>
    </Pressable>
  );
};



export default ContentContainerVendre;
