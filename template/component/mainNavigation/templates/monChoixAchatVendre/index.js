
import React,{useState, useEffect, useCallback} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import {View, Dimensions} from 'react-native'
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import ChoixAchatVente from './templates/CustomBoutonChoix'
import CustomFiltre from './templates/CustomFiltre'
import MessageVide from './templates/AfficherMessageVide'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const MonChoixAchatVendre = ({  navigation, route }) => {

   console.log('navigation :',navigation)
   console.log('route :',route)
   
   
   const [barDeReChercheAffichee,setBarDeReChercheAffichee] = useState(false)

   const [showMessageVide,
      setShowMessageVide]
     = useState(false)

   const [listeFiltree,setListeFiltree] = useState(null)

     const xA = useSharedValue(0);
     const yA = useSharedValue(0);
     const xV = useSharedValue(0);
     const yV = useSharedValue(0);


   useEffect(()=>{

     const init =  () =>{ 
         xA.value = 0;
         yA.value = 0;
         xV.value = 0;
         yV.value = 0;

          
       
     }
     init()
   },[])

    useEffect(()=>{
      console.log('barDeReChercheAffichee a changé ! nouvelle valeur =',barDeReChercheAffichee)
    },[barDeReChercheAffichee])
   

    const handlePressCallback = useCallback((titre) => {
        console.log('Callback appelé avec titre:', titre);
        setBarDeReChercheAffichee((prev) => {
            console.log('Ancienne valeur:', prev);
            return true;
        });
    }, [setBarDeReChercheAffichee]);
   
  
       return(
        <View>
           <ChoixAchatVente 
             setBarDeReChercheAffichee={setBarDeReChercheAffichee}
             xA= {xA}
             yA= {yA}
             xV= {xV}
             yV= {yV}
             navigation={navigation}
             route={route}
             handlePressCallback={handlePressCallback}
             />
           <View style={{width: WIDTH,height: HEIGHT *0.1}}/>
         <View>
           {barDeReChercheAffichee && <CustomFiltre route={route} 
                                        navigation={navigation} listeFiltree={listeFiltree} 
                                        setListeFiltree={setListeFiltree}
                                        setShowMessageVide={setShowMessageVide}/>}
         </View>
         <MessageVide 
            showMessageVide={showMessageVide} 
            setShowMessageVide={setShowMessageVide}
            listeFiltree={listeFiltree}
            navigation={navigation}
            />
        </View>

       )

}

export default MonChoixAchatVendre