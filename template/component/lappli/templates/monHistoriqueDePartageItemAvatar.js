import {Text, View,Image } from 'react-native';
import styles from '../styles/mesStyles'
import Contributeurs from './mesContributeurs'
import donnees from '../donnees/mesDonnees'

const lesProfils = ({ contributeur }) => {
      const {nom, avatar} = donnees[contributeur]

      return (
	<View style={styles.historiqueItemContainerAv}>
		<Image source={{ uri : avatar }} style={styles.historiqueItemContainerAvImg}/>
    <Text style={styles.historiqueItemAvText}>@{nom}</Text>
  </View>
       )
}

export default lesProfils;

 
