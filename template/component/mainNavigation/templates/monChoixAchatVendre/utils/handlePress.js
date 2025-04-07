<<<<<<< HEAD
const handlePress = (titre, setBarDeReChercheAffichee, navigation, route) => {

    console.log('rooute params :',route.params)
    
    const email = route.params.monEmail;

    if(titre == "ACHETER"){
        setBarDeReChercheAffichee(true)
    }

    if(titre == "VENDRE"){
        navigation.navigate("Vendre",email)
    }

}

export default handlePress;
=======
import handlePressChoix from './handlePressChoix'
import Animated, { withTiming, Easing } from 'react-native-reanimated';

const handlePress = (x,y, xf, yf,titre, setBarDeReChercheAffichee,navigation,route,handlePressCallback) =>{
  const x0 = 0;
  const y0 = 0;
  const x1 = xf; // Exemple : translation vers la droite de l'écran
  const y1 = yf; // Exemple : translation vers le bas de l'écran

  // Position initiale
  /*if(x.value !== x0 && y.value !== y0){
    x.value = x0;
    y.value = y0;
  }*/

  // Animation
  if(x.value !== xf && y.value !== yf){
    x.value = withTiming(x1, { duration: 300, easing: Easing.linear });
    y.value = withTiming(y1, { duration: 300, easing: Easing.linear });
  }
  setTimeout(()=>{
    handlePressChoix(titre, setBarDeReChercheAffichee, navigation,route,handlePressCallback)},400)

}

export default handlePress
>>>>>>> 3da4c8d (repush)
