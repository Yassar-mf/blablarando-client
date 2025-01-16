import regStyle from './monPressableForgotStyle'
import fgtStyle from './monPressableRegisterStyle'
import contStyle from './monMainContainerStyle'
import titleStyle from './monTitleStyle'
import btStyle from './monButtonStyle'
import inpStyle from './monInputStyle'
import optStyle from './monOptionStyles'
import monConnexionText from './monConnexionText'
import monRegisterText from './monRegisterText'
import monForgotText from './monForgotText'
import {StyleSheet} from 'react-native'

const lesStyles = StyleSheet.create({
  regS:regStyle,
  fgtS:fgtStyle,
  contS:contStyle,
  titleS:titleStyle,
  btS:btStyle,
  inpS:inpStyle,
  optS:optStyle,
  coTxt: monConnexionText,
  regTxt:monRegisterText,
  fgTxt:monForgotText
})

export default lesStyles;