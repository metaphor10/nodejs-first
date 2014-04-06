var mongoose = require('mongoose');

mongoose.connect('mongodb://root:1492@ds035557.mongolab.com:35557/flights');

module.exports = mongoose.connection;