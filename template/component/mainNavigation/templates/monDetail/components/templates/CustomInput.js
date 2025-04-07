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
<<<<<<< HEAD
=======
        
>>>>>>> 3da4c8d (repush)
      />
    </SafeAreaView>
  );
};



export default TextInputExample;