import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContentContainer from './contentContainer'

const ListeAchatView = ({ listeAchat, navigation, route, styles, array, setListeAchat}) => {
  return (
    <View>
           {listeAchat.length > 0 ? (listeAchat.map((item,index) => {
          return (<ContentContainer 
              key={index} 
              navigation={navigation} route={route} styles={styles} item={item} array={array} setListeAchat={setListeAchat}/>)
        })):(
          <View><Text>Pas de kilos achetés</Text></View>
        )}
    </View>
  )
}


const styles = StyleSheet.create({})

export default ListeAchatView