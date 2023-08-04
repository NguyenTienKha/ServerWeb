const router = require("express").Router();
const postController = require("../controllers/note");

const {
  createNote
} = postController;

router.post("/", createNote);

module.exports = router;
