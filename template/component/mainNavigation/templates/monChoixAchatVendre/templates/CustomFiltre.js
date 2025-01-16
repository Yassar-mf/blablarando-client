import {useState, useEffect} from 'react'
import {View, ScrollView} from 'react-native'
import MonCustomFiltreAchatItem from './CustomFiltreAchatItem'
import MonCustomFiltreAchatItemDateHeure from './CustomFiltreAchatItemDateHeure'
import BoutonEnvoyer from './BoutonEnvoyer'
const MonCustomFiltreAchat = ({route, navigation}) => {

    const [kilo, setKilo] = useState(0)
    const [prixMax, setPrixMax]= useState(0)
    const [dateHeure, setDateHeure] = useState(new Date())

    useEffect( () => {
        console.log('nouvelle valeur de kilo :',kilo)
    },[kilo])
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
                <MonCustomFiltreAchatItem setFiltre={setKilo} filtre={kilo} titre={"kilo"} />
                <MonCustomFiltreAchatItem setFiltre={setPrixMax} filtre={prixMax} titre={"Prix max"} />
                <MonCustomFiltreAchatItemDateHeure setFiltre={setDateHeure} filtre={dateHeure} titre={"Date & heure"} />
            </ScrollView>
            <BoutonEnvoyer kilo={kilo} prixMax={prixMax} dateHeure={dateHeure} navigation={navigation}/>
        </View>
    )

}

export default MonCustomFiltreAchat