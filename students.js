const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  college: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Student', studentSchema);