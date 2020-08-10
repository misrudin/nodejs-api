const conn = require("../configs/db");

module.exports = {
  countRows: (table) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT COUNT(*) FROM ${table}`, (err, result) => {
        if (!err) {
          console.log(result);
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
};
