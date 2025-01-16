import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import handlePress from './utils/handlePress';
const Payer = ({navigation, route}) => {
  const commande = route.params.item;
  return (
    <View style={styles.container}>
      <Text>Procéder au paiement</Text>
      <Button title="PAYER" onPress={()=>handlePress(commande)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Payer;
