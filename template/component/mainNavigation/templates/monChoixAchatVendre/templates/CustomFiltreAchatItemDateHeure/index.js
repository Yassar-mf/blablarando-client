import { useState, useEffect } from 'react'
import {View, Text, Pressable,Platform } from 'react-native'
import handleSaveDate from '../../utils/handleSaveDate'
import DateView from './dateView'
import styles from './styles'
const CustomFiltreAchatItemDateHeure = ({ setFiltre, filtre, titre}) => {
    const [selectedDate,setSelectedDate] = useState(new Date(Date.now()))
    const [selectedHeure,setSelectedHeure] = useState(new Date(Date.now()))
    const [isPickerShowDate, setIsPickerShowDate] = useState(false);
    const [isPickerShowTime, setIsPickerShowTime] = useState(false);

      const showPicker = () => {
        console.log('initié') 
        setIsPickerShowDate(true);
        console.log('fini')

      };
      const showPickerTime = () => {
        console.log('initié') 
        setIsPickerShowTime(true);
        console.log('fini')

      };

      const onChange = (event, value) => {
        console.log('initiéééé') 
        setSelectedDate(value||selectedDate);
        if (Platform.OS === 'android') {
          setIsPickerShowDate(false);
        }
        console.log('fini')
      };
      const onChangeTime = (event, value) => {
        console.log('initiéééé') 
          setSelectedHeure(value||selectedHeure);
        if (Platform.OS === 'android') {
          setIsPickerShowTime(false);
        }
        console.log('fini')
      };
    
    useEffect(()=>{
        console.log('nouvelle date :',selectedDate)
        handleSaveDate(selectedDate,selectedHeure,setFiltre)
        //const setDate = 
    },[selectedDate,selectedHeure])



    useEffect(()=>{
        console.log('nouvelle heure :',selectedHeure)
    },[selectedHeure])

    useEffect(()=>{
        console.log('nouvelle dateHeure 00 :',filtre)
    },[filtre,selectedDate,selectedHeure])


    return(
        <View>
            <Text>{titre}</Text>
            <View>
                <>
                            <DateView styles={styles} 
                              date={selectedDate} 
                              showPicker={showPicker} 
                              onChange={onChange} 
                              isPickerShow={isPickerShowDate}  
                              setIsPickerShow={setIsPickerShowDate}
                              setDate={setSelectedDate}
                              mode={"date"}
                              titre={"la date"}
                            />

                </>
                <>

                            <DateView styles={styles} 
                              date={selectedHeure} 
                              showPicker={showPickerTime} 
                              onChange={onChangeTime} 
                              isPickerShow={isPickerShowTime}  
                              setIsPickerShow={setIsPickerShowTime}
                              setDate={setSelectedHeure}
                              mode={"time"}
                              titre={"l'heure"}
                            />

                </>
            </View>

        </View>
    )
}

export default CustomFiltreAchatItemDateHeure