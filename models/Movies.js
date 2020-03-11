var mongoose = require("mongoose");

var MovieSchema = new mongoose.Schema(
  {
    title: String,
    poster_path: String,
    overview: String,
    vote: String
  },
  { timestamps: true }
);

mongoose.model("Movie", MovieSchema);
