import {View, Button, ScrollView,Text,Dimensions} from  'react-native'
import MonCustomInput from './CustomInput'
import MonDescriptionInputGenre from './descriptionInputGenre'
import MonCoordonneesInput from './coordonneesInput'
import handleSubmit from '../utils/handleSubmit'
const {height} = Dimensions.get('window').height;

const mHeight = height*0.95;
const listeCustomInput = ({styles,prenom, nom, setPrenom,errors, setNom,email,setEmail,motdepasse,setMotdepasse,setErrors, postInscription,validate,setMessageServeur,messageServeur,selectedGenre,setSelectedGenre,description,setDescription,ville,setVille,rue,setRue,codePostale,setCodePostale,telephone,setTelephone,pays,setPays}) => {
  return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
          <MonCustomInput titre={"Prénom"} 
              valeur={prenom} 
              onchange={setPrenom} 
              styles={styles} errors={errors} />

          <MonCustomInput titre={"Nom"} 
              valeur={nom} 
              onchange={setNom} 
              styles={styles} errors={errors} />

          <MonCustomInput titre={"Adresse e-mail"} 
              valeur={email} 
              onchange={setEmail} 
              styles={styles} errors={errors} />

          <MonCustomInput titre={"mot de passe"} 
              valeur={motdepasse} 
              onchange={setMotdepasse} 
              styles={styles} errors={errors} />

          <MonDescriptionInputGenre 
              selectedValue={selectedGenre} 
              setSelectedValue={setSelectedGenre}/>
          
            <MonCustomInput titre={"Description"} 
                valeur={description} 
                onchange={setDescription} 
                styles={styles} errors={errors} />
          
          <MonCoordonneesInput 
              telephone={telephone} 
              setTelephone={setTelephone}
              ville={ville}
              setVille={setVille}
              rue={rue}
              setRue={setRue}
              codePostale={codePostale}
              setCodePostale={setCodePostale}
              pays={pays}
              setPays={setPays}
              styles={styles}
              errors={errors}
              setErrors={setErrors}
              />
          <Button onPress={() => 
          handleSubmit({prenom, nom, email, motdepasse, selectedGenre,description, ville,rue, codePostale,telephone,setTelephone,pays}, 
                       setErrors,
                       postInscription, 
                       validate,setMessageServeur)} 
              title="S'inscrire" />

          <Text style={{color:"red"}}>{messageServeur}</Text>
      </ScrollView>

      </View>
    );
}
export default listeCustomInput