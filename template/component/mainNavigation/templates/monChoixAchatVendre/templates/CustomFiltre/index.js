import {useState, useEffect} from 'react'
import {View, ScrollView} from 'react-native'
import MonCustomFiltreAchatItem from './CustomFiltreAchatItem'
import MonCustomFiltreAchatItemDateHeure from '../CustomFiltreAchatItemDateHeure'
import BoutonEnvoyer from '../BoutonEnvoyer'
import styles from './styles'

const MonCustomFiltreAchat = ({route, navigation,listeFiltree, setListeFiltree,setShowMessageVide}) => {

    const [place, setPlace] = useState(0)
    const [prixMax, setPrixMax]= useState(0)
    const [dateHeure, setDateHeure] = useState(new Date())

    useEffect( () => {
        console.log('nouvelle valeur de kilo :',place)
    },[place])
    useEffect( () => {
        console.log('nouvelle valeur de prixMax :',prixMax)
    },[prixMax])
    useEffect( () => {
        console.log('nouvelle valeur de dateHeure :'
                    ,dateHeure
                    .toString())
    },[dateHeure])

    return (
        <View style={styles.cfCont}>
            <ScrollView scrollEnabled={true}>
                <MonCustomFiltreAchatItem setFiltre={setPlace} filtre={place} titre={"Nombre de places minimum"} />
                <MonCustomFiltreAchatItem setFiltre={setPrixMax} filtre={prixMax} titre={"Prix max"} />
                <MonCustomFiltreAchatItemDateHeure setFiltre={setDateHeure} filtre={dateHeure} titre={"Date & heure"} />
            </ScrollView>
            <BoutonEnvoyer kilo={place} prixMax={prixMax} dateHeure={dateHeure} navigation={navigation} listeFiltree={listeFiltree} 
                setListeFiltree={setListeFiltree} 
                setShowMessageVide={setShowMessageVide}/>
        </View>
    )

}

export default MonCustomFiltreAchat