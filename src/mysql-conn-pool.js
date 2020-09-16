import mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'testuser',
    password        : 'testpwd',
    database        : 'nodeexpress'
  });

export default pool;