"use strict";

const User = require("../models/user");
const passport = require("passport");
const encryption = require("../utils/encryption");
const config = require("../config");
const jwt = require('jwt-simple');

function getToken(headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
}

module.exports = () => {
    return {
        registerUser(req, res) {
            let body = req.body;

            User.findOne({ username: body.username }, (err, user) => {
                if (err) {
                    res.json(err);
                    return;
                }

                if (user) {
                    res.json({ message: `User with username "${body.username}" already exists.` });
                    return;
                }

                let salt = encryption.generateSalt();
                let passHash = encryption.getPassHash(salt, body.passHash);
                let userLikeObject = {
                    firstName: body.firstName,
                    lastName: body.lastName,
                    age: body.age,
                    gender: body.gender,
                    country: body.country,

                    email: body.email,
                    profilePictures: body.profilePictures,
                    families: body.families,
                    createdOn: body.createdOn,

                    username: body.username,
                    salt: salt,
                    passHash: passHash,

                    role: body.role,
                    fbId: body.fbId,
                    fbToken: body.fbToken,
                };


                console.log(userLikeObject);
                var newUser = new User(userLikeObject);

                //return new Promise(function(resolve, reject) {
                    newUser.save(function(error, dbUser) {
                        if (error) {
                            res.json(error);
                        }

                        res.json(dbUser);
                    });
                //});

                // TODO is done on the client
                // let salt = encryption.getSalt();
                // let passHash = encryption.getPassHash(salt, body.password);
                // body.salt = salt;
                // body.passHash = passHash;

                // User.create(body, (error, result) => {
                //     if (error) {
                //         // res.json(error);
                //         res.json("Hope this is the error");
                //         return;
                //     }
                //
                //     res.json({
                //         id: result._id,
                //
                //         firstName: result.firstName,
                //         lastName: result.lastName,
                //         age: result.age,
                //         gender: result.gender,
                //         country: result.country,
                //
                //         email: result.email,
                //         profilePictures: result.profilePictures,
                //         families: result.families,
                //         createdOn: result.createdOn,
                //
                //         username: result.username,
                //         salt: result.salt,
                //         passHash: result.passHash,
                //
                //         role: result.role,
                //         fbId: result.fbId,
                //         fbToken: result.fbToken,
                //
                //     });
                // });
            })
        },

        loginUser(req, res, next) {
            let body = req.body;

            User.findOne({ username: body.username }, (err, user) => {
                if (err) {
                    throw err;
                }

                if (!user) {
                    res.json("{\"error\": \"Invalid username or password.\"}");
                } else {
                    if (user.isValidPassword(body.password)) {
                        let token = 'JWT ' + jwt.encode(user, config.jwtSecret);
                        let result = user;
                        result['token'] = token;
                        // let result = {
                        //     token,
                        //     username: user.username,
                        //     firstname: user.firstname,
                        //     lastname: user.lastname,
                        //     _id: user._id,
                        //     about: user.about,
                        //     signature: user.signature,
                        //     imageDataUrl: user.imageDataUrl
                        // };

                        return res.json({ result });
                    }

                    return res.json("{\"error\": \"Invalid username or password.\"}");
                }
            });
        },
        logoutUser(req, res) {
            req.logout();
            res.sendStatus(200);
        },
        verifyLogin(req, res) {
            var token = getToken(req.headers);
            if (token) {
                let decoded = jwt.decode(token, config.jwtSecret);
                User.findOne({
                    username: decoded.username
                }, function (err, user) {
                    if (err) throw err;

                    if (!user) {
                        return res.json({ success: false, message: 'User not found.' });
                    } else {
                        res.json({
                            success: true, user: {
                                token,
                                username: user.username,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                _id: user._id,
                                about: user.about,
                                signature: user.signature,
                                imageDataUrl: user.imageDataUrl
                            }
                        });
                    }
                });
            } else {
                return res.json({ success: false, message: "No token provided" });
            }
        }
    };
};