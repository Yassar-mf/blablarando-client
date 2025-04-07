import { Image, Animated, Pressable} from "react-native";
import Description from "./FLITdesc";
import MonCarousel from "./MonCarousel";
import animStyle from "../utils/animStyleHandler"
import styles from "./styles"
import { useNavigation, useRoute } from '@react-navigation/native';

const AnimatedView = ({index,uriImage, item, activeCarousel, setActiveCarousel, scrollY,itemHeight, email }) => {
  
  const navigation = useNavigation();
  const animatedStyle = animStyle(index, itemHeight, item, scrollY);
  console.log("animatedStyle opacity :", animatedStyle.opacity);
  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      <Pressable
        onPress={()=>navigation.navigate('Detailles',{data:item,emailUtilisateur:email})}
        style={{ flexDirection: "column" }}
      >
        <Image  source={{ uri: uriImage }} 
          style={styles.photo} />
        <Description styles={styles} item={item} />
      </Pressable>
      <MonCarousel
        setActiveCarousel={setActiveCarousel}
        activeCarousel={activeCarousel}
        photos={item}
      />
    </Animated.View>
  );
}

export default AnimatedView

