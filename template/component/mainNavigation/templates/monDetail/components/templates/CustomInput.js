import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,Text} from 'react-native';

import styles from './styles'

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



export default TextInputExample;