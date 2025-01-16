import {TextInput, View, Text } from 'react-native'


const CustomFiltreAchatItem = ({ setFiltre, filtre, titre}) => {
    return(
        <View>
            <Text>
                {titre}
            </Text>
            <TextInput placeholder={filtre} onChangeText={text => setFiltre(text)}/>
        </View>
    )
}

export default CustomFiltreAchatItem