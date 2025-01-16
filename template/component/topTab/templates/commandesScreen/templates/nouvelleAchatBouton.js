import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const NouvelleAchatBouton = ({ route, navigation }) => {
    console.log('params ttt ::::', route.params)
  //const email = typeof route.params.monEmail == 'undefined' ? route.params.monEmail : "utilisateur@example.com"
  const email = "utilisateur@example.com"
  return (
    <View>
    <TouchableOpacity onPress={()=>navigation.navigate('Principal')}>
      <View>
        <Text>Nouvelle achat</Text>
      </View>
    </TouchableOpacity>
  </View>

  )
}

export default NouvelleAchatBouton;

const styles = StyleSheet.create({})