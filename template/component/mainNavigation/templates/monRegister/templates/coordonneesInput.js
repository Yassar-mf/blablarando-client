import {View, Button, Text} from  'react-native'
import MonCustomInput from './CustomInput'
const CoordonneesInput = ({styles,errors,telephone,setTelephone, ville,setVille,rue,setRue,codePostale,setCodePostale,pays,setPays}) => {

  return (
      <View style={styles.container}>

          <MonCustomInput titre={"Telephone"} valeur={telephone} onchange={setTelephone} styles={styles} errors={errors} />
          <MonCustomInput titre={"Ville"} valeur={ville} onchange={setVille} styles={styles} errors={errors} />

          <MonCustomInput titre={"Rue"} valeur={rue} onchange={setRue} styles={styles} errors={errors} />

          <MonCustomInput titre={"Code postale"} valeur={codePostale} onchange={setCodePostale} styles={styles} errors={errors} />

          <MonCustomInput titre={"Pays"} valeur={pays} onchange={setPays} styles={styles} errors={errors} />


      </View>
    );
}
export default CoordonneesInput