import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const NouvelleVenteBouton = ({ route, navigation }) => {
    console.log('params ttt ::::', route.params)
  //const email = typeof route.params.monEmail == 'undefined' ? route.params.monEmail : "utilisateur@example.com"
  const email = "utilisateur@example.com"
  return (
    <View>
    <TouchableOpacity onPress={()=>navigation.navigate('Vendre',email)}>
      <View>
        <Text>Nouvelle vente</Text>
      </View>
    </TouchableOpacity>
  </View>

  )
}

export default NouvelleVenteBouton;

const styles = StyleSheet.create({})