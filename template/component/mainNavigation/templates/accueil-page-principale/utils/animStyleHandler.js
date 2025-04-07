import transformParamH from "./transformParamHandler";
import transformH from "./transformHandler";
const animStyleHandler = (index, itemHeight, item, scrollY) => {
  let inputRange = transformParamH(index, itemHeight)[0];
  let scaleOutputRange = transformParamH(index, itemHeight)[1];
  let opacityOutputRange = transformParamH(index, itemHeight)[2];
  const [scale, opacity] = transformH(
    inputRange,
    scaleOutputRange,
    scrollY,
    opacityOutputRange,
  );

  return { opacity, transform: [{ scale }] };
};

export default animStyleHandler;
