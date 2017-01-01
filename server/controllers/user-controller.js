"use strict";

const User = require("../models/user");

module.exports = () => {
    return {
        getSingleUserData(req, res) {
            let id = req.params.id;
            User.findById(id, (err, user) => {
                if (err) console.log(err);
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
            let body = req.body;
            let updateObject = {};

            // if (body.about) updateObject.about = body.about;
            // if (body.signature) updateObject.signature = body.signature;
            // if (body.imageDataUrl) updateObject.imageDataUrl = body.imageDataUrl;

            User.findByIdAndUpdate(body._id, updateObject, (err, user) => {
                if (err) {
                    console.log(err);
                    return res.json({ success: false, message: "Error on the server. Check updateUserData() in user-controller" });
                }

                User.findById(body._id, (error, data) => {
                    if (error) {
                        console.log(error);
                        return res.json({ success: false, message: "Error on the server. Check updateUserData() in user-controller" });
                    }

                    res.json({
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
            });
        },
    };
};