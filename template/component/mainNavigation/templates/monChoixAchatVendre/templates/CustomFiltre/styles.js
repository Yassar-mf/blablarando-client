import {StyleSheet, Dimensions} from 'react-native'
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

const styles = StyleSheet.create({

  cfCont :{

    height: HEIGHT*0.7,
    paddingHorizontal: WIDTH*0.05

  }


})

export default styles;