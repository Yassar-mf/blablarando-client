// ButtonItem.js
import React from 'react';
import { Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import Couleurs from '../../../Constants/Couleurs'

const { width, height } = Dimensions.get('window');
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

    margin: width*0.005,
    paddingVertical: height*0.02,
    paddingHorizontal: width*0.01,
    borderRadius: width*0.01,
    borderWidth: 1,
    borderColor: Couleurs.neutralColor_one,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: width*0.3,
  },
  label: {
    fontSize: 16,
  },
});

export default ButtonItem;
