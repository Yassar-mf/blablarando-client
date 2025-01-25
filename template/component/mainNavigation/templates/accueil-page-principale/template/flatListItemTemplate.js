
import React, { useEffect, useState } from 'react';
import { View, Text, Image,StyleSheet, Animated, FlatList, Pressable } from 'react-native';
import transformParamHandler from '../utils/transformParamHandler'
import transformHandler from '../utils/transformHandler'
import obtenirPhoto from '../utils/obtenirPhoto'
import MonCarousel from './MonCarousel'
import Description from './FLITdesc'
//vendeurDonnees

const RenderItem = ({ item, index, scrollY, styles, itemHeight, navigation, emailUtilisateur, activeCarousel, setActiveCarousel}) => {



    let inputRange = transformParamHandler(index,itemHeight)[0]
    let scaleOutputRange = transformParamHandler(index,itemHeight)[1]
    let opacityOutputRange = transformParamHandler(index,itemHeight)[2]

    const [scale,opacity] = transformHandler(inputRange,scaleOutputRange,scrollY,opacityOutputRange)

  const id = item.id ? item.id : 'avatar/mmrddmrff9ezsogu4vjm'
  const [uriImage, setUriImage] = useState(null)

  useEffect(()=>{
    const fetchUri = async () =>{
      const mUri = await obtenirPhoto(id)
    console.log('m uri :',mUri)
      setUriImage(mUri)
    }
    fetchUri()
  },[])
  
    return (
      <Animated.View style={[styles.item, { opacity, transform: [{ scale }] }]}>
        <Pressable 
        onPress={()=>navigation.navigate('Detailles',{data:item,emailUtilisateur:emailUtilisateur})}
        style={{flexDirection:'column'

        }}>
            <Image
            source={{uri : uriImage}}
            style={{ width: 100, height: 100, borderRadius: 50, marginRight:30 }} // Adjust width, height, and borderRadius
          />
          <Description styles={styles} item={item}/>
        </Pressable>
        <MonCarousel setActiveCarousel={setActiveCarousel} activeCarousel={activeCarousel} photos={item}/>
      </Animated.View>
    );
  };


export default RenderItem;



