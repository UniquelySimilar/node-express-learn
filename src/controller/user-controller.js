import User from '../model/user.js';
import Utilities from '../utilities.js';

class UserController {
  constructor() {
    this.users = [];
  }

  findAll() {
    return this.users;
  }

  find(id) {
    return this.users.find( user => user.id == id);
  }

  create(userName) {
    let newId = Utilities.getNextId(this.users);
    let newUser = new User(newId, userName);
    this.users.push(newUser);

    return newUser;
  }

  update(id, userName) {
    let user = this.find(id);
    user.userName = userName;

    return user;
  }

  delete(id) {
    this.users = this.users.filter( user => user.id != id);
  }

}

export default UserController;