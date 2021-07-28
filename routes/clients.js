const express = require("express");
const router = express.Router();
const Client = require("../models/client");

router.get("/", async (req, res) => {
  if (req.query.apikey) {
    router.get("/:id/", getClientApiKey, (req, res) => {
      res.json(res.clientPlatformsApikey);
    });
  }
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getClient, (req, res) => {
  res.json(res.client);
});

// Get client and platforms
router.get("/:id/platforms", getClientPlatforms, (req, res) => {
  res.json(res.clientPlatforms);
});

// Creating one
router.post("/", async (req, res) => {
  const client = new Client({
    apiKey: req.body.apiKey,
    secretKey: req.body.secretKey,
    name: req.body.name,
    enabled: req.body.enabled,
    description: req.body.description,
    date: req.body.date,
  });
  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.patch("/:id", getClient, async (req, res) => {
  if (req.body._id != null) {
    res.client._id = req.body._id;
  }
  if (req.body.apiKey != null) {
    res.client.apiKey = req.body.apiKey;
  }
  if (req.body.secretKey != null) {
    res.client.secretKey = req.body.secretKey;
  }
  if (req.body.name != null) {
    res.client.name = req.body.name;
  }
  if (req.body.enabled != null) {
    res.client.enabled = req.body.enabled;
  }
  if (req.body.description != null) {
    res.client.description = req.body.description;
  }
  if (req.body.date != null) {
    res.client.date = req.body.date;
  }
  try {
    const updatedClient = await res.client.save();
    res.json(updatedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", getClient, async (req, res) => {
  try {
    await res.client.remove();
    res.json({ message: "Deleted Client" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getClient(req, res, next) {
  let client;
  try {
    client = await Client.findById(req.params.id);
    if (client == null) {
      return res.status(404).json({ message: "Cannot find client" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.client = client;
  next();
}

async function getClientPlatforms(req, res, next) {
  let clientPlatforms;
  try {
    clientPlatforms = await Client.findById(req.params.id)
      .populate({
        path: "platforms",
        match: { client: req.params.id },
      })
      .then((e) => e);
    console.log("clientPlatforms", clientPlatforms);
    if (clientPlatforms == null) {
      return res.status(404).json({ message: "Cannot find client" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.clientPlatforms = clientPlatforms;
  next();
}

async function getClientApiKey(req, res, next) {
  let clientApikey;
  try {
    clientApikey = await Client.findById({ apiKey: req.query.apikey })
      .populate({
        path: "platforms",
        match: { client: req.params.id },
      })
      .then((e) => e);
    console.log("clientPlatforms", clientApikey);
    if (clientApikey == null) {
      return res.status(404).json({ message: "Cannot find client" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.clientPlatformsApikey = clientApikey;
  next();
}

module.exports = router;
