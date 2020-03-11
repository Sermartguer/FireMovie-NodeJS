var express = require("express");
var app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/firemovietest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require("./models/Movies");
app.use(require("./routes"));

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
