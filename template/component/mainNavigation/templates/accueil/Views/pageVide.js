import React from 'react';
<<<<<<< HEAD
import { View, Text, Button } from 'react-native';
=======
import { View, Text, Button, Image } from 'react-native';
>>>>>>> 3da4c8d (repush)
import styles from './stylesPageVide'
const PageVide = ({ navigation }) => {
    return (
        <View style={styles.container}>
<<<<<<< HEAD
=======
            <Image source={{}} style={{width: '100%'}}/>
>>>>>>> 3da4c8d (repush)
            <Text style={styles.header}>Aucune donnée disponible</Text>
            <Text style={styles.message}>Aucun élément à afficher dans cette liste.</Text>
            <Button title="CREER RANDO" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};


export default PageVide;