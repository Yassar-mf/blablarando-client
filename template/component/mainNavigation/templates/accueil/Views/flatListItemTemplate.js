<<<<<<< HEAD

import React, { useEffect, useState } from 'react';
import { View, Text, Image,StyleSheet, Animated,FlatList, Pressable } from 'react-native';

import transformParamH from '../utils/transformParamHandler'
import transformH from '../utils/transformHandler'
import obtenirPhoto from '../utils/obtenirPhoto'
import Description from './FLITdesc'
import MonCarousel from './MonCarousel'
const RenderItem = ({ item, index, scrollY, styles, itemHeight, navigation , setActiveCarousel,activeCarousel}) => {
  
    let inputRange = transformParamH(index,itemHeight)[0]
    let scaleOutputRange = transformParamH(index,itemHeight)[1]
    let opacityOutputRange = transformParamH(index,itemHeight)[2]
    const id = item.id ? item.id : 'avatar/mmrddmrff9ezsogu4vjm'
    const [uriImage, setUriImage] = useState(null)
    const [scale,opacity] = transformH(inputRange,scaleOutputRange,scrollY,opacityOutputRange)

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
        onPress={()=>navigation.navigate('Login')}
        style={{flexDirection:'column',

        }}>
          <Image
            source={{uri: uriImage}}
            style={{ width: 100, height: 100, borderRadius: 50, marginRight:30 }} // Adjust width, height, and borderRadius
          />

          <Description styles={styles} item={item}/>
        </Pressable>
        <MonCarousel setActiveCarousel={setActiveCarousel} activeCarousel={activeCarousel} photos={item}/>
      </Animated.View>
    );
  };


export default RenderItem;

/*

<Animated.View style={[styles.item, { opacity, transform: [{ scale }] }]}>
  <Pressable 
  onPress={()=>navigation.navigate('Login')}
  style={{flexDirection:'row'

  }}>
    <Image
      source={{uri: uriImage}}
      style={{ width: 100, height: 100, borderRadius: 50, marginRight:30 }} // Adjust width, height, and borderRadius
    />

    <Description styles={styles} item={item}/>
  </Pressable>
</Animated.View>

*/
=======
import React, { useEffect, useState } from "react";
import { Image, Animated, Pressable } from "react-native";
import Description from "./FLITdesc";
import MonCarousel from "./MonCarousel";
import animStyle from "../utils/animStyleHandler";
import fetchUri from "../utils/fetchUri";
import FLIT from "./FLIT";
const RenderItem = ({
  item,
  index,
  scrollY,
  styles,
  itemHeight,
  navigation,
  setActiveCarousel,
  activeCarousel,
}) => {
  const [uriImage, setUriImage] = useState(null);
  useEffect(() => {
    fetchUri(item.id, setUriImage);
  }, []);
  return (
    <FLIT
      uriImage={uriImage}
      item={item}
      activeCarousel={activeCarousel}
      setActiveCarousel={setActiveCarousel}
      index={index}
      scrollY={scrollY}
      itemHeight={itemHeight}
    />
  );
};

export default RenderItem;
>>>>>>> 3da4c8d (repush)
