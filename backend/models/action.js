const mongoose = require('mongoose');

// Schema setup
const actionSchema = mongoose.Schema({
  title: { type: String, required: true},
  completed: { type: Number, default: 0}
});

module.exports = mongoose.model('action', actionSchema);
