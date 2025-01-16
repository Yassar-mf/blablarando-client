import {StyleSheet, Text, View, Image} from 'react-native';
import styles from '../styles/mesStyles'
import Contributeurs from './mesContributeurs'
import donnees from '../donnees/mesDonnees'
const lesProfils = ({ name, avatar}) => {
      return (
	<View style={styles.profilContributeurContainer}>
		<View style={styles.profilContributeurBordureAvatar}>
			<Image source={{ uri : avatar }} style={styles.profilContibuteurImageAvatar} />
    </View>
		<Text style={styles.profilContributeurNom}>@{name}</Text>
</View>
       )
}

export default lesProfils;

 
