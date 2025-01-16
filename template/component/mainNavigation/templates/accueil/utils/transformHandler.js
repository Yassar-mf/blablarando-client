const monTransformHandler = (inputRange,scaleOutputRange,scrollY,opacityOutputRange) => {

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: scaleOutputRange,
    });

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: opacityOutputRange,
    });

    return [scale,opacity]


}

export default monTransformHandler