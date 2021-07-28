const express = require("express");
const router = express.Router();
const Result = require("../models/result");

router.get("/", async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getResult, (req, res) => {
  res.json(res.result);
});

// Creating one
router.post("/", async (req, res) => {
  if (req.body[0]) {
    Result.insertMany(req.body)
      .then((r) => {
        res.status(201).json(r);
      })
      .catch((e) => {
        res.status(400).json({ message: e.message });
      });
  } else {
    const result = new Result({
      version: req.body.version,
      status: req.body.status,
      description: req.body.description,
      issueUrl: req.body.issueUrl,
      test: req.body.test,
    });
    try {
      const newResult = await result.save();
      res.status(201).json(newResult);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
});

// Updating One
router.patch("/:id", getResult, async (req, res) => {
  if (req.body._id != null) {
    res.result._id = req.body._id;
  }
  if (req.body.version != null) {
    res.result.version = req.body.version;
  }
  if (req.body.status != null) {
    res.result.status = req.body.status;
  }
  if (req.body.description != null) {
    res.result.description = req.body.description;
  }
  if (req.body.issueUrl != null) {
    res.result.issueUrl = req.body.issueUrl;
  }
  if (req.body.date != null) {
    res.result.date = req.body.date;
  }
  if (req.body.test != null) {
    res.result.test = req.body.test;
  }
  try {
    const resultResult = await res.result.save();
    res.json(resultResult);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", getResult, async (req, res) => {
  try {
    await res.result.remove();
    res.json({ message: "Deleted Result" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getResult(req, res, next) {
  let result;
  try {
    result = await Result.findById(req.params.id)
      .populate("test")
      .then((r) => r);
    if (result == null) {
      return res.status(404).json({ message: "Cannot find result" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.result = result;
  next();
}

module.exports = router;
