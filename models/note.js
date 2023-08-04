const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  content: String,
});

module.exports = mongoose.model("Note", notesSchema);
