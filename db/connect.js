const mongoose = require("mongoose");
require("dotenv/config");

const db = mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) =>
    console.log((err = !null ? "connection successful" : "error: " + err))
);

module.exports = db;
