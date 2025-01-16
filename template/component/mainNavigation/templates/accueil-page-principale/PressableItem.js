
import { View, Text, Image,StyleSheet, Animated, FlatList, Pressable } from 'react-native';

  const renderItem = ({ item,styles}) => {


    return (   
        <Pressable>
            <Image
            source={{ uri: item.photo.secure_url || 'https://via.placeholder.com/150' }}
            style={styles.photo}
          />
          <Text style={styles.title}>{`${item.vendeur.nom} ${item.vendeur.prenom}`}</Text>
          
          <Text style={styles.details}>
    {`Adresse: ${item.vendeur.adresse.rue}`}</Text>
          <Text style={styles.details}>{`Adresse: ${item.vendeur.adresse.ville}`}</Text>
          <Text style={styles.details}>{`Adresse: ${item.vendeur.adresse.etat}`}</Text>
          <Text style={styles.details}>{`Adresse: ${item.vendeur.adresse.codePostal}`}</Text>
          
          <Text style={styles.details}>{`Téléphone: ${item.telephone}`}</Text>
          <Text style={styles.details}>{`Date de départ: ${item.dateDeDepart}`}</Text>
          <Text style={styles.details}>{`Vol: ${item.vol}`}</Text>
          <Text style={styles.details}>{`Kilo vendu: ${item.kiloVendu}`}</Text>
        </Pressable>

    );
  };


export default renderItem;