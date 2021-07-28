const mongoose = require("mongoose");

const resultsSchema = new mongoose.Schema({
  version: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  issueUrl: {
    type: String,
    required: true,
  },
  test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
  added: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("Result", resultsSchema);
