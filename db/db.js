const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'airbnb',
});

connection.connect();

const insertIntoDB = (id, likes, username, link, tag, photoSet) => {
  const sql = `INSERT INTO photos (id, likes, username, link, tag, photo_set)
               VALUES ('${id}', '${likes}', '${username}', '${link}', '${tag}', '${photoSet}')`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    }
  });
};

const retrieve = (callback) => {
  const sql = `SELECT *
               FROM photos`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      console.log(row);
      callback(row);
    }
  });
};

// connection.end();

module.exports = {
  insertIntoDB,
  retrieve,
};
