"use strict";

const crypto = require("crypto");

module.exports = {
    generateSalt() {
        let salt = crypto.randomBytes(128).toString("base64");
        return salt;
    },
    getPassHash(salt, pwd) {
        let passHash = crypto
            .createHmac("sha256", salt)
            .update(pwd)
            .digest("hex");

        return passHash;
    }
};