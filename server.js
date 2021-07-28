require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db/connect");
const path = require("path");

app.use(express.json());

// CORS starts
const whitelist = ["http://localhost:9000", `${process.env.DASHBOARD_URL}`];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      if (!origin) return callback(null, true);
      if (whitelist.indexOf(origin) === -1) {
        var message =
          "The CORS policy for this origin doesn't allow access from the particular origin.";
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  })
);
// CORS ends

// app.use(cors()); // DEBUG

const baseRouter = require("./routes/base");
app.use("/", baseRouter);

const fullPathRouter = require("./routes/full-path");
app.use("/", fullPathRouter);

const clientsRouter = require("./routes/clients");
app.use("/clients", clientsRouter);

const platformsRouter = require("./routes/platforms");
app.use("/platforms", platformsRouter);

const resultsRouter = require("./routes/results");
app.use("/results", resultsRouter);

const testsRouter = require("./routes/tests");
app.use("/tests", testsRouter);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server Started at port ${process.env.SERVER_PORT}`)
);
