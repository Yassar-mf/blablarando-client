import {StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import styles from '../styles/mesStyles'
import historiqueData from '../donnees/historiqueData'
import HistoriqueItemAv from './monHistoriqueDePartageItemAvatar'
const lesProfils = ({ montant, contributeurs, date }) => {
  const myC = contributeurs.length > 0 ? contributeurs : []
      return (
	<View style={styles.historiqueItemContainer}>
		<Text>{montant} €</Text>
		<Text>{date}</Text>
		<View style={styles.historiqueItemContainerFL}>
        <FlatList 
          data={myC}
          renderItem={ ({ item }) => <HistoriqueItemAv contributeur={item} />}
          keyExtractor = { item => myC.indexOf(item) }
          vertical={true}
          numColumns={3}
          
        />
        </View>
    </View>
       )
}

export default lesProfils;

 
