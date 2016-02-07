var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  pushup: { type: Array},
});

var User = mongoose.model('User', userSchema);

// Make this available to our other files
module.exports = User;
