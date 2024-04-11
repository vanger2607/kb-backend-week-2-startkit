function createRating(obj, weight) {
    return (
      obj.gameplay * weight.gameplay +
      obj.design * weight.design +
      obj.idea * weight.idea
    );
  } 
