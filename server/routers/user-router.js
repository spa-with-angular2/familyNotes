"use strict";

module.exports = ({ app, controllers }) => {
    app.get("/api/users/all", controllers.user.getAllUsersData);
    app.get("/api/users/:id", controllers.user.getSingleUserData);

    app.post("/api/users/:id", controllers.user.updateUserData);
};