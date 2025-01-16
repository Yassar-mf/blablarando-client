import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,Text} from 'react-native';

import Couleurs from '../../../../../../Constants/Couleurs'

const TextInputExample = ({text, onChangeText}) => {

  
  

  return (
    <SafeAreaView>
    <Text>Places souhaitées</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        keyboardType="numeric"
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;