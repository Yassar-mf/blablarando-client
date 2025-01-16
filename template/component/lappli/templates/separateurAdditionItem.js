import {StyleSheet, Text, View, Pressable} from 'react-native';
import styles from '../styles/mesStyles'
import Contributeurs from './mesContributeurs'
const leSeparateurAdditionItem = ({title, montant}) => {
      return (
	<View style = {{flexDirection:'row',height:300}}>
	      <View style={styles.sepItemContainer}>
          <Text style={styles.sepItemDesc}>Montant</Text>
            <View>
              <Text style={styles.sepItemMontant}>{montant} €</Text>
              <Pressable style={styles.sepItemPressable} >
                  <Text style={styles.sepItemPressableText} >Séparer</Text>
              </Pressable>
            </View>
          </View>
        <View style={styles.listSepContributeurs}>
          <Contributeurs />
        </View>
  </View>
       )
}

export default leSeparateurAdditionItem;

 
