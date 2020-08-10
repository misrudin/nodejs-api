require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.SERVER_PORT;

// app.use('/uploads', express.static("./uploads"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const router = require("./src/routers");

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`\n Running On Port ${port}`);
});
