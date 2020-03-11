var express = require("express");
var app = express();
var bodyParser = require("body-parser");

const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/firemovietest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require("./models/Movies");
app.use(require("./routes"));

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
