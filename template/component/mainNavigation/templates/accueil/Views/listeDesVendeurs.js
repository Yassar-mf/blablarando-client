import React, { useRef, useState } from 'react';
import { View, Text, Animated, FlatList } from 'react-native';
import RItem from './flatListItemTemplate'
import styles from './styles'
<<<<<<< HEAD
import Dim from '../../../../../Constants/Dimensions'
=======
import Dim from '../Constants/Dimensions'
>>>>>>> 3da4c8d (repush)
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const App = ({ navigation, email, listeVente}) => {
  const [activeCarousel, setActiveCarousel] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const itemHeight = Dim.itemHeight;
  return (
    <View style={styles.container}>
      <Text>{email=='email'?'':email}</Text>
      <AnimatedFlatList
        data={listeVente}
<<<<<<< HEAD
        renderItem={({item,index}) =><RItem item={item} index={index} styles={styles} scrollY={scrollY} itemHeight={itemHeight} navigation={navigation} setActiveCarousel={setActiveCarousel}
                                       activeCarousel={activeCarousel}/>}
        keyExtractor={(item,index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
=======
        renderItem={({item,index}) =>{
              return (<RItem item={item} 
                index={index} 
                styles={styles} 
                scrollY={scrollY} 
                itemHeight={itemHeight} 
                navigation={navigation} 
                setActiveCarousel={setActiveCarousel}                      
                activeCarousel={activeCarousel}/>)

            }
        }    
        keyExtractor={(item,index) => index.toString()}
        onScroll={
          Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY  } } }],
              { useNativeDriver: true }
>>>>>>> 3da4c8d (repush)
        )}
        scrollEnabled={activeCarousel === null}
        nestedScrollEnabled = {true}
      />
    </View>
  );
};



export default App;