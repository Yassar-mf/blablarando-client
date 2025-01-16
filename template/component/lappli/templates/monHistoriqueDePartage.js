import MonHistoriqueDePartageItem from './monHistoriqueDePartageItem'
import {View,FlatList} from 'react-native'
import styles from '../styles/mesStyles'
import historiqueData from '../donnees/historiqueData'
const monHistoriqueDePartage = () => {

     return (
       <View style={styles.historiquedePartageContainerStyle}>
          <FlatList 
            data={historiqueData} 
            renderItem={( {item} )=>
            <MonHistoriqueDePartageItem montant={item.montant} date={item.date} contributeurs={item.contributeurs}/>}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor = {item => item.id}/>
        </View>)

}

export default monHistoriqueDePartage