var mongoose = require('mongoose');

mongoose.connect('');

module.exports = mongoose.connection;
