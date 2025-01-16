import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InputGenre = ({selectedValue, setSelectedValue}) => {


  const handlePress = (value) => {
    setSelectedValue(value);
  };

  const opt1 = "Homme"
  const opt2 = "Femme"
  const opt3 = "Autres"
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez une option :</Text>
      <View style={styles.buttonContainer}>
        {/* Bouton 1 */}
        <TouchableOpacity
          style={[
            styles.button,
            selectedValue === opt1 && styles.selectedButton,
          ]}
          onPress={() => handlePress(opt1)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedValue === opt1 && styles.selectedButtonText,
            ]}
          >
            {opt1}
          </Text>
        </TouchableOpacity>

        {/* Bouton 2 */}
        <TouchableOpacity
          style={[
            styles.button,
            selectedValue === opt2 && styles.selectedButton,
          ]}
          onPress={() => handlePress(opt2)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedValue === opt2 && styles.selectedButtonText,
            ]}
          >
            {opt2}
          </Text>
        </TouchableOpacity>
        
        {/* Bouton 3 */}
        <TouchableOpacity
          style={[
            styles.button,
            selectedValue === opt3 && styles.selectedButton,
          ]}
          onPress={() => handlePress(opt3)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedValue === opt3 && styles.selectedButtonText,
            ]}
          >
            {opt3}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Affichage de la valeur sélectionnée */}
      <Text style={styles.selectedText}>
        Valeur sélectionnée : {selectedValue || 'Aucune'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  selectedButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  selectedButtonText: {
    fontWeight: 'bold',
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default InputGenre;