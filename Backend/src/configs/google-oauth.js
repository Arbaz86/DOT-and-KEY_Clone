const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");

const User = require("../models/users.model");

require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      let user = await User.findOne({ email: profile._json.email })
        .lean()
        .exec();
      console.log(profile._json);
      if (!user) {
        user = await User.create({
          email: profile._json.email,
          firstname: profile._json.given_name,
          lastname: profile._json.family_name,
          password: uuidv4(),
          // role : ["customer"]
        });
      }

      console.log(user);
      return cb(null, user);
    }
  )
);

module.exports = passport;
