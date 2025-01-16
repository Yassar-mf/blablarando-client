import {TextInput, View, Text} from 'react-native'

const monCustomInput = ({titre, valeur, onchange, styles, errors}) => {

  // Détection du type d'erreur associé au champ (basé sur le titre)
  const errorKey = titre.includes("passe") ? "password" : titre.includes("mail") ? "email" : "username";
 
  return(
    <View>
      <Text>{titre}</Text>
      {titre.includes("passe") ? (
        <TextInput
          style={styles.input}
          onChangeText={onchange}
          value={valeur}
          secureTextEntry
        />
      ) : titre.includes("mail") ? (
        <TextInput
          style={styles.input}
          onChangeText={onchange}
          value={valeur}
          keyboardType="email-address"
        />
      ) : (
        <TextInput
          style={styles.input}
          onChangeText={onchange}
          value={valeur}
        />
      )}
      {/* Affichage de l'erreur si elle existe */}
      {errors[errorKey] && <Text style={styles.errorText}>{errors[errorKey]}</Text>}
    </View>
  )
}

export default monCustomInput;

