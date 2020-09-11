const users = [
  {
    id: 1,
    username: 'Robin Wieruch',
  },
  {
    id: 2,
    username: 'Dave Davids',
  }
];
   
const messages = [
  {
    id: 1,
    text: 'Hello World',
    userId: 1,
  },
  {
    id: 2,
    text: 'By World',
    userId: 2,
  }
];

class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }
}

function getNextUserId(userAry) {
  // Calculate next user ID
  let maxCurrentId = userAry.map( (user) => {
    return user.id;
  })
  .reduce( (a, b) => {
    return Math.max(a, b);
  });

  return maxCurrentId + 1;
}

export { users, messages, getNextUserId, User };