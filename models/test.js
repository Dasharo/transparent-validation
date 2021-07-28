const mongoose = require("mongoose");
const Result = require("./result");

const testsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    signature: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    platform: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Platform",
    },
    added: {
      type: Date,
      required: false,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true } }
);

testsSchema.virtual("results", {
  ref: "Result",
  localField: "_id",
  foreignField: "test",
  justOne: false,
  options: { sort: { name: -1 } },
});

module.exports = mongoose.model("Test", testsSchema);
