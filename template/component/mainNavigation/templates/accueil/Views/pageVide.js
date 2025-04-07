import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './stylesPageVide'
const PageVide = ({ navigation, isLoaded, chargement}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../../../assets/imgRando.jpg')} style={{width: '100%', height:'35%'}}/>
            {chargement == true && isLoaded == false ? (<View>
                <Text style={styles.header}>Patientez un instant...</Text>
            </View>)
            : chargement == true ? (<>
                <Text style={styles.header}>Aucune donnée disponible</Text>
                <Text style={styles.message}>Aucun élément à afficher dans cette liste.</Text>
                <Button title="CREER RANDO" onPress={() => navigation.navigate('Login')} />
            </>):<></>
            }
        </View>
    );
};


export default PageVide;