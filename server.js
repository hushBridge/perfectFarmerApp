const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");
//import express from express; (i.e)

///////////////////////////////////////////////////////
//database connection query
mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, () => {
  return { useNewUrlParser: true };
});
//////////////////////////////////////////////////////
const app = express();
//console.log(process.env.USERNAME);
//
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
///
app.use(passport.initialize());
app.use(passport.session());
/////////////////////////////////////////////////////////////
//mongoose models
const UserComp = mongoose.model("usersComp");
//mongoose query
//

/////////////////////////////////////////////////////////////////
//ALL ROUTES
//oauth routes
require("./routes/authRoutes")(app);

//
////////////////////////////////////////
//server ROUTES
//
app.get("/", (req, res) => {
  res.send(`welcome ${process.env.USERNAME}!`);
  //db query
  // new UserComp({
  //   username: process.env.USERNAME,
  //   os: process.env.OS
  // });
  console.log(process.env.OS);
});
//
//
//
//
//
//
//port
const PORT = process.env.PORT || 3000;
app.listen(PORT);
