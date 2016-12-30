"use strict";

const path = require("path");

const rootPath = path.join(__dirname, "/../../");

let connectionStrings = {
    production: process.env.CONNECTION_STRING,
    development: "mongodb://localhost:27017/family-notes"
};

module.exports = {
    environment: process.env.NODE_ENV || "development",
    connectionString: connectionStrings[process.env.NODE_ENV || "development"],
    port: process.env.PORT || 3003,
    rootPath,
    jwtSecret: "secretjwtomfgjeesuswtf"
};