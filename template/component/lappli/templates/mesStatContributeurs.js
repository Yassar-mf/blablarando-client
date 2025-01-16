import {StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native';
import styles from '../styles/mesStyles'
import LesStatContributeurItem from './mesStatContributeursItem'
import contributeursStat from '../donnees/contributeursStats'
const lesStatContributeur  = () => {
      return (
          <View style={styles.statContributeur}>
            <FlatList 
                data={contributeursStat}
                renderItem= {( {item} ) => 
                  <LesStatContributeurItem nom={item.nom} avatar={item.avatar} contribution={item.contribution}/>
                
              }
              horizontal={true}            
            />
          </View>
       )
}

export default lesStatContributeur;

 
