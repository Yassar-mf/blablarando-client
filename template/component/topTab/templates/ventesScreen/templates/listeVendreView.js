import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContentContainerVendre from './contentContainerVendre'

const ListeVendreView = ({ listeVente, navigation, route, styles, array, setListeVente}) => {
  return (
    <View>
    {listeVente.length > 0 ? (listeVente.map((item,index) => {
        return (<ContentContainerVendre
          key={index} 
          navigation={navigation} route={route} styles={styles} item={item} array={listeVente} setListeVente={setListeVente}/>)
      })
    ):(
      <View><Text>Pas de ventes </Text></View>
    )}</View>
  )
}


const styles = StyleSheet.create({})

export default ListeVendreView