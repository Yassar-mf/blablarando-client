import React, { useRef } from 'react';
import { View, Text, Animated, FlatList } from 'react-native';
import RItem from './flatListItemTemplate'
import styles from './styles'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const App = ({ navigation, email, listeVente}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const itemHeight = 200;
  return (
    <View style={styles.container}>
      <Text>{email=='email'?'':email}</Text>
      <AnimatedFlatList
        data={listeVente}
        renderItem={({item,index}) =><RItem item={item} index={index} styles={styles} scrollY={scrollY} itemHeight={itemHeight} navigation={navigation}/>}
        keyExtractor={(item,index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};



export default App;