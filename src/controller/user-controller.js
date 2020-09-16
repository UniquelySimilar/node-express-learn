import User from '../model/user.js';
import pool from '../mysql-conn-pool.js';

class UserController {
  findAll(callback) {
    pool.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;

      // Convert result from array of RowDataPacket objects to array of object literals
      let users = results.map( result => Object.assign({}, result) );

      return callback(users);
    });
  }

  find(id, callback) {
    pool.query('SELECT * FROM users WHERE id=?', [id], function (error, results, fields) {
      if (error) throw error;

      // Convert result from array of RowDataPacket objects to array of object literals
      let users = results.map( result => Object.assign({}, result) );
      let user = null;
      if (users.length > 0) {
        user = users[0];
      }

      return callback(user);
    });
  }

  create(name, callback) {
    pool.query('INSERT INTO users (name) VALUES(?)', [name], function (error, results, fields) {
      if (error) throw error;

      let newUserId = {
        id: results.insertId
      };

      return callback(newUserId);
    });
  }

  // TODO: Re-implement using database
  update(id, name) {
    //return user;
  }

  // TODO: Re-implement using database
  delete(id) {

  }

}

export default UserController;