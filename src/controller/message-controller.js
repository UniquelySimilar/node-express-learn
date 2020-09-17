import pool from '../mysql-conn-pool.js';

class MessageController {
  findAll(callback) {
    pool.query("SELECT * FROM messages", function(error, results, fields) {
      if (error) throw error;

      // Convert result from array of RowDataPacket objects to array of object literals
      let messages = results.map( result => Object.assign({}, result) );

      return callback(messages);
    });
  }

  find(id, callback) {
    pool.query('SELECT * FROM messages WHERE id = ?', [id], function(error, results, fields) {
      if (error) throw error;

      // Convert result from array of RowDataPacket objects to array of object literals
      let messages = results.map( result => Object.assign({}, result) );
      let message = null;
      if (messages.length > 0) {
        message = messages[0];
      }

      return callback(message);
    });
  }

  findByUser(userId, callback) {
    pool.query('SELECT * FROM messages WHERE user_id = ?', [userId], function(error, results, fields) {
      if (error) throw error;

      return callback(results);
    })
  }

  create(text, userId, callback) {
    pool.query('INSERT INTO messages (text, user_id) VALUES(?, ?)', [text, userId], function(error, results, fields) {
      if (error) {
        console.error(`ERROR: ${error.sqlMessage}`);
      }
      else {
        console.log(results);
      }

      return callback(results);
    })
  }

}

export default MessageController;