

import * as React from 'react';
import { Dimensions, Text, View,Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Constants from '../../../../../Constants/Dimensions'
import { GestureDetector, Gesture, GestureHandlerRootView} from 'react-native-gesture-handler';

import listeImages from './listeImages'

const IMAGES = listeImages

function Index({photos, activeCarousel,setActiveCarousel, index}) {
    const width = Dimensions.get('window').width;
    const gesture = Gesture.Pan()
        .onBegin(()=>setActiveCarousel(index))
        .onFinalize(()=>setActiveCarousel(null))
    return (

        <View style={{ width:width*0.915,
                       height:width*0.4,
                       justifyContent:'flex-end',
                       alignItems: 'center',
                       borderBottomLeftRadius: Constants.borderRadius,
                       borderBottomRightRadius: Constants.borderRadius,
                     }}>

            <Carousel
                loop
                width={width*0.915}
                height={width*0.4}
                autoPlay={true}
                style={{borderBottomLeftRadius: Constants.borderRadius,
                          borderBottomRightRadius: Constants.borderRadius
                       }}
                data={IMAGES}
                scrollAnimationDuration={5000}
                renderItem={({ item,index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image source={{uri: item}} style={{width: "100%", height: "100%"}}/>
                    </View>
                )}
            />

        </View>

    );
}

export default Index;
=======
import * as React from "react";
import { Dimensions, Text, View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Constants from "../Constants/Dimensions";
import {
    Gesture
} from "react-native-gesture-handler";

import listeImages from "./listeImages";

const IMAGES = listeImages;

function Index({ photos, activeCarousel, setActiveCarousel, index }) {
    const width = Dimensions.get("window").width;
    const gesture = Gesture.Pan()
        .onBegin(() => setActiveCarousel(index))
        .onFinalize(() => setActiveCarousel(null));
    return (
        <View
            style={{
                width: width * 0.92,
                height: width * 0.5,
                justifyContent: "flex-end",
                alignItems: "center",
                borderBottomLeftRadius: Constants.borderRadius,
                borderBottomRightRadius: Constants.borderRadius,
            }}
        >
            <Carousel
                loop
                width={width * 0.921}
                height={width * 0.4}
                autoPlay={true}
                style={{
                    borderBottomLeftRadius: Constants.borderRadius,
                    borderBottomRightRadius: Constants.borderRadius,
                }}
                data={IMAGES}
                scrollAnimationDuration={5000}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            source={{ uri: item }}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </View>
                )}
            />
        </View>
    );
}

export default Index;
>>>>>>> 3da4c8d (repush)
