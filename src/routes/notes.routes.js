const { Router } = require("express");
const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require("../controller/notes.controller");

//crear notas
router.get("/notes/add", renderNoteForm);

router.post("/notes/new-note", createNewNote);

//obtener las notas
router.get("/notes", renderNotes);

//editar notas
router.get("/notes/edit/:id", renderEditForm);

router.put("/notes/edit/:id", updateNote);

//eliminar notas
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;
