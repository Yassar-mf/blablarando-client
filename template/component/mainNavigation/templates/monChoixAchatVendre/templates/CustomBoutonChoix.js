import {Pressable, Text, View} from 'react-native'
import handlePress from '../utils/handlePress'
const MonChoixAchatVendre = ({titre, state}) => {

       const {setBarDeReChercheAffichee, navigation, route} = state

       return(
        <View>

            <Pressable onPress={()=> {
            handlePress(titre, 
                        setBarDeReChercheAffichee, navigation, route)}}
                >
                <Text>
                    {titre}
                </Text>
            </Pressable>
        </View>
       )

}

export default MonChoixAchatVendre