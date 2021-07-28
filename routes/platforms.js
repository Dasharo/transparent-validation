const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
const Platform = require("../models/platform");

router.get("/", async (req, res) => {
  try {
    const platforms = await Platform.find();
    res.json(platforms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getPlatform, (req, res) => {
  res.json(res.platform);
});

// Getting platform with tests
router.get("/:id/tests", getPlatformTests, (req, res) => {
  res.json(res.platformTests);
});

// Creating one
router.post("/", async (req, res) => {
  const platform = new Platform({
    name: req.body.name,
    nameSlug: req.body.nameSlug,
    firmwareType: req.body.firmwareType,
    firmwareTypeSlug: req.body.firmwareTypeSlug,
    description: req.body.description,
    client: req.body.client,
  });
  try {
    const newPlatform = await platform.save();
    res.status(201).json(newPlatform);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.patch("/:id", getPlatform, async (req, res) => {
  if (req.body._id != null) {
    res.platform._id = req.body._id;
  }
  if (req.body.name != null) {
    res.platform.name = req.body.name;
  }
  if (req.body.firmwareType != null) {
    res.platform.firmwareType = req.body.firmwareType;
  }
  if (req.body.description != null) {
    res.platform.description = req.body.description;
  }
  if (req.body.clientId != null) {
    res.platform.client = req.body.client;
  }
  try {
    const updatedPlatform = await res.platform.save();
    res.json(updatedPlatform);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", getPlatform, async (req, res) => {
  try {
    await res.platform.remove();
    res.json({ message: "Deleted Platform" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getPlatform(req, res, next) {
  let platform;
  try {
    platform = await Platform.findById(req.params.id)
      .populate("client")
      .then((r) => r);
    if (platform == null) {
      return res.status(404).json({ message: "Cannot find platform" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.platform = platform;
  // platform.populate("clientId").then((platform) => console.log(platform));
  next();
}

async function getPlatformTests(req, res, next) {
  let platformTests;
  try {
    platformTests = await Platform.findById(req.params.id)
      .populate({
        path: "tests",
        match: { platform: req.params.id },
      })
      .then((e) => e);
    if (platformTests == null) {
      return res.status(404).json({ message: "Cannot find client" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.platformTests = platformTests;
  next();
}

module.exports = router;
