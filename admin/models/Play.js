var mongoose = require('mongoose');

var PlaySchema = new mongoose.Schema({
  name: String,
  director: String,
});

module.exports = mongoose.model('Play', PlaySchema);
