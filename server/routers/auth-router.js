"use strict";

const passport = require("passport");

function facebookCallback(req, res) {
    res.json({
        success: true,
        message: "Login successful."
    });
}

module.exports = ({ app, controllers }) => {
    app.post("/api/auth/register", controllers.auth.registerUser);
    app.post("/api/auth/login", controllers.auth.loginUser);
    app.post("/api/auth/logout", controllers.auth.logoutUser);
    app.post("/api/auth/verify", controllers.auth.verifyLogin);

    app.get("/api/auth/facebook", passport.authenticate("facebook"));
    app.get("/api/auth/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/login" }), facebookCallback);
};