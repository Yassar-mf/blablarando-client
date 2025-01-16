import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const listePaiementItem = ({ item, navigation, route }) => {

  return (
    <View>
      <Pressable onPress={()=>{navigation.navigate('Payer',{item})}}>
        <Text>Date de la transaction</Text>
        <Text>
          {item.dateTransaction}
        </Text>
        <Text>Datre de la randonnée</Text>
        <Text>
          {item.dateRandonnee}
        </Text>
        <Text>Places réservé</Text>
        <Text>
          {item.nombrePlace}
        </Text>
        <Text>prix</Text>
        <Text>
          {item.prix}
        </Text>
      </Pressable>
    </View>
  )
}

export default listePaiementItem