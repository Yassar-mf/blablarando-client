// ButtonItem.js
import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import Couleurs from '../../../../../../../Constants/Couleurs'

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
    margin: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Couleurs.neutralColor_one,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  label: {
    fontSize: 16,
  },
});

export default ButtonItem;
