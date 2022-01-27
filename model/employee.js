const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  department: {
    type: String,
  },
  salary: {
    type: Number,
  },
});

module.exports = mongoose.model("Employee", userSchema);
