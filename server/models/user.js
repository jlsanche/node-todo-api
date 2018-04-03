var mongoose = require("mongoose");

var User = mongoose.model("Users", {
  email: {
    type: String,
    required: true,
    trim: true,
    minlegth: 4
  } //remove leading/trailing spaces
});

module.exports = { User };
