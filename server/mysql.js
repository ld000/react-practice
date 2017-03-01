const mysql = require('mysql');
const project = require('../config/project.config');

const pool = mysql.createPool(project.mysql_config);


var query = ({ sql, params = [], callback }) => {
  pool.query(sql, params, (error, results, fields) => {
    if (error) throw error;

    callback(results, fields);
  });
}

var update = ({ sql, params = [], callback }) => {
  pool.query(sql, params, (error, results, fields) => {
    if (error) throw error;

    callback(results, fields);
  });
}

module.exports = {query, update, pool}
