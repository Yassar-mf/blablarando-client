import { useState, useEffect } from 'react'
import {View, Text, Pressable } from 'react-native'
import DateTimePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import handleDateChange from '../utils/handleDateChange'
import handleHeureChange from '../utils/handleTimeChange'
import handleSaveDate from '../utils/handleSaveDate'
const CustomFiltreAchatItemDateHeure = ({ setFiltre, filtre, titre}) => {
    const [selectedDate,setSelectedDate] = useState(new Date())
    const [selectedHeure,setSelectedHeure] = useState(new Date())

    useEffect(()=>{
        console.log('nouvelle date :',selectedDate)
        //const setDate = 
    },[selectedDate])



    useEffect(()=>{
        console.log('nouvelle heure :',selectedHeure)
    },[selectedHeure])

    useEffect(()=>{
        console.log('nouvelle dateHeure 00 :',filtre)
    },[filtre])


    return(
        <View>
            <Text>{titre}</Text>
            <View>
                <View>
                    <DateTimePicker
                        selected={selectedDate}
                        onChange={(date) => {
                                setSelectedDate(date)
                                handleSaveDate(date,selectedHeure,setFiltre)
                            }
                        }
                        dateFormat="dd/MM/yyyy"
                    />
                </View>
                <View>
                    <DateTimePicker
                        selected={selectedHeure}
                        onChange={(time) => {
                                const heureMinute = new Date()
                                heureMinute.setHours(time.getHours())
                                heureMinute.setMinutes(time.getMinutes())
                                setSelectedHeure(heureMinute);
                                handleSaveDate(selectedDate,heureMinute,setFiltre)
                            }
                        }
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="HH:mm"
                    />
                </View>
            </View>

        </View>
    )
}

export default CustomFiltreAchatItemDateHeure