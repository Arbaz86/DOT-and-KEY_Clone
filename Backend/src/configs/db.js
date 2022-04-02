const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://DotAndKey:DotAndKey@cluster0.j9wm7.mongodb.net/Backend_DOT_AND_KEY"
  );
};

module.exports = connect;
