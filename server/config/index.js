"use strict";

const path = require("path");

const rootPath = path.join(__dirname, "/../../");

let connectionStrings = {
    production: process.env.CONNECTION_STRING,
    // development: "mongodb://localhost:27017/family-notes"
    development: "mongodb://admin:admin@ds151108.mlab.com:51108/family-notes"
};

module.exports = {
    environment: process.env.NODE_ENV || "development",
    // connectionString: connectionStrings[process.env.NODE_ENV || "development"],
    connectionString: connectionStrings["development"],
    port: process.env.PORT || 3003,
    rootPath,
    jwtSecret: "secretjwtomfgjeesuswtf"
};