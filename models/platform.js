const mongoose = require("mongoose");

const platformsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameSlug: {
      type: String,
      required: true,
    },
    firmwareType: {
      type: String,
      required: true,
    },
    firmwareTypeSlug: {
      type: String,
      required: true,
    },
    latestVersion: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
  },
  { toJSON: { virtuals: true } }
);

platformsSchema.virtual("tests", {
  ref: "Test",
  localField: "_id",
  foreignField: "platform",
  justOne: false,
  options: { sort: { name: -1 } },
});

module.exports = mongoose.model("Platform", platformsSchema);
