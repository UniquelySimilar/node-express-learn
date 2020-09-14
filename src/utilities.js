class Utilities {
  static getNextId(modelAry) {
    if (modelAry.length === 0) {
      return 1;
    }

    let maxCurrentId = modelAry.map( (user) => {
      return user.id;
    })
    .reduce( (a, b) => {
      return Math.max(a, b);
    });

    return maxCurrentId + 1;
  }
    
}

export default Utilities;