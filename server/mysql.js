const mysql = require('mysql');
const project = require('../config/project.config');

const pool = mysql.createPool(project.mysql_config);



var query = (sql, posts, callback) => {
  pool.query(sql, posts, (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
}

var update = (sql, posts, callback) => {

}

// pool.end(function (err) {
//   // all connections in the pool have ended
// });

module.exports = pool
