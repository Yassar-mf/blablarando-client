import {Pressable,View,Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Couleurs from '../../../../../../Constants/Couleurs'
import handleCreerVente from '../../utils/handleCreerVente'


const MonBoutonVendre = ({data}) => {

  

  const navigation = useNavigation()
  const packages = {sachet:false,carton:false,doggybag:false}
  if(data.selectedButtons["0"] == true){
     packages.sachet=true;
  }
  if(data.selectedButtons["1"] == true){
     packages.carton=true;
  }
  if(data.selectedButtons["2"] == true){
     packages.doggybag=true;
  }

  data.packages = packages

  return(
              <View >
                <Pressable style={{justifyContent:'center',
                alignItems:'center',
                backgroundColor:Couleurs.primaryColor_one,
                paddingVertical:20,
                paddingHorizontal:20
                }} 
                onPress={()=>  handleCreerVente(navigation,data)}>
                  <Text style={{
                    color:Couleurs.neutralColor_one
                  }}>Vendre</Text>
                </Pressable>
              </View>
  )
}

export default MonBoutonVendre;