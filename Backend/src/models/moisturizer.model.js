const mongoose = require("mongoose");

const moisturizerSchema = new mongoose.Schema(
  {
    DispName: { type: String },
    name: { type: String },
    price: { type: Number },
    size: { type: Number },
    discription: { type: String },
    featurHead: { type: String },
    featuresImg: [{ type: String }],
    features: [{ type: String }],
    promo0: { type: String },
    promo2: { type: String },
    promo1: { type: String },
    promo3: { type: String },
    review: { type: Number },
    prodImgUrl: [{ type: String }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("moisturizer", moisturizerSchema);
