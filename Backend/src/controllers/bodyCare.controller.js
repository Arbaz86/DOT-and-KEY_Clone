const express = require("express");
// const app = require("..")
const router = express.Router();
const Bodycare = require("../models/bodyCare.model");
const Bodybutter = require("../models/bodybutter.model");
const Bodyserum = require("../models/bodyserum.model");
const Bodyscrub = require("../models/bodyscrub.model");
const Bodycombo = require("../models/combo.model");

router.get("", async (req, res) => {
  try {
    const bodyCare = await Bodycare.find().lean().exec();
    return res.status(200).send(bodyCare);
  } catch (err) {
    return res.status(500).send({ message: message.err });
  }
});

router.get("/butter", async (req, res) => {
  try {
    const bodybutter = await Bodybutter.find().lean().exec();
    return res.status(200).send(bodybutter);
  } catch (err) {
    return res.status(500).send({ message: message.err });
  }
});

router.get("/serum", async (req, res) => {
  try {
    const bodyserum = await Bodyserum.find().lean().exec();
    return res.status(200).send(bodyserum);
  } catch (err) {
    return res.status(500).send({ message: message.err });
  }
});
router.get("/scrub", async (req, res) => {
  try {
    const bodyscrub = await Bodyscrub.find().lean().exec();
    return res.status(200).send(bodyscrub);
  } catch (err) {
    return res.status(500).send({ message: message.err });
  }
});

router.get("/combo", async (req, res) => {
  try {
    const bodycombo = await Bodycombo.find().lean().exec();
    return res.status(200).send(bodycombo);
  } catch (err) {
    return res.status(500).send({ message: message.err });
  }
});

module.exports = router;
