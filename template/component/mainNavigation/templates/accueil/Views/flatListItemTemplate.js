
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
