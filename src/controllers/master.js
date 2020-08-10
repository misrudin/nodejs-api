const masterModel = require("../models/master");
const response = require("../helpers/response");

module.exports = {
  getDataSekolah: (req, res) => {
    masterModel
      .getDataSekolah()
      .then((result) => {
        response.response(res, result, 200);
      })
      .catch((err) => {
        response.response(res, null, 500, err.message);
      });
  },
  getDataSiswa: (req, res) => {
    const { page, perPage, q } = req.query;
    masterModel
      .getDataSiswa(page, perPage, q)
      .then((result) => {
        response.response(res, result, 200);
      })
      .catch((err) => {
        response.response(res, null, 500, err.message);
      });
  },
};
