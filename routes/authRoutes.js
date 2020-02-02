const passport = require("passport");

//exports
module.exports = app => {
  //route Handlers for Google passport
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  //
  app.get("/auth/google/callback", passport.authenticate("google"));
  //
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
  //
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/googleb0a9be55b6273eba.html", (req, res) => {
    res.send("//");
  });
  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google", { failureRedirect: "/login" }),
  //   function(req, res) {
  //     // Successful authentication, redirect home.
  //     res.redirect("/");
  //   }
  // );
  //
};
