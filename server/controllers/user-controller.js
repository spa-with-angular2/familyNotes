"use strict";

const User = require("../models/user");

module.exports = () => {
    return {
        getSingleUserData(req, res) {
            let id = req.params.id;
            User.findById(id, (err, user) => {
                if (err) {
                    console.log(err);
                }
                if (!user) return res.json({ success: false, message: "User not found." });
                return res.json({
                    success: true,
                    result: {
                        _id: user._id,

                        firstName: user.firstName,
                        lastName: user.lastName,
                        age: user.age,
                        gender: user.gender,
                        country: user.country,

                        email: user.email,
                        profilePictures: user.profilePictures,
                        families: user.families,
                        createdOn: user.createdOn,

                        username: user.username,
                        salt: user.salt,
                        passHash: user.passHash,

                        role: user.role,
                        fbId: user.fbId,
                        fbToken: user.fbToken
                    }
                });
            });
        },

        getAllUsersData(req, res) {
            User.find({}, (err, users) => {
                if (err) {
                    console.log(err);
                }

                return res.json({
                    success: true,
                    users
                });
            });
        },

        updateUserData(req, res) {
            console.log('-------------------------');

            let user = req.body;
            let id = user._id;

            User.update({ _id: id }, user, function(err, state){
                if (err) {
                    console.log(err);
                }
                if (state.ok !== 1) {
                    return res.json({ success: false, message: "Error updating user data. User not found." });
                }


                User.findById(id, (err, dbUser) => {
                    if (err) {
                        console.log(err);
                    }
                    if (!dbUser) return res.json({ success: false, message: "User not found." });

                    console.log(dbUser);
                    return res.json({
                        success: true,
                        result: dbUser
                    });
                });
                // return res.json({
                //     success: true,
                //     result: user
                // });
            });

        }
    };
};