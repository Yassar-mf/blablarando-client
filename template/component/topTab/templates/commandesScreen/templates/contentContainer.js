import React from 'react';
import { View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import {Pressable} from 'react-native'
import Couleurs from '../../../../../Constants/Couleurs';
import handleDelete from '../utils/handleDelete';
import dateChecker from '../utils/dateChecker';

const ContentContainer = ({ navigation, route, styles, item, array, setListeAchat }) => {


  return (
    <Pressable onPress={()=>alert(`item ${item.date} pressé`)}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Achat du {item.date}</Text>
        <Text style={styles.subTitle}>pour {item.kiloAchetes} kilos</Text>
        
        <Text style={styles.paragraph}>
         chez {item.vendeur}
        </Text>
         <View>
          {item.enableDelete ? (<MaterialIcons name="delete"  
                          color={Couleurs.primaryColor_one} 
                          onPress={() => handleDelete(navigation,route,item.id,array,setListeAchat) }
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



export default ContentContainer;
