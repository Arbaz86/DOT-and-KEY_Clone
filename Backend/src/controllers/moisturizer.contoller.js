const express = require("express");

const router = express.Router();

const Moisturizer = require("../models/moisturizer.model");

router.get("", async (req, res) => {
  try {
    const moisturizer = await Moisturizer.find().lean().exec();
    return res.status(200).send(moisturizer);
  } catch (err) {
    return res.status(500).send({ message: message.err });
  }
});

module.exports = router;
