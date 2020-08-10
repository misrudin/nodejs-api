const express = require("express");

const Router = express.Router();

const masterData = require("./masterData");
Router.use("/master", masterData);

module.exports = Router;
