import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './stylesPageVide'
const PageVide = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Aucune donnée disponible</Text>
            <Text style={styles.message}>Aucun élément à afficher dans cette liste.</Text>
            <Button title="CREER RANDO" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};


export default PageVide;