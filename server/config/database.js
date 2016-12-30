"use strict";

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// module.exports = config => {
//     mongoose.connect(config.connectionString).catch(console.log);
//
//     let db = mongoose.connection;
//     db.on('error', (err) => console.log(err));
// };

module.exports = function (config) {

    // mongoose.connect('mongodb://localhost/family-notes');
    mongoose.connect(config.connectionString);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('We are now connected to: ' + config.connectionString));
};
