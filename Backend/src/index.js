const express = require("express");
const generateToken = require("./controllers/registration.controller");
const cors = require("cors");
const app = express();
const passport = require("./configs/google-oauth");
app.use(cors());
app.use(express.json());

const bodyCareController = require("./controllers/bodyCare.controller");
const hairCareController = require("./controllers/hairCare.controller");

const serumController = require("./controllers/serum.controller");
const moisturizerController = require("./controllers/moisturizer.contoller");

const register = require("./controllers/registration.controller");
const login = require("./controllers/login.controllers");

app.use("/bodycare", bodyCareController);
app.use("/haircare", hairCareController);
app.use("/serum", serumController);
app.use("/moisturizer", moisturizerController);

app.use("/login", login);
app.use("/register", register);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),

  function (req, res) {
    const token = generateToken(req.user);
    res.redirect("http://127.0.0.1:5501/Frontend/index.html");
    return res.status(200).send({ user: req.user, token });
  }
);

module.exports = app;
