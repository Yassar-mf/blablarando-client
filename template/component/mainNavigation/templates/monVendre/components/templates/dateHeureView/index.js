// App.js
import React, {useState, useEffect, use} from 'react';
import {StyleSheet, View, Text, Button, Platform} from 'react-native';
import DateView from './dateView'
import styles from './styles'
<<<<<<< HEAD
=======
import gStyles from '../styles/mesStyles'

>>>>>>> 3da4c8d (repush)

const DateViewIndex = ({date, setDate}) => {
  const [mDate, setMDate] = useState(new Date(Date.now()))
  const [mHeure, setMHeure] = useState(new Date(Date.now()))
  const options2 = {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }
  const cDate = date.toLocaleDateString('fr-FR', options2)
  console.log('daaate',date.toLocaleDateString('fr-FR', options2))
  const [isPickerShowDate, setIsPickerShowDate] = useState(false);
  const [isPickerShowTime, setIsPickerShowTime] = useState(false);

  const showPicker = () => {
    console.log('initié') 
    setIsPickerShowDate(true);
    console.log('fini')
<<<<<<< HEAD
    
=======

>>>>>>> 3da4c8d (repush)
  };
  const showPickerTime = () => {
    console.log('initié') 
    setIsPickerShowTime(true);
    console.log('fini')
<<<<<<< HEAD
    
=======

>>>>>>> 3da4c8d (repush)
  };

  const onChange = (event, value) => {
    console.log('initiéééé') 
    setMDate(value||mDate);
    if (Platform.OS === 'android') {
      setIsPickerShowDate(false);
    }
    console.log('fini')
  };
  const onChangeTime = (event, value) => {
    console.log('initiéééé') 
    setMHeure(value||mHeure);
    if (Platform.OS === 'android') {
      setIsPickerShowTime(false);
    }
    console.log('fini')
  };

  useEffect(() => {
    const newDate = new Date(mDate); // Clone mDate
    newDate.setHours(mHeure.getHours(), mHeure.getMinutes(), 0, 0);
    setDate(newDate); // Update the parent date state
  }, [mDate, mHeure]); // Dependencies: both `mDate` and `mHeure`
<<<<<<< HEAD
  
=======

>>>>>>> 3da4c8d (repush)
  return (
     <>
        <DateView styles={styles} date={mDate} 
          showPicker={showPicker} 
          onChange={onChange} 
          isPickerShow={isPickerShowDate}  
          setIsPickerShow={setIsPickerShowDate}
          setDate={setDate}
          mode={"date"}
          titre={"la date"}
          />
        <DateView styles={styles} date={mHeure} 
          showPicker={showPickerTime} 
          onChange={onChangeTime} 
          isPickerShow={isPickerShowTime}  
          setIsPickerShow={setIsPickerShowTime}
          setDate={setDate}
          mode={"time"}
          titre={"l'heure"}
          />
<<<<<<< HEAD
        <Text>date séléctionnée {cDate}</Text>
=======
        <Text style={gStyles.isT}>date séléctionnée {cDate}</Text>
>>>>>>> 3da4c8d (repush)
     </>
  );
};

export default DateViewIndex;