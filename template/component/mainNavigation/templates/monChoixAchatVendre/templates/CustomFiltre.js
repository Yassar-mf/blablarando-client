import {useState, useEffect} from 'react'
import {View, ScrollView} from 'react-native'
import MonCustomFiltreAchatItem from './CustomFiltreAchatItem'
import MonCustomFiltreAchatItemDateHeure from './CustomFiltreAchatItemDateHeure'
import BoutonEnvoyer from './BoutonEnvoyer'
const MonCustomFiltreAchat = ({route, navigation}) => {

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
        <View>
            <ScrollView >
                <MonCustomFiltreAchatItem setFiltre={setPlace} filtre={place} titre={"nombre de places minimum"} />
                <MonCustomFiltreAchatItem setFiltre={setPrixMax} filtre={prixMax} titre={"Prix max"} />
                <MonCustomFiltreAchatItemDateHeure setFiltre={setDateHeure} filtre={dateHeure} titre={"Date & heure"} />
            </ScrollView>
            <BoutonEnvoyer kilo={place} prixMax={prixMax} dateHeure={dateHeure} navigation={navigation}/>
        </View>
    )

}

export default MonCustomFiltreAchat