var mongoose = require("mongoose");

var MovieSchema = new mongoose.Schema(
  {
    idMovie: String,
    title: String,
    poster_path: String,
    vote: String
  },
  { timestamps: true }
);

mongoose.model("Movie", MovieSchema);
