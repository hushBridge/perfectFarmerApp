const keys = require("./keys");
if (process.env.NODE_ENV === "production") {
  //run prod vairable
  module.exports = require("./prod");
} else {
  //run dev variable
  module.exports = require("./dev");
}
