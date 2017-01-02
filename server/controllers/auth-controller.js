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

            User.findOne({ username: body.username }, (err, dbUser) => {
                if (err) {
                    res.json(err);
                    return;
                }
                if (dbUser) {
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

                newUser.save(function(error, dbUser) {
                    if (error) {
                        res.json(error);
                    }

                    res.json(dbUser);
                });
            })
        },

        loginUser(req, res, next) {
            let body = req.body;

            User.findOne({ username: body.username }, (err, dbUser) => {
                if (err) {
                    throw err;
                }

                if (!dbUser) {
                    res.json("{\"error\": \"Invalid username or password.\"}");
                } else {
                    if (dbUser.isValidPassword(body.password)) {
                        let token = 'JWT ' + jwt.encode(dbUser, config.jwtSecret);

                        let result = {
                            token: token,

                            firstName: dbUser.firstName,
                            lastName: dbUser.lastName,
                            age: dbUser.age,
                            gender: dbUser.gender,
                            country: dbUser.country,

                            email: dbUser.email,
                            profilePictures: dbUser.profilePictures,
                            families: dbUser.families,
                            createdOn: dbUser.createdOn,

                            username: dbUser.username,
                            salt: dbUser.salt,
                            passHash: dbUser.passHash,

                            role: dbUser.role,
                            fbId: dbUser.fbId,
                            fbToken: dbUser.fbToken,
                        };

                        return res.json({result});
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
                console.log('decoded' + JSON.stringify(decoded));
                console.log('decoded.username' + decoded.username);
                User.findOne({
                    username: decoded.username
                }, function (err, dbUser) {
                    if (err) {
                        throw err;
                    }

                    if (!dbUser) {
                        res.json("{\"error\": \"User login verification failed. User not found. Please logout and login again.\"}");
                    } else {
                        // if (dbUser.isValidPassword(body.password)) {
                            let token = 'JWT ' + jwt.encode(dbUser, config.jwtSecret);

                            let result = {
                                token: token,

                                firstName: dbUser.firstName,
                                lastName: dbUser.lastName,
                                age: dbUser.age,
                                gender: dbUser.gender,
                                country: dbUser.country,

                                email: dbUser.email,
                                profilePictures: dbUser.profilePictures,
                                families: dbUser.families,
                                createdOn: dbUser.createdOn,

                                username: dbUser.username,
                                salt: dbUser.salt,
                                passHash: dbUser.passHash,

                                role: dbUser.role,
                                fbId: dbUser.fbId,
                                fbToken: dbUser.fbToken,
                            };
                            console.log('result' + JSON.stringify(result));

                            return res.json({result});
                        //}

                        return res.json("{\"error\": \"User login verification failed.\"}");
                    }
                    // if (!dbUser) {
                    //     return res.json({ success: false, message: 'User not found.' });
                    // } else {
                    //     console.log('dbUser' + dbUser);
                    //     return res.json({
                    //         success: true,
                    //         user: dbUser
                    //     });
                    // }
                });
            } else {
                return res.json({ success: false, message: "No token provided" });
            }
        }
    };
};