const express = require("express");

const router = express.Router();

const Haircare = require("../models/hairCare.model");

router.get("", async (req, res) => {
  try {
    const hairCare = await Haircare.find().lean().exec();
    return res.status(200).send(hairCare);
  } catch (err) {
    return res.status(500).send({ message: message.err });
  }
});

module.exports = router;
