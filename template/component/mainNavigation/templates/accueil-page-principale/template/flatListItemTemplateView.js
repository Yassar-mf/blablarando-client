
import { View, Text, Image,StyleSheet, Animated, FlatList, Pressable } from 'react-native';
import transformParamHandler from '../utils/transformParamHandler'
import transformHandler from '../utils/transformHandler'

const flatLisTemplateView = ({ item, index, styles, scrollY, itemHeight, navigation, emailUtilisateur }) => {
  return (
    <Animated.View style={[styles.item, { opacity, transform: [{ scale }] }]}>
      <Pressable 
      onPress={()=>navigation.navigate('Detailles',{data:item,emailUtilisateur:emailUtilisateur})}
      style={{flexDirection:'row'

      }}>
          <Image
          source={require('./4.jpg')}
          style={{ width: 100, height: 100, borderRadius: 50, marginRight:30 }} // Adjust width, height, and borderRadius
        />
        <View>
          <Text style={styles.title}>{`${item.vendeur.nom} ${item.vendeur.prenom}`}</Text>


          <Text style={styles.details}>{`kilo vendus ${item.vente.nombrePlace}`}</Text>


          <Text style={styles.details}>{`prix unitaire: ${item.vente.prix}`}</Text>


          <Text style={styles.details}>{item.vente.nbPrixEnGros ? `offre pour ${item.vente.nbPrixEnGros} kg achetés`:``}</Text>
          <Text style={styles.details}>{item.vente.prixEnGros ? `${item.vente.prixEnGros} €`:``}</Text>


          <Text style={styles.details}>Emballage accepté :</Text>



          <Text style={styles.details}>{ item.vente.emballageCoffre.sachet == true ? `Sachet`:``}</Text>


          <Text style={styles.details}>{ item.vente.emballageCoffre.carton ? `Carton`:``}</Text>


          <Text style={styles.details}>{ item.vente.emballageCoffre.doggybag ? `Doggybag`:``}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}