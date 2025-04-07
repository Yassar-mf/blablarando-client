import React, { useEffect, useState } from "react";
import fetchUri from "../utils/fetchUri";
import FLIT from "./FLIT";
const RenderItem = ({
  item,
  index,
  scrollY,
  itemHeight,
  setActiveCarousel,
  activeCarousel,
  email
}) => {
  console.log("email",email)
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
      email={email}
    />
  );
};

export default RenderItem;
>>>>>>> 3da4c8d (repush)
