import {Pressable, Text, View} from 'react-native'
import handlePress from '../utils/handlePress'
import Couleurs from '../../../../../Constants/Couleurs'
import Dim from '../../../../../Constants/Dimensions'

const MonChoixAchatVendre = ({titre, state}) => {

       const {setBarDeReChercheAffichee, navigation, route} = state

       return(
        <View>

            <Pressable onPress={()=> {
            handlePress(titre, 
                        setBarDeReChercheAffichee, navigation, route)}}
                >
                <View style={{backgroundColor: Couleurs.secondaryColor_one, 
                              height:Dim.itemHeight*0.2, width:Dim.itemWidth*0.5,
                              borderRadius:Dim.borderRadius,
                              padding:Dim.itemHeight*0.03,
                              justifyContent:'center',
                              alignItems:'center',
                             }}>
                    <Text style={{color:"#000"}}>
                        {titre}
                    </Text>
                </View>
            </Pressable>
        </View>
       )

}

export default MonChoixAchatVendre