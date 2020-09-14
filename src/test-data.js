import User from './model/user.js';

// Initial test data
const users = [
  new User(1, 'Robin Wieruch'),
  new User(2, 'Dave Davids')
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


export { users, messages };