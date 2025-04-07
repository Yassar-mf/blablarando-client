import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions,Text, Pressable, Button } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import {AntDesign, FontAwesome5} from '@expo/vector-icons';
import D from '../../Constants/Dimensions'
import Couleurs from '../../Constants/Couleurs'


const MyComponent = ({animatedStyles,styles,handlePress,name,titre}) => {

  return (
      <Animated.View style={[styles.box, animatedStyles]}>
        <Pressable style={styles.prs} onPress={handlePress}>
          {name=="user"?(<FontAwesome5 name="user" size={24} color={Couleurs.neutralColor_one} />):
          (<AntDesign name="car" size={24} color={Couleurs.neutralColor_one} />)}
          <Text style={styles.txt}>{titre}</Text>
        </Pressable>
      </Animated.View>
  );
};



export default MyComponent;