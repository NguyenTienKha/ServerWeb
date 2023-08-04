const Note = require("../models/note.js");

exports.createNote = async (req, res) => {
  const { content } = req.body;

  try {
    const newNote = new Note({
      content
    });
    await newNote.save();


    res.status(200).json({ note: newNote });
  } catch (err) {
    console.error(err);
  }
};
