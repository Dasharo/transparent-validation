const express = require("express");
const router = express.Router();
const Test = require("../models/test");

router.get("/", async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getTest, (req, res) => {
  res.json(res.test);
});

// Getting platform with tests
router.get("/:id/results", getTestResults, (req, res) => {
  res.json(res.testResults);
});

// Creating one
router.post("/", async (req, res) => {
  if (req.body[0]) {
    Test.insertMany(req.body)
      .then((r) => {
        res.status(201).json(r);
      })
      .catch((e) => {
        res.status(400).json({ message: e.message });
      });
  } else {
    const test = new Test({
      name: req.body.name,
      type: req.body.type,
      signature: req.body.signature,
      description: req.body.description,
      platform: req.body.platform,
    });
    try {
      const newTest = await test.save();
      res.status(201).json(newTest);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
});

// Updating One
router.patch("/:id", getTest, async (req, res) => {
  if (req.body._id != null) {
    res.test._id = req.body._id;
  }
  if (req.body.type != null) {
    res.test.type = req.body.type;
  }
  if (req.body.signature != null) {
    res.test.signature = req.body.signature;
  }
  if (req.body.description != null) {
    res.test.description = req.body.description;
  }
  if (req.body.platform != null) {
    res.test.platform = req.body.platform;
  }
  if (req.body.date != null) {
    res.test.date = req.body.date;
  }
  try {
    const newTest = await res.test.save();
    res.json(newTest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", getTest, async (req, res) => {
  try {
    await res.test.remove();
    res.json({ message: "Deleted Test" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getTest(req, res, next) {
  let test;
  try {
    test = await Test.findById(req.params.id)
      .populate("platform")
      .then((r) => r);
    if (test == null) {
      return res.status(404).json({ message: "Cannot find test" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.test = test;
  next();
}
async function getTestResults(req, res, next) {
  let testResults;
  try {
    if (req.query.version) {
      testResults = await Test.findById(req.params.id)
        .populate({
          path: "results",
          match: { test: req.params.id, version: req.query.version },
        })
        .then((e) => e);
    } else {
      testResults = await Test.findById(req.params.id)
        .populate({
          path: "results",
          match: { test: req.params.id },
        })
        .then((e) => e);
    }

    if (testResults == null) {
      return res.status(404).json({ message: "Cannot find test" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.testResults = testResults;
  next();
}

module.exports = router;
