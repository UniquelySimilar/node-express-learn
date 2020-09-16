import User from '../model/user.js';
import Utilities from '../utilities.js';
import pool from '../mysql-conn-pool.js';

class UserController {
  constructor() {
    this.users = [];
  }

  findAll() {
    var mappedUsers = [];
    pool.query('SELECT * from users', function (error, results, fields) {
      if (error) throw error;

      // Convert result from array of RowDataPacket objects to array of object literals
      mappedUsers = results.map( result => Object.assign({}, result) );
      console.log(mappedUsers);
    });

    return mappedUsers;
  }

  find(id) {
    return this.users.find( user => user.id == id);
  }

  create(name) {
    let newId = Utilities.getNextId(this.users);
    let newUser = new User(newId, name);
    this.users.push(newUser);

    return newUser;
  }

  update(id, name) {
    let user = this.find(id);
    if (user) {
      user.name = name;
    }

    return user;
  }

  delete(id) {
    this.users = this.users.filter( user => user.id != id);
  }

}

export default UserController;