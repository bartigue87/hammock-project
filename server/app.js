const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

//import routes

//connect to DB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(console.log("Connected to DB!"))
  .catch((err) => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.listen(process.env.PORT || 8000, () => {
  console.log("The server is running on port 8000");
});
