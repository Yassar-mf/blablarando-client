import { Image, Animated, Pressable} from "react-native";
import Description from "./FLITdesc";
import MonCarousel from "./MonCarousel";
import animStyle from "../utils/animStyleHandler"
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';

const AnimatedView = ({index,uriImage, item, activeCarousel, setActiveCarousel, scrollY,itemHeight }) => {
  const navigation = useNavigation();
  const animatedStyle = animStyle(index, itemHeight, item, scrollY);
  console.log("animatedStyle opacity :", animatedStyle.opacity);
  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      <Pressable
        onPress={() => navigation.navigate("Login")}
        style={{ flexDirection: "column", justifyContent:"center", alignItems:"center" }}
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