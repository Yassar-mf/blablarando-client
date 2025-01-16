
import { View, Text, StyleSheet} from 'react-native';

const PageIntermediare = ({ utilisateur, loaded }) => {

  return (
    <View style={styles.container}>
      {utilisateur.nom && loaded ?
      (<Text style={styles.message}>Bienvenue {utilisateur.nom}</Text>)
      :(<Text style={styles.message}></Text>)}
      <Text style={styles.message}>connexion dans quelques secondes...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PageIntermediare;