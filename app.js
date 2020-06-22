const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const apis = require("./router/api");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static("public"));
app.use("/api", apis);

app.listen(PORT, () => {
  console.log("wer life on " + PORT);
});
