// ButtonItem.js
import React from 'react';
<<<<<<< HEAD
import { Text, Pressable, StyleSheet } from 'react-native';
import Couleurs from '../../../../../../../Constants/Couleurs'
=======
import { Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import Couleurs from '../../../Constants/Couleurs'

const { width, height } = Dimensions.get('window');
>>>>>>> 3da4c8d (repush)

const ButtonItem = ({ item, index, isSelected, toggleSelection }) => {


  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: isSelected ? Couleurs.primaryColor_three : Couleurs.neutralColor_three,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
      onPress={() => toggleSelection(item.titre,index)}
    >
      <Text style={[styles.label, { color: isSelected ? Couleurs.neutralColor_one : Couleurs.textColorB }]}>
        {isSelected ? item.titre : item.titre}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
<<<<<<< HEAD
    margin: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
=======
    margin: width*0.005,
    paddingVertical: height*0.02,
    paddingHorizontal: width*0.01,
    borderRadius: width*0.01,
>>>>>>> 3da4c8d (repush)
    borderWidth: 1,
    borderColor: Couleurs.neutralColor_one,
    alignItems: 'center',
    justifyContent: 'center',
<<<<<<< HEAD
    minWidth: 100,
=======
    minWidth: width*0.3,
>>>>>>> 3da4c8d (repush)
  },
  label: {
    fontSize: 16,
  },
});

export default ButtonItem;
