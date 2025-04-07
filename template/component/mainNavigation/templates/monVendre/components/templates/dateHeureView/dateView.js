// App.js
import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Platform} from 'react-native';

import Couleurs from '../../../Constants/Couleurs';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateView = ({styles,date, showPicker, 
                     onChange, 
                     isPickerShow,
                     setIsPickerShow,
                     setDate,mode,titre}) => {

  const options2 = {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }
  const options = {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',

  }


  return (
    <View style={styles.container}>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{mode != "time" ? date.toLocaleDateString('fr-FR', options) :
        date.toLocaleDateString('fr-FR', options2).split(' ')[5]}
        </Text>
      </View>


      {!isPickerShow && (
        <View style={styles.btnContainer}>
          <Button title={`Selectionner ${titre}`} color={Couleurs.accentColor} onPress={()=>showPicker()} />

        </View>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={mode}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

export default DateView;