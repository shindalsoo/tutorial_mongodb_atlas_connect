const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  age: {
    require: true,
    type: Number,
  },
});

const model = mongoose.model("Shindalsoo", dataSchema);
module.exports = model;
