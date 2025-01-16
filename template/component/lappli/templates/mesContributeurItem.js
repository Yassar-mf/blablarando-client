import {StyleSheet, View, Pressable, FlatList,Image, Text } from 'react-native';
import styles from '../styles/mesStyles'
import Contributeurs from './mesContributeurs'
import donnees from '../donnees/mesDonnees'

const lesContributeurItem = ({ avatar, nom, contribution}) => {
      return (
        <View>
          <Image source={{ uri : avatar }} style={styles.listContributeurImage} />
          <Text style={styles.listContributeurText}>{nom}</Text>
        </View>
      )
}

/**
 <View style={styles.listContributeurContainer}>
<Image source={{ uri : avatar }} style={styles.listContributeurImage}>

</View> 
 */

export default lesContributeurItem;

 
