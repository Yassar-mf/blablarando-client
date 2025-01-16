import {View,Text, TextInput} from 'react-native'

const monCustomTextInput = ({titre, valeur, state,setValeur}) => {
     const val = state.val ? state.val : ""
     console.log('vvvvv :', valeur)
     return(
       <View>
        <Text>{titre}</Text>
        <TextInput style={{borderColor:"blue"}} value={valeur ? valeur : ""} 
                   onChangeText={setValeur}
                   
                   keyboardType={state.type} 
                   />
       </View>
     )

}

export default monCustomTextInput;