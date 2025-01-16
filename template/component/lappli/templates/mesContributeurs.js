import {FlatList,View} from 'react-native';
import styles from '../styles/mesStyles'
import Profil from './mesProfils'
import donnees from '../donnees/mesDonnees'
const lesContributeurs = () => {
      return (
	<FlatList 
		data={donnees}
    renderItem={({ item }) => <Profil name={item.nom} avatar={item.avatar} />}
		keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
/>
       )
}

export default lesContributeurs;

 
