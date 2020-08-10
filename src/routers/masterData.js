const express = require("express");
const Router = express.Router();

const masterController = require("../controllers/master");

Router.get("/sekolah", masterController.getDataSekolah);
Router.get("/siswa", masterController.getDataSiswa);

module.exports = Router;
