class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }

  static getNextId(users) {
    let maxCurrentId = userAry.map( (user) => {
      return user.id;
    })
    .reduce( (a, b) => {
      return Math.max(a, b);
    });
  
    return maxCurrentId + 1;
  }
}

export default User;