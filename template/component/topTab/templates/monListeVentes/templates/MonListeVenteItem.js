import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,Alert } from 'react-native';

const MonListeVenteItem = ({item}) => {

  console.log('mon item :',item)
  
  const date = new Date(item.dateDeDepart)
  const options ={
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
  const dateDeDepart = date.toLocaleDateString('fr-FR',options)
  return (
    <View style={styles.container}>
     <View style={styles.item}>
       <View>

         <Text style={styles.title}>Client</Text>
         
         <View>
             <Text>
           @{item.nom}
           </Text>
             <Text>
           @{item.prenom}
           </Text>
         </View>


         
         <View style={{marginVertical:"70",flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
           <Text style={{fontWeight:"bold"}}>{dateDeDepart}</Text>
         </View>
         <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Text>{item.nombrePlace}</Text>
            <Text>{item.prix}€</Text>
         </View>
         <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
           <Text>{item.nbPrixEnGros}€</Text>
          <Text>{item.prixEnGros}€</Text>
         </View>
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
           <View style={styles.emb(item.emballageCoffre.sachet == true)}>
             <Text style={styles.embTxt(item.emballageCoffre.doggybag == true)}>
               {item.emballageCoffre.sachet == true ? "SACHET":""}</Text>
           </View>
           <View style={styles.emb(item.emballageCoffre.carton == true)}>
               <Text style={styles.embTxt(item.emballageCoffre.doggybag == true)}>
               {item.emballageCoffre.carton == true ? "CARTON":""}</Text>
           </View>
           <View style={styles.emb(item.emballageCoffre.doggybag == true)}>
             <Text style={styles.embTxt(item.emballageCoffre.doggybag == true)}>
               {item.emballageCoffre.doggybag == true ? "DOGGYBAG":""}
             </Text>
           </View>
         </View>
          <View style={{marginTop:20}}>
            <Text>{item.status}</Text>
          </View>
         <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
           <Pressable style={styles.btnAccepter} onPress={()=>{Alert.alert("accepté")}}>
             <Text style={styles.btnText}>ACCEPTER</Text>
           </Pressable>
           <Pressable style={styles.btnRefuser} onPress={()=>{Alert.alert("refusé")}}>
             <Text style={styles.btnText}>REFUSER</Text>
           </Pressable>
         </View>
       </View>
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  item:{
    width:"80%",
    height:"50%",
    backgroundColor: 'lightgray',
    borderRadius:10,
    padding:10
  },

  emb:(isTrue)=>{return{
    width: 80,
    backgroundColor:isTrue ? "green":"",
    color:isTrue ? "white":"",
    padding:5,
    borderRadius:isTrue ? 15:0,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  }},
  embTxt:(isTrue)=>{return {
    color:isTrue ? "white":"",
    fontWeight:"bold",
  }},

  btnAccepter:{
    borderRadius:20,
    padding:10,
    backgroundColor:"green",
  },
  btnRefuser:{
    borderRadius:20,
    padding:10,
    backgroundColor:"red",
  },
  btnText:{
    color:"white",
    fontWeight:"bold",
  }



});

export default MonListeVenteItem;
