const mongoose = require("mongoose");

const clientsSchema = new mongoose.Schema(
  {
    apiKey: {
      type: String,
      required: true,
    },
    secretKey: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    enabled: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    added: {
      type: Date,
      required: false,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true } }
);

clientsSchema.virtual("platforms", {
  ref: "Platform",
  localField: "_id",
  foreignField: "client",
  justOne: false,
  options: { sort: { name: -1 } },
});

module.exports = mongoose.model("Client", clientsSchema);
