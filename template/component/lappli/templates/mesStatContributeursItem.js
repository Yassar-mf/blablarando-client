import {StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native';
import styles from '../styles/mesStyles'


const lesStatContributeurItem = ({ avatar, nom, contribution}) => {
      return (
          <View style={styles.statContributeurItemCont}>
            <View style={styles.statContributeurAVTxT}>
              <Image source={{ uri : avatar }} style={styles.statContributeurImage} />
              <Text style={styles.statContributeurAvText}>@{nom}</Text>
            </View>

            <View style={{...styles.statTxtContrCont,position:'absolute',bottom:0,left:0}}>
              <Text style={styles.statTxtContrTxt}>{contribution}</Text>
            </View>
          </View>
       )
}

export default lesStatContributeurItem;

 
