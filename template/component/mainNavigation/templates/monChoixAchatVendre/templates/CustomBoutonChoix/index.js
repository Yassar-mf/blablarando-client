import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import handlePress from '../../utils/handlePress';
import D from '../../Constants/Dimensions'
import CustomBoutonChoixItem from './CustomBoutonChoixItem'
import styles from './styles'

const MonCustomBoutonChoix = ({setBarDeReChercheAffichee, xA,yA,xV,yV, navigation, route, handlePressCallback}) => {


  const animatedStylesA = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: xA.value }, { translateY: yA.value }],
    };
  });
  const animatedStylesV = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: xV.value }, { translateY: yV.value }],
    };
  });

  const handlePressGlobal = (titre) => {

    //bouger le bouton ACHETER
    handlePress(xA,yA,D.xfA,D.yfA,titre,setBarDeReChercheAffichee,navigation,route,handlePressCallback)
    //Bouger le bouton VENDRE
    handlePress(xV,yV,D.xfV,D.yfV,titre,setBarDeReChercheAffichee,navigation,route,handlePressCallback)
  }


  return (
    <View style={styles.containerBoutonChoix}>

      <CustomBoutonChoixItem 
        animatedStyles={animatedStylesA} 
        styles={styles}
        handlePress={()=>handlePressGlobal("RESERVER PLACE(S)")}
        name="user"
        setBarDeReChercheAffichee={setBarDeReChercheAffichee}
        titre="RESERVER PLACE(S)"
        />
      <CustomBoutonChoixItem 
        animatedStyles={animatedStylesV} 
        styles={styles}
        handlePress={()=>handlePressGlobal("PROPOSER PLACE(S)")}
        name="car"
        setBarDeReChercheAffichee={setBarDeReChercheAffichee}
        titre="PROPOSER PLACE(S)"
        />

      
    </View>
    
  );
};



export default MonCustomBoutonChoix;