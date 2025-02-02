const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//
const User = mongoose.model("users");

//
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
//

//
//
//google
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //we already a record with the given profile.id
          done(null, existingUser);
        } else {
          //we dont have a user record create a new one
          new User({
            googleId: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
      //
      console.log(profile.id);
    }
  )
);
