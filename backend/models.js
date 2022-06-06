const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  zone_id: {
    type: String,
  },
  raw: {
    type: Number,
    default: 0,
  },
  gender: {
    type: String,
  },
  msongolt: {
    type: String,
  },
  gernom: {
    type: String,
  },
  book_cout: {
    type: String,
  },
  eyeshbeldgzr: {
    type: String,
  },
  eyeshbook: {
    type: String,
  },


});

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;