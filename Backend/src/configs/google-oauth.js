const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");

const User = require("../models/users.model");

require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID:"374890940304-tioj0d30n6udumcbinv30i00d69b54e5.apps.googleusercontent.com",
      clientSecret:"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",
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
