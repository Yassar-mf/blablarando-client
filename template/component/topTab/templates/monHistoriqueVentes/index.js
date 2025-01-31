import {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native'
import liste from './utils/obtenirListeVentes'
import MonItem from './templates/MonListeVenteItem'

const MonListeVente = ({navigation, route, routeN}) => {
  const [historiqueVente, setHistoriqueVente] = useState([])

  
  useEffect(()=> {

    const fetchListe = async () => {
      const historique = await liste(routeN.monEmail)
      console.log('historique :',historique.historiqueVente.length)
      setHistoriqueVente(historique.historiqueVente)
    }
    fetchListe()
  },[])
  
  return (
    <FlatList 
      data={historiqueVente}
      renderItem={({item}) => <MonItem item={item} navigation={navigation} route={route}/>}
      keyExtractor={(item,index)=>(index).toString()}
      />
  )
  
}

export default MonListeVente;


