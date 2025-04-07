// App.js
import React, { useState } from 'react';

import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import MDATA from './donnees';  // Importation du tableau DATA depuis data.js
import ButtonItem from './renderItem';  // Importation du composant ButtonItem
import Couleurs from '../../../Constants/Couleurs'

const { width, height } = Dimensions.get('window');

const DATA = [...MDATA];

const App = ({selectedButtons, setSelectedButtons}) => {

  const toggleSelection = (item,index) => {
    setSelectedButtons((prevSelected) => ({
      ...prevSelected,
      [index]: !prevSelected[index],
    }));
  };

  // renderItem passe à ButtonItem, avec les props nécessaires
  const renderItem = ( item, index ) => {
    const isSelected = !!selectedButtons[index];
    return (
      <ButtonItem
        item={item}
        index={index}
        isSelected={isSelected}
        toggleSelection={toggleSelection}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item, index})=> renderItem(item,index) }
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}  // Définit 3 colonnes
        columnWrapperStyle={styles.row}  // Applique le style de la ligne pour les colonnes
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    height:height*0.08,    
    paddingVertical: height*0.003,

    backgroundColor: Couleurs.neutralColor_one,
  },
  flatListContent: {
    justifyContent: 'center',
    paddingHorizontal: width*0.003,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default App;
