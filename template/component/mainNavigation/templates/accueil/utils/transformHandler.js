const monTransformHandler = (inputRange,scaleOutputRange,scrollY,opacityOutputRange) => {

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: scaleOutputRange,
    });

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: opacityOutputRange,
<<<<<<< HEAD
=======
      extrapolate: "clamp",
>>>>>>> 3da4c8d (repush)
    });

    return [scale,opacity]


}

export default monTransformHandler