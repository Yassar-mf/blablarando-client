import {TextInput,View} from 'react-native'

const DateView = ({date, setDate}) => {

  return (
    <View><TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
      }}
      onChangeText={(text) => setDate(text)}
      value={date}
    />
    </View>
  )
  
}

export default DateView;