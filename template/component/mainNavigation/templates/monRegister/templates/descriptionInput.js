import {View, Button, Text} from  'react-native'
import MonCustomInput from './CustomInput'
const listeCustomInput = ({styles,errors,description,setDescription}) => {
  return (
      <>
          <MonCustomInput titre={"Description"} valeur={description} onchange={setDescription} styles={styles} errors={errors} />
          

      </>
    );
}
export default listeCustomInput