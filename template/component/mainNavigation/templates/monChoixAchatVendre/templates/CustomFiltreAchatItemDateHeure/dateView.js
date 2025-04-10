// App.js
import React, {useState} from 'react';

import {StyleSheet, View, Text, Pressable, Platform} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

const DateView = ({styles,date, showPicker, 
                     onChange, 
                     isPickerShow,
                     mode,titre}) => {

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

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={styles.btnContainer}>
          <Pressable  style={styles.btnItem} onPress={()=>{
            console.log('youhou on affiche la:',titre)
            showPicker();
          }}>
            <Text>Selectionner {titre}</Text>
          </Pressable>
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