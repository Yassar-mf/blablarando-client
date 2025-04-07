const monTransformHandler = (index,itemHeight) => {

    let inputRange;
    let scaleOutputRange;
    let opacityOutputRange;

    if (index === 0) {
      // Special handling for the first item
      inputRange = [-1, 0, itemHeight];
      scaleOutputRange = [1, 1, 1];
      opacityOutputRange = [1, 1, 1];
    } else {
      inputRange = [
        -1,
        0,
        itemHeight * index,
        itemHeight * (index + 0.5),
        itemHeight * (index + 1),
      ];
<<<<<<< HEAD
      scaleOutputRange = [0.8, 0.8, 1, 1, 0.8];
      opacityOutputRange = [0.5, 0.5, 1, 1, 0];
=======
      scaleOutputRange = [0.95, 0.95, 1, 1, 0.95];
      opacityOutputRange = [0.5, 0.5, 1, 1, 0.5];
>>>>>>> 3da4c8d (repush)
    }

    return [inputRange,scaleOutputRange,opacityOutputRange]


}

export default monTransformHandler