import {View,Text, TextInput} from 'react-native'
import styles from './styles/mesStyles'
const monCustomTextInput = ({titre, valeur, state,setValeur}) => {
     const val = state.val ? state.val : ""
     console.log('vvvvv :', valeur)
     return(
       <View>

        <Text style={styles.isT}>{titre}</Text>
        <TextInput style={styles.inpS} value={valeur ? valeur : ""} 
                   onChangeText={setValeur}

                   keyboardType={state.type} 
                   />
       </View>
     )

}



export default monCustomTextInput;