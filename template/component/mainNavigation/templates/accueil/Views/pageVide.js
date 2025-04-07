import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './stylesPageVide'
const PageVide = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={{}} style={{width: '100%'}}/>
            <Text style={styles.header}>Aucune donnée disponible</Text>
            <Text style={styles.message}>Aucun élément à afficher dans cette liste.</Text>
            <Button title="CREER RANDO" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};


export default PageVide;