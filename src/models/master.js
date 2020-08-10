const conn = require("../configs/db");
const customQuery = require("../helpers/query");

module.exports = {
  getDataSekolah: () => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT * FROM sekolah", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  getDataSiswa: (page, perPage, q) => {
    customQuery.countRows("siswa").then((res) => {
      console.log(res);
    });

    return new Promise((resolve, reject) => {
      conn.query("SELECT * FROM siswa", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
};
