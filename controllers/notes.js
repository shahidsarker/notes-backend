const notesRouter = require("express").Router();
const Note = require("../models/note");

notesRouter.get("/", async (req, res) => {
  const notes = await Note.find({});
  res.json(notes.map((note) => note.toJSON()));
});

notesRouter.get("/:id", async (req, res, next) => {
  const note = await Note.findById(req.params.id);
  if (note) res.json(note.toJSON());
  else res.status(404).end();
});

notesRouter.post("/", async (req, res, next) => {
  const body = req.body;

  const note = new Note({
    content: body.content,
    important: body.important === undefined ? false : body.important,
    date: new Date(),
  });

  try {
    const savedNote = await note.save();
    res.json(savedNote.toJSON());
  } catch (exception) {
    next(exception);
  }
});

notesRouter.delete("/:id", (req, res, next) => {
  Note.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
});

notesRouter.put("/:id", (req, res, next) => {
  const body = req.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(req.params.id, note, {
    new: true,
  })
    .then((updatedNote) => res.json(updatedNote.toJSON()))
    .catch((error) => next(error));
});

module.exports = notesRouter;
