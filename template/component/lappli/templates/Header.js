import {StyleSheet, Text, View, Image} from 'react-native';
import utilisateurs from '../donnees/utilisateurs'
import styles from '../styles/mesStyles'
const HeaderAccueil = ({title, id}) => {
      const {nom, avatar} = utilisateurs[id];
      return (
	<View style={styles.headerContainer}>
		<Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerProfileContainer}>
        <Image style={styles.headerImageProfile} source={{ uri: avatar }}/>
                                <Text style={styles.headerTextProfile}>@{nom}</Text>
      </View>
  </View>
       )
}

export default HeaderAccueil;

 
